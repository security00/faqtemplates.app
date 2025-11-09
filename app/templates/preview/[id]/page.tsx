import type { Metadata } from "next";
import Link from "next/link";
import { getTemplateById, getPlaceholderTemplate } from "@/lib/templates";
import DownloadButton from "./download-button";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const template = getTemplateById(id) || getPlaceholderTemplate(id);

  if (!template) {
    return {
      title: "Template Not Found - FAQ Templates",
      description: "The requested template could not be found.",
    };
  }

  // Ensure title 40-60 chars and description ~150 chars
  const titleBase = `${template.title} – Template Preview`;
  const title = titleBase.length < 40
    ? `${titleBase} | FAQ Templates`
    : titleBase.slice(0, 60);
  const rawDesc = `Preview the ${template.title} FAQ template with ${template.questions} questions. ${template.description}`;
  const description = rawDesc.length > 160
    ? rawDesc.slice(0, 157) + '...'
    : rawDesc.length < 140
    ? (rawDesc + ' Fully customizable and SEO‑optimized for your website.').slice(0, 160)
    : rawDesc;

  return {
    title,
    description,
    alternates: {
      canonical: `https://faqtemplates.app/templates/preview/${id}`,
    },
  };
}

export default async function TemplatePreviewPage({ params }: PageProps) {
  const { id } = await params;
  const template = getTemplateById(id) || getPlaceholderTemplate(id);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <Link href="/templates" className="hover:text-green-600">Templates</Link>
            <span>→</span>
            <span className="text-green-600 font-medium">{template.category}</span>
            <span>→</span>
            <span>Preview</span>
          </div>

          <div className="flex items-start justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {template.title}
              </h1>
              <p className="text-lg text-gray-600 mb-4">
                {template.description}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-500">
                <span className="flex items-center gap-1">
                  <span className="font-semibold text-green-600">{template.questions}</span>
                  questions included
                </span>
                <span className="flex items-center gap-1">
                  <span className="font-semibold">{template.downloads}</span>
                  downloads
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <a
                href={`/#generator?template=${encodeURIComponent(template.title)}&category=${encodeURIComponent(template.category)}`}
                className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                Use This Template
              </a>
              <Link
                href="/templates"
                className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
              >
                Browse More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Template Preview - {template.questions} Questions
          </h2>

          <div className="space-y-6">
            {template.faqs.map((faq: any, index: number) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:border-green-200 transition-colors">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-12 text-center bg-gray-50 rounded-lg p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Ready to Use This Template?
            </h3>
            <p className="text-gray-600 mb-6">
              Customize this template with our AI generator or download it directly for your website.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/#generator?template=${encodeURIComponent(template.title)}&category=${encodeURIComponent(template.category)}`}
                className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
              >
                Customize with AI Generator
              </a>
              <DownloadButton />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
