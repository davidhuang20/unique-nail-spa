import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'metroplis': ['metroplis', 'sans-serif'],
      },
      height:{
        '120': '36rem',
        '128': '40rem',
      },
      maxHeight: {
        '128': '32rem',
      },
      margin: {
        '128': '30rem',
        '144': '44rem'
      }
    },
  },
  plugins: [],
}
export default config
