"use client";
import { useState } from "react";
import { FAQ } from "@/data/blog";

interface BlogFAQProps {
  faqs: FAQ[];
}

export default function BlogFAQ({ faqs }: BlogFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const formatText = (text: string) => {
    if (!text) return "";
    return text.replace(/\[\[bold\]\]/g, "<b>").replace(/\[\[\/bold\]\]/g, "</b>");
  };

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border rounded-lg p-4">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex justify-between w-full text-left font-semibold"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <p
                className="mt-2 text-gray-600"
                dangerouslySetInnerHTML={{ __html: formatText(faq.answer) }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
