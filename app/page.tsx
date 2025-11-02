import type { Metadata } from "next";
import FAQGenerator from "@/components/FAQGenerator";
import RelatedTemplates from "@/components/RelatedTemplates";

export const metadata: Metadata = {
  title: "FAQ Templates – AI FAQ Generator for Websites",
  description:
    "Create professional FAQ templates with AI in seconds. Perfect for e‑commerce, SaaS, and support sites. Generate custom FAQ sections quickly and efficiently.",
  keywords:
    "FAQ templates, FAQ generator, AI FAQ, website FAQ, template generator",
  alternates: {
    canonical: "https://faqtemplates.app/",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Create Professional FAQ Templates with AI
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-4 max-w-2xl mx-auto">
            Generate comprehensive FAQ templates for your website in seconds.
            Perfect for e-commerce, SaaS, support centers, and more. SEO optimized
            and fully customizable.
          </p>
          <p className="text-gray-500 mb-8">
            Over 50,000+ templates generated • Free to start • No credit card
            required
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-12 max-w-2xl mx-auto">
            <div className="bg-green-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-green-600">50K+</div>
              <div className="text-sm text-gray-600">Templates Created</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-blue-600">15+</div>
              <div className="text-sm text-gray-600">Industries Supported</div>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-purple-600">99%</div>
              <div className="text-sm text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-2xl font-bold text-orange-600">24/7</div>
              <div className="text-sm text-gray-600">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Generator */}
      <FAQGenerator />

      {/* Related Templates */}
      <RelatedTemplates />

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-4">
              Start free and upgrade as you grow. No hidden fees, cancel anytime.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-blue-800 text-sm">
                🚀 <strong>Currently in Beta:</strong> All features are free while we develop payment integration.
                Enjoy unlimited access to our FAQ generator and templates!
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-green-500 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Free</h3>
              <p className="text-gray-600 text-sm mb-6">
                Perfect for getting started
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$0</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>✓ 5 templates per month</li>
                <li>✓ Basic customization</li>
                <li>✓ Download as Word/PDF</li>
                <li>✓ Community support</li>
              </ul>
              <a
                href="/#generator"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Start Free Now
              </a>
            </div>

            {/* Pro Plan */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-500 rounded-lg p-8 relative">
              <div className="absolute top-0 right-0 bg-green-500 text-white px-3 py-1 text-sm font-medium rounded-bl-lg">
                Popular
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Pro</h3>
              <p className="text-gray-600 text-sm mb-6">
                For content creators
              </p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">$9</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>✓ Unlimited templates</li>
                <li>✓ Advanced customization</li>
                <li>✓ Multiple formats</li>
                <li>✓ Email support</li>
                <li>✓ API access</li>
              </ul>
              <div className="space-y-2">
                <button
                  className="w-full px-4 py-2 bg-gray-400 text-white rounded-lg font-medium cursor-not-allowed"
                  disabled
                  title="Coming Soon - Payment integration in development"
                >
                  Coming Soon
                </button>
                <a
                  href="/#generator"
                  className="block w-full px-4 py-2 border border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-colors text-center text-sm"
                >
                  Try Free Version
                </a>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 hover:border-green-500 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Enterprise
              </h3>
              <p className="text-gray-600 text-sm mb-6">Custom solutions</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-gray-900">Custom</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm text-gray-600">
                <li>✓ Everything in Pro</li>
                <li>✓ Custom branding</li>
                <li>✓ Bulk operations</li>
                <li>✓ Priority support</li>
                <li>✓ Custom integrations</li>
              </ul>
              <a
                href="mailto:support@faqtemplates.app?subject=Enterprise%20Plan%20Inquiry&body=Hi,%0A%0AI'm%20interested%20in%20learning%20more%20about%20your%20Enterprise%20plan.%0A%0ACompany:%20%0AUse%20case:%20%0ATeam%20size:%20%0A%0APlease%20contact%20me%20to%20discuss%20pricing%20and%20features.%0A%0AThanks!"
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-900 font-medium hover:bg-gray-50 transition-colors text-center"
              >
                Contact Sales
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Common Questions About FAQ Templates
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How does the AI FAQ generator work?",
                a: "Simply enter your topic or business name, and our AI analyzes industry best practices to generate relevant FAQ questions and answers. You can then customize everything to match your brand voice and specific needs.",
              },
              {
                q: "Can I export templates in different formats?",
                a: "Yes! We support Word (.docx), PDF, HTML, and Markdown formats. You can download your templates and use them anywhere.",
              },
              {
                q: "Is there a limit on how many templates I can generate?",
                a: "Free users get 5 templates per month. Pro users get unlimited templates. Enterprise plans can be customized based on your needs.",
              },
              {
                q: "Are the templates SEO optimized?",
                a: "Absolutely. All templates follow SEO best practices with proper keyword density, heading structure, and meta descriptions. Perfect for improving your search rankings.",
              },
              {
                q: "Can I use these templates for client work?",
                a: "Yes! Both personal and agency licenses are available. Use these templates for your own websites or your clients' websites.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="border border-gray-300 rounded-lg p-4 group cursor-pointer"
              >
                <summary className="font-medium text-gray-900 flex justify-between items-center">
                  {item.q}
                  <span className="group-open:rotate-180 transition-transform">
                    ▼
                  </span>
                </summary>
                <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our FAQ Templates Generator?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI-powered FAQ generator creates professional FAQ templates that help businesses
              improve customer satisfaction, reduce support costs, and boost SEO rankings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">AI-Powered Generation</h3>
              <p className="text-gray-600">
                Our advanced AI analyzes your business type and generates relevant FAQ templates
                with questions and answers tailored to your industry and customer needs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">SEO Optimized</h3>
              <p className="text-gray-600">
                All FAQ templates are optimized for search engines with proper keyword density,
                structured data, and meta descriptions to help your website rank higher.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">
                Generate comprehensive FAQ templates in seconds, not hours. Save time and
                focus on what matters most - growing your business and serving customers.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Fully Customizable</h3>
              <p className="text-gray-600">
                Every FAQ template can be customized to match your brand voice, style, and
                specific business requirements. Edit questions, answers, and formatting easily.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multiple Formats</h3>
              <p className="text-gray-600">
                Download your FAQ templates as Word documents, PDFs, HTML files, or copy
                directly to your website. Compatible with all major platforms and CMSs.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Expertise</h3>
              <p className="text-gray-600">
                Our FAQ generator understands different industries and creates templates
                specific to e-commerce, SaaS, healthcare, education, and many other sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Transform Your Customer Support with FAQ Templates
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Reduce Support Tickets by 40%
                </h3>
                <p className="text-gray-700">
                  Comprehensive FAQ templates answer common customer questions before they
                  contact support. Studies show that well-structured FAQ sections can reduce
                  support ticket volume by up to 40%, saving time and resources for your team.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Improve SEO Rankings
                </h3>
                <p className="text-gray-700">
                  FAQ templates help you rank for long-tail keywords and question-based searches.
                  Google's algorithm favors websites that answer user questions directly, making
                  FAQ sections a powerful SEO tool for organic traffic growth.
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Increase Conversion Rates
                </h3>
                <p className="text-gray-700">
                  Clear FAQ templates remove barriers to purchase by addressing customer concerns
                  upfront. E-commerce sites with comprehensive FAQ sections see 15-25% higher
                  conversion rates compared to those without proper customer support documentation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-600">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Create Your First FAQ Template?
          </h2>
          <p className="text-green-100 mb-8 text-lg">
            Join thousands of creators and businesses using FAQ Templates to
            improve their customer experience.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-white text-green-600 rounded-lg font-bold hover:bg-green-50 transition-colors"
          >
            Get Started Free
          </a>
          <p className="text-green-200 text-sm mt-4">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}
