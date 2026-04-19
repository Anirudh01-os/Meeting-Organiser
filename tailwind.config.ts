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
        sage: {
          50: '#f4f7f4',
          100: '#e6ede6',
          200: '#ccdccc',
          300: '#a5c0a5',
          400: '#759f75',
          500: '#547f54',
          600: '#3f6140',
          700: '#344f35',
          800: '#2b402c',
          900: '#243525',
        },
        clay: {
          50: '#fdf6f0',
          100: '#fbeadb',
          200: '#f6d2b5',
          300: '#efb285',
          400: '#e68a52',
          500: '#df6b2e',
          600: '#d05423',
          700: '#ab3f1f',
          800: '#883320',
          900: '#6e2c1d',
        },
        slate: {
          earth: '#3d4a3e',
          matte: '#2a3330',
          deep: '#1a2420',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        mono: ['var(--font-mono)', 'monospace'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(84, 127, 84, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(84, 127, 84, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
