interface FloatingCardProps {
  title: string;
  description: string;
}

export default function FloatingCard({
  title,
  description,
}: FloatingCardProps) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
      <h3 className="text-lg font-bold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-6 text-zinc-400">
        {description}
      </p>
    </div>
  );
}