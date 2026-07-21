interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/20 text-3xl">
        {icon}
      </div>

      <h3 className="mb-3 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}