import React from "react";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Header = (props) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <header id="header">
      <div className="intro" style={{ width: isSmallScreen ? "111%" : "100%" }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Get a Quote Now
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
