import { useState, useEffect } from "react";
import vector from "../../../public/review/profile.jpeg";
import image1 from "../../../public/Basalt/B2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

import maleVector from "../../../public/review/manVector.avif";
import femaleVector from "../../../public/review/female.avif";



import image2 from "../../../public/Basalt/B3.jpg";
import image3 from "../../../public/Basalt/B4.jpg";
import image4 from "../../../public/Basalt/B5.jpg";
import Footer from '../../Component/footer/Footer';

import desai1 from "../../../public/desai/unnamed.jpg"
import desai2 from "../../../public/desai/unnamed1.jpg"
import desai3 from "../../../public/desai/unnamed2.jpg"
import desai4 from "../../../public/desai/unnamed3.jpg"

import chuan1 from "../../../public/chuanSimran/image1.jpg"
import chuan2 from "../../../public/chuanSimran/image2.jpg"
import chuan3 from "../../../public/chuanSimran/image3.jpg"
import chuan4 from "../../../public/chuanSimran/image4.jpg"


import pintu1 from "../../../public/pintu/image1.jpg"
import pintu2 from "../../../public/pintu/image2.jpg"

import kena1 from "../../../public/kena/image1.jpg"
import gourav from "../../../public/gaurav/image1.jpg"

import geet from "../../../public/geet/image1.jpg"
import geet1 from "../../../public/geet/image2.jpg"
import geet2 from "../../../public/geet/image3.jpg"

import urmila from "../../../public/urmila/image1.jpg"
import urmila1 from "../../../public/urmila/image2.jpg"

import dhruvi from "../../../public/dhruvi/image1.jpg"
import dhruvi1 from "../../../public/dhruvi/image2.jpg"
import dhruvi2 from "../../../public/dhruvi/image3.jpg"
import dhruvi3 from "../../../public/dhruvi/image4.jpg"


import brush from "../../../public/brush/image1.jpg"
import brush1 from "../../../public/brush/image2.jpg"
import brush2 from "../../../public/brush/image3.jpg"
import brush3 from "../../../public/brush/image4.jpg"


import kanpil1 from "../../../public/pankil/image1.jpg"
import kanpil2 from "../../../public/pankil/image2.jpg"
import kanpil3 from "../../../public/pankil/image3.jpg"
import kanpil4 from "../../../public/pankil/image4.jpg"


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
    const navigate = useNavigate()

const  handleAllreview =()=>{
  navigate("/testimonials")
}
  const testimonials = [
    {
      id: 1,
      name: "Prinkesh Desai",
      rating: 5.0,
      review:
        " The location basat Paradise is an exceptional destination with incredible service, beautiful surroundings...",
      profileImg: maleVector,
      images: [desai1, desai2, desai3, desai4],
    },
    {
      id: 2,
      name: "Chauhan Simran",
      rating: 5.0,
      review:
        "The basalt paradise in near halol is an absolute gem that exceeded all my expectations. From the moment I arrived ...",
      profileImg: maleVector,
      images: [chuan1, chuan2, chuan3, chuan4],
    },
    {
      id: 10,
      name: "Pintu Raval",
      rating: 5.0,
      review:
        "The resort and villa basalt paradise in near pavagadh s a top-tier resort that offers a perfect blend of luxury...",
      profileImg: maleVector,
      images: [pintu1, pintu2,],
    },
    {
      id: 7,
      name: "Urmila jayanti",
      rating: 5,
      review:
        "I have had great experience while our stay . The food and ambience is amazing . Would love to come here again .",
      profileImg: femaleVector,
      images: [urmila, urmila1,],
    },
    {
      id: 4,
      name: "Dhruvi Chowdhary",
      rating: 5,
      review:
        "I’ve had the best experience over here, i went with my family and had such a great time overall. The villa,  ...",
      profileImg: femaleVector,
      images: [dhruvi, dhruvi1, dhruvi2, dhruvi3],
    },
    {
      id: 5,
      name: "Brush21 Kalgi Shah",
      rating: 5.0,
      review:
        "I recently stayed at Basalt Paradise Resort, and it was truly an unforgettable experience! The serene location  ...",
      profileImg: femaleVector,
      images: [brush, brush1, brush2, brush3],
    },
    {
      id: 6,
      name: "PANKIL KAPADIA",
      rating: 5,
      review:
        "Nice spacious & luxurious villa rooms, well furnished, big and cozy king size beds, well maintained rooms, lobby  ...",
      profileImg: maleVector,
      images: [kanpil1, kanpil2, kanpil3, kanpil4],
    },]
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

      <div className=" 2xl:w-[1300px] items-center   md:gap-[30px]  gap-[10px] flex md:flex-row flex-col !bg-[#] md:w-[70%] mt-[-30px] w-[95%]   h-[90%] mx-auto">
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







        <div className=" w-[0.2px] md:flex font-Poppins hidden  h-[190px] bg-[#e3e2e2fc] o"></div>
        {/* <Slider className="pt-2 flex" {...testimoniyalslider}> */}
        <div className=" flex md:ml-[10px] gap-[10px] justify-start  font-Poppins items-center  w-[95%]  overflow-x-auto mx-auto md:mx-0 md:w-[80%] md:gap-[20px] ">
        {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex w-[348px] md:w-[355px] justify-between h-[100%] p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px] flex-shrink-0"
            >
              <div className="flex flex-col gap-[10px]">
                {/* Profile & Name */}
                <div className="flex gap-[15px]">
                  <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                    <img
                      className="w-full h-full object-cover"
                      src={testimonial.profileImg}
                      alt="Profile"
                    />
                  </div>
                  <div className="flex flex-col">
                    <p className="text-[#000] leading-5 font-[500] text-[13px] md:text-[16px]">
                      {testimonial.name}
                    </p>
                    <div className="flex items-center gap-[5px] text-[#1e49cb] text-[15px]">
                      <i className="fa-solid fa-star"></i>
                      <p>{testimonial.rating}</p>
                    </div>
                  </div>
                </div>

                {/* Review */}
                <div className="text-[14px] text-[#202020] text-justify">
                  {testimonial.review}
                </div>

                {/* Images */}
                <div className="flex gap-[15px]   mt-[5px]">
                  {testimonial.images.map((img, index) => (
                    <div
                      key={index}
                      className="w-[60px] md:w-[70px] h-[60px] rounded-[10px]"
                    >
                      <img
                        className="w-full h-full object-cover rounded-[10px]"
                        src={img}
                        alt={`Review Image ${index + 1}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}




          <div className=' flex items-center ml-[20px]  h-[100%]'>
            <div className=' basalt flex w-[2px]  items-center h-[150px]'>

            </div>
            <div className=' flex  justify-center font-Poppins hover:underline-offset-3  cursor-pointer hover:underline  w-[120px] font-[500] items-center basalt-text  gap-[10px]  ' onClick={handleAllreview}>
              View All <i className="fa-regular fa-arrow-right"></i>
            </div>
          </div>
        </div>
        {/* </Slider> */}
      </div>
    </>
  );
}
