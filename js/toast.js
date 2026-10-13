/**
 * Prakhar Jaiswal Portfolio - Accessible Toast Notifications
 * Provides lightweight, non-blocking stacked notifications with action buttons.
 * Accessible to screen readers with role="status" and aria-live="polite".
 */

function showToast(message, actionText, actionCallback) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  if (!container.getAttribute('role')) {
    container.setAttribute('role', 'region');
    container.setAttribute('aria-label', 'Notifications');
    container.setAttribute('aria-live', 'polite');
  }

  const toast = document.createElement('div');
  toast.setAttribute('role', 'status');
  toast.className =
    'pointer-events-auto bg-primary text-on-primary px-4 py-3 rounded-lg shadow-hard-md border border-primary-container font-label-md text-label-md flex items-center justify-between gap-3 min-w-[280px] max-w-sm transition-all duration-300 transform translate-y-4 opacity-0';

  const msgSpan = document.createElement('span');
  msgSpan.textContent = message;
  toast.appendChild(msgSpan);

  if (actionText && actionCallback) {
    const btn = document.createElement('button');
    btn.className = 'toast-action-btn text-tertiary-fixed underline font-bold hover:text-on-primary transition-colors cursor-pointer shrink-0';
    btn.textContent = actionText;
    btn.addEventListener('click', () => {
      actionCallback();
      dismissToast(toast);
    });
    toast.appendChild(btn);
  }

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => dismissToast(toast), 4500);
}

function dismissToast(toast) {
  if (!toast) return;
  toast.classList.add('opacity-0', 'translate-y-2');
  setTimeout(() => toast.remove(), 300);
}

// Expose globally
window.showToast = showToast;
window.dismissToast = dismissToast;
