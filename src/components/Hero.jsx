import { motion } from "motion/react";
import { siteConfig } from "@/src/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-24 overflow-hidden animate-fade-in">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center gap-10">
          
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400"></span>
            </span>
            Available for collaboration
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] font-sans">
              <span className="text-white">Build. Optimize.</span>
              <br />
              <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent">Solve.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-400 max-w-3xl font-light leading-relaxed mt-6">
              I'm <span className="font-semibold text-white italic">Yug Agarwal</span>. 
              Engineering high-performance applications through <span className="text-indigo-400 font-medium">algorithmic precision</span> and creative code.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "rounded-full h-16 px-12 text-lg font-bold bg-indigo-600 text-white hover:bg-indigo-500 border-none shadow-2xl shadow-indigo-600/20 transition-all hover:scale-105 active:scale-95"
              )}
            >
              Explore Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.links.github} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center rounded-full size-14 bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                title="GitHub"
              >
                <Github size={22} />
              </a>
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center justify-center rounded-full size-14 bg-white/5 hover:bg-white/10 border border-white/5 text-slate-300 hover:text-white transition-all hover:scale-110 active:scale-95 shadow-lg"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <a 
              href={siteConfig.links.codeforces} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-indigo-500/50 hover:bg-slate-900/60 transition-all duration-300 shadow-xl group"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-normal text-[#5a60ff] font-heading group-hover:scale-110 transition-transform origin-center">{siteConfig.stats.cf_rating}</span>
              <span className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.25em] font-black mt-4 font-sans">CODEFORCES</span>
            </a>
            
            <a 
              href={siteConfig.links.codechef} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-purple-500/50 hover:bg-slate-900/60 transition-all duration-300 shadow-xl group"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-normal text-[#a855f7] font-heading group-hover:scale-110 transition-transform origin-center">{siteConfig.stats.cc_rating}</span>
              <span className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.25em] font-black mt-4 font-sans">CODECHEF</span>
            </a>
            
            <a 
              href={siteConfig.links.codolio} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-[2rem] bg-slate-900/40 backdrop-blur-xl border border-white/5 hover:border-emerald-500/50 hover:bg-slate-900/60 transition-all duration-300 shadow-xl group"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-normal text-[#00b074] font-heading group-hover:scale-110 transition-transform origin-center">{siteConfig.stats.solved}</span>
              <span className="text-[10px] md:text-[11px] text-slate-400 uppercase tracking-[0.25em] font-black mt-4 font-sans">PROBLEMS SOLVED</span>
            </a>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
