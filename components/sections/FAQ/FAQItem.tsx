"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({
  question,
  answer,
}: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <h3 className="text-lg font-bold text-white">
          {question}
        </h3>

        <span
          className={`text-2xl font-light text-cyan-400 transition-transform duration-300 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-40 px-6 pb-6" : "max-h-0"
        }`}
      >
        <p className="leading-7 text-zinc-400">
          {answer}
        </p>
      </div>
    </div>
  );
}