import React from 'react';

export default function Footer() {
  return (
    <footer className="relative w-full bg-surface-container-low border-t-2 border-primary-container py-space-xl overflow-hidden">
      <div className="absolute -top-3 left-12 w-24 h-6 bg-tertiary-fixed opacity-75 diary-tape border border-primary/20" />
      <div className="absolute -top-3 right-24 w-28 h-6 bg-secondary-fixed opacity-75 diary-tape border border-primary/20" />
      <div className="absolute -bottom-8 -right-8 w-44 h-44 rounded-full border-4 border-tertiary-fixed-dim/40 pointer-events-none rotate-12" />
      <div className="absolute -bottom-10 -right-6 w-36 h-36 rounded-full border-2 border-tertiary-fixed-dim/30 pointer-events-none -rotate-6" />

      <div className="w-full px-margin-mobile lg:px-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
          <div className="md:col-span-5 flex flex-col gap-space-xs">
            <div className="font-headline-md text-headline-md text-primary">
              Prakhar Jaiswal • Full Stack &amp; AI-ML Portfolio
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
              Crafted with mechanical keystrokes, PyTorch tensors, and late-night campus compile runs. All flagship
              projects documented with clean architecture writeups.
            </p>
          </div>
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold tracking-widest">
              Quick Navigation
            </span>
            <div className="flex flex-col gap-space-xs font-label-lg text-label-lg">
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors hover:translate-x-1 duration-150 inline-block"
                href="#sketch-desk"
              >
                → Flagship Projects
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors hover:translate-x-1 duration-150 inline-block font-bold text-secondary"
                href="projects.html"
              >
                → All Projects Catalog (6+)
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors hover:translate-x-1 duration-150 inline-block"
                href="#internship-log"
              >
                → Quantyc AI &amp; Experience
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors hover:translate-x-1 duration-150 inline-block"
                href="#field-notes"
              >
                → Field Notes &amp; Dispatches
              </a>
              <a
                className="text-on-surface-variant hover:text-on-surface transition-colors hover:translate-x-1 duration-150 inline-block"
                href="#contact-inkwell"
              >
                → Direct Engineering Dispatch
              </a>
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className="font-label-md text-label-md uppercase text-on-surface-variant font-bold tracking-widest">
              Campus Station
            </span>
            <p className="font-label-md text-label-md text-on-surface-variant">
              MIT World Peace University (MIT-WPU)<br />
              Department of CSE (AI &amp; Data Science)<br />
              Pune, Maharashtra • Class of 2028
            </p>
          </div>
        </div>

        <div className="pt-space-md border-t border-outline-variant flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <span className="font-label-md text-label-md text-on-surface-variant">
            Handmade with care • Prakhar Jaiswal © 2025
          </span>
          <span className="font-label-md text-label-md text-on-surface-variant bg-surface-container px-space-xs py-0.5 border border-primary-container rounded shadow-[1px_1px_0px_0px_#1e2022]">
            Page 01 of ∞
          </span>
        </div>
      </div>
    </footer>
  );
}
