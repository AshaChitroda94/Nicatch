import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

import React from "react";

export const About = (props) => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedScreen = useMediaQuery(theme.breakpoints.up("md"));
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <h2>About Us</h2>
          </div>

          <div
            className="col-xs-12 col-md-6"
            style={{
              // display: isMedScreen | isSmallScreen ? "flex" : null,
              // alignItems: isMedScreen | isSmallScreen ? "center" : null,
              // justifyContent: isMedScreen | isSmallScreen ? "center" : null,
              display: isLargeScreen ? null : "flex",
              alignItems: isLargeScreen ? null : "center",
              justifyContent: isLargeScreen ? null : "center",
            }}
          >
            {" "}
            <img
              src="img/about.jpg"
              className="img-responsive"
              alt=""
              style={{
                maxHeight: "340px",
                // display: isLargeScreen ? null : "flex",
                // alignItems: isLargeScreen ? null : "center",
                // justifyContent: isLargeScreen ? null : "center",
              }}
            />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
