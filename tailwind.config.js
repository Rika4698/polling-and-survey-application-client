
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      boxShadow: {
        'neumorphic-card': '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px    rgba(255,255,255, 0.5)',
        'neumorphic-toggle-inset': 'inset 5px 5px 10px rgb(163,177,198,0.6), inset -5px -5px 10px rgba(255,255,255, 0.5)',
        'neumorphic-toggle-outset': '5px 5px 10px rgb(163,177,198,0.6), -5px -5px 10px rgba(255,255,255, 0.5)',
      },
      animation: {
        fadeInUp: "fadeInUp 0.8s ease-out",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
}

