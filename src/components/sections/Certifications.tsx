"use client";

import { motion } from "framer-motion";
import { certificationsData } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="section-title">
            <AnimatedText text="Certifications & Achievements." />
          </h2>
          <p className="section-subtitle">
            Professional certifications demonstrating my continuous learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <GlowCard className="h-full p-6" glowColor="violet">
                <div className="flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary-400">
                      <Award className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-zinc-500 bg-white/5 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-auto font-medium">
                    Issuer: <span className="text-zinc-300">{cert.issuer}</span>
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
