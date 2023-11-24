import React, { useState } from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import {
  StyledColumnContainer,
  StyledRowContainer,
  StyledTitleP,
  StyledP,
} from "./StyledComponents/StyledComponents";

const ServiceCard = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();
  const [open, setOpen] = useState(false);
  const [description, setDescription] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <StyledTitleP smallScreen={smallScreen}>Title</StyledTitleP>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {/* MAP IMPLEMENTATION */}
            <div>
              <StyledP>ASD</StyledP>
            </div>
            <div>
              <StyledP>ASD</StyledP>
            </div>

            {/* MAP IMPLEMENTATION */}
          </div>
          {open ? <div>asd</div> : <></>}
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
