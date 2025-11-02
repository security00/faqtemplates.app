"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQGenerator() {
  const [topic, setTopic] = useState("");
  const [faqItems, setFaqItems] = useState<FAQItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Check for URL parameters on component mount
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const templateParam = urlParams.get('template');
    const categoryParam = urlParams.get('category');

    if (templateParam) {
      const topicText = categoryParam
        ? `${categoryParam} - ${templateParam}`
        : templateParam;
      setTopic(topicText);
    }
  }, []);

  const generateFAQ = async () => {
    if (!topic.trim()) return;

    setIsLoading(true);
    try {
      // Call the API to generate FAQ
      const response = await fetch('/api/generate-faq', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ topic: topic.trim() }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate FAQ');
      }

      const data = await response.json();
      setFaqItems(data.faqs || []);

      // Scroll to results
      setTimeout(() => {
        resultsRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } catch (error) {
      console.error("Error generating FAQ:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const downloadFAQ = (format: "word" | "pdf") => {
    // Mock download functionality
    const content = faqItems
      .map(
        (item, i) =>
          `${i + 1}. Q: ${item.question}\nA: ${item.answer}`
      )
      .join("\n\n");

    const element = document.createElement("a");
    const file = new Blob([content], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `faq-template.${format === "word" ? "docx" : "pdf"}`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <section id="generator" className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {topic ? "Customize Your FAQ Template" : "Create FAQ Templates with AI"}
          </h2>
          <p className="text-gray-600 mb-8">
            {topic
              ? "Your selected template has been pre-filled. Modify the topic or generate directly to get started."
              : "Enter your topic and let our AI generate professional FAQ templates in seconds."
            }
          </p>

          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && generateFAQ()}
              placeholder="Enter your topic (e.g., 'E-commerce Platform', 'SaaS Product')"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={generateFAQ}
              disabled={isLoading || !topic.trim()}
              className="px-8 py-3 bg-green-500 hover:bg-green-600 disabled:bg-gray-400 text-white rounded-lg font-medium transition-colors disabled:cursor-not-allowed"
            >
              {isLoading ? "Generating..." : "Generate"}
            </button>
          </div>

          {isLoading && (
            <div className="flex items-center justify-center py-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-4 border-green-200 border-t-green-500 rounded-full animate-spin"></div>
                <p className="text-gray-600">Creating your FAQ template...</p>
              </div>
            </div>
          )}

          {faqItems.length > 0 && (
            <div ref={resultsRef} className="mt-8">
              <div className="flex gap-3 mb-6">
                <button
                  onClick={() => downloadFAQ("word")}
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium transition-colors"
                >
                  Download Word
                </button>
                <button
                  onClick={() => downloadFAQ("pdf")}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg font-medium transition-colors"
                >
                  Download PDF
                </button>
              </div>

              <div className="space-y-3">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 rounded-lg overflow-hidden bg-white"
                  >
                    <button
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-medium text-gray-900 text-left">
                        {item.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-600 transition-transform ${
                          expandedIndex === index ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        />
                      </svg>
                    </button>
                    {expandedIndex === index && (
                      <div className="px-4 py-4 bg-gray-50 border-t border-gray-300">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
