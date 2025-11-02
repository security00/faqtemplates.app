import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E‑commerce FAQ Templates for Online Stores",
  description:
    "Download SEO‑ready e‑commerce FAQ templates for online stores. Cover products, shipping, returns, payments, warranties, and customer support with editable examples.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/ecommerce",
  },
};

export default function EcommercePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            E-commerce FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Comprehensive FAQ templates designed for online stores and e-commerce platforms.
            Answer customer questions about products, shipping, returns, payments, and more.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "Shipping & Delivery",
                questions: [
                  "How long does shipping take?",
                  "What are the shipping costs?",
                  "Do you ship internationally?",
                  "Can I track my order?",
                ],
              },
              {
                category: "Returns & Refunds",
                questions: [
                  "What is your return policy?",
                  "How do I return an item?",
                  "When will I receive my refund?",
                  "What if my item is damaged?",
                ],
              },
              {
                category: "Products",
                questions: [
                  "What sizes are available?",
                  "What materials are used?",
                  "Are these items authentic?",
                  "Do you offer product warranties?",
                ],
              },
              {
                category: "Payment",
                questions: [
                  "What payment methods do you accept?",
                  "Is my payment information secure?",
                  "Do you offer payment plans?",
                  "Why was my payment declined?",
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
            Reduce Cart Abandonment with Clear FAQs
          </h2>
          <p className="text-gray-700 mb-6">
            Customers abandon carts due to unanswered questions. Clear, comprehensive FAQs
            address doubts and increase conversion rates.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate E-commerce FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
