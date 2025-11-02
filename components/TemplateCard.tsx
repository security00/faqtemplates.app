"use client";

import { useMemo, useState } from "react";
import { getTemplateById, getPlaceholderTemplate, TemplateDetail } from "@/lib/templates";

interface Template {
  id: number;
  category: string;
  title: string;
  description: string;
  questions: number;
  downloads: number;
}

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  const [open, setOpen] = useState(false);

  // Read detail if available; undefined for templates without sample FAQs
  const detail: TemplateDetail | undefined = useMemo(() => {
    return getTemplateById(template.id) || getPlaceholderTemplate(template.id);
  }, [template.id]);

  function slugify(input: string) {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  function toMarkdownFromCard(): string {
    const lines: string[] = [];
    lines.push(`# ${template.title}`);
    lines.push("");
    lines.push(`${template.category} • ${template.questions} questions • ${template.downloads} downloads`);
    lines.push("");
    lines.push(template.description);
    if (detail?.faqs?.length) {
      lines.push("");
      lines.push("## FAQs");
      detail.faqs.forEach((f, i) => {
        lines.push("");
        lines.push(`### ${i + 1}. ${f.question}`);
        lines.push("");
        lines.push(f.answer);
      });
    }
    lines.push("");
    lines.push("— Generated from faqtemplates.app");
    return lines.join("\n");
  }

  function downloadFromCard() {
    const content = toMarkdownFromCard();
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `faq-${slugify(template.title)}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-green-500 hover:shadow-lg transition-all duration-300 bg-white">
      <div className="bg-gradient-to-r from-green-100 to-blue-100 px-6 py-8 text-center">
        <div className="text-4xl font-bold text-green-600 mb-2">{template.questions}</div>
        <p className="text-sm text-gray-600">Questions included</p>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
            {template.category}
          </span>
          <span className="text-xs text-gray-500">{template.downloads} downloads</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-2">{template.title}</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">{template.description}</p>

        <div className="flex gap-2">
          <button
            onClick={downloadFromCard}
            className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors text-center"
          >
            Use Template
          </button>
          <button
            onClick={() => setOpen(true)}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors text-center"
            title={`Preview ${template.title} - ${template.questions} questions included`}
          >
            Preview
          </button>
        </div>
      </div>

      {open && detail && (
        <PreviewModal detail={detail} onClose={() => setOpen(false)} />
      )}
    </div>
  );
}

function PreviewModal({
  detail,
  onClose,
}: {
  detail: TemplateDetail;
  onClose: () => void;
}) {
  function slugify(input: string) {
    return input
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }

  function toMarkdown(d: TemplateDetail) {
    const lines: string[] = [];
    lines.push(`# ${d.title}`);
    lines.push("");
    lines.push(`${d.category} • ${d.questions} questions • ${d.downloads} downloads`);
    lines.push("");
    lines.push(d.description);
    lines.push("");
    lines.push("## FAQs");
    d.faqs.forEach((f, i) => {
      lines.push("");
      lines.push(`### ${i + 1}. ${f.question}`);
      lines.push("");
      lines.push(f.answer);
    });
    lines.push("");
    lines.push("— Generated from faqtemplates.app");
    return lines.join("\n");
  }

  function downloadTemplate() {
    const content = toMarkdown(detail);
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `faq-${slugify(detail.title)}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      onKeyDown={(e) => {
        if (e.key === "Escape") onClose();
      }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Dialog */}
      <div className="relative mx-4 max-h-[85vh] w-full max-w-2xl overflow-hidden rounded-lg bg-white shadow-xl">
        <div className="border-b border-gray-200 p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">{detail.title}</h2>
              <p className="text-sm text-gray-600 mt-1">{detail.description}</p>
              <div className="mt-3 flex items-center gap-4 text-xs text-gray-500">
                <span className="text-green-700 font-semibold">{detail.questions}</span>
                <span>questions</span>
                <span>•</span>
                <span>{detail.downloads} downloads</span>
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="rounded-md p-2 text-gray-500 hover:bg-gray-100"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
          {detail.faqs.slice(0, 5).map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 p-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">
            Showing 5 of {detail.faqs.length} questions
          </div>
          <div className="flex gap-2">
            <button
              onClick={downloadTemplate}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium"
            >
              Use This Template
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
