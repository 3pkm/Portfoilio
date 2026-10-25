import React from 'react';
import { fieldNotesData } from '../data/fieldNotes';

export default function FieldNotes() {
  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-space-xl"
      id="field-notes"
      aria-label="Field Notes and Engineering Essays"
    >
      <div className="max-w-5xl mx-auto">
        <div className="mb-space-lg flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-widest font-bold">
              DISPATCHES FROM THE AI LAB
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Field Notes &amp; Engineering Scribbles
            </h2>
          </div>
          <a
            className="font-label-lg text-label-lg text-primary hover:text-secondary flex items-center gap-1 transition-colors font-bold"
            href="projects.html"
          >
            <span>Browse All Project Catalog</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Loose Leaf Lined Journal Container */}
        <div className="relative bg-surface-container-lowest rounded-lg shadow-[5px_5px_0px_0px_#1e2022] overflow-hidden p-space-lg border border-primary-container">
          <div
            className="absolute top-0 bottom-0 left-12 w-0.5 bg-error/20 pointer-events-none hidden sm:block"
            aria-hidden="true"
          />
          <div className="sm:pl-10 flex flex-col gap-space-lg">
            {fieldNotesData.map((note, index) => (
              <article
                key={index}
                className={`group relative flex flex-col gap-space-sm ${
                  index < fieldNotesData.length - 1 ? 'pb-space-md border-b border-surface-container' : ''
                }`}
              >
                <div className="flex items-center gap-space-xs font-label-md text-label-md text-on-surface-variant mb-0.5">
                  <span>{note.entry}</span>
                  <span>•</span>
                  <span>{note.date}</span>
                  <span>•</span>
                  <span className={`${note.tagColor} font-bold`}>{note.readTime}</span>
                </div>

                <h3 className="font-headline-sm text-headline-sm text-primary group-hover:text-secondary transition-colors">
                  {note.title}
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant">
                  {note.description}
                </p>

                {/* Expandable Technical Briefing Drawer */}
                <details className="group/drawer mt-1">
                  <summary className="cursor-pointer inline-flex items-center gap-1.5 font-label-md text-xs font-bold text-secondary hover:text-primary transition-colors py-1 focus-visible:outline-2 focus-visible:outline-secondary">
                    <span className="group-open/drawer:hidden">Read Architectural Takeaways ↓</span>
                    <span className="hidden group-open/drawer:inline">Close Takeaways ↑</span>
                  </summary>
                  <div className="mt-2.5 p-4 rounded bg-surface-container text-body-sm text-on-surface space-y-2 border-l-2 border-secondary font-body-sm">
                    {note.takeaways.map((takeaway, tIdx) => (
                      <p key={tIdx}>
                        <strong>{takeaway.bold}</strong> {takeaway.text}
                      </p>
                    ))}
                  </div>
                </details>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
