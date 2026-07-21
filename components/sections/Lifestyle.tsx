import Container from "@/components/layout/Container";

const lifestyleItems = [
  {
    title: "Gym Training",
    description:
      "Stay hydrated during every workout with a comfortable dumbbell grip.",
    icon: "🏋️",
  },
  {
    title: "Office",
    description:
      "A premium bottle that fits perfectly into your daily workspace.",
    icon: "💼",
  },
  {
    title: "Travel",
    description:
      "Lightweight, durable and ready to follow you everywhere.",
    icon: "✈️",
  },
  {
    title: "Outdoor",
    description:
      "Perfect for hiking, cycling and every outdoor adventure.",
    icon: "🏕️",
  },
];

export default function Lifestyle() {
  return (
    <section
      id="lifestyle"
      className="py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Lifestyle
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Designed For
            <br />
            Every Lifestyle.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Whether you're training, working or exploring the outdoors,
            HydroFit is built to keep up with your lifestyle.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {lifestyleItems.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="text-5xl">
                {item.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-zinc-400 leading-7">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}