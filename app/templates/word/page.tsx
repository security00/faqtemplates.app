import type { Metadata } from "next";
import WordCard from "@/components/WordCard";

export const metadata: Metadata = {
  title: "Word FAQ Templates – Downloadable DOCX",
  description:
    "Download editable Word FAQ templates in DOCX format. Fast to customize, easy to share, and perfect for teams that need offline editing and approvals.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/word",
  },
};

export default function WordTemplatesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Word FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Download ready-to-use FAQ templates for Microsoft Word. Perfect for creating
            professional documents, sending to clients, or integrating into your documentation.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: "Basic FAQ", questions: 5 },
              { title: "Comprehensive FAQ", questions: 10 },
              { title: "Professional FAQ", questions: 15 },
              { title: "Product FAQ", questions: 8 },
              { title: "Service FAQ", questions: 12 },
              { title: "Support FAQ", questions: 20 },
            ].map((item, i) => (
              <WordCard key={i} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Benefits of Word FAQ Templates
          </h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li>✓ Easy to edit and customize in Microsoft Word</li>
            <li>✓ Professional formatting and design</li>
            <li>✓ Compatible with all Word versions</li>
            <li>✓ Share with team members and clients</li>
            <li>✓ Convert to PDF for distribution</li>
            <li>✓ Maintain consistent branding</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
