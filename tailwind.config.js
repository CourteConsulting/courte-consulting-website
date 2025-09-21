/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-orange': '#FF8C42',
        'primary-orange-dark': '#E67A35',
        'deep-navy': '#1A2332',
        'deep-navy-dark': '#0F1419',
        'accent-light-gray': '#F8F9FA',
        'text-charcoal': '#2D3748',
      },
    },
  },
  plugins: [],
};
