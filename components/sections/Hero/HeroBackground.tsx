export default function HeroBackground() {
  return (
    <>
      {/* Left Glow */}
      <div className="absolute left-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[140px]" />

      {/* Right Glow */}
      <div className="absolute right-0 top-40 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[160px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-sky-400/10 blur-[120px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}