import { motion } from "motion/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import projects from "@/content/projects.json";

export default function Projects() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="container mx-auto px-4 py-24 relative">
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter font-heading">Selected Projects</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-xl text-xl font-light leading-relaxed">
              A curated collection of systems architecture, algorithmic efficiency, and UI engineering.
            </p>
          </div>
          <div className="hidden md:block h-px flex-1 bg-slate-200 dark:bg-slate-800 mx-12 mb-4" />
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {projects.map((project, i) => (
            <motion.div key={i} variants={item}>
              <Card className="group h-full flex flex-col border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900/40 glass glow-card overflow-hidden hover:-translate-y-2 transition-all duration-500 rounded-[2rem]">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-4 rounded-2xl bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-500">
                      <Github size={24} />
                    </div>
                    <div className="flex gap-3">
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-indigo-500 transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a 
                        href="#" 
                        className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-indigo-500 transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                  <CardTitle className="text-3xl font-bold tracking-tight mb-3 font-heading group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-500 dark:text-slate-400 leading-relaxed font-light text-lg">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <Badge key={j} variant="secondary" className="px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-none">
                        {tech}
                      </Badge>
                    ))}
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
