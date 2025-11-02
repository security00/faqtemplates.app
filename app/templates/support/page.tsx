import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Center FAQ Templates - Technical Help Documentation",
  description:
    "Comprehensive FAQ templates for support centers and help documentation. Cover troubleshooting, technical issues, and customer support.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/support",
  },
};

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Support Center FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive FAQ templates for support centers and help documentation.
            Answer technical questions, provide troubleshooting guides, and reduce support tickets.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "Getting Started",
                questions: [
                  "How do I create an account?",
                  "How do I reset my password?",
                  "How do I change my email address?",
                  "How do I delete my account?",
                ],
              },
              {
                category: "Troubleshooting",
                questions: [
                  "Why isn't my feature working?",
                  "How do I clear my cache?",
                  "What browser versions are supported?",
                  "How do I update to the latest version?",
                ],
              },
              {
                category: "Technical Issues",
                questions: [
                  "Why am I getting an error message?",
                  "How do I fix slow performance?",
                  "Why is my upload failing?",
                  "How do I check my system requirements?",
                ],
              },
              {
                category: "Account & Billing",
                questions: [
                  "How do I update my billing information?",
                  "When will I be charged?",
                  "How do I cancel my subscription?",
                  "Can I get an invoice?",
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Reduce Support Costs with Self-Service FAQs
          </h2>
          <p className="text-gray-700 mb-6">
            Well-organized FAQs empower users to find solutions independently, reducing
            support ticket volume by up to 30%.
          </p>
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900">Best Practices for Support FAQs:</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Include troubleshooting steps with screenshots</li>
              <li>✓ Organize by feature or problem area</li>
              <li>✓ Include video tutorials where helpful</li>
              <li>✓ Update FAQs based on support tickets</li>
              <li>✓ Make search functionality prominent</li>
              <li>✓ Include contact information for unresolved issues</li>
            </ul>
          </div>
          <a
            href="/#generator"
            className="mt-6 inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate Support FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
