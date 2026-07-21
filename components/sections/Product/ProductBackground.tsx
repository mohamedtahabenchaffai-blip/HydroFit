export default function ProductBackground() {
  return (
    <>
      {/* Glow Left */}
      <div className="absolute left-0 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Glow Right */}
      <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-blue-600/10 blur-[160px]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </>
  );
}