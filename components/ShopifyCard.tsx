"use client";

import React, { useState } from "react";

interface ShopifyItem {
  id: number;
  title: string;
  questions: number;
  tags: string[];
  faqs: { question: string; answer: string }[];
}

export default function ShopifyCard({ item }: { item: ShopifyItem }) {
  function slugify(input: string) {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  }

  function toMarkdown() {
    const lines: string[] = [];
    lines.push(`# ${item.title}`);
    lines.push("");
    lines.push(`${item.questions} questions included`);
    if (item.tags?.length) lines.push(`Tags: ${item.tags.join(", ")}`);
    lines.push("");
    lines.push("## FAQs");
    item.faqs.forEach((f, i) => {
      lines.push("");
      lines.push(`### ${i + 1}. ${f.question}`);
      lines.push("");
      lines.push(f.answer);
    });
    lines.push("");
    lines.push("— Generated from faqtemplates.app");
    return lines.join("\n");
  }

  function download() {
    const content = toMarkdown();
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `shopify-${slugify(item.title)}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition-all">
      <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
      <p className="text-gray-600 mb-3">{item.questions} questions included</p>
      <div className="flex gap-2 flex-wrap mb-6">
        {item.tags.map((tag) => (
          <span key={tag} className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2">
        <button
          onClick={download}
          className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm"
        >
          Use Template
        </button>
        <PreviewButton item={item} />
      </div>
    </div>
  );
}

function PreviewButton({ item }: { item: ShopifyItem }) {
  const [open, setOpen] = useState(false);
  function slugify(input: string) {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  }
  function toMarkdown() {
    const lines: string[] = [];
    lines.push(`# ${item.title}`);
    lines.push("");
    lines.push(`${item.questions} questions included`);
    if (item.tags?.length) lines.push(`Tags: ${item.tags.join(", ")}`);
    lines.push("");
    lines.push("## FAQs");
    item.faqs.forEach((f, i) => {
      lines.push("");
      lines.push(`### ${i + 1}. ${f.question}`);
      lines.push("");
      lines.push(f.answer);
    });
    lines.push("");
    lines.push("— Generated from faqtemplates.app");
    return lines.join("\n");
  }
  function close() { setOpen(false); }
  function download() {
    const content = toMarkdown();
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `shopify-${slugify(item.title)}.md`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm"
      >
        Preview
      </button>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={close} aria-hidden="true" />
          <div className="relative mx-4 w-full max-w-2xl max-h-[85vh] overflow-hidden rounded-lg bg-white shadow-xl">
            <div className="border-b border-gray-200 p-6 flex items-start justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>
                <p className="text-sm text-gray-600 mt-1">{item.questions} questions included</p>
              </div>
              <button onClick={close} className="p-2 rounded-md hover:bg-gray-100">✕</button>
            </div>
            <div className="p-6 max-h-[60vh] overflow-y-auto space-y-4">
              {item.faqs.slice(0, 5).map((f, i) => (
                <div key={i} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">{f.question}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-gray-200 p-4 flex items-center justify-end">
              <button
                onClick={() => { download(); close(); }}
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md text-sm font-medium"
              >
                Use This Template
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
