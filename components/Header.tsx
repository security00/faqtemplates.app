"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="FAQ Templates Logo"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              FAQ Templates
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/templates/faq"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              FAQ Templates
            </Link>
            <Link
              href="/guides/how-to-generate"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Guides
            </Link>
            <a
              href="/#pricing"
              className="text-gray-700 hover:text-green-600 transition-colors font-medium"
            >
              Pricing
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/#generator"
              className="px-6 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-100">
            <Link
              href="/templates/faq"
              className="block py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              FAQ Templates
            </Link>
            <Link
              href="/guides/how-to-generate"
              className="block py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Guides
            </Link>
            <a
              href="/#pricing"
              className="block py-2 text-gray-700 hover:text-green-600"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/#generator"
              className="block mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-center"
            >
              Get Started Free
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
