import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guides – FAQ Templates",
  description:
    "Guides and best practices for creating, optimizing, and implementing FAQ templates.",
};

// Nested layout for the Guides section. Must NOT include <html> or <body>.
// Keep it server-only so pages under /guides are fully SSR without hydration issues.
export default function GuidesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="font-bold text-gray-900 text-lg hover:text-green-600">
            FAQ Templates
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/templates/faq" className="text-gray-700 hover:text-green-600">
              FAQ Templates
            </Link>
            <Link href="/guides/how-to-generate" className="text-gray-700 hover:text-green-600">
              Guides
            </Link>
            <a href="/#pricing" className="text-gray-700 hover:text-green-600">
              Pricing
            </a>
          </nav>
          <div className="hidden md:block">
            <a href="/#generator" className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg text-sm font-medium">
              Get Started Free
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">FAQ Templates</h3>
              <p className="text-sm text-gray-400">AI-powered FAQ templates for websites, e-commerce, and support sites.</p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Templates</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/templates/faq" className="text-gray-400 hover:text-green-400">FAQ Templates</Link></li>
                <li><Link href="/templates/shopify" className="text-gray-400 hover:text-green-400">Shopify FAQ</Link></li>
                <li><Link href="/templates/word" className="text-gray-400 hover:text-green-400">Word Templates</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/guides/how-to-generate" className="text-gray-400 hover:text-green-400">How to Generate</Link></li>
                <li><Link href="/guides/tips-tricks" className="text-gray-400 hover:text-green-400">Tips & Tricks</Link></li>
                <li><Link href="/guides/industry-examples" className="text-gray-400 hover:text-green-400">Industry Examples</Link></li>
                <li><Link href="/guides/faq" className="text-gray-400 hover:text-green-400">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="text-gray-400 hover:text-green-400">Privacy Policy</Link></li>
                <li><Link href="/terms" className="text-gray-400 hover:text-green-400">Terms of Service</Link></li>
                <li><a href="mailto:support@faqtemplates.app" className="text-gray-400 hover:text-green-400">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-sm text-gray-500">© {new Date().getFullYear()} FAQ Templates</p>
          </div>
        </div>
      </footer>
    </>
  );
}
