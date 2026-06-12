"use client";

import { motion } from "framer-motion";
import { educationData } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { GraduationCap, Calendar } from "lucide-react";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="section-title">
            <AnimatedText text="Education." />
          </h2>
          <p className="section-subtitle">
            My academic background and formal learning journey.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlowCard className="p-6 sm:p-8" glowColor="cyan">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 shrink-0 rounded-xl bg-secondary-500/10 border border-secondary-500/20 flex items-center justify-center">
                      <GraduationCap className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-lg text-zinc-300 font-medium mb-2">
                        {edu.degree}
                      </p>
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-primary-400 font-medium">
                        {edu.details}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm font-mono text-zinc-500 md:pt-1">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.date}</span>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
