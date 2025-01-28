module.exports = {
  content: [
    "./node_modules/flowbite/**/*.js", // Flowbite'ı içeren dosyaları ekleyin
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  plugins: [
    require("flowbite/plugin"), // Flowbite plugin'ini ekleyin
  ],
};
