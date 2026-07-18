import React, { useState, useEffect } from "react";
import { Menu, X, Bot, Terminal, FileText, ArrowRight, Palette } from "lucide-react";
import { THEMES } from "../themes";

interface HeaderProps {
  onOpenChat: () => void;
  activeTheme: string;
  onChangeTheme: (themeId: string) => void;
}

export default function Header({ onOpenChat, activeTheme, onChangeTheme }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
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
          {/* Theme Switcher Dropdown */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="flex items-center space-x-2 px-3 py-2 rounded-none text-[10px] font-bold tracking-widest text-zinc-300 bg-zinc-950 border border-editorial-border hover:border-brand hover:text-white transition-all duration-300 cursor-pointer"
            >
              <Palette className="w-3.5 h-3.5 text-brand" />
              <span>THEME</span>
            </button>
            
            {isThemeMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-editorial-dark border border-editorial-border shadow-2xl rounded-none py-1 z-50">
                <div className="px-3 py-1.5 border-b border-editorial-border text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500">
                  Select Theme Protocol
                </div>
                {THEMES.map(t => (
                  <button
                    key={t.id}
                    onClick={() => {
                      onChangeTheme(t.id);
                      setIsThemeMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-left text-[10px] font-mono transition-colors cursor-pointer ${
                      activeTheme === t.id 
                        ? "text-brand bg-zinc-900" 
                        : "text-zinc-400 hover:text-white hover:bg-zinc-900/50"
                    }`}
                  >
                    <span className="flex items-center space-x-2">
                      <span 
                        className="w-2.5 h-2.5 rounded-full border border-zinc-700 shrink-0" 
                        style={{ backgroundColor: t.brand }}
                      />
                      <span>{t.name}</span>
                    </span>
                    {activeTheme === t.id && (
                      <span className="text-[8px] font-bold text-brand uppercase tracking-tighter">
                        Active
                      </span>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

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
        <div className="md:hidden bg-editorial-dark/95 backdrop-blur-lg border-b border-editorial-border py-4 px-4 space-y-4" id="mobile-nav">
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

          {/* Mobile Theme Selection block */}
          <div className="pt-3 border-t border-editorial-border">
            <span className="block text-[8px] font-mono font-bold uppercase tracking-widest text-zinc-500 mb-2">
              Select Theme Protocol
            </span>
            <div className="flex flex-wrap gap-1.5">
              {THEMES.map(t => (
                <button
                  key={t.id}
                  onClick={() => onChangeTheme(t.id)}
                  className={`flex items-center space-x-1.5 px-2.5 py-1.5 rounded-none text-[9px] font-mono transition-colors border ${
                    activeTheme === t.id
                      ? "text-brand bg-brand/10 border-brand"
                      : "text-zinc-400 bg-zinc-950 border-editorial-border hover:border-zinc-700"
                  }`}
                >
                  <span 
                    className="w-1.5 h-1.5 rounded-full shrink-0"
                    style={{ backgroundColor: t.brand }}
                  />
                  <span>{t.name}</span>
                </button>
              ))}
            </div>
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
