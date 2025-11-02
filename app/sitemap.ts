import type { MetadataRoute } from "next";

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000").replace(/\/$/, "");

const staticRoutes = [
  "/",
  "/templates",
  "/privacy",
  "/terms",
  "/templates/faq",
  "/templates/ecommerce",
  "/templates/shopify",
  "/templates/saas",
  "/templates/services",
  "/templates/healthcare",
  "/templates/education",
  "/templates/support",
  "/templates/word",
  "/guides/how-to-generate",
  "/guides/faq",
  "/guides/industry-examples",
  "/guides/tips-tricks",
];

const previewIds = ["1", "2", "3", "4", "5", "6"]; // curated previews

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path.startsWith("/guides/") ? "monthly" : "weekly",
    priority:
      path === "/" ? 1 :
      path === "/templates" ? 0.9 :
      path.startsWith("/templates/") ? 0.8 :
      path.startsWith("/guides/") ? 0.7 :
      0.4,
  }));

  const previewEntries: MetadataRoute.Sitemap = previewIds.map((id) => ({
    url: `${SITE_URL}/templates/preview/${id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticEntries, ...previewEntries];
}
