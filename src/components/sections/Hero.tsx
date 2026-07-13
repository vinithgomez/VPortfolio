"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Twitter, FileText, Sparkles, Code2, Database, Globe, Terminal, Layers, Cpu } from "lucide-react";
import { personalInfo } from "@/lib/data";

const ROLES = personalInfo.roles;

const floatingIcons = [
  { Icon: Code2, delay: 0, x: "10%", y: "20%", rotate: -12 },
  { Icon: Database, delay: 0.2, x: "88%", y: "25%", rotate: 8 },
  { Icon: Globe, delay: 0.4, x: "5%", y: "70%", rotate: -6 },
  { Icon: Terminal, delay: 0.6, x: "90%", y: "65%", rotate: 15 },
  { Icon: Layers, delay: 0.8, x: "15%", y: "80%", rotate: -10 },
  { Icon: Cpu, delay: 1.0, x: "80%", y: "80%", rotate: 5 },
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  // Typewriter
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayed(currentRole.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === currentRole.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const container: any = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const item: any = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background mesh */}
      <div className="absolute inset-0 mesh-bg" />
      <div className="absolute inset-0 bg-gradient-radial from-primary/8 via-transparent to-transparent" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(124,58,237,0.1) 0%, transparent 70%)" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating icons */}
      {floatingIcons.map(({ Icon, delay, x, y, rotate }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: 1 }}
          transition={{ delay: delay + 1, duration: 0.5 }}
          className="absolute hidden lg:flex items-center justify-center w-12 h-12 rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-sm animate-float"
          style={{ left: x, top: y, rotate: `${rotate}deg`, animationDelay: `${delay}s` }}
        >
          <Icon className="w-5 h-5 text-zinc-600" />
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Badge */}
        <motion.div variants={item} className="flex justify-center mb-8">
          <div className="badge-primary group cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500" />
            </span>
            {personalInfo.availability ? "Open to opportunities" : "Currently not available"}
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div variants={item} className="mb-6">
          <p className="text-zinc-500 text-lg font-medium mb-2 font-mono tracking-wide">
            Hello, I&apos;m
          </p>
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-none mb-4">
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          <div className="h-12 flex items-center justify-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-300">
              {displayed}
              <span className="animate-blink text-primary">|</span>
            </h2>
          </div>
        </motion.div>

        {/* Bio */}
        <motion.p
          variants={item}
          className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={item}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <motion.button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="btn-primary text-base px-7 py-3"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <Sparkles className="w-4 h-4" />
            View Projects
          </motion.button>
          <motion.a
            href={personalInfo.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-7 py-3"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <FileText className="w-4 h-4" />
            View Resume
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={item}
          className="flex items-center justify-center gap-4"
        >
          {[
            { Icon: Github, href: personalInfo.github, label: "GitHub" },
            { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { Icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
          ].map(({ Icon, href, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-xl border border-white/5 bg-white/[0.02] text-zinc-500 hover:text-white hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
              whileHover={{ y: -3, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <p className="text-xs font-mono text-zinc-600 tracking-widest uppercase">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-zinc-600" />
        </motion.div>
      </motion.div>
    </section>
  );
}
