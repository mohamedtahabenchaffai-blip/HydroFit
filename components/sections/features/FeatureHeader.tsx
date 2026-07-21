export default function FeatureHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
        Features
      </span>

      <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
        Everything You Need
        <br />
        In One Bottle
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        HydroFit combines hydration, performance and premium design into one
        innovative bottle built for athletes, fitness lovers and everyday
        lifestyle.
      </p>
    </div>
  );
}