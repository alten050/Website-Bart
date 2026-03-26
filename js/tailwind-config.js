/* Smits & Wouters — Shared Tailwind brand config
   Load this BEFORE cdn.tailwindcss.com so Tailwind picks up the theme. */
tailwind.config = {
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#0A1628',
          900: '#0F1E40',
          800: '#162966',
          700: '#1E3A8A',
          600: '#2D5FC4',
          500: '#4070D8',
          400: '#5A8AE8',
          300: '#8FBAF5',
          200: '#C0D8F5',
          100: '#E4EEF9',
          50:  '#F0F6FC',
        },
      },
      fontFamily: {
        display:    ['Playfair Display', 'Georgia', 'serif'],
        'display-sc': ['Playfair Display SC', 'Georgia', 'serif'],
        body:       ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
};
