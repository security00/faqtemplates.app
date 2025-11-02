"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">FAQ Templates</h3>
            <p className="text-sm text-gray-400">
              AI-powered FAQ templates for websites, e-commerce, and support sites.
            </p>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-semibold mb-4">Templates</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/templates/faq"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  FAQ Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/shopify"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Shopify FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/templates/word"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Word Templates
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides */}
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/guides/how-to-generate"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  How to Generate
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/tips-tricks"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Tips & Tricks
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/industry-examples"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Industry Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/guides/faq"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@faqtemplates.app?subject=Support%20Request&body=Hi%20FAQ%20Templates%20Team,%0A%0AI%20need%20help%20with:%20%0A%0AThanks!"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} FAQ Templates. All rights reserved. | SEO-optimized
            AI FAQ generator for websites and e-commerce platforms.
          </p>
        </div>
      </div>
    </footer>
  );
}
