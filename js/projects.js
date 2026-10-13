/**
 * Prakhar Jaiswal Portfolio - Projects Catalog Filter
 * Manages category filtering, progress indicator, and intentional empty state.
 */

function filterCategory(category) {
  if (typeof triggerProgressBar === 'function') {
    triggerProgressBar();
  }

  const cards = document.querySelectorAll('.project-card');
  const emptyState = document.getElementById('empty-state');
  let visibleCount = 0;

  cards.forEach((card) => {
    const rawCategories = card.getAttribute('data-category') || '';
    const catList = rawCategories.split(' ');
    if (category === 'all' || catList.includes(category)) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (emptyState) {
    if (visibleCount === 0) {
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
    }
  }

  // Update button active styles
  document.querySelectorAll('.filter-btn').forEach((btn) => {
    btn.classList.remove('bg-primary', 'text-on-primary');
    btn.classList.add('bg-surface-container', 'text-primary');
  });

  const activeBtn = document.getElementById(`filter-${category}`);
  if (activeBtn) {
    activeBtn.classList.remove('bg-surface-container', 'text-primary');
    activeBtn.classList.add('bg-primary', 'text-on-primary');
  }
}

// Initial progress animation on catalog load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof triggerProgressBar === 'function') {
    triggerProgressBar();
  }
});

// Expose globally
window.filterCategory = filterCategory;
