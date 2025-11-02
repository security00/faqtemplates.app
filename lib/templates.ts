// Centralized mock template data used by Preview modal and preview page.
// In a real app, replace this with a DB/service call.

export interface TemplateFAQ {
  question: string;
  answer: string;
}

export interface TemplateDetail {
  id: number;
  category: string;
  title: string;
  description: string;
  questions: number;
  downloads: number;
  faqs: TemplateFAQ[];
}

// Note: Only a subset of templates include detailed FAQs for now (1-3).
// The rest will gracefully fall back to the full preview page.
export const templatesById: Record<string, TemplateDetail> = {
  "1": {
    id: 1,
    category: "E-commerce",
    title: "Online Store FAQ",
    description:
      "Common questions about shipping, returns, products, and payments",
    questions: 8,
    downloads: 2341,
    faqs: [
      {
        question: "What are your shipping options?",
        answer:
          "We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight shipping. Shipping costs vary based on location and order value.",
      },
      {
        question: "What is your return policy?",
        answer:
          "We accept returns within 30 days of purchase. Items must be in original condition with tags attached. Return shipping is free for defective items.",
      },
      {
        question: "Do you ship internationally?",
        answer:
          "Yes, we ship to over 50 countries worldwide. International shipping times vary by destination, typically 7-14 business days.",
      },
      {
        question: "How can I track my order?",
        answer:
          "Once your order ships, you'll receive a tracking number via email. You can also track your order by logging into your account.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay.",
      },
      {
        question: "Can I cancel or modify my order?",
        answer:
          "Orders can be cancelled or modified within 1 hour of placement. After that, please contact customer service for assistance.",
      },
      {
        question: "Do you offer customer support?",
        answer:
          "Yes, our customer support team is available Monday-Friday 9AM-6PM EST via email, phone, and live chat.",
      },
      {
        question: "Are your products covered by warranty?",
        answer:
          "All products come with a manufacturer's warranty. Warranty terms vary by product - check individual product pages for details.",
      },
    ],
  },
  "2": {
    id: 2,
    category: "SaaS",
    title: "Software Pricing & Features",
    description: "Address pricing questions, features, and integration queries",
    questions: 10,
    downloads: 1823,
    faqs: [
      {
        question: "What pricing plans do you offer?",
        answer:
          "We offer three plans: Starter ($9/month), Professional ($29/month), and Enterprise ($99/month). All plans include a 14-day free trial.",
      },
      {
        question: "Can I change my plan anytime?",
        answer:
          "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated.",
      },
      {
        question: "What integrations are available?",
        answer:
          "We integrate with 100+ popular tools including Slack, Google Workspace, Microsoft 365, Salesforce, and Zapier.",
      },
      {
        question: "Is there a free trial?",
        answer:
          "Yes, all plans include a 14-day free trial with full access to features. No credit card required to start.",
      },
      {
        question: "What's included in the Enterprise plan?",
        answer:
          "Enterprise includes unlimited users, advanced analytics, priority support, custom integrations, and dedicated account management.",
      },
      {
        question: "Do you offer annual discounts?",
        answer:
          "Yes, annual plans receive a 20% discount compared to monthly billing. Enterprise customers can get custom pricing.",
      },
      {
        question: "What kind of support do you provide?",
        answer:
          "All plans include email support. Professional and Enterprise plans also include priority support and phone/video calls.",
      },
      {
        question: "Can I export my data?",
        answer:
          "Yes, you can export all your data at any time in CSV, JSON, or PDF formats. No vendor lock-in.",
      },
      {
        question: "Is my data secure?",
        answer:
          "We use enterprise-grade security with SOC 2 compliance, end-to-end encryption, and regular security audits.",
      },
      {
        question: "Do you offer custom development?",
        answer:
          "Enterprise customers can request custom features and integrations. Contact our sales team for pricing and timelines.",
      },
    ],
  },
  "3": {
    id: 3,
    category: "Support",
    title: "Technical Support Center",
    description:
      "Troubleshooting guides and technical support information",
    questions: 12,
    downloads: 1564,
    faqs: [
      {
        question: "How do I reset my password?",
        answer:
          "Click 'Forgot Password' on the login page, enter your email, and follow the instructions in the reset email.",
      },
      {
        question: "Why isn't my feature working?",
        answer:
          "First, try refreshing the page and clearing your browser cache. If the issue persists, check our status page or contact support.",
      },
      {
        question: "What browsers are supported?",
        answer:
          "We support the latest versions of Chrome, Firefox, Safari, and Edge. Internet Explorer is not supported.",
      },
      {
        question: "How do I update to the latest version?",
        answer:
          "For web apps, updates are automatic. For desktop apps, check the 'Help' menu for update options or download from our website.",
      },
      {
        question: "Why am I getting an error message?",
        answer:
          "Error messages usually indicate a specific issue. Take a screenshot and contact support with the exact error text for faster resolution.",
      },
      {
        question: "How do I clear my cache?",
        answer:
          "In Chrome: Ctrl+Shift+Delete, select 'Cached images and files', then click 'Clear data'. Instructions vary by browser.",
      },
      {
        question: "Can I use the app offline?",
        answer:
          "Some features work offline, but full functionality requires an internet connection. Offline changes sync when reconnected.",
      },
      {
        question: "How do I backup my data?",
        answer:
          "Go to Settings > Data Management > Export Data. Choose your format and download the backup file.",
      },
      {
        question: "What are the system requirements?",
        answer:
          "Minimum: 4GB RAM, modern browser, stable internet. Recommended: 8GB RAM, latest browser version, high-speed internet.",
      },
      {
        question: "How do I contact technical support?",
        answer:
          "Use the in-app chat, email support@faqtemplates.app, or call our support line. Include your account details and error descriptions.",
      },
      {
        question: "Can I customize the interface?",
        answer:
          "Yes, go to Settings > Appearance to change themes, layouts, and display options. Some customizations require a Pro account.",
      },
      {
        question: "How do I delete my account?",
        answer:
          "Go to Settings > Account > Delete Account. This action is permanent and cannot be undone. Export your data first if needed.",
      },
    ],
  },
  "4": {
    id: 4,
    category: "Services",
    title: "Consulting Services FAQ",
    description:
      "Service descriptions, pricing, engagement process, and timelines for consulting and agency work.",
    questions: 7,
    downloads: 943,
    faqs: [
      { question: "What services do you offer?", answer: "We provide strategy consulting, implementation, and training packages. Custom engagements are available on request." },
      { question: "How do your pricing models work?", answer: "We offer fixed‑price packages for common scopes and time‑and‑materials for bespoke projects. All pricing is transparent and agreed before kickoff." },
      { question: "What is the typical project timeline?", answer: "Most projects complete in 2–6 weeks depending on scope and team availability. We share a detailed timeline during discovery." },
      { question: "Do you provide post‑project support?", answer: "Yes, every engagement includes 30 days of support. Ongoing retainers are also available for continuous improvement." },
      { question: "How do revisions and feedback work?", answer: "Each milestone includes review cycles. We gather feedback, make revisions, and confirm acceptance before moving forward." },
      { question: "Can you sign an NDA?", answer: "We handle sensitive information and are happy to sign mutual NDAs before sharing project details." },
      { question: "What tools do you use for collaboration?", answer: "We use Slack or email for communication, and share docs via Google Drive. PM tools like Trello/Jira can be used when preferred." },
    ],
  },
  "5": {
    id: 5,
    category: "Healthcare",
    title: "Medical Practice FAQ",
    description:
      "Patient questions about services, insurance, appointments, and privacy for clinics and practices.",
    questions: 9,
    downloads: 756,
    faqs: [
      { question: "What insurance plans do you accept?", answer: "We accept most major insurance plans. Please contact support@faqtemplates.app with your provider for verification." },
      { question: "How do I schedule an appointment?", answer: "Book online via our portal or call our front desk during business hours. Same‑day appointments are limited." },
      { question: "Do you offer telemedicine?", answer: "Yes, virtual visits are available for eligible concerns. Your provider will confirm suitability." },
      { question: "What should I bring to my first visit?", answer: "Bring a government ID, insurance card, current medications, and any relevant medical records or referrals." },
      { question: "How do I access my medical records?", answer: "Use the patient portal to request records or updates. We process requests within 3–5 business days." },
      { question: "Is my information private?", answer: "We follow HIPAA guidelines and protect your data with administrative and technical safeguards." },
      { question: "What are the office hours?", answer: "Our office is open Monday–Friday, 9am–6pm local time. Limited weekend hours are available for urgent needs." },
      { question: "What is your cancellation policy?", answer: "Please cancel or reschedule at least 24 hours in advance to avoid a late cancellation fee." },
      { question: "Do you provide after‑hours support?", answer: "For emergencies call 911. For non‑urgent matters, leave a message and we will respond the next business day." },
    ],
  },
  "6": {
    id: 6,
    category: "Education",
    title: "Online Course FAQ",
    description:
      "Student questions about enrollment, course access, billing, and certificates for online learning platforms.",
    questions: 11,
    downloads: 1245,
    faqs: [
      { question: "How do I enroll in a course?", answer: "Create an account, choose your course, and complete checkout. You’ll receive instant access after payment." },
      { question: "How long do I have access?", answer: "Most courses include lifetime access, including future updates, unless otherwise specified on the course page." },
      { question: "Can I learn at my own pace?", answer: "Yes, courses are self‑paced. You can pause and resume lessons anytime from any device." },
      { question: "Do you offer certificates?", answer: "A certificate of completion is provided when you finish all required lessons and quizzes." },
      { question: "What if I need a refund?", answer: "We offer a 14‑day refund window for qualifying purchases. See our refund policy for details." },
      { question: "Are subtitles available?", answer: "Most lessons include English captions. Additional languages may be added over time." },
      { question: "Can I download materials?", answer: "Resources and templates are downloadable where permitted. Video downloads are not available unless stated." },
      { question: "Do you have student discounts?", answer: "Eligible students can contact support@faqtemplates.app for discount options and verification requirements." },
      { question: "Which devices are supported?", answer: "You can access the course on modern browsers for desktop and mobile. Progress syncs across devices." },
      { question: "Is there instructor support?", answer: "Many courses include discussion boards or periodic Q&A sessions with instructors." },
      { question: "How do I contact support?", answer: "Email support@faqtemplates.app for account, billing, or technical questions." },
    ],
  },
};

export function getTemplateById(id: string | number): TemplateDetail | undefined {
  return templatesById[String(id)];
}

// Generate a generic placeholder when a specific template id has no curated data.
export function getPlaceholderTemplate(id: string | number): TemplateDetail {
  const num = Number(id);
  const title = `FAQ Template #${isFinite(num) && num > 0 ? num : String(id)}`;
  const faqs: TemplateFAQ[] = [
    {
      question: "What is this template about?",
      answer:
        "This is a sample FAQ template you can customize. Replace questions and answers to match your product or service.",
    },
    {
      question: "How can I edit the content?",
      answer:
        "Use the AI generator to create new questions and answers, or edit directly after downloading the template.",
    },
    {
      question: "Can I download the template?",
      answer:
        "Yes. Use the download button to save a Markdown or Word version and modify it locally.",
    },
    {
      question: "Is this template SEO‑friendly?",
      answer:
        "Yes. Questions are structured to target long‑tail queries and are easy to scan for users and search engines.",
    },
    {
      question: "How many questions should I include?",
      answer:
        "Start with 8–12 essential questions and expand over time based on support tickets and customer feedback.",
    },
    {
      question: "Can I brand this template?",
      answer:
        "You can fully customize headings, tone, and formatting to match your brand guidelines.",
    },
    {
      question: "Where should I place FAQs on my site?",
      answer:
        "Place FAQs near product pages, pricing, or support areas. Link from navigation and footer for discoverability.",
    },
    {
      question: "How often should I update FAQs?",
      answer:
        "Review quarterly and update based on new features, policies, or common customer questions.",
    },
  ];

  return {
    id: isFinite(num) && num > 0 ? num : 0,
    category: "General",
    title,
    description:
      "Generic placeholder FAQ template with sample questions and best‑practice answers. Customize it to fit your business.",
    questions: faqs.length,
    downloads: 0,
    faqs,
  };
}
