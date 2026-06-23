import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Globe, Package, Trophy, Folder } from "lucide-react";
import projects from "@/content/projects.json";

const getProjectIcon = (title) => {
  const normalized = title.toLowerCase();
  if (normalized.includes("portfolio")) return <Globe size={24} />;
  if (normalized.includes("inventory")) return <Package size={24} />;
  if (normalized.includes("contest") || normalized.includes("tracker")) return <Trophy size={24} />;
  return <Folder size={24} />;
};

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 16,
        mass: 0.8
      }
    }
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="flex flex-col gap-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-heading">Selected Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-xl font-light leading-relaxed">
              A curated collection of systems architecture, algorithmic efficiency, and UI engineering.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-12 mb-4" />
        </motion.div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={item}>
              <Card className="group h-full flex flex-col border-white/5 bg-slate-900/45 backdrop-blur-xl glow-card overflow-hidden hover:-translate-y-2 transition-all duration-500 rounded-[2.5rem]">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-4 rounded-2xl bg-indigo-950/40 text-indigo-400 border border-indigo-900/50 shadow-md group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 transition-all duration-500">
                      {getProjectIcon(project.title)}
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold tracking-tight mb-3 font-heading group-hover:text-indigo-400 transition-colors text-white">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400 leading-relaxed font-light text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 mt-auto space-y-6">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <Badge key={j} variant="secondary" className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 text-slate-300 border-none">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex gap-3 items-center">
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-slate-300 transition-all active:scale-95 border border-white/5"
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      project.live.startsWith("/") ? (
                        <Link 
                          to={project.live}
                          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all active:scale-95 font-heading"
                        >
                          <ExternalLink size={14} />
                          <span>Live</span>
                        </Link>
                      ) : (
                        <a 
                          href={project.live} 
                          target="_blank"
                          rel="noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl text-xs font-bold uppercase tracking-wider bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all active:scale-95 font-heading"
                        >
                          <ExternalLink size={14} />
                          <span>Live</span>
                        </a>
                      )
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
