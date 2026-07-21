import HeroBackground from "./HeroBackground";
import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background Video */}
      <video
        src="/videos/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Left Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

      {/* Glow */}
      <HeroBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6 pt-20">
        <div className="max-w-2xl">
          <HeroContent />
          <HeroButtons />
          <HeroStats />
        </div>
      </div>
    </section>
  );
}