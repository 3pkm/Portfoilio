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

// Initial progress animation and slideshow initialization on catalog load
document.addEventListener('DOMContentLoaded', () => {
  if (typeof triggerProgressBar === 'function') {
    triggerProgressBar();
  }
  initCatalogSlideshows();
});

/**
 * Initializes and manages all auto-rotating 3-second crossfade slideshows in projects.html
 */
function initCatalogSlideshows() {
  const slideshows = document.querySelectorAll('.catalog-slideshow');
  
  slideshows.forEach((container) => {
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    if (slides.length <= 1) return;

    let currentIndex = 0;
    let isPaused = false;
    const interval = parseInt(container.getAttribute('data-interval') || '3000', 10);

    function showSlide(index) {
      slides.forEach((slide, idx) => {
        if (idx === index) {
          slide.classList.remove('opacity-0', '-z-10');
          slide.classList.add('opacity-100', 'z-0');
        } else {
          slide.classList.remove('opacity-100', 'z-0');
          slide.classList.add('opacity-0', '-z-10');
        }
      });

      dots.forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.remove('bg-on-primary/40');
          dot.classList.add('bg-tertiary-fixed', 'scale-125', 'shadow-sm');
        } else {
          dot.classList.remove('bg-tertiary-fixed', 'scale-125', 'shadow-sm');
          dot.classList.add('bg-on-primary/40');
        }
      });
      currentIndex = index;
    }

    // Auto rotate every 3 seconds (pausing on hover)
    setInterval(() => {
      if (!isPaused) {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      }
    }, interval);

    container.addEventListener('mouseenter', () => {
      isPaused = true;
    });

    container.addEventListener('mouseleave', () => {
      isPaused = false;
    });

    // Interactive dot navigation
    dots.forEach((dot, dotIdx) => {
      dot.addEventListener('click', (e) => {
        e.stopPropagation();
        showSlide(dotIdx);
      });
    });
  });
}

// Expose globally
window.filterCategory = filterCategory;
window.initCatalogSlideshows = initCatalogSlideshows;

