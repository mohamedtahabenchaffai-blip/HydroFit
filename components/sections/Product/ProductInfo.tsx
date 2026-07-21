import Button from "@/components/ui/Button";

export default function ProductInfo() {
  return (
    <div className="max-w-xl">
      <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Premium Design
      </span>

      <h3 className="mt-6 text-5xl font-black leading-tight text-white">
        Built For
        <br />
        Every Workout.
      </h3>

      <p className="mt-6 text-lg leading-8 text-zinc-400">
        HydroFit combines hydration and fitness into one premium product.
        Lightweight, durable and designed for athletes who never stop
        improving.
      </p>

      <ul className="mt-10 space-y-4 text-zinc-300">
        <li>✓ BPA Free Material</li>
        <li>✓ Leak Proof Technology</li>
        <li>✓ Ergonomic Dumbbell Shape</li>
        <li>✓ Luxury Matte Finish</li>
      </ul>

      <div className="mt-10">
        <Button size="lg">
          Order Now
        </Button>
      </div>
    </div>
  );
}