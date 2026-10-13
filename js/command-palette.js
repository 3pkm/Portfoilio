/**
 * Prakhar Jaiswal Portfolio - Accessible Command Palette
 * Keyboard-first navigation modal triggered via Cmd+K or Ctrl+K.
 * Fully accessible with ARIA dialog semantics, focus trapping, Escape return focus, and arrow key selection.
 */

let lastActiveElement = null;
let currentHighlightedIndex = -1;

function getVisibleCommandItems() {
  const items = Array.from(document.querySelectorAll('.cmd-item'));
  return items.filter((item) => !item.classList.contains('hidden'));
}

function updateHighlightedItem(items, index) {
  items.forEach((item, i) => {
    if (i === index) {
      item.classList.add('bg-surface-container', 'text-primary', 'font-bold');
      item.setAttribute('aria-selected', 'true');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('bg-surface-container', 'text-primary', 'font-bold');
      item.removeAttribute('aria-selected');
    }
  });
}

function toggleCommandPalette(show) {
  const modal = document.getElementById('cmd-palette-backdrop');
  const input = document.getElementById('cmd-input');
  if (!modal) return;

  if (show) {
    lastActiveElement = document.activeElement;
    modal.classList.remove('hidden');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-label', 'Command Navigation Palette');
    document.body.style.overflow = 'hidden';

    if (input) {
      input.value = '';
      filterCommandPalette('');
      setTimeout(() => input.focus(), 40);
    }
  } else {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    currentHighlightedIndex = -1;
    if (lastActiveElement && typeof lastActiveElement.focus === 'function') {
      lastActiveElement.focus();
    }
  }
}

function filterCommandPalette(query) {
  const items = document.querySelectorAll('.cmd-item');
  const q = (query || '').toLowerCase().trim();
  items.forEach((item) => {
    const text = item.innerText.toLowerCase();
    if (!q || text.includes(q)) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });

  const visibleItems = getVisibleCommandItems();
  currentHighlightedIndex = visibleItems.length > 0 ? 0 : -1;
  updateHighlightedItem(visibleItems, currentHighlightedIndex);
}

// Global keyboard listeners: Cmd+K, Escape, Arrows, Enter & Focus Trap
document.addEventListener('keydown', (e) => {
  const modal = document.getElementById('cmd-palette-backdrop');
  const isOpen = modal && !modal.classList.contains('hidden');

  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (modal) {
      toggleCommandPalette(!isOpen);
    }
    return;
  }

  if (!isOpen) return;

  if (e.key === 'Escape') {
    e.preventDefault();
    toggleCommandPalette(false);
    return;
  }

  const visibleItems = getVisibleCommandItems();

  if (e.key === 'ArrowDown') {
    e.preventDefault();
    if (visibleItems.length === 0) return;
    currentHighlightedIndex = (currentHighlightedIndex + 1) % visibleItems.length;
    updateHighlightedItem(visibleItems, currentHighlightedIndex);
    return;
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault();
    if (visibleItems.length === 0) return;
    currentHighlightedIndex = (currentHighlightedIndex - 1 + visibleItems.length) % visibleItems.length;
    updateHighlightedItem(visibleItems, currentHighlightedIndex);
    return;
  }

  if (e.key === 'Enter') {
    if (visibleItems.length > 0 && currentHighlightedIndex >= 0 && currentHighlightedIndex < visibleItems.length) {
      e.preventDefault();
      const target = visibleItems[currentHighlightedIndex];
      toggleCommandPalette(false);
      target.click();
    }
    return;
  }

  // Focus trap inside the modal
  if (e.key === 'Tab') {
    const focusable = modal.querySelectorAll('input, button, [href], [tabindex]:not([tabindex="-1"])');
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }
});

// Expose globally
window.toggleCommandPalette = toggleCommandPalette;
window.filterCommandPalette = filterCommandPalette;
