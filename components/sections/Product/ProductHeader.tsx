export default function ProductHeader() {
  return (
    <div className="mx-auto mb-20 max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Product
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
        Designed To
        <br />
        Be Seen.
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        HydroFit is more than a water bottle. It's a premium fitness companion
        engineered for performance, durability and modern lifestyle.
      </p>
    </div>
  );
}