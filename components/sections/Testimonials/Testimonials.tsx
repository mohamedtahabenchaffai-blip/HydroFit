import Container from "@/components/layout/Container";

const testimonials = [
  {
    name: "Alex Morgan",
    role: "Fitness Coach",
    text: "The best bottle I've ever used. Premium quality and incredibly comfortable during workouts.",
    rating: 5,
  },
  {
    name: "Sarah Wilson",
    role: "CrossFit Athlete",
    text: "Beautiful design, lightweight and leak-proof. Exactly what I needed.",
    rating: 5,
  },
  {
    name: "Daniel Brooks",
    role: "Runner",
    text: "HydroFit keeps me motivated to drink more water every single day.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-32"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Testimonials
          </span>

          <h2 className="mt-6 text-5xl font-black text-white">
            Loved By
            <br />
            Athletes.
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Thousands of fitness enthusiasts trust HydroFit every day.
          </p>
        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
            >
              <div className="text-yellow-400 text-xl">
                {"★★★★★"}
              </div>

              <p className="mt-6 leading-8 text-zinc-300">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-white">
                  {item.name}
                </h3>

                <p className="text-sm text-cyan-400">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}