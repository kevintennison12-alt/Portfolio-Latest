import React from "react";
import { Terminal, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-editorial-border py-12 relative overflow-hidden" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Block */}
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-none bg-[#0a0a0a] border border-editorial-border flex items-center justify-center">
            <Terminal className="w-4 h-4 text-brand" />
          </div>
          <div>
            <span className="font-sans font-black text-xs tracking-tight text-white uppercase">Kevin Tennison</span>
            <span className="block text-[8px] font-mono text-brand uppercase tracking-[0.2em] font-bold">
              B.E. Computer Science & Design
            </span>
          </div>
        </div>

        {/* Anchor Links */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[10px] font-mono font-bold tracking-wider text-zinc-500 uppercase">
          {(["home", "about", "skills", "experience", "projects", "contact"] as const).map((id) => (
            <button
              key={id}
              onClick={() => handleNavClick(id)}
              className="hover:text-brand capitalize transition-colors cursor-pointer"
            >
              {id === "experience" ? "Experience" : id}
            </button>
          ))}
        </div>

        {/* Copy block */}
        <div className="text-center md:text-right text-[9px] font-mono font-bold text-zinc-500 space-y-1 uppercase tracking-wider">
          <span>&copy; {currentYear} Kevin Tennison. All rights reserved.</span>
          <span className="block text-zinc-600">
            Designed & Compiled with <Heart className="w-3 h-3 text-brand inline mx-0.5" /> in India.
          </span>
        </div>

      </div>
    </footer>
  );
}
