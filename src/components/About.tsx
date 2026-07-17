import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  Award, Code2, Flame, Music, Fingerprint, 
  Terminal, Sparkles, CheckCircle, Volume2 
} from "lucide-react";

export default function About() {
  const [imgSrc, setImgSrc] = useState("/assets/kevin.jpg");

  // Load live uploaded photo from localStorage if present
  useEffect(() => {
    const saved = localStorage.getItem("kevin_custom_portrait");
    if (saved) {
      setImgSrc(saved);
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setImgSrc(base64);
        localStorage.setItem("kevin_custom_portrait", base64);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/20 border-b border-editorial-border">
      {/* Background radial accent */}
      <div className="absolute inset-y-0 right-0 w-1/3 bg-brand/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>02 // PROFILE BRIEF</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            About My Engineering Philosophy
          </h2>
        </div>

        {/* 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Column 1: Unique Floating Framed Photo (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div 
              className="relative w-full max-w-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Outer decorative tech brackets / frame corners */}
              <div className="absolute -top-3 -left-3 w-6 h-6 border-t border-l border-brand/40" />
              <div className="absolute -top-3 -right-3 w-6 h-6 border-t border-r border-brand/40" />
              <div className="absolute -bottom-3 -left-3 w-6 h-6 border-b border-l border-brand/40" />
              <div className="absolute -bottom-3 -right-3 w-6 h-6 border-b border-r border-brand/40" />

              {/* High-Fidelity Photo Frame */}
              <div className="relative p-2 bg-zinc-900/40 border border-editorial-border backdrop-blur-sm group overflow-hidden">
                {/* Internal Scanlines & Gloss effects */}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand/[0.03] to-transparent pointer-events-none z-10" />
                
                <div className="relative aspect-[4/5] w-full bg-zinc-950 flex flex-col items-center justify-center overflow-hidden border border-zinc-800/80">
                  {imgSrc ? (
                    <img 
                      src={imgSrc}
                      alt="Kevin Tennison"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      onError={() => {
                        // Reset image source to show elegant customized uploader box
                        setImgSrc("");
                      }}
                    />
                  ) : (
                    <div className="p-8 text-center flex flex-col items-center justify-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center border border-brand/30">
                        <Code2 className="w-6 h-6 text-brand" />
                      </div>
                      <div>
                        <p className="text-xs font-mono text-zinc-300 font-bold uppercase tracking-wider">
                          No Photo Loaded
                        </p>
                        <p className="text-[10px] font-mono text-zinc-500 mt-1.5 uppercase max-w-[220px] leading-relaxed">
                          Save your image as <span className="text-brand font-bold">kevin.jpg</span> inside <span className="text-zinc-400">/assets/</span> or upload live.
                        </p>
                      </div>
                      <label className="px-4 py-2 bg-brand/15 hover:bg-brand/25 border border-brand/30 text-[9px] font-mono text-brand uppercase tracking-widest cursor-pointer transition-all">
                        Upload Photo Live
                        <input 
                          type="file" 
                          accept="image/*" 
                          className="hidden" 
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                  )}

                  {/* Interactive replace overlay on hover if an image exists */}
                  {imgSrc && (
                    <label className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center cursor-pointer z-20">
                      <Sparkles className="w-6 h-6 text-brand mb-2 animate-pulse" />
                      <span className="text-[10px] font-mono text-white uppercase tracking-widest font-bold">
                        Choose Your Photo
                      </span>
                      <span className="text-[8px] font-mono text-zinc-400 uppercase tracking-widest mt-1.5">
                        (or save in /assets/kevin.jpg)
                      </span>
                      <input 
                        type="file" 
                        accept="image/*" 
                        className="hidden" 
                        onChange={handleFileChange}
                      />
                    </label>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Column 2: Bio Text and Quick Stats (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Professional Bio */}
            <div className="space-y-6">
              <p className="text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed">
                I am a final-year Computer Science and Design student passionate about bridging the gap between robust software engineering and intuitive user experiences. My journey in tech is driven by a deep curiosity for how things work and a desire to build solutions that matter.
              </p>
              
              <p className="text-zinc-400 leading-relaxed text-sm">
                I specialize in full-stack web development and artificial intelligence, actively working with technologies like React, Node.js, Python, and Flask. Beyond traditional web development, I have a strong interest in AI/ML applications, particularly multi-agent orchestration and computer vision frameworks like YOLOv8. Whether I am optimizing algorithms through competitive programming, architecting a real-time visual perception system, or designing a clean frontend interface with Tailwind CSS, I approach every project with a focus on scalability, performance, and global impact.
              </p>
              
              <p className="text-zinc-400 leading-relaxed text-sm">
                When I am not building web applications or solving complex data structures, I am constantly exploring emerging tech to push the boundaries of what I can create next.
              </p>
              
              <p className="text-zinc-450 border-l-2 border-brand pl-4 leading-relaxed text-sm italic bg-brand/[0.01] py-2">
                I’m also an accomplished Keyboard Accompanist at VTU State-Level Cultural Youth Festivals: BlissBeat 2024 (SJCIT), Interact 2025 (GAT, Bengaluru), and Acharya Habba 2026 (AIT, Bengaluru). I am a self-employed Music Mentor and Keyboard Instructor.
              </p>

              {/* Quick stats grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-brand/30 group-hover:h-full transition-all duration-300" />
                  <span className="block text-2xl font-black text-white font-mono">7.88</span>
                  <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">GPA / 10.00</span>
                </div>
                <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-brand/30 group-hover:h-full transition-all duration-300" />
                  <span className="block text-2xl font-black text-white font-mono">7+</span>
                  <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">PROJECTS COMPLETED</span>
                </div>
                <div className="p-5 rounded-none bg-[#0a0a0a] border border-editorial-border relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-[1px] h-full bg-brand/30 group-hover:h-full transition-all duration-300" />
                  <span className="block text-2xl font-black text-white font-mono">NPTEL</span>
                  <span className="block text-[9px] font-mono text-[#888] tracking-widest uppercase mt-1">Java Elite Class</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

