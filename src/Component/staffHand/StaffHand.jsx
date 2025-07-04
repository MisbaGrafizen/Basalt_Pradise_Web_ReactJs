import React, { useEffect, useState } from "react";
import stars from "../../../public/staffhand/stars1.png";
import image1 from "../../../public/Basalt/B10.jpg";
import image11 from "../../../public/Basalt/B15.jpg";
import image2 from "../../../public/Basalt/B12.jpg";
import image22 from "../../../public/Basalt/B14.jpg";
import image222 from "../../../public/Basalt/B11.jpg";
import image3 from "../../../public/Basalt/B5.jpg";
import image33 from "../../../public/Basalt/B1.jpg";
import image333 from "../../../public/Basalt/B3.jpg";
// import breakicon from "../../../public/staffhand/brekfast.jpeg";

import { Utensils, Coffee } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function StaffHand() {
  const [currentImage1, setCurrentImage1] = useState(0);
  const [currentImage2, setCurrentImage2] = useState(0);
  const [currentImage3, setCurrentImage3] = useState(0);
  const navigate = useNavigate();

  const images1 = [image1, image11];

  const images2 = [image222,image22, image2];
  const images3 = [image3, image33, image333];

  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentImage1((prev) => (prev + 1) % images1.length);
    }, 1200);
    return () => clearInterval(interval1);
  }, [images1.length]);

  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentImage2((prev) => (prev + 1) % images2.length);
    }, 1200);
    return () => clearInterval(interval2);
  }, [images2.length]);

  useEffect(() => {
    const interval3 = setInterval(() => {
      setCurrentImage3((prev) => (prev + 1) % images2.length);
    }, 1200);
    return () => clearInterval(interval3);
  }, [images3.length]);




  const handleZenroom = () => {
    navigate("/room-details")
  }
  const handlePrivaterVila = () => {
    navigate("/private-vila-details")
  }

  return (
    <>
      <div className=" px-[10px] 2xl:w-[1300px] items-center  gap-[30px] flex !bg-[#] w-[95%] md:w-[80%] mt-[0px]   h-[90%] mx-auto">
        <div className=" flex  flex-col  gap-[30px] w-[100%] ">
          <div>
            <h1 className=" flex text-[30px] font-Poppins ">
              Holiday{" "}
              <span
                style={{
                  color: "#ffc02d",
                  textShadow: "0 2px 4px rgba(224, 224, 222, 0.4)",
                }}
                className="  text-[#fcaf17] drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(196, 196, 196)]  flex font-[600] px-[6px] font-Poppins"
              >
                Handpicked
              </span>
              <img className=" w-[30px]" src={stars} />
            </h1>

            <p className=" font-Poppins text-[14px] text-[#656565]">
              Waiting with ❤️ for you!
            </p>
          </div>
          <div className=" flex  w-[100%]  overflow-x-auto h-fit  justify-between gap-[20px]">
            <div className=" w-[310px] md:w-[335px] relative h-[490px] overflow-hidden rounded-[12px] flex-shrink-0">
              {images1.map((image, index) => (
                <>
                  <img
                    key={index}
                    className={`absolute top-0 left-0 w-[100%] h-[100%] rounded-b-lg object-cover rounded-[10px] transition-opacity duration-1000 ${currentImage1 === index ? "opacity-100" : "opacity-0"
                      }`}
                    src={image}
                    alt={`Image ${index + 1}`}
                  />
                </>
              ))}
              <div className=" flex  absolute bottom-0  w-[95%]  mx-auto flex-col  left-[0px] right-0  gap-[px] ">
                <div className=" flex items-center  gap-[5px] px-[10px]  font-Poppins text-[12px] text-white font-[400]">
                  <Coffee className="h-[20px] w-[20px] text-[#fff]" />
                  <p className=" mt-[4px]">Breakfast included </p>
                </div>
                <div className=" flex py-[10px] bgStaff h-[150px]  w-[100%] rounded-t-[10px] mx-auto px-[15px]">
                  <div className=" flex  w-[100%] flex-col">
                    <div className="  text-[#fff] font-Poppins flex ">
                      <p> Zen Room</p>
                    </div>
                    <span className=" flex w-[100%] my-[5px] mx-auto h-[1px] bg-[#fff]"></span>

                    <div className=" flex  items-center gap-[6px]">
                      <div className=" flex text-[18px] text-[#fff]  font-Poppins font-[500] ">
                        <p>INR  5,015</p>
                      </div>
                      <div className=" flex flex-col relative">
                        <p className=" flex  pl-[4px] text-[16px] text-[#d4d4d4]  font-Poppins font-[300] ">
                          INR 5,900
                        </p>
                        <span className=" flex w-[85px] left-0 right-0 absolute top-[10px] h-[1px] bg-[#d4d4d4]"></span>
                      </div>
                    </div>
                    <div className=" flex  gap-[10px] mt-[15px]">
                      <a href="tel:8799454980">
                        <div className="w-[50px] border-[1.5px] border-[#ffff] flex justify-center items-center h-[50px] rounded-[6px]">
                          <i className="text-[#fff] text-[21px] fa-solid fa-phone"></i>
                        </div>
                      </a>

                      <div className=" flex w-[80%]  justify-center items-center text-[15px]  font-Poppins rounded-md bg-[#fff] cursor-pointer" onClick={handleZenroom}>
                        <p>Reserve now</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="  flex-shrink-0 w-[310px] md:w-[335px] h-[490px]  relative rounded-[12px]">
              {images2.map((image, index) => (
                <img
                  key={index}
                  className={`absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-[10px] transition-opacity duration-1000 ${currentImage2 === index ? "opacity-100" : "opacity-0"
                    }`}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))}
              <div className=" flex  absolute bottom-0  w-[95%]  mx-auto flex-col  left-[0px] right-0  gap-[px] ">
                <div className=" flex items-center gap-[5px] px-[10px] font-Poppins text-[12px] text-white font-[400]">
                  <Coffee className="h-[20px] w-[20px] text-[#fff]" />
                  <Utensils className="h-[15px] w-[15px] text-[#fff]" />
                  <p>Breakfast & Dinner included </p>
                </div>
                <div className=" flex  py-[10px] bgStaff h-[150px] w-[95%] rounded-t-[10px] mx-auto px-[15px]">
                  <div className=" flex  w-[100%] flex-col">
                    <div className="  text-[#fff] font-Poppins flex ">
                      <p>Private Villa</p>
                    </div>
                    <span className=" flex w-[100%] my-[5px] mx-auto h-[1px] bg-[#fff]"></span>

                    <div className=" flex  items-center gap-[6px]">
                      <div className=" flex text-[18px] text-[#fff]  font-Poppins font-[500] ">
                        <p>INR 15,640</p>
                      </div>
                      <div className=" flex flex-col relative">
                        <p className=" flex  pl-[4px] text-[16px] text-[#d4d4d4]  font-Poppins font-[300] ">
                          INR 18,400
                        </p>
                        <span className=" flex w-[85px] left-0 right-0 absolute top-[10px] h-[1px] bg-[#d4d4d4]"></span>
                      </div>
                    </div>
                    <div className=" flex  gap-[10px] mt-[15px]">
                      <a href="tel:8799454980">
                        <div className="w-[50px] border-[1.5px] border-[#ffff] flex justify-center items-center h-[50px] rounded-[6px]">
                          <i className="text-[#fff] text-[21px] fa-solid fa-phone"></i>
                        </div>
                      </a>
                      <a className=" w-[100%] " href="tel:8799454980">
                        <div className=" flex h-[50px] w-[100%]  justify-center cursor-pointer items-center text-[15px]  font-Poppins rounded-md bg-[#fff]" onClick={handlePrivaterVila}>
                          <p>Reserve now</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex-shrink-0 w-[310px] md:w-[335px] relative h-[490px] rounded-[12px]">
              {/* <img
                className=" flex w-[100%] h-[100%] object-cover rounded-[10px]"
                src={image33}
              /> */}
              {images3.map((image, index) => (
                <img
                  key={index}
                  className={`absolute top-0 left-0 w-[100%] h-[100%] object-cover rounded-[10px] transition-opacity duration-1000 ${currentImage3 === index ? "opacity-100" : "opacity-0"
                    }`}
                  src={image}
                  alt={`Image ${index + 1}`}
                />
              ))}
              <div className=" flex  absolute bottom-0  w-[95%]  mx-auto flex-col  left-[0px] right-0  gap-[px] ">
                <div className=" flex items-center gap-[5px] px-[10px] font-Poppins text-[12px] text-white font-[400]">
                  <Coffee className="h-[20px] w-[20px] text-[#fff]" />
                  <Utensils className="h-[15px] w-[15px] text-[#fff]" />
                  <p>Lunch, Hi-Tea & Dinner included</p>
                </div>
                <div className=" flex py-[10px] bgStaff h-[150px] w-[95%] rounded-t-[10px] mx-auto  px-[15px]">
                  <div className=" flex  w-[100%] flex-col">
                    <div className="  text-[#fff] text-[14px] font-Poppins flex ">
                      <p>One day escape Best picnic place</p>
                    </div>
                    <span className=" flex w-[100%] my-[5px] mx-auto h-[1px] bg-[#fff]"></span>

                    <div className=" flex  items-center gap-[6px]">
                      <div className=" flex text-[18px] text-[#fff]  font-Poppins font-[500] ">
                        <p>INR 2150</p>
                      </div>
                      {/* <div className=" flex flex-col relative">
                        <p className=" flex  pl-[4px] text-[16px] text-[#d4d4d4]  font-Poppins font-[300] ">
                          INR 74,002
                        </p>
                        <span className=" flex w-[85px] left-0 right-0 absolute top-[10px] h-[1px] bg-[#d4d4d4]"></span>
                      </div> */}
                    </div>
                    <div className=" flex  gap-[10px] mt-[15px]">
                      <a href="tel:8799454980">
                        <div className="w-[50px] border-[1.5px] border-[#ffff] flex justify-center items-center h-[50px] rounded-[6px]">
                          <i className="text-[#fff] text-[21px] fa-solid fa-phone"></i>
                        </div>
                      </a>
                      <a  className=" w-[100%]" href="https://wa.me/918799454980" target="_blank" rel="noopener noreferrer">
                        <div className=" flex w-[100%] h-[50px]  justify-center items-center text-[15px]  font-Poppins rounded-md bg-[#fff]">
                          <p>Reserve now</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
