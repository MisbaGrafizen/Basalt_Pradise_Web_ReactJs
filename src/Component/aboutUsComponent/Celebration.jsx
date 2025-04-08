import React, { useRef, useState } from "react";
import image1 from "../../../public/Basalt/B4.jpg";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Celebration() {
  const scrollContainerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };



  const images = [
    "https://res.cloudinary.com/demjxtyj8/image/upload/v1744006420/amjykaqcci5zsu4tccyz.jpg",
    "https://res.cloudinary.com/demjxtyj8/image/upload/v1744006365/azoz8ub6lytcusgqczf3.jpgg",
    "https://res.cloudinary.com/demjxtyj8/image/upload/v1744006420/amjykaqcci5zsu4tccyz.jpg",
    "https://res.cloudinary.com/demjxtyj8/image/upload/v1744006365/azoz8ub6lytcusgqczf3.jpgg",
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentIndex(null);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      <div className=" w-[100%] mx-auto  pb-[50px]  pt-[20px] ">
        <div className="bg-[#f4f6f9]  gap-[30px] shadow-md  font-Poppins flex flex-col rounded-[14px] py-[30px] px-[20px]  md:px-[30px] border border-gray-100  ">
          <div className=" flex  justify-between items-center w-[100%] ">
            <h1 className=" flex md:flex-row flex-col  md:text-[30px] text-[25px]  font-[600]">
              {" "}
              Thrilling Celebrations & Achievements
              {/* <b className=" flex font-[400] md:pl-[10px]">Basalt Pradise{" "}</b> */}
            </h1>
            <div className=" hidden md:flex gap-[30px]">
              <button className="  text-[#ff8000] cursor-pointer justify-center items-center   shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] " onClick={scrollLeft}>
                <i className="fa-solid fa-chevron-left text-[14px]"></i>
              </button>
              <button className="  text-[#ff8000]  justify-center items-center  shadow-md flex w-[60px] rounded-[100%] bg-[#fff] h-[60px] " onClick={scrollRight}>
                <i className="fa-solid fa-chevron-right text-[14px]"></i>
              </button>
            </div>
          </div>
          <div className="  flex md:flex-row flex-col  w-[100%] justify-between ">
            <div className=" pt-[30px] md:order-1 order-2 md:w-[50%] flex flex-col gap-[20px]">
              <div className="  md:leading-4 flex flex-col  text-[23px]  font-[600] gap-[5px]   ">
                <h1>Thrilling Celebrations & Achievements</h1>
                <div className=" w-fit mt-[10px]">
                  <h2 className=" flex text-[22px] text-[#fcaf17] ">
                    {" "}
                    The Future: Continuing the Legacy of Excellence
                  </h2>
                  <div className=" flex w-[100%] mt-[3px] bg-[#fcaf17] h-[2px]"></div>
                </div>
              </div>
              <p className=" flex  font-[400] text-justify  w-[95%] text-[16px] text-[#515151] ">
                As we move forward, our promise remains unwavering – to provide unparalleled hospitality, embrace sustainable tourism, and create timeless experiences. With every stay, we strive to add another chapter to our remarkable journey, ensuring that Basalt Paradise remains a true haven for generations to come.
              </p>
            </div>
            <div ref={scrollContainerRef} className=" flex   order-1 md:order-2  gap-[20px] overflow-y-auto md:w-[42%]">
              {images.map((img, index) => (
                <img
                  key={index}
                  className="rounded-[10px] w-[230px] h-[320px] object-cover cursor-pointer"
                  src={img}
                  alt={`Celebration ${index}`}
                  onClick={() => openLightbox(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {isOpen && currentIndex !== null && (
        <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
          <button className="absolute top-5 right-5 text-white hover:text-gray-300" onClick={closeLightbox}>
            <X className="w-6 h-6" />
          </button>
          <button className="absolute left-5 text-white hover:text-gray-300" onClick={prevImage}>
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-5 text-white hover:text-gray-300" onClick={nextImage}>
            <ChevronRight className="w-8 h-8" />
          </button>
          <img
            src={images[currentIndex]}
            alt={`Gallery ${currentIndex + 1}`}
            className="max-h-full max-w-full rounded-md object-contain"
          />
        </div>
      )}
    </>
  );
}
