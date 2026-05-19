import { motion } from "motion/react";
import { siteConfig } from "@/src/lib/site";
import { buttonVariants } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative pt-20 md:pt-32 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center text-center gap-10">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 px-5 py-2 rounded-full text-xs font-bold tracking-widest uppercase text-indigo-600 dark:text-indigo-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for collaboration
          </motion.div>
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter leading-[0.85] font-heading">
              <span className="text-slate-900 dark:text-white">Build. Optimize.</span>
              <br />
              <span className="text-gradient">Solve.</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-500 dark:text-slate-400 max-w-3xl font-light leading-snug mt-4">
              I'm <span className="font-semibold text-slate-900 dark:text-white italic">{siteConfig.name}</span>. 
              Engineering high-performance applications through <span className="text-indigo-500 dark:text-indigo-400 font-medium">algorithmic precision</span> and creative code.
            </p>
          </motion.div>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 mt-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <a 
              href="#projects" 
              className={cn(
                buttonVariants({ size: "lg" }), 
                "rounded-full h-16 px-12 text-lg font-bold bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 border-none shadow-2xl shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
              )}
            >
              Explore Projects <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex items-center gap-4">
              <a 
                href={siteConfig.links.github} 
                target="_blank" 
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }), 
                  "rounded-full size-14 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all hover:scale-110 shadow-lg"
                )}
              >
                <Github size={24} />
              </a>
              <a 
                href={siteConfig.links.linkedin} 
                target="_blank" 
                rel="noreferrer"
                className={cn(
                  buttonVariants({ variant: "outline", size: "icon" }), 
                  "rounded-full size-14 border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-white/5 backdrop-blur-sm hover:bg-white dark:hover:bg-white/10 transition-all hover:scale-110 shadow-lg"
                )}
              >
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-24 w-full max-w-6xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <a 
              href={siteConfig.links.codeforces} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-3xl glass glow-card hover:scale-105 transition-transform"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-tighter text-indigo-500 dark:text-indigo-400 font-heading">{siteConfig.stats.cf_rating}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mt-3">Codeforces</span>
            </a>
            <a 
              href={siteConfig.links.codechef} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-3xl glass glow-card hover:scale-105 transition-transform"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-tighter text-purple-500 dark:text-purple-400 font-heading">{siteConfig.stats.cc_rating}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mt-3">CodeChef</span>
            </a>
            <a 
              href={siteConfig.links.codolio} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-3xl glass glow-card hover:scale-105 transition-transform"
            >
              <span className="text-3xl md:text-5xl font-extrabold tracking-tighter text-emerald-500 dark:text-emerald-400 font-heading">{siteConfig.stats.solved}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mt-3">Solved</span>
            </a>
            <a 
              href={siteConfig.links.github} 
              target="_blank" 
              rel="noreferrer" 
              className="flex flex-col items-center p-6 md:p-8 rounded-3xl glass glow-card hover:scale-105 transition-transform"
            >
              <span className="text-5xl font-extrabold tracking-tighter text-amber-500 dark:text-amber-400 font-heading">{siteConfig.stats.projectsCount}</span>
              <span className="text-[10px] text-slate-400 uppercase tracking-[0.3em] font-black mt-3">Projects</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
