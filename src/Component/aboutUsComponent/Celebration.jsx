import React from "react";
import image1 from "../../../public/Basalt Final/B4.jpg";

export default function Celebration() {
  return (
    <>
      <div className=" w-[100%] mx-auto  pb-[50px]  pt-[20px] ">
        <div className="bg-[#f4f6f9]  gap-[30px] shadow-md  font-Poppins flex flex-col rounded-[14px] py-[30px]  px-[30px] border border-gray-100  ">
          <div className=" flex justify-between items-center w-[100%] ">
            <h1 className=" flex text-[30px]  font-[600]">
              {" "}
              Thrilling Celebrations at <span className=" flex font-[400] pl-[10px]">Basalt Pradise{" "}</span>
            </h1>
            <div className=" flex gap-[30px]">
            <div className="  text-[#ff8000] cursor-pointer justify-center items-center   shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] ">
                <i class="fa-solid fa-chevron-left text-[14px]"></i>
              </div>
              <div className="  text-[#ff8000]  justify-center items-center  shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] ">
                <i class="fa-solid fa-chevron-right text-[14px]"></i>
              </div>
            </div>
          </div>
          <div className="   flex w-[100%] justify-between ">
            <div className=" pt-[30px] w-[50%]  gap-[20px] flex flex-col  ">
              <div className="  leading-4flex flex-col  text-[23px]  font-[600] gap-[5px]   ">
                <h1>Celebrating Abhishek Puri’s</h1>
                <div className=" w-fit">
                  <h2 className=" flex text-[#fcaf17] ">
                    {" "}
                    7 Impactful Years at Thrillophilia
                  </h2>
                  <div className=" flex w-[100%] bg-[#fcaf17] h-[2px]"></div>
                </div>
              </div>
              <p className=" flex  font-[400] text-justify  w-[95%] text-[16px] text-[#515151] ">
                “It’s been a joyride for Abhishek Puri as the VP-Growth at
                Thrillophilia! He has emerged as a resilient leader, facing
                challenges head-on. With innovative business strategies and
                meaningful partnerships, Abhishek over the years has taken
                Thrillophilia to global recognition. Whether in the boardroom or
                on the football field, he reflects a winning spirit, making him
                stand out in all his endeavors."
              </p>
            </div>
            <div className=" flex  gap-[20px] overflow-y-auto w-[42%]">
              <img
                className=" flex rounded-[10px] w-[230px] h-[320px] object-cover"
                src={image1}
              />
              <img
                className=" flex rounded-[10px] w-[230px] h-[320px] object-cover"
                src={image1}
              />
              <img
                className=" flex rounded-[10px] w-[230px] h-[320px] object-cover"
                src={image1}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
