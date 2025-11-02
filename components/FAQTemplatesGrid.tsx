"use client";

import { useMemo, useState } from "react";
import TemplateCard from "@/components/TemplateCard";

export interface TemplateItem {
  id: number;
  category: string;
  title: string;
  description: string;
  questions: number;
  downloads: number;
}

export default function FAQTemplatesGrid({
  templates,
}: {
  templates: TemplateItem[];
}) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    templates.forEach((t) => set.add(t.category));
    // Preferred order if present
    const order = [
      "E-commerce",
      "SaaS",
      "Support",
      "Services",
      "Healthcare",
      "Education",
    ];
    const ordered = order.filter((c) => set.has(c));
    const rest = Array.from(set).filter((c) => !ordered.includes(c)).sort();
    return ["All Templates", ...ordered, ...rest];
  }, [templates]);

  const [active, setActive] = useState<string>("All Templates");
  const filtered = active === "All Templates"
    ? templates
    : templates.filter((t) => t.category === active);

  return (
    <div>
      {/* Filters */}
      <div className="mb-6">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => {
            const isActive = active === c;
            return (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={
                  (isActive
                    ? "bg-green-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200") +
                  " rounded-full text-sm font-medium px-4 py-2 transition-colors"
                }
                aria-pressed={isActive}
              >
                {c}
              </button>
            );
          })}
        </div>
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((t) => (
          <TemplateCard key={t.id} template={t as any} />
        ))}
      </div>
    </div>
  );
}

