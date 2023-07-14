/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src.**/*.{html,js}",
  "./app/**/*.{js,ts,jsx,tsx}",
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
  "./styles/**/*.{js,ts,jsx,tsx}"

],
  theme: {
    extend: {
      fontFamily:{

        Montserrat : ["Montserrat"],
        Garamond: ["Garamond"],
        Playfair:["Playfair Display"],
      },

    },
  },
  plugins: [],
}

