module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
  },
  daisyui: {
    themes: [
      {
        creativeAgencyTheme: {
          "primary": "#FBD062",
          "secondary": "#111430",
          "accent": "#F4F7FC",
          "neutral": "#1B1B22",
          "info": "#7DADE3",
          "success": "#009444",
          "error": "#E34F5D",
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}