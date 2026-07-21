"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050816]"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-black tracking-[0.4em] text-white"
            >
              HYDRO
              <span className="text-cyan-400">FIT</span>
            </motion.h1>

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 180 }}
              transition={{
                duration: 1.8,
                ease: "easeInOut",
              }}
              className="mx-auto mt-8 h-[3px] rounded-full bg-cyan-400"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}