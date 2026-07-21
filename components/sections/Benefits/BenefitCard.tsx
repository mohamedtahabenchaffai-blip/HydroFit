interface BenefitCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function BenefitCard({
  title,
  description,
  icon,
}: BenefitCardProps) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10">
      <div className="text-5xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-zinc-400">
        {description}
      </p>
    </div>
  );
}