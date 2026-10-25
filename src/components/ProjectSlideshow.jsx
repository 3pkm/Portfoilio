import React, { useState, useEffect } from 'react';

export default function ProjectSlideshow({ images = [], alt = "Project preview", interval = 3000 }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!images || images.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval, isPaused]);

  if (!images || images.length === 0) return null;

  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Project images slideshow"
    >
      {/* Background Slides with Crossfade and 5% larger scale (scale-105) */}
      {images.map((src, index) => (
        <div
          key={src + index}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          <img
            src={src}
            alt={`${alt} - Slide ${index + 1}`}
            className="w-full h-full object-cover object-center scale-105"
            loading="lazy"
            decoding="async"
          />
        </div>
      ))}

      {/* Subtle top & bottom edge vignettes ensuring badges remain legible over any screenshot */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-primary/30 via-transparent to-primary/40"
        aria-hidden="true"
      />

      {/* Pagination dots indicator for multi-image slideshows */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-4 z-20 flex items-center gap-1.5 bg-primary/70 backdrop-blur-sm px-2 py-1 rounded-full border border-primary-container/40">
          {images.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentIndex(dotIdx);
              }}
              aria-label={`Go to slide ${dotIdx + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                dotIdx === currentIndex
                  ? 'bg-tertiary-fixed scale-125 shadow-sm'
                  : 'bg-on-primary/40 hover:bg-on-primary/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
