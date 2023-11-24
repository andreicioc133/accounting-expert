import React from "react";
import { useTheme } from "@emotion/react";
import AboutSection from "../components/AboutSection";
import IntroSection from "../components/IntroSection";
import ServicesSection from "../components/ServicesSection";
const HomePage = () => {
  const theme = useTheme();
  return (
    <>
      <IntroSection />
      <AboutSection />
      <ServicesSection />
    </>
  );
};

export default HomePage;
