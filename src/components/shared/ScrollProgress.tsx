"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const [scrollPct, setScrollPct] = useState(0);
  const scaleX = useSpring(scrollPct, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const pct = scrollTop / (scrollHeight - clientHeight);
      setScrollPct(pct);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[9997] h-[2px] bg-transparent">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-primary-400 to-secondary-500"
        style={{ scaleX }}
      />
    </div>
  );
}
