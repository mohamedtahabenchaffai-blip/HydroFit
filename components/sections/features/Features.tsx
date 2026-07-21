"use client";

import { motion } from "framer-motion";

import Container from "@/components/layout/Container";
import FeatureHeader from "./FeatureHeader";
import FeatureGrid from "./FeatureGrid";

export default function Features() {
  return (
    <motion.section
      id="features"
      className="relative overflow-hidden py-28"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8 }}
    >
      <Container>
        <FeatureHeader />

        <FeatureGrid />
      </Container>
    </motion.section>
  );
}