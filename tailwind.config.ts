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
        'abel': 'Abel, sans-serif',
        'poppins': 'Poppins, sans-serif',
        'mono' :'Roboto Mono, monospace'
      },
      colors: {
        'burnt-yellow': '#C4AF9A',
        'off-black' : '#1E1E24',
        'off-white' : '#E5E5E5',
        'pillbox-color': '#BEBEBE'
      },
      screens: {
        'sm' : '475px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1440px'
      },
      width: {
        'logo' : '40px',
        'logo-lg' : '60px'
      }
    },
  },
  plugins: [],
}
export default config
