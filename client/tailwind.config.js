/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#F7F3EC',
          200: '#EFE9DF',
          300: '#E2D8C7',
          400: '#C8B89E',
        },
        crimson: {
          50: '#FBF0F1',
          100: '#F7DEE1',
          200: '#EFBDC3',
          500: '#B02A3C',
          700: '#8E1D2D',
          800: '#7A1B28', // Brand Royal Crimson
          900: '#5A121C',
        },
        gold: {
          50: '#FAF6ED',
          100: '#F4ECD8',
          200: '#E8D9B0',
          300: '#DCB96D',
          400: '#D4B055',
          500: '#C59A45', // Brand Antique Gold Foil
          600: '#AA8032',
          700: '#866324',
          800: '#644819',
        },
        ink: {
          900: '#181310',
          800: '#231C18',
          700: '#3A312B',
          600: '#54473F',
          500: '#706259',
          400: '#94857B',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EBE5D',
          dark: '#128C7E',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        display: ['"Cinzel"', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(35, 28, 24, 0.06), 0 2px 6px -1px rgba(35, 28, 24, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(35, 28, 24, 0.12), 0 4px 10px -2px rgba(35, 28, 24, 0.06)',
        'gold-glow': '0 0 20px rgba(197, 154, 69, 0.25)',
        'sticky-bar': '0 -4px 20px rgba(0, 0, 0, 0.08)',
      },
      screens: {
        'xs': '375px',
      }
    },
  },
  plugins: [],
}
