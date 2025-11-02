import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Healthcare FAQ Templates for Medical Practices",
  description:
    "Compliant healthcare FAQ templates for clinics and medical practices. Address appointments, insurance, billing, patient care, privacy, and HIPAA policies.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/healthcare",
  },
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Healthcare FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional, HIPAA-compliant FAQ templates for healthcare providers. Answer
            patient questions about services, insurance, appointments, and more.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "Appointments",
                questions: [
                  "How do I schedule an appointment?",
                  "What time should I arrive?",
                  "Can I schedule online?",
                  "How can I cancel or reschedule?",
                ],
              },
              {
                category: "Insurance",
                questions: [
                  "What insurance plans do you accept?",
                  "What's my out-of-pocket cost?",
                  "Do you handle insurance billing?",
                  "What if you don't accept my insurance?",
                ],
              },
              {
                category: "Services",
                questions: [
                  "What services do you offer?",
                  "How long is a typical appointment?",
                  "Do you offer telemedicine?",
                  "What's the difference between services?",
                ],
              },
              {
                category: "Privacy & Security",
                questions: [
                  "How is my information protected?",
                  "Is telemedicine secure?",
                  "Can I access my medical records?",
                  "How long do you keep records?",
                ],
              },
            ].map((section, i) => (
              <div key={i} className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-2">
                  {section.questions.map((q, idx) => (
                    <li key={idx} className="text-gray-700">
                      • {q}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            HIPAA Compliance Note
          </h2>
          <p className="text-gray-700 mb-4">
            All templates are designed with HIPAA compliance in mind. However, ensure your
            FAQs don't inadvertently expose protected health information. Review all content
            before publishing to maintain patient privacy.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate Healthcare FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
