"use client";

interface WordItem {
  title: string;
  questions: number;
}

export default function WordCard({ item }: { item: WordItem }) {
  function slugify(input: string) {
    return input.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  }

  function toRTF(): string {
    // Generate a lightweight RTF document so Word can open it properly.
    const esc = (s: string) => s.replace(/[\\{}]/g, (m) => `\\${m}`);
    const lines: string[] = [];
    lines.push("{\\rtf1\\ansi\\deff0");
    lines.push("{\\fonttbl{\\f0 Arial;}}");
    lines.push("\\f0\\fs26 ");
    lines.push(`\\b ${esc(item.title)}\\b0\\par`);
    lines.push("\\fs22 ");
    for (let i = 1; i <= item.questions; i++) {
      lines.push(`\\par \\b ${i}. Q: \\b0 Sample question ${i}?`);
      lines.push(`\\par A: Replace this sample answer ${i} with your content.\\par`);
    }
    lines.push("\\par Generated from faqtemplates.app");
    lines.push("}");
    return lines.join("\n");
  }

  function downloadWord() {
    const content = toRTF();
    const blob = new Blob([content], { type: "application/rtf" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `faq-${slugify(item.title)}.doc`; // .doc (RTF) opens in Word
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="border border-gray-200 rounded-lg p-6 hover:border-green-500 hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-3xl">📄</span>
        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{item.questions} questions + answers</p>
      <button
        onClick={downloadWord}
        className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium text-sm"
      >
        Download Word
      </button>
    </div>
  );
}

