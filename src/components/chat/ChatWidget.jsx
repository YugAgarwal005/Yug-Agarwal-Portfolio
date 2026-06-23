import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#chat") {
        setIsOpen(true);
      }
    };

    // Check on mount
    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-[90vw] sm:w-[450px] h-[600px] bg-[#04040a]/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 overflow-hidden"
            >
              <ChatWindow />
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-16 h-16 rounded-full shadow-2xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all active:scale-90 border border-indigo-500/30 flex items-center justify-center group"
          size="icon"
        >
          {isOpen ? (
            <X size={24} className="transition-transform group-hover:rotate-90 duration-300" />
          ) : (
            <MessageSquare size={24} className="transition-transform group-hover:scale-110 duration-300" />
          )}
        </Button>
      </div>
    </>
  );
}
