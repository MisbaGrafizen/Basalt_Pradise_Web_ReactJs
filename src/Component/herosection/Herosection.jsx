import React from "react";
import Mainvideo from "../../../public/heroVideo/Alphabet_For_Web.mp4";

export default function HeroSection() {
  return (
    <>
      <div className=" flex  w-[100%] pl-[10px] pt-[90px] h-[100%]">
        {/* <img className=' rounded-[6px] w-[80%] h-[87vh]  mx-auto' src={mainbg} /> */}

        <div className="rounded-[10px] shadow-sm custom-sahdow  mx-auto w-[80%] h-[87vh]">
          <video
            className=" w-[100%] h-[100%] scale-[0.1px]  rounded-[7px] object-cover  mx-auto"
            autoPlay
            loop
            muted
            controls={false}
          >
            <source src={Mainvideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
}
