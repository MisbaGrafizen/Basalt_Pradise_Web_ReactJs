import React from "react";
import firstimage from "../../../public/rportersLogo/logo1.png";
import firstimage1 from "../../../public/rportersLogo/logo2.svg";
import firstimage2 from "../../../public/rportersLogo/logo3.svg";
export default function TheSpotLight() {
  return (
    <>
      <div className="w-[80%] px-[15px] font-Poppins flex mx-auto">
        <div className="flex  flex-col  gap-[30px] justify-between relative w-[100%]">
          <div className="  flex flex-col ">
            <h1 className=" flex  font-[700] text-[35px] font-Poppins">
              In The
              <span className=" text-[#fcaf17] pl-[10px]">Spotlight</span>
            </h1>
            <p className=" flex font-[500]  text-[#515151] text-[17px]">
              Dive into a World of Ideas, Stories, News and Inspiration
            </p>
          </div>
          <div className=" flex w-[100%] justify-between gap-[20px] ">
            <div className=" flex w-[330px] h-[340px] gap-[15px] flex-col rounded-[10px] p-[15px] shadow-md bg-[#f4f4f4]">
              <img className=" w-[120px] h-[30px] rounded-[4px]" src={firstimage} />
              <span className=" flex  bg-[#e0e0e0]  w-[100%] h-[1px]"></span>
              <div className=" flex  gap-[10px] flex-col ">
                <h2 className=" flex text-[#202020]  font-[500] text-[15px]">
                  A Tale of Success: 53 Takeoffs Organic Growth to
                  Thrillophilia's Funding Saga
                </h2>
                <p className=" flex  text-[14px]  text-[#515151] t  font-[5\300] ">
                  53Takeoffs soared to become India's leading multi-day tours
                  company within three years, serving 800,000+ travelers in
                  2023. Reporting a turnover of 500+ crores & a 2.5x surge from
                  the previous year, they also reclaimed control of their vision
                  by buying back investor shares in Thrillophilia.
                </p>
              </div>
            </div>
            <div className=" flex w-[330px] h-[340px] gap-[15px] flex-col rounded-[10px] p-[15px] shadow-md bg-[#f4f4f4]">
              <img className=" w-[120px] h-[30px] rounded-[4px]" src={firstimage1} />
              <span className=" flex  bg-[#e0e0e0]  w-[100%] h-[1px]"></span>
              <div className=" flex  gap-[10px] flex-col ">
                <h2 className=" flex text-[#202020]  font-[500] text-[15px]">
                  A Tale of Success: 53 Takeoffs Organic Growth to
                  Thrillophilia's Funding Saga
                </h2>
                <p className=" flex  text-[14px]  text-[#515151] t  font-[5\300] ">
                  53Takeoffs soared to become India's leading multi-day tours
                  company within three years, serving 800,000+ travelers in
                  2023. Reporting a turnover of 500+ crores & a 2.5x surge from
                  the previous year, they also reclaimed control of their vision
                  by buying back investor shares in Thrillophilia.
                </p>
              </div>
            </div>
            <div className=" flex w-[330px] h-[340px] gap-[15px] flex-col rounded-[10px] p-[15px] shadow-md bg-[#f4f4f4]">
              <img className=" w-[120px] h-[30px] rounded-[4px]" src={firstimage2} />
              <span className=" flex  bg-[#e0e0e0]  w-[100%] h-[1px]"></span>
              <div className=" flex  gap-[10px] flex-col ">
                <h2 className=" flex text-[#202020]  font-[500] text-[15px]">
                  A Tale of Success: 53 Takeoffs Organic Growth to
                  Thrillophilia's Funding Saga
                </h2>
                <p className=" flex  text-[14px]  text-[#515151] t  font-[5\300] ">
                  53Takeoffs soared to become India's leading multi-day tours
                  company within three years, serving 800,000+ travelers in
                  2023. Reporting a turnover of 500+ crores & a 2.5x surge from
                  the previous year, they also reclaimed control of their vision
                  by buying back investor shares in Thrillophilia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
