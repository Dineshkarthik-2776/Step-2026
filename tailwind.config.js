/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 25s linear infinite',
        fadeIn: 'fadeIn 1s ease-in',
        fadeInUp: 'fadeInUp 1s ease-out',
        bounceIn: 'bounceIn 1s cubic-bezier(0.215, 0.610, 0.355, 1.000)',
        rotatePlane: 'rotatePlane 1.2s infinite ease-in-out',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translate3d(0, 100%, 0)' },
          '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '50%': { opacity: '1', transform: 'scale3d(1.1, 1.1, 1.1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        rotatePlane: {
          '0%': { transform: 'perspective(120px) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'perspective(120px) rotateX(-180.1deg) rotateY(0deg)' },
          '100%': { transform: 'perspective(120px) rotateX(-180deg) rotateY(-179.9deg)' },
        },
      },
      colors: {
        svce: {
          blue: '#1a365d',
          red: '#dc2626',
          gray: {
            100: '#f8fafc',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
          },
        },
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        100: '25rem',
        120: '30rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.625rem',
      },
      height: {
        100: '25rem',
        120: '30rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
    },
  },
  plugins: [
    // Use the official Tailwind plugin wrappers
    typography,
    forms,
  ],
};
