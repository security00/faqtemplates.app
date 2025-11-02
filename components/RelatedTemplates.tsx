"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface TemplateCard {
  id: string;
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  tags: string[];
}

export default function RelatedTemplates() {
  const templates: TemplateCard[] = [
    {
      id: "1",
      title: "E-commerce FAQ",
      description:
        "Perfect for online stores. Cover shipping, returns, products, and payments with pre-written FAQ templates.",
      icon: "🛍️",
      link: "/templates/ecommerce",
      tags: ["Shopify", "WooCommerce", "E-commerce"],
    },
    {
      id: "2",
      title: "SaaS Product FAQ",
      description:
        "Designed for software products. Address pricing, features, integration, and technical questions effectively.",
      icon: "💻",
      link: "/templates/saas",
      tags: ["SaaS", "Software", "Pricing"],
    },
    {
      id: "3",
      title: "Service Business FAQ",
      description:
        "Ideal for consultants and agencies. Explain services, pricing, process, and client expectations clearly.",
      icon: "🤝",
      link: "/templates/services",
      tags: ["Services", "Consulting", "Agency"],
    },
    {
      id: "4",
      title: "Support Center FAQ",
      description:
        "Comprehensive support documentation. Answer technical questions and provide troubleshooting guidance.",
      icon: "🆘",
      link: "/templates/support",
      tags: ["Support", "Help Center", "Documentation"],
    },
    {
      id: "5",
      title: "Medical/Healthcare FAQ",
      description:
        "HIPAA-compliant templates for healthcare providers. Address patient questions about services and procedures.",
      icon: "⚕️",
      link: "/templates/healthcare",
      tags: ["Healthcare", "Medical", "HIPAA"],
    },
    {
      id: "6",
      title: "Education Platform FAQ",
      description:
        "For online courses and educational platforms. Answer student questions about enrollment, access, and content.",
      icon: "📚",
      link: "/templates/education",
      tags: ["Education", "Online Learning", "Courses"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Related FAQ Templates
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of industry-specific FAQ templates. Each
            template is pre-written and customizable to match your brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Link
              key={template.id}
              href={template.link}
              className="group bg-white rounded-lg border border-gray-200 p-6 hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-4xl mb-4">{template.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors">
                {template.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {template.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {template.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center text-green-600 font-medium text-sm group-hover:gap-2 transition-all">
                View Template
                <span className="ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
