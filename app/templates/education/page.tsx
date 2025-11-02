import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Education FAQ Templates for Courses & Schools",
  description:
    "Download education FAQ templates for online courses, schools, and learning platforms. Cover enrollment, access, grading, billing, and certification with clear answers.",
  alternates: {
    canonical: "https://faqtemplates.app/templates/education",
  },
};

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="pt-12 pb-8 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Education FAQ Templates
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Professional FAQ templates for online courses and educational platforms.
            Answer student questions about enrollment, access, course content, and more.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {[
              {
                category: "Enrollment & Access",
                questions: [
                  "How do I enroll in a course?",
                  "What are the prerequisites?",
                  "How do I access course materials?",
                  "When does the course start?",
                ],
              },
              {
                category: "Course Content",
                questions: [
                  "What topics are covered?",
                  "How long is each lesson?",
                  "Can I download course materials?",
                  "Are subtitles available?",
                ],
              },
              {
                category: "Learning Support",
                questions: [
                  "Can I ask questions to instructors?",
                  "Is there a discussion forum?",
                  "How long do I have to complete the course?",
                  "Can I take a course multiple times?",
                ],
              },
              {
                category: "Certification",
                questions: [
                  "Will I get a certificate?",
                  "Is the certificate recognized?",
                  "What's the passing grade?",
                  "Can I download my certificate?",
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
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Improve Student Experience
          </h2>
          <p className="text-gray-700 mb-6">
            Clear FAQs reduce support burden and improve student satisfaction with
            your online learning platform.
          </p>
          <a
            href="/#generator"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
          >
            Generate Education FAQ
          </a>
        </div>
      </section>
    </main>
  );
}
