import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – FAQ Templates",
  description:
    "Read the FAQ Templates Privacy Policy. Learn what data we collect, how we use it, and the choices you have about cookies, analytics, and contact information.",
  alternates: { canonical: "https://faqtemplates.app/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">
          This policy describes how FAQ Templates ("we", "us") collects, uses, and
          protects information when you use our website and tools. By using this site
          you agree to the terms below.
        </p>

        <section className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Information We Collect</h2>
            <p>
              We collect basic usage data (pages viewed, device type, approximate
              location) for analytics. If you contact us or create content with the
              generator, we may process the text you provide. We do not sell personal
              information.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">How We Use Data</h2>
            <p>
              Data helps us operate the service, improve features, prevent abuse, and
              provide support. Aggregated analytics may be used to understand template
              performance and product adoption.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Cookies</h2>
            <p>
              We use essential cookies for sessions and optional analytics cookies.
              You can control cookies in your browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Data Retention</h2>
            <p>
              We retain data only as long as necessary to provide the service and to
              comply with legal obligations. You may request deletion of your data at
              any time.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p>
              For any privacy questions or requests, contact us at support@faqtemplates.app.
            </p>
          </div>
          <p className="text-sm text-gray-500">Last updated: Nov 2025</p>
        </section>
      </article>
    </main>
  );
}
