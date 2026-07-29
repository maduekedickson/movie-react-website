/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 60px rgba(14, 165, 233, 0.16)',
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top, rgba(59,130,246,0.22), transparent 35%), radial-gradient(circle at 10% 20%, rgba(234,88,12,0.18), transparent 20%), linear-gradient(180deg, #040b16 0%, #02050d 100%)',
      },
    },
  },
  plugins: [],
}
