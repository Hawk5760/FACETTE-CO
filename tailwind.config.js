/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ivory: '#E9E4DC',
          'emerald-deep': '#0E3D3D',
          'emerald-rich': '#05624C',
          'gold-champagne': '#D5B581',
          'gold-muted': '#C3A575',
          'charcoal-deep': '#232A36',
          'charcoal-dark': '#0E1318',
          'charcoal-pitch': '#090C0E',
          'bone-white': '#D6D5D0',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Didot', 'Bodoni MT', 'Cinzel', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-emerald': 'linear-gradient(135deg, #0E3D3D 0%, #05624C 100%)',
        'gradient-gold': 'linear-gradient(135deg, #D5B581 0%, #E9E4DC 100%)',
        'gradient-dark': 'linear-gradient(180deg, #090C0E 0%, #0E1318 50%, #090C0E 100%)',
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.25em',
      }
    },
  },
  plugins: [],
}
