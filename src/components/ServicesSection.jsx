import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import {
  StyledColumnContainer,
  StyledRowContainer,
  StyledTitleP,
  StyledP,
} from "./StyledComponents/StyledComponents";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  const data = [
    {
      id: 0,
      title: "titlu",
      services: [
        { id: 0, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 1, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 2, title: "titlu serviciu", description: "descriere serviciu" },
      ],
    },
    {
      id: 1,
      title: "titlu",
      services: [
        { id: 0, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 1, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 2, title: "titlu serviciu", description: "descriere serviciu" },
      ],
    },
    {
      id: 2,
      title: "titlu",
      services: [
        { id: 0, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 1, title: "titlu serviciu", description: "descriere serviciu" },
        { id: 2, title: "titlu serviciu", description: "descriere serviciu" },
      ],
    },
  ];

  return (
    <StyledColumnContainer
      smallScreen={smallScreen}
      style={{ backgroundColor: "red", justifyContent: "flex-start" }}
    >
      <StyledTitleP smallScreen={smallScreen}>Servicii</StyledTitleP>
      <StyledRowContainer
        smallScreen={smallScreen}
        style={{ justifyContent: "space-around" }}
      >
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </StyledRowContainer>
    </StyledColumnContainer>
  );
};

export default ServicesSection;
