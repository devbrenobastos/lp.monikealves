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
        amber: {
          DEFAULT: "var(--amber)",
          light: "var(--amber-light)",
        },
        amethyst: "var(--amethyst)",
        terra: "var(--terra)",
      },
      fontFamily: {
        serif: ["var(--serif)"],
        sans: ["var(--sans)"],
        mono: ["var(--mono)"],
      },
      fontSize: {
        'display-xl': ['clamp(1.75rem, 1.25rem + 2.5vw, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // min 28px, max 56px
        'display-l': ['clamp(1.625rem, 1.2rem + 2vw, 2.75rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }], // min 26px, max 44px
        'display-m': ['clamp(1.375rem, 1.1rem + 1.2vw, 1.875rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // min 22px, max 30px
        'body-l': ['clamp(1.0625rem, 1rem + 0.3vw, 1.125rem)', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'body-s': ['0.875rem', { lineHeight: '1.5' }], // 14px (md and up)
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
