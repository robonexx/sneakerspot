import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },

      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(2)" },
          100: {transform: "scale(1)" },
        },
      },
      animation: {
        pingOnce: "pingOnce 0.4s cubic-bezier(0,0,0.2,1)",
      },
    },
  },
  plugins: [],
}
export default config
