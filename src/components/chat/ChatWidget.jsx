import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ChatWindow from "./ChatWindow";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-20 right-0 w-[90vw] sm:w-[400px] h-[550px] bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden"
            >
              <ChatWindow />
            </motion.div>
          )}
        </AnimatePresence>

        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full shadow-lg bg-neutral-900 hover:bg-neutral-800 transition-all active:scale-95"
          size="icon"
        >
          {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </Button>
      </div>
    </>
  );
}
