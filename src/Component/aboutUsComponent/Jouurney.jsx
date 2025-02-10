import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import imag1 from "../../../public/Basalt Final/B1.jpg";
import imag2 from "../../../public/Basalt Final/B6.jpg";
import imag3 from "../../../public/Basalt Final/B3.jpg";
import imag4 from "../../../public/Basalt Final/B9.jpg";

export default function Jouurney() {
  const [scrollYProgress, setScrollYProgress] = useState(0);

 
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const documentHeight = document.body.scrollHeight - window.innerHeight;

      // Multiplier to control speed
      const multiplier = 1.5; // Increase to make the line grow/shrink faster
      const progress = Math.min((scrollTop / documentHeight) * multiplier, 1); // Ensures it stays between 0 and 1
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
                  src={imag1}
                />
              </div>

              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2011
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam .
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam .
                </p>
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2014
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex order-1 md:order-2  md:w-[43%]  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src={imag2}
                />
              </div>
            </div>
            <div className=" flex w-[100%] md:flex-row flex-col   items-center justify-between">
              <div className=" flex ] md:w-[43%]  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src={imag3}
                />
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2019
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam .
                </p>
              </div>
            </div>

            <div className=" flex w-[100%]  items-center  md:flex-row flex-col  justify-between">
              <div className=" flex  flex-col order-2 md:order-1  gap-[20px] w-[95%] md:w-[43%]  ">
                <div>
                  <h1 className=" flex font-[700] text-[28px] ">
                  Sed ut perspiciatis unde omnis iste natus 
                  </h1>
                </div>
                <p className=" flex  text-[16px] text-justify font-[400]  ">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam .
                </p>
              </div>
              <div className=" md:flex  hidden bg-[#f4f6f9]  font-[600] pb-[10px]   absolute left-0 right-0 mx-auto w-[150px] flex-col gap-[1x]">
                <h1 className=" text-center text-[40px] text-[#ff8000]">
                  2023
                </h1>
                <div className="  w-[40px] h-[40px] rounded-[100%] mx-auto  basalt-button"></div>
              </div>
              <div className=" flex md:w-[43%]  order-1 md:order-2  ">
                <img
                  className=" flex  rounded-[8px] object-cover"
                  src={imag4}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
