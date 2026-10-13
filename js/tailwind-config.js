/**
 * Prakhar Jaiswal Portfolio - Tailwind CSS Configuration
 * Provides dynamic theme design tokens connected to CSS variables for uniform Light & Dark modes.
 */
tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "rgb(var(--color-secondary-rgb) / <alpha-value>)",
        "on-primary-fixed-variant": "rgb(var(--color-on-primary-fixed-variant-rgb) / <alpha-value>)",
        "outline-variant": "rgb(var(--color-outline-variant-rgb) / <alpha-value>)",
        "error-container": "#ffdad6",
        "surface-container-lowest": "rgb(var(--color-surface-container-lowest-rgb) / <alpha-value>)",
        "primary": "rgb(var(--color-primary-rgb) / <alpha-value>)",
        "on-tertiary": "var(--color-on-tertiary, #ffffff)",
        "surface": "rgb(var(--color-surface-rgb) / <alpha-value>)",
        "on-background": "rgb(var(--color-on-background-rgb) / <alpha-value>)",
        "on-tertiary-fixed": "rgb(var(--color-on-tertiary-fixed-rgb) / <alpha-value>)",
        "secondary-fixed": "rgb(var(--color-secondary-fixed-rgb) / <alpha-value>)",
        "surface-container-high": "rgb(var(--color-surface-container-high-rgb) / <alpha-value>)",
        "error": "#ba1a1a",
        "surface-variant": "rgb(var(--color-surface-variant-rgb) / <alpha-value>)",
        "tertiary": "var(--color-tertiary, #140400)",
        "on-error-container": "#93000a",
        "tertiary-container": "rgb(var(--color-tertiary-container-rgb) / <alpha-value>)",
        "secondary-fixed-dim": "rgb(var(--color-secondary-fixed-dim-rgb) / <alpha-value>)",
        "on-primary-fixed": "var(--color-on-primary-fixed, #1a1c1e)",
        "on-secondary-container": "var(--color-on-secondary-container, #3c5c80)",
        "tertiary-fixed": "rgb(var(--color-tertiary-fixed-rgb) / <alpha-value>)",
        "on-tertiary-fixed-variant": "rgb(var(--color-on-tertiary-fixed-variant-rgb) / <alpha-value>)",
        "on-secondary-fixed": "rgb(var(--color-on-secondary-fixed-rgb) / <alpha-value>)",
        "primary-container": "rgb(var(--color-primary-container-rgb) / <alpha-value>)",
        "on-tertiary-container": "var(--color-on-tertiary-container, #cd6e2e)",
        "on-primary": "rgb(var(--color-on-primary-rgb) / <alpha-value>)",
        "on-surface-variant": "rgb(var(--color-on-surface-variant-rgb) / <alpha-value>)",
        "surface-container": "rgb(var(--color-surface-container-rgb) / <alpha-value>)",
        "inverse-surface": "var(--color-inverse-surface, #31312b)",
        "on-secondary": "rgb(var(--color-on-secondary-rgb) / <alpha-value>)",
        "on-secondary-fixed-variant": "rgb(var(--color-on-secondary-fixed-variant-rgb) / <alpha-value>)",
        "inverse-on-surface": "var(--color-inverse-on-surface, #f4f1e8)",
        "tertiary-fixed-dim": "rgb(var(--color-tertiary-fixed-dim-rgb) / <alpha-value>)",
        "primary-fixed-dim": "#c6c6c9",
        "surface-tint": "#5d5e61",
        "outline": "rgb(var(--color-outline-rgb) / <alpha-value>)",
        "on-surface": "rgb(var(--color-on-surface-rgb) / <alpha-value>)",
        "on-primary-container": "rgb(var(--color-on-primary-container-rgb) / <alpha-value>)",
        "surface-container-highest": "rgb(var(--color-surface-container-highest-rgb) / <alpha-value>)",
        "surface-container-low": "rgb(var(--color-surface-container-low-rgb) / <alpha-value>)",
        "primary-fixed": "var(--color-primary-fixed, #e2e2e5)",
        "on-error": "#ffffff",
        "surface-dim": "rgb(var(--color-surface-dim-rgb) / <alpha-value>)",
        "background": "rgb(var(--color-background-rgb) / <alpha-value>)",
        "secondary-container": "rgb(var(--color-secondary-container-rgb) / <alpha-value>)",
        "inverse-primary": "#c6c6c9"
      },
      boxShadow: {
        "hard-sm": "2px 2px 0px 0px var(--shadow-color)",
        "hard-md": "4px 4px 0px 0px var(--shadow-color)",
        "hard-lg": "6px 6px 0px 0px var(--shadow-color)",
        "hard-xl": "8px 8px 0px 0px var(--shadow-color)"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "space-md": "1.25rem",
        "margin": "3rem",
        "gutter-mobile": "1rem",
        "margin-mobile": "1.25rem",
        "space-xs": "0.375rem",
        "space-sm": "0.75rem",
        "space-lg": "2rem",
        "space-xl": "3.5rem",
        "gutter": "1.5rem"
      },
      fontFamily: {
        "body-lg": ["Karla", "sans-serif"],
        "label-lg": ["Courier Prime", "monospace"],
        "body-sm": ["Karla", "sans-serif"],
        "annotation": ["Bricolage Grotesque", "sans-serif"],
        "body-md": ["Karla", "sans-serif"],
        "headline-md": ["Bricolage Grotesque", "sans-serif"],
        "headline-lg": ["Bricolage Grotesque", "sans-serif"],
        "display": ["Bricolage Grotesque", "sans-serif"],
        "label-md": ["Courier Prime", "monospace"],
        "headline-sm": ["Bricolage Grotesque", "sans-serif"]
      },
      fontSize: {
        "body-lg": ["18px", { "lineHeight": "28px", "fontWeight": "400" }],
        "label-lg": ["14px", { "lineHeight": "18px", "letterSpacing": "0.04em", "fontWeight": "700" }],
        "body-sm": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
        "annotation": ["15px", { "lineHeight": "20px", "letterSpacing": "0.01em", "fontWeight": "500" }],
        "body-md": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
        "headline-md": ["26px", { "lineHeight": "32px", "fontWeight": "700" }],
        "headline-lg": ["36px", { "lineHeight": "44px", "fontWeight": "700" }],
        "display": ["56px", { "lineHeight": "64px", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.02em", "fontWeight": "400" }],
        "headline-sm": ["20px", { "lineHeight": "28px", "fontWeight": "600" }]
      }
    }
  }
};
