/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Code2, Terminal, ExternalLink, Globe } from "lucide-react";
import { motion } from "motion/react";
import { siteConfig } from "@/src/lib/site";
import Navbar from "@/src/components/Navbar";
import Home from "@/src/pages/Home";
import ChatPage from "@/src/pages/ChatPage";
import ChatWidget from "@/src/components/chat/ChatWidget";

// Simple, elegant component to handle smooth hash and top scrolling across routing changes
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 120);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <div className="min-h-screen text-slate-100 font-sans selection:bg-orange-500/30 selection:text-white relative">
        {/* Decorative Velvet Fluid Wave Background inspired by premium iOS/MacOS abstract visuals */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-[#020205]">
          {/* Main Cosmic Deep Void Base */}
          <div className="absolute inset-0 bg-[#020205]" />

          {/* Ambient Global Luminous Radial Glows */}
          <div className="absolute top-[5%] left-[-10%] w-[80%] h-[1000px] bg-[radial-gradient(circle,rgba(244,63,94,0.14)_0%,rgba(139,92,246,0.04)_50%,transparent_100%)] rounded-full blur-[140px]" />
          <div className="absolute top-[40%] right-[-10%] w-[80%] h-[1000px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,rgba(79,70,229,0.03)_60%,transparent_100%)] rounded-full blur-[140px]" />
          <div className="absolute bottom-[5%] left-[-5%] w-[80%] h-[1200px] bg-[radial-gradient(circle,rgba(168,85,247,0.13)_0%,rgba(236,72,153,0.03)_50%,transparent_100%)] rounded-full blur-[140px]" />

          {/* Shared SVG Filters and Gradients */}
          <svg className="absolute w-0 h-0" xmlns="http://www.w3.org/2000/svg">
            <defs>
              {/* Outer Neon Glow Filters - optimized for high visibility and rich aura */}
              <filter id="neon-glow-pink" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="15" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="neon-glow-indigo" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="18" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="neon-glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur1" />
                <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur2" />
                <feMerge>
                  <feMergeNode in="blur2" />
                  <feMergeNode in="blur1" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Shadow for 3D Layering Effect */}
              <filter id="layer-shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="25" stdDeviation="30" floodColor="#000000" floodOpacity="0.95" />
              </filter>

              {/* Glowing Outline Gradients */}
              <linearGradient id="pink-magenta-grad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#ff2d55" />
                <stop offset="50%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#d946ef" />
              </linearGradient>
              <linearGradient id="indigo-purple-grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#a855f7" />
              </linearGradient>
              <linearGradient id="cyan-blue-grad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#6366f1" />
              </linearGradient>

              {/* Rich Velvety Body Fills */}
              <linearGradient id="dark-velvet-pink" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#2e0533" stopOpacity="0.94" />
                <stop offset="50%" stopColor="#120216" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#030006" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="dark-velvet-indigo" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0c0e35" stopOpacity="0.92" />
                <stop offset="60%" stopColor="#030415" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#010106" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="dark-velvet-cyan" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#021a30" stopOpacity="0.91" />
                <stop offset="50%" stopColor="#010714" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#000105" stopOpacity="1" />
              </linearGradient>
            </defs>
          </svg>

          {/* BACKGROUND LAYER 1: Top / Hero Section (Scrolls up naturally) */}
          <div className="absolute top-0 left-0 w-full h-[950px] overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-95" preserveAspectRatio="none" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 1: Left Vertical Swoop */}
              <motion.g
                animate={{
                  x: [-15, 15, -15],
                  y: [-20, 10, -20],
                  rotate: [-0.5, 0.5, -0.5],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                filter="url(#layer-shadow)"
              >
                <path d="M -150 -100 C 400 150, 350 550, -150 950 L -150 -100 Z" fill="url(#dark-velvet-pink)" />
                <path d="M -150 -100 C 400 150, 350 550, -150 950" stroke="url(#pink-magenta-grad)" strokeWidth="6.5" strokeLinecap="round" filter="url(#neon-glow-pink)" />
              </motion.g>

              {/* Wave 2: Right/Center S-Curve */}
              <motion.g
                animate={{
                  x: [20, -20, 20],
                  y: [15, -15, 15],
                  rotate: [0.8, -0.8, 0.8],
                }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                filter="url(#layer-shadow)"
              >
                <path d="M 550 -150 C 1100 250, 800 600, 1600 1000 L 1600 -150 Z" fill="url(#dark-velvet-indigo)" />
                <path d="M 550 -150 C 1100 250, 800 600, 1600 1000" stroke="url(#indigo-purple-grad)" strokeWidth="7" strokeLinecap="round" filter="url(#neon-glow-indigo)" />
              </motion.g>
            </svg>
          </div>

          {/* BACKGROUND LAYER 2: Middle / Projects Section (Scrolls naturally) */}
          <div className="absolute top-[900px] left-0 w-full h-[850px] overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-95" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 3: Horizontal Rolling Wave with cyan neon boundary */}
              <motion.g
                animate={{
                  x: [-20, 20, -20],
                  y: [15, -15, 15],
                  rotate: [-0.6, 0.6, -0.6],
                }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                filter="url(#layer-shadow)"
              >
                <path d="M -100 450 C 400 250, 1000 650, 1550 450 L 1550 900 L -100 900 Z" fill="url(#dark-velvet-cyan)" />
                <path d="M -100 450 C 400 250, 1000 650, 1550 450" stroke="url(#cyan-blue-grad)" strokeWidth="7.5" strokeLinecap="round" filter="url(#neon-glow-cyan)" />
              </motion.g>
            </svg>
          </div>

          {/* BACKGROUND LAYER 3: Bottom / About & Footer Section (Scrolls naturally) */}
          <div className="absolute bottom-0 left-0 w-full h-[1100px] overflow-hidden pointer-events-none">
            <svg className="absolute inset-0 w-full h-full opacity-95" preserveAspectRatio="none" viewBox="0 0 1440 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Wave 4: Sweeping curves rising high from bottom left to bottom right */}
              <motion.g
                animate={{
                  x: [-15, 15, -15],
                  y: [20, -10, 20],
                  rotate: [-0.8, 0.8, -0.8],
                }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                filter="url(#layer-shadow)"
              >
                <path d="M -100 800 C 450 450, 950 400, 1550 800 L 1550 1100 L -100 1100 Z" fill="url(#dark-velvet-pink)" />
                <path d="M -100 800 C 450 450, 950 400, 1550 800" stroke="url(#pink-magenta-grad)" strokeWidth="7" strokeLinecap="round" filter="url(#neon-glow-pink)" />
              </motion.g>
            </svg>
          </div>

          {/* Global Glassmorphic Blur Overlay to make the background velvety, smooth, and consistent like the footer blur */}
          <div 
            className="absolute inset-0 bg-black/20 pointer-events-none" 
            style={{ backdropFilter: 'blur(80px)', WebkitBackdropFilter: 'blur(80px)' }}
          />

          {/* Noise/Grain Overlay for realistic tactile texture */}
          <div className="absolute inset-0 opacity-[0.025] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        </div>
        
        <Navbar />
        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <ChatWidget />
        <footer className="pt-24 pb-12 border-t border-white/5 bg-black/45 backdrop-blur-2xl">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16">
              {/* Branding & Mission */}
              <div className="lg:col-span-5 space-y-8">
                <div className="space-y-4">
                  <span className="text-3xl font-black tracking-tighter font-heading">
                    Yug Agarwal<span className="text-indigo-500">.</span>
                  </span>
                  <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed max-w-sm">
                    {siteConfig.role}
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-4">
                  <a href={siteConfig.links.github} target="_blank" rel="noreferrer" className="size-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-500 hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10" title="Github">
                    <Github size={20} />
                  </a>
                  <a href={siteConfig.links.linkedin} target="_blank" rel="noreferrer" className="size-12 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-indigo-500 hover:border-indigo-500 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-indigo-500/10" title="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>

              {/* Links Grid */}
              <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Navigation</h4>
                  <ul className="space-y-4">
                    <li><Link to="/#projects" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors">Projects</Link></li>
                    <li><Link to="/#about" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors">Experience</Link></li>
                    <li><Link to="/chat" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors">AI Neural Interface</Link></li>
                  </ul>
                </div>
                
                <div className="space-y-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Profiles</h4>
                  <ul className="space-y-4">
                    <li><a href={siteConfig.links.codeforces} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors flex items-center gap-2"><Code2 size={14} /> Codeforces</a></li>
                    <li><a href={siteConfig.links.codechef} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors flex items-center gap-2"><Globe size={14} /> CodeChef</a></li>
                    <li><a href={siteConfig.links.leetcode} target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-500 hover:text-indigo-500 transition-colors flex items-center gap-2"><Terminal size={14} /> LeetCode</a></li>
                  </ul>
                </div>


              </div>
            </div>

            <div className="pt-12 border-t border-slate-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-xs font-black uppercase tracking-widest text-slate-400">
                Yug Agarwal. Logic x Design.
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                  <div className="size-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available for collaborations
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
