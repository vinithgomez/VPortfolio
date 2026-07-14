"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { navItems, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = navItems.map((item) => item.href.slice(1));
      let current = "";

      // Reverse to check bottom-most sections first
      for (const id of sectionIds.slice().reverse()) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // If the section's top is above 40% of viewport and bottom is below 0
          if (rect.top <= window.innerHeight * 0.4 && rect.bottom >= 0) {
            current = `#${id}`;
            break;
          }
        }
      }

      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Small delay to ensure DOM is fully mounted
    setTimeout(handleScroll, 100);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 md:top-6 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6"
      >
        <nav className={cn(
          "max-w-6xl mx-auto px-6 py-3 flex items-center justify-between relative rounded-full transition-all duration-300",
          scrolled ? "glass border border-white/10 shadow-xl" : "bg-zinc-950 border border-white/5"
        )}>
          {/* Logo */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="font-bold text-white tracking-tight text-xl">
              VG<span className="text-primary">.</span>
            </span>
          </motion.button>

          {/* Desktop Nav */}
          <ul className="hidden xl:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200",
                    activeSection === item.href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white"
                  )}
                >
                  {activeSection === item.href && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 bg-white/10 rounded-full"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>

          {/* Socials & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-3">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
            
            <div className="w-px h-5 bg-white/15" />
            
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-white text-black hover:bg-zinc-200 transition-colors px-5 py-2 rounded-full text-sm font-medium"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="xl:hidden p-2 rounded-full bg-white/5 text-zinc-400 hover:text-white transition-colors ml-auto md:ml-0"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-[80px] z-40 glass border border-white/10 rounded-2xl xl:hidden overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "text-left px-4 py-3 rounded-xl text-sm font-medium transition-all",
                    activeSection === item.href
                      ? "text-white bg-primary/20"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
              <div className="flex items-center gap-4 pt-4 mt-2 border-t border-white/10 justify-center">
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white">
                  <Github className="w-5 h-5" />
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-zinc-400 hover:text-white">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
              <div className="pt-4 mt-2">
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="w-full bg-white text-black py-3 rounded-xl text-sm font-medium"
                >
                  Hire Me
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
