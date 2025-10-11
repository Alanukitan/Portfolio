/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./dist/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      transitionDuration: {
        '500': '500ms',
      },
  },
  plugins: [require("flowbite/plugin")],
}
};