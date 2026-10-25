import React from 'react';

export default function ProjectImagePlaceholder({ type, title }) {
  // Render an expressive, technical schematic visualizer based on project type
  switch (type) {
    case 'medical':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          {/* Subtle medical scanning grid */}
          <div className="w-full max-w-[200px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                QUAD SCANNER
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">RGB+CIELAB</span>
            </div>
            {/* Visual anatomical indicators */}
            <div className="grid grid-cols-3 gap-1.5 text-center mb-2">
              <div className="p-1 bg-tertiary-fixed/40 rounded border border-tertiary-fixed">
                <span className="block text-[9px] font-bold text-on-tertiary-fixed">EYE</span>
                <span className="text-[10px] font-mono font-extrabold text-primary">0.82</span>
              </div>
              <div className="p-1 bg-secondary-fixed/40 rounded border border-secondary-fixed">
                <span className="block text-[9px] font-bold text-on-secondary-fixed">PALM</span>
                <span className="text-[10px] font-mono font-extrabold text-primary">0.91</span>
              </div>
              <div className="p-1 bg-surface-container rounded border border-primary-container/30">
                <span className="block text-[9px] font-bold text-on-surface-variant">NAIL</span>
                <span className="text-[10px] font-mono font-extrabold text-primary">0.88</span>
              </div>
            </div>
            {/* Confidence waveform */}
            <div className="h-6 w-full flex items-end gap-1 bg-surface-container-low px-1.5 py-1 rounded">
              <div className="w-1/6 bg-secondary h-4/5 rounded-t-sm" />
              <div className="w-1/6 bg-secondary-fixed-dim h-full rounded-t-sm" />
              <div className="w-1/6 bg-secondary h-3/5 rounded-t-sm" />
              <div className="w-1/6 bg-tertiary-fixed h-5/6 rounded-t-sm" />
              <div className="w-1/6 bg-secondary h-full rounded-t-sm" />
              <div className="w-1/6 bg-secondary-fixed-dim h-2/3 rounded-t-sm" />
            </div>
          </div>
        </div>
      );

    case 'rag':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[210px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">hub</span>
                HYBRID PIPELINE
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">&lt;45ms</span>
            </div>
            <div className="space-y-1.5 text-[10px] font-mono">
              <div className="flex items-center justify-between p-1 bg-surface-container rounded border border-primary-container/20">
                <span className="text-on-surface-variant">1. Structural Ingest</span>
                <span className="text-secondary font-bold">14k chunks</span>
              </div>
              <div className="flex items-center justify-between p-1 bg-secondary-fixed/30 rounded border border-secondary-fixed/50">
                <span className="text-primary font-bold">2. Dense + BM25 Vector</span>
                <span className="text-secondary font-bold">Top-K=8</span>
              </div>
              <div className="flex items-center justify-between p-1 bg-tertiary-fixed/30 rounded border border-tertiary-fixed/50">
                <span className="text-on-tertiary-fixed font-bold">3. LLM Synthesis</span>
                <span className="text-on-tertiary-fixed font-bold">0.94 sim</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'vision':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[200px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">center_focus_strong</span>
                YOLOV8-SEG
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">60 FPS</span>
            </div>
            {/* Mock video frame bounding box */}
            <div className="relative h-16 bg-surface-container-low rounded border border-dashed border-primary-container flex items-center justify-center overflow-hidden">
              <div className="absolute top-2 left-3 w-16 h-10 border-2 border-error bg-error/10 rounded-sm flex items-start p-0.5">
                <span className="text-[7px] font-bold bg-error text-on-error px-1 rounded-[2px] leading-tight">
                  DEFECT 98%
                </span>
              </div>
              <div className="absolute bottom-2 right-4 w-12 h-8 border-2 border-secondary bg-secondary/10 rounded-sm flex items-start p-0.5">
                <span className="text-[7px] font-bold bg-secondary text-on-secondary px-1 rounded-[2px] leading-tight">
                  PASS
                </span>
              </div>
              <span className="text-[9px] font-mono text-outline/60 select-none">ASSEMBLY FRAME #4092</span>
            </div>
          </div>
        </div>
      );

    case 'document':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[200px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">shield</span>
                PRESIDIO PII VAULT
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">-50% TOKENS</span>
            </div>
            <div className="space-y-1 text-[9px] font-mono">
              <div className="p-1 bg-surface-container rounded flex items-center justify-between">
                <span>Tax_Report.pdf</span>
                <span className="text-secondary font-bold">BATCH OCR</span>
              </div>
              <div className="p-1 bg-surface-container rounded flex items-center gap-1 text-on-surface-variant">
                <span>NAME:</span>
                <span className="bg-primary text-on-primary px-1 rounded text-[8px] font-bold">[REDACTED_01]</span>
              </div>
              <div className="p-1 bg-surface-container rounded flex items-center gap-1 text-on-surface-variant">
                <span>SSN/PAN:</span>
                <span className="bg-primary text-on-primary px-1 rounded text-[8px] font-bold">•••• •••• ••••</span>
              </div>
            </div>
          </div>
        </div>
      );

    case 'satellite':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[200px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">satellite_alt</span>
                SENTINEL-2 MSI
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">14-CH UNET</span>
            </div>
            <div className="relative h-16 bg-surface-container-low rounded border border-primary-container/30 flex items-center justify-center overflow-hidden">
              {/* Radial drift particle visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-secondary/40 animate-ping" />
                <div className="w-8 h-8 rounded-full border border-tertiary-container/60" />
                <div className="w-3 h-3 rounded-full bg-secondary" />
              </div>
              <span className="absolute bottom-1 right-2 text-[8px] font-mono text-on-surface-variant font-bold">
                500 RK4 PARTICLES
              </span>
            </div>
          </div>
        </div>
      );

    case 'graph':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[200px] bg-surface-container-lowest/90 border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-primary-container/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-secondary font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">schema</span>
                HETEROCONV GNN
              </span>
              <span className="font-mono text-[9px] text-on-surface-variant">NEO4J</span>
            </div>
            <div className="relative h-16 bg-surface-container-low rounded border border-primary-container/30 flex items-center justify-center p-2">
              <svg className="w-full h-full text-primary" viewBox="0 0 160 60" fill="none">
                <line x1="20" y1="30" x2="60" y2="15" stroke="currentColor" strokeWidth="1.5" />
                <line x1="20" y1="30" x2="60" y2="45" stroke="currentColor" strokeWidth="1.5" />
                <line x1="60" y1="15" x2="110" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <line x1="60" y1="45" x2="110" y2="25" stroke="currentColor" strokeWidth="1.5" />
                <line x1="110" y1="25" x2="145" y2="30" stroke="#ba1a1a" strokeWidth="2" strokeDasharray="3,3" />

                <circle cx="20" cy="30" r="7" fill="#406185" />
                <circle cx="60" cy="15" r="6" fill="#fcf9f0" stroke="#1e2022" strokeWidth="2" />
                <circle cx="60" cy="45" r="6" fill="#fcf9f0" stroke="#1e2022" strokeWidth="2" />
                <circle cx="110" cy="25" r="8" fill="#d97736" />
                <circle cx="145" cy="30" r="6" fill="#ba1a1a" />
              </svg>
            </div>
          </div>
        </div>
      );

    case 'game':
      return (
        <div className="relative w-full h-full min-h-[140px] flex items-center justify-center p-2">
          <div className="w-full max-w-[200px] bg-primary text-on-primary border border-primary-container rounded-lg p-2.5 shadow-sm">
            <div className="flex items-center justify-between border-b border-on-primary/20 pb-1 mb-2">
              <span className="font-label-md text-[10px] text-tertiary-fixed font-bold flex items-center gap-1">
                <span className="material-symbols-outlined text-[12px]">sports_esports</span>
                CRIMSON PROTOCOL
              </span>
              <span className="font-mono text-[9px] text-on-primary/70">16 ROOMS</span>
            </div>
            <div className="space-y-1 text-[9px] font-mono text-on-primary/90">
              <div className="flex justify-between items-center bg-surface-container-high/20 px-1.5 py-0.5 rounded">
                <span>[CAMPAIGN 01]</span>
                <span className="text-secondary-fixed">SOLVED</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-high/20 px-1.5 py-0.5 rounded">
                <span>[WEB AUDIO]</span>
                <span className="text-tertiary-fixed">0 MP3s</span>
              </div>
              <div className="flex justify-between items-center bg-surface-container-high/20 px-1.5 py-0.5 rounded">
                <span>[FLASHLIGHT]</span>
                <span>GL SHADER</span>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full flex flex-col items-center justify-center text-on-surface-variant font-mono text-xs p-4">
          <span className="material-symbols-outlined text-[32px] text-secondary mb-1">
            analytics
          </span>
          <span>SYSTEM ARCHITECTURE</span>
        </div>
      );
  }
}
