"use client";

import { Dialog, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "@/types";
import { X, Github, ExternalLink, Calendar, Layers, Activity } from "lucide-react";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <DialogContent forceMount asChild>
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-background/80 backdrop-blur-sm"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl flex flex-col"
              >
                 <VisuallyHidden>
                    <DialogTitle>{project.title}</DialogTitle>
                 </VisuallyHidden>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-white/[0.02]">
                  <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-white/10 text-zinc-400 hover:text-white transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-6 overflow-y-auto custom-scrollbar">
                  {/* Meta */}
                  <div className="flex flex-wrap gap-4 mb-8">
                    <div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Calendar className="w-4 h-4" />
                      {project.year}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Layers className="w-4 h-4 text-primary-400" />
                      <span className="capitalize">{project.category}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-zinc-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
                      <Activity className="w-4 h-4 text-secondary-400" />
                      <span className="capitalize">{project.status.replace("-", " ")}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">About</h3>
                    <p className="text-zinc-400 leading-relaxed">
                      {project.longDescription || project.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-white mb-3">Key Highlights</h3>
                      <ul className="space-y-2">
                        {project.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-zinc-400">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="badge-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Actions */}
                <div className="p-6 border-t border-white/5 bg-white/[0.02] flex flex-wrap gap-4 mt-auto">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex-1 justify-center"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live Site
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline flex-1 justify-center"
                    >
                      <Github className="w-4 h-4" />
                      Source Code
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}
