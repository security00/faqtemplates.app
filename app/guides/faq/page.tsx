import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ About FAQ Templates – Answers & Support",
  description:
    "Answers to common questions about our FAQ Templates platform. Learn about pricing, features, downloads, and how to create, edit, and publish templates effectively.",
  alternates: {
    canonical: "https://faqtemplates.app/guides/faq",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default function FAQPage() {
  const faqs = [
    {
      q: "What is FAQ Templates?",
      a: "FAQ Templates is an AI-powered platform that generates professional, SEO-optimized FAQ templates for websites. Our service helps businesses create comprehensive FAQ sections in minutes instead of hours.",
    },
    {
      q: "How does the AI generate FAQs?",
      a: "Our AI analyzes industry best practices and common questions in your field. You provide a topic or business description, and the AI generates relevant Q&A pairs that you can customize for your specific needs.",
    },
    {
      q: "Can I customize the generated templates?",
      a: "Absolutely! All templates are fully customizable. Edit questions, answers, tone, and structure to match your brand voice and specific requirements perfectly.",
    },
    {
      q: "What file formats are supported?",
      a: "You can download templates as Word (.docx), PDF, HTML, or Markdown. You can also copy and paste content directly into your website builder.",
    },
    {
      q: "Is there a free trial?",
      a: "Yes! Our free plan includes 5 templates per month with basic customization. Upgrade to Pro for unlimited templates and advanced features.",
    },
    {
      q: "Are the templates SEO optimized?",
      a: "Yes. All our templates follow SEO best practices including optimal keyword density (3-5%), proper heading structure, and meta descriptions. They're designed to help you rank better in search results.",
    },
    {
      q: "Can I use templates for client projects?",
      a: "Our Pro plan includes a client license that allows you to create FAQs for your clients' websites. Enterprise plans offer even more flexibility.",
    },
    {
      q: "How often should I update my FAQs?",
      a: "Review your FAQs quarterly and update them with new questions based on customer feedback. Add answers to frequent support inquiries to keep content current and relevant.",
    },
    {
      q: "Do you offer API access?",
      a: "Yes, Pro and Enterprise plans include API access. This allows you to programmatically generate templates and integrate with your own applications.",
    },
    {
      q: "What if I need custom support?",
      a: "Our Enterprise plan includes dedicated support and custom solutions. Contact our sales team to discuss your specific requirements.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about FAQ Templates and how to use our service.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-gray-200 rounded-lg p-4 hover:border-green-500 transition-colors cursor-pointer"
              >
                <summary className="font-bold text-gray-900 flex justify-between items-center">
                  {faq.q}
                  <span className="text-green-600 group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-4 text-gray-600 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Didn't find your answer?
          </h2>
          <p className="text-gray-600 mb-6">
            Our support team is here to help. Reach out with any questions or feedback.
          </p>
          <a
            href="mailto:support@faqtemplates.app?subject=Support%20Request&body=Hi%20FAQ%20Templates%20Team,%0A%0AI%20need%20help%20with:%20%0A%0AThanks!"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium"
          >
            Contact Support
          </a>
        </div>
      </section>
    </main>
  );
}
