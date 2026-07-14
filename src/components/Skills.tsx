import React, { useState } from "react";
import { 
  Code, Layout, Server, Cpu, Globe, 
  Terminal, ShieldCheck, CheckCircle2 
} from "lucide-react";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C", level: "Core Proficiency" },
        { name: "C++", level: "Core Proficiency" },
        { name: "Java", level: "Elite Certified (NPTEL)" },
        { name: "Python", level: "Core Proficiency" },
        { name: "HTML", level: "Core Proficiency" },
        { name: "SQL", level: "Core Proficiency" },
      ]
    },
    {
      title: "Web & AI Technologies",
      icon: Layout,
      skills: [
        { name: "JavaScript", level: "Core Proficiency" },
        { name: "REST APIs", level: "Core Proficiency" },
        { name: "Airtable API", level: "Core Proficiency" },
        { name: "Machine Learning", level: "Core Proficiency" },
        { name: "AI", level: "Core Proficiency" },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Server,
      skills: [
        { name: "VS Code", level: "Core Proficiency" },
        { name: "Figma", level: "Core Proficiency" },
        { name: "Canva", level: "Core Proficiency" },
        { name: "Zapier", level: "Core Proficiency" },
        { name: "Git", level: "Core Proficiency" },
        { name: "GitHub", level: "Core Proficiency" },
      ]
    }
  ];

  const concepts = [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (DSA)",
    "UI/UX Design",
    "Agile / Hackathon Development"
  ];

  const naturalLanguages = [
    { lang: "English", fluency: "Professional Fluency" },
    { lang: "Kannada", fluency: "Native/Bilingual" },
    { lang: "Tamil", fluency: "Conversational" },
    { lang: "Malayalam", fluency: "Conversational" }
  ];

  return (
    <section id="skills" className="py-24 relative bg-[#050505] border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>SKILLS MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            Technical Stack & Expertise
          </h2>
          <p className="text-zinc-450 mt-2 text-sm max-w-2xl">
            A comprehensive overview of my programming languages, frameworks, and tools structured for modern full-stack engineering and intelligent AI orchestration.
          </p>
        </div>

        {/* Categories Bento-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            const isHovered = hoveredCategory === idx;
            
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredCategory(idx)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`p-6 rounded-none border transition-all duration-300 ${
                  isHovered ? "border-brand bg-[#0a0a0a]" : "border-editorial-border bg-zinc-950/30"
                }`}
                id={`skills-category-${idx}`}
              >
                <div className="flex items-center space-x-3.5 mb-6">
                  <div className="p-2.5 rounded-none bg-zinc-950 border border-editorial-border">
                    <Icon className="w-4 h-4 text-brand" />
                  </div>
                  <h3 className="text-xs uppercase font-mono tracking-[0.15em] font-bold text-white">{cat.title}</h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {cat.skills.map((sk, sidx) => (
                    <div key={sidx} className="bg-[#050505] p-4 rounded-none border border-editorial-border hover:border-brand/40 transition-colors">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-sans font-semibold text-zinc-100">{sk.name}</span>
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Lower Grid for Concepts & Languages */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Engineering Concepts */}
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-editorial-border p-6 rounded-none">
            <div className="flex items-center space-x-2.5 text-xs uppercase font-mono tracking-wider font-bold text-zinc-200 mb-6">
              <Terminal className="w-4 h-4 text-brand" />
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
          <div className="lg:col-span-5 bg-[#0a0a0a] border border-editorial-border p-6 rounded-none">
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
