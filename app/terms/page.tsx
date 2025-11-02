import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service – FAQ Templates",
  description:
    "Read the FAQ Templates Terms of Service. Understand acceptable use, accounts, intellectual property, disclaimers, and contact information for legal notices.",
  alternates: { canonical: "https://faqtemplates.app/terms" },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">
          These Terms govern your access to and use of the FAQ Templates website and
          tools. By using the service you agree to these Terms.
        </p>

        <ol className="space-y-6 text-gray-700 leading-relaxed list-decimal list-inside">
          <li>
            <strong>Use of Service.</strong> You may use the service only as permitted
            by law and these Terms. Do not abuse, interfere with, or attempt to
            circumvent security or rate limits.
          </li>
          <li>
            <strong>Content.</strong> You are responsible for the content you submit
            to the generator. Ensure you have rights to the text you upload and that it
            does not infringe third‑party rights.
          </li>
          <li>
            <strong>Intellectual Property.</strong> All site materials, branding, and
            technology are owned by FAQ Templates or its licensors.
          </li>
          <li>
            <strong>Disclaimer.</strong> The service is provided "as is" without
            warranties. We are not liable for indirect or consequential damages to the
            extent permitted by law.
          </li>
          <li>
            <strong>Changes.</strong> We may update these Terms and will post the
            effective date. Continued use indicates acceptance of the updated Terms.
          </li>
          <li>
            <strong>Contact.</strong> Legal notices and support: support@faqtemplates.app.
          </li>
        </ol>

        <p className="text-sm text-gray-500 mt-6">Last updated: Nov 2025</p>
      </article>
    </main>
  );
}
