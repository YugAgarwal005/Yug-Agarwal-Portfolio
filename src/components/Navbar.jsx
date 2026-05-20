import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/src/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        scrolled 
          ? "py-4 bg-white/70 dark:bg-slate-950/40 backdrop-blur-2xl border-b border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)]" 
          : "py-8 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" onClick={handleHomeClick} className="group flex items-center gap-2">
          <span className="text-2xl font-black tracking-tighter font-heading">
            {siteConfig.name}<span className="text-indigo-500 italic">.</span>
          </span>
        </Link>
        
        <div className="flex items-center gap-2 md:gap-10">
          <div className="hidden md:flex items-center gap-8 px-6 py-2 rounded-full glass border-slate-200 dark:border-white/5">
            <Link to="/" onClick={handleHomeClick} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 dark:hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/#about" onClick={(e) => handleHashClick(e, "about")} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 dark:hover:text-white transition-colors">
              About
            </Link>
            <Link to="/#projects" onClick={(e) => handleHashClick(e, "projects")} className="text-xs font-black uppercase tracking-widest text-slate-500 hover:text-indigo-500 dark:hover:text-white transition-colors">
              Projects
            </Link>
          </div>
          
          <Link 
            to="/chat"
            className={cn(
              buttonVariants({ size: "default" }), 
              "rounded-full px-8 h-12 flex items-center gap-2 font-bold bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:scale-105 transition-transform"
            )}
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Consult AI</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
