import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imag1 from "../../../public/Basalt/B1.jpg";
import imag2 from "../../../public/Basalt/B6.jpg";
import imag3 from "../../../public/Basalt/B3.jpg";
import imag4 from "../../../public/Basalt/B9.jpg";

export default function Jouurney() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

 
  // useEffect(() => {

  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     const documentHeight = document.body.scrollHeight - window.innerHeight;

  //     // Multiplier to control speed
  //     const multiplier = 1.5; // Increase to make the line grow/shrink faster
  //     const progress = Math.min((scrollTop / documentHeight) * multiplier, 1); // Ensures it stays between 0 and 1
  //     setScrollYProgress(progress);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);



  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;
      const offsetThreshold = 606; // 1.5 cm in pixels
  
      // Ensure animation starts only after scrolling 56px
      const adjustedScroll = Math.max(scrollTop - offsetThreshold, 0);
  
      // Multiplier to control speed
      const multiplier = 2; // Increase to make the line grow/shrink faster
      const progress = Math.min((adjustedScroll / documentHeight) * multiplier, 1); // Ensures it stays between 0 and 1
      setScrollYProgress(progress);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <>
      <div className="w-[100%] bg-[#f4f6f9] mt-[40px]   relative overflow-hidden px-[10px] font-Poppins flex mx-auto">
        <div className="flex  flex-col justify-between py-[50px] gap-[50px] relative w-[95%] md:w-[80%] mx-auto">
          <div className=" flex  flex-col gap-[1px]">
            <h1 className=" flex font-[600] text-[25px] md:text-[38px] ">
              Basalt Paradise's{" "}
              <span className=" pl-[10px] flex text-[#fcaf17]"> Journey</span>
            </h1>
            <p className=" flex  text-[15px] md:text-[17px] text-justify font-[500]  ">
              Traversing the Path of Adventure, One Remarkable Memory at a Time.
            </p>
          </div>
          <div className=" flex w-[100%] flex-col relative gap-[80px]">
            {/* <span className=" flex w-[2.8px] absolute   items-center justify-center  left-0 right-0 mx-auto top-[150px]  h-[80%] bg-[#ff8000]"></span> */}
            <motion.div
              className="absolute hidden  md:flex top-[190px] left-[50%] w-[4px] bg-[#ff8000] "
              style={{
                height: `${scrollYProgress * 78}%`, // Adjusted height with controlled speed
                transform: "translateX(-50%)",
              }}
            />
            <div className=" flex  flex-col md:flex-row  w-[100%] relative  items-center   justify-between">
              <div className=" flex md:w-[43%]  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840370/yexlwgv1odu7gks0zut7.jpg"
                  alt="2011"
                />
              </div>

              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2021
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex  flex-col  gap-[20px] md:w-[43%]  md:mt-0 mt-[20px] w-[90%] ">
                <div>
                  <h1 className=" flex font-[700] text-[28px] ">
                    Igniting a
                    <span className=" pl-[10px] font-[600] flex text-[#fcaf17]">
                      {" "}
                      Vision .
                    </span>
                  </h1>
                  <h1 className=" flex font-[700] text-[28px] ">
                    Infusing
                    <span className=" pl-[10px] font-[600] flex text-[#fcaf17]">
                      {" "}
                      Basalt.
                    </span>
                  </h1>
                </div>

                <p className=" flex  text-[14px] md:text-[16px] text-justify font-[400]  ">
                The foundation of Basalt Paradise was laid with a vision to create an unparalleled retreat amidst nature. Inspired by the stunning landscapes and tranquil surroundings, we began our journey to craft a resort that blends comfort with adventure. What started as a dream soon took shape, as we meticulously planned and built the initial infrastructure, ensuring every detail exuded elegance and serenity.
                </p>
              </div>
            </div>
            <div className=" flex w-[100%] md:flex-row  flex-col items-center justify-between">
              <div className=" flex order-2 md:order-1  flex-col  gap-[20px] w-[90%] mt-[20px] md:mt-0 md:w-[43%]  ">
                <div>
                  <h1 className=" flex font-[700] text-[28px] ">
                    Investments & Breakthroughs
                  </h1>
                </div>
                <p className=" flex  text-[16px] text-justify font-[400]  ">
                With growing recognition and an increasing number of visitors, we expanded our offerings to elevate guest experiences. We introduced premium accommodations, exclusive amenities, and immersive activities, making Basalt Paradise a preferred choice for travelers, honeymooners, and corporate retreats.
                </p>
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2022
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex order-1 md:order-2  md:w-[43%]  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840371/pvzwlffwtndejk1oofkw.jpg"
                             alt="2014"
                />
              </div>
            </div>
            <div className=" flex w-[100%] md:flex-row flex-col   items-center justify-between">
              <div className=" flex ] md:w-[43%]  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840371/txggysorxbhfslfza7jd.jpg"
                             alt="2019"
                />
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2023
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex  flex-col  gap-[20px] w-[90%] md:w-[43%]  ">
                <div>
                  <h1 className=" flex font-[700]  text-[20px] mt-[20px] md:mt-[0px] md:text-[28px] ">
                    A Year of Innovation and Industry Recognition
                  </h1>
                </div>
                <p className=" flex  text-[16px] text-justify font-[400]  ">
                Our commitment to excellence led us to significant milestones. This year marked the introduction of state-of-the-art dining experiences, world-class wellness facilities, and a hospitality service that redefined luxury. We also received industry accolades for our outstanding contributions to the tourism and hospitality sector.
                </p>
              </div>
            </div>

            <div className=" flex w-[100%]  items-center  md:flex-row flex-col  justify-between">
              <div className=" flex  flex-col order-2 md:order-1  gap-[20px] w-[95%] md:w-[43%]  ">
                <div>
                  <h1 className=" flex font-[700] text-[28px] ">
                   Elevating Luxury, Redefining Hospitality

                  </h1>
                </div>
                <p className=" flex  text-[16px] text-justify font-[400]  ">
                Today, Basalt Paradise stands as a symbol of sophistication and warmth, welcoming guests from across the globe. Our latest renovations and expansions feature exquisite architecture, a rejuvenating spa, and sustainable tourism initiatives, ensuring a seamless blend of opulence and responsibility toward nature
                </p>
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2024
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex md:w-[43%]  order-1 md:order-2  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840373/odsq0dpiz2usacvwrnak.jpg"
                             alt="2023"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
