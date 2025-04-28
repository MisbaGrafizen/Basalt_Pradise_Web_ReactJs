import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import image1 from "../../../public/newRoom/image1.avif";
import image2 from "../../../public/newRoom/image2.avif";
import image3 from "../../../public/newRoom/image3.avif";
import image4 from "../../../public/newRoom/image4.avif";
import stars from "../../../public/staffhand/stars1.png";
import image11 from "../../../public/Gallery/img1.jpg";
import image22 from "../../../public/Gallery/img2.jpg";
import image33 from "../../../public/Gallery/img3.jpg";
import image44 from "../../../public/Gallery/img4.jpg";
import swimmingpool from "../../../public/Basalt/B12.jpg"

import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Star,
  MapPin,
  Dumbbell,
  UtensilsCrossed,
  Clock,

  Bath,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// import banner1 from "../../../public/Basalt/B7.jpg";
import banner2 from "../../../public/Basalt/B11.jpg";
import banner3 from "../../../public/Basalt/B10.jpg";


import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";
import { Review } from "../../Component/review/Review";
import BannerSection from "../../Component/bannerSection/BannerSection";
import AlertBanner from "../../Component/aboutUsComponent/AlertBanner";
import Gallery from "../../Component/gallery/Gallery";
import zenbed1 from "../../../public/NewZenRoom/zenbed1.jpg"
import zenbed2 from "../../../public/NewZenRoom/zenbed2.jpg"
import zenbed3 from "../../../public/NewZenRoom/zenbed3.jpg"
import villa1 from "../../../public/VilaNewImages/villa1.jpg"
import villa2 from "../../../public/VilaNewImages/villa2.jpeg"
import villa3 from "../../../public/VilaNewImages/villa3.jpeg"
import villa4 from "../../../public/VilaNewImages/villa4.jpeg"
import villa5 from "../../../public/VilaNewImages/villa5.jpeg"
import villa6 from "../../../public/VilaNewImages/villa6.jpeg"
import villa7 from "../../../public/VilaNewImages/villa7.jpeg"
import villa8 from "../../../public/VilaNewImages/villa8.jpeg"











// interface RoomProps {
//   name: string;
//   location: string;
//   distance: string;
//   rating: number;
//   reviews: number;
//   originalPrice: number;
//   discountedPrice: number;
//   taxes: number;
//   amenities: string[];
//   images: string[];
//   offerText?: string;
//   cancellationType: string;
// }

const HotelCard = ({
  name,
  location,
  distance,
  rating,
  ratingText,
  ratings,
  sponsored,
  originalPrice,
  discountedPrice,
  taxes,
  amenities,
  images,
  features,
  description,
  noCostEmi,
  openLightbox, // 👈 passed from parent
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();
  const handleDetails = (roomType) => {
    if (roomType === "villa") {
      navigate("/private-vila-details");
    } else if (roomType === "zen-room") {
      navigate("/room-details");
    } else {
      navigate("/room-details"); // Default fallback
    }
  };









  // const openLightbox = (images, index) => {
  //   setLightboxImages(images);
  //   setCurrentImageIndex(index);
  //   setIsOpen(true);
  // };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImageIndex(0);
    setLightboxImages([]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="bg-white  border-[#e5eaff] w-[100%] rounded-lg  border mb-[10px] relative flex flex-col   overflow-hidden">
      <div className="flex  flex-col relative  w-[100%]   md:flex-row">
        {/* Left Section - Image Gal lery */}
        <div className="relative  h-[243px] md:w-[275px]">
          {/* Sponsored Badge */}
          {/* {sponsored && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 text-[#4a4a4a] font-Poppins   px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
                SPONSORED
              </span>
            </div>
          )} */}

          {/* Main Image */}
          <div className="relative h-[220px]  p-[10px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                onClick={() => openLightbox(images, 0)}// ✅ Call parent function
                src={images[currentImageIndex]}
                alt={`${name} view ${currentImageIndex + 1}`}
                className="!w-[400px] h-[162px] rounded-[4px] object-cover cursor-pointer"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-3 md:left-[9px] md:w-[93%] w-[94%] left-[10px] flex gap-[5px]">
            {images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`md:w-[60px] w-[50%] h-[55px] rounded overflow-hidden ${currentImageIndex === index
                  ? "border-2 border-white"
                  : "border border-transparent"
                  }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* <img
  src={img}
  alt={`Thumbnail ${index + 1}`}
  className="w-full h-full object-cover cursor-pointer"
  onClick={() => {
    setCurrentImageIndex(index);             // Update the main image
    openLightbox(images, index);            // 👈 Open popup at clicked index
  }}
/> */}

              </button>
            ))}
            <button
              className="md:w-[60px] w-[42%] h-[55px] bg-black/50 text-white rounded flex items-center justify-center text-xs"
              onClick={() => openLightbox(images, currentImageIndex)} // ✅ Use currentImageIndex
            >
              View All
            </button>

          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1 py-[8px] font-Poppins  md:w-[38%] pr-[30px] pl-[10px]">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-[20px] font-[600] leading-7   text-gray-900">
                {name}
              </h2>

              <div className="mt-1">
                <a
                  href="#"
                  className="text-[#1f569e]  hover:text-[#1f569e]  text-[14px] leading-4 font-[500] "
                >
                  {location}
                </a>
                <span className="text-[#4a4a4a]   leading-4 text-[13px]">
                  {" "}
                  | {distance}
                </span>
              </div>
            </div>
            {/* <div className="text-right flex flex-col items-center gap-[5px]">
              <div className="text-[#0066b2] text-[12px]  font-bold">
                {ratingText}
              </div>
              <div className="text-[#005f94]   text-[28px] font-bold leading-8">
                {rating}
              </div>
              <div className="text-[#4a4a4a]   text-sm">
                ({ratings} Ratings)
              </div>
            </div> */}
          </div>

          <div className="flex gap-3 flex-wrap mt-2">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center  leading-4 text-[#4a4a4a]"
              >
                {amenity === "Gym" && (
                  <Dumbbell className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                )}
                {amenity === "Restaurant" && (
                  <UtensilsCrossed className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                )}
                {amenity === "24-hour Room Service" && (
                  <Clock className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                )}
                {amenity === "Swimming Pool" && (
                  <Bath className="w-[15px] h-[15px] mr-[5px] text-[#005f94]" />
                )}
                <span className="text-[11px] ">{amenity}</span>
              </div>
            ))}
          </div>

          <div className=" flex relative ">
            <div className=" w-[100%]   text-[11px] flex-col gap-[5px] mt-[5px]">
 <b className=" font-[500]">
 15-7 days before the event:
 </b>  25% of the deposit will be forfeited. <b className=" font-[500]">7-3 days before the event: </b>  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited.
            </div>
          </div>
        </div>
        <div className="flex-1 py-[8px]  px-[10px]  font-Poppins md:max-w-[220px] \ md:pr-[20px]">
          <div className="text-left md:text-right flex flex-col  gap-[5px]">
            {/* <div className="text-[#0066b2] text-[13px]  font-bold">
              {ratingText}
            </div>
            <div className="text-[#005f94]   text-[28px] font-bold leading-8">
              {rating}
            </div> */}
            {/* <div className="text-[#4a4a4a]   text-[12px]">
              ({ratings} Ratings)
            </div> */}
          </div>

          <div className="flex w-[100%] md:w-[100%] h-[165px]   z-[12]  relative  md:justify-end justify-start">
            <div className="text-left md:text-right w-[100%] ">
              {/* {originalPrice && (
                <div className="text-[#4a4a4a] text-[10px] line-through text-base">
                  ₹{originalPrice.toLocaleString()}
                </div>
              )}
              <div className="flex items-baseline gap-2 md:justify-end justify-start">
                <span className="text-[22px] font-[600]  text-black">
                  ₹{discountedPrice.toLocaleString()}
                </span>
              </div>
              <div className="text-sm text-[400] text -[12] text-[#4a4a4a]  ">
                + ₹{taxes.toLocaleString()} taxes & fees
              </div> */}
              <div className=" flex justify-center ">
                <div
                  className=" flex md:w-[120px] w-[98%]   md:absolute bottom-[-50px] right-[0px]  ab cursor-pointer mt-[40px] md:mt-0 h-[36px] text-[13px] justify-center items-center py-[2px] basalt font-[500] font-Poppins px-[10px] text-white rounded-[30px]"
                  onClick={() => handleDetails(name.toLowerCase().includes("villa") ? "villa" : "zen-room")}
                >
                  <p>View Details</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function RoomListing() {
  const [guestDetails, setGuestDetails] = useState(false);
  const [roomnum, setRoomNum] = useState(0);
  const [adultnum, setAdultNum] = useState(0);
  const [childrennum, setChildrenNum] = useState(0);
  const [selectedDates, setSelectedDates] = useState([dayjs(), dayjs()]);
  const [numOfNights, setNumOfNights] = useState(1);
  const [startDate, setStartDate] = useState(dayjs());
  const [numOfDays, setNumOfDays] = useState(null);
  const [endDate, setEndDate] = useState(dayjs());
  const [isOpen, setIsOpen] = useState(false);
  const formatPlaceholder = (dates) => { };
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleGuestDetails = () => {
    setGuestDetails((prevCheck) => !prevCheck);
  };


  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentImageIndex(0);
    setLightboxImages([]);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };


  // useEffect(() => {
  //   // Set default values for today and tomorrow
  //   const defaultStartDate = moment().startOf("day");
  //   const defaultEndDate = moment().startOf("day").add(1, "days");

  //   // Update state with default values
  //   setStartDate(defaultStartDate);
  //   setEndDate(defaultEndDate);

  //   // Calculate and set the default number of nights
  //   const diffTime = Math.abs(defaultEndDate - defaultStartDate);
  //   const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  //   setNumOfDays(diffDays);
  // }, []);
  // const disabledDate = (current) => {
  //   return current && current.isBefore(dayjs(), "day");
  // };
  const hotels = [

    {
      name: "Villa with Private Pool",
      location: "Garden View | King Bed | Premium Villa Stay",
      distance: "10.0 km drive to Champaner-Pavagadh Archaeological Park",
      // rating: 4.8,
      ratingText: "Very Good",
      ratings: 8074,
      sponsored: false,
      originalPrice: 18400,
      discountedPrice: 16560,
      taxes: 5152,
      amenities: ["Gym", "Restaurant", "24-hour Room Service", ""],
      images: ["https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818076/B11_bfc4tg.jpg", "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745819860/private-2_lsgoip.avif",swimmingpool, "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745819860/private-2_lsgoip.avif", villa1,villa2,villa3,villa4,villa5,villa6,villa7,villa8],
      features: ["Breakfast Included", "15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited."],
      description:
        "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
      noCostEmi: true,
    },

    {
      name: "Zen Room",
      location: "Fits 2 Adults | Tranquil Stay for a Relaxing Getaway ",
      distance: "10.0 km drive to Champaner-Pavagadh Archaeological Park ",
      // rating: 4.7,
      ratingText: "Excellent",
      ratings: 8074,
      sponsored: true,
      originalPrice: 5900,
      discountedPrice: 5293,
      taxes: 1298,
      amenities: ["Wi-Fi & Air Conditioning", "Restaurant", "24-hour Room Service", "Housekeeping"],
      images: ["https://res.cloudinary.com/dtqzhmivb/image/upload/v1745819838/image1_umxshc.avif", "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818035/B15_bufg5g.jpg", "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745819824/image4_wy0gkd.avif",zenbed1,zenbed2,zenbed3],
      features: ["Wi-Fi", "Air Conditioning", "Housekeeping",""],
      description: null,
      noCostEmi: false,
    },
    // {
    //   name: "Lemon Tree Premier, Mumbai International Airport",
    //   location: "Near Mumbai Airport",
    //   distance: "3 minutes walk to Marol Naka Metro Station",
    //   rating: 4.2,
    //   ratingText: "Very Good",
    //   ratings: 21,
    //   sponsored: false,
    //   originalPrice: 29559,
    //   discountedPrice: 11295,
    //   taxes: 5601,
    //   amenities: ["Spa", "Gym"],
    //   images: [image11, image22, image33, image44],
    //   features: ["Free Cancellation"],
    //   description:
    //     "Conveniently located near Mumbai airport, easy access to metro and nearby ",
    //   noCostEmi: false,
    // },
    // {
    //   name: "The Lalit Mumbai",
    //   location: "Near Mumbai Airport",
    //   distance: "1.3 km  - Chhatrapati Shivaji International Airport",
    //   rating: 4.1,
    //   ratingText: "Very Good",
    //   ratings: 74,
    //   sponsored: false,
    //   originalPrice: 26018,
    //   discountedPrice: 19563,
    //   taxes: 5971,
    //   amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
    //   images: [image1, image2, image3, image4],
    //   features: ["Free Cancellation till 24 hrs before check in"],
    //   description:
    //     "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
    //   noCostEmi: true,
    // },
  ];



  const sidebarImages = [
    "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818034/B13_z3wlof.jpg",
    "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818031/B7_h7wsjz.jpg",
    "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818030/B6_ubw9i6.jpg",
  ];

  return (
    <>
      <Header />

      <div className="flex flex-col w-full font-Poppins pt-[110px] ">
        {/* <div className="hero-background"></div> */}

        <div className="md:w-[80%] w-[90%] pb-[30px]   2xl:w-[1270px] gap-[20px] mt-[5px]  flex-col md:flex  mx-auto">
          <div className=" flex md:flex-row flex-col text-[30px] font-[600] ">
            Welcome To <span className=" text-[#fcaf17] drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(196, 196, 196)]  flex md:pl-[10px] leading-5 md:leading-[45px] text-[]">Basalt Paradise</span>  <img className=" mt-[px]  md:flex hidden w-[30px] h-[40px]" src={stars} />
          </div>
          <div className=" flex w-[100%] gap-[30px]">


            <div className="md:flex hidden md:w-[300px] flex-col gap-[8px] h-[300px] mb-6">
              {sidebarImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Sidebar ${index + 1}`}
                  className="rounded-[8px] w-full cursor-pointer"
                  onClick={() => openLightbox(sidebarImages, index)} // 👈 this opens lightbox for just these 3
                />
              ))}
            </div>

            <div className="w-[100%] mx-auto  md:mt-0 mt-[20px]  gap-[10px] flex flex-col  ">

              {hotels.slice(0, 5).map((hotel, index) => (
                <HotelCard key={index} {...hotel} openLightbox={openLightbox} />
              ))}
            </div>
          </div>
        </div>

      </div>
      <div className=" 2xl:w-[1400px] !bg-[#]  pb-[20px] pt-[40px]  w-[100%]  flex flex-col gap-[62px] h-[100%] mx-auto">
      <Gallery />
    
        <Review />
        <BannerSection />
        <div className=" w-[90%] mx-auto">
          <AlertBanner />
        </div>

      </div>
      {isOpen && (
        <div className="fixed inset-0 z-[7000] flex flex-col items-center justify-center bg-black/80 p-4">
          {/* Close Button */}
          <button className="absolute top-5 right-5 text-white hover:text-gray-300" onClick={closeLightbox}>
            <X className="w-6 h-6" />
          </button>

          {/* Previous & Next Buttons */}
          <button className="absolute left-5 text-white hover:text-gray-300" onClick={prevImage}>
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button className="absolute right-5 text-white hover:text-gray-300" onClick={nextImage}>
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Main Image */}
          <img
            src={lightboxImages[currentImageIndex]}
            alt={`Gallery ${currentImageIndex + 1}`}
            className="max-h-[80vh] max-w-full rounded-md object-contain mb-4"
          />

          {/* Thumbnail Strip */}
          <div className="flex gap-2 overflow-x-auto max-w-full px-2">
            {lightboxImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-[70px] w-[100px] object-cover rounded cursor-pointer border-2 ${currentImageIndex === index ? "border-yellow-400" : "border-transparent"
                  }`}
              />
            ))}
          </div>
        </div>
      )}



      <Footer />
    </>
  );
}
