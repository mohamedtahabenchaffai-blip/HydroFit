import Image from "next/image";
import Container from "@/components/layout/Container";

export default function ProductShowcase() {
  return (
    <section
      id="showcase"
      className="py-28"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}

          <div>
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
              Product
            </span>

            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Designed For
              <br />
              Modern Athletes
            </h2>

            <p className="mt-8 text-lg leading-8 text-zinc-400">
              HydroFit combines elegant design with professional performance.
              Every detail has been carefully crafted to make hydration easier
              during workouts, office hours and outdoor adventures.
            </p>

            <ul className="mt-10 space-y-5 text-zinc-300">
              <li>✔ 1L Large Capacity</li>
              <li>✔ BPA Free Material</li>
              <li>✔ Leak-Proof Technology</li>
              <li>✔ Ergonomic Dumbbell Handle</li>
            </ul>
          </div>

          {/* Right */}

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

              <Image
                src="/images/bottle.png"
                alt="HydroFit Bottle"
                width={450}
                height={650}
                priority
                className="relative z-10 object-contain"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}