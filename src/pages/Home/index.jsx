import React from "react";
import Slider from "../../Sections/Slider";
import OurBestServices from "../../Sections/OurBestServices";
import { Helmet, HelmetProvider } from "react-helmet-async";
import OurBestServicesMore from "../../Sections/OurBestServicesMore";
import FeaturedCaseStudy from "../../Sections/FeaturedCaseStudy";
import OurProffessionalMembers from "../../Sections/OurProffessionalMembers";


function Home() {
  return (
    <div>
      <HelmetProvider>
          <Helmet>
            <title>Home</title>
          </Helmet>
      </HelmetProvider>
      <Slider></Slider>
      <OurBestServices></OurBestServices>
      <OurBestServicesMore></OurBestServicesMore>
      <FeaturedCaseStudy></FeaturedCaseStudy>
      <OurProffessionalMembers></OurProffessionalMembers>
    </div>
  );
}

export default Home;
