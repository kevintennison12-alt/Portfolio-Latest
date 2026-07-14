import React from "react";
import { X, Printer, Download, MapPin, Mail, Phone, Github, Linkedin, Award, ExternalLink } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  if (!isOpen) return null;

  const resumeHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Kevin Tennison - Resume</title>
  <style>
    body {
      font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      line-height: 1.6;
      color: #18181b;
      max-width: 800px;
      margin: 40px auto;
      padding: 0 24px;
      background-color: #ffffff;
    }
    h1 {
      font-size: 2.5rem;
      text-transform: uppercase;
      margin-bottom: 8px;
      font-weight: 900;
      letter-spacing: -0.05em;
      text-align: center;
      color: #09090b;
    }
    .contact-info {
      text-align: center;
      font-size: 0.85rem;
      color: #4b5563;
      margin-bottom: 30px;
      font-family: monospace;
    }
    .contact-info a {
      color: #ff5d1a;
      text-decoration: none;
      font-weight: bold;
    }
    .contact-info a:hover {
      text-decoration: underline;
    }
    h2 {
      font-size: 1.1rem;
      text-transform: uppercase;
      border-bottom: 2px solid #09090b;
      padding-bottom: 6px;
      margin-top: 32px;
      font-weight: 800;
      letter-spacing: 0.05em;
      color: #09090b;
    }
    .entry {
      margin-bottom: 20px;
    }
    .entry-header {
      display: flex;
      justify-content: space-between;
      font-weight: 800;
      color: #09090b;
    }
    .entry-sub {
      font-style: italic;
      color: #e54b15;
      margin-bottom: 8px;
      font-weight: 600;
      font-size: 0.9rem;
    }
    ul {
      padding-left: 20px;
      margin: 6px 0;
    }
    li {
      margin-bottom: 6px;
      font-size: 0.9rem;
      color: #27272a;
    }
    .tech-skills div {
      margin-bottom: 10px;
      font-size: 0.9rem;
      color: #27272a;
    }
    .tech-skills strong {
      color: #09090b;
    }
    @media print {
      body {
        margin: 20px auto;
      }
      @page {
        margin: 1.5cm;
      }
    }
  </style>
</head>
<body>
  <h1>Kevin Tennison</h1>
  <div class="contact-info">
    Shivamogga, Karnataka, India | +91 7795165775 | <a href="mailto:kevintennison1@gmail.com">kevintennison1@gmail.com</a><br>
    <a href="https://github.com/kevintennison12-alt" target="_blank">GitHub</a> | <a href="https://linkedin.com/in/kevin-tennison" target="_blank">LinkedIn</a>
  </div>

  <h2>Professional Summary</h2>
  <p style="font-size: 0.9rem; color: #27272a;">Computer Science and Design undergraduate with hands-on experience in AI/ML, full-stack web development, and database management. NPTEL Elite certified in Java. Experienced in leading teams in hackathon environments and passionate about creating user-centered solutions that bridge technology and design.</p>

  <h2>Education</h2>
  <div class="entry">
    <div class="entry-header">
      <span>B.E. in Computer Science and Design</span>
      <span>Expected Jun 2027</span>
    </div>
    <div class="entry-sub">PES Institute of Technology and Management, Shivamogga, KA</div>
    <ul>
      <li>GPA: 7.88/10.00</li>
      <li>Coursework: Cloud Computing, Machine Learning, Web Technologies, Database Systems</li>
      <li>Concentrations: Technology and Design, Interactive Interfaces</li>
    </ul>
  </div>

  <h2>Experience</h2>
  <div class="entry">
    <div class="entry-header">
      <span>Full Stack Developer Intern</span>
      <span>July 2026 – August 2026</span>
    </div>
    <div class="entry-sub">CodeAlpha (Remote)</div>
    <ul>
      <li>Developed responsive full-stack web applications by integrating interactive frontend interfaces with secure backend services, REST APIs, and database management.</li>
      <li>Implemented user authentication, CRUD operations, and performance optimizations while following clean coding practices and Git-based version control.</li>
    </ul>
  </div>
  <div class="entry">
    <div class="entry-header">
      <span>Music Tutor (Self Employed)</span>
      <span>2026 – Present</span>
    </div>
    <div class="entry-sub">Eighty-Eight Keys Music</div>
    <ul>
      <li>Teaching music fundamentals, including note reading, rhythm, scales, chords, finger techniques, and music theory.</li>
    </ul>
  </div>

  <h2>Technical Skills</h2>
  <div class="tech-skills">
    <div><strong>Programming Languages:</strong> C, C++, Java, Python, HTML, SQL</div>
    <div><strong>Web & AI Technologies:</strong> JavaScript, REST APIs, Airtable API, Machine Learning, AI, CrewAI, YOLOv8, NLP, Flask, React, Tailwind CSS</div>
    <div><strong>Tools & Platforms:</strong> VS Code, Figma, Canva, Zapier, Git, GitHub</div>
    <div><strong>Concepts:</strong> OOP, DSA, UI/UX Design, Agile/Hackathon Development</div>
    <div><strong>Languages Spoken:</strong> English, Kannada, Tamil, Malayalam</div>
  </div>

  <h2>Projects</h2>
  <div class="entry">
    <div class="entry-header">
      <span>Deep Learning-Based Smart Food Analyzer (Major Project – In Progress)</span>
      <span>Jan 2026 – Jan 2027</span>
    </div>
    <ul>
      <li>AI-powered system analyzing packaged food nutrition data to generate health scores, risk alerts, and quality classifications with personalized dietary recommendations using ML/DL. Developed with custom TensorFlow architectures and computer vision pipelines.</li>
    </ul>
  </div>
  <div class="entry">
    <div class="entry-header">
      <span>Bot Guard (Hackathon — Team Lead)</span>
      <span>April 2026</span>
    </div>
    <ul>
      <li>AI-driven behavioral security system for FinTech platforms detecting and blocking Agentic AI bots using behavioral biometrics, adaptive UI traps, and real-time threat detection.</li>
    </ul>
  </div>
  <div class="entry">
    <div class="entry-header">
      <span>CampusPulse – Feedback Tracking System (Academic Project)</span>
      <span>Aug – Nov 2025</span>
    </div>
    <ul>
      <li>Client-side feedback tracking web app fetching and displaying student feedback in real time via Airtable REST API with interactive dashboards and full in-browser data processing.</li>
    </ul>
  </div>

  <h2>Certifications</h2>
  <div class="entry">
    <div class="entry-header">
      <span>NPTEL Elite Certification – Programming in Java</span>
      <span>May 2026</span>
    </div>
    <div class="entry-sub">IIT Kharagpur</div>
    <ul>
      <li>Completed the 12-week NPTEL course with an Elite certificate (76%). Strengthened Java, OOP, and core programming concepts.</li>
    </ul>
  </div>

  <h2>Extracurricular Activities & Achievements</h2>
  <ul>
    <li><strong>HackFest 2026 — NMAMIT, Nitte:</strong> Shortlisted from 750+ registered teams for the 36-hour state-level hackathon (April 2026). Led team 'Bot Guard' in creating behavioral biometrics tracking.</li>
    <li><strong>Research & Publications:</strong> Published "Smart Feedback Classifier: An AI Based Analytics System for College Helpdesk" in IJFMR Vol. 7, Issue 6, Nov-Dec 2025 (Paper ID: 62726).</li>
    <li><strong>Cultural & Performing Arts:</strong> Keyboard Accompanist at VTU State-Level Cultural Youth Festivals: BlissBeat 2024 (SJCIT), Interact 2025 (GAT, Bengaluru), and Acharya Habba 2026 (AIT, Bengaluru).</li>
  </ul>
</body>
</html>`;

  const handlePrint = () => {
    window.open("/Kevin_Tennison_Resume.pdf", "_blank");
  };

  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = "/Kevin_Tennison_Resume.pdf";
    a.download = "Kevin_Tennison_Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    // Dispatch telemetric event for real-time site analytics
    window.dispatchEvent(new Event("analytics_resume_download"));
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div 
        className="bg-[#0a0a0a] border border-editorial-border text-zinc-100 rounded-none w-full max-w-4xl p-6 sm:p-8 relative shadow-2xl flex flex-col my-8 max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        id="resume-modal-container"
      >
        {/* Floating Top Panel (Action items) */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pb-4 border-b border-editorial-border mb-6 shrink-0 print:hidden gap-4">
          <div>
            <span className="text-[9px] font-mono text-brand font-bold tracking-[0.25em] uppercase">
              INTERACTIVE DOSSIER //
            </span>
            <h3 className="text-base font-sans font-black text-white tracking-tight uppercase mt-1">
              Kevin Tennison — Resume
            </h3>
          </div>
          <div className="flex items-center space-x-2 flex-wrap gap-2 sm:gap-0">
            <button
              onClick={handleDownload}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase bg-brand border border-brand hover:bg-[#ff5d1a] hover:border-[#ff5d1a] text-black transition-colors cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (PDF)</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center space-x-2 px-4 py-2.5 rounded-none text-[10px] font-mono font-bold tracking-widest uppercase bg-[#0f0f0f] border border-editorial-border hover:bg-brand hover:text-black hover:border-brand text-zinc-300 transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>View / Print PDF</span>
            </button>
            <button 
              onClick={onClose}
              className="p-2.5 rounded-none border border-editorial-border hover:bg-brand hover:text-black hover:border-brand text-zinc-400 transition-colors cursor-pointer"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable resume container */}
        <div className="flex-1 overflow-y-auto pr-2 print:overflow-visible print:pr-0" id="printable-resume-body">
          <div className="max-w-3xl mx-auto bg-white text-zinc-900 border border-zinc-200 rounded-none shadow-lg p-8 sm:p-12 font-sans text-sm leading-relaxed print:shadow-none print:border-none print:p-0">
            
            {/* Main Header */}
            <div className="text-center space-y-2 border-b-2 border-zinc-900 pb-5">
              <h1 className="text-3xl font-sans font-black tracking-tight uppercase text-zinc-900">
                Kevin Tennison
              </h1>
              
              <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-3 text-xs font-mono text-zinc-600">
                <span className="flex items-center space-x-1">
                  <MapPin className="w-3.5 h-3.5 text-zinc-900" />
                  <span>Shivamogga, Karnataka, India</span>
                </span>
                <span className="text-zinc-300">|</span>
                <span className="flex items-center space-x-1">
                  <Phone className="w-3.5 h-3.5 text-zinc-900" />
                  <span>+91 7795165775</span>
                </span>
                <span className="text-zinc-300">|</span>
                <a href="mailto:kevintennison1@gmail.com" className="flex items-center space-x-1 text-zinc-800 hover:text-brand hover:underline transition-colors">
                  <Mail className="w-3.5 h-3.5 text-zinc-900" />
                  <span>kevintennison1@gmail.com</span>
                </a>
                <span className="text-zinc-300">|</span>
                <a href="https://github.com/kevintennison12-alt" target="_blank" rel="noreferrer" className="flex items-center space-x-1 text-zinc-800 hover:text-brand hover:underline transition-colors">
                  <Github className="w-3.5 h-3.5 text-zinc-900" />
                  <span>GitHub</span>
                </a>
                <span className="text-zinc-300">|</span>
                <a href="https://linkedin.com/in/kevin-tennison" target="_blank" rel="noreferrer" className="flex items-center space-x-1 text-zinc-800 hover:text-brand hover:underline transition-colors">
                  <Linkedin className="w-3.5 h-3.5 text-zinc-900" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Professional Summary */}
            <div className="py-5 space-y-2">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Professional Summary
              </h2>
              <p className="text-zinc-700 leading-relaxed text-xs sm:text-sm">
                Computer Science and Design undergraduate with hands-on experience in AI/ML, full-stack web development, and database management. NPTEL Elite certified in Java. Experienced in leading teams in hackathon environments and passionate about creating user-centered solutions that bridge technology and design.
              </p>
            </div>

            {/* Education */}
            <div className="py-4 space-y-2.5">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Education
              </h2>
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-sm">
                  <span>B.E. in Computer Science and Design</span>
                  <span className="text-zinc-600 font-normal italic text-xs sm:text-sm">Expected Jun 2027</span>
                </div>
                <div className="text-zinc-700 text-xs sm:text-sm font-medium">
                  PES Institute of Technology and Management, Shivamogga, KA
                </div>
                <ul className="list-disc pl-5 text-xs text-zinc-600 space-y-0.5">
                  <li>GPA: 7.88/10.00</li>
                  <li>Coursework: Cloud Computing, Machine Learning, Web Technologies, Database Systems</li>
                  <li>Concentrations: Technology and Design, Interactive Interfaces</li>
                </ul>
              </div>
            </div>

            {/* Experience */}
            <div className="py-4 space-y-2.5">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Experience
              </h2>
              <div className="space-y-4">
                <div className="space-y-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-sm">
                    <span>Full Stack Developer Intern</span>
                    <span className="text-zinc-600 font-normal italic text-xs sm:text-sm">July 2026 – August 2026</span>
                  </div>
                  <div className="text-zinc-700 text-xs font-medium">
                    CodeAlpha (Remote)
                  </div>
                  <ul className="list-disc pl-5 text-xs text-zinc-600 space-y-1">
                    <li>Developed responsive full-stack web applications by integrating interactive frontend interfaces with secure backend services, REST APIs, and database management.</li>
                    <li>Implemented user authentication, CRUD operations, and performance optimizations while following clean coding practices and Git-based version control.</li>
                  </ul>
                </div>

                <div className="space-y-1 border-t border-dashed border-zinc-200 pt-3">
                  <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-sm">
                    <span>Music Tutor</span>
                    <span className="text-zinc-600 font-normal italic text-xs sm:text-sm">2026 – Present</span>
                  </div>
                  <div className="text-zinc-700 text-xs font-medium">
                    Eighty-Eight Keys Music (Self Employed)
                  </div>
                  <ul className="list-disc pl-5 text-xs text-zinc-600 space-y-1">
                    <li>Teaching music fundamentals, including note reading, rhythm, scales, chords, finger techniques, and music theory.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="py-4 space-y-2">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Technical Skills
              </h2>
              <div className="space-y-1.5 text-xs text-zinc-700">
                <div>
                  <strong className="text-zinc-900">Programming Languages:</strong> C, C++, Java, Python, HTML, SQL
                </div>
                <div>
                  <strong className="text-zinc-900">Web & AI Technologies:</strong> JavaScript, REST APIs, Airtable API, Machine Learning, AI, CrewAI, YOLOv8, NLP, Flask, React, Tailwind CSS
                </div>
                <div>
                  <strong className="text-zinc-900">Tools & Platforms:</strong> VS Code, Figma, Canva, Zapier, Git, GitHub, Vercel, Netlify
                </div>
                <div>
                  <strong className="text-zinc-900">Concepts:</strong> OOP, DSA, UI/UX Design, Agile/Hackathon Development
                </div>
                <div>
                  <strong className="text-zinc-900">Languages Spoken:</strong> English, Kannada, Tamil, Malayalam
                </div>
              </div>
            </div>

            {/* Projects */}
            <div className="py-4 space-y-3">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Projects
              </h2>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-xs sm:text-sm">
                  <span>Deep Learning-Based Smart Food Analyzer (Major Project – In Progress)</span>
                  <span className="text-zinc-500 font-normal italic text-[11px]">Jan 2026 – Jan 2027</span>
                </div>
                <p className="text-xs text-zinc-600 pl-2">
                  • AI-powered system analyzing packaged food nutrition data to generate health scores, risk alerts, and quality classifications with personalized dietary recommendations using ML/DL.
                </p>
                <div className="text-[10px] font-mono text-zinc-500 pl-2">
                  Technologies: Python, TensorFlow/PyTorch, OpenCV, Machine Learning, Deep Learning
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-xs sm:text-sm">
                  <span>Bot Guard (Hackathon — Team Lead)</span>
                  <span className="text-zinc-500 font-normal italic text-[11px]">April 2026</span>
                </div>
                <p className="text-xs text-zinc-600 pl-2">
                  • AI-driven behavioral security system for FinTech platforms detecting and blocking Agentic AI bots using behavioral biometrics, adaptive UI traps, and real-time threat detection.
                </p>
                <div className="text-[10px] font-mono text-zinc-500 pl-2">
                  Technologies: Python, AI/ML, Behavioral Analytics, FinTech Security
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:justify-between font-bold text-zinc-900 text-xs sm:text-sm">
                  <span>CampusPulse – Feedback Tracking System (Academic Project)</span>
                  <span className="text-zinc-500 font-normal italic text-[11px]">Aug – Nov 2025</span>
                </div>
                <p className="text-xs text-zinc-600 pl-2">
                  • Client-side feedback tracking web app fetching and displaying student feedback in real time via Airtable REST API with interactive dashboards and full in-browser data processing.
                </p>
                <div className="text-[10px] font-mono text-zinc-500 pl-2">
                  Technologies: JavaScript, HTML, CSS, Airtable REST API
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="py-4 space-y-2">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Certifications
              </h2>
              <div className="text-xs text-zinc-700">
                <div className="font-bold text-zinc-900">
                  NPTEL Elite Certification – Programming in Java | IIT Kharagpur (May 2026)
                </div>
                <p className="text-zinc-600 pl-2">
                  • Completed the 12-week NPTEL course with an Elite certificate (76%). Strengthened Java, OOP, and core programming concepts.
                </p>
              </div>
            </div>

            {/* Extracurriculars */}
            <div className="py-4 space-y-2.5">
              <h2 className="text-xs font-sans font-black tracking-wider text-zinc-900 uppercase border-b-2 border-zinc-900 pb-1.5">
                Extracurricular Activities & Achievements
              </h2>
              <div className="space-y-2 text-xs text-zinc-600">
                <div>
                  <strong className="text-zinc-850">Hackathons & Technical Events:</strong>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>HackFest 2026 — NMAMIT, Nitte: Shortlisted from 750+ registered teams for the 36-hour state-level hackathon (April 2026).</li>
                    <li>State-Level 6-Hour Hackathon — Malnad College of Engineering, Hassan: Developed a prototype in a competitive team environment.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-zinc-850">Research & Publications:</strong>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Smart Feedback Classifier: An AI Based Analytics System for College Helpdesk | IJFMR Vol. 7, Issue 6 Nov–Dec 2025. Published AI-based analytics system (Paper ID: 62726) classifying student feedback to enhance college helpdesk efficiency and support data-driven decisions.</li>
                  </ul>
                </div>
                <div>
                  <strong className="text-zinc-850">Cultural & Performing Arts:</strong>
                  <ul className="list-disc pl-5 space-y-0.5">
                    <li>Keyboard Accompanist at VTU State-Level Cultural Youth Festivals: BlissBeat 2024 (SJCIT), Interact 2025 (GAT, Bengaluru), and Acharya Habba 2026 (AIT, Bengaluru). Self-employed Music Mentor and Keyboard Instructor.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
