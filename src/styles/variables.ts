const palette = {
  grey: "rgba(0,0,0,0.1)",
  "grey-dark": "#a4a4a4",
  "background-grey": "#f2f2f2",
  "background-page": "#efefbb",
  "backgound-stat": "#3B0E13",
  black: "#000000",
  white: "#FFFFFF",
  shine: "#f8f8f888",
  shadow: "#64646480",
  "dark-red": "#6e0000",
  types: {
    fire: "#F08030",
    grass: "#9bcc50",
    electric: "#F8D02F",
    water: "#6890F0",
    ground: "#DFC068",
    rock: "#B8A038",
    fairy: "#F0B6BC",
    poison: "#b97fc9",
    bug: "#A8B820",
    dragon: "#7038F8",
    psychic: "#F85888",
    flying: "#A890F0",
    fighting: "#C03028",
    normal: "#A8A879",
    ice: "#98D7D8",
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0",
  },
  "types-light": {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#c1e7e7",
    ghost: "#a898c3",
    dark: "#b29887",
    steel: "#d4d4e2",
  },
};

const sizes = {
  page: {
    minWidth: "100vw",
    maxWidth: "100vw",
    minHeight: "100vh",
  },
  card: {
    height: "25.6rem",
    width: "20rem",
  },
};

const variables = { palette, sizes };

export default variables;
