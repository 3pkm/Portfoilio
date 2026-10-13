/**
 * Prakhar Jaiswal Portfolio - Theme & Visual System Manager
 * Handles Light/Dark mode state, localStorage persistence, FOUC sync,
 * round tactile bubble toggle, and rotational morph transition.
 */

(function () {
  'use strict';

  const THEME_KEY = 'portfolio-theme';

  function getStoredTheme() {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch (e) {
      return null;
    }
  }

  function getPreferredTheme() {
    const stored = getStoredTheme();
    if (stored === 'dark' || stored === 'light') {
      return stored;
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function updateMetaThemeColor(isDark) {
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute('content', isDark ? '#121518' : '#fcf9f0');
    }
  }

  function applyTheme(theme, persist = true) {
    const isDark = theme === 'dark';

    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    updateMetaThemeColor(isDark);

    if (persist) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
    }

    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      const nextLabel = isDark ? 'Switch to Light Mode (Press T)' : 'Switch to Dark Mode (Press T)';
      toggleBtn.setAttribute('aria-label', nextLabel);
      toggleBtn.setAttribute('title', nextLabel);
    }

    // Dispatch global theme change event
    window.dispatchEvent(
      new CustomEvent('themechange', {
        detail: { theme, isDark }
      })
    );
  }

  function toggleTheme() {
    const isDark = document.documentElement.classList.contains('dark');
    applyTheme(isDark ? 'light' : 'dark', true);
  }

  function ensureThemeToggleUI() {
    let btn = document.getElementById('theme-toggle-btn');
    if (!btn) {
      btn = document.createElement('button');
      btn.id = 'theme-toggle-btn';
      btn.type = 'button';
      btn.className = 'fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full border-2 border-primary-container bg-surface-container flex items-center justify-center shadow-[3px_3px_0px_0px_#1e2022] hover:bg-surface-container-high transition-all active:scale-95 cursor-pointer';
      
      const currentIsDark = document.documentElement.classList.contains('dark');
      const label = currentIsDark ? 'Switch to Light Mode (Press T)' : 'Switch to Dark Mode (Press T)';
      btn.setAttribute('aria-label', label);
      btn.setAttribute('title', label);

      btn.innerHTML = `
        <span class="relative w-6 h-6 flex items-center justify-center pointer-events-none">
          <span id="theme-icon-sun" class="theme-icon absolute text-primary flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </span>
          <span id="theme-icon-moon" class="theme-icon absolute text-primary flex items-center justify-center">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </span>
        </span>
      `;

      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });

      document.body.appendChild(btn);
    } else {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggleTheme();
      });
    }
  }

  // Keyboard shortcut: Press 't' or 'T' to toggle theme
  document.addEventListener('keydown', (e) => {
    if (e.key === 't' || e.key === 'T') {
      const activeTag = document.activeElement ? document.activeElement.tagName : '';
      if (!['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag) && !document.activeElement.isContentEditable) {
        toggleTheme();
      }
    }
  });

  // Listen for system appearance change if no manual preference stored
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!getStoredTheme()) {
      applyTheme(e.matches ? 'dark' : 'light', false);
    }
  });

  // Initialize theme on DOM readiness
  function initTheme() {
    const activeTheme = getPreferredTheme();
    applyTheme(activeTheme, false);
    ensureThemeToggleUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Expose global methods
  window.toggleTheme = toggleTheme;
  window.setTheme = (theme) => applyTheme(theme, true);
  window.getTheme = () => (document.documentElement.classList.contains('dark') ? 'dark' : 'light');
})();
