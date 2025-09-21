/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
  extend: {
    colors: {
      brand: "var(--brand-1)",
      brandAccent: "var(--brand-2)"
    },
    backgroundImage: {
      "brand-gradient": "linear-gradient(to right, var(--brand-1), var(--brand-2))"
    },
    boxShadow: {
      brandGlow: "0 0 15px var(--brand-1), 0 0 30px var(--brand-2)"
    }
  }
},
  plugins: [],
}
