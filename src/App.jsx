/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { Github, Linkedin, Mail, Code2, Terminal, ExternalLink, Globe } from "lucide-react";
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
      <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-slate-50 font-sans selection:bg-indigo-100 dark:selection:bg-indigo-500/30">
        {/* Decorative Background Elements */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-emerald-500/5 dark:bg-emerald-500/10 rounded-full blur-[80px]" />
          <div className="absolute inset-0 bg-grid-black dark:bg-grid-white opacity-20" />
        </div>
        
        <Navbar />
        <main className="relative pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/chat" element={<ChatPage />} />
          </Routes>
        </main>
        <ChatWidget />
        <footer className="pt-24 pb-12 border-t border-slate-100 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/20 backdrop-blur-xl">
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
                © {new Date().getFullYear()} Yug Agarwal. Logic x Design.
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
