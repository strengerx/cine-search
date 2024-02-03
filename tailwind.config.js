/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/3.5": "1fr 3.5fr",
        "1/1.75": "1fr 1.75fr",
      },
      fontFamily: {
        "syne": "'Syne', sans-serif;",
        "jose": "'Josefin Sans', sans-serif;"
      },
      minHeight: {
        "calc-80": "calc(100% - 5rem)",
      },
      maxHeight: {
        "1/2": "50%",
      },
      aspectRatio: {
        "2/3": "2/3",
      }, padding: {
        ".5": "2px"
      },
      width: {
        "min(90%,350px)": "min(90%,350px)"
      }
    },
  },
  plugins: [],
}

