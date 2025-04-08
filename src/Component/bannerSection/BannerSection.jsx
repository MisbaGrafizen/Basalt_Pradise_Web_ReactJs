import React from "react";
// import bgimage from "../../../public/banner/bgimage-1.jpg"
import bgimage from "../../../public/banner/bgimage-2.jpg"

export default function BannerSection() {
  return (
    <>
      <div className="relative  overflow-hidden rounded-xl md:px-[10px] 2xl:w-[1300px] items-center   gap-[30px] flex !bg-[#] md:w-[79%]  w-[90%]  h-[230px] mx-auto">
        {/* Background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0000]/100 to-transparent z-10" />

        {/* Content container */}
        <div className="relative z-20  px-[20px] py-[18px] flex items-center">
          <div className="w-full max-w-xl  text-white">
            <h2 className="md:placeholder:text-[20px] w-[720px] text-[16px] md:text-[20px] leading-7 text-justify  font-[600] mb-[10px] font-Poppins ">
              Destination wedding ?
              <br /> Plan a Luxurious Wedding with <br />  complimentary  Honeymoon packages!

            </h2>
            <a href="https://wa.me/918799454980" target="_blank" rel="noopener noreferrer">
              <button className="bg-[#ff8000] mt-[40px] text-[#ffffffcb] text-[16px] w-[130px] py-[8px] font-Poppins rounded-md transition-colors font-[500]">
                Get a Quote
              </button>
            </a>

            {/* <p className=" text-[13px]  font-Poppins pt-[5px] my-[5px]">
            The only Resort with eye evidence of large landscaping areas and Pavagadh Hill view.
            </p> */}
          </div>
        </div>

        {/* Images container */}
        <div className="absolute   w-[100%] left-[0px] flex">
          {/* Left image */}
          <div className="  w-[100%] relative">
            <img
              src={bgimage}
              alt="Group of friends enjoying sunset"
              className="!md:w-[1800px] w-[100%] p object-cover h-[230px] md:h-full "
            />
          </div>
          {/* Right image */}
          {/* <div className="flex-1 relative">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-22%20at%2011.00.46%E2%80%AFAM-KCK2if8P2YrXxa0RdcTuexVRPEhIvS.png"
              alt="People toasting with wine glasses"
              className="w-full h-full object-cover object-right"
            />
          </div> */}
        </div>
      </div>
    </>
  );
}
