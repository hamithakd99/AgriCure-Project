import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import HeroSection from "../Components/Hero Section/HeroSection";
import ScanningArea from "../Components/BodyContent/ScanningArea";
import Footer from "../Components/Footer Section/Footer";
import AboutUs from "../Components/AboutUs/AboutUs";

function Home() {
  return (
    <div>
      <NavigationBar />
      <HeroSection />
      <div className="scanningArea-wrapper">
      <ScanningArea />
      </div>
      <div className="about-wrapper">
        <AboutUs />
      </div>

      <div className="wrapper-footer pt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
