/**
 * Prakhar Jaiswal Portfolio - Contact & Clipboard Management
 * Handles clipboard email copying, real FormSubmit email dispatch, and mailto fallback.
 */

// Copy email helper
function copyEmail() {
  navigator.clipboard.writeText('jas.prakhar@gmail.com').then(() => {
    if (typeof showToast === 'function') {
      showToast('Email copied to clipboard! (jas.prakhar@gmail.com)');
    }
  }).catch(() => {
    if (typeof showToast === 'function') {
      showToast('Contact: jas.prakhar@gmail.com');
    }
  });
}

// Contact Form with real email dispatch and layout-preserving button spinner
async function handleContactSubmit(e) {
  if (e && e.preventDefault) {
    e.preventDefault();
  }

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const messageInput = document.getElementById('contact-message');

  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';
  const message = messageInput ? messageInput.value.trim() : '';

  // Validation
  if (!name || !email || !message) {
    if (typeof showToast === 'function') {
      showToast('Please fill in your name, email, and message before dispatching!');
    }
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    if (typeof showToast === 'function') {
      showToast('Please enter a valid email address.');
    }
    return;
  }

  const btn = document.getElementById('stamp-submit-btn');
  const content = document.getElementById('submit-btn-content');
  const spinner = document.getElementById('submit-spinner');

  if (!btn || !content || !spinner) return;

  // Preserve button layout & show spinner
  btn.setAttribute('disabled', 'true');
  btn.setAttribute('aria-busy', 'true');
  content.classList.add('opacity-0');
  spinner.classList.remove('hidden');
  spinner.classList.add('flex');

  let dispatchSuccessful = false;

  try {
    const payload = {
      name: name,
      email: email,
      message: message,
      _subject: 'Portfolio Engineering Dispatch from ' + name,
      _template: 'table'
    };

    const response = await fetch('https://formsubmit.co/ajax/jas.prakhar@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    });

    if (response.ok) {
      const data = await response.json().catch(() => ({}));
      if (data.success === 'true' || data.success === true || response.status === 200) {
        dispatchSuccessful = true;
      }
    } else {
      dispatchSuccessful = false;
    }
  } catch (err) {
    console.warn('FormSubmit network request failed, falling back to mailto:', err);
    dispatchSuccessful = false;
  }

  // Fallback to mailto if asynchronous POST fails
  if (!dispatchSuccessful) {
    const mailSubject = encodeURIComponent('Portfolio Engineering Dispatch from ' + name);
    const mailBody = encodeURIComponent(`From: ${name} (${email})\n\nMessage:\n${message}`);
    const mailtoUrl = `mailto:jas.prakhar@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    try {
      window.open(mailtoUrl, '_blank') || (window.location.href = mailtoUrl);
    } catch (_) {
      window.location.href = mailtoUrl;
    }
  }

  // Settle UI state
  btn.removeAttribute('disabled');
  btn.setAttribute('aria-busy', 'false');
  spinner.classList.add('hidden');
  spinner.classList.remove('flex');
  content.classList.remove('opacity-0');
  content.innerHTML =
    '<span class="material-symbols-outlined text-[20px] shrink-0">check_circle</span><span class="whitespace-nowrap">Message Dispatched! ✉</span>';
  btn.classList.add('bg-secondary', 'text-on-secondary');

  const toastMessage = dispatchSuccessful
    ? 'Message dispatched to Prakhar! ✉'
    : 'Message draft prepared in your email client! ✉';

  if (typeof showToast === 'function') {
    showToast(toastMessage, 'Send Another', () => {
      const form = document.getElementById('contact-form');
      if (form) form.reset();
      content.innerHTML =
        '<span class="material-symbols-outlined text-tertiary-fixed text-[20px] shrink-0">send</span><span class="whitespace-nowrap">Dispatch Message</span>';
      btn.classList.remove('bg-secondary', 'text-on-secondary');
    });
  }
}

// Expose globally
window.copyEmail = copyEmail;
window.handleContactSubmit = handleContactSubmit;
