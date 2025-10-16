import React from "react";
import Header from "../../Component/header/Header";
import HeroSection from "../../Component/herosection/Herosection";
import { Review } from "../../Component/review/Review";
import StaffHand from "../../Component/staffHand/StaffHand";
import BannerSection from "../../Component/bannerSection/BannerSection";
import Footer from "../../Component/footer/Footer";
import BookingAillence from "../../Component/bookingAliance/BookingAillence";
import NoticeCo from "../../Component/notice/NoticeCo";
import TheSpotLight from "../../Component/spotlight/TheSpotLight";
import Preloader from "../../Component/preloader/Preloader";
import Faq from "../../Component/calculativeSection/Faq";
import Gallery from "../../Component/gallery/Gallery";
import CalculativeSection from "../../Component/calculativeSection/CalculativeSection ";
import CircularGallery from "../../Component/Reactbits/CircularGallery";
import WinterExperience from "../../Component/uicomponent/WinterExperience";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Preloader /> */}
      <div className=" w-[100%] bg-[#ffffffc5]">
        <div className=" 2xl:w-[1300px] !bg-[#]    flex flex-col gap-[62px] h-[100%] mx-auto">
          <HeroSection />
          <Gallery />
          <Review />
          <CalculativeSection />
          <StaffHand />

          <BookingAillence />
          <WinterExperience  />
          <BannerSection />
          <Faq />
          {/* <div className=" flex flex-col mx-auto w-[75%] scale-105" style={{ height: '400px', position: 'relative' }}>

           

            <CircularGallery />
          </div> */}
          {/* <TheSpotLight /> */}
          <div>


          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
