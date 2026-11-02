const { fontFamily } = require('tailwindcss/defaultTheme');

// Colors resolve to CSS variables (see src/styles.scss) so every utility
// works in both light and dark mode.
const v = (name) => `rgb(var(--${name}) / <alpha-value>)`;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  // Uses html.theme-dark class — set by ThemeService
  darkMode: ['class', 'html.theme-dark'],
  theme: {
    extend: {
      colors: {
        bg:        v('bg'),
        surface:   { DEFAULT: v('surface'), 2: v('surface-2') },
        line:      v('line'),
        ink:       { DEFAULT: v('ink'), soft: v('ink-soft'), muted: v('ink-muted') },
        accent:    { DEFAULT: v('accent'), strong: v('accent-strong'), contrast: v('accent-contrast') },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['"JetBrains Mono"', 'Consolas', 'monospace'],
      },
      fontSize: {
        'display-lg': ['3.75rem', { lineHeight: '1.05', letterSpacing: '-0.035em' }],
        'display-md': ['2.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
      },
      boxShadow: {
        soft: '0 1px 2px rgb(0 0 0 / 0.04), 0 8px 24px -12px rgb(0 0 0 / 0.12)',
        lift: '0 1px 2px rgb(0 0 0 / 0.06), 0 20px 40px -20px rgb(0 0 0 / 0.25)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.2, 0.7, 0.2, 1) both',
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(12px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
