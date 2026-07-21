import Container from "@/components/layout/Container";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030611]">
      <Container>
        <div className="grid gap-16 py-20 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-black tracking-widest text-white">
              HYDRO
              <span className="text-cyan-400">FIT</span>
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-zinc-400">
              Premium hydration engineered for athletes, professionals and
              active lifestyles. Every sip brings you closer to your next
              achievement.
            </p>

            <div className="mt-8">
              <SocialLinks />
            </div>
          </div>

          {/* Navigation */}
          <FooterLinks />

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4 text-zinc-400">
              <p>contact@hydrofit.com</p>

              <p>+212 609 773 334</p>

              <p>Casablanca, Morocco</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-zinc-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} HydroFit. All rights reserved.
          </p>

          <p>
            Designed with ❤️ for athletes worldwide.
          </p>
        </div>
      </Container>
    </footer>
  );
}