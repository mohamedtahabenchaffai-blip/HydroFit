"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay: 0.6,
      }}
      className="mt-10 flex flex-wrap items-center gap-4"
    >
      <Button>
        Pre-Order Now
      </Button>

      <button className="rounded-full border border-white/15 px-8 py-4 text-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white/5 hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]">
        Learn More
      </button>
    </motion.div>
  );
}