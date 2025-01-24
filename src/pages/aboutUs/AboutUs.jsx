import React from "react";
import Header from "../../Component/header/Header";
import AboutComponenet from "../../Component/aboutUsComponent/AboutComponenet";
import MasterIdea from "../../Component/aboutUsComponent/MasterIdea";
import Jouurney from "../../Component/aboutUsComponent/Jouurney";
import LifeAt from "../../Component/aboutUsComponent/LifeAt";
import AlertBanner from "../../Component/aboutUsComponent/AlertBanner";
import Footer from "../../Component/footer/Footer";
import Celebration from "../../Component/aboutUsComponent/Celebration";
import Preloader from "../../Component/preloader/Preloader";

const AboutUs = () => {
  return (
    <>
      <Header />
  
      <div className=" flex  2xl:w-[1400px] !bg-[#] pt-[180px]   w-[81%] flex-col gap-[34px] h-[100%] mx-auto">
        <AboutComponenet />
        <MasterIdea />
      </div>
      <Jouurney />

      <div className=" flex  2xl:w-[1400px] !bg-[#] pt-[80px]   w-[81%] flex-col gap-[34px] h-[100%] mx-auto">
        <LifeAt />
      
        <AlertBanner />
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
