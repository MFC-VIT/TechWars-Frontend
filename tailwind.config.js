/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main_font: "#fffdfd", //main white text color
        defend_button: "#bf0907db", 
        attack_button: "#d922224d",
        gray_bg: "#5b505099", // waiting room and quiz
        red_border: "#a62C2b",
        submit_green: "#72be3d4d", //submit button quiz
        next_purple: "#5f3dbe4d", //next button quiz
        purple_button_bg: "#26004266", //button bg for login and troop count
        black_border: "#000000", //attack button
        inner_font: "#d9d9d9", //inner font color having a border
        font_border_blue: "#14019d", 
        font_border_red: "#ff0000",
        font_border_green: "#ff0000",
        blue_bg: "#4bb9f0cc", //victory and defeat page
        black_text: "#130d24" // vitory and defeat page
      },
      fontFamily: {
        aquire: "aquire",
        battle_star: "battle_star_italic",
        exo_space: "exo_space",
        good_times: "good_times_regular",
        solo_extra_italic: "soloist_extra_italic",
        star_jedi: "star_jedi"
      }
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-stroke': {
          '-webkit-text-stroke': '0.75px black',
        },
        '.text-stroke-2': {
          '-webkit-text-stroke': '2px black',
        },
        '.text-stroke-white': {
          '-webkit-text-stroke': '2px white',
        },
      }

      addUtilities(newUtilities)
    },
  ],
};
