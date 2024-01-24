import React from "react";
import { Helmet } from "react-helmet";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <Helmet>
        <meta
          name="features"
          content="We provide Website development, Application development, and Quality Assurance services"
          // charSet="utf-8"
        />
        <title>features-Nicatch</title>
        <link rel="canonical" href="http://nicatch.com/#feature" />
      </Helmet>
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Features</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
