import React from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import GenericBtn from "./GenericComponents.jsx/GenericBtn";
const NavBar = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const buttonsData = [{}];

  return (
    <nav
      style={{
        display: "flex",
        width: "99%",
        minHeight: "10vh",
        backgroundColor: "red",
      }}
    >
      <div>asd</div>
    </nav>
  );
};

export default NavBar;
