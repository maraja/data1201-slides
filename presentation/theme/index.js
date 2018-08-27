import createTheme from "spectacle/lib/themes/default";

const redAccent = "#ff1744";
const orangeAccent = "#ffab40";
const amberAccent = "#ffd740";
const green = "#4EB382";
const greenAccent = "#69f0ae";
const teal = "#009688";
const tealAccent = "#64ffda";
const cyan = "#00bcd4";
const lightBlue = "#03a9f4";
const lightBlueAccent = "#40c4ff";
const blue = "#2196f3";
const blueAccent = "#448aff";
const darkBlue = "#104773";
const indigo = "#3f51b5";
const indigoAccent = "#3f51b5";
const purple = "#9c27b0";
const blueGrey = "#607d8b";
const grey = "#9e9e9e";
const lightGrey = "#e0e0e0";
const darkGrey = "#424242";

export const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE",
    redAccent: "#ff1744",
    orangeAccent: "#ffab40",
    amberAccent: "#ffd740",
    greenAccent: "#69f0ae",
    teal: "#009688",
    tealAccent: "#64ffda",
    cyan: "#00bcd4",
    lightBlue: "#03a9f4",
    lightBlueAccent: "#40c4ff",
    blue: "#2196f3",
    blueAccent: "#448aff",
    indigo: "#3f51b5",
    indigoAccent: "#3f51b5",
    purple: "#9c27b0",
    blueGrey: "#607d8b",
    grey: "#9e9e9e",
    lightGrey: "#e0e0e0",
    darkGrey: "#424242"
  },
  {
    primary: "Montserrat",
    secondary: "Roboto"
  }
);

export const blueTheme = createTheme(
  {
    bg: blue,
    "bg-alt": blueAccent,
    primary: "white",
    secondary: lightGrey,
    tertiary: darkBlue,
    quaternary: "#072034"
  },
  {
    primary: "Montserrat",
    secondary: "Roboto"
  }
);

export const tealTheme = createTheme(
  {
    bg: teal,
    "bg-alt": blue,
    primary: "white",
    secondary: lightGrey,
    tertiary: "#104773",
    quaternary: "#072034"
  },
  {
    primary: "Montserrat",
    secondary: "Roboto"
  }
);

export const greenTheme = createTheme(
  {
    bg: green,
    "bg-alt": greenAccent,
    primary: "white",
    secondary: lightGrey,
    tertiary: "#104773",
    quaternary: "#072034"
  },
  {
    primary: "Montserrat",
    secondary: "Roboto"
  }
);
