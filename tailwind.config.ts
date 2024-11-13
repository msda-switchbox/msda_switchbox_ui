import typography from '@tailwindcss/typography'
import type { Config } from 'tailwindcss'

// import autoprefixer from 'autoprefixer'
import daisyui from 'daisyui'

export default {
  content: ['src/**/*.{vue,js}'], // Include your Vue components and JavaScript files here
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
    },

  },
  plugins: [typography, daisyui],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#26316B",
          "secondary": "#f68d2e",
          "accent": "#ab3428",
          "neutral": "#d6d3d1",
          "base-100": "#ffffff",
          "info": "#f68d2e",
          "success": "#26316B",
          "warning": "#f68d2e",
          "error": "#ab3428",
        },
      },
    ],
  },

} satisfies Config
