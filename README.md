FAQ Templates App (Next.js)
===========================

An SEO‑friendly FAQ templates website built with Next.js + TypeScript + Tailwind CSS.

What’s included
- Templates library with category filters (All, E‑commerce, SaaS, Support, Services, Healthcare, Education)
- Preview modals and one‑click downloads for every template
- Shopify and Word templates pages with consistent UX
- AI Generator section on the homepage (anchors from guides CTA)
- Guides (how‑to, tips, industry examples, FAQ)
- Legal pages (Privacy, Terms)
- SEO basics: robots.txt, sitemap.xml, canonical URLs, and normalized titles/descriptions

Quick start
1) Install deps and run dev server
```bash
npm install
npm run dev
# open http://localhost:3000
```
2) Production build
```bash
npm run build
npm run start
```

Key routes
- `/` – Home + AI Generator (`/#generator`)
- `/templates` – All template categories
- `/templates/faq` – General FAQ templates (client filter buttons)
- `/templates/preview/[id]` – Full template preview (falls back to placeholder)
- `/templates/shopify` – Shopify templates (Use Template = download; Preview = modal)
- `/templates/word` – Downloadable Word templates (RTF .doc generation)
- `/guides/how-to-generate`, `/guides/tips-tricks`, `/guides/industry-examples`, `/guides/faq`
- `/privacy`, `/terms`
- `/robots.txt`, `/sitemap.xml`

Use Template / Preview behavior
- On template cards, “Use Template” downloads a Markdown file, “Preview” opens a centered modal with sample Q&A. The preview page also clamps metadata for SEO.
- Shopify page follows the same pattern (download + modal). Word page downloads a `.doc` (RTF) file that opens in Microsoft Word.

Data model and placeholders
- Template data lives in `lib/templates.ts`.
  - `templatesById` stores curated FAQ content for ids 1–6.
  - `getTemplateById(id)` returns a template when available.
  - `getPlaceholderTemplate(id)` returns a generic template when a specific id has no data, so previews never 404.
- The previews and detail page automatically use the placeholder when needed.

SEO setup
- `app/robots.ts` generates `/robots.txt` and points to the sitemap.
- `app/sitemap.ts` generates `/sitemap.xml` with the key static routes.
- Page metadata is kept within recommended lengths: title 40–60 chars, description ~140–160 chars. The dynamic preview page trims/pads automatically.

Contact and CTAs
- Support email: `support@faqtemplates.app`.
- Footer “Privacy/Terms/Contact” links point to working pages (Contact uses `mailto:`).
- Guide page CTAs link to `/#generator` for a seamless flow.

Customize / extend
- Add a new curated template:
  1. Create an entry in `lib/templates.ts > templatesById` with `id`, `title`, `category`, `description`, and `faqs`.
  2. The card preview and the full `/templates/preview/[id]` page will use it automatically.
- Change the support email: search for `support@faqtemplates.app` in `app` and `components`.
- Swap Word downloads to real `.docx`: replace the RTF generator in `components/WordCard.tsx` with a docx builder (e.g., `docx` package) and wire to a server route if you prefer.

Coding standards
- TypeScript + strict mode, Tailwind CSS for styling
- Client components are marked with `"use client"` and avoid server‑only APIs
- Accessibility: modals are centered, support Esc/overlay close; buttons have clear labels

Notes
- This project targets local/offline use and avoids network dependencies where possible. If you add external packages, ensure they work in your hosting environment.

License
- MIT (adjust as needed)
