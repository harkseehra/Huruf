import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display:          ['var(--font-display)', 'serif'],
        body:             ['var(--font-body)', 'system-ui', 'sans-serif'],
        persian:          ['var(--font-persian)', 'Arial', 'sans-serif'],
        'arabic-display': ['var(--font-arabic-display)', 'sans-serif'],
        mono:             ['var(--font-mono)', 'monospace'],
      },
      colors: {
        page: 'var(--bg-page)',
        surface: 'var(--bg-surface)',
        subtle: 'var(--bg-subtle)',
        primary: 'var(--text-primary)',
        secondary: 'var(--text-secondary)',
        muted: 'var(--text-muted)',
        accent: 'var(--accent-primary)',
        'accent-hover': 'var(--accent-hover)',
        border: 'var(--border-default)',
        'border-strong': 'var(--border-strong)',
        'on-accent': 'var(--text-on-accent)',
        fire: 'var(--ink-fire)',
        air: 'var(--ink-air)',
        water: 'var(--ink-water)',
        earth: 'var(--ink-earth)',
        'tint-fire': 'var(--tint-fire)',
        'tint-air': 'var(--tint-air)',
        'tint-water': 'var(--tint-water)',
        'tint-earth': 'var(--tint-earth)',
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        pill: 'var(--radius-pill)',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        glow: 'var(--shadow-glow)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
