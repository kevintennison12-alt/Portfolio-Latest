import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Bot, Download, Cpu, Sparkles, ChevronDown, Music } from "lucide-react";

interface HeroProps {
  onOpenChat: () => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenChat, onOpenResumeModal }: HeroProps) {
  const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-[#050505]"
    >
      {/* Dynamic Ambient Blur Backdrops with Brand Orange tones */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-brand/5 rounded-full blur-[120px] animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[150px] animate-pulse-glow" style={{ animationDelay: "-3s" }} />

      {/* Decorative Editorial Grid Line System */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35 pointer-events-none" />

      {/* Hero Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 py-16">
        
        {/* Editorial Status Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-none bg-zinc-950 border border-editorial-border text-[9px] text-[#888] font-mono tracking-[0.15em] sm:tracking-[0.3em] font-bold uppercase mb-8 text-center"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
          </span>
          <span>AVAILABLE FOR INTERNSHIPS & COLLABORATIONS</span>
        </motion.div>

        {/* Main Editorial Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-4xl sm:text-6xl lg:text-8xl font-sans font-light tracking-tighter text-[#F0F0F0] mb-6 leading-none uppercase"
        >
          KEVIN <span className="font-black text-brand">  TENNISON</span>
          <span className="block mt-2 text-xl sm:text-2xl font-mono tracking-[0.3em] text-[#888] font-bold">
            B.E. Computer Science & Design
          </span>
        </motion.h1>

        {/* Editorial Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-zinc-400 leading-relaxed font-sans mb-10"
        >
          I'm an engineer who thinks like a designer — bridging AI/ML, full-stack engineering, and human-centered design to build products people actually enjoy using
        </motion.p>

        {/* Focus Highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-wrap justify-center gap-2 mb-12 max-w-2xl mx-auto"
        >
          <div className="flex items-center space-x-2 px-4 py-2 border border-editorial-border bg-zinc-950/60 text-[10px] font-mono tracking-wider uppercase text-zinc-300">
            <Cpu className="w-3.5 h-3.5 text-brand" />
            <span>Full-Stack Integration</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 border border-editorial-border bg-zinc-950/60 text-[10px] font-mono tracking-wider uppercase text-zinc-300">
            <Sparkles className="w-3.5 h-3.5 text-brand" />
            <span>AI Orchestration</span>
          </div>
          <div className="flex items-center space-x-2 px-4 py-2 border border-editorial-border bg-zinc-950/60 text-[10px] font-mono tracking-wider uppercase text-zinc-300">
            <Music className="w-3.5 h-3.5 text-brand" />
            <span>Keyboardist and a Tutor</span>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
        >
          <button
            onClick={scrollToProjects}
            className="w-full sm:flex-1 py-3 bg-[#F0F0F0] text-black text-xs font-bold uppercase tracking-widest rounded-none hover:bg-brand transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
            id="cta-view-projects"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={onOpenChat}
            className="w-full sm:flex-1 py-3 border border-editorial-border text-[#F0F0F0] text-xs font-bold uppercase tracking-widest rounded-none hover:bg-zinc-900 transition-colors cursor-pointer flex items-center justify-center space-x-1.5"
            id="cta-chat-twin"
          >
            <Bot className="w-3.5 h-3.5 text-brand" />
            <span>AI Twin Chat</span>
          </button>

          <button
            onClick={onOpenResumeModal}
            className="w-full sm:w-24 py-3 border border-editorial-border text-zinc-400 hover:text-[#F0F0F0] text-xs font-bold uppercase tracking-widest rounded-none hover:bg-zinc-900 transition-colors cursor-pointer flex items-center justify-center space-x-1"
            id="cta-download-resume"
          >
            <Download className="w-3.5 h-3.5" />
            <span>CV</span>
          </button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 2.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <span className="text-[9px] font-mono tracking-[0.3em] text-zinc-500 uppercase mb-2">SCROLL DOWN</span>
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        </motion.div>
      </div>
    </section>
  );
}
