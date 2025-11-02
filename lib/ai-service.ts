// AI Service Integration for FAQ Generation
// This file handles the actual AI API calls

interface FAQItem {
  question: string;
  answer: string;
}

interface AIResponse {
  faqs: FAQItem[];
  success: boolean;
  error?: string;
}

// OpenAI Integration
export async function generateFAQWithOpenAI(topic: string): Promise<AIResponse> {
  try {
    const response = await fetch('/api/generate-faq', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate FAQ');
    }

    const data = await response.json();
    return {
      faqs: data.faqs,
      success: true,
    };
  } catch (error) {
    console.error('AI Service Error:', error);
    return {
      faqs: [],
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Alternative: Claude API Integration
export async function generateFAQWithClaude(topic: string): Promise<AIResponse> {
  try {
    const response = await fetch('/api/generate-faq-claude', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });

    const data = await response.json();
    return {
      faqs: data.faqs,
      success: true,
    };
  } catch (error) {
    return {
      faqs: [],
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

// Fallback to mock data if AI services fail
export function generateMockFAQ(topic: string): FAQItem[] {
  return [
    {
      question: `What are the key features of ${topic}?`,
      answer: `${topic} offers several important features including easy customization, responsive design, and comprehensive integration options. These features are designed to help you create professional content quickly and efficiently.`,
    },
    {
      question: `How do I get started with ${topic}?`,
      answer: `Getting started is simple. Begin by defining your content needs, choose a template that matches your requirements, and customize it according to your brand guidelines. Our platform provides step-by-step guidance throughout the process.`,
    },
    {
      question: `Is ${topic} suitable for my business?`,
      answer: `${topic} works well for various business types including e-commerce, SaaS, agencies, and more. Whether you're a startup or established enterprise, our solution scales to meet your needs.`,
    },
    {
      question: `What support is available for ${topic}?`,
      answer: `We provide comprehensive support including documentation, video tutorials, and responsive customer support. Our team is available to help you maximize the value of ${topic}.`,
    },
    {
      question: `Can I customize ${topic} templates?`,
      answer: `Absolutely. All our templates are fully customizable. You can modify colors, text, layout, and structure to perfectly match your brand identity and specific requirements.`,
    },
  ];
}