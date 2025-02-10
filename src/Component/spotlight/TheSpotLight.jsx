import React from "react";
import firstimage from "../../../public/rportersLogo/logo1.png";
import firstimage1 from "../../../public/rportersLogo/logo2.svg";
import firstimage2 from "../../../public/rportersLogo/logo3.svg";

const spotlightData = [
  {
    image: firstimage,
    title: "Luxury Redefined: The Exclusive Experience at Basalt Paradise",
    description:
      "Basalt Paradise offers an unmatched luxury experience with world-class accommodations, fine dining, and breathtaking ocean views. Guests indulge in serene spa treatments, exclusive beach access, and personalized concierge services to create unforgettable memories.",
  },
  {
    image: firstimage1,
    title: "A Haven of Tranquility: Discover the Serenity of Basalt Paradise",
    description:
      "Nestled amidst stunning landscapes, Basalt Paradise is the perfect escape for those seeking relaxation and luxury. The resort features elegant suites, infinity pools, and a range of outdoor activities, ensuring a rejuvenating stay for every guest.",
  },
  {
    image: firstimage2,
    title: "The Ultimate Getaway: Basalt Paradise’s Exclusive Retreats",
    description:
      "Experience the pinnacle of comfort and relaxation at Basalt Paradise. From private villas with panoramic views to curated culinary delights, every aspect of your stay is designed for indulgence. Discover unparalleled hospitality and refined elegance at our luxury resort.",
  },
];

export default function TheSpotLight() {
  return (
    <div className="md:w-[80%] w-[95%] px-[15px] font-Poppins flex mx-auto">
      <div className="flex flex-col gap-[30px] justify-between relative w-[100%]">
        <div className="flex flex-col">
          <h1 className="flex font-[700] text-[35px] font-Poppins">
            In The <span className="text-[#fcaf17] pl-[10px]">Spotlight</span>
          </h1>
          <p className="flex font-[500] text-[#515151] text-[17px]">
            Dive into a World of Ideas, Stories, News and Inspiration
          </p>
        </div>
        <div className="flex w-[100%] overflow-x-auto justify-between gap-[20px]">
          {spotlightData.map((item, index) => (
            <div
              key={index}
              className="flex w-[330px] h-[340px] gap-[15px] flex-col rounded-[10px] p-[15px] flex-shrink-0  shadow-md bg-[#f4f4f4]"
            >
              <img className="w-[120px] h-[30px] rounded-[4px]" src={item.image} alt="logo" />
              <span className="flex bg-[#e0e0e0] w-[100%] h-[1px]"></span>
              <div className="flex gap-[10px] flex-col">
                <h2 className="flex text-[#202020] font-[500] text-[15px]">
                  {item.title}
                </h2>
                <p className="flex text-[14px] text-[#515151] font-[400]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}