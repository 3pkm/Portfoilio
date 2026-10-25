import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Header({ onOpenCmdPalette }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md wobbly-border shadow-[0_2px_0px_0px_#1e2022]">
      <div className="relative h-20 w-full px-margin-mobile lg:px-margin flex items-center justify-between">
        {/* Left: Logo Branding */}
        <div className="flex items-center">
          <a
            className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold flex items-center gap-space-xs"
            href="#"
          >
            <span className="material-symbols-outlined text-tertiary-container" aria-hidden="true">
              draw
            </span>
            <span>Prakhar.dev</span>
          </a>
        </div>

        {/* Center: Nav links cleanly centered relative to the header bar */}
        <nav
          id="desktop-nav"
          className="hidden md:flex items-center gap-1 lg:gap-2 absolute left-1/2 -translate-x-1/2"
          aria-label="Main Navigation"
        >
          <a
            className="nav-link-slide flex items-center justify-center px-2.5 lg:px-3 py-1.5 lg:py-2 font-label-lg text-label-md lg:text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-150 rounded"
            href="#sketch-desk"
          >
            <span>Projects</span>
          </a>

          <a
            className="nav-link-slide flex items-center justify-center px-2.5 lg:px-3 py-1.5 lg:py-2 font-label-lg text-label-md lg:text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-150 rounded"
            href="#internship-log"
          >
            <span>Experience</span>
          </a>

          <a
            className="nav-link-slide flex items-center justify-center px-2.5 lg:px-3 py-1.5 lg:py-2 font-label-lg text-label-md lg:text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-150 rounded"
            href="projects.html"
          >
            <span>All Builds</span>
          </a>

          <a
            className="nav-link-slide flex items-center justify-center px-2.5 lg:px-3 py-1.5 lg:py-2 font-label-lg text-label-md lg:text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-150 rounded"
            href="#field-notes"
          >
            <span>Field Notes</span>
          </a>

          <a
            className="nav-link-slide flex items-center justify-center px-2.5 lg:px-3 py-1.5 lg:py-2 font-label-lg text-label-md lg:text-label-lg text-on-surface-variant hover:text-primary transition-colors duration-150 rounded"
            href="#contact-inkwell"
          >
            <span>Contact</span>
          </a>
        </nav>

        {/* Right: Action items and mobile toggle */}
        <div className="flex items-center gap-2 lg:gap-space-md">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme Mode"
            className="flex items-center justify-center min-w-[44px] min-h-[44px] p-2 bg-surface-container border border-primary-container text-primary rounded shadow-[1px_1px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>

          {/* Command palette shortcut button */}
          <button
            onClick={() => onOpenCmdPalette(true)}
            aria-label="Open Command Palette (Cmd + K)"
            className="hidden xl:flex items-center gap-1.5 px-3 py-2 min-h-[44px] bg-surface-container border border-primary-container font-label-md text-label-md text-on-surface-variant rounded shadow-[1px_1px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-surface-container-high transition-colors"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              terminal
            </span>
            <span>Cmd K</span>
          </button>

          {/* Quick Resume Download in Header */}
          <a
            href="Prakhar_Jaiswal_Resume.pdf"
            download="Prakhar_Jaiswal_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex px-3 py-2 min-h-[44px] bg-secondary-fixed text-on-secondary-fixed border border-primary-container font-label-md text-label-md rounded shadow-[1px_1px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-secondary-fixed-dim transition-colors items-center gap-1 font-bold active:scale-[0.98]"
          >
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              download
            </span>
            <span>Resume</span>
          </a>

          {/* Hire Me button */}
          <a
            className="hidden sm:inline-flex px-4 py-2 min-h-[44px] bg-surface-container border border-primary-container font-label-lg text-label-lg rounded shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-surface-container-high transition-colors items-center justify-center gap-1.5 text-primary font-bold active:scale-[0.98]"
            href="#contact-inkwell"
          >
            <span className="material-symbols-outlined text-[18px] text-tertiary-container" aria-hidden="true">
              mail
            </span>
            <span>Hire Me</span>
          </a>

          {/* Mobile Hamburger Menu Button (< md) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="md:hidden flex items-center justify-center min-w-[44px] min-h-[44px] p-2 bg-surface-container border-2 border-primary-container text-primary rounded shadow-[2px_2px_0px_0px_var(--shadow-color,#1e2022)] hover:bg-surface-container-high active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="md:hidden bg-surface/98 backdrop-blur-md border-b-2 border-primary-container shadow-[0_6px_0px_0px_#1e2022] px-margin-mobile py-space-md transition-all duration-200"
          aria-label="Mobile Navigation Drawer"
        >
          <div className="relative bg-surface-container-lowest p-4 rounded-xl border-2 border-primary-container shadow-[4px_4px_0px_0px_#1e2022] flex flex-col gap-2">
            <div className="absolute -top-3 left-8 w-20 h-5 bg-tertiary-fixed/90 diary-tape border border-primary/20 pointer-events-none" />

            <div className="flex items-center justify-between pb-2 mb-1 border-b border-surface-container font-label-md text-label-md text-on-surface-variant font-bold">
              <span>// NAVIGATION DIRECTORY</span>
              <span className="px-1.5 py-0.5 bg-secondary-fixed text-on-secondary-fixed rounded text-[10px]">
                MOBILE INDEX
              </span>
            </div>

            <nav className="flex flex-col gap-1.5">
              <a
                href="#sketch-desk"
                onClick={closeMenu}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 bg-primary-container text-on-primary font-bold rounded shadow-[2px_2px_0px_0px_#1e2022] font-label-lg text-label-lg active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-fixed" aria-hidden="true">
                    folder_special
                  </span>
                  <span>[★] Projects</span>
                </span>
                <span className="text-xs text-on-primary/70">Flagships</span>
              </a>
              <a
                href="#internship-log"
                onClick={closeMenu}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    work
                  </span>
                  <span>Experience</span>
                </span>
                <span className="text-xs text-outline">Quantyc AI</span>
              </a>
              <a
                href="projects.html"
                onClick={closeMenu}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 bg-surface-container text-primary font-bold rounded border border-primary-container shadow-[1px_1px_0px_0px_#1e2022] font-label-lg text-label-lg hover:bg-surface-container-high active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    grid_view
                  </span>
                  <span>All Projects</span>
                </span>
                <span className="text-xs text-on-surface-variant">Catalog 6+</span>
              </a>
              <a
                href="#field-notes"
                onClick={closeMenu}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    edit_note
                  </span>
                  <span>Field Notes</span>
                </span>
                <span className="text-xs text-outline">Engineering</span>
              </a>
              <a
                href="#contact-inkwell"
                onClick={closeMenu}
                className="flex items-center justify-between min-h-[44px] px-3.5 py-2 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-lg text-label-lg active:scale-[0.98] transition-all"
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    mail
                  </span>
                  <span>Contact</span>
                </span>
                <span className="text-xs text-outline">Inkwell</span>
              </a>
            </nav>

            <div className="pt-3 mt-1 border-t border-surface-container grid grid-cols-2 gap-2">
              <a
                href="Prakhar_Jaiswal_Resume.pdf"
                download="Prakhar_Jaiswal_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] bg-secondary-fixed text-on-secondary-fixed rounded border border-primary-container shadow-[2px_2px_0px_0px_#1e2022] font-label-md text-label-md font-bold active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  download
                </span>
                <span>Resume (PDF)</span>
              </a>
              <a
                href="#contact-inkwell"
                onClick={closeMenu}
                className="flex items-center justify-center gap-1.5 px-3 py-2 min-h-[44px] bg-tertiary-fixed text-on-tertiary-fixed rounded border border-primary-container shadow-[2px_2px_0px_0px_#1e2022] font-label-md text-label-md font-bold active:scale-[0.98] transition-all"
              >
                <span className="material-symbols-outlined text-[18px] text-tertiary-container" aria-hidden="true">
                  mail
                </span>
                <span>Hire Me</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
