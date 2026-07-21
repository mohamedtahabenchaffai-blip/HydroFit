import Container from "@/components/layout/Container";
import BenefitCard from "./BenefitCard";
import { benefitsData } from "./benefitsData";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Benefits
          </span>

          <h2 className="mt-6 text-5xl font-black text-white md:text-6xl">
            Why Choose
            <br />
            HydroFit?
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every detail has been designed to deliver premium quality,
            performance and comfort for your everyday hydration.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {benefitsData.map((benefit) => (
            <BenefitCard
              key={benefit.title}
              title={benefit.title}
              description={benefit.description}
              icon={benefit.icon}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}