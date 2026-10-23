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

// Navigation Bar Sliding Underline (#d97736)
function initNavSlidingUnderline() {
  const nav = document.getElementById('desktop-nav');
  if (!nav) return;

  let indicator = document.getElementById('nav-sliding-indicator');
  if (!indicator) {
    indicator = document.createElement('span');
    indicator.id = 'nav-sliding-indicator';
    indicator.className = 'nav-sliding-indicator';
    indicator.setAttribute('aria-hidden', 'true');
    nav.appendChild(indicator);
  }

  nav.classList.add('has-sliding-dock');

  const links = Array.from(nav.querySelectorAll('.nav-link-slide'));
  if (links.length === 0) return;

  let activeLink = nav.querySelector('.nav-link-slide.active');

  function positionIndicator(link) {
    if (!link) {
      indicator.style.opacity = '0';
      return;
    }
    const navRect = nav.getBoundingClientRect();
    const textEl = link.querySelector('span') || link;
    const textRect = textEl.getBoundingClientRect();

    if (textRect.width === 0) return;

    const left = textRect.left - navRect.left;
    const width = textRect.width;

    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
    indicator.style.opacity = '1';
  }

  links.forEach((link) => {
    link.addEventListener('mouseenter', () => {
      positionIndicator(link);
    });

    link.addEventListener('focus', () => {
      positionIndicator(link);
    });

    link.addEventListener('click', () => {
      links.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
      activeLink = link;
      positionIndicator(link);
    });
  });

  nav.addEventListener('mouseleave', () => {
    if (activeLink) {
      positionIndicator(activeLink);
    } else {
      indicator.style.opacity = '0';
    }
  });

  nav.addEventListener('focusout', (e) => {
    if (!nav.contains(e.relatedTarget)) {
      if (activeLink) {
        positionIndicator(activeLink);
      } else {
        indicator.style.opacity = '0';
      }
    }
  });

  window.addEventListener('resize', () => {
    if (activeLink) {
      positionIndicator(activeLink);
    }
  }, { passive: true });

  const isProjectsPage = window.location.pathname.includes('projects.html');
  if (isProjectsPage) {
    const allBuildsLink = links.find((l) => (l.getAttribute('href') || '').includes('projects.html'));
    if (allBuildsLink) {
      links.forEach((l) => l.classList.remove('active'));
      allBuildsLink.classList.add('active');
      activeLink = allBuildsLink;
    }
  } else {
    // Section spy on index.html
    const sections = [
      { id: 'sketch-desk', link: links[0] },
      { id: 'internship-log', link: links[1] },
      { id: 'field-notes', link: links[3] },
      { id: 'contact-inkwell', link: links[4] }
    ];

    function updateActiveOnScroll() {
      const scrollY = window.scrollY;
      let currentActive = null;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop - 180;
          if (scrollY >= top) {
            currentActive = sections[i].link;
            break;
          }
        }
      }

      if (currentActive && currentActive !== activeLink) {
        links.forEach((l) => l.classList.remove('active'));
        currentActive.classList.add('active');
        activeLink = currentActive;
        if (!nav.matches(':hover')) {
          positionIndicator(activeLink);
        }
      }
    }

    window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
    updateActiveOnScroll();
  }

  // Initial positioning after fonts and layout settle
  setTimeout(() => {
    if (activeLink) {
      positionIndicator(activeLink);
    }
  }, 120);
}

document.addEventListener('DOMContentLoaded', initNavSlidingUnderline);
if (document.readyState !== 'loading') {
  initNavSlidingUnderline();
}

window.initNavSlidingUnderline = initNavSlidingUnderline;

