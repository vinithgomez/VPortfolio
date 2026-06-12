"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { Code2, Monitor, Server, Database, Cloud, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, any> = {
  Code2,
  Monitor,
  Server,
  Database,
  Cloud,
  Wrench,
};

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="section-title">
            <AnimatedText text="Technical Arsenal." />
          </h2>
          <p className="section-subtitle">
            Tools and technologies I use to bring ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.icon] || Code2;
            
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <GlowCard className="h-full p-6 sm:p-8" glowColor="cyan">
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div 
                      className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center cursor-default"
                      whileHover={{ rotateY: 360 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white">
                      {category.label}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {category.skills.map((skill) => (
                      <li key={skill.name} className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                        <span className="font-medium text-[15px]">{skill.name}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
