"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const percentage = (scrollTop / scrollHeight) * 100;

      setProgress(percentage);
    };

    window.addEventListener("scroll", updateProgress);

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-[3px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 transition-all duration-150"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}