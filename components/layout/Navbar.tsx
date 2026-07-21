"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "./Container";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Technology", href: "#technology" },
  { name: "Lifestyle", href: "#lifestyle" },
  { name: "FAQ", href: "#faq" },
];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-black/50 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="text-2xl font-black tracking-widest text-white"
        >
          HYDRO
          <span className="text-blue-500">FIT</span>
        </Link>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA */}

        <div className="hidden lg:block">
          <Button size="md">
            Order Now
          </Button>
        </div>

        {/* Mobile */}

        <button
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
          aria-label="Open menu"
        >
          ☰
        </button>
      </Container>
    </header>
  );
}