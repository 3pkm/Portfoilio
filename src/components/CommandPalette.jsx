import React, { useState, useEffect } from 'react';

const searchItems = [
  {
    title: "Flagship Projects & Visualizers",
    type: "Section",
    icon: "folder_open",
    href: "#sketch-desk"
  },
  {
    title: "Browse All Projects Catalog (9 Builds)",
    type: "Page",
    icon: "grid_view",
    href: "projects.html"
  },
  {
    title: "Tidewatch: Ocean Debris & Metocean Drift",
    type: "GitHub",
    icon: "satellite_alt",
    href: "https://github.com/3pkm/Ocean_Debrie",
    external: true
  },
  {
    title: "GML Root-Cause Mapping & Failure Propagation",
    type: "GitHub",
    icon: "schema",
    href: "https://github.com/3pkm/Root_Cause_Mapping_System",
    external: true
  },
  {
    title: "Blackwood '94: The Crimson Protocol (Escape Room)",
    type: "GitHub",
    icon: "sports_esports",
    href: "https://github.com/3pkm/Pixathon",
    external: true
  },
  {
    title: "Experience Ledger (Quantyc AI & Research)",
    type: "Section",
    icon: "work",
    href: "#internship-log"
  },
  {
    title: "Field Notes & Engineering Dispatches",
    type: "Section",
    icon: "edit_note",
    href: "#field-notes"
  },
  {
    title: "Contact & Inkwell",
    type: "Section",
    icon: "mail",
    href: "#contact-inkwell"
  },
  {
    title: "Download Resume (PDF)",
    type: "Document",
    icon: "download",
    href: "Prakhar_Jaiswal_Resume.pdf",
    download: true,
    isPrimary: true
  }
];

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(!isOpen);
      } else if (e.key === 'Escape' && isOpen) {
        onClose(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = searchItems.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.type.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div
      id="cmd-palette-backdrop"
      className="fixed inset-0 z-[99] bg-primary/40 backdrop-blur-sm flex items-start justify-center pt-24 px-4"
      role="dialog"
      aria-modal="true"
      aria-label="Command Navigation Palette"
      onClick={() => onClose(false)}
    >
      <div
        className="w-full max-w-lg bg-surface-container-lowest rounded-xl border-2 border-primary-container shadow-hard-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-surface-container">
          <span className="material-symbols-outlined text-primary mr-2" aria-hidden="true">
            search
          </span>
          <input
            id="cmd-input"
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to section, projects, resume... (Type to filter)"
            aria-label="Search sections, projects, or resume"
            className="w-full bg-transparent border-none text-primary font-body-md focus:ring-0 focus:outline-none"
          />
          <span className="px-1.5 py-0.5 bg-surface-container rounded text-[11px] font-label-md text-on-surface-variant">
            ESC
          </span>
        </div>

        <div className="max-h-64 overflow-y-auto p-2 flex flex-col gap-1 font-label-md text-label-md" role="listbox">
          {filtered.length === 0 ? (
            <div className="p-4 text-center text-on-surface-variant text-sm">
              No matching sections or links found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.external || item.download ? "_blank" : undefined}
                rel={item.external || item.download ? "noopener noreferrer" : undefined}
                download={item.download ? "Prakhar_Jaiswal_Resume.pdf" : undefined}
                onClick={() => onClose(false)}
                className={`cmd-item flex items-center justify-between p-2 rounded transition-colors ${
                  item.isPrimary
                    ? 'bg-secondary-fixed text-on-secondary-fixed hover:bg-secondary-fixed-dim font-bold'
                    : 'hover:bg-surface-container hover:text-primary text-on-surface'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {item.icon}
                  </span>
                  {item.title}
                </span>
                <span className={item.isPrimary ? 'text-[11px]' : 'text-on-surface-variant text-[11px]'}>
                  {item.type}
                </span>
              </a>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
