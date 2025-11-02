import { NextRequest, NextResponse } from 'next/server';

// OpenAI API Integration
export async function POST(request: NextRequest) {
  try {
    const { topic } = await request.json();

    if (!topic || topic.trim().length === 0) {
      return NextResponse.json(
        { error: 'Topic is required' },
        { status: 400 }
      );
    }

    // Check if OpenAI API key is available
    const openaiApiKey = process.env.OPENAI_API_KEY;

    if (!openaiApiKey) {
      // Fallback to mock data if no API key
      console.log('No OpenAI API key found, using mock data');
      return NextResponse.json({
        faqs: generateMockFAQs(topic),
        source: 'mock'
      });
    }

    // Call OpenAI API
    const openaiResponse = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openaiApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: `You are an expert FAQ generator. Create 5-7 relevant, professional FAQ questions and answers for the given topic.

            Format your response as a JSON array with objects containing "question" and "answer" fields.

            Guidelines:
            - Questions should be common concerns customers would have
            - Answers should be informative but concise (50-100 words)
            - Use professional, helpful tone
            - Focus on practical information
            - Include relevant keywords naturally`
          },
          {
            role: 'user',
            content: `Generate FAQ for: ${topic}`
          }
        ],
        max_tokens: 1500,
        temperature: 0.7,
      }),
    });

    if (!openaiResponse.ok) {
      throw new Error(`OpenAI API error: ${openaiResponse.status}`);
    }

    const openaiData = await openaiResponse.json();
    const content = openaiData.choices[0]?.message?.content;

    if (!content) {
      throw new Error('No content received from OpenAI');
    }

    // Parse the JSON response from OpenAI
    let faqs;
    try {
      faqs = JSON.parse(content);
    } catch (parseError) {
      // If JSON parsing fails, fallback to mock data
      console.error('Failed to parse OpenAI response:', parseError);
      faqs = generateMockFAQs(topic);
    }

    return NextResponse.json({
      faqs,
      source: 'openai'
    });

  } catch (error) {
    console.error('FAQ Generation Error:', error);

    // Fallback to mock data on any error
    const { topic } = await request.json();
    return NextResponse.json({
      faqs: generateMockFAQs(topic),
      source: 'mock_fallback',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}

// Mock FAQ generation function
function generateMockFAQs(topic: string) {
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