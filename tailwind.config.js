/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'Tajawal', 'system-ui', 'sans-serif'],
        taj: ['Tajawal', 'Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#0B0A08',
          900: '#141210',
          800: '#1E1B18',
          700: '#2A2521',
        },
        cream: {
          50: '#FFFCF5',
          100: '#FAF4E8',
          200: '#F3E9D3',
          300: '#E8D9B8',
        },
        brand: {
          50: '#FEF2F0',
          100: '#FDE3DF',
          500: '#E0301E',
          600: '#C4271A',
          700: '#9E1F15',
        },
        ember: {
          400: '#FF8A3D',
          500: '#F97316',
          600: '#EA580C',
        },
        gold: '#C9A227',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(11,10,8,.25)',
        pop: '0 24px 60px -20px rgba(224,48,30,.45)',
        soft: '0 8px 24px -8px rgba(11,10,8,.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'zoom-in': {
          '0%': { opacity: '0', transform: 'scale(.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        floaty: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(50%)' },
        },
        pop: {
          '0%': { transform: 'scale(.4)', opacity: '0' },
          '60%': { transform: 'scale(1.15)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.22,1,.36,1) both',
        'zoom-in': 'zoom-in .5s cubic-bezier(.22,1,.36,1) both',
        floaty: 'floaty 5s ease-in-out infinite',
        pop: 'pop .35s cubic-bezier(.22,1,.36,1) both',
      },
    },
  },
  plugins: [],
};
