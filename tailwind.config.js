/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        spotlight:
          "radial-gradient(circle, rgba(139,92,246,0.6) 0%, rgba(26,11,46,0) 70%)",
        "spotlight-strong":
          "radial-gradient(circle, rgba(139,92,246,1) 0%, rgba(26,11,46,0) 90%)",
      },
    },
  },
  plugins: [],
};
