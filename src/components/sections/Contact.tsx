"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import SectionWrapper from "../shared/SectionWrapper";
import GlowCard from "../shared/GlowCard";
import AnimatedText from "../shared/AnimatedText";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: FormValues) => {
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Failed to send message");
      }

      setStatus("success");
      reset();

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: any) {
      console.error(err);
      setStatus("error");
      setErrorMessage(err.message || "Something went wrong. Please try again or email me directly.");

      // Fallback: Open mail client if API fails
      if (err.message?.includes("API key")) {
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(data.message)}`;
      }
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title justify-center">
            <AnimatedText text="Let's Connect." />
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind, a question, or just want to say hi? I'd love to hear from you.
          </p>
        </div>

        <GlowCard className="p-6 sm:p-10" glowColor="violet">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-zinc-300">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Vinith Gomez"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                    errors.name ? "border-red-500/50" : "border-white/10"
                  )}
                  {...register("name")}
                />
                {errors.name && (
                  <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="vinith@example.com"
                  className={cn(
                    "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                    errors.email ? "border-red-500/50" : "border-white/10"
                  )}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-xs text-red-400 mt-1">{errors.email.message}</p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-zinc-300">
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="What is this regarding?"
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors",
                  errors.subject ? "border-red-500/50" : "border-white/10"
                )}
                {...register("subject")}
              />
              {errors.subject && (
                <p className="text-xs text-red-400 mt-1">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-300">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Your message here..."
                className={cn(
                  "w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-colors resize-none",
                  errors.message ? "border-red-500/50" : "border-white/10"
                )}
                {...register("message")}
              />
              {errors.message && (
                <p className="text-xs text-red-400 mt-1">{errors.message.message}</p>
              )}
            </div>

            {/* Status Messages */}
            <AnimatePresence mode="wait">
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-500/10 p-4 rounded-xl border border-green-500/20"
                >
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <p className="text-sm">Message sent successfully! I'll get back to you soon.</p>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-3 text-amber-400 bg-amber-500/10 p-4 rounded-xl border border-amber-500/20"
                >
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 sm:mt-0" />
                  <div className="text-sm flex-1">
                    <p>{errorMessage}</p>
                    {errorMessage.includes("API key") && (
                      <p className="mt-1 text-amber-200/70">
                        Opening your default mail client instead as a fallback.
                      </p>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "loading" || !isValid}
              className={cn(
                "w-full btn-primary justify-center py-3.5 text-base relative overflow-hidden group",
                (status === "loading" || !isValid) && "opacity-70 cursor-not-allowed hover:scale-100"
              )}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-2">
                {status === "loading" ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </span>
            </button>
          </form>
        </GlowCard>
      </div>
    </SectionWrapper>
  );
}
