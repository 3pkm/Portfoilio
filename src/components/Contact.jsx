import React, { useState } from 'react';
import { useToast } from '../context/ToastContext';

export default function Contact() {
  const { showToast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('jas.prakhar@gmail.com');
      showToast('Email copied to clipboard: jas.prakhar@gmail.com 📋');
    } catch {
      showToast('Contact: jas.prakhar@gmail.com ✉️');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      showToast('Message dispatched! Thank you for reaching out. 🚀');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <section
      className="relative w-full px-margin-mobile lg:px-margin py-space-xl mb-space-lg"
      id="contact-inkwell"
      aria-label="Contact Prakhar Jaiswal"
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-surface-container-high rounded-xl p-space-lg sm:p-space-xl shadow-[6px_6px_0px_0px_#1e2022] overflow-hidden border-2 border-primary-container">
          {/* Header */}
          <div className="mb-space-lg max-w-md">
            <span className="font-label-md text-label-md text-on-tertiary-container font-bold uppercase tracking-wider">
              [SEND DISPATCH • LET'S CONNECT]
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Direct Engineering Dispatch
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs">
              Open to <strong>AI/ML &amp; Full-Stack Engineering roles</strong>, research collaborations, and open-source
              systems projects.
            </p>
          </div>

          {/* Quick contact pills */}
          <div className="flex flex-wrap gap-space-xs mb-space-lg font-label-md text-label-md">
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-highest text-primary rounded transition-colors"
              href="https://github.com/3pkm"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                code
              </span>
              <span>github.com/3pkm</span>
            </a>
            <a
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-highest text-primary rounded transition-colors"
              href="https://www.linkedin.com/in/prakhar-jaiswal/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                badge
              </span>
              <span>linkedin.com/in/prakhar-jaiswal</span>
            </a>
            <button
              onClick={copyEmail}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-surface-container hover:bg-surface-container-highest text-primary rounded transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[16px] text-tertiary-container" aria-hidden="true">
                content_copy
              </span>
              <span>jas.prakhar@gmail.com</span>
            </button>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-secondary-fixed text-on-secondary-fixed rounded font-bold">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                location_on
              </span>
              <span>Pune, Maharashtra, India</span>
            </span>
          </div>

          {/* Interactive Form with Layout-Preserving Button Spinner */}
          <form id="contact-form" className="grid grid-cols-1 md:grid-cols-2 gap-space-lg relative z-10" onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between gap-space-md">
              <div>
                <label
                  className="block font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-1"
                  htmlFor="contact-name"
                >
                  Your Name / Organization:
                </label>
                <input
                  id="contact-name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-surface-container-lowest px-space-sm py-2.5 rounded text-primary font-body-md text-body-md shadow-[2px_2px_0px_0px_#1e2022] focus:outline-none focus:bg-surface-bright border border-primary-container"
                  placeholder="e.g. Maya Sharma • Founder / Recruiter"
                  required
                  type="text"
                />
              </div>
              <div>
                <label
                  className="block font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-1"
                  htmlFor="contact-email"
                >
                  Your Email Address:
                </label>
                <input
                  id="contact-email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-surface-container-lowest px-space-sm py-2.5 rounded text-primary font-body-md text-body-md shadow-[2px_2px_0px_0px_#1e2022] focus:outline-none focus:bg-surface-bright border border-primary-container"
                  placeholder="maya@company.com"
                  required
                  type="email"
                />
              </div>
              <div className="hidden md:flex items-center gap-2 font-annotation text-annotation text-on-surface-variant">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                  mark_email_read
                </span>
                <span>Direct message forward to jas.prakhar@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-space-md">
              <div>
                <label
                  className="block font-label-md text-label-md text-on-surface font-bold uppercase tracking-wider mb-1"
                  htmlFor="contact-message"
                >
                  Project / Engineering Brief:
                </label>
                <textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-surface-container-lowest p-space-sm rounded text-primary font-body-md text-body-md shadow-[2px_2px_0px_0px_#1e2022] focus:outline-none focus:bg-surface-bright resize-none border border-primary-container"
                  placeholder="Tell me about the engineering challenges, AI systems, or roles you are working on..."
                  required
                  rows="5"
                />
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-space-xs">
                <span className="font-annotation text-annotation text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    verified
                  </span>
                  <span>Quick response in &lt; 24h</span>
                </span>

                {/* Layout-Preserving Submit Button */}
                <button
                  id="stamp-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                  className="interactive-btn relative inline-flex items-center justify-center min-w-[200px] px-6 py-3.5 bg-primary text-on-primary font-headline-sm text-[17px] font-semibold rounded-lg shadow-[4px_4px_0px_0px_#1e2022] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_#1e2022] active:scale-[0.98] transition-all duration-150 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed"
                >
                  <span
                    className={`flex items-center justify-center gap-2.5 transition-opacity duration-150 ${
                      isSubmitting ? 'opacity-0' : 'opacity-100'
                    }`}
                  >
                    <span className="material-symbols-outlined text-tertiary-fixed text-[20px] shrink-0" aria-hidden="true">
                      send
                    </span>
                    <span className="whitespace-nowrap">Dispatch Message</span>
                  </span>

                  {isSubmitting && (
                    <span className="absolute inset-0 flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-on-primary shrink-0"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      <span className="font-label-md text-label-md font-bold whitespace-nowrap">
                        Dispatching Message...
                      </span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
