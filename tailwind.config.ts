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
        'poppins': 'Poppins, sans-serif'
      },
      colors: {
        'burnt-yellow': '#C4AF9A',
        'off-black' : '#1E1E24',
        'off-white' : '#FAF9F6'
      },
      screens: {
        'sm' : '475px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1440px'
      }
      // translate: {
      //   'menuInitialPos': 'translateX(-100%)'
      // }
    },
  },
  plugins: [],
}
export default config
