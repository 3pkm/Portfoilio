/**
 * Prakhar Jaiswal Portfolio - Milestone Experience Carousel
 * Handles the animated sliding ledger, indicator dots, status tags, auto-cycling, and touch gestures.
 */

let currentMilestone = 0;
const totalMilestones = 3;
const milestoneStatuses = [
  "Timeline: Jan 2025 – June 2025 • Remote, Indonesia",
  "Timeline: Sep 2024 – Present • MIT-WPU Pune",
  "Timeline: 2024 – 2025 • Applied AI & Diagnostics"
];

let milestoneTimer = null;

function updateMilestoneSlide() {
  const track = document.getElementById('milestones-track');
  if (track) {
    track.style.transform = `translateX(-${(currentMilestone * 100) / 3}%)`;
  }
  const tag = document.getElementById('milestone-ledger-tag');
  if (tag) {
    tag.innerText = `[EXPERIENCE LEDGER • MILESTONE 0${currentMilestone + 1} / 03]`;
  }
  const badge = document.getElementById('milestone-status-badge');
  if (badge) {
    badge.innerText = milestoneStatuses[currentMilestone];
  }
  for (let i = 0; i < totalMilestones; i++) {
    const dot = document.getElementById(`dot-${i}`);
    if (dot) {
      if (i === currentMilestone) {
        dot.className =
          'w-3 h-3 rounded-full border border-primary-container bg-primary transition-all cursor-pointer';
      } else {
        dot.className =
          'w-3 h-3 rounded-full border border-primary-container bg-surface-variant transition-all cursor-pointer';
      }
    }
  }
}

function goToMilestone(index) {
  currentMilestone = index;
  updateMilestoneSlide();
  resetAutoCycle();
}

function nextMilestone() {
  currentMilestone = (currentMilestone + 1) % totalMilestones;
  updateMilestoneSlide();
  resetAutoCycle();
}

function prevMilestone() {
  currentMilestone = (currentMilestone - 1 + totalMilestones) % totalMilestones;
  updateMilestoneSlide();
  resetAutoCycle();
}

function resetAutoCycle() {
  if (milestoneTimer) {
    clearInterval(milestoneTimer);
  }
  milestoneTimer = setInterval(nextMilestone, 6000);
}

// Initialize carousel on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('milestones-track');
  if (track) {
    updateMilestoneSlide();
    resetAutoCycle();

    // Touch swipe support for mobile friendliness (down to 360px)
    let touchStartX = 0;
    let touchStartY = 0;

    track.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    track.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;

      // Only trigger horizontal swipe if horizontal movement exceeds vertical
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          nextMilestone();
        } else {
          prevMilestone();
        }
      }
    }, { passive: true });

    // Pause auto-cycle when hovering over the carousel
    const container = track.parentElement;
    if (container) {
      container.addEventListener('mouseenter', () => {
        if (milestoneTimer) clearInterval(milestoneTimer);
      });
      container.addEventListener('mouseleave', () => {
        resetAutoCycle();
      });
    }
  }
});

// Expose globally
window.goToMilestone = goToMilestone;
window.nextMilestone = nextMilestone;
window.prevMilestone = prevMilestone;
window.updateMilestoneSlide = updateMilestoneSlide;
