import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AITwinChat from "./components/AITwinChat";
import ResumeModal from "./components/ResumeModal";
import { THEMES } from "./themes";

export default function App() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadingLog, setLoadingLog] = useState("Initializing core protocols...");
  const [themeId, setThemeId] = useState<string>(() => {
    return localStorage.getItem("portfolio_theme") || "cyberpunk";
  });

  const openChat = () => setIsChatOpen(true);
  const closeChat = () => setIsChatOpen(false);
  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  useEffect(() => {
    const active = THEMES.find(t => t.id === themeId) || THEMES[0];
    const root = document.documentElement;
    root.style.setProperty("--color-theme-brand", active.brand);
    root.style.setProperty("--color-theme-dark", active.dark);
    root.style.setProperty("--color-theme-card", active.card);
    root.style.setProperty("--color-theme-border", active.border);
    root.style.setProperty("--color-theme-border-light", active.borderLight);
    root.style.setProperty("--color-theme-glow", active.glowColor);
    localStorage.setItem("portfolio_theme", themeId);
  }, [themeId]);

  useEffect(() => {
    const logs = [
      "[SYS_INIT] Establishing secure connection to node clusters...",
      "[SYS_CORE] Initializing computer vision & TensorFlow sandbox...",
      "[AI_AGENT] Synchronizing multi-agent scheduling guidelines...",
      "[TELEMETRY] Securing real-time traffic & telemetry console...",
      "[INGRESS] Complete. Dispatching portfolio dashboard..."
    ];

    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const increment = Math.floor(Math.random() * 15) + 6;
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300);
          return 100;
        }

        const logIndex = Math.min(Math.floor((next / 100) * logs.length), logs.length - 1);
        setLoadingLog(logs[logIndex]);
        return next;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#050505] text-zinc-100 flex flex-col justify-between p-6 sm:p-12 z-50 select-none font-mono">
        <div className="flex justify-between items-start">
          <div>
            <span className="text-[10px] text-brand font-black tracking-[0.25em] uppercase">PORTFOLIO PROTOCOL //</span>
            <h1 className="text-sm font-sans font-black text-white tracking-tight uppercase mt-1">KEVIN TENNISON</h1>
          </div>
          <span className="text-[9px] text-zinc-500 font-bold tracking-widest uppercase">CLUSTER: INGRESS_NODE_3000</span>
        </div>

        <div className="max-w-xl w-full mx-auto space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-brand uppercase tracking-widest">BOOTING SANDBOX ENVIRONMENT</span>
              <span className="text-white">{loadingProgress}%</span>
            </div>
            <div className="w-full bg-zinc-950 border border-editorial-border h-2 overflow-hidden">
              <motion.div 
                className="bg-brand h-full" 
                initial={{ width: 0 }}
                animate={{ width: `${loadingProgress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
          <p className="text-[10px] text-zinc-400 h-4 uppercase tracking-wider truncate">
            {loadingLog}
          </p>
        </div>

        <div className="flex justify-between items-end text-[9px] text-zinc-600 font-bold uppercase tracking-widest">
          <span>COGNITIVE AGENTS ACTIVE</span>
          <span>© {new Date().getFullYear()} REVEAL ENGINE v2.0</span>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-editorial-dark text-zinc-100 antialiased">
      {/* Dynamic Grid Background Overlay */}
      <div className="fixed inset-0 bg-editorial-dark bg-[linear-gradient(to_right,var(--color-theme-border)_0.5px,transparent_0.5px),linear-gradient(to_bottom,var(--color-theme-border)_0.5px,transparent_0.5px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_65%,transparent_100%)] opacity-10 pointer-events-none z-0" />

      {/* Floating Transparent Navigation */}
      <Header onOpenChat={openChat} activeTheme={themeId} onChangeTheme={setThemeId} />

      <main className="relative z-10">
        {/* Hero Area */}
        <Hero onOpenChat={openChat} onOpenResumeModal={openResume} />

        {/* Profile Details */}
        <About />

        {/* Competencies */}
        <Skills />

        {/* Timelines and Publications */}
        <Experience />

        {/* Active Simulators and Portfolio Projects */}
        <Projects />

        {/* Form coordination block */}
        <Contact />
      </main>

      {/* Standard Footer */}
      <Footer />

      {/* Interactive AI recruiter twins chat drawer */}
      <AITwinChat isOpen={isChatOpen} onClose={closeChat} />

      {/* High-fidelity print-ready dossier */}
      <ResumeModal isOpen={isResumeOpen} onClose={closeResume} />
    </div>
  );
}

