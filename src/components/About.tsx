import React from "react";
import { motion } from "motion/react";
import { Brain, Award, GraduationCap, Code2, Flame, HelpCircle } from "lucide-react";

export default function About() {
  const problemStats = [
    { label: "Total Solved", value: "350+", icon: Code2, color: "text-brand" },
    { label: "Current Streak", value: "48 Days", icon: Flame, color: "text-brand" },
    { label: "Max Rating", value: "1720+", icon: Award, color: "text-brand" },
  ];

  const dsaCompetencies = [
    { topic: "Data Structures", level: 90, examples: "Trees, Graphs, Hash Maps, Tries" },
    { topic: "Algorithms", level: 85, examples: "DP, Greedy, Backtracking, Slid. Window" },
    { topic: "Complexity Analysis", level: 95, examples: "Big O, Space-Time Tradeoffs, Cache" },
    { topic: "System Design", level: 75, examples: "MVC, Microservices, REST, DB Indexing" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/20 border-b border-editorial-border">
      <div className="absolute inset-y-0 right-0 w-1/3 bg-brand/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>PROFILE BRIEF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            About My Engineering Philosophy
          </h2>
        </div>

        <div className="max-w-4xl space-y-8">
          {/* Professional Bio */}
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 font-normal leading-relaxed">
              I am a final-year Computer Science and Design student passionate about bridging the gap between robust software engineering and intuitive user experiences. My journey in tech is driven by a deep curiosity for how things work and a desire to build solutions that matter.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              I specialize in full-stack web development and artificial intelligence, actively working with technologies like React, Node.js, Python, and Flask. Beyond traditional web development, I have a strong interest in AI/ML applications, particularly multi-agent orchestration and computer vision frameworks like YOLOv8. Whether I am optimizing algorithms through competitive programming, architecting a real-time visual perception system, or designing a clean frontend interface with Tailwind CSS, I approach every project with a focus on scalability, performance, and global impact.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              When I am not building web applications or solving complex data structures, I am constantly exploring emerging tech to push the boundaries of what I can create next.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm">
              I’m also a Keyboard Accompanist at VTU State-Level Cultural Youth Festivals: BlissBeat 2024 (SJCIT), Interact 2025 (GAT, Bengaluru), and Acharya Habba 2026 (AIT, Bengaluru), and a Self-employed Music Mentor and Keyboard Instructor.
            </p>

            {/* Quick stats grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border">
                <span className="block text-2xl font-black text-white font-mono">7.88</span>
                <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">GPA / 10.00</span>
              </div>
              <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border">
                <span className="block text-2xl font-black text-white font-mono">7+</span>
                <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">PROJECT WORKED ON</span>
              </div>
              <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border">
                <span className="block text-2xl font-black text-white font-mono">NPTEL</span>
                <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">Java Elite</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
