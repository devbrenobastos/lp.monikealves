/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        panel: "var(--panel)",
        cream: "var(--cream)",
        mist: "var(--mist)",
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },
        olive: {
          DEFAULT: "var(--olive)",
          h: "var(--olive-h)",
          d: "var(--olive-d)",
        },
        d: {
          bg: "var(--d-bg)",
          surface: "var(--d-surface)",
          elevated: "var(--d-elevated)",
          line: "var(--d-line)",
        },
        amber: "var(--amber)",
        amethyst: "var(--amethyst)",
        terra: "var(--terra)",
      },
      fontFamily: {
        serif: ["var(--serif)"],
        sans: ["var(--sans)"],
        mono: ["var(--mono)"],
      },
      fontSize: {
        'display-xl': ['clamp(2.3rem, 1.6rem + 2.8vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // max 56px, weight light sans / Fraunces italic accent
        'display-l': ['clamp(1.8rem, 1.4rem + 2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }], // max 44px
        'display-m': ['clamp(1.5rem, 1.2rem + 1.2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // max 30px
        'body-l': ['clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)', { lineHeight: '1.6' }], // max 18px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-s': ['0.875rem', { lineHeight: '1.5' }], // 14px
        'mono-eyebrow': ['0.6875rem', { lineHeight: '1', letterSpacing: '0.2em' }], // 11px
        'mono-data': ['clamp(1.25rem, 1rem + 1vw, 1.875rem)', { letterSpacing: '-0.02em' }], // max 30px
      },
      spacing: {
        '4': '4px',
        '8': '8px',
        '12': '12px',
        '16': '16px',
        '24': '24px',
        '32': '32px',
        '48': '48px',
        '64': '64px',
        '96': '96px',
        '128': '128px',
      },
      maxWidth: {
        'content': '1120px',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
