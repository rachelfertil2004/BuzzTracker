/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-bg': '#0B0B0F',
        'card-bg': '#12121A',
        'text-primary': '#E6E6EA',
        'text-secondary': '#A6A6B3',
        'text-muted': '#6B7280',
        'accent-red': '#D32F2F',
        'accent-red-dark': '#B71C1C',
        'accent-blue': '#2563EB',
        'accent-blue-dark': '#1D4ED8',
        'border': '#1F2937',
        'success': '#10B981',
        'warning': '#F59E0B',
      },
      fontFamily: {
        'sans': ['Inter', 'DM Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'h1': ['32px', { lineHeight: '1.2', fontWeight: '700' }],
        'h2': ['24px', { lineHeight: '1.3', fontWeight: '700' }],
        'body': ['16px', { lineHeight: '1.6', fontWeight: '500' }],
        'caption': ['13px', { lineHeight: '1.5', fontWeight: '500' }],
      },
      maxWidth: {
        'content': '1100px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
