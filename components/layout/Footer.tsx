import Container from "./Container";
import Link from "next/link";

const links = [
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "Lifestyle", href: "#lifestyle" },
  { name: "FAQ", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}

          <Link
            href="/"
            className="text-2xl font-black tracking-widest text-white"
          >
            HYDRO
            <span className="text-cyan-400">FIT</span>
          </Link>

          {/* Navigation */}

          <nav className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 transition hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Copyright */}

          <p className="text-sm text-zinc-500">
            © {new Date().getFullYear()} HydroFit. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}