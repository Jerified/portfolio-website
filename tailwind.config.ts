import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      "colors": {
        "white": "#fff",
        "gray": "rgba(0, 0, 0, 0.73)",
        "orangered": "#ff6525",
        "black": "#000"
        },
    },
  },
  plugins: [],
}
export default config
