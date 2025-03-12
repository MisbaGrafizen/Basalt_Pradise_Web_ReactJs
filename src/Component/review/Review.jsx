import { useState, useEffect } from "react";
import vector from "../../../public/review/profile.jpeg";
import image1 from "../../../public/Basalt/B2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RoundedStar = ({ style }) => (
  //   <svg
  //     width="20"
  //     height="20"
  //     viewBox="0 0 24 24"
  //     style={{
  //       filter: "drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.1))",
  //       ...style,
  //     }}
  //   >
  //     <defs>
  //       <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
  //         <stop
  //           offset="0%"
  //           style={{ stopColor: "var(--bs-baby-blue)", stopOpacity: 1 }}
  //         />
  //         <stop
  //           offset="100%"
  //           style={{ stopColor: "var(--bs-dark-blue)", stopOpacity: 1 }}
  //         />
  //       </linearGradient>
  //     </defs>
  //     <path
  //       d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
  //       fill="url(#gradient)"
  //       stroke="url(#gradient)"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       style={{ borderRadius: "50%" }}
  //     />
  //   </svg>

  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    style={{
      filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.2))",
      ...style,
    }}
  >
    <path
      d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
      fill="#ff8000"
      stroke="#ff8000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ borderRadius: "50%" }}
    />
  </svg>
);

const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-[-25px] transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <i className="fa-solid fa-arrow-right text-[24px] text-[#FF6B00]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-[-25px] transform -translate-y-1/2 cursor-pointer z-10"
    onClick={onClick}
  >
    <i className="fa-solid fa-arrow-left text-[24px] text-[#FF6B00]" />
  </div>
);
export function 
Review({
  rating = 4.8,
  totalReviews = 21656,
  location = "Dubai",
  countries = 65,
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stars = [
    {
      transform: "translate(-55px, 20px) scale(0.9)",
      opacity: 0.9,
      marginLeft: "10px",
    },
    {
      transform: "translate(-35px, -4px) scale(1.4)",
      opacity: 0.95,
      marginLeft: "10px",
    },
    { transform: "translate(8px, -20px) scale(1.9)", opacity: 1 },
    { transform: "translate(50px, -10px) scale(1.4)", opacity: 0.95 },
    { transform: "translate(80px, 16px) scale(1)", opacity: 0.9 },
  ];

  const testimoniyalslider = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    speed: 2000,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className=" flex mx-auto ">
        <div className="container mx-auto px-4 py-">
          <div className="flex items-center justify-center gap-4  mx-auto">
            {/* Left line */}
            <div className="h-[2px] bg-gradient-to-r w-[310px] from-transparent to-[#ff8000] flex-grow" />

            {/* Heading text */}
            <h1 className="text-[17px] md:text-3xl lg:text-[29px] text-[#515151] font-Poppins font-[400] whitespace-nowrap">
              People Love Our <span className="text-[#FF6B00]">Basalt</span>{" "}
              Paradise
            </h1>

            {/* Right line */}
            <div className="h-[2px] bg-gradient-to-r from-[#FF6B00] to-transparent flex-grow w-[300px]" />
          </div>
        </div>
      </div>

      <div className=" 2xl:w-[1400px] items-center   md:gap-[30px]  gap-[10px] flex md:flex-row flex-col !bg-[#] md:w-[70%] mt-[-30px] w-[95%]   h-[90%] mx-auto">
        <div className=" hidden md:flex flex-col w-[250px] mx-auto md:mx-0 relative justify-center gap md:p-4">
          {/* Stars in curved arrangement */}
          <div className="relative h-16 md:w-full  flex  items-center ">
            {stars.map((style, i) => (
              <div
                key={i}
                className="absolute transition-all sha duration-500 ease-out"
                style={{
                  left: " 30%",
                  transform: mounted
                    ? style.transform
                    : "translate(0px, 0px) scale(0)",
                  opacity: mounted ? style.opacity : 0,
                  marginLeft: "10px",
                }}
              >
                <RoundedStar />
              </div>
            ))}
          </div>

          {/* Rating number */}
          <div
            className="text-[55px]  font-[700] left-[16%] relative font-Poppins mt-[-20px] pl-[16px] basalt-text transition-all duration-500"
            style={{
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {rating}
          </div>

          {/* Reviews text with link */}
          <a
            href="#"
            className=" relative left-[11px] font-Poppins font-[600]  !text-[#000] underline underline-offset-2 decoration-[#000000] text-[20px] transition-all duration-500"

            style={{
          
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            20,000+ Guests
            {/*  */}
          </a>


          {/* Countries text */}
          <p
            className="text-gray-800 left-[-1px] relative text-[16px]  font-Poppins transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            from over all the Globe
          </p>
        </div>



        <div className=" md:hidden flex flex-col w-[250px] mx-auto md:mx-0 relative justify-center gap md:p-4">
          {/* Stars in curved arrangement */}
          <div className="relative h-16 md:w-full justify-center mr-[37px]  flex  items-center ">
            {stars.map((style, i) => (
              <div
                key={i}
                className="absolute transition-all sha duration-500 ease-out"
                style={{
                 
                  transform: mounted
                    ? style.transform
                    : "translate(0px, 0px) scale(0)",
                  opacity: mounted ? style.opacity : 0,
                  marginLeft: "10px",
                }}
              >
                <RoundedStar />
              </div>
            ))}
          </div>

          {/* Rating number */}
          <div
            className="text-[55px]  font-[700] md:left-[17%] left-[30%] relative font-Poppins mt-[-20px] md:pl-[16px] basalt-text transition-all duration-500"
            style={{
              textShadow: "0px 2px 2px rgba(0, 0, 0, 0.1)",
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            {rating}
          </div>

          {/* Reviews text with link */}
          <a
            href="#"
            className=" relative md:left-[30px] left-[22%] font-Poppins font-[600]  !text-[#000] underline underline-offset-2 decoration-[#000000] text-[20px] transition-all duration-500"

            style={{
          
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            25,627 Guests
            {/*  */}
          </a>


          {/* Countries text */}
          <p
            className="text-gray-800 relative text-[16px] left-[15%]   font-Poppins transition-all duration-500"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
            }}
          >
            from over all the Globe
          </p>
        </div>







        <div className=" w-[0.2px] md:flex hidden  h-[190px] bg-[#e3e2e2fc] o"></div>
        {/* <Slider className="pt-2 flex" {...testimoniyalslider}> */}
        <div className=" flex md:ml-[10px] justify-start  w-[90%]  overflow-x-auto mx-auto md:mx-0 md:w-[80%] md:gap-[20px] ">
          <div className=" flex w-[357px] md:w-[355px] mr-[10px] h-[100%]  p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px] flex-shrink-0 ">
            <div className=" flex flex-col gap-[10px]">
              <div className=" flex   gap-[15px]">
                <div className=" flex w-[40px] h-[40px]  overflow-hidden rounded-[50%] ">
                  <img className=" flex w-[100%] h-[100%]" src={vector} />
                </div>
                <div className=" flex flex-col gap-[px]">
                  <p className="   flex text-[#000] leading-5 font-[500] font-Poppins text-[13px] md:text-[16px]">
                    Darshit Mayurkumar Adesara
                  </p>
                  <div className=" flex font-Poppins gap-[5px] ">
                    <i class="fa-solid mt-[3px] fa-star text-[#1e49cb] text-[15px]"></i>
                    <p>4.8</p>
                  </div>
                </div>
              </div>
              <div className=" flex font-[400] text-[14px] font-Poppins  text-[#202020] text-justify">
                Dear all thank you for all the services you and your team
                provide during our stay in ...
              </div>
              <div className=" flex gap-[10px] justify-between mt-[5px]">
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className=" flex w-[357px] md:w-[355px] h-[100%]  p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px]  flex-shrink-0">
            <div className=" flex flex-col gap-[10px]">
              <div className=" flex   gap-[15px]">
                <div className=" flex w-[40px] h-[40px]  overflow-hidden rounded-[50%] ">
                  <img className=" flex w-[100%] h-[100%]" src={vector} />
                </div>
                <div className=" flex flex-col gap-[px]">
                  <p className="   flex text-[#000] leading-5 font-[500] font-Poppins text-[13px] md:text-[16px]">
                    Darshit Mayurkumar Adesara
                  </p>
                  <div className=" flex font-Poppins gap-[5px] ">
                    <i class="fa-solid mt-[3px] fa-star text-[#1e49cb] text-[15px]"></i>
                    <p>4.8</p>
                  </div>
                </div>
              </div>
              <div className=" flex font-[400] text-[14px] font-Poppins  text-[#202020] text-justify">
                Dear all thank you for all the services you and your team
                provide during our stay in ...
              </div>
              <div className=" flex gap-[10px] justify-between mt-[5px]">
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                  <img
                    className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                    src={image1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
}
