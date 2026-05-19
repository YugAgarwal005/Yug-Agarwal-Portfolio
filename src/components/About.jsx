import { motion } from "motion/react";
import { siteConfig } from "@/src/lib/site";
import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <section id="about" className="container mx-auto px-6 py-32 md:py-48 relative">
      <div className="absolute left-0 bottom-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <motion.div 
          className="lg:col-span-7 space-y-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6">
            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-none font-heading">
              Technical <br />
              <span className="text-gradient">Story.</span>
            </h2>
            <div className="h-2 w-32 bg-indigo-600 rounded-full" />
          </div>
          
          <div className="space-y-8 text-slate-500 dark:text-slate-400 leading-relaxed text-xl font-light">
            <p>
              I am a <span className="font-bold text-slate-900 dark:text-white underline decoration-indigo-500 decoration-4 underline-offset-4">Sophomore engineer</span> at IIIT Bhubaneswar, obsessed with the intersection of algorithmic efficiency and human-centric design.
            </p>
            <p>
              My journey is defined by <span className="font-bold text-slate-900 dark:text-white">problem-solving at scale</span>. With over 1000+ verified solutions across Codeforces and CodeChef, I've developed a rigorous mental model for complex system architecture.
            </p>
            <p className="text-2xl font-serif italic text-slate-900 dark:text-slate-200 border-l-4 border-indigo-600 pl-8 py-2">
              "I don't just write code; I orchestrate logic to solve real-world complexities."
            </p>
          </div>
        </motion.div>
        
        <motion.div 
          className="lg:col-span-5 space-y-10"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="p-10 rounded-[3rem] glass border-slate-200 dark:border-white/5 relative overflow-hidden group hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500">
            <div className="absolute -top-10 -right-10 size-40 bg-indigo-600/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            
            <h3 className="text-xs font-black uppercase tracking-[0.4em] text-indigo-500 mb-8">Skill Blueprint</h3>
            
            <div className="flex flex-wrap gap-3">
              {siteConfig.skills.map((skill) => (
                <div key={skill} className="px-5 py-2 rounded-2xl bg-white dark:bg-white/5 border border-slate-100 dark:border-white/10 text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300 shadow-sm hover:border-indigo-500 transition-colors">
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-white/5">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-slate-400 mb-6">Current Research</h3>
              <p className="text-lg font-bold text-slate-900 dark:text-white leading-tight">
                Architecting Low-Latency Neural Networks for Edge Devices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
