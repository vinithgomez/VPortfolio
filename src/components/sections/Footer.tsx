"use client";

import { Github, Linkedin, Twitter, Sparkles } from "lucide-react";
import { personalInfo, navItems } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="font-bold text-white tracking-tight text-xl">
                {personalInfo.name}
                <span className="text-primary">.</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs text-center md:text-left">
              Building digital experiences with purpose, precision, and passion.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h4>
            <ul className="flex flex-col items-center md:items-start gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-zinc-500 hover:text-white transition-colors text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Socials</h4>
            <div className="flex items-center gap-3">
              {[
                { Icon: Github, href: personalInfo.github, label: "GitHub" },
                { Icon: Linkedin, href: personalInfo.linkedin, label: "LinkedIn" },
                { Icon: Twitter, href: personalInfo.twitter, label: "Twitter" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg bg-white/5 text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright & Tech */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 text-xs text-zinc-500">
          <p>© {currentYear} {personalInfo.fullName}. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <span>Built with</span>
            <span className="text-zinc-300 font-medium">Next.js</span>
            <span>&</span>
            <span className="text-zinc-300 font-medium">Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
