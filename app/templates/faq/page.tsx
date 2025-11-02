import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ Templates – Customizable Collection",
  description:
    "Browse our collection of ready‑made FAQ templates. Customizable and SEO‑optimized for every industry and use case. Download instantly and edit to fit your brand.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/faq",
  },
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

type TemplateItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  questions: number;
  downloads: number;
};

const TEMPLATES: TemplateItem[] = [
    {
      id: 1,
      category: "E-commerce",
      title: "Online Store FAQ",
      description: "Common questions about shipping, returns, products, and payments",
      questions: 8,
      downloads: 2341,
    },
    {
      id: 2,
      category: "SaaS",
      title: "Software Pricing & Features",
      description: "Address pricing questions, features, and integration queries",
      questions: 10,
      downloads: 1823,
    },
    {
      id: 3,
      category: "Support",
      title: "Technical Support Center",
      description: "Troubleshooting guides and technical support information",
      questions: 12,
      downloads: 1564,
    },
    {
      id: 4,
      category: "Services",
      title: "Consulting Services FAQ",
      description: "Service descriptions, pricing, and engagement process",
      questions: 7,
      downloads: 943,
    },
    {
      id: 5,
      category: "Healthcare",
      title: "Medical Practice FAQ",
      description: "Patient questions about services, insurance, and appointments",
      questions: 9,
      downloads: 756,
    },
    {
      id: 6,
      category: "Education",
      title: "Online Course FAQ",
      description: "Student questions about enrollment, access, and course content",
      questions: 11,
      downloads: 1245,
    },
  ];

// Pure-SSR page: filters by category via searchParams and renders full HTML on server.
export default function FAQTemplatesPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const active = searchParams?.category ?? "All Templates";
  const categoriesPref = [
    "E-commerce",
    "SaaS",
    "Support",
    "Services",
    "Healthcare",
    "Education",
  ];
  const available = Array.from(new Set<string>(TEMPLATES.map((t) => t.category)));
  const ordered = categoriesPref.filter((c) => available.includes(c));
  const rest = available.filter((c) => !ordered.includes(c)).sort();
  const categories = ["All Templates", ...ordered, ...rest];

  const filtered =
    active === "All Templates"
      ? TEMPLATES
      : TEMPLATES.filter((t) => t.category === active);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            FAQ Templates Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Explore our extensive collection of professionally written FAQ templates.
            Each template is fully customizable, SEO-optimized, and ready to use on
            your website. Browse by industry or use case to find the perfect template
            for your business.
          </p>
        </div>
      </section>

      {/* Filters (SSR links) + Templates Grid (SSR) */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Filters */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => {
                const isActive = active === c;
                const href = c === "All Templates" ? "/templates/faq" : `/templates/faq?category=${encodeURIComponent(c)}`;
                return (
                  <Link
                    key={c}
                    prefetch={false}
                    href={href}
                    className={
                      (isActive
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200") +
                      " rounded-full text-sm font-medium px-4 py-2 transition-colors"
                    }
                    aria-pressed={isActive}
                  >
                    {c}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Templates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((t) => (
              <article key={t.id} className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-gradient-to-br from-gray-50 to-white p-6 border-b border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-green-600 bg-green-100 px-2.5 py-1 rounded-full">
                      {t.category}
                    </span>
                    <span className="text-xs text-gray-500">{t.downloads} downloads</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{t.title}</h3>
                  <p className="text-sm text-gray-600">{t.description}</p>
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-200 text-center text-sm">
                  <div className="p-3">
                    <div className="text-gray-900 font-semibold">{t.questions}</div>
                    <p className="text-sm text-gray-600">Questions included</p>
                  </div>
                  <div className="p-3">
                    <div className="text-gray-900 font-semibold">{t.downloads}</div>
                    <p className="text-sm text-gray-600">Downloads</p>
                  </div>
                </div>
                <div className="p-6 flex gap-2">
                  <a
                    href={`/#generator?template=${encodeURIComponent(t.title)}&category=${encodeURIComponent(t.category)}`}
                    className="flex-1 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm transition-colors text-center"
                  >
                    Use Template
                  </a>
                  <Link
                    href={`/templates/preview/${t.id}`}
                    prefetch={false}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm transition-colors text-center"
                  >
                    Preview
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section for SEO */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Use FAQ Templates?
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            FAQ sections are essential for any website. They improve user experience by
            addressing common customer questions, reduce support costs, and boost SEO
            rankings. Our templates are designed by professionals and optimized for
            search engines.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mb-3">Benefits of Our FAQ Templates</h3>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>SEO Optimized:</strong> All templates follow best practices for search engine optimization with proper keyword density and heading structure.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Fully Customizable:</strong> Adapt templates to match your brand voice, style, and specific business needs.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Industry Specific:</strong> Choose from templates tailored to your industry with relevant questions and answers.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Time Saving:</strong> Save hours of content creation with professionally written, ready-to-use templates.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-500 font-bold">✓</span>
              <span><strong>Multiple Formats:</strong> Download as Word, PDF, HTML, or directly integrate with your website.</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-3">
            How to Use FAQ Templates Effectively
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed">
            FAQ templates work best when customized for your specific audience and business.
            Start by reviewing the template questions and answers, then modify them to match
            your actual customer inquiries. Make sure your FAQs are easy to navigate,
            well-organized, and updated regularly with new questions.
          </p>
        </div>
      </section>
    </main>
  );
}
