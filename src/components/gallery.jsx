import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  console.log("props", props);
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>PORTFOLIO</h2>
          {/* <img src={speedhome} alt="s" /> */}
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
