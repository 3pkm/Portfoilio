import React from 'react';
import { useToast } from '../context/ToastContext';

export default function Hero() {
  const { showToast } = useToast();

  return (
    <section className="relative w-full px-margin-mobile lg:px-margin py-space-xl overflow-hidden">
      {/* Ambient floating pencil sketch marks (SVG Background elements) */}
      <div className="absolute -top-12 -left-8 w-64 h-64 pointer-events-none opacity-20">
        <svg
          className="w-full h-full text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          viewBox="0 0 200 200"
        >
          <path d="M10,80 Q50,10 90,80 T170,80 T250,80" strokeDasharray="4,6" />
          <circle cx="90" cy="80" r="45" strokeDasharray="6,4" />
          <path d="M30,140 C70,110 130,170 170,130" />
        </svg>
      </div>
      <div className="absolute top-1/3 -right-12 w-80 h-80 pointer-events-none opacity-25">
        <svg
          className="w-full h-full text-secondary"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          viewBox="0 0 240 240"
        >
          <path d="M20,40 C60,10 140,70 200,30" />
          <ellipse
            cx="120"
            cy="120"
            rx="70"
            ry="40"
            strokeDasharray="5,4"
            transform="rotate(-15 120 120)"
          />
          <path d="M40,180 Q100,220 180,170" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Animated Student / Engineer Badge */}
        <div className="relative group cursor-pointer mb-2">
          <div className="inline-flex items-center gap-space-xs px-space-md py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full font-label-md text-label-md font-bold shadow-[2px_2px_0px_0px_#1e2022] rotate-[-1deg] border border-primary-container">
            <span className="material-symbols-outlined text-[16px] text-primary">psychology</span>
            <span>B.Tech CSE (AI &amp; Data Science) • MIT-WPU Pune (CGPA 8.87) • AI-ML Intern Alum</span>
          </div>
        </div>

        {/* Expressive Organic Headline with highlighter effects */}
        <div className="relative max-w-4xl mt-space-sm mb-space-md">
          <h1 className="font-display text-display text-primary tracking-tight leading-tight">
            Building intelligent web systems and scalable{' '}
            <span className="relative inline-block mx-1">
              <span className="relative z-10 px-2">AI/ML pipelines.</span>
              <span className="absolute inset-x-0 bottom-1.5 h-6 bg-secondary-fixed-dim/45 -rotate-1 rounded-sm -z-0" />
            </span>{' '}
            <span className="relative inline-block text-tertiary-container">
              Delightful craft.
              <svg
                className="absolute -bottom-3 left-0 w-full h-4 text-tertiary-container overflow-visible"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="3"
                viewBox="0 0 160 14"
              >
                <path d="M3,8 Q20,1 40,8 T80,8 T120,8 T157,7" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Hero Subtitle & Field Marginalia */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs mb-space-lg">
          Hi, I'm <strong className="text-primary font-bold">Prakhar Jaiswal</strong>. Passionate about distributed
          systems, computer vision, multimodal RAG pipelines, and interactive visualizers. Formerly at{' '}
          <strong className="text-secondary font-bold">Quantyc AI</strong>.
        </p>

        {/* Interactive Call to Action cluster */}
        <div className="flex flex-col items-center justify-center gap-3 relative">
          <div className="flex flex-wrap items-center justify-center gap-space-md">
            {/* Primary Action: Resume / CV Download */}
            <a
              className="interactive-btn relative group inline-flex items-center gap-2 px-space-lg py-3.5 bg-primary text-on-primary font-headline-sm text-base sm:text-headline-sm rounded-lg shadow-[4px_4px_0px_0px_#1e2022] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1e2022] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all duration-150 font-bold"
              href="Prakhar_Jaiswal_Resume.pdf"
              download="Prakhar_Jaiswal_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => showToast('Resume download started! 📄')}
            >
              <span className="material-symbols-outlined text-[22px] text-tertiary-fixed" aria-hidden="true">
                download
              </span>
              <span>Download Resume • PDF</span>
            </a>

            {/* Secondary Action: Explore Flagship Projects */}
            <a
              className="interactive-btn inline-flex items-center gap-2 px-space-md py-3.5 bg-primary-container text-on-primary font-headline-sm text-base sm:text-headline-sm rounded-lg shadow-[3px_3px_0px_0px_#1e2022] hover:translate-x-0.5 hover:translate-y-0.5 transition-all font-bold"
              href="#sketch-desk"
            >
              <span className="material-symbols-outlined text-[20px] text-tertiary-fixed" aria-hidden="true">
                folder_open
              </span>
              <span>Explore Flagship Projects (9 Builds)</span>
            </a>
          </div>

          {/* Understated Sub-Actions & Profile Anchors */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-label-md text-on-surface-variant font-mono mt-1">
            <a
              href="https://github.com/3pkm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
            >
              <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                code
              </span>
              <span>GitHub (@3pkm) ↗</span>
            </a>
            <span className="text-outline/40 hidden sm:inline">•</span>
            <a
              href="https://www.linkedin.com/in/prakhar-jaiswal/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
            >
              <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                badge
              </span>
              <span>LinkedIn (prakhar-jaiswal) ↗</span>
            </a>
            <span className="text-outline/40 hidden sm:inline">•</span>
            <a
              href="#sketch-desk"
              className="inline-flex items-center gap-1 hover:text-primary transition-colors underline decoration-dotted underline-offset-4"
            >
              <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                folder_open
              </span>
              <span>Flagships (4) ↓</span>
            </a>
          </div>
        </div>

        {/* Floating Polaroid / Sticky Note Desk Preview (Profile Data) */}
        <div className="mt-space-xl w-full grid grid-cols-1 md:grid-cols-3 gap-space-lg items-end text-left pt-space-md">
          {/* Post-It Memo 1: Academic Profile */}
          <div className="relative p-space-md bg-surface-container-lowest rounded shadow-[4px_4px_0px_0px_#1e2022] -rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5 bg-tertiary-fixed/80 diary-tape" />
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-md text-label-md text-on-tertiary-container font-bold">
                [NOTE 01 • ACADEMICS]
              </span>
              <span className="font-label-md text-label-md text-outline tabular-nums">CGPA: 8.87 / 10</span>
            </div>
            <p className="font-body-md text-body-md text-on-surface">
              "B.Tech CSE (AI &amp; Data Science) @ MIT-WPU, Pune • Expected 2028 • Diploma in CSE (AI &amp; DS) 2022–2025."
            </p>
            <div className="mt-space-sm flex items-center gap-1 text-on-surface-variant font-annotation text-annotation">
              <span className="material-symbols-outlined text-[16px]">school</span>
              <span>Computer Vision, NLP, Multimodal RAG, Distributed Systems</span>
            </div>
          </div>

          {/* Center Stamp Memo 2: Internship Shipped */}
          <div className="relative p-space-md bg-secondary-fixed text-on-secondary-fixed rounded shadow-[4px_4px_0px_0px_#1e2022] rotate-1 hover:rotate-0 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute -top-3 right-6 w-16 h-5 bg-surface-variant/80 diary-tape" />
            <div className="flex items-center gap-2 mb-space-xs">
              <span className="material-symbols-outlined text-[20px]">verified</span>
              <span className="font-headline-sm text-headline-sm">Quantyc AI Intern</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-secondary-fixed-variant">
              Shipped enterprise document extraction &amp; Claude 3.7 Sonnet pipelines on AWS/Azure, cutting LLM token costs
              by <strong className="tabular-nums">50%</strong> via Anthropic Batch API.
            </p>
          </div>

          {/* Post-It Memo 3: Core Stats */}
          <div className="relative p-space-md bg-surface-container-low rounded shadow-[4px_4px_0px_0px_#1e2022] rotate-2 hover:rotate-0 hover:-translate-y-2 transition-all duration-200">
            <div className="absolute -top-3 left-6 w-16 h-5 bg-tertiary-fixed-dim/70 diary-tape" />
            <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider mb-space-xs font-bold">
              [NOTE 03 • METRICS]
            </div>
            <div className="grid grid-cols-3 gap-space-xs font-label-lg text-label-lg text-primary">
              <div>
                <span className="font-headline-md text-headline-md block tabular-nums">1</span>
                <span className="font-label-md text-label-md text-on-surface-variant">AI-ML Intern</span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md block tabular-nums">8+</span>
                <span className="font-label-md text-label-md text-on-surface-variant">AI &amp; Web Builds</span>
              </div>
              <div>
                <span className="font-headline-md text-headline-md block tabular-nums">50%</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Cost Cut</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
