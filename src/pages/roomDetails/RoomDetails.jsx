import React, { useState } from "react";
import {
  Star,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Navigation2,
  Check,
  Users,
  UtensilsCrossed,
  ParkingCircle
} from "lucide-react";
import stars from "../../../public/staffhand/stars1.png";

import { motion, AnimatePresence } from "framer-motion";
import mainimg1 from "../../../public/newRoom/image1.avif";
import mainimg2 from "../../../public/newRoom/image4.avif";
import mainimg3 from "../../../public/hero/3.jpg";
import mainimg23 from "../../../public/newRoom/private-3.avif";
import mainimg33 from "../../../public/newRoom/image3.avif";

import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";
import { ChevronDown, X } from "lucide-react";
import DetailsAddBar from "../../Component/detilsBar/DetailsAddBar";
import Footer from "../../Component/footer/Footer";
import { Review } from "../../Component/review/Review";
import Faq from "../../Component/calculativeSection/Faq";
import AlertBanner from "../../Component/aboutUsComponent/AlertBanner";
import LocationMap from "../../Component/hotelLocations/LocationMap";
import PropertyRules from "../../Component/propertyRules/PropertyRules";
import GussetPhotos from "../../Component/GussetPhotos";
import zenbed1 from "../../../public/NewZenRoom/zenbed1.jpg"
import zenbed2 from "../../../public/NewZenRoom/zenbed2.jpg"
import zenbed3 from "../../../public/NewZenRoom/zenbed3.jpg"


const amenities = [



  // { name: "Swimming Pool", icon: "🏊" },
  { name: "Elevator/Lift", icon: "🛗" },
  { name: "WIFI", icon: "🛜" },
  { name: "Parking", icon: "🚘" },
  { name: "Aircondition", icon: "❄️" },
  { name: "HouseKepping", icon: "🏡" }
];

const luxuryFeatures = [
  {
    title: "Pan Asian Restaurant",
    image: "../../../public/hero/1.jpg",
  },
  {
    title: "Luxury Spa",
    image: "../../../public/hero/2.jpg",
  },
  {
    title: "Outdoor Pool",
    image: "../../../public/hero/3.jpg",
  },
];

export default function RoomDetails() {
  const [activeTab, setActiveTab] = useState("food");
  const [currentFeatureIndex, setCurrentFeatureIndex] = useState(0);
  const navigate = useNavigate();

  const handleCheackOut = () => {
    navigate("/cheackout");
  };

  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const openLightbox = (images, index) => {
    setLightboxImages(images);
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
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
  const galleryImages = [
   mainimg1
,
   mainimg2,

zenbed1
  ];

  const galleryImages1 = [
zenbed1
  ];
  const galleryImages2 = [
 mainimg2
  ];
  const galleryImages3 = [
   mainimg1
,
   mainimg2,zenbed1,zenbed2,zenbed3
  ];

  return (
    <>
      <Header />
      <div className="w-full pt-[100px]  pb-[40px] ">
        {/* <div className=" flex  relative z-[10]  rounded-[10px] py-[20px] border bg-white 2xl:w-[1160px]  mt-[20px] w-[79%]  px-[30px] mx-auto  shadow-sm  justify-center  flex-col ">

          <h1 className="text-2xl  font-Poppins font-[600]  text-left flex  gap-2">
          Zen Room 
          </h1>
        </div> */}

        <div className="flex  mb-[20px] relative z-[10]  rounded-[10px]  bg-white 2xl:w-[1300px]  mt-[20px] md:w-[79%] w-[90%]  mx-auto   justify-center  flex-col">
          <h1 className=" flex text-[30px] font-[600] font-Poppins ">

            <span
              style={{
                color: "#ffc02d",
                textShadow: "0 2px 4px rgba(224, 224, 222, 0.4)",
              }}
              className="  text-[#fcaf17] drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(196, 196, 196)]  flex font-[600] px-[6px] font-Poppins"
            >
              Zen
            </span>
            Room{" "}
            {/* <img className=" w-[30px]" src={stars} /> */}
          </h1>

        </div>
        <div className=" md:w-[84%] mx-auto shadow-custom font-Poppins   px-6 pb-6 lg:px-10 lg:pb-10  relative mb-[30px]  bg-white rounded-lg">
          <div className="grid grid-cols-1  lg:grid-cols-[2fr,1fr] gap-6">
            <div>
              {/* <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                {galleryImages1.map((src, index) => (
                  <>
                    <div className="relative rounded-lg" onClick={() => openLightbox(galleryImages, index)}>
                      <img
                        // src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741842057/rzsbdaylisdvcyrixm23.avif"
                        // alt="Hotel exterior"
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                      />
               
                    </div>
                  </>
                ))}
                {/* <div className="space-y-4">
                  {[1].map((photo) => (
                    <div
                      key={photo}
                      className="relative rounded-lg overflow-hidden h-[150px] md:h-[191px]"
                    >
                      <img
                        src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741842058/q8suxzia7dqo1ivhu5im.avif"
                        alt={`Hotel interior ${photo}`}
                        className="w-full h-full object-cover"
                      />
       
                    </div>
                  ))}
                  {[1].map((photo) => (
                    <div
                      key={photo}
                      className="relative rounded-lg overflow-hidden h-[150px] md:h-[191px]"
                    >
                      <img
                        src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840375/vt6u7bcp4kfmdmkizqwu.jpg"
                        alt={`Hotel interior ${photo}`}
                        className="w-full h-full object-cover"
                      />
          
                    </div>
                  ))}
                </div> 
                <div className="space-y-4">
                  {galleryImages.map((src, index) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden h-[150px] md:h-[191px] cursor-pointer"
                      onClick={() => openLightbox(galleryImages, index)}
                    >
                      <img
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>

              </div> */}

              <div className="grid grid-cols-2  relative md:grid-cols-[2fr,1fr] gap-[7px] md:gap-4">
                {/* Main Image */}
                <div
                  className="relative rounded-lg cursor-pointer"
                  onClick={() => openLightbox(galleryImages, 0)} // 👈 index 0 for first image
                >
                  <img
                    src={galleryImages[0]}
                    alt="Main image"
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                  />
                </div>

                {/* Side Images */}
                <div className="md:space-y-4 relative space-y-2">
                {galleryImages.slice(1, 3).map((img, i) => (
                    <div
                      key={i + 1}
                      className="relative rounded-lg overflow-hidden h-[146px] md:h-[191px] cursor-pointer"
                      onClick={() => openLightbox(galleryImages, i + 1)} // 👈 use correct index
                    >
                      <img
                        src={img}
                        alt={`Gallery ${i + 2}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className="w-[100%] bottom-0 cursor-pointer text-[#fff] text-[29px] flex justify-center items-center rounded-[6px] left-0 mx-auto right-[0px] absolute bg-[#000000a9] h-[48%]"
                    onClick={() => openLightbox(galleryImages3, 0)} // ✅ Open full gallery starting at first image
                  >
                    +6
                  </div>

                </div>
              </div>

              <div className="mt-6  font-Poppins text-[#666666]">
                Garden View | Double Bed
                {/* <button className="text-[#0066b2] hover:underline">
                  {" "}
                  More
                </button> */}
              </div>
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => setActiveTab("food")}
                  className={`flex items-center gap-2  font-Poppins px-4 py-2 rounded-full ${activeTab === "food"
                    ? "bg-[#EBF3FF] text-[#0066b2]"
                    : "bg-[#F8F8F8] text-[#666666]"
                    }`}
                >
                  🍽️ Food and Dining
                </button>
                <button
                  onClick={() => setActiveTab("location")}
                  className={`flex items-center  font-Poppins gap-2 px-4 py-2 rounded-full ${activeTab === "location"
                    ? "bg-[#EBF3FF] text-[#0066b2]"
                    : "bg-[#F8F8F8] text-[#666666]"
                    }`}
                >
                  📍 Location & Surroundings
                </button>
              </div>
              <div className="mt-8">
                <h2 className="text-xl font-[500] mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-3">
                  {amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-[#666666]"
                    >
                      <span className="text-xl">{amenity.icon}</span>
                      <span className="text-sm">{amenity.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className=" mx-auto font-Poppins space-y-4">
              <div className="rounded-[10px] border bg-white px-5 py-[15px]">
                <h1 className="text-[20px] font-[600]">Zen Room  </h1>
                <p className="text-[15px] mb-4">Fits 2 Adults</p>

                <ul className="space-y-1 mb-6">
                  <li className="flex items-center  text-[15px] gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    No meals included
                  </li>
                  <li className="flex items-center  text-[13px] gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                  15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited
                  </li>
                </ul>
                {/* 
                <div className="mb-3">
                  <div className="text-gray-600 text-[12px] font-[500]">
                    Per Night:
                  </div>
                  <div className="flex items-baseline  gap-2">
                    <span className="text-[25px] font-[600]">₹5,293</span>
                    <span className="text-gray-600 text-[13px]">
                      + ₹1,298 taxes & fees
                    </span>
                  </div>
                </div> */}

                <div className="flex items-center gap-4">
                  <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                    <button className=" basalt py-[10px] rounded-[7px]   w-[160px] font-[500] text-[13px] text-[#fff] px-[10px]">
                      BOOK THIS NOW
                    </button>
                  </a>
                  {/* <button className="text-[#4169E1]  text-[13px] font-[400] hover:underline">
                    11 More Options
                  </button> */}
                </div>


              </div>

              <div className="rounded-[10px] relative  border bg-white p-4">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                  </div>
                </div>

                <div className="flex items-start rjustify-between">
                  <div className="flex flex-col gap-1">
                    <div className=" flex gap-[10px] items-center ">
                      <div className="relative  w-[50px] h-[50px] rounded-lg overflow-hidden bg-[#4169E1]/10">
                        <MapPin className="absolute inset-0 m-auto text-[#4169E1]" />
                      </div>
                      <h2 className="text-[20px] font-[500] mb-1">  Halol</h2>
                    </div>

                    <div>

                      <p className="text-gray-600   text- text-[13px] ">


                        10.0 km drive to Champaner-Pavagadh Archaeological Park
                      </p>
                    </div>
                  </div>
                  {/* <button className="text-[#4169E1] hover:underline  absolute top-[10px]  right-3 text-[14px] whitespace-nowrap">
                    See on Map
                  </button> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" w-[100%] mx-auto font-Poppins bg-white">
          {/* Header
          <div className="  flex justify-between bg-[#F5F9FF] border-b items-center border-[#E5E5E5]">
            <div className="p-4">
              <button className="bg-[#4169E1] text-white px-4 py-2 rounded-md flex items-center gap-2">
                <span>2 Room Types</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="p-4 font-medium">Room Options</div>
            <div className="p-4 font-medium mr-[30px]">Price</div>
          </div>  */}

          {/* <DetailsAddBar /> */}

          {/* Room Details */}







          <div className=" flex font-Poppins  flex-col  2xl:w-[1300px]     overflow-hidden md:w-[79%] mx-auto w-[90%] border rounded-[10px]  mt-[10px] border-[#E5E5E5]  shadow-lg ">
            {/* Left Column - Room Info */}
            <div className=" flex w-[100%] px-5 border-b text-[13px] text-[#828282] py-[14px] l bggradiant b ">
              Enjoy Free Breakfast throughout your stay for just ₹595 more!
            </div>
            <div className="  flex md:flex-row flex-col  gap-[25px]">


              <div className="flex md:border-r border-b md:border-b-0 px-6  pt-[20px] pb-[20px] flex-col md:w-[42%] gap-[10px]">
                {galleryImages1.map((src, index) => (
                  <>


                    <div key={index} className=" cursor-pointer relative mb-2" onClick={() => openLightbox(galleryImages1, index)}>
                      <img
                        // src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840375/vt6u7bcp4kfmdmkizqwu.jpg "
                        // alt="Deluxe Room"
                        src={src}
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-[200px] object-cover rounded-[20px]"
                      />

                    </div>
                  </>
                ))}
                <div className=" mb-[10px]">
                  <h2 className="text-lg font-[600] ">Zen Room</h2>
                  <p className=" flex text-[14px]">
                    (Garden View | Double Bed)
                  </p>
                </div>
                <div className=" gap-[10px] justify-between w-[100%]  flex">
                  <div className="space-y-2 text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span className=" text-[#4e4d4d]">Mineral Water</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>Housekeeping</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>Bathroom</span>
                    </div>
                    {/* <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>City View</span>
                    </div> */}
                  </div>
                  <div className="space-y-2 mb-[10px] text-[13px]">
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span className=" text-[#4e4d4d]">Air Conditioning
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>
                        Wi-Fi</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>Room Service</span>
                    </div>

                  </div>
                </div>

                {/* <button className="text-[#4169E1] text-sm mt-4">
                  View More Details
                </button> */}
              </div>
              <div className=" flex w-[100%]  flex-col gap-[20px]">
                {/* Middle Column - Room Options */}
                <div className="grid relative grid-cols-1 gap-4 rounded-[20px]  transition-transform duration-600  hover:border-[#1c55f1]  p-4 lg:grid-cols-3">
                  <div className="col-span-2">
                    <h3 className="font-medium">Room with Breakfast </h3>
                    <div className=" flex items-center mt-[10px] gap-[10px]">
                      <div className=" w-[9px] mt-2 h-[9px] rounded-full bg-[#7d7d7d]">

                      </div>
                      <div className="mt-2 text-[13px] text-gray-600">
                        Free Breakfast
                      </div>
                    </div>

                    <div className="mt-2 flex  gap-2 text-0">
                      <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                      <span className=" flex  text-gray-600 text-[13px]">
                      15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                    </div>
                    {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> */}
                  </div>
                  <div className="text-right space-y-2">
                    {/* <div className="text-[13px] text-gray-500 line-through">
                      ₹6,600
                    </div>
                    <div className="text-[25px] font-[600]">₹5,921</div>
                    <div className="text-[12px] text-gray-600">
                      + ₹1,452 taxes & fees
                    </div>
                    <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div> */}
                    <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                      <button className="md:absolute basalt bottom-[-240px] right-[20px] py-[7px] text-[#fff] mt-[20px] font-[500] rounded-[7px] text-[14px] w-[140px]">
                        BOOK THIS NOW
                      </button>
                    </a>


                  </div>
                </div>

                {/* Room with Breakfast */}

              </div>
            </div>
          </div>










          <div className=" flex  w-[100%] mx-auto flex-col">

            <div className=" flex font-Poppins  flex-col   overflow-hidden md:w-[79%] w-[90%] 2xl:w-[1300px]    mx-auto border rounded-[10px]  mt-[10px] border-[#E5E5E5]  shadow-lg ">
              {/* Left Column - Room Info */}
              {/* <div className=" flex w-[100%] px-5 border-b text-[13px] text-[#828282] py-[14px] l bggradiant b ">
              Enjoy Free Breakfast throughout your stay for just ₹595 more!
            </div> */}
              <div className="  flex md:flex-row flex-col  gap-[25px] ">


                <div className=" flex md:border-r border-b md:border-b-0 px-6  pt-[20px] pb-[20px] flex-col md:w-[42%] gap-[10px]">

                  {/* <div className="relative mb-2">
                    <img
                      src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741842058/q8suxzia7dqo1ivhu5im.avif  "
                      alt="Deluxe Room"
                      className="w-full h-[200px] object-cover rounded-[20px]"
                    />
                    {/* <button className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    +11 Photos
                  </button> 
                  </div> */}

                  {galleryImages2.map((src, index) => (
                    <>


                      <div key={index} className=" cursor-pointer relative mb-2" onClick={() => openLightbox(galleryImages2, index)}>
                        <img

                          src={src}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-[200px] object-cover rounded-[20px]"
                        />

                      </div>
                    </>
                  ))}
                  <div className=" mb-[10px]">
                    <h2 className="text-lg font-[600] ">Zen Room</h2>
                    <p className=" flex text-[14px]">
                      (Garden View | Double Bed)
                    </p>
                  </div>
                  <div className=" gap-[10px] justify-between w-[100%]  flex">
                    <div className="space-y-2 text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span className=" text-[#4e4d4d]">Mineral Water</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>Housekeeping</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>Bathroom</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>City View</span>
                    </div> */}
                    </div>
                    <div className="space-y-2 mb-[10px] text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span className=" text-[#4e4d4d]">Air Conditioning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>
                          Wi-Fi</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>Room Service</span>
                      </div>

                    </div>
                  </div>

                  {/* <button className="text-[#4169E1] text-sm mt-4">
                  View More Details
                </button> */}
                </div>
                <div className=" flex w-[100%] relative  flex-col gap-[0px]">
                  {/* Middle Column - Room Options */}
                  <div className="grid grid-cols-1 gap-4  border-b  transition-transform duration-600    p-6 lg:grid-cols-3">
                    <div className="col-span-2">
                      <h3 className="font-medium">Room Only </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">

                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          No meals included
                        </div>
                      </div>

                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">

                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> */}
                    </div>
                    <div className="text-right relative space-y-2">
                      {/* <div className="text-[13px] text-gray-500 line-through">
                        ₹5,900
                      </div>
                      <div className="text-[25px] font-[600]"> ₹5,293</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹1,298 taxes & fees per night
                      </div> */}

                      <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt py-[7px] bottom-[5px] right-0 md:absolute mt-[20px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          BOOK THIS NOW
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 border-b gap-4 transition-transform duration-600    p-4 lg:grid-cols-3">
                    <div className="col-span-2">
                      <h3 className="font-medium">Room with Breakfast </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">

                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Breakfast
                        </div>
                      </div>

                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">
                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> */}
                    </div>
                    <div className="text-right relative space-y-1">
                      {/* <div className="text-[13px] text-gray-500 line-through">
                        ₹6,600
                      </div>
                      <div className="text-[25px] font-[600]">₹5,921</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹1,452 taxes & fees
                      </div>
                      <div className="mb-2 text-[13px]">
                        <span className="font-medium">1 Room</span>
                        <span className="text-gray-500"> per night</span>
                      </div> */}
                      <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt py-[7px] bottom-[5px] right-0 md:absolute mt-[20px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          BOOK THIS NOW
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4   border-b  transition-transform duration-600    p-4 lg:grid-cols-3">
                    <div className="col-span-2">
                      <h3 className="font-medium">Room With Breakfast + Lunch + Dinner </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Breakfast
                        </div>
                      </div>
                      <div className=" flex items-center mt-[px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Lunch
                        </div>
                      </div>
                      <div className=" flex items-center  gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Dinner
                        </div>
                      </div>
                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">
                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> */}
                    </div>
                    <div className="text-right relative space-y-1">
                      {/* <div className="text-[13px] text-gray-500 line-through">
                        ₹9,800
                      </div>
                      <div className="text-[25px] font-[600]">₹8,820</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹2,744 taxes & fees
                      </div>
                      <div className="mb-2 text-[13px]">
                        <span className="font-medium">1 Room</span>
                        <span className="text-gray-500"> per night</span>
                      </div> */}
                      <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt mt-[20px] bottom-[5px] right-0 md:absolute  py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          BOOK THIS NOW
                        </button>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-1    gap-4 transition-transform duration-600  p-4 lg:grid-cols-3">
                    <div className="col-span-2   ">
                      <h3 className="font-medium">Room With Breakfast + Lunch + Hi-Tea + Dinner </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Breakfast
                        </div>
                      </div>
                      <div className=" flex items-center mt-[px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Lunch
                        </div>
                      </div>
                      <div className=" flex items-center mt-[px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Hi Tea
                        </div>
                      </div>
                      <div className=" flex items-center  gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">
                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Dinner
                        </div>
                      </div>
                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">
                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> */}
                    </div>
                    <div className="text-right relative space-y-1">
                      {/* <div className="text-[13px] text-gray-500 line-through">
                        ₹9,800
                      </div>
                      <div className="text-[25px] font-[600]">₹8,820</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹2,744 taxes & fees
                      </div>
                      <div className="mb-2 text-[13px]">
                        <span className="font-medium">1 Room</span>
                        <span className="text-gray-500"> per night</span>
                      </div> */}
                      <a href="https://asiatech.in/booking_engine/index3?token=NjU4MQ==" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt mt-[20px] bottom-[5px] right-0 md:absolute  py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          BOOK THIS NOW
                        </button>
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>


            {/* <div className=" flex font-Poppins  flex-col  2xl:w-[1300px]     overflow-hidden w-[79%] mx-auto border rounded-[10px]  mt-[10px] border-[#E5E5E5]  shadow-lg ">
       
       
              <div className="  flex ">


                <div className=" flex border-r px-6  pt-[20px] pb-[20px] flex-col w-[42%] gap-[10px]">

                  {/* <div className="relative mb-2">
                    <img
                      src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741842059/mlwklc0y0vxyqrfjr8vl.avif"
                      alt="Deluxe Room"
                      className="w-full h-[200px] object-cover rounded-[20px]"
                    />

                  </div> 


                  {galleryImages3.map((src, index) => (
                    <>


                      <div key={index} className=" cursor-pointer relative mb-2" onClick={() => openLightbox(galleryImages3, index)}>
                        <img

                          src={src}
                          alt={`Gallery ${index + 1}`}
                          className="w-full h-[200px] object-cover rounded-[20px]"
                        />

                      </div>
                    </>
                  ))}
                  <div className=" mb-[10px]">
                    <h2 className="text-lg font-[600] ">Villa with Private pool</h2>
                    <p className=" flex text-[14px]">
                      (Garden View | King Bed)

                    </p>
                  </div>
                  <div className=" gap-[10px] justify-between w-[100%]  flex">
                    <div className="space-y-2 text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span className=" text-[#4e4d4d]">Mineral Water</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>Housekeeping</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>Room Service</span>
                      </div>
                      {/* <div className="flex items-center gap-2">
                      <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                      </div>
                      <span>City View</span>
                    </div> 
                    </div>
                    <div className="space-y-2 mb-[10px] text-[13px]">
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span className=" text-[#4e4d4d]">Air Conditioning
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className=" flex w-[5px] rounded-full bg-[#757575] h-[5px]">

                        </div>
                        <span>
                          Wi-Fi</span>
                      </div>


                    </div>
                  </div>

                  {/* <button className="text-[#4169E1] text-sm mt-4">
                  View More Details
                </button> 
                </div>
                <div className=" flex w-[100%]  flex-col gap-[0px]">
                  {/* Middle Column - Room Options 
                  <div className="grid grid-cols-1 gap-4  border-b  transition-transform duration-600    p-6 lg:grid-cols-3">
                    <div className="col-span-2">
                      <h3 className="font-medium">Room Only </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">

                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          No meals included
                        </div>
                      </div>

                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">

                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> 
                    </div>
                    <div className="text-right space-y-2">
                      <div className="text-[13px] text-gray-500 line-through">
                        ₹18,400
                      </div>
                      <div className="text-[25px] font-[600]">₹15,640</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹4,968 taxes & fees per night
                      </div>
                      {/* <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div> 
                      <a href="https://wa.me/918799454980" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          SELECT ROOM
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 rounded-[20px]  transition-transform duration-600  hover:border-[#1c55f1]  p-4 lg:grid-cols-3">
                    <div className="col-span-2">
                      <h3 className="font-medium">Room with Breakfast </h3>
                      <div className=" flex items-center mt-[10px] gap-[10px]">
                        <div className=" w-[9px] mt-2 ml-[4px] h-[9px] rounded-full bg-[#7d7d7d]">

                        </div>
                        <div className="mt-2 text-[13px] text-gray-600">
                          Free Breakfast
                        </div>
                      </div>

                      <div className="mt-2 flex  gap-2 text-0">
                        <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                        <span className=" flex  text-gray-600 text-[13px]">
                        15-7 days before the event:  25% of the deposit will be forfeited. 7-3 days before the event:  50% of the deposit will be forfeited. Less than 3 days (72 hours) before the event:  No refund. Entire deposit is forfeited</span>
                      </div>
                      {/* <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button> 
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-[13px] text-gray-500 line-through">
                        ₹19,800
                      </div>
                      <div className="text-[25px] font-[600]">₹16,830</div>
                      <div className="text-[12px] text-gray-600">
                        + ₹5,346 taxes & fees
                      </div>
                      <div className="mb-2 text-[13px]">
                        <span className="font-medium">1 Room</span>
                        <span className="text-gray-500"> per night</span>
                      </div>
                      <a href="https://wa.me/918799454980" target="_blank" rel="noopener noreferrer">
                        <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                          SELECT ROOM
                        </button>
                      </a>

                    </div>
                  </div>

                  {/* Room with Breakfast *x`

                </div>
              </div>
            </div> */}
          </div>

        </div>


      </div>

      <div className=" 2xl:w-[1300px] !bg-[#]  md:w-[100%] pb-[20px] pt-[10px]   flex flex-col gap-[62px] h-[100%] mx-auto">
        <LocationMap />
        <PropertyRules />
        <GussetPhotos />
        <Review />
        <Faq />
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
