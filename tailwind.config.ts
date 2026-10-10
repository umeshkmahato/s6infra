import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f59e0b',
        'primary-dark': '#d97706',
        dark: '#0b1220',
        'dark-2': '#111827',
        text: '#1f2937',
        muted: '#6b7280',
        light: '#f8fafc',
        success: '#16a34a',
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '1180px',
      },
      boxShadow: {
        custom: '0 15px 40px rgba(15, 23, 42, 0.10)',
      },
    },
  },
  plugins: [],
};

export default config;
