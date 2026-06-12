"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { personalInfo, stats } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { MapPin, Mail, Terminal, Coffee } from "lucide-react";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-16">
          <h2 className="section-title">
            <AnimatedText text="About Me." />
          </h2>
          <p className="section-subtitle">
            A glimpse into my background, philosophy, and what drives me.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column - Text & Stats */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <GlowCard className="p-8 md:p-10" glowColor="violet">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">My Journey</h3>
              </div>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  I'm a full-stack engineer who loves building intuitive,
                  high-performance web applications. My journey started with a
                  simple curiosity about how things work on the internet, which
                  quickly turned into a deep passion for software engineering.
                </p>
                <p>
                  Today, I specialize in the React ecosystem (Next.js, TypeScript,
                  Tailwind CSS) on the frontend, and robust, scalable architectures
                  on the backend using Node.js, Python.
                </p>
                <p>
                  When I'm not coding, you can usually find me reading about
                  architecture patterns, exploring open-source projects, or
                  enjoying a good cup of coffee while designing my next side project.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-white/5">
                <div className="flex items-center gap-2 text-sm text-zinc-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <MapPin className="w-4 h-4 text-secondary-500" />
                  {personalInfo.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-zinc-300 bg-white/5 px-4 py-2 rounded-full border border-white/10">
                  <Coffee className="w-4 h-4 text-accent-500" />
                  Fueled by Espresso
                </div>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-300 bg-white/5 px-4 py-2 rounded-full border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary-400" />
                  {personalInfo.email}
                </a>
              </div>
            </GlowCard>
          </div>

          {/* Right Column - Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <GlowCard
                key={stat.label}
                glowColor={index % 2 === 0 ? "cyan" : "violet"}
                className="p-6 flex flex-col justify-center"
              >
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {stat.suffix}
                  </span>
                </div>
                <h4 className="text-sm font-semibold text-zinc-300 mb-1">
                  {stat.label}
                </h4>
                <p className="text-xs text-zinc-500">{stat.description}</p>
              </GlowCard>
            ))}

            {/* Empty decorative cell */}
            <GlowCard
              className="p-6 flex items-center justify-center col-span-2 relative overflow-hidden group"
              glowColor="none"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary-500/10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                <span className="text-zinc-400 text-sm font-mono tracking-wider">
                  CURRENTLY EXPLORING
                </span>
                <span className="font-medium text-white">
                  Rust & WebAssembly
                </span>
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
