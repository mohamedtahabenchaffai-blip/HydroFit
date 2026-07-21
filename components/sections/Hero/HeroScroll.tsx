export default function HeroScroll() {
  return (
    <div className="mt-16 flex justify-center">
      <a
        href="#features"
        className="group flex flex-col items-center gap-2"
      >
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 transition group-hover:text-cyan-400">
          Scroll
        </span>

        <div className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 p-1">
          <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-400" />
        </div>
      </a>
    </div>
  );
}