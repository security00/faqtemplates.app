import type { Metadata } from "next";
import ShopifyCard from "@/components/ShopifyCard";

export const metadata: Metadata = {
  title: "Shopify FAQ Templates for Shopify Stores",
  description:
    "SEO‑friendly Shopify FAQ templates tailored for merchants. Cover orders, shipping, returns, payments, apps, and store policies with clear, editable sections.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/shopify",
  },
};

export default function ShopifyFAQPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Shopify FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Increase conversions and reduce support tickets with professionally designed
            FAQ templates for Shopify stores. Our templates cover shipping, payments,
            returns, product information, and more.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 101,
                title: "Shipping & Delivery FAQ",
                questions: 8,
                tags: ["Shipping", "Delivery"],
                faqs: [
                  { question: "How long does shipping take?", answer: "Standard shipping takes 3–5 business days. Express options are available at checkout." },
                  { question: "Do you ship internationally?", answer: "Yes, international shipping is available. Costs and times vary by destination." },
                  { question: "How can I track my order?", answer: "You'll receive a tracking link via email after your order ships." },
                  { question: "What if my package is lost?", answer: "Contact support@faqtemplates.app and we'll assist with a replacement or refund where applicable." },
                  { question: "Do you offer free shipping?", answer: "Orders over a certain amount may qualify for free shipping. See our shipping policy for details." },
                  { question: "Can I change my address?", answer: "If your order hasn't shipped yet, contact us to update the address." },
                  { question: "What couriers do you use?", answer: "We partner with trusted carriers like UPS, FedEx, and DHL depending on the region." },
                  { question: "Do you deliver on weekends?", answer: "Weekend delivery depends on carrier availability in your area." },
                ],
              },
              {
                id: 102,
                title: "Product Information",
                questions: 10,
                tags: ["Products", "Specifications"],
                faqs: [
                  { question: "What materials are used?", answer: "See product pages for detailed materials and care instructions." },
                  { question: "Are items true to size?", answer: "Refer to our sizing charts and reviews for fit guidance." },
                  { question: "Do products have warranties?", answer: "Many items include a limited warranty—details are listed per product." },
                  { question: "Are colors accurate?", answer: "We try to display colors accurately; slight variations may occur due to screens." },
                  { question: "How do I care for my item?", answer: "Care instructions are included on product pages and in packaging." },
                  { question: "Is assembly required?", answer: "Some products require simple assembly; instructions are provided." },
                  { question: "Are accessories included?", answer: "What's included is listed under 'In the box' on each product page." },
                  { question: "Can I request a custom order?", answer: "Contact support for custom options and availability." },
                  { question: "Are items sustainably sourced?", answer: "We work with suppliers that follow ethical and sustainable practices where possible." },
                  { question: "Where are products made?", answer: "Origin details are listed on the product page." },
                ],
              },
              {
                id: 103,
                title: "Payment & Checkout",
                questions: 7,
                tags: ["Payment", "Checkout"],
                faqs: [
                  { question: "What payment methods do you accept?", answer: "We accept major credit cards, PayPal, Apple Pay, and Google Pay." },
                  { question: "Is my payment secure?", answer: "Yes, we use encrypted payment processing and never store full card details." },
                  { question: "Why was my card declined?", answer: "Verify your details and funds or try another method; contact your bank if issues persist." },
                  { question: "Do you charge taxes?", answer: "Applicable taxes are calculated at checkout based on your location." },
                  { question: "Can I use multiple discounts?", answer: "Only one discount code can be applied per order unless stated otherwise." },
                  { question: "Can I pay later?", answer: "Some regions support pay‑later options through partners shown at checkout." },
                  { question: "How do I apply a gift card?", answer: "Enter the code at checkout and the balance will be applied." },
                ],
              },
              {
                id: 104,
                title: "Returns & Refunds",
                questions: 9,
                tags: ["Returns", "Refunds"],
                faqs: [
                  { question: "What is your return policy?", answer: "Returns are accepted within 30 days for unused items in original packaging." },
                  { question: "How do I start a return?", answer: "Use the returns portal or contact support for a prepaid label where available." },
                  { question: "When will I get my refund?", answer: "Refunds are processed 5–10 business days after we receive your item." },
                  { question: "Can I exchange an item?", answer: "Yes, exchanges are available for size/color while stock lasts." },
                  { question: "What if my item is damaged?", answer: "Contact us within 7 days of delivery with photos; we'll arrange a replacement." },
                  { question: "Are shipping fees refundable?", answer: "Original shipping fees are non‑refundable unless the return is due to our error." },
                  { question: "Do you offer free returns?", answer: "Free returns may apply to defective items; see the policy for details." },
                  { question: "How do I track my return?", answer: "Your return label includes tracking; updates will appear in your account." },
                  { question: "Can I return sale items?", answer: "Final‑sale items are not eligible for return unless faulty." },
                ],
              },
              {
                id: 105,
                title: "Account Management",
                questions: 6,
                tags: ["Account", "Security"],
                faqs: [
                  { question: "How do I create an account?", answer: "Register using your email or social login on the account page." },
                  { question: "How do I reset my password?", answer: "Click 'Forgot password' on the login page to receive a reset link." },
                  { question: "How do I change my address?", answer: "Update your shipping address from the account settings page." },
                  { question: "Can I view my order history?", answer: "Yes, order history and tracking are available in your account dashboard." },
                  { question: "How do I manage subscriptions?", answer: "Use the subscriptions section to pause, skip, or cancel deliveries." },
                  { question: "How do I delete my account?", answer: "Contact support to request deletion; we'll confirm via email." },
                ],
              },
              {
                id: 106,
                title: "Discounts & Promotions",
                questions: 8,
                tags: ["Discounts", "Offers"],
                faqs: [
                  { question: "How do I apply a discount code?", answer: "Enter your code at checkout; valid codes will adjust the total." },
                  { question: "Why isn't my code working?", answer: "Check the code's expiration, exclusions, and minimum purchase requirements." },
                  { question: "Do you offer student discounts?", answer: "Eligible students can contact support for verification and offers." },
                  { question: "Can I stack discounts?", answer: "Only one discount can be used per order unless otherwise specified." },
                  { question: "Do you run seasonal sales?", answer: "Yes, subscribe to our newsletter for early access to promotions." },
                  { question: "Are gift cards on sale?", answer: "Gift cards are typically excluded from discounts unless noted." },
                  { question: "Do discounts apply to shipping?", answer: "Discounts generally apply to products only, not shipping fees." },
                  { question: "How can I get the best deals?", answer: "Join our email list and follow social channels for exclusive codes and bundles." },
                ],
              },
            ].map((item) => (
              <ShopifyCard key={item.id} item={item as any} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Shopify FAQ Best Practices
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            FAQ sections on Shopify stores have been proven to increase conversion rates
            by reducing customer uncertainty. Our templates are designed to answer the most
            common questions your customers ask, improving their shopping experience and
            reducing support burden on your team.
          </p>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Implementation Tips</h3>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Place FAQ section near product information and checkout</li>
            <li>✓ Keep answers concise and scannable</li>
            <li>✓ Update FAQs based on customer support tickets</li>
            <li>✓ Use clear, benefit-focused language</li>
            <li>✓ Mobile-optimize your FAQ display</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
