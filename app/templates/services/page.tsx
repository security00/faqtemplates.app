import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Business FAQ Templates for Agencies",
  description:
    "Ready‑to‑use service business FAQ templates for consultants and agencies. Explain process, pricing, timelines, scope, revisions, and deliverables with clear examples.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Service Business FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional FAQ templates for consultants, agencies, and service-based businesses.
            Answer questions about your services, pricing, process, and engagement model.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "About Services",
                questions: [
                  "What services do you offer?",
                  "How do your services work?",
                  "What's your experience in this field?",
                  "Can you handle my specific needs?",
                ],
              },
              {
                category: "Pricing",
                questions: [
                  "How do you price your services?",
                  "What's included in the price?",
                  "Do you offer payment plans?",
                  "Are there any hidden costs?",
                ],
              },
              {
                category: "Process",
                questions: [
                  "How do we get started?",
                  "How long does the project take?",
                  "How often will we communicate?",
                  "What's the typical engagement model?",
                ],
              },
              {
                category: "Team & Qualifications",
                questions: [
                  "Who will work on my project?",
                  "What are your team's qualifications?",
                  "Do you have case studies?",
                  "What certifications do you have?",
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
            Build Trust with Transparent Communication
          </h2>
          <p className="text-gray-700 mb-6">
            Clear FAQs help potential clients understand your value and build confidence
            in your services.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate Service FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
