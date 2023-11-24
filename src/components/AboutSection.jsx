import React from "react";
import { useTheme } from "@mui/material";
import { useResponsiveValues } from "../utils/CustomHooks";
import img from "../assets/ProfileImg.jpg";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const AboutSection = () => {
  const theme = useTheme();
  const { smallScreen } = useResponsiveValues();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "95%",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
        margin: "2vh 0 2vh 0",
        border: `1px solid ${theme.palette.primary.secondary}`,
        boxShadow: `0px 1px 6px 1px ${theme.palette.primary.black}`,
      }}
    >
      {/* ////////////// */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          //   justifyContent: "center",
          width: "50%",
          minHeight: "75vh",
        }}
      >
        <div
          style={{
            height: "50vh",
            width: "20vw",
            border: `1px solid ${theme.palette.primary.secondary}`,
            boxShadow: `0px 1px 6px 1px ${theme.palette.primary.secondary}`,
            borderRadius: "50%",
          }}
        >
          <img
            src={img}
            alt="profile"
            style={{ width: "100%", height: "100%", borderRadius: "50%" }}
          />
        </div>
        <div style={{ width: "70%" }}>
          <p
            style={{
              fontSize: "2rem",
              margin: "0.5rem 0 0 0",
              background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
            }}
          >
            Cioc Rodica - Expert Contabil si Business Manager
          </p>

          <a
            href="mailto:ciocrodica@yahoo.com"
            style={{ textDecoration: "none" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                // justifyContent: "center",
                alignItems: "center",
                width: "80%",
                padding: "0.25rem 0 0.25rem 0.5rem",
                border: `1px solid ${theme.palette.primary.tertiary}`,
                borderRadius: "50px",
              }}
            >
              <EmailIcon
                sx={{
                  fontSize: "1.75rem",
                  color: theme.palette.primary.secondary,
                  alignSelf: "center",
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                  margin: "0",
                  color: theme.palette.primary.secondary,
                  paddingLeft: "0.5rem",
                }}
              >
                ciocrodica@yahoo.com
              </p>
            </div>
          </a>
          <a href="tel:0724763981" style={{ textDecoration: "none" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
                padding: "0.25rem 0 0.25rem 0.5rem",
                border: `1px solid ${theme.palette.primary.tertiary}`,
                borderRadius: "50px",
                // justifyContent: "center",
                marginTop: "0.75rem",
              }}
            >
              <PhoneIphoneIcon
                sx={{
                  fontSize: "1.75rem",
                  color: theme.palette.primary.secondary,
                  //   marginTop: "5px",
                }}
              />
              <p
                style={{
                  fontSize: "1.5rem",
                  margin: "0",
                  color: theme.palette.primary.secondary,
                  paddingLeft: "0.5rem",
                }}
              >
                0724763981
              </p>
            </div>
          </a>
        </div>
      </div>

      {/* //////// */}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          //   alignItems: "center",
          //   justifyContent: "center",
          width: "50%",
          minHeight: "75vh",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "3rem",
              margin: "0.5rem 0 0 0",
              background: `linear-gradient(to right, ${theme.palette.primary.fourth} 0%, ${theme.palette.primary.secondary} 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            De ce sa ne alegi?
          </p>
          <p
            style={{
              color: theme.palette.primary.fourth,
              fontSize: "1.20rem",
              paddingRight: "1rem",
            }}
          >
            <span
              style={{
                color: theme.palette.primary.secondary,
                fontWeight: "bold",
              }}
            >
              {" "}
              Cu o carieră distinsă de peste trei decenii în domeniul
              contabilității, aduc o bogată experiență și un istoric dovedit de
              excelență.
            </span>{" "}
            Călătoria mea în sectorul contabil este marcată de un portofoliu
            bogat și de o listă lungă de clienți mulțumiți, o dovadă a
            profunzimii și lărgimii experienței mele și a calității serviciilor
            pe care le ofer.
            <br />
            <span
              style={{
                color: theme.palette.primary.secondary,
                fontWeight: "bold",
              }}
            >
              Satisfacția clienților a fost întotdeauna în centrul etosului meu
              profesional. Cred în construirea unor relații pe termen lung
              bazate pe încredere, fiabilitate și transparență.
            </span>{" "}
            Abordarea mea este întotdeauna axată pe client, asigurând o atenție
            personalizată și soluții personalizate pentru a satisface nevoile
            specifice ale fiecărui client.
            <br />
            <span
              style={{
                color: theme.palette.primary.secondary,
                fontWeight: "bold",
              }}
            >
              De ce ar trebui să mă aleagă firmele pentru viitoare colaborări?
              Cele trei decenii mele în domeniu nu numai că mi-au perfecționat
              abilitățile tehnice, dar mi-au adus și o înțelegere nuanțată a
              diferitelor sectoare industriale.
            </span>{" "}
            Această perspectivă cuprinzătoare, combinată cu angajamentul față de
            excelență și satisfacția clienților, mă face un partener ideal
            pentru companiile care doresc să navigheze în complexitățile
            finanțelor cu claritate și încredere.
          </p>
        </div>
      </div>

      {/* ////////////// */}
    </div>
  );
};

export default AboutSection;
