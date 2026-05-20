# Yug Agarwal — Portfolio & AI Neural Interface

A premium, highly interactive portfolio and AI-powered assistant engineered with **React**, **Vite**, and **Tailwind CSS**. It serves as an automated hub showcasing competitive programming credentials, dynamic projects, experience logs, and includes a live, context-aware AI consultant featuring a customized Neural Interface.

**🌐 Live Demo:** [yug-agarwal-portfolio.vercel.app](https://yug-agarwal-portfolio.vercel.app/)

---

## 🎨 Design Concept & Visuals

The application is crafted with a high-contrast slate aesthetics paired with sleek glassmorphism lines (`glass`), utilizing deep space backdrops (`dark bg-[#020617]`) and glowing gradient accents:
- **Display Typography**: Structured using clean, modern heading metrics and balanced negative space.
- **Micro-Animations**: Staggered transition arrays and fluid interactive hovers powered by `motion/react`.
- **Responsive Layout**: Designed for absolute desktop-first precision while maintaining a fully fluid mobile-first hierarchy.

---

## 🚀 Key Features

### 💻 1. Core Profile Header & Hero Section
- **Dynamic Stats Engine**: Highlights current Competitive Programming tiers (e.g., Codeforces rating, CodeChef rating, and **1000+ problems solved**).
- **Extensible Architecture**: Code structure contains pre-configured block layouts (e.g., commented project stats blocks) to support rapid content expansions.

### 🤖 2. Custom AI Assistant (Neural Interface v2.0)
- **Deep Contextual Alignment**: Armed with a system model trained on Yug's experience, achievements, and tech stack.
- **Bespoke Visual Framing**: Implements custom-built robot and browser message bubbles with beautiful glowing entry animations, replacing generic placeholders with clear, high-contrast indicators.

### 🗺️ 3. Seamless Universal Navigation
- **Unified Query Routing**: Custom scroll and router links (`ScrollToHash` layout) unify single-view sections on the Home page (`#projects`, `#about`) with stand-alone routes (`/chat`).
- **Interactive Back-to-Top**: Custom scroll handlers bind root navigation so clicking the home tab effortlessly scrolls active users back to the pinnacle without page reload.

---

## 🛠️ Stack & Technologies

- **Frontend Core**: React 18+ & Vite (Ultra-fast HMR and building)
- **Routing Engine**: React Router DOM (With unified hybrid anchor link routing)
- **Motion & Physics**: Framer Motion (via `motion/react` bundle import)
- **Styled Layer**: Tailwind CSS (Tailwind variables combined with custom `@theme` layers)
- **Icons**: Lucide React

---

## ⚙️ Project Setup

### Prerequisites
- Node.js (v18.0 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start local development server:
   ```bash
   npm run dev
   ```

4. Compile and bundle for production:
   ```bash
   npm run build
   ```

---

## 📁 Directory Structure Overview

```txt
├── src/
│   ├── components/      # Modular UI Elements (Hero, Navbar, About, Chat Components)
│   ├── pages/           # High-Level Views (Home, ChatPage)
│   ├── lib/             # Configurations (site.js configurations, custom utils)
│   ├── index.css        # Tailwind directives and customized theme declarations
│   └── App.jsx          # Route handlers & main application wrapper
├── content/             # Asset manifests (projects.json)
├── index.html           # Core application frame
├── package.json         # Package configuration & module manifests
└── vite.config.js       # Vite bundle and alias asset pipeline setup
```

---

## 📬 Connect

- **LinkedIn**: [Yug Agarwal](https://www.linkedin.com/in/yugagarwal005/)
- **GitHub**: [YugAgarwal005](https://github.com/YugAgarwal005/)
- **Competitive Coding Profiles**: [Codeforces](https://codeforces.com/profile/Yug_Agarwal005) | [CodeChef](https://www.codechef.com/users/agarwal_yug) | [LeetCode](https://leetcode.com/u/agarwal_yug/)
- **Email**: [imyug2005@gmail.com](mailto:imyug2005@gmail.com)

---

*Crafted with 🤍 by Yug Agarwal. Logic x Design.*
