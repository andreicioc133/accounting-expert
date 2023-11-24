import React from "react";
import { Container, CssBaseline } from "@mui/material";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useResponsiveValues } from "./utils/CustomHooks";
import { useTheme } from "@emotion/react";
import Footer from "./components/Footer";

const AppRouter = () => {
  const { smallScreen } = useResponsiveValues();
  const theme = useTheme();
  return (
    <Router>
      <CssBaseline>
        <Container
          maxWidth="xxl"
          sx={{
            overflowY: "hidden",
            overflowX: "hidden",
            display: "flex",
            flexDirection: "column",
            minHeight: smallScreen ? "100vh" : "80vh",
            minWidth: "100%",
            // paddingTop: smallScreen ? "0vh" : "5vh",

            alignItems: "center",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <Footer />
      </CssBaseline>
    </Router>
  );
};

export default AppRouter;
