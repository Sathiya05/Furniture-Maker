/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wood: {
          DEFAULT: '#A66E38', // Timber Brown
          50: '#fdf8f3',
          100: '#f9eee1',
          200: '#f1dec5',
          300: '#e4c49d',
          400: '#d3a26d',
          500: '#A66E38',
          600: '#8B5A2B', // Darker Oak
          700: '#744a25',
          800: '#5f3d23',
          900: '#4f341f',
        },
        studio: {
          DEFAULT: '#1a1a1a', // Charcoal
          50: '#8c8c8c',
          100: '#737373',
          200: '#595959',
          300: '#404040',
          400: '#262626',
          500: '#1a1a1a',
          600: '#121212',
          700: '#0a0a0a',
          800: '#050505',
          900: '#030303',
        },
        sand: {
          DEFAULT: '#FDF8F4',
        },
        dark: {
          DEFAULT: '#050505',
          card: '#0a0a0a',
          border: '#1a1a1a',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'subtle-zoom': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scroll-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(300%)' },
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'subtle-zoom': 'subtle-zoom 20s infinite alternate',
        'slide-down': 'slideDown 0.3s ease-out',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'scroll-line': 'scroll-line 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
