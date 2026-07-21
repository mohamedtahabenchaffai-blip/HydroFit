"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "1L",
    label: "Large Capacity",
  },
  {
    value: "2 in 1",
    label: "Bottle + Dumbbell",
  },
  {
    value: "BPA Free",
    label: "Premium Material",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.8,
          },
        },
      }}
      className="mt-14 flex flex-wrap gap-10"
    >
      {stats.map((item) => (
        <motion.div
          key={item.value}
          variants={{
            hidden: {
              opacity: 0,
              y: 30,
            },
            show: {
              opacity: 1,
              y: 0,
            },
          }}
          transition={{
            duration: 0.6,
          }}
        >
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-1 text-sm text-gray-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}