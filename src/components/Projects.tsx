import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Github, ExternalLink, Bot, Cpu, Sparkles, Shield, 
  Terminal, BarChart2, MousePointer, BookOpen, Layers, CheckCircle 
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  category: "ai" | "fullstack" | "security" | "database";
  tags: string[];
  links: { github: string; live?: string; paper?: string };
  interactiveDemo?: "smartfood";
}

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "security" | "database">("all");
  const [activeProjectDemo, setActiveProjectDemo] = useState<string | null>(null);

  // Smart Food Analyzer simulator state
  const [selectedProduct, setSelectedProduct] = useState<string>("Oreo Cookies");
  const [isAnalyzingFood, setIsAnalyzingFood] = useState(false);
  const [foodAnalysisResult, setFoodAnalysisResult] = useState<{
    productName: string;
    healthScore: number;
    grade: string;
    novaGroup: number;
    alerts: string[];
    recommendations: string[];
  } | null>(null);

  // CampusPulse mini playground state
  const [feedbackText, setFeedbackText] = useState("");
  const [classifierOutput, setClassifierOutput] = useState<{
    category: string;
    priority: "HIGH" | "MEDIUM" | "LOW";
    routedTo: string;
    confidence: number;
  } | null>(null);
  const [isClassifying, setIsClassifying] = useState(false);

  // NeuroShield biometric tracker state
  const [jitterSamples, setJitterSamples] = useState<{ x: number; y: number; t: number }[]>([]);
  const [jitterMetrics, setJitterMetrics] = useState({
    speed: 0,
    jitterRating: 0,
    threatLevel: "SECURE",
    classification: "HUMAN"
  });

  // Fake News Streamlit simulator state
  const [newsText, setNewsText] = useState("");
  const [fakeNewsOutput, setFakeNewsOutput] = useState<{
    label: "REAL" | "FAKE";
    confidence: number;
    explanation: string;
  } | null>(null);
  const [isFakeNewsClassifying, setIsFakeNewsClassifying] = useState(false);

  const projects: Project[] = [
    {
      id: "smartfood",
      title: "Deep Learning-Based Smart Food Analyzer",
      description: "AI-powered system analyzing packaged food nutrition data to generate health scores, risk alerts, and quality classifications.",
      longDescription: "An AI-powered system analyzing packaged food nutrition data to generate health scores, risk alerts, and quality classifications with personalized dietary recommendations using ML/DL. Developed with custom TensorFlow architectures and computer vision pipelines.",
      category: "ai",
      tags: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Machine Learning", "Deep Learning"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      },
      interactiveDemo: "smartfood"
    },
    {
      id: "botguard",
      title: "Bot Guard",
      description: "AI-driven behavioral security system for FinTech platforms detecting and blocking Agentic AI bots.",
      longDescription: "Formulated as HackFest 2026 Team Lead. This AI-driven behavioral security system for FinTech platforms detects and blocks Agentic AI bots using behavioral biometrics, adaptive UI traps, and real-time threat detection.",
      category: "security",
      tags: ["Python", "AI/ML", "Behavioral Analytics", "FinTech Security", "Flask"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "campuspulse",
      title: "CampusPulse – Feedback Tracking System",
      description: "Client-side feedback tracking web app fetching and displaying student feedback in real time.",
      longDescription: "A client-side feedback tracking web app fetching and displaying student feedback in real time via Airtable REST API with interactive dashboards and full in-browser data processing.",
      category: "fullstack",
      tags: ["JavaScript", "HTML", "CSS", "Airtable REST API", "React"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "college-db",
      title: "College  Database  Management  System",
      description: "Web-based DBMS to organize and retrieve data for students, faculty, courses, and academic reports.",
      longDescription: "A web-based DBMS designed during academic coursework to organize and retrieve data for students, faculty, courses, and academic reports with a responsive front-end enabling streamlined administrative workflows.",
      category: "database",
      tags: ["SQL", "PHP", "HTML/CSS", "JavaScript"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "social-media-app",
      title: "Social  Media  App",
      description: "A private responsive social media web application enabling real-time user interactions.",
      longDescription: "A private responsive social media web application utilizing modern TypeScript to enable real-time user feed interactions, profile customizations, and post creation with media support.",
      category: "fullstack",
      tags: ["TypeScript", "HTML", "CSS", "React"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "projectmanagmenttool",
      title: "Project  Managment  Tool",
      description: "Collaborative project management workspace with custom boards and drag-and-drop task tracking.",
      longDescription: "A collaborative project management workspace with custom boards, drag-and-drop task tracking, and milestone visualizations built in modern TypeScript.",
      category: "fullstack",
      tags: ["TypeScript", "React", "Tailwind CSS"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "ecommerce-website",
      title: "E-commerce Website",
      description: "A Full Stack E-commerce Website featuring detailed product routing, dynamic cart systems, and secure checkout simulation.",
      longDescription: "A fully-functional, responsive full-stack e-commerce marketplace featuring detailed product routing, dynamic cart systems, secure checkout simulation, and dashboard statistics.",
      category: "fullstack",
      tags: ["TypeScript", "React", "Node.js", "Express", "Tailwind CSS"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "movie-sentiment",
      title: "Movie Review Sentiment Analyser",
      description: "Machine learning classifier designed to ingest raw movie reviews and accurately predict emotional sentiment.",
      longDescription: "A machine learning classification engine built in Python designed to ingest raw movie reviews, perform NLP text cleaning, and accurately predict positive, neutral, or negative sentimental alignment.",
      category: "ai",
      tags: ["Python", "Scikit-learn", "NLP", "NLTK", "Machine Learning"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    },
    {
      id: "fake-news-dect",
      title: "Fake News Detection System",
      description: "A Streamlit cloud-based machine learning classification pipeline designed to identify misinformation in news.",
      longDescription: "FAKE NEWS IS A STREAMLIT CLOUD BASED PROJECT. It classifies and detects misinformation in digital news articles in real time using optimized machine learning classification pipelines.",
      category: "ai",
      tags: ["Python", "Streamlit", "Scikit-learn", "Machine Learning"],
      links: {
        github: "https://github.com/kevintennison12-alt"
      }
    }
  ];

  const filteredProjects = filter === "all" ? projects : projects.filter(p => p.category === filter);

  // Handle Smart Food Analyzer Simulation
  const runFoodAnalysis = () => {
    setIsAnalyzingFood(true);
    setFoodAnalysisResult(null);
    setTimeout(() => {
      if (selectedProduct === "Oreo Cookies") {
        setFoodAnalysisResult({
          productName: "Oreo Sandwich Cookies",
          healthScore: 24,
          grade: "E",
          novaGroup: 4,
          alerts: [
            "High Sugar content (38g per 100g)",
            "Palm Oil & hydrogenated fats present",
            "Ultra-processed additives & flavorings"
          ],
          recommendations: [
            "Substitute with home-baked organic oatmeal biscuits",
            "Pair dark chocolate (70%+) with almonds for a clean snack alternative"
          ]
        });
      } else if (selectedProduct === "Greek Yogurt") {
        setFoodAnalysisResult({
          productName: "Unsweetened Plain Greek Yogurt",
          healthScore: 88,
          grade: "A",
          novaGroup: 1,
          alerts: [
            "Zero artificial additives detected"
          ],
          recommendations: [
            "Excellent source of calcium and high-quality protein",
            "Top with organic chia seeds or wild berries for extra fiber and antioxidants"
          ]
        });
      } else if (selectedProduct === "Instant Ramen") {
        setFoodAnalysisResult({
          productName: "Pre-Packaged Instant Ramen",
          healthScore: 18,
          grade: "E",
          novaGroup: 4,
          alerts: [
            "Extremely high sodium levels (1,240mg - 54% of daily limit)",
            "Deep-fried dough process increases trans fats",
            "Synthetic preservative TBHQ detected"
          ],
          recommendations: [
            "Swap for air-dried organic millet noodles",
            "Prepare fresh broth using vegetable stock, low-sodium soy sauce, and fresh bok choy"
          ]
        });
      } else {
        setFoodAnalysisResult({
          productName: "Aspartame Diet Soda",
          healthScore: 35,
          grade: "D",
          novaGroup: 4,
          alerts: [
            "Contains synthetic sweetener Aspartame",
            "Acidity from Phosphoric Acid",
            "Zero fiber, vitamins, or positive macronutrients"
          ],
          recommendations: [
            "Substitute with organic sparkling water infused with fresh lemon or mint",
            "Brew unsweetened cold jasmine green tea"
          ]
        });
      }
      setIsAnalyzingFood(false);
    }, 1500);
  };

  // Handle CampusPulse Classification Simulation
  const runFeedbackClassifier = () => {
    if (!feedbackText.trim()) return;
    setIsClassifying(true);
    setClassifierOutput(null);

    setTimeout(() => {
      const text = feedbackText.toLowerCase();
      let category = "General Inquiries";
      let priority: "HIGH" | "MEDIUM" | "LOW" = "LOW";
      let routedTo = "Helpdesk Support Desk";
      let confidence = 0.88;

      if (text.includes("wifi") || text.includes("internet") || text.includes("server") || text.includes("network")) {
        category = "IT & Networking Infrastructure";
        priority = "HIGH";
        routedTo = "Systems Admin (IT Cell)";
        confidence = 0.96;
      } else if (text.includes("hostel") || text.includes("food") || text.includes("mess") || text.includes("room")) {
        category = "Hostel & Facilities Operations";
        priority = "MEDIUM";
        routedTo = "Chief Warden / Facilities Office";
        confidence = 0.92;
      } else if (text.includes("exam") || text.includes("syllabus") || text.includes("gpa") || text.includes("academic") || text.includes("class")) {
        category = "Academic & Examinations Board";
        priority = "HIGH";
        routedTo = "Office of the Dean (Academics)";
        confidence = 0.95;
      }

      setClassifierOutput({ category, priority, routedTo, confidence });
      setIsClassifying(false);
    }, 1200);
  };

  // Handle NeuroShield biometric tracker
  const handleJitterMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - box.left;
    const y = e.clientY - box.top;
    const t = performance.now();

    const newSamples = [...jitterSamples, { x, y, t }].slice(-25);
    setJitterSamples(newSamples);

    if (newSamples.length < 5) return;

    // Calculate micro movements (jitter)
    let totalJitter = 0;
    let totalSpeed = 0;
    for (let i = 1; i < newSamples.length; i++) {
      const prev = newSamples[i - 1];
      const curr = newSamples[i];
      const dist = Math.sqrt(Math.pow(curr.x - prev.x, 2) + Math.pow(curr.y - prev.y, 2));
      const dt = curr.t - prev.t;
      if (dt > 0) {
        const speed = dist / dt;
        totalSpeed += speed;
        // Jitter is defined as deviation in speed/direction
        if (i > 1) {
          const prevSpeed = Math.sqrt(Math.pow(prev.x - newSamples[i - 2].x, 2) + Math.pow(prev.y - newSamples[i - 2].y, 2)) / (prev.t - newSamples[i - 2].t);
          totalJitter += Math.abs(speed - prevSpeed);
        }
      }
    }

    const avgSpeed = (totalSpeed / newSamples.length) * 10;
    const avgJitter = (totalJitter / newSamples.length) * 100;

    let classification = "HUMAN";
    let threatLevel = "SECURE";
    
    // Bots have either 0 jitter (perfectly straight lines) or random noise without human acceleration curves
    if (avgJitter < 0.2 && avgSpeed > 1) {
      classification = "BOT_AGENT (Linear Route)";
      threatLevel = "BLOCKED";
    } else if (avgJitter > 60) {
      classification = "BOT_AGENT (Simulated Noise)";
      threatLevel = "ALERT";
    }

    setJitterMetrics({
      speed: Math.round(avgSpeed * 10) / 10,
      jitterRating: Math.round(avgJitter * 10) / 10,
      threatLevel,
      classification
    });
  };

  // Handle Streamlit Fake News Detection simulator
  const runFakeNewsClassifier = () => {
    if (!newsText.trim()) return;
    setIsFakeNewsClassifying(true);
    setFakeNewsOutput(null);

    setTimeout(() => {
      const text = newsText.toLowerCase();
      let label: "REAL" | "FAKE" = "REAL";
      let confidence = 0.91;
      let explanation = "No matching anomalous linguistic patterns or known misinformation signatures found.";

      if (
        text.includes("shocking") || 
        text.includes("secret formula") || 
        text.includes("aliens") || 
        text.includes("conspiracy") || 
        text.includes("proven by facebook") ||
        text.includes("free money") ||
        text.includes("leak")
      ) {
        label = "FAKE";
        confidence = 0.97;
        explanation = "High concentration of clickbait terminology and unverified attribution signatures detected.";
      }

      setFakeNewsOutput({ label, confidence, explanation });
      setIsFakeNewsClassifying(false);
    }, 1200);
  };

  return (
    <section id="projects" className="py-24 relative bg-[#050505] border-b border-editorial-border">
      <div className="absolute inset-y-0 left-0 w-1/4 bg-brand/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
              <span>PORTFOLIO ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
              Featured Engineering Projects
            </h2>
            <p className="text-zinc-450 mt-2 text-sm max-w-xl">
              A curated collection of full-stack implementations, biometric security research, and agentic AI tools. Tap any project to trigger its simulator!
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex mt-6 md:mt-0 bg-[#0a0a0a] border border-editorial-border p-1 rounded-none self-start overflow-x-auto max-w-full">
            <div className="flex gap-1 min-w-max">
            {(["all", "ai", "fullstack", "security", "database"] as const).map((type) => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3.5 py-1.5 rounded-none text-[9px] font-bold tracking-wider uppercase transition-all duration-300 ${
                  filter === type
                    ? "bg-brand text-black"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {type === "all" ? "All Systems" : type === "ai" ? "Orchestrated AI" : type === "fullstack" ? "Full Stack" : type === "security" ? "Cyber Security" : "Database"}
              </button>
            ))}
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-zinc-950 border border-editorial-border rounded-none p-5 flex flex-col justify-between group hover:border-brand/45 transition-all duration-300 relative"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[9px] font-mono tracking-widest text-brand font-bold uppercase">
                      {p.category}
                    </span>
                    <div className="flex items-center space-x-2 text-zinc-500">
                      <a 
                        href={p.links.github} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="hover:text-white transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                      {p.links.paper && (
                        <a 
                          href={p.links.paper} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="hover:text-white transition-colors"
                          title="Published Research Paper"
                        >
                          <BookOpen className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <h3 className="text-base font-sans font-black text-white group-hover:text-brand tracking-tight transition-colors mb-2 uppercase">
                    {p.title}
                  </h3>

                  <p className="text-zinc-450 text-xs leading-relaxed mb-4">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="text-[9px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-none bg-zinc-900 border border-editorial-border text-zinc-400 uppercase"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Simulated Trigger or Demo display */}
                {p.interactiveDemo === "smartfood" ? (
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={() => {
                        setActiveProjectDemo(p.id);
                      }}
                      className="flex-1 py-2.5 rounded-none text-[9px] font-mono font-bold tracking-widest uppercase text-brand bg-brand/5 border border-brand/20 hover:bg-brand hover:text-black transition-all duration-300 cursor-pointer"
                    >
                      🚀 Trigger Simulator
                    </button>
                    <button
                      disabled
                      className="px-3 py-2.5 rounded-none text-[9px] font-mono font-bold tracking-widest uppercase text-green-400 bg-green-500/10 border border-green-500/20 flex items-center space-x-1.5 cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                      <span>In Production</span>
                    </button>
                  </div>
                ) : (
                  <button
                    disabled
                    className="mt-2 w-full py-2.5 rounded-none text-[9px] font-mono font-bold tracking-widest uppercase text-zinc-500 bg-zinc-900 border border-editorial-border cursor-not-allowed opacity-80"
                  >
                    Built . Live Soon !
                  </button>
                )}
              </div>
            ))}
          </AnimatePresence>
        </div>

        {/* Dynamic Simulator Modal overlay */}
        <AnimatePresence>
          {activeProjectDemo && (
            <div
              className="fixed inset-0 bg-black/85 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setActiveProjectDemo(null)}
              id="simulator-modal"
            >
              <div
                className="bg-zinc-950 border border-editorial-border rounded-none w-full max-w-xl p-6 sm:p-8 relative overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header detail */}
                <div className="flex justify-between items-start pb-4 border-b border-editorial-border mb-6">
                  <div>
                    <span className="text-[9px] font-mono text-brand font-bold tracking-widest uppercase">
                      Active Experiment Simulator //
                    </span>
                    <h3 className="text-lg font-sans font-black text-white tracking-tight uppercase mt-1">
                      {projects.find(p => p.id === activeProjectDemo)?.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => setActiveProjectDemo(null)}
                    className="text-zinc-400 hover:text-white font-mono text-[9px] tracking-widest uppercase border border-editorial-border bg-zinc-900 hover:bg-brand hover:text-black hover:border-brand px-3 py-1.5 rounded-none font-bold transition-all"
                  >
                    Close
                  </button>
                </div>

                {/* Sub Description */}
                <p className="text-zinc-400 text-xs mb-6">
                  {projects.find(p => p.id === activeProjectDemo)?.longDescription}
                </p>

                {/* Simulator Interfaces */}
                {activeProjectDemo === "smartfood" && (
                  <div className="space-y-4 font-sans" id="sim-smartfood">
                    <div className="flex items-center justify-between pb-2 border-b border-editorial-border">
                      <span className="text-[10px] font-mono text-zinc-400 font-bold uppercase tracking-wider">
                        DL CNN / OCR Nutrition Scan Model
                      </span>
                      <span className="flex items-center space-x-1">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="text-[9px] font-mono font-bold text-green-500">Live GPU Sandbox</span>
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[9px] font-mono text-[#888] uppercase tracking-widest font-bold">
                        Select Packaged Product to Scan
                      </label>
                      <select
                        value={selectedProduct}
                        onChange={(e) => {
                          setSelectedProduct(e.target.value);
                          setFoodAnalysisResult(null);
                        }}
                        className="w-full bg-zinc-950 border border-editorial-border rounded-none p-2.5 text-xs text-zinc-200 focus:outline-none focus:border-brand font-mono"
                      >
                        <option value="Oreo Cookies">Oreo Sandwich Cookies (Ultra-Processed)</option>
                        <option value="Greek Yogurt">Plain Greek Yogurt (Minimally Processed)</option>
                        <option value="Instant Ramen">Instant Ramen Cup Noodles (High Sodium/Additive)</option>
                        <option value="Diet Soda">Artificial Diet Cola (Zero Nutrients)</option>
                      </select>
                    </div>

                    <button
                      onClick={runFoodAnalysis}
                      disabled={isAnalyzingFood}
                      className="w-full py-3.5 rounded-none bg-brand hover:bg-[#ff5d1a] text-black font-black text-[10px] tracking-widest uppercase disabled:opacity-50 cursor-pointer"
                    >
                      {isAnalyzingFood ? "Deep Neural Network Processing..." : "Scan Product Nutrition Labels"}
                    </button>

                    {/* Scanning animation or results */}
                    {isAnalyzingFood && (
                      <div className="p-8 border border-editorial-border border-dashed bg-zinc-950 flex flex-col items-center justify-center space-y-3">
                        <div className="w-8 h-8 border-t-2 border-brand rounded-full animate-spin" />
                        <span className="text-[9px] font-mono text-brand animate-pulse tracking-widest uppercase">
                          Running TensorFlow YOLOv8 & OCR Pipeline...
                        </span>
                      </div>
                    )}

                    {foodAnalysisResult && !isAnalyzingFood && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-none bg-zinc-950 border border-editorial-border space-y-4"
                      >
                        <div className="flex justify-between items-center pb-2 border-b border-editorial-border">
                          <span className="text-[10px] font-mono font-bold text-white">
                            {foodAnalysisResult.productName.toUpperCase()}
                          </span>
                          <span className="text-[9px] font-mono bg-brand/10 text-brand border border-brand/20 px-2 py-0.5 rounded-none font-bold">
                            HEALTH SCORE: {foodAnalysisResult.healthScore}/100
                          </span>
                        </div>

                        {/* Visual Indicators */}
                        <div className="grid grid-cols-2 gap-4">
                          <div className="p-3 bg-zinc-900 border border-editorial-border flex flex-col items-center justify-center text-center">
                            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-1 font-bold">Nutri-Score</span>
                            <span className={`text-2xl font-black ${
                              foodAnalysisResult.grade === "A" ? "text-green-500" :
                              foodAnalysisResult.grade === "B" ? "text-green-400" :
                              foodAnalysisResult.grade === "C" ? "text-yellow-500" :
                              foodAnalysisResult.grade === "D" ? "text-orange-500" : "text-red-500"
                            }`}>
                              Grade {foodAnalysisResult.grade}
                            </span>
                          </div>

                          <div className="p-3 bg-zinc-900 border border-editorial-border flex flex-col items-center justify-center text-center">
                            <span className="text-[8px] font-mono text-zinc-500 uppercase tracking-wider mb-1 font-bold">NOVA Food Group</span>
                            <span className="text-sm font-bold text-zinc-300">
                              Group {foodAnalysisResult.novaGroup} 
                              <span className="block text-[8px] font-mono text-zinc-500 uppercase mt-0.5">
                                {foodAnalysisResult.novaGroup === 4 ? "Ultra-Processed" : "Minimally Processed"}
                              </span>
                            </span>
                          </div>
                        </div>

                        {/* Alerts & Risks */}
                        <div>
                          <span className="block text-[9px] font-mono text-[#888] uppercase tracking-wider mb-1.5 font-bold">DL Critical Risk Indicators:</span>
                          <ul className="space-y-1.5 text-xs text-zinc-300 pl-0 list-none">
                            {foodAnalysisResult.alerts.map((alert, idx) => (
                              <li key={idx} className="flex items-center space-x-2 text-brand font-medium">
                                <span className="w-1.5 h-1.5 bg-brand rounded-none" />
                                <span>{alert}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Dietary Recommendations */}
                        <div className="pt-3 border-t border-editorial-border">
                          <span className="block text-[9px] font-mono text-zinc-500 uppercase tracking-wider mb-1.5 font-bold">AI Recommended Swaps:</span>
                          <ul className="space-y-1.5 text-xs text-zinc-400 pl-0 list-none">
                            {foodAnalysisResult.recommendations.map((rec, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-zinc-500 font-bold select-none mt-0.5">•</span>
                                <span>{rec}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

              </div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
