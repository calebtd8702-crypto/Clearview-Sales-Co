import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#484848',
          blue: '#427AA3',
          light: '#DFEDF5',
          highlight: '#6FB1D9',
        },
        brand: {
          gray: '#484848',
          blue: '#427AA3',
          'light-blue': '#DFEDF5',
          'blue-hover': '#6FB1D9',
        },
      },
      fontFamily: {
        heading: ['var(--font-futura)', 'Inter', 'Helvetica', 'sans-serif'],
        body: ['Inter', 'Helvetica', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', fontWeight: '300' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '300' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '12px',
        '2xl': '16px',
      },
      boxShadow: {
        'card': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}

export default config
