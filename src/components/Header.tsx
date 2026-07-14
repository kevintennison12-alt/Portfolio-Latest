import React, { useState, useEffect } from "react";
import { Menu, X, Bot, Terminal, FileText, ArrowRight } from "lucide-react";

interface HeaderProps {
  onOpenChat: () => void;
}

export default function Header({ onOpenChat }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = ["home", "about", "skills", "experience", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const isItemActive = (id: string) => {
    return activeSection === id;
  };

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#050505]/95 backdrop-blur-md border-b border-editorial-border py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick("home")}
          className="flex items-center space-x-2.5 cursor-pointer group"
          id="header-logo"
        >
          <div className="w-9 h-9 rounded-none bg-brand flex items-center justify-center border border-brand transition-colors">
            <Terminal className="w-4 h-4 text-black font-black" />
          </div>
          <div>
            <span className="font-sans font-black text-lg tracking-tighter text-[#F0F0F0] block leading-tight">
              KEVIN <span className="text-brand">TENNISON</span>
            </span>
            <span className="block text-[8px] font-mono text-[#888] tracking-[0.2em] font-bold uppercase">
              B.E. CS & DESIGN
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1" id="desktop-nav">
          {navItems.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3 py-1.5 rounded-none text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
                isItemActive(item.id)
                  ? "text-brand"
                  : "text-zinc-400 hover:text-[#F0F0F0]"
              }`}
            >
              <span className="text-[8px] text-zinc-600 mr-1 font-mono">0{idx + 1}</span>
              {item.label}
              {isItemActive(item.id) && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-brand" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center space-x-3" id="header-actions">
          <button
            onClick={onOpenChat}
            className="flex items-center space-x-2 px-4 py-2 rounded-none text-[10px] font-bold tracking-widest text-black bg-[#F0F0F0] hover:bg-brand hover:text-black border border-transparent transition-all duration-300"
          >
            <Bot className="w-3.5 h-3.5" />
            <span>AI TWIN CHAT</span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-2" id="mobile-menu-toggle">
          <button
            onClick={onOpenChat}
            className="p-2 rounded-none text-brand hover:bg-zinc-900 transition-colors"
            aria-label="Chat with AI Twin"
          >
            <Bot className="w-5 h-5" />
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-none text-zinc-400 hover:text-white hover:bg-zinc-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#050505]/95 backdrop-blur-lg border-b border-editorial-border py-4 px-4 space-y-3" id="mobile-nav">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-none text-left text-[10px] uppercase tracking-wider font-bold transition-all ${
                  isItemActive(item.id)
                    ? "text-brand bg-brand/10 border-l-2 border-brand"
                    : "text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 border-l-2 border-transparent"
                }`}
              >
                <span className="text-[8px] text-zinc-600 mr-2 font-mono">0{idx + 1}</span>
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-2 border-t border-editorial-border flex flex-col space-y-2">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenChat();
              }}
              className="flex items-center justify-center space-x-2 px-4 py-3 rounded-none text-[10px] font-bold tracking-widest text-black bg-[#F0F0F0] hover:bg-brand transition-all"
            >
              <Bot className="w-4 h-4" />
              <span>TALK TO KEVIN'S AI TWIN</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
