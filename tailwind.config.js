/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "page-golden": "#E4DDCE",
        'dark-golden': '#e4ddcd',
        'golden': '#FCF7EB',
        'custom-black': '#1e1e1e',
        'custom-orange' : "#ffd565",
        'custom-red': '#D2784E'
      },
      backgroundImage: {
        'entry': "url('https://cdn.shopify.com/s/files/1/0625/3215/7671/files/1_d8691f22-dd39-4428-aaed-98f7f23d14da_2000x.jpg?v=1676324941')",
        'coctails-pattern': "url('https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Home_Cocktails_Section_2_2000x.jpg?v=1651674579')",
        'footer-pattern' :  "url('https://cdn.shopify.com/s/files/1/0625/3215/7671/files/Footer-min.jpg?v=1651167359&width=2000')",
      }
    },
  },
  plugins: [],
}

