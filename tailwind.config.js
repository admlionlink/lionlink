/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out both',
        'bounce-slow': 'bounce 3s infinite',
        'bounce-delayed': 'bounce 3s infinite 1.5s',
        'frame-reveal': 'frameReveal 0.8s cubic-bezier(.16,1,.3,1) both',
        'draw-line': 'drawLine 0.7s cubic-bezier(.16,1,.3,1) 0.5s both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        frameReveal: {
          '0%': { opacity: '0', transform: 'translate(18px, -18px)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        drawLine: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
    },
  },
  plugins: [],
}
