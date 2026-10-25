import React from 'react';
import { projectsData } from '../data/projects';
import ProjectSlideshow from './ProjectSlideshow';

export default function Projects() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-space-xl"
      id="sketch-desk"
      aria-label="Flagship Projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 bg-tertiary-fixed text-on-tertiary-fixed font-label-md text-label-md rounded-lg border border-primary-container shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] mb-space-xs">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                palette
              </span>
              <span>ENGINEERING WORKBENCH • 2024 - 2025</span>
            </div>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              The Flagship AI &amp; Software Builds
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mt-space-xs">
              State-of-the-art non-invasive medical diagnostic vision, satellite remote sensing, enterprise multimodal
              RAG, industrial graph neural networks, and interactive systems.
            </p>
          </div>
          <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-secondary" aria-hidden="true" />
            <span>Explore live demos, repos &amp; architectural writeups</span>
          </div>
        </div>

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {projectsData.map((project, index) => {
            return (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between bg-surface-container-lowest border-2 border-primary-container rounded-2xl p-5 sm:p-6 shadow-[5px_5px_0px_0px_var(--shadow-color,#1e2022)] hover:-translate-y-1.5 transition-all duration-200"
              >
                {/* Simulated washi tape strip across top edge per DESIGN.md */}
                <div
                  className={`absolute -top-3 left-10 w-24 h-5 diary-tape z-30 ${
                    index % 2 === 0 ? 'bg-secondary-fixed/90' : 'bg-tertiary-fixed/90'
                  }`}
                  aria-hidden="true"
                />

                {/* TOP HERO PREVIEW BOX WITH CLEAN SLIDESHOW (NO OVERLAYING TEXT) */}
                <div className="relative w-full border-2 border-primary-container bg-surface-container-low rounded-xl p-4 sm:p-5 mb-5 overflow-hidden flex flex-col justify-between min-h-[220px] shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)]">
                  {/* Full-bleed Background 3-Second Crossfade Slideshow */}
                  <ProjectSlideshow
                    images={project.images}
                    alt={`${project.title} Preview`}
                    interval={3000}
                  />

                  {/* Top Corner Badge Row (Keeps 2025, AI-ML/VISION and #01) */}
                  <div className="flex items-center justify-between gap-2 z-10 relative">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 bg-primary text-on-primary font-label-md text-xs font-bold tracking-wider rounded-md shadow-sm">
                        {project.year}
                      </span>
                      <span className="px-2.5 py-1 bg-surface-container-lowest/95 backdrop-blur-sm border border-primary-container text-primary font-label-md text-xs font-bold tracking-wider rounded-md shadow-sm">
                        {project.category}
                      </span>
                    </div>
                    <span className="font-label-md text-xs text-primary font-bold tracking-widest font-mono bg-surface-container-lowest/90 backdrop-blur-sm px-2 py-0.5 rounded border border-primary-container/30 shadow-sm">
                      #{project.num}
                    </span>
                  </div>

                  {/* Middle area is clean: The full slideshow image is completely unobscured! */}
                  <div className="flex-1 min-h-[80px]" />

                  {/* Bottom Technical Meta Bar (Keeps 94.2% ACCURACY • RESNET50... & PALMS CONJUNCTIVA NAIL BEDS) */}
                  <div className="pt-2 flex flex-wrap items-center justify-between gap-1.5 text-[11px] font-label-md text-primary font-mono z-10 relative">
                    <span className="font-bold bg-surface-container-lowest/90 backdrop-blur-sm px-2.5 py-1 rounded border border-primary-container/30 shadow-xs">
                      {project.previewMetrics}
                    </span>
                    <div className="flex items-center gap-1">
                      {project.previewTags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="bg-surface-container-lowest/95 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-primary font-bold border border-primary-container/30 shadow-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* MIDDLE CONTENT SECTION */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Title and Details Badge */}
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <h3 className="font-headline-sm text-xl sm:text-2xl text-primary font-bold tracking-tight uppercase group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.liveUrl}
                        target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="interactive-btn shrink-0 px-3 py-1 bg-primary text-on-primary font-label-md text-xs font-bold tracking-wider rounded-lg border border-primary-container shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-primary-container transition-colors"
                      >
                        DETAILS
                      </a>
                    </div>

                    {/* Primary Feature Tags (Outline Boxes) */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.primaryTags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 bg-surface-container-lowest border border-primary-container font-label-md text-xs font-bold tracking-wider text-primary rounded-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description Paragraph (Karla body-sm) */}
                    <p className="font-body-sm text-body-sm text-on-surface-variant line-clamp-3 mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Solid Technology Chips */}
                  <div className="flex flex-wrap items-center gap-2 mb-5">
                    {project.stackTags.map((stack, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 font-label-md text-xs font-bold tracking-wider rounded-md border border-primary-container ${
                          idx === 0
                            ? 'bg-secondary text-on-secondary'
                            : idx === 1
                            ? 'bg-secondary-fixed text-on-secondary-fixed'
                            : 'bg-primary text-on-primary'
                        }`}
                      >
                        {stack}
                      </span>
                    ))}
                    {project.extraCount > 0 && (
                      <span className="px-2 py-1 bg-surface-container border border-primary-container font-label-md text-xs font-bold text-primary rounded-md">
                        +{project.extraCount}
                      </span>
                    )}
                  </div>
                </div>

                {/* BOTTOM DIVIDER & BUTTONS */}
                <div className="pt-4 border-t-2 border-primary-container/20">
                  <div className="grid grid-cols-2 gap-3">
                    {/* LIVE / PREVIEW BUTTON */}
                    <a
                      href={project.liveUrl}
                      target={project.liveUrl.startsWith('http') ? '_blank' : undefined}
                      rel={project.liveUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="interactive-btn flex items-center justify-center gap-2 py-2.5 px-3 bg-[#d1e4ff] hover:bg-[#82a1c6] text-[#1e2022] font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border-2 border-primary-container shadow-[3px_3px_0px_0px_var(--shadow-color,#1e2022)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color,#1e2022)] active:scale-[0.98] transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px] text-[#1e2022]" aria-hidden="true">
                        visibility
                      </span>
                      <span>LIVE</span>
                    </a>

                    {/* SOURCE CODE BUTTON */}
                    <a
                      href={project.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-btn flex items-center justify-center gap-2 py-2.5 px-3 bg-surface-container text-primary font-label-md text-xs sm:text-sm font-bold uppercase tracking-wider rounded-xl border-2 border-primary-container shadow-[3px_3px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-surface-container-high hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[1px_1px_0px_0px_var(--shadow-color,#1e2022)] active:scale-[0.98] transition-all"
                    >
                      <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                        code
                      </span>
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* View More Projects CTA Button */}
        <div className="mt-space-xl flex flex-col items-center justify-center text-center">
          <div className="p-1 rounded-2xl bg-surface-container shadow-[4px_4px_0px_0px_var(--shadow-color,#1e2022)] hover:shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all">
            <a
              href="projects.html"
              className="interactive-btn inline-flex items-center gap-3 px-8 py-4 bg-primary text-on-primary font-headline-sm text-headline-sm rounded-xl border border-primary-container active:scale-[0.98] transition-all"
            >
              <span className="material-symbols-outlined text-tertiary-fixed text-[24px]" aria-hidden="true">
                grid_view
              </span>
              <span>View Complete Projects Catalog (All 9 Builds)</span>
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                arrow_forward
              </span>
            </a>
          </div>
          <span className="mt-2 text-on-surface-variant font-annotation text-annotation">
            Explore satellite remote sensing (Tidewatch), GML root-cause mapping, procedural horror engines, and deep
            learning setups on the dedicated project board →
          </span>
        </div>
      </div>
    </section>
  );
}
