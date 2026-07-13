"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { Briefcase, Calendar, ChevronRight } from "lucide-react";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="section-title">
            <AnimatedText text="Experience." />
          </h2>
          <p className="section-subtitle">
            My professional journey and the companies I&apos;ve helped grow.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical timeline line */}
          <div className="absolute left-0 md:left-[220px] top-4 bottom-0 w-px bg-white/10" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-4px] md:left-[216px] top-5 w-2 h-2 rounded-full bg-primary shadow-glow hidden md:block" />

                {/* Left Side: Date & Company */}
                <div className="md:w-[180px] shrink-0 pt-3 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end text-sm font-mono text-zinc-500 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>
                      {exp.startDate} — {exp.endDate || "Present"}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  <div className="text-sm text-zinc-400 mt-1 flex md:justify-end gap-2">
                    <span className="badge-muted">{exp.type}</span>
                  </div>
                </div>

                {/* Right Side: Role & Details */}
                <GlowCard className="flex-1 p-6 sm:p-8" glowColor="violet">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h4>
                        {exp.current && (
                          <span className="text-xs font-medium text-secondary-400 tracking-wide uppercase">
                            Current Role
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-400 text-sm sm:text-base">
                        <ChevronRight className="w-5 h-5 text-primary-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                    {exp.tech.map((tech) => (
                      <span key={tech} className="badge-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
