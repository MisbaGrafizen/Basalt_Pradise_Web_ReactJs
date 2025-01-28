
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
import mainimg1 from "../../../public/hero/1.jpg";
import mainimg2 from "../../../public/hero/2.jpg";
import mainimg3 from "../../../public/hero/3.jpg";

import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";

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
  const navigate =useNavigate();
  
  const handleCheackOut =()=>{
    navigate ('/cheackout')
  }

  return (
    <>
    <Header />
      <div className="w-full pt-[100px] ">

        <div className=" flex  relative z-[10]  rounded-[10px] py-[20px] border bg-white 2xl:w-[1160px]  mt-[20px] w-[80%]  mb-[10px] px-[30px] mx-auto  shadow-md  justify-center  flex-col ">
  
            {/* Hotel Name and Rating */}
            <h1 className="text-2xl font-Lato font-bold  text-left flex  gap-2">
              Lemon Tree Premier, Mumbai International Airport
            </h1>
  
          </div>
        <div className="max-w-6xl mx-auto shadow-custom   p-6 lg:p-10  relative mb-[30px]  bg-white rounded-lg">
        
      
          <div className="grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
            {/* Left Column */}
            <div>
              {/* Main Image and Side Images */}
              <div className="grid grid-cols-1 md:grid-cols-[2fr,1fr] gap-4">
                <div className="relative rounded-lg">
                  <img
                    src={mainimg1}
                    alt="Hotel exterior"
                    className="w-full h-[300px] md:h-[400px] object-cover rounded-lg"
                  />
                  <div className="absolute bottom-4 font-Lato left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    +103 Property Photos
                  </div>
                </div>
                <div className="space-y-4">
                  {[1, 2].map((photo) => (
                    <div
                      key={photo}
                      className="relative rounded-lg overflow-hidden h-[150px] md:h-[196px]"
                    >
                      <img
                        src={mainimg3}
                        alt={`Hotel interior ${photo}`}
                        className="w-full h-full object-cover"
                      />
                      {photo === 2 && (
                        <div className="absolute bottom-4 font-Lato left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                          +1222 Guest Photos
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className="mt-6 font-Lato text-[#666666]">
                Take some time off from the monotonous life and enjoy a relaxing
                holiday in Mumbai with a stay at this luxury hotel, boasting the
                best of leisure amenities and dining options.
                <button className="text-[#0066b2] hover:underline">
                  {" "}
                  More
                </button>
              </div>

              {/* Tabs */}
              <div className="flex flex-wrap gap-4 mt-6">
                <button
                  onClick={() => setActiveTab("food")}
                  className={`flex items-center gap-2 font-Lato px-4 py-2 rounded-full ${
                    activeTab === "food"
                      ? "bg-[#EBF3FF] text-[#0066b2]"
                      : "bg-[#F8F8F8] text-[#666666]"
                  }`}
                >
                  🍽️ Food and Dining
                </button>
                <button
                  onClick={() => setActiveTab("location")}
                  className={`flex items-center font-Lato gap-2 px-4 py-2 rounded-full ${
                    activeTab === "location"
                      ? "bg-[#EBF3FF] text-[#0066b2]"
                      : "bg-[#F8F8F8] text-[#666666]"
                  }`}
                >
                  📍 Location & Surroundings
                </button>
              </div>

              {/* Amenities */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-6">
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

            {/* Right Column */}
            <div className="space-y-6 relative ">
              <div className="border sticky border-[#E5E7EB] latest-back top-4 rounded-lg p-4">
                <h3 className="text-lg font-bold  font-Lato">Deluxe Room</h3>
                <p className="text-[#000000] mt-1 font-Lato">Fits 3 Adults</p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center font-Lato gap-2 text-[#666666]">
                    • No meals included
                  </li>
                  <li className="flex items-center font-Lato gap-2 text-[#2D8A13]">
                    ✓ Free Cancellation before 11 Jan 01:59 PM
                  </li>
                </ul>
                <div className="mt-4">
                  <div className="text-[#666666] line-through">₹29,203</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold font-Lato">
                      ₹11,159
                    </span>
                    <span className="text-[#666666] font-Lato">Per Night:</span>
                  </div>
                  <div className="text-sm text-[#666666]">
                    + ₹5,534 taxes & fees
                  </div>
                </div>
                <button className="w-full anime-pink-btn font-Poppins  text-white font-medium py-3 rounded-lg mt-4 hover:bg-[#005291]" onClick={handleCheackOut}>
                  BOOK THIS NOW
                </button>
                {/* <button className="w-full text-[#0066b2] text-sm mt-2 hover:underline">
                    14 More Options
                  </button> */}
              </div>
            </div>

      
          </div>
        </div>

      </div>
    </>
  );
}
