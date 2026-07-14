import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Mail, Github, Linkedin, MapPin, Send, 
  CheckCircle, RefreshCw
} from "lucide-react";

const EMAILJS_SERVICE_ID = "service_5m1d27d";
const EMAILJS_TEMPLATE_ID = "template_la03jwo";
const EMAILJS_PUBLIC_KEY = "srGbv9kKIGUImSyq";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;

    setIsSending(true);

    try {
      await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: {
            from_name: name,
            from_email: email,
            message: message,
            email: email,
            time: new Date().toLocaleString(),
          },
        }),
      });

      // Dispatch telemetric event for real-time site analytics
      window.dispatchEvent(new Event("analytics_contact_dispatch"));

      setIsSending(false);
      setIsSent(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setIsSent(false), 4000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setIsSending(false);
    }
  };

  const contactDetails = [
    {
      icon: Mail,
      label: "Direct Email",
      value: "kevintennison1@gmail.com",
      href: "mailto:kevintennison1@gmail.com"
    },
    {
      icon: Github,
      label: "GitHub Workspace",
      value: "GITHUB",
      href: "https://github.com/kevintennison12-alt"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Professional Link",
      value: "LINKEDIN",
      href: "https://www.linkedin.com/in/kevin-tennison-63623238a/"
    },
    {
      icon: MapPin,
      label: "Primary Base",
      value: "Shivamogga, Karnataka, India",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-24 relative bg-[#050505] border-b border-editorial-border">
      <div className="absolute inset-y-0 right-0 w-1/4 bg-brand/[0.01] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 text-brand font-mono text-xs tracking-[0.25em] font-bold uppercase mb-3">
            <span>CONTACT COORDINATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white uppercase">
            Initiate Contact
          </h2>
          <p className="text-zinc-450 mt-2 text-sm max-w-xl">
            Whether you want to discuss full-stack integrations, machine learning deployments, or music tutoring, shoot over a message!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Metadata and direct social details */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-lg font-sans font-black text-white tracking-tight uppercase">
              Connection Gateways
            </h3>
            <p className="text-zinc-450 text-xs leading-relaxed">
              I generally respond to business, academic, or design coordination inquiries within 12-24 hours. Let's build something robust together.
            </p>

            <div className="space-y-3">
              {contactDetails.map((det, idx) => {
                const Icon = det.icon;
                const isLink = det.href !== "#";
                const Wrapper = isLink ? "a" : "div";
                
                return (
                  <Wrapper
                    key={idx}
                    href={det.href}
                    target={isLink ? "_blank" : undefined}
                    rel={isLink ? "noreferrer" : undefined}
                    className={`flex items-center space-x-4 p-4 rounded-none bg-zinc-950 border border-editorial-border hover:border-brand/40 transition-colors ${
                      isLink ? "cursor-pointer group" : ""
                    }`}
                  >
                    <div className="p-2.5 rounded-none bg-zinc-950 border border-editorial-border text-brand group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-brand" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-[#888] uppercase tracking-[0.2em] font-bold">{det.label}</span>
                      <span className="text-xs font-sans font-bold text-zinc-100 group-hover:text-brand transition-colors">
                        {det.value}
                      </span>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>

          {/* Right: Message Dispatch Terminal */}
          <div className="lg:col-span-7 bg-zinc-950 border border-editorial-border rounded-none p-6 sm:p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/[0.01] pointer-events-none" />

            <div className="flex items-center justify-between pb-4 border-b border-editorial-border mb-6">
              <div className="flex items-center space-x-2">
                <Send className="w-4 h-4 text-brand" />
                <span className="text-xs font-mono uppercase tracking-widest font-bold text-white">Secure Dispatch Terminal</span>
              </div>
              <span className="text-[8px] font-mono px-2 py-0.5 rounded-none bg-brand/10 text-brand border border-brand/20 font-black tracking-[0.15em] uppercase">
                ACTIVE
              </span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5" id="contact-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-mono text-[#888] uppercase tracking-widest font-bold">Your Name</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your Name"
                    className="w-full bg-zinc-950 border border-editorial-border rounded-none px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-brand font-mono"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="block text-[9px] font-mono text-[#888] uppercase tracking-widest font-bold">Your Email</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ex:name@gmail.com"
                    className="w-full bg-zinc-950 border border-editorial-border rounded-none px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-brand font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[9px] font-mono text-[#888] uppercase tracking-widest font-bold">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hey Kevin, I would love to connect about a full-stack opportunity..."
                  className="w-full bg-zinc-950 border border-editorial-border rounded-none px-4 py-3 text-xs text-zinc-100 focus:outline-none focus:border-brand placeholder-zinc-600 font-mono"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 rounded-none bg-brand hover:bg-[#ff5d1a] text-black font-black text-[10px] tracking-widest uppercase disabled:opacity-50 transition-all flex items-center justify-center space-x-2 cursor-pointer"
                id="contact-submit"
              >
                {isSending ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-black" />
                    <span>Routing packets...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-black" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>

            {/* Success alert banner */}
            {isSent && (
              <div className="mt-4 p-4 rounded-none bg-brand/5 border border-brand/20 flex items-start space-x-3 text-xs text-brand animate-fadeIn" id="contact-success">
                <CheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-brand" />
                <div>
                  <span className="block font-bold uppercase tracking-wide text-[10px]">Message Dispatched Successfully!</span>
                  <span className="text-[10px] text-zinc-400">Payload received by local dev pipeline and cataloged in simulation metrics.</span>
                </div>
              </div>
            )}



          </div>

        </div>

      </div>
    </section>
  );
}
