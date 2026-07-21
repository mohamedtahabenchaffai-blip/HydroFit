import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

      <Container>
        <div className="relative rounded-[40px] border border-white/10 bg-white/5 px-8 py-20 text-center backdrop-blur-xl md:px-16">
          <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Ready To Hydrate?
          </span>

          <h2 className="mt-8 text-4xl font-black text-white md:text-6xl">
            Upgrade Your
            <br />
            Hydration Today.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            Discover the premium HydroFit bottle engineered for athletes,
            professionals and everyone who wants to stay hydrated in style.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              Order Now
            </Button>

            <Button
              variant="outline"
              size="lg"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}