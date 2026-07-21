"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <>
      <motion.span
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 backdrop-blur"
      >
        💧 The Future of Hydration
      </motion.span>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 text-5xl font-black leading-tight tracking-tight md:text-7xl"
      >
        Every Sip
        <br />
        Brings You
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
          Closer.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-8 max-w-xl text-lg leading-8 text-gray-400"
      >
        HydroFit combines hydration and fitness into one premium product.
        Designed for athletes, professionals and everyday performers who
        never stop improving.
      </motion.p>
    </>
  );
}