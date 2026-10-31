# Adnan Shakil — Software Developer Portfolio

<p align="center">
  <img src="./public/img.png" alt="Adnan Shakil" width="220" style="border-radius: 50%; border: 3px solid #FD853A;" />
</p>

<p align="center">
  <strong>High-performance, accessible personal portfolio website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.</strong>
</p>

<p align="center">
  <a href="https://adnanshakil.is-a.dev"><strong>🌐 Live Demo</strong></a> •
  <a href="https://github.com/adnanshakil001"><strong>GitHub Profile</strong></a> •
  <a href="https://www.linkedin.com/in/adnanshakil001/"><strong>LinkedIn</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15.3-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-14.7-black?style=for-the-badge&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Vercel-Deployed-black?style=for-the-badge&logo=vercel" alt="Vercel" />
</p>

---

## ✨ Features

- **⚡ 60/120fps Hardware-Accelerated Motion:** Designed using Emil Kowalski's motion engineering principles. All scroll and interactive animations exclusively utilize GPU composite properties (`transform`, `opacity`, `clip-path`).
- **🛡️ 0.00 Cumulative Layout Shift (CLS):** Pre-allocated aspect ratios and FLIP layout animations prevent content shifts during state transitions.
- **♿ Full Accessibility & `prefers-reduced-motion`:** Respects user accessibility preferences globally (`animation-duration: 0.01ms`) and within Framer Motion branches with zero physics overhead.
- **🌓 Seamless Dark & Light Mode:** Integrated with the View Transitions API and persistent local storage theming.
- **📱 Touch & Mobile Optimized:** Dedicated single-column responsive timeline, full-bleed touch targets, and sticky-hover suppression for touchscreens.
- **🚀 Featured Project Showcases:** Interactive cards with live links, repository access, and tech stack cascades for **ZoneDrop**, **CampusLens**, and **JanSamadhan**.
- **📋 Interactive Micro-Interactions:** Dual toggle segmented control, spring icon feedback on email copy, and word-by-word clip reveal typography.

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## 📁 Repository Structure

```
my-project/
├── public/                     # Optimized static assets (images, SVGs)
│   ├── Frame 68.svg
│   ├── Frame 77.svg
│   └── img.png
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── favicon.ico
│   │   ├── globals.css         # Theme tokens, scrollbars, reduced motion
│   │   ├── layout.tsx          # Root layout & Theme Toggler
│   │   └── page.tsx            # Main Portfolio Page (Hero, Timeline, Marquee)
│   ├── components/             # Reusable UI Components
│   │   ├── Navbar.tsx          # Responsive navigation & mobile drawer
│   │   ├── Footer.tsx          # Large typography reveal & contact footer
│   │   └── ui/
│   │       ├── ClientOnly.tsx
│   │       ├── ContactSection.tsx
│   │       ├── CustomeText.tsx
│   │       ├── DualButtons.tsx
│   │       ├── OrangeButton.tsx
│   │       ├── ProjectsSection.tsx
│   │       └── TechStackSection.tsx
│   ├── data/
│   │   └── data.ts             # Experience timeline data & skills list
│   ├── lib/
│   │   └── motionTokens.ts      # Centralized easing & spring physics tokens
│   └── registry/magicui/
│       └── animated-theme-toggler.tsx
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js 18+](https://nodejs.org/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adnanshakil001/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🧪 Production Build & Linting

```bash
# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Start production server
npm run start
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
