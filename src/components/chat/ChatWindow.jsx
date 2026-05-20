import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { Send, Loader2, User, Bot, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export default function ChatWindow({ dark }) {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I'm Yug's AI assistant. Ask me about his background, skills, projects, or how to collaborate." }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e, customInput) => {
    if (e) e.preventDefault();
    const messageToSend = customInput || input.trim();
    if (!messageToSend || isLoading) return;

    if (!customInput) {
      setMessages(prev => [...prev, { role: "user", content: messageToSend }]);
      setInput("");
    }
    setIsLoading(true);

    try {
      // Ensure we include all messages including the new one
      const currentMessages = customInput ? messages : [...messages, { role: "user", content: messageToSend }];
      
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: currentMessages }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || "Failed to get response");
      }
      
      setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
    } catch (error) {
      const isQuotaError = error.message?.toLowerCase().includes("quota") || error.message?.includes("429") || error.message?.includes("503");
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: isQuotaError 
          ? "⚠️ **Temporarily Unavailable**: I'm currently receiving too many requests or the model is under high demand. Please try again in 30-60 seconds." 
          : (error.message || "Sorry, I encountered an error. Please try again later.")
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([{ role: "assistant", content: "Hi! I'm Yug's AI assistant. Ask me about his background, skills, projects, or how to collaborate." }]);
  };

  const suggestions = [
    "What are your competitive programming achievements?",
    "Tell me about your tech stack and projects.",
    "Are you open to internships?",
    "How can I get in touch with you?",
  ];

  return (
    <div className={cn(
      "flex flex-col h-full relative transition-all duration-500",
      "bg-white/5 dark:bg-slate-950/20 backdrop-blur-3xl text-slate-900 dark:text-slate-100"
    )}>
      {/* Header */}
      <div className={cn(
        "px-8 py-6 border-b flex justify-between items-center z-10",
        "border-slate-200 dark:border-white/5 bg-white/20 dark:bg-white/5 backdrop-blur-md"
      )}>
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-500 rounded-full blur-md opacity-50 animate-pulse" />
            <div className="relative size-12 rounded-2xl bg-indigo-600 flex items-center justify-center text-white">
              <Bot size={24} />
            </div>
            <div className="absolute -bottom-1 -right-1 size-4 rounded-full bg-emerald-500 border-4 border-white dark:border-slate-950" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter font-heading">AI Consultant</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black">Neural Interface v2.0</span>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="size-10 rounded-xl hover:bg-slate-100 dark:hover:bg-white/10 text-slate-400 hover:text-red-500 transition-all"
            onClick={clearChat}
          >
            <Trash2 size={20} />
          </Button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12 no-scrollbar" ref={scrollRef}>
        <div className="flex flex-col gap-10 max-w-4xl mx-auto">
          {messages.map((message, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex items-start gap-6",
                message.role === "user" ? "flex-row-reverse" : "flex-row"
              )}
            >
              <div className={cn(
                "size-12 rounded-2xl shrink-0 shadow-lg flex items-center justify-center",
                message.role === "user" ? "bg-indigo-600 text-white" : "bg-indigo-600 text-white"
              )}>
                {message.role === "user" ? <User size={20} /> : <Bot size={20} />}
              </div>
              
              <div className={cn(
                "group relative max-w-[85%] rounded-[2rem] p-6 text-base md:text-lg leading-relaxed shadow-sm transition-all duration-300",
                message.role === "user" 
                  ? "bg-indigo-600 text-white rounded-tr-none shadow-indigo-500/20" 
                  : "bg-slate-100 dark:bg-slate-900/80 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200 dark:border-white/5"
              )}>
                <div className={cn(
                  "markdown-body prose prose-slate max-w-none",
                  message.role === "user" ? "prose-invert" : "dark:prose-invert"
                )}>
                  <ReactMarkdown>{message.content}</ReactMarkdown>
                </div>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <div className="flex items-start gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
               <div className="size-12 rounded-2xl bg-indigo-600/20 flex items-center justify-center shrink-0 animate-pulse text-indigo-600">
                 <Bot size={20} />
               </div>
               <div className="bg-slate-100 dark:bg-slate-900/80 p-6 rounded-[2rem] rounded-tl-none border border-slate-200 dark:border-white/10 w-24 flex justify-center">
                  <div className="flex gap-2">
                    <div className="size-1.5 rounded-full bg-indigo-500 animate-bounce" />
                    <div className="size-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.15s]" />
                    <div className="size-1.5 rounded-full bg-indigo-500 animate-bounce [animation-delay:-0.3s]" />
                  </div>
               </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Input */}
      <div className={cn(
        "p-8 md:p-12 border-t z-10 transition-all duration-300",
        "bg-white/40 dark:bg-black/20 backdrop-blur-xl border-slate-200 dark:border-white/5"
      )}>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => {
                  setMessages(prev => [...prev, { role: "user", content: suggestion }]);
                  handleSubmit(undefined, suggestion);
                }}
                disabled={isLoading}
                className="text-[10px] font-black uppercase tracking-widest px-6 py-3 rounded-2xl glass border-slate-200 dark:border-white/5 hover:border-indigo-500 hover:text-indigo-500 dark:hover:border-indigo-400 dark:hover:text-indigo-400 text-slate-500 dark:text-slate-400 transition-all whitespace-nowrap active:scale-95"
              >
                {suggestion}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="relative flex gap-4">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Query the system..."
              className="flex-1 rounded-[1.5rem] h-16 px-8 text-lg border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 focus-visible:ring-indigo-500/50 shadow-inner"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="size-16 shrink-0 rounded-2xl bg-indigo-600 text-white hover:bg-indigo-700 shadow-2xl shadow-indigo-500/20 active:scale-90 transition-all transform"
            >
              <Send size={24} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
