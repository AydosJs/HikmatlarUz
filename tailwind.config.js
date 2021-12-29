module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      // 'primary': '#2ECC71',
      // 'primary-dark': '#2AB967',
      // 'primary-light': '#97E6B8',

      'primary': '#009688',
      'primary-dark': '#00695f',
      'primary-light': '#33ab9f',

      'secondary': '#ff3d00',
      'secondary-dark': '#b22a00',
      'secondary-light': '#ff6333',

      'white': "#fff",
      'black': "#000",
    },
    fontFamily: {
      // sans: ['Poppins', 'sans-serif'],
      // serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
    // require('@themesberg/flowbite/plugin')
  ],
  variants: {
    colors: ['active'],
    extend: {
      padding: ['ferst', 'last', "hover", "focus", "avtive"],
    }
  },
}
