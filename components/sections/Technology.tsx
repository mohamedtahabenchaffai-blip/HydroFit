import Container from "@/components/layout/Container";

const technologies = [
  {
    title: "Food Grade Material",
    description:
      "Made with premium BPA-free plastic that is safe, durable and built for everyday hydration.",
    icon: "🧪",
  },
  {
    title: "Leak-Proof System",
    description:
      "Advanced sealing technology prevents accidental spills wherever you go.",
    icon: "💧",
  },
  {
    title: "Ergonomic Grip",
    description:
      "Comfortable dumbbell-inspired handle designed for training and travel.",
    icon: "🏋️",
  },
  {
    title: "Wide Opening",
    description:
      "Easy to refill, clean and add ice cubes in just a few seconds.",
    icon: "🧊",
  },
];

export default function Technology() {
  return (
    <section
      id="technology"
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <Container>
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Technology
          </span>

          <h2 className="mt-6 text-4xl font-black text-white md:text-6xl">
            Engineered To
            <br />
            Perform.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Every HydroFit bottle combines premium materials, smart engineering
            and modern design to deliver the ultimate hydration experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-24">
          {/* Vertical Line */}
          <div className="absolute left-1/2 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-cyan-500/0 via-cyan-500/40 to-cyan-500/0 lg:block" />

          <div className="space-y-10">
            {technologies.map((item, index) => (
              <div
                key={item.title}
                className={`flex ${
                  index % 2 === 0
                    ? "lg:flex-row"
                    : "lg:flex-row-reverse"
                } items-center gap-10`}
              >
                {/* Card */}
                <div className="w-full lg:w-1/2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
                    <div className="text-5xl">
                      {item.icon}
                    </div>

                    <h3 className="mt-6 text-2xl font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-7 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Dot */}
                <div className="hidden lg:flex h-5 w-5 items-center justify-center rounded-full border-4 border-cyan-400 bg-[#050816]" />

                {/* Empty Side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}