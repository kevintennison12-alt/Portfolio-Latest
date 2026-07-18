import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, ShieldCheck, Sliders, Terminal, Server, Sparkles, Database, Layers, Workflow
} from "lucide-react";

interface TechItem {
  name: string;
  category: "languages" | "web-ai" | "tools";
  iconUrl?: string;
  customIcon?: React.ReactNode;
}

export default function Skills() {
  const [selectedFilter, setSelectedFilter] = useState<"all" | "languages" | "web-ai" | "tools">("all");

  const techStack: TechItem[] = [
    // Languages
    {
      name: "Java",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
    },
    {
      name: "Python",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
    },
    {
      name: "C++",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
    },
    {
      name: "C",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
    },
    {
      name: "SQL",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "HTML5",
      category: "languages",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
    },
    // Web & AI
    {
      name: "JavaScript",
      category: "web-ai",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    {
      name: "REST APIs",
      category: "web-ai",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="2" width="8" height="8" rx="1.5" />
          <rect x="14" y="2" width="8" height="8" rx="1.5" />
          <rect x="2" y="14" width="8" height="8" rx="1.5" />
          <path d="M6 10v4M18 10v4M10 6h4M10 18h4" />
        </svg>
      )
    },
    {
      name: "YOLOv8 & CV",
      category: "web-ai",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12h8M12 8v8" />
          <path d="M12 12m-3 0a3 3 0 1 0 6 0 3 3 0 1 0 -6 0" />
        </svg>
      )
    },
    {
      name: "AI & Agents",
      category: "web-ai",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" fill="currentColor" className="text-brand/20" />
        </svg>
      )
    },
    {
      name: "Airtable API",
      category: "web-ai",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3h18v18H3z" />
          <path d="M21 9H3M21 15H3M9 3v18M15 3v18" />
        </svg>
      )
    },
    // Tools
    {
      name: "Git",
      category: "tools",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
    },
    {
      name: "GitHub",
      category: "tools",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "VS Code",
      category: "tools",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
      name: "Figma",
      category: "tools",
      iconUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
    },
    {
      name: "Zapier",
      category: "tools",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" fill="currentColor" className="text-brand/20" />
        </svg>
      )
    },
    {
      name: "Canva",
      category: "tools",
      customIcon: (
        <svg className="w-12 h-12 text-brand transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  const filteredStack = techStack.filter(
    item => selectedFilter === "all" || item.category === selectedFilter
  );

  const concepts = [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "UI/UX Design",
    "Agile & Hackathon Development"
  ];

  const naturalLanguages = [
    { lang: "English", fluency: "Professional Fluency" },
    { lang: "Kannada", fluency: "Native/Bilingual" },
    { lang: "Tamil", fluency: "Conversational" },
    { lang: "Malayalam", fluency: "Conversational" }
  ];

  return (
    <section id="skills" className="py-24 relative bg-editorial-dark border-b border-editorial-border transition-colors duration-300">
      <div className="absolute inset-y-0 left-0 w-1/4 bg-brand/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>03 // COMPETENCIES MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            Technical Stack
          </h2>
          <p className="text-zinc-450 mt-2 text-sm max-w-2xl">
            A visual directory of core languages, artificial intelligence modules, and development tools I build with.
          </p>
        </div>

        {/* Dashboard Control Deck / Filters */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 mb-10 border-b border-editorial-border gap-4">
          <div className="flex flex-wrap gap-1 bg-[#09090b] border border-editorial-border p-1 rounded-none">
            {(["all", "languages", "web-ai", "tools"] as const).map(f => (
              <button
                key={f}
                onClick={() => setSelectedFilter(f)}
                className={`px-3.5 py-1.5 text-[9px] font-mono font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                  selectedFilter === f
                    ? "bg-brand text-black"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-900"
                }`}
              >
                {f === "web-ai" ? "Web & AI" : f}
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2 text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            <Sliders className="w-3.5 h-3.5 text-brand" />
            <span>ACTIVE INDEX: {filteredStack.length} MODULES DISPLAYED</span>
          </div>
        </div>

        {/* Visual Tech Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredStack.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={item.name}
                className="aspect-square flex flex-col items-center justify-center p-6 border border-editorial-border bg-editorial-card/40 hover:border-brand/40 hover:bg-editorial-card transition-all duration-300 relative group overflow-hidden"
              >
                {/* Background glow overlay on hover */}
                <div className="absolute inset-0 bg-brand/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Corner Accents on hover */}
                <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-brand/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-brand/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-brand/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-brand/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Tech Icon Container */}
                <div className="h-16 flex items-center justify-center mb-3">
                  {item.iconUrl ? (
                    <img 
                      src={item.iconUrl} 
                      alt={item.name}
                      referrerPolicy="no-referrer"
                      className={`w-12 h-12 object-contain transition-all duration-300 group-hover:scale-115 ${
                        item.name === "GitHub" 
                          ? "invert brightness-200" 
                          : ""
                      }`}
                    />
                  ) : (
                    item.customIcon
                  )}
                </div>

                {/* Tech Name */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 group-hover:text-white uppercase transition-colors duration-300 text-center">
                  {item.name}
                </span>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lower Grid for Concepts & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Engineering Concepts */}
          <div className="lg:col-span-7 bg-editorial-card border border-editorial-border p-6 rounded-none">
            <div className="flex items-center space-x-2.5 text-xs uppercase font-mono tracking-wider font-bold text-zinc-200 mb-6">
              <ShieldCheck className="w-4 h-4 text-brand" />
              <span>Core Theoretical Concepts</span>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {concepts.map((concept, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center space-x-3 bg-zinc-950 border border-editorial-border p-3.5 rounded-none hover:border-brand/40 transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-brand shrink-0" />
                  <span className="text-xs font-sans text-zinc-300 font-semibold">{concept}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages spoken */}
          <div className="lg:col-span-5 bg-editorial-card border border-editorial-border p-6 rounded-none">
            <div className="flex items-center space-x-2.5 text-xs uppercase font-mono tracking-wider font-bold text-zinc-200 mb-6">
              <Globe className="w-4 h-4 text-brand" />
              <span>Languages I Speak</span>
            </div>

            <div className="space-y-3">
              {naturalLanguages.map((nl, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center justify-between p-3.5 rounded-none bg-zinc-950 border border-editorial-border"
                >
                  <span className="text-xs font-sans font-bold text-zinc-200">{nl.lang}</span>
                  <span className="text-[9px] font-mono bg-zinc-900 border border-editorial-border px-2 py-0.5 rounded-none text-brand uppercase tracking-wider font-bold">
                    {nl.fluency}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
