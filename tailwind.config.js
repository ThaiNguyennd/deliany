/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Epilogue", "sans-serif;"],
      },
      colors: {
        primary: " rgb(255, 68, 61)",
        dark: "#1C1C24",
        bg:" rgb(251, 243, 251)",
        text1: "#171725",
        text2: "#808191",
        text3: "#4B5264",
        lite: "#FCFCFD",
        erros: "#EB5757",
        dark: "#13131A",
        strock: "#CCCC",
      },
    },
  },
  plugins: [],
};
