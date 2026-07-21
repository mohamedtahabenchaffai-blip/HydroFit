"use client";

import { motion } from "framer-motion";

import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

export default function FeatureGrid() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
    >
      {features.map((feature) => (
        <motion.div
          key={feature.id}
          variants={{
            hidden: {
              opacity: 0,
              y: 40,
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
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
          />
        </motion.div>
      ))}
    </motion.div>
  );
}