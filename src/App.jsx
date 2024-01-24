import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import { Helmet } from "react-helmet";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <>
      <Helmet>
        <meta
          name="Website"
          content="We provide Website development, Application development, and Quality Assurance services. We are thinking about your product and suggest ideas and technologies which is currently trending. We are providing solutions for Mobile Technology and Web Technology."
          // charSet="utf-8"
        />
        <title>
          Nicatch | Website and App development company | software design and
          development
        </title>
        <link rel="canonical" href="http://nicatch.com" />
      </Helmet>
      <div>
        <Navigation />
        <Header data={landingPageData.Header} />
        <Features data={landingPageData.Features} />
        <About data={landingPageData.About} />
        <Services data={landingPageData.Services} />
        <Gallery data={landingPageData.Gallery} />
        <Testimonials data={landingPageData.Testimonials} />
        <Team data={landingPageData.Team} />
        <Contact data={landingPageData.Contact} />
      </div>
    </>
  );
};

export default App;
