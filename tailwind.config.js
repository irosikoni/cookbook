/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primaryColor: "#FFF4F5", // Light Pink
        secondaryColor: "#FFC0CB", // Bubble Gum Pink
        darkSecondaryColor: "#FADADD", // Lighter Shade of Pink
        accentColor1: "#FDEBFF", // Pastel Purple
        accentColor2: "#FEF9C7", // Pastel Yellow
        accentColor3: "#B5EAD7", // Pastel Green
        textColor: "#333333", // Dark Gray for Text
        buttonColor: "#FF69B4", // Hot Pink for Buttons
        buttonTextColor: "#FFFFFF", // White for Button Text
      },
      colors: {
        primaryColor: "#FFF4F5",
        secondaryColor: "#FFC0CB", // Bubble Gum Pink
        darkSecondaryColor: "#FADADD", // Lighter Shade of Pink
        accentColor1: "#FDEBFF", // Pastel Purple
        accentColor2: "#FEF9C7", // Pastel Yellow
        accentColor3: "#B5EAD7", // Pastel Green
        textColor: "#333333", // Dark Gray for Text
        buttonColor: "#FF69B4", // Hot Pink for Buttons
        buttonTextColor: "#FFFFFF", // White for Button Text
      },
    },
    plugins: [require("flowbite/plugin")],
  },
};
