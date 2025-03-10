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

import {
  Star,
  MapPin,
  Dumbbell,
  UtensilsCrossed,
  Clock,
  ChevronRight,
  Bath,
  Check,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import banner1 from "../../../public/Basalt/B7.jpg";
import banner2 from "../../../public/Basalt/B11.jpg";
import banner3 from "../../../public/Basalt/B10.jpg";


import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";

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
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  const handleDetails = () => {
    navigate("/room-details");
  };

  return (
    <div className="bg-white  border-[#e5eaff] w-[100%] rounded-lg border mb-[10px] relative flex flex-col   overflow-hidden">
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
                src={images[currentImageIndex]}
                alt={`${name} view ${currentImageIndex + 1}`}
                className="!w-[400px] h-[162px] rounded-[4px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-3 left-[9px] w-[93%] flex gap-[5px]">
            {images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`md:w-[60px] w-[50%] h-[55px] rounded overflow-hidden ${
                  currentImageIndex === index
                    ? "border-2 border-white"
                    : "border border-transparent"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
            <button className="md:w-[60px] w-[40%] h-[55px] bg-black/50 text-white rounded flex items-center justify-center text-xs">
              View All
            </button>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1 py-[8px] font-Poppins  md:w-[40%] pr-[30px] pl-[10px]">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-[20px] font-[600] leading-7   text-gray-900">
                {name}
              </h2>

              <div className="mt-1">
                <a
                  href="#"
                  className="text-[#1f569e] text-[14px] leading-4 font-[500] hover:underline"
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
                <span className="text-[12px] ">{amenity}</span>
              </div>
            ))}
          </div>

          <div className=" flex relative ">
            <div className=" w-[80%] flex  flex-col gap-[5px] mt-[23px]">
              {features.map((feature, index) => (
                <div key={index} className="flex  gap-2">
                  <i class="fa-duotone fa-solid mt-[2px]  text-[#b18f2a] fa-check"></i>
                  <span className="text-[#b18f2a]  text-[13px]">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 py-[8px]  px-[10px]  font-Poppins md:max-w-[220px] border-l md:pr-[20px]">
          <div className="text-left md:text-right flex flex-col  gap-[5px]">
            <div className="text-[#0066b2] text-[13px]  font-bold">
              {ratingText}
            </div>
            <div className="text-[#005f94]   text-[28px] font-bold leading-8">
              {rating}
            </div>
            <div className="text-[#4a4a4a]   text-[12px]">
              ({ratings} Ratings)
            </div>
          </div>

          <div className="flex w-[100%] md:w-[100%]   z-[12]  relative  md:justify-end justify-start">
            <div className="text-left md:text-right w-[100%] ">
              {originalPrice && (
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
              </div>
              <div className=" flex justify-center mt-[5px]">
                <div
                  className=" flex md:w-[120px] w-[98%]   md:absolute bottom-[-60px] right-[0px]  ab cursor-pointer h-[36px] text-[13px] justify-center items-center py-[2px] basalt font-[500] font-Poppins px-[10px] text-white rounded-[30px]"
                  onClick={handleDetails}
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

  const formatPlaceholder = (dates) => {};
  const handleGuestDetails = () => {
    setGuestDetails((prevCheck) => !prevCheck);
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
      name: "Zen Room",
      location: " Fits 2 Adults ",
      distance: "Experience a serene stay in our Zen Room,",
      rating: 4.7,
      ratingText: "Excellent",
      ratings: 29,
      sponsored: true,
      originalPrice: 5900,
      discountedPrice: 5015 ,
      taxes: 1239,
      amenities: ["Gym", "Restaurant", "24-hour Room Service"],
      images: [image1, image2, image3, image4],
      features: ["Wi-Fi", "Air Conditioning","Housekeeping"],
      description: null,
      noCostEmi: false,
    },
    {
      name: "Villa with Private Pool",
      location: "Garden View | King Bed",
      distance: "Halol, 15 minutes walk to Champaner-Pavagadh Archaeological Park",
      rating: 4.1,
      ratingText: "Very Good",
      ratings: 8074,
      sponsored: false,
      originalPrice: 18400,
      discountedPrice: 15640,
      taxes: 4968,
      amenities: ["Gym", "Restaurant", "24-hour Room Service"],
      images: [image4, image3, image2, image1],
      features: [ "Breakfast Included","Free Cancellation till 24 hrs before check in"],
      description:
        "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
      noCostEmi: true,
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

  return (
    <>
      <Header />

      <div className="flex flex-col w-full font-Poppins pt-[110px] ">
        {/* <div className="hero-background"></div> */}

        <div className="md:w-[80%] w-[95%]   2xl:w-[1400px] gap-[20px] mt-[5px]  md:flex  mx-auto">
          <div className="md:flex  hidden md:w-[300px] flex-col gap-[3px] h-[300px] mb-6">
            <img className="rounded-[8px]  w-full" src={banner2} alt="Banner" />
            <img className="rounded-[8px]  w-full" src={banner1} alt="Banner" />
            <img className="rounded-[8px]  w-full" src={banner3} alt="Banner" />
          </div>
          <div className="w-[90%] mx-auto  md:h-[89vh] 2xl:h-[100%] gap-[10px] flex flex-col overflow-y-auto ">
            <div className=" flex md:flex-row flex-col text-[30px] font-[600] ">
              Welcome To <span className=" text-[#fcaf17] drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(196, 196, 196)]  flex md:pl-[10px] text-[]">Basalt Paradise</span>  <img className=" mt-[px]  md:flex hidden w-[30px] h-[40px]" src={stars} />
            </div>
            {hotels.slice(0, 5).map((hotel, index) => (
              <HotelCard key={index} {...hotel} />
            ))}
          </div>
        </div>
        <Footer />
      </div>

    </>
  );
}
