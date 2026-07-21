import Container from "@/components/layout/Container";
import FAQItem from "./FAQItem";
import { faqData } from "./faqData";

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-32"
    >
      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            FAQ
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Frequently Asked
            <br />
            Questions
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Everything you need to know about HydroFit.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="mx-auto mt-20 max-w-4xl space-y-6">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}