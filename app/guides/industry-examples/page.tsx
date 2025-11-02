import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ Industry Examples – Real‑World Templates",
  description:
    "See real‑world FAQ examples from different industries. Learn how successful businesses structure FAQs to improve customer experience and organic search.",
  alternates: {
    canonical: "https://faqtemplates.app/guides/industry-examples",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function IndustryExamplesPage() {
  const examples = [
    {
      industry: "E-commerce",
      faqs: [
        {
          q: "How long does shipping take?",
          a: "Standard shipping takes 3–5 business days while express options are available at checkout.",
        },
        {
          q: "What is your return policy?",
          a: "Returns are accepted within 30 days for unused items in original packaging. Start a return from your account.",
        },
        {
          q: "Do you accept international orders?",
          a: "Yes, we ship to most countries. Duties and taxes may apply depending on your location.",
        },
        {
          q: "Can I track my order?",
          a: "You'll receive a tracking link by email as soon as your order ships.",
        },
      ],
    },
    {
      industry: "SaaS",
      faqs: [
        {
          q: "What payment methods do you accept?",
          a: "We support major credit cards, PayPal, and invoicing for enterprise customers.",
        },
        {
          q: "How secure is my data?",
          a: "Your data is encrypted in transit and at rest. We follow industry best practices and undergo regular security audits.",
        },
        {
          q: "Can I export my data?",
          a: "Yes, you can export data anytime in CSV or JSON from the settings page.",
        },
        {
          q: "What integrations do you support?",
          a: "Popular integrations include Slack, Google Workspace, Salesforce, and Zapier.",
        },
      ],
    },
    {
      industry: "Healthcare",
      faqs: [
        {
          q: "What insurance plans do you accept?",
          a: "We accept most major insurance providers. Contact support with your plan to confirm coverage.",
        },
        {
          q: "How do I schedule an appointment?",
          a: "Book online via our portal or call our office during business hours.",
        },
        {
          q: "Is my information secure?",
          a: "We follow HIPAA guidelines and use secure systems to protect your health information.",
        },
        {
          q: "What should I bring to my first visit?",
          a: "Bring a photo ID, insurance card, and a list of current medications.",
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Industry Examples: Real FAQ Templates
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Explore FAQ templates from various industries and learn how successful businesses
          answer customer questions. Use these as inspiration for your own FAQs.
        </p>

        <div className="space-y-12">
          {examples.map((example, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {example.industry} FAQ Examples
              </h2>
              <ul className="space-y-4">
                {example.faqs.map((ex, i) => (
                  <li key={i} className="">
                    <div className="flex gap-3 mb-1">
                      <span className="text-green-600 font-bold">Q:</span>
                      <span className="text-gray-900 font-medium">{ex.q}</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="text-gray-500 font-bold">A:</span>
                      <span className="text-gray-700">{ex.a}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mt-8">
          <h3 className="text-lg font-bold text-gray-900 mb-3">
            View More Industry Examples
          </h3>
          <p className="text-gray-700 mb-4">
            Access hundreds of industry-specific FAQ templates and customize them for your business.
          </p>
          <a
            href="/templates"
            className="inline-block px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
          >
            Browse All Templates
          </a>
        </div>
      </article>
    </main>
  );
}
