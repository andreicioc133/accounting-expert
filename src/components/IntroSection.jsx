import React from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import {
  StyledColumnContainer,
  StyledRowContainer,
  StyledTitleP,
  StyledP,
} from "./StyledComponents/StyledComponents";
import LandscapeImg2 from "../assets/LandscapeIntroImg2.jpg";
import NavBar from "./NavBar";
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import GenericBtn from "./GenericComponents.jsx/GenericBtn";

const IntroSection = () => {
  const background = LandscapeImg2;
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  return (
    <StyledColumnContainer
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minWidth: "100vw",
        justifyContent: "flex-start",
      }}
      smallScreen={smallScreen}
    >
      <NavBar />
      <StyledColumnContainer
        smallScreen={smallScreen}
        style={{
          // justifyContent: "flex-start",
          width: "60vw",
          //   backgroundColor: "red",
          minHeight: "30vh",
        }}
      >
        {" "}
        <StyledTitleP smallScreen={smallScreen}>
          Accounting Expert For You
        </StyledTitleP>
        <StyledTitleP smallScreen={smallScreen} style={{ fontSize: "2rem" }}>
          Oferim servicii complete de Contabilitate, Expertiza Contabila,
          Solutii Software Si Asigurari.
        </StyledTitleP>
      </StyledColumnContainer>

      <StyledRowContainer
        smallScreen={smallScreen}
        style={{
          justifyContent: "space-around",
          minHeight: "10vh",
          width: "60%",
        }}
      >
        <a
          href="mailto:ciocrodica@yahoo.com"
          style={{ textDecoration: "none", flex: "0.4" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.25rem 0 0.25rem 0.5rem",
              background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
              borderRadius: "50px",
              width: "100%",
            }}
          >
            <EmailIcon
              sx={{
                fontSize: "2.5rem",
                color: theme.palette.primary.main,
                alignSelf: "center",
              }}
            />
            <StyledP
              smallScreen={smallScreen}
              style={{
                fontSize: "2rem",
                color: theme.palette.primary.main,
                margin: 0,

                fontWeight: "bold",
              }}
            >
              ciocrodica@yahoo.com
            </StyledP>
          </div>
        </a>
        <a
          href="tel:0724763981"
          style={{ textDecoration: "none", flex: "0.4" }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
              width: "100%",
              borderRadius: "50px",
              justifyContent: "center",
              padding: "0.25rem 0 0.25rem 0.5rem",
            }}
          >
            <PhoneIphoneIcon
              sx={{
                fontSize: "2.5rem",
                color: theme.palette.primary.main,
                //   marginTop: "5px",
              }}
            />
            <StyledP
              smallScreen={smallScreen}
              style={{
                fontSize: "2rem",
                color: theme.palette.primary.main,
                fontWeight: "bold",
                margin: 0,
              }}
            >
              0724763981
            </StyledP>
          </div>
        </a>
      </StyledRowContainer>
      <StyledColumnContainer
        smallScreen={smallScreen}
        style={{ minHeight: "0", width: "40%", marginTop: "5rem" }}
      >
        {" "}
        <GenericBtn
          text={"Afla mai mult"}
          style={{
            border: `1px solid ${theme.palette.primary.secondary}`,
            background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
            "&:hover": {
              "&:hover": {
                backgroundColor: theme.palette.primary.secondary,
                color: theme.palette.primary.main,
                borderColor: theme.palette.primary.secondary,
              },
              boxShadow: `0px 1px 2px 2px ${theme.palette.primary.secondary}`,
            },
            color: theme.palette.primary.white,
            border: `1px solid ${theme.palette.primary.fourth}`,
            fontSize: "1rem",
            width: "15vw",
          }}
        />
      </StyledColumnContainer>
    </StyledColumnContainer>
  );
};

export default IntroSection;
