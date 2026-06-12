"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "violet" | "cyan" | "none";
}

export default function GlowCard({
  children,
  className,
  glowColor = "violet",
}: GlowCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className={cn(
        "glass-card relative overflow-hidden cursor-default",
        className
      )}
    >
      {/* Gradient highlight on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className={cn(
          "absolute inset-0 pointer-events-none",
          glowColor === "violet" && "bg-gradient-radial from-primary/5 via-transparent to-transparent",
          glowColor === "cyan" && "bg-gradient-radial from-secondary-500/5 via-transparent to-transparent",
          glowColor === "none" && "hidden"
        )}
      />

      {/* Top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
