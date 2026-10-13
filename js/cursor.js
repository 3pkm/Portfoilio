/**
 * Prakhar Jaiswal Portfolio - Interactive Custom Cursor
 * Solid black cursor with soft rounded edges, expanding on interactive elements.
 * Optimized with requestAnimationFrame for 60/120 FPS smoothness without layout thrash.
 */

(function () {
  'use strict';

  // Do not run on touch / mobile devices or if user prefers reduced motion
  if (window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  function initCursor() {
    let cursorDot = document.getElementById('custom-cursor-dot');
    if (!cursorDot) {
      cursorDot = document.createElement('div');
      cursorDot.id = 'custom-cursor-dot';
      cursorDot.className = 'custom-cursor-dot cursor-hidden';
      cursorDot.setAttribute('aria-hidden', 'true');
      document.body.appendChild(cursorDot);
    }

    let isVisible = false;
    let isHovered = false;
    let mouseX = 0;
    let mouseY = 0;
    let rafScheduled = false;

    function renderCursor() {
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      rafScheduled = false;
    }

    // Hardware-accelerated position updates throttled via requestAnimationFrame
    function onPointerMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorDot.classList.remove('cursor-hidden');
      }
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(renderCursor);
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Handle cursor entering and leaving window
    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorDot.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursorDot.classList.remove('cursor-hidden');
    });

    // Micro-press click feedback
    window.addEventListener('mousedown', () => {
      cursorDot.classList.add('cursor-clicked');
    }, { passive: true });

    window.addEventListener('mouseup', () => {
      cursorDot.classList.remove('cursor-clicked');
    }, { passive: true });

    // Interactive element detection via high-performance delegation
    const INTERACTIVE_SELECTOR = 'a, button, input, textarea, select, [role="button"], .interactive-btn, .interactive-card, label, summary, [onclick], [tabindex="0"]';

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(INTERACTIVE_SELECTOR);
      if (target) {
        if (!isHovered) {
          isHovered = true;
          cursorDot.classList.add('cursor-hover');
        }
      } else if (isHovered) {
        isHovered = false;
        cursorDot.classList.remove('cursor-hover');
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCursor);
  } else {
    initCursor();
  }
})();
