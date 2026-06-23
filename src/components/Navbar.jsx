import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/src/lib/site";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [time, setTime] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timePart = now.toTimeString().split(" ")[0]; // "21:12:30"
      
      // Calculate GMT offset
      const offsetMinutes = -now.getTimezoneOffset();
      const offsetHours = Math.floor(Math.abs(offsetMinutes) / 60);
      const offsetMins = Math.abs(offsetMinutes) % 60;
      const sign = offsetMinutes >= 0 ? "+" : "-";
      
      // format as "GMT+5:30" or "GMT-8"
      const offsetStr = `GMT${sign}${offsetHours}${offsetMins ? `:${offsetMins.toString().padStart(2, "0")}` : ""}`;
      
      setTime(`${timePart} ${offsetStr}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleHomeClick = (e) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      window.history.pushState(null, "", "/");
    }
  };

  const handleHashClick = (e, hashId) => {
    if (window.location.pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(hashId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${hashId}`);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 md:py-6">
      <div 
        className={cn(
          "max-w-5xl mx-auto px-6 py-4 rounded-[2rem] transition-all duration-300",
          "bg-slate-950/85 backdrop-blur-2xl border border-white/5 shadow-2xl",
          scrolled ? "shadow-black/40 scale-[0.98]" : "scale-100",
          isOpen ? "rounded-[2.5rem] bg-slate-950/95" : ""
        )}
      >
        {/* Header Row: Logo & Actions */}
        <div className="flex items-center justify-between">
          {/* Left Side: Logo */}
          <Link 
            to="/" 
            onClick={(e) => { handleHomeClick(e); setIsOpen(false); }} 
            className="group flex items-center gap-1"
          >
            <span className="text-md md:text-xl font-black tracking-tighter font-sans text-white">
              {siteConfig.name}<span className="text-indigo-500 italic">.</span>
            </span>
          </Link>
          
          {/* Right Side: Desktop Nav Links (hidden on mobile) */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              <Link 
                to="/" 
                onClick={handleHomeClick} 
                className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/#about" 
                onClick={(e) => handleHashClick(e, "about")} 
                className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link 
                to="/#projects" 
                onClick={(e) => handleHashClick(e, "projects")} 
                className="text-xs md:text-sm font-medium text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link 
                to="/chat" 
                className="text-xs md:text-sm font-medium text-slate-400 hover:text-indigo-400 transition-colors"
              >
                Consult AI
              </Link>
            </div>
            
            <a 
              href="https://yug-agarwal.tiiny.site" 
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-slate-950 hover:bg-slate-200 active:scale-95 transition-all shadow-md font-sans"
            >
              View Resume
            </a>
          </div>

          {/* Mobile Menu Action Row */}
          <div className="flex md:hidden items-center gap-2">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 -mr-2 text-slate-300 hover:text-white active:scale-95 transition-all focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel: Animated dynamic expansion */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden md:hidden"
            >
              <div className="pt-6 pb-2 flex flex-col gap-4 border-t border-white/5 mt-4">
                <Link 
                  to="/" 
                  onClick={(e) => { handleHomeClick(e); setIsOpen(false); }} 
                  className="text-sm font-bold text-slate-300 hover:text-white transition-colors py-2 px-1 rounded-xl hover:bg-white/5"
                >
                  Home
                </Link>
                <Link 
                  to="/#about" 
                  onClick={(e) => { handleHashClick(e, "about"); setIsOpen(false); }} 
                  className="text-sm font-bold text-slate-300 hover:text-white transition-colors py-2 px-1 rounded-xl hover:bg-white/5"
                >
                  About
                </Link>
                <Link 
                  to="/#projects" 
                  onClick={(e) => { handleHashClick(e, "projects"); setIsOpen(false); }} 
                  className="text-sm font-bold text-slate-300 hover:text-white transition-colors py-2 px-1 rounded-xl hover:bg-white/5"
                >
                  Projects
                </Link>
                <Link 
                  to="/chat" 
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors py-2 px-1 rounded-xl hover:bg-white/5"
                >
                  Consult AI
                </Link>
                
                <a 
                  href="https://yug-agarwal.tiiny.site" 
                  target="_blank"
                  rel="noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 w-full py-3.5 rounded-2xl text-center text-sm font-extrabold bg-indigo-600 text-white hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/10 font-sans flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  View Resume <ArrowUpRight className="size-4" />
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
