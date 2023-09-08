import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-linear': 'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        'gfc-gray': '#241F1F',
        'unbound-green': '#19BC99',
        'gfc-green': '#00D7D8',
        'gradient-start': '#9747FF',
        'gradient-end': '#E900EE',
        'green-start': '#02BA78',
        'green-end': '#01E132',
        'pricing-card-start': 'rgba(2, 186, 120, 0.2)',
        'pricing-card-end': 'rgba(1, 225, 50, 0.2)',
        'pricing-card-custom-start': 'rgba(151, 71, 255, 0.2)',
        'pricing-card-custom-end': 'rgba(233, 0, 238, 0.2)',
        'pricing-basic-card': 'rgba(248, 248, 248, 1)',
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      height: {
        '38': '38px',
        '46': '46px',
        '54': '54px',
        '64': '64px',
        '100': '100px',
        '186': '186px',
        '594': '594px',
        '710': '710px',
      },
      width: {
        '38': '38px',
        '100': '100px',
        '124': '124px',
        '140': '140px',
        '186': '186px',
        '275': '275px',
        '313': '313px',
        '316': '316px',
        '383': '383px',
        '748': '748px',
      },
      maxWidth: {
        '742': '742px',
      },
      fontSize: {
        '100': '100px',
        '32': '32px',
        '16': '16px',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/forms')
  ],
}
export default config
