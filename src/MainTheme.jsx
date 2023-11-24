import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { useAppContext } from "./Store";

export const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      secondary: "#5D5C61",
      tertiary: "#B1A296",
      fourth: "#557A95",
      fifth: "#7395AE",
      black: "#000000",
      white: "#FFFFFF",
      // gray: "#0E0E0E",
      // onDarkPhoto: "#FFFFFF",
    },
  },
});

export const MainThemeLight = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
      secondary: "#FB2576",
      //   secondary: "#03C4A1",
      secondaryDarker: "#00A085",
      tertiary: "#000000",
      white: "#FFFFFF",
      gray: "#0E0E0E",
      onDarkPhoto: "#FFFFFF",
    },
  },
});

const MainThemeProvider = ({ children }) => {
  return <ThemeProvider theme={MainTheme}>{children}</ThemeProvider>;
};

export default MainThemeProvider;
