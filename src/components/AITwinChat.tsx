import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Bot, X, Send, Sparkles, AlertCircle, RefreshCw, 
  HelpCircle, ChevronRight, Music, Shield, Code, ArrowUpRight 
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AITwinChatProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AITwinChat({ isOpen, onClose }: AITwinChatProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I am **Kevin's AI Twin**, trained on his professional summary, engineering coursework, full-stack projects, and research papers. Ask me anything about his technical background, why you should hire him, or even his musical journey!"
    }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const suggestChips = [
    { label: "Why hire Kevin?", type: "hire" },
    { label: "Tell me about CampusPulse", type: "project" },
    { label: "What is Bot Guard (Neuro-Shield)?", type: "project" },
    { label: "How is his music related to design?", type: "music" }
  ];

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    // Dispatch site analytics event
    window.dispatchEvent(new Event("analytics_ai_chat"));

    const userMessage: Message = { role: "user", content: textToSend };
    const updatedMessages = [...messages, userMessage];
    
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages })
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.error || `HTTP ${response.status} Error`);
      }

      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } catch (err: any) {
      console.error(err);
      setErrorMsg(
        err?.message || "Connection timed out. Please check if your GEMINI_API_KEY is configured in the AI Studio Secrets panel."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-45"
            onClick={onClose}
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-[460px] bg-[#050505] border-l border-editorial-border z-50 flex flex-col justify-between"
            id="ai-chat-panel"
          >
            {/* Header */}
            <div className="p-4 border-b border-editorial-border bg-zinc-950/90 backdrop-blur flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-none bg-brand flex items-center justify-center border border-brand/20">
                  <Bot className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h4 className="font-sans font-black text-xs text-white uppercase tracking-wider flex items-center space-x-1.5">
                    <span>Kevin's AI Twin</span>
                    <span className="inline-block text-[8px] font-mono px-1.5 py-0.2 rounded-none bg-brand/10 text-brand border border-brand/20 font-black tracking-widest">
                      ONLINE
                    </span>
                  </h4>
                  <span className="block text-[9px] font-mono text-brand font-bold uppercase tracking-widest mt-0.5">
                    Powered by Gemini 2.5 Flash
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-none border border-editorial-border hover:bg-brand hover:text-black hover:border-brand bg-[#0a0a0a] text-zinc-400 transition-colors cursor-pointer"
                aria-label="Close Chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-zinc-950/20">
              {messages.map((msg, idx) => {
                const isUser = msg.role === "user";
                return (
                  <div
                    key={idx}
                    className={`flex items-start space-x-2.5 ${isUser ? "flex-row-reverse space-x-reverse" : ""}`}
                  >
                    {!isUser && (
                      <div className="w-8 h-8 rounded-none bg-zinc-950 border border-editorial-border flex items-center justify-center shrink-0">
                        <Bot className="w-4 h-4 text-brand" />
                      </div>
                    )}
                    <div
                      className={`p-3.5 rounded-none max-w-[85%] text-xs leading-relaxed border ${
                        isUser
                          ? "bg-brand text-black border-brand font-bold"
                          : "bg-[#0f0f0f] text-zinc-300 border-editorial-border font-mono text-[11px]"
                      }`}
                    >
                      {/* Standard simple markdown formatting (bold, italic) */}
                      <p className="whitespace-pre-wrap">
                        {msg.content.split("**").map((text, i) => {
                          if (i % 2 === 1) {
                            return <strong key={i} className={isUser ? "text-black font-black" : "text-brand font-bold"}>{text}</strong>;
                          }
                          return text;
                        })}
                      </p>
                    </div>
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-start space-x-2.5 animate-pulse">
                  <div className="w-8 h-8 rounded-none bg-zinc-950 border border-editorial-border flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-brand" />
                  </div>
                  <div className="p-3.5 rounded-none bg-zinc-950 border border-editorial-border flex items-center space-x-2">
                    <RefreshCw className="w-3 h-3 animate-spin text-brand" />
                    <span className="font-mono text-[9px] uppercase tracking-widest font-bold text-zinc-400">AI Twin drafting response...</span>
                  </div>
                </div>
              )}

              {errorMsg && (
                <div className="p-3.5 rounded-none bg-brand/5 border border-brand/20 flex items-start space-x-2.5 text-xs text-brand">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold uppercase tracking-wider text-[10px]">Gemini Gateway Alert</span>
                    <span className="text-[10px] text-zinc-450">{errorMsg}</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested Chip Row */}
            {messages.length === 1 && (
              <div className="px-4 py-3 bg-zinc-950 border-t border-editorial-border">
                <span className="block text-[8px] font-mono font-bold text-[#888] tracking-[0.2em] uppercase mb-2">Suggested Queries</span>
                <div className="flex flex-col gap-1.5">
                  {suggestChips.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.label)}
                      className="text-[9px] font-mono font-bold tracking-wider text-zinc-400 hover:text-brand bg-[#0a0a0a] hover:bg-zinc-950 border border-editorial-border hover:border-brand/40 px-3 py-2 rounded-none transition-all flex items-center justify-between text-left cursor-pointer uppercase"
                    >
                      <span>{chip.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-brand" />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-zinc-950 border-t border-editorial-border">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(input);
                }}
                className="flex space-x-2"
                id="ai-chat-form"
              >
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me something about Kevin..."
                  disabled={isLoading}
                  className="flex-1 bg-[#050505] border border-editorial-border rounded-none px-3.5 py-2.5 text-xs text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-brand disabled:opacity-50 font-mono"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="px-4 py-2.5 rounded-none bg-brand hover:bg-[#ff5d1a] text-black font-black disabled:opacity-40 transition-colors flex items-center justify-center cursor-pointer"
                  id="ai-chat-submit"
                  aria-label="Send Message"
                >
                  <Send className="w-3.5 h-3.5 text-black" />
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
