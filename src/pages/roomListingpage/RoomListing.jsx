
import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import { DatePicker } from "antd";
import image1 from   "../../../public/hero/1.jpg"
import image2 from   "../../../public/hero/2.jpg"
import image3 from   "../../../public/hero/3.jpg"
import image4 from   "../../../public/hero/4.jpg"

import image11 from  "../../../public/Gallery/img1.jpg"
import image22 from  "../../../public/Gallery/img2.jpg"
import image33 from  "../../../public/Gallery/img3.jpg"
import image44 from  "../../../public/Gallery/img4.jpg"


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


import banner1 from "../../../public/Gallery/img3.jpg";

import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";

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
  const navigate =useNavigate ();

  const handleDetails =()=>{
    navigate("/room-details")
   }
  
  return (
    <div className="bg-white rounded-lg border relative flex flex-col  border-[#E5E7EB] overflow-hidden">
      <div className="flex flex-col relative   items-center md:flex-row">
        {/* Left Section - Image Gallery */}
        <div className="relative  h-[230px] md:w-[240px]">
          {/* Sponsored Badge */}
          {sponsored && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-white/90 text-[#4a4a4a] font-Poppins   px-3 py-1 rounded text-sm font-medium flex items-center gap-1">
                <ChevronRight className="w-4 h-4" />
                SPONSORED
              </span>
            </div>
          )}

          {/* Main Image */}
          <div className="relative h-[220px]  p-[10px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={`${name} view ${currentImageIndex + 1}`}
                className="w-full h-[140px] rounded-[10px] object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </AnimatePresence>
          </div>

          {/* Thumbnails */}
          <div className="absolute bottom-4 left-[10px] flex gap-[5px]">
            {images.slice(0, 3).map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-[52px] h-[44px] rounded overflow-hidden ${
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
            <button className="w-[52px] h-[44px] bg-black/50 text-white rounded flex items-center justify-center text-xs">
              View All
            </button>
          </div>
        </div>

        {/* Right Section - Details */}
        <div className="flex-1 py-4 font-Poppins  px-5">
          <div className="flex justify-between items-start gap-4">
            <div>
              <h2 className="text-[20px] font-[600] leading-7   text-gray-900">
                {name}
              </h2>
              <div className="flex items-center gap-[2px] mt-2">
                {[1, 2, 3, 4].map((star, index) => (
                  <Star
                    key={index}
                    className="w-4 h-4 fill-current text-[#005f94]"
                  />
                ))}
              </div>
              <div className="mt-2">
                <a
                  href="#"
                  className="text-[#005f94] text-[14px]  hover:underline"
                >
                  {location}
                </a>
                <span className="text-[#4a4a4a]  text-[14px]">
                  {" "}
                  | {distance}
                </span>
              </div>
            </div>
            <div className="text-right flex flex-col items-center gap-[5px]">
              {/* <div className="text-[#0066b2] text-[12px]  font-bold">
                {ratingText}
              </div> */}
              <div className="text-[#005f94]   text-[28px] font-bold leading-8">
                {rating}
              </div>
              <div className="text-[#4a4a4a]   text-sm">
                ({ratings} Ratings)
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="flex gap-6 mt-4">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center gap-2  text-[#4a4a4a]"
              >
                {amenity === "Gym" && (
                  <Dumbbell className="w-5 h-5 text-[#005f94]" />
                )}
                {amenity === "Restaurant" && (
                  <UtensilsCrossed className="w-5 h-5 text-[#005f94]" />
                )}
                {amenity === "24-hour Room Service" && (
                  <Clock className="w-5 h-5 text-[#005f94]" />
                )}
                {amenity === "Swimming Pool" && (
                  <Bath className="w-5 h-5 text-[#005f94]" />
                )}
                <span className="text-sm ">{amenity}</span>
              </div>
            ))}
          </div>

          <div className=" flex relative ">
            <div className=" w-[80%]">
              {/* Features */}
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 mt-[10px]">
                  <Check className="w-4 h-4 text-[#005f94]" />
                  <span className="text-[#005f94]  text-sm">
                    {feature}
                  </span>
                </div>
              ))}

              {/* Description */}
              {description && (
                <div className="mt-4 flex items-start   gap-2">
                  <span className="text-[#8b3dff] text-lg leading-5 mt-[2px]">
                    ●
                  </span>
                  <span className="text-[#8b572a] text-sm  leading-5">
                    {description}
                  </span>
                </div>
              )}
            </div>
            {/* Price Section */}
            <div className="mt-4 flex  right-0 bottom-0 absolute z-[12] justify-end">
              <div className="text-right w-[100%] ">
                {originalPrice && (
                  <div className="text-[#4a4a4a] line-through text-base">
                    ₹{originalPrice.toLocaleString()}
                  </div>
                )}
                <div className="flex items-baseline gap-2 justify-end">
                  <span className="text-[22px] font-bold  text-black">
                    ₹{discountedPrice.toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-[#4a4a4a]  ">
                  + ₹{taxes.toLocaleString()} taxes & fees
                </div>
                <div className=" flex justify-end mt-[10px]">

                <div className=" flex w-[120px] cursor-pointer h-[40px] text-[13px] justify-center items-center py-[5px] anime-pink-btn font-[500] font-Poppins px-[10px] text-white rounded-[30px]" onClick={handleDetails}>
                  <p>View Details</p>
                </div>
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
      name: "Moxy Mumbai Andheri West By Marriott",
      location: "Andheri West",
      distance: "1.8 km drive to Kokilaben Dhirubhai Ambani Hospital",
      rating: 4.7,
      ratingText: "Excellent",
      ratings: 29,
      sponsored: true,
      originalPrice: null,
      discountedPrice: 19777,
      taxes: 3560,
      amenities: ["Gym", "Restaurant", "24-hour Room Service"],
      images: [
        image1,image2, image3,image4
       
      ],
      features: ["Free Cancellation", "Breakfast Included"],
      description: null,
      noCostEmi: false,
    },
    {
      name: "The Lalit Mumbai",
      location: "Near Mumbai Airport",
      distance: "1.3 km  - Chhatrapati Shivaji International Airport",
      rating: 4.1,
      ratingText: "Very Good",
      ratings: 8074,
      sponsored: false,
      originalPrice: 26018,
      discountedPrice: 19563,
      taxes: 5971,
      amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
      images: [
        image1,image2, image3,image4
      ],
      features: ["Free Cancellation till 24 hrs before check in"],
      description:
        "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
      noCostEmi: true,
    },
    {
      name: "Lemon Tree Premier, Mumbai International Airport",
      location: "Near Mumbai Airport",
      distance: "3 minutes walk to Marol Naka Metro Station",
      rating: 4.2,
      ratingText: "Very Good",
      ratings: 21,
      sponsored: false,
      originalPrice: 29559,
      discountedPrice: 11295,
      taxes: 5601,
      amenities: ["Spa", "Swimming Pool", "Gym"],
      images: [
        image11,image22, image33,image44
      ],
      features: ["Free Cancellation"],
      description:
        "Conveniently located near Mumbai airport, easy access to metro and nearby ",
      noCostEmi: false,
    },
    {
      name: "The Lalit Mumbai",
      location: "Near Mumbai Airport",
      distance: "1.3 km  - Chhatrapati Shivaji International Airport",
      rating: 4.1,
      ratingText: "Very Good",
      ratings: 74,
      sponsored: false,
      originalPrice: 26018,
      discountedPrice: 19563,
      taxes: 5971,
      amenities: ["Jacuzzi", "Spa", "Swimming Pool"],
      images: [
        image1,image2, image3,image4
      ],
      features: ["Free Cancellation till 24 hrs before check in"],
      description:
        "Grand, picturesque lobby, delicious food, well-equipped gym and pool near the airport",
      noCostEmi: true,
    },
  ];

  return (
    <>
          <Header />

    <div className="flex flex-col w-full font-Poppins pt-[110px] min-h-screen">
      {/* <div className="hero-background"></div> */}

      <div className="w-[80%]   2xl:w-[1400px] gap-[30px] mt-[5px] min-h-screen md:flex  mx-auto">

        <div className="flex md:w-[300px] flex-col gap-[10px] h-[300px] mb-6">
          <img className="rounded-[8px]  w-full" src={banner1} alt="Banner" />
          <img className="rounded-[8px]  w-full" src={banner1} alt="Banner" />
        </div>
        <div className="w-[90%] mx-auto  md:h-[89vh] 2xl:h-[100%]  overflow-y-auto space-y-6">
          {hotels.slice(0, 5).map((hotel, index) => (
            <HotelCard key={index} {...hotel} />
          ))}
        </div>
      </div>

    </div>
    </>
  );
}
