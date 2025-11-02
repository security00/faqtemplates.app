import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS FAQ Templates for Software Products",
  description:
    "SEO‑optimized SaaS FAQ templates for software products. Answer pricing, features, security, integrations, onboarding, and support questions with ready examples.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/saas",
  },
};

export default function SaaSPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SaaS FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional FAQ templates for software as a service products. Answer questions
            about pricing, features, security, integrations, and technical support.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "Pricing & Plans",
                questions: [
                  "What plans do you offer?",
                  "Can I change my plan anytime?",
                  "Do you offer annual discounts?",
                  "What's included in each plan?",
                ],
              },
              {
                category: "Features",
                questions: [
                  "What features are included?",
                  "Can I customize my workspace?",
                  "Do you offer API access?",
                  "What are your rate limits?",
                ],
              },
              {
                category: "Security & Compliance",
                questions: [
                  "How secure is my data?",
                  "Do you offer SSO?",
                  "Are you HIPAA compliant?",
                  "What certifications do you have?",
                ],
              },
              {
                category: "Integrations",
                questions: [
                  "What integrations do you support?",
                  "Can I build custom integrations?",
                  "Do you have a Zapier integration?",
                  "Can I export my data?",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.questions.map((q, idx) => (
                    <li key={idx} className="text-gray-700">
                      • {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Increase Product Adoption with Clear Documentation
          </h2>
          <p className="text-gray-700 mb-6">
            Clear FAQs reduce onboarding friction and increase user satisfaction.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate SaaS FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
