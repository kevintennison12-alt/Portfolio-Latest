import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, GraduationCap, Calendar, MapPin, Award
} from "lucide-react";

export default function Experience() {
  const educationData = [
    {
      degree: "B.E. in Computer Science and Design",
      institution: "PES Institute of Technology and Management, Shivamogga, KA",
      period: "Expected Jun 2027",
      details: [
        "GPA: 7.88/10.00",
        "Concentrations: Technology and Design"
      ]
    },
    {
      degree: "Pre-University",
      institution: "DVS Composite PU college, Shivamogga",
      period: "2021-2023",
      details: [
        "Percentage: 84.5%"
      ]
    },
    {
      degree: "SSLC",
      institution: "St.Joseph's School, Bhadravathi",
      period: "Completed",
      details: [
        "Secondary School Leaving Certificate program"
      ]
    }
  ];

  const experienceData = [
    {
      role: "Full Stack Developer Intern",
      organization: "CodeAlpha (Remote)",
      period: "July 2026 – August 2026",
      location: "Remote",
      bullets: [
        "Developed responsive full-stack web applications by integrating interactive frontend interfaces with secure backend services, REST APIs, and database management.",
        "Implemented user authentication, CRUD operations, and performance optimizations while following clean coding practices and Git-based version control."
      ],
      tags: ["React", "Node.js", "Express", "REST APIs", "Git"]
    },
    {
      role: "Music Tutor",
      organization: "Eighty-Eight Keys Music (Self Employed)",
      period: "2026 – Present",
      location: "Shivamogga, KA",
      bullets: [
        "Teaching music fundamentals, including note reading, rhythm, scales, chords, finger techniques, and music theory."
      ],
      tags: ["Music Theory", "Piano/Keyboard", "Mentoring", "Instructional Design"]
    }
  ];

  return (
    <section id="experience" className="py-24 relative bg-[#050505] border-b border-editorial-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>ACADEMIC & PROFESSIONAL HISTORY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            Education & Experience
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Education */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2.5 pb-4 border-b border-editorial-border mb-2">
              <GraduationCap className="w-5 h-5 text-brand" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">Education</h3>
            </div>

            <div className="space-y-6">
              {educationData.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-zinc-950/40 border border-editorial-border hover:border-brand/30 transition-all relative"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-brand" />
                  
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h4 className="text-base font-bold text-white font-sans tracking-tight">{edu.degree}</h4>
                      <p className="text-zinc-400 text-xs font-mono tracking-wider mt-1">{edu.institution}</p>
                    </div>
                    <div className="flex items-center space-x-1.5 text-[10px] font-mono text-zinc-500 mt-2 sm:mt-0 whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-1.5 text-xs text-zinc-400 leading-relaxed pl-0 list-none">
                    {edu.details.map((detail, didx) => (
                      <li key={didx} className="flex items-start space-x-2">
                        <span className="text-brand font-bold select-none">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience */}
          <div className="space-y-8">
            <div className="flex items-center space-x-2.5 pb-4 border-b border-editorial-border mb-2">
              <Briefcase className="w-4 h-4 text-brand" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-zinc-200">Experience</h3>
            </div>

            <div className="space-y-6">
              {experienceData.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 bg-zinc-950/40 border border-editorial-border hover:border-brand/30 transition-all relative"
                >
                  <div className="absolute top-0 left-0 w-[3px] h-full bg-brand" />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h4 className="text-base font-bold text-white font-sans tracking-tight">{exp.role}</h4>
                      <p className="text-brand text-xs font-mono font-bold uppercase tracking-wider mt-1">{exp.organization}</p>
                    </div>
                    <div className="flex flex-col sm:items-end text-[10px] font-mono text-zinc-500 mt-2 sm:mt-0 space-y-1">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs text-zinc-400 leading-relaxed mb-6 list-none pl-0">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start space-x-2">
                        <span className="text-brand font-bold select-none">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-editorial-border">
                    {exp.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="text-[9px] font-mono font-bold tracking-wider px-2 py-1 bg-zinc-900 border border-editorial-border text-zinc-400 uppercase"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
