import { motion } from "motion/react";
import ChatWindow from "@/src/components/chat/ChatWindow";

export default function ChatPage() {
  return (
    <div className="min-h-[calc(100vh-100px)] py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-16"
        >
          <div className="space-y-6 text-center max-w-3xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter font-heading">
              Digital <span className="text-gradient">Double.</span>
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 font-light leading-relaxed">
              I've integrated my professional history, project logic, and algorithmic experience into this custom neural interface.
            </p>
          </div>
          
          <div className="h-[700px] rounded-[3rem] bg-slate-900/40 backdrop-blur-2xl border border-white/5 shadow-2xl shadow-indigo-950/40 overflow-hidden relative group">
            <ChatWindow dark />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
