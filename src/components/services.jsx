import React from "react";
import { Helmet } from "react-helmet";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <Helmet>
        <meta
          name="service"
          content="We provide Website development, Application development, and Quality Assurance services"
          // charSet="utf-8"
        />
        <title>service-Nicatch</title>
        <link rel="canonical" href="http://nicatch.com/service" />
      </Helmet>
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            We are very pleased and proud to offer our below services to our
            clients.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
