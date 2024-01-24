import { Image } from "./image";
import React from "react";
import { useTheme } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Gallery = (props) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const isMedScreen = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>PORTFOLIO</h2>
          <p>
            Here are some glimpse of projects we have completed. You can visit
            each website by just click of your index finger.
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    onClick={d.link}
                    style={{ marginBottom: isSmallScreen ? "5px" : "" }}
                  >
                    <a href={d.link} target="_blank" rel="noreferrer">
                      <Image
                        title={d.title}
                        // largeImage={d.largeImage}
                        smallImage={d.smallImage}
                      />
                    </a>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
