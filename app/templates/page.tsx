import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Templates – All Categories Index",
  description:
    "Explore our complete collection of FAQ templates by category. Find templates for e‑commerce, SaaS, healthcare, education, support, and more industries.",
  alternates: {
    canonical: "https://faqtemplates.app/templates",
  },
};

export default function TemplatesIndexPage() {
  const templateCategories = [
    {
      id: "faq",
      title: "General FAQ Templates",
      description: "Customizable FAQ templates for any industry and use case",
      icon: "❓",
      count: "50+ templates",
      href: "/templates/faq",
    },
    {
      id: "ecommerce",
      title: "E-commerce FAQ",
      description: "Perfect for online stores - shipping, returns, products, payments",
      icon: "🛍️",
      count: "25+ templates",
      href: "/templates/ecommerce",
    },
    {
      id: "shopify",
      title: "Shopify FAQ",
      description: "Specifically designed for Shopify stores and merchants",
      icon: "🏪",
      count: "15+ templates",
      href: "/templates/shopify",
    },
    {
      id: "saas",
      title: "SaaS Product FAQ",
      description: "Software products - pricing, features, integrations, support",
      icon: "💻",
      count: "20+ templates",
      href: "/templates/saas",
    },
    {
      id: "services",
      title: "Service Business FAQ",
      description: "Consultants, agencies, and professional services",
      icon: "🤝",
      count: "18+ templates",
      href: "/templates/services",
    },
    {
      id: "healthcare",
      title: "Healthcare FAQ",
      description: "HIPAA-compliant templates for medical practices",
      icon: "⚕️",
      count: "12+ templates",
      href: "/templates/healthcare",
    },
    {
      id: "education",
      title: "Education Platform FAQ",
      description: "Online courses, schools, and educational platforms",
      icon: "📚",
      count: "16+ templates",
      href: "/templates/education",
    },
    {
      id: "support",
      title: "Support Center FAQ",
      description: "Technical support and help documentation",
      icon: "🆘",
      count: "22+ templates",
      href: "/templates/support",
    },
    {
      id: "word",
      title: "Word Templates",
      description: "Downloadable FAQ templates for Microsoft Word",
      icon: "📄",
      count: "30+ templates",
      href: "/templates/word",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAQ Templates Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our comprehensive collection of professionally designed FAQ templates.
            Choose from industry-specific templates or create custom FAQs with our AI generator.
            All templates are SEO-optimized and fully customizable.
          </p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-green-600">200+</div>
              <div className="text-sm text-gray-600">Templates</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">9</div>
              <div className="text-sm text-gray-600">Categories</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-purple-600">50K+</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-orange-600">100%</div>
              <div className="text-sm text-gray-600">Customizable</div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Categories Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateCategories.map((category) => (
              <Link
                key={category.id}
                href={category.href}
                className="group bg-white border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-sm text-green-600 font-medium">
                      {category.count}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                  Browse Templates
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Generator CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need Something Custom?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Can't find the perfect template? Use our AI-powered FAQ generator to create
            custom FAQ templates tailored to your specific business needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#generator"
              className="px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              Generate Custom FAQ
            </a>
            <Link
              href="/guides/how-to-generate"
              className="px-8 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium transition-colors"
            >
              Learn How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why Choose Our FAQ Templates?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Industry-Specific Content
              </h3>
              <p className="text-gray-600 mb-4">
                Our FAQ templates are crafted by industry experts who understand the unique
                challenges and common questions in each sector. From e-commerce shipping
                policies to SaaS pricing models, we cover it all.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                SEO Optimized
              </h3>
              <p className="text-gray-600">
                Every template follows SEO best practices with proper keyword density,
                structured data markup, and optimized meta descriptions to help your
                website rank higher in search results.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Fully Customizable
              </h3>
              <p className="text-gray-600 mb-4">
                All templates can be easily customized to match your brand voice, style,
                and specific business requirements. Edit questions, answers, and formatting
                to create the perfect FAQ section.
              </p>

              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Multiple Formats
              </h3>
              <p className="text-gray-600">
                Download templates in various formats including Word documents, PDFs,
                HTML files, or copy directly to your website. Compatible with all major
                platforms and content management systems.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
