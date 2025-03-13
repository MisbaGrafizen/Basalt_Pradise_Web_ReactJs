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
} from "lucide-react";

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
const amenities = [
  { name: "Spa", icon: "🧖‍♀️" },
  { name: "Swimming Pool", icon: "🏊‍♂️" },
  { name: "Gym", icon: "🏋️‍♂️" },
  { name: "Restaurant", icon: "🍽️" },
  { name: "24-hour Room Service", icon: "🕒" },
  { name: "Lounge", icon: "🛋️" },
  { name: "Bar", icon: "🍸" },
  { name: "Steam and Sauna", icon: "♨️" },
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

  return (
    <>
      <Header />
      <div className="w-full pt-[100px] pb-[40px] ">
        <div className=" flex  relative z-[10]  rounded-[10px] py-[20px] border bg-white 2xl:w-[1160px]  mt-[20px] w-[79%]  px-[30px] mx-auto  shadow-sm  justify-center  flex-col ">

          <h1 className="text-2xl  font-Poppins font-[600]  text-left flex  gap-2">
          Zen Room Only
          </h1>
        </div>
        <div className=" w-[84%] mx-auto shadow-custom font-Poppins   p-6 lg:p-10  relative mb-[30px]  bg-white rounded-lg">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                <div className="relative rounded-lg">
                  <img
                    src={mainimg1}
                    alt="Hotel exterior"
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                  />
                  {/* <div className="absolute bottom-4  font-Poppins left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    +103 Property Photos
                  </div> */}
                </div>
                <div className="space-y-4">
                  {[1, 2].map((photo) => (
                    <div
                      key={photo}
                      className="relative rounded-lg overflow-hidden h-[150px] md:h-[191px]"
                    >
                      <img
                        src={mainimg2}
                        alt={`Hotel interior ${photo}`}
                        className="w-full h-full object-cover"
                      />
                      {/* {photo === 2 && (
                        <div className="absolute bottom-4  font-Poppins left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          +1222 Guest Photos
                        </div>
                      )} */}
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6  font-Poppins text-[#666666]">
                Tui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
                <button className="text-[#0066b2] hover:underline">
                  {" "}
                  More
                </button>
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
                <h1 className="text-[20px] font-[600]">Zen Room Only </h1>
                <p className="text-[15px] mb-4">Fits 2 Adults</p>

                <ul className="space-y-1 mb-6">
                  <li className="flex items-center  text-[15px] gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    No meals included
                  </li>
                  <li className="flex items-center  text-[15px] gap-2 text-gray-600">
                    <span className="w-1.5 h-1.5 bg-gray-600 rounded-full" />
                    Non-Refundable
                  </li>
                </ul>

                <div className="mb-3">
                  <div className="text-gray-600 text-[12px] font-[500]">
                    Per Night:
                  </div>
                  <div className="flex items-baseline  gap-2">
                    <span className="text-[25px] font-[600]">₹4,668</span>
                    <span className="text-gray-600 text-[13px]">
                      + ₹1,180 taxes & fees
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <button className=" basalt py-[10px] rounded-[7px]   w-[160px] font-[500] text-[13px] text-[#fff] px-[10px]">
                    BOOK THIS NOW
                  </button>
                  {/* <button className="text-[#4169E1]  text-[13px] font-[400] hover:underline">
                    11 More Options
                  </button> */}
                </div>
              </div>

              <div className="rounded-[10px] relative  border bg-white p-4">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <div className=" basalt text-white text-[18px] font-[600] w-[70px] h-[40px] rounded-md flex items-center justify-center">
                      4.0
                    </div>
                    <div>
                      <span className="text-[19px] font-[600] ">
                        Very Good{" "}
                      </span>
                      <span className="text-gray-600 text-[13px]">
                        (1695 ratings)
                      </span>
                    </div>
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
                      
                      
                        15 minutes walk to Champaner-Pavagadh Archaeological Park
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

          <DetailsAddBar />

          {/* Room Details */}
          <div className=" flex  w-[79%] mx-auto flex-col">


            <div className=" flex   w-[100%] border rounded-[10px] mx-auto  mt-[10px] border-[#E5E5E5] p-6 shadow-lg gap-6">
              {/* Left Column - Room Info */}
              <div className=" flex flex-col w-[30%] gap-[20px]">
                <h2 className="text-lg font-medium mb-">Vila with Private Pool</h2>
                <div className="relative mb-4">
                  <img
                    src={mainimg23}
                    alt="Deluxe Room"
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                  <button className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    +11 Photos
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M3 21h18M5 21V3h14v18M9 8h6" strokeWidth="1.5" />
                    </svg>
                    <span>110 sq.ft (10 sq.mt)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M2 18h20M4 18V8a2 2 0 012-2h12a2 2 0 012 2v10M6 14h12"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>Double Bed</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 12a4 4 0 100-8 4 4 0 000 8zM20 21a8 8 0 10-16 0"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>Max 4 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>City View</span>
                  </div>
                </div>
                {/* <button className="text-[#4169E1] text-sm mt-4">
                  View More Details
                </button> */}
              </div>
              <div className=" flex w-[100%] flex-col gap-[20px]">
                {/* Middle Column - Room Options */}
                <div className="grid grid-cols-1 gap-4 rounded-lg  transition-transform duration-600  hover:border-[#1c55f1] border p-4 lg:grid-cols-3">
                  <div className="col-span-2">
                    <h3 className="font-medium"> Room Only</h3>
                    <div className="mt-2 text-[13px] text-gray-600">

                    </div>
                    <div className="mt-2 flex items-center gap-2 text-red-500">
                      <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                      <span className=" flex text-[13px]">Non-Refundable</span>
                    </div>
                    <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] text-gray-500 line-through">
                      ₹18,400
                    </div>
                    <div className="text-[25px] font-[600]">₹15,180</div>
                    <div className="text-[12px] text-gray-600">
                      + ₹4,784 taxes & fees
                    </div>
                    <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div>
                    <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                      SELECT ROOM
                    </button>
                    <div className="mt-2 text-[11px] text-blue-600">
                      Login Now to unlock best deals and offers!
                    </div>
                  </div>
                </div>

                {/* Room with Breakfast */}
                <div className="grid grid-cols-1 gap-4 rounded-lg  transition-transform duration-600  hover:border-[#1c55f1] border p-4 lg:grid-cols-3">
                  <div className="col-span-2">
                    <h3 className="font-medium">Room With Breakfast</h3>
                    <div className="mt-2 text-[13px] text-gray-600">
                      Free Breakfast 
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-red-500">
                      <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                      <span className=" flex text-[13px]">Non-Refundable</span>
                    </div>
                    <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] text-gray-500 line-through">
                      ₹19,800
                    </div>
                    <div className="text-[25px] font-[600]">₹16,335</div>
                    <div className="text-[12px] text-gray-600">
                      + ₹5,148 taxes & fees
                    </div>
                    <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div>
                    <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                      SELECT ROOM
                    </button>
                    <div className="mt-2 text-[11px] text-blue-600">
                      Login Now to unlock best deals and offers!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" flex font-Poppins   w-[100%] border rounded-[10px]  mt-[10px] border-[#E5E5E5] p-6 shadow-lg gap-6">
              {/* Left Column - Room Info */}
              <div className=" flex flex-col w-[30%] gap-[20px]">
                <h2 className="text-lg font-medium mb-">Zen Room</h2>
                <div className="relative mb-4">
                  <img
                    src={mainimg33}
                    alt="Deluxe Room"
                    className="w-full h-[200px] object-cover rounded-md"
                  />
                  <button className="absolute bottom-3 left-3 bg-black/70 text-white px-3 py-1 rounded text-sm">
                    +11 Photos
                  </button>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M3 21h18M5 21V3h14v18M9 8h6" strokeWidth="1.5" />
                    </svg>
                    <span>110 sq.ft (10 sq.mt)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M2 18h20M4 18V8a2 2 0 012-2h12a2 2 0 012 2v10M6 14h12"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>ZenRoom - 2 Pax</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M12 12a4 4 0 100-8 4 4 0 000 8zM20 21a8 8 0 10-16 0"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>Max 4 Guests</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        d="M4 4h16M4 8h16M4 12h16M4 16h16M4 20h16"
                        strokeWidth="1.5"
                      />
                    </svg>
                    <span>City View</span>
                  </div>
                </div>
                {/* <button className="text-[#4169E1] text-sm mt-4">
                  View More Details
                </button> */}
              </div>
              <div className=" flex w-[100%] flex-col gap-[20px]">
                {/* Middle Column - Room Options */}
                <div className="grid grid-cols-1 gap-4 rounded-lg  transition-transform duration-600  hover:border-[#1c55f1] border p-4 lg:grid-cols-3">
                  <div className="col-span-2">
                    <h3 className="font-medium">ZenRoom </h3>
                    <div className="mt-2 text-[13px] text-gray-600">
               
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-red-500">
                      <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                      <span className=" flex text-[13px]">Non-Refundable</span>
                    </div>
                    <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] text-gray-500 line-through">
                      ₹16,200
                    </div>
                    <div className="text-[25px] font-[600]">₹4,000</div>
                    <div className="text-[12px] text-gray-600">
                      + ₹4,050 taxes & fees
                    </div>
                    <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div>
                    <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                      SELECT ROOM
                    </button>
                    <div className="mt-2 text-[11px] text-blue-600">
                      Login Now to unlock best deals and offers!
                    </div>
                  </div>
                </div>

                {/* Room with Breakfast */}
                <div className="grid grid-cols-1 gap-4 rounded-lg  transition-transform duration-600  hover:border-[#1c55f1] border p-4 lg:grid-cols-3">
                  <div className="col-span-2">
                    <h3 className="font-medium">Zen Room </h3>
                    <div className="mt-2 text-[13px] text-gray-600">
                      Free Breakfast
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-red-500">
                      <i className="fa-solid  text-[#ff1414] fa-circle-xmark"></i>
                      <span className=" flex text-[13px]">Non-Refundable</span>
                    </div>
                    <button className="mt-1 text-[11px] text-blue-600 hover:underline">
                      View plan details & policies
                    </button>
                  </div>
                  <div className="text-right">
                    <div className="text-[13px] text-gray-500 line-through">
                      ₹6,600
                    </div>
                    <div className="text-[25px] font-[600]">₹5,440</div>
                    <div className="text-[12px] text-gray-600">
                      + ₹1,320 taxes & fees
                    </div>
                    <div className="mb-2 text-[13px]">
                      <span className="font-medium">1 Room</span>
                      <span className="text-gray-500"> per night</span>
                    </div>
                    <button className="  basalt py-[7px] text-[#fff] font-[500] rounded-[7px] text-[14px] w-[140px]">
                      SELECT ROOM
                    </button>
                    <div className="mt-2 text-[11px] text-blue-600">
                      Login Now to unlock best deals and offers!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
