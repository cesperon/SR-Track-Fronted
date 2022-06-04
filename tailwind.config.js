module.exports = {
  purge: ["src/**/*.js"],
  content: [],
  theme: {
    extend: {
      colors: {
        "opaq-black": "rgb(0,0,0,0.6)",
        "opaq-white": "rgb(255,255,255,0.8)",
      },
      fontFamily: {
        "grape-nuts": ["Grape Nuts", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      backgroundImage: {
        sr: "url('/src/assets/sr_bg1.jpeg')",
      },
    },
  },
  plugins: [],
};
