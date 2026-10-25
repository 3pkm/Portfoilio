import React from 'react';
import { experienceData } from '../data/experience';

export default function Experience() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-space-xl"
      id="internship-log"
      aria-label="Experience Ledger"
    >
      <div className="max-w-5xl mx-auto">
        {/* Physical Open Notebook Sheet */}
        <div className="relative bg-surface-container-low rounded-xl p-6 sm:p-8 md:p-10 shadow-[6px_6px_0px_0px_#1e2022] border-2 border-primary-container">
          {/* Notebook ring punches */}
          <div className="flex items-center justify-around -mt-12 sm:-mt-14 mb-8 px-space-md" aria-hidden="true">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className="w-4 h-9 bg-primary-container rounded-full shadow-inner flex flex-col items-center justify-between py-1"
              >
                <div className="w-2 h-2 rounded-full bg-surface-variant" />
              </div>
            ))}
          </div>

          {/* Ledger Header */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pb-space-md border-b-2 border-primary-container/20 mb-space-lg">
            <div>
              <span className="font-label-md text-label-md text-on-tertiary-container uppercase tracking-wider font-bold">
                [EXPERIENCE LEDGER • VERIFIED RECORD]
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                Experience &amp; Leadership Milestones
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mt-1">
                Chronological track record across production systems engineering, department leadership, and applied
                research.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="p-space-xs bg-surface-container rounded font-label-md text-label-md text-on-surface-variant font-mono">
                Jan 2025 – Present
              </span>
            </div>
          </div>

          {/* Open Timeline Flow */}
          <div className="space-y-space-lg">
            {experienceData.map((exp, index) => (
              <React.Fragment key={index}>
                {index > 0 && (
                  <div className="border-t-2 border-primary-container/20 my-space-md" aria-hidden="true" />
                )}
                <article className="flex flex-col gap-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <div className="font-label-md text-[11px] font-bold text-secondary uppercase tracking-widest mb-0.5">
                        {exp.milestone}
                      </div>
                      <h3 className="font-headline-md text-xl sm:text-2xl text-primary font-bold">
                        {exp.title}
                      </h3>
                      <div className="font-label-lg text-label-lg text-on-surface-variant">
                        {exp.subtitle}
                      </div>
                    </div>
                    <div className="sm:text-right font-label-md text-xs text-on-surface-variant font-mono">
                      <span className={`inline-block px-2 py-0.5 rounded font-bold ${exp.periodColor}`}>
                        {exp.period}
                      </span>
                      <div className="mt-0.5">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-2.5 text-body-md text-on-surface pl-1 mt-1">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2.5">
                        <span
                          className="text-secondary font-bold text-[18px] leading-tight select-none"
                          aria-hidden="true"
                        >
                          ✦
                        </span>
                        <span>
                          <strong>{pt.bold}</strong> {pt.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    <span className="font-label-md text-xs text-on-surface-variant font-bold mr-1">Stack:</span>
                    {exp.stack.map((item, sIdx) => (
                      <span
                        key={sIdx}
                        className={`px-2 py-0.5 rounded font-label-md text-xs font-mono ${
                          item.highlight ? item.color : 'bg-surface-container text-primary'
                        }`}
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </article>
              </React.Fragment>
            ))}
          </div>

          {/* Ledger Footer Note */}
          <div className="mt-space-lg pt-space-sm border-t-2 border-primary-container/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-on-surface-variant font-annotation text-annotation">
            <span>Official University CGPA: 8.87 / 10 • Department of Computer Science (AI &amp; Data Science)</span>
            <span className="font-mono text-xs">All milestones verified against production pull requests</span>
          </div>
        </div>
      </div>
    </section>
  );
}
