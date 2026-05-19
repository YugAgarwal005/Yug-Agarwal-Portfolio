/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/src/components/Navbar";
import Home from "@/src/pages/Home";
import ChatPage from "@/src/pages/ChatPage";
import ChatWidget from "@/src/components/chat/ChatWidget";

export default function App() {
  return (
    <BrowserRouter>
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
        <footer className="py-20 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-neutral-900/10 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <span className="text-xl font-bold tracking-tighter">Yug Agarwal<span className="text-neutral-400">.</span></span>
              <p className="text-sm text-neutral-500 dark:text-neutral-400">Sophomore @ IIIT Bhubaneswar | Competitive Programmer</p>
            </div>
            <div className="flex items-center gap-8">
              <a href="#projects" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
              <a href="#about" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
              <a href="/chat" className="text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors">AI Assistant</a>
            </div>
            <div className="text-sm text-neutral-400 dark:text-neutral-600">
              © {new Date().getFullYear()} Build with Craft.
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
