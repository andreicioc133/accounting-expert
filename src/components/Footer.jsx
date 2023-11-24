import React from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";

const Footer = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "10vh",
        bottom: 0,
        backgroundColor: theme.palette.primary.main,
      }}
    >
      Footer
    </div>
  );
};

export default Footer;
