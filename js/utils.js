/**
 * Prakhar Jaiswal Portfolio - Utilities
 * Handles top progress indicator, network status monitoring, and layout utilities.
 */

// Top Progress Bar simulation on link clicks & route changes
function triggerProgressBar() {
  const bar = document.getElementById('nprogress-bar');
  if (!bar) return;
  bar.style.width = '35%';
  bar.style.opacity = '1';
  setTimeout(() => {
    bar.style.width = '75%';
  }, 150);
  setTimeout(() => {
    bar.style.width = '100%';
    setTimeout(() => {
      bar.style.opacity = '0';
      setTimeout(() => {
        bar.style.width = '0%';
      }, 200);
    }, 200);
  }, 350);
}

// Offline / Reconnect Detection
function updateOnlineStatus() {
  const banner = document.getElementById('offline-banner');
  if (!banner) return;
  if (navigator.onLine) {
    banner.classList.add('hidden');
  } else {
    banner.classList.remove('hidden');
  }
}

// Bind navigation anchors and online/offline listeners
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', () => triggerProgressBar());
  });

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();
});

// Expose utilities to global scope
window.triggerProgressBar = triggerProgressBar;
window.updateOnlineStatus = updateOnlineStatus;

// Mobile navigation menu toggle and accessibility
function toggleMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const icon = document.getElementById('mobile-menu-icon');
  if (!drawer || !btn) return;

  const isExpanded = btn.getAttribute('aria-expanded') === 'true';
  const nextState = !isExpanded;

  btn.setAttribute('aria-expanded', String(nextState));
  if (nextState) {
    drawer.classList.remove('hidden');
    if (icon) icon.textContent = 'close';
  } else {
    drawer.classList.add('hidden');
    if (icon) icon.textContent = 'menu';
  }
}

function closeMobileMenu() {
  const drawer = document.getElementById('mobile-nav-drawer');
  const btn = document.getElementById('mobile-menu-toggle-btn');
  const icon = document.getElementById('mobile-menu-icon');
  if (drawer && !drawer.classList.contains('hidden')) {
    drawer.classList.add('hidden');
  }
  if (btn) {
    btn.setAttribute('aria-expanded', 'false');
  }
  if (icon) {
    icon.textContent = 'menu';
  }
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    closeMobileMenu();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeMobileMenu();
  }
});

window.toggleMobileMenu = toggleMobileMenu;
window.closeMobileMenu = closeMobileMenu;

