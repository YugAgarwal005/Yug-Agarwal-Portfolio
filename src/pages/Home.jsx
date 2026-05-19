import { motion } from "motion/react";
import Hero from "@/src/components/Hero";
import About from "@/src/components/About";
import Projects from "@/src/components/Projects";

export default function Home() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-24 py-12"
    >
      <Hero />
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
    </motion.div>
  );
}
