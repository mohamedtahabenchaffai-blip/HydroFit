export default function SectionDivider() {
  return (
    <div className="relative flex justify-center py-12">
      {/* Glow */}
      <div className="absolute h-24 w-96 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Line */}
      <div className="relative h-px w-full max-w-5xl bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
    </div>
  );
}