import Navbar from "@/components/layout/Navbar";

import Hero from "@/components/sections/Hero/Hero";
import Features from "@/components/sections/features/Features";
import Technology from "@/components/sections/Technology";
import Lifestyle from "@/components/sections/Lifestyle";
import Testimonials from "@/components/sections/Testimonials/Testimonials";
import FAQ from "@/components/sections/FAQ/FAQ";
import Benefits from "@/components/sections/Benefits/Benefits";
import CTA from "@/components/sections/CTA/CTA";
import Footer from "@/components/sections/Footer/Footer";

export default function HomePage() {
  return (
    <main className="bg-[#050816] text-white">
      <Navbar />

      <Hero />

      <Features />

      <Technology />

      <Lifestyle />

      <Benefits />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </main>
  );
}