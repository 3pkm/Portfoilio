/**
 * Prakhar Jaiswal Portfolio - Interactive Custom Cursor
 * Solid black dot when normal, expanding into a larger tinted circle lens on clickable links.
 * Hardware-accelerated with requestAnimationFrame for 60/120 FPS smoothness without layout thrash.
 */

(function () {
  'use strict';

  // Do not run on touch / mobile devices or if user prefers reduced motion
  if (
    window.matchMedia('(pointer: coarse)').matches ||
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ) {
    return;
  }

  // Signal custom cursor activation to suppress native OS cursor on fine pointers
  document.documentElement.classList.add('has-custom-cursor');

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
    let isClicked = false;
    let mouseX = -100;
    let mouseY = -100;
    let rafScheduled = false;

    function renderCursor() {
      const scale = isClicked ? (isHovered ? 'scale(0.88)' : 'scale(0.8)') : '';
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%) ${scale}`.trim();
      rafScheduled = false;
    }

    function scheduleRender() {
      if (!rafScheduled) {
        rafScheduled = true;
        requestAnimationFrame(renderCursor);
      }
    }

    // Hardware-accelerated position updates throttled via requestAnimationFrame
    function onPointerMove(e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        cursorDot.classList.remove('cursor-hidden');
      }
      scheduleRender();
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    // Handle cursor entering and leaving viewport
    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorDot.classList.add('cursor-hidden');
    });

    document.addEventListener('mouseenter', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isVisible = true;
      cursorDot.classList.remove('cursor-hidden');
      scheduleRender();
    });

    // Tactile micro-press feedback
    window.addEventListener('pointerdown', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isClicked = true;
      cursorDot.classList.add('cursor-clicked');
      if (!isVisible) {
        isVisible = true;
        cursorDot.classList.remove('cursor-hidden');
      }
      scheduleRender();
    }, { passive: true });

    window.addEventListener('pointerup', () => {
      isClicked = false;
      cursorDot.classList.remove('cursor-clicked');
      scheduleRender();
    }, { passive: true });

    // Clickable interactive element detection via event delegation
    const CLICKABLE_SELECTOR = [
      'a',
      'button',
      '[role="button"]',
      '.interactive-btn',
      '.interactive-card',
      '.filter-btn',
      'summary',
      '[onclick]',
      '.cursor-pointer',
      'input[type="submit"]',
      'input[type="button"]',
      'input[type="reset"]',
      'input[type="checkbox"]',
      'input[type="radio"]',
      'input[type="range"]',
      'input[type="file"]',
      'select',
      '[tabindex="0"]'
    ].join(', ');

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest(CLICKABLE_SELECTOR);
      const isClickable = target && !target.disabled && target.getAttribute('aria-disabled') !== 'true';

      if (isClickable) {
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
