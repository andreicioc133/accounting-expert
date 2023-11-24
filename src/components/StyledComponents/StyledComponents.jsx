import { styled } from "@mui/material";
import { motion } from "framer-motion";

export const StyledColumnContainer = styled(motion.div)(
  ({ theme, smallScreen, style }) => ({
    display: "flex",
    flexDirection: smallScreen ? "column" : "column",
    width: "95%",
    minHeight: "50vh",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  })
);

export const StyledRowContainer = styled(motion.div)(
  ({ theme, smallScreen, style }) => ({
    display: "flex",
    flexDirection: smallScreen ? "column" : "row",
    width: "95%",
    minHeight: "50vh",
    justifyContent: "center",
    alignItems: "center",
    ...style,
  })
);

export const StyledTitleP = styled(motion.p)(
  ({ theme, smallScreen, style }) => ({
    fontSize: "3rem",
    margin: "0.5rem 0 0 0",
    background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontWeight: "bold",
    textAlign: "center",
    ...style,
  })
);

export const StyledP = styled(motion.p)(({ theme, smallScreen, style }) => ({
  color: theme.palette.primary.white,
  fontSize: "1.20rem",
  paddingRight: "1rem",
  ...style,
}));
