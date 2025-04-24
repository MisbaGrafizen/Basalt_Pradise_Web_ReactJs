import React, { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import logo from "../../../public/logo.png";

const reelLinks = [
  "https://www.instagram.com/reel/DIvYPZzRx67/?utm_source=ig_web_copy_link",
//   "https://www.instagram.com/reel/CTeF1r1F1F1/",
//   "https://www.instagram.com/reel/CUXc2r1xTgB/",
  // Add more Instagram Reel links here...
];

export default function InfluencersReels() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? reelLinks.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === reelLinks.length - 1 ? 0 : prev + 1));
  };

  const getEmbedURL = (link) => {
    const match = link.match(/\/reel\/([^/]+)\//);
    return match
      ? `https://www.instagram.com/reel/${match[1]}/embed`
      : "";
  };

  return (
    <div className="flex w-full">
      <div className="md:w-[93%] w-[90%] md:px-[10px] mt-[40px] font-Poppins flex mx-auto">
        <div className="flex flex-col gap-[30px] justify-between relative w-full">
          <div className="border border-gray-200 flex flex-col gap-[30px] rounded-lg overflow-hidden">
            <div className="h-[7px] bg-orange-500"></div>

            <div className="flex md:flex-row flex-col justify-center items-center gap-3">
              <img className="w-[150px] object-cover" src={logo} alt="Logo" />
              <h2 className="font-[400] text-[#f6b02f] font-LukleyCursive text-[30px]">
                Our Lovely Influencers
              </h2>
            </div>

            <div className="flex gap-[20px] w-[95%] mx-auto overflow-x-auto pb-[30px]">
            {reelLinks.map((link, index) => (
                <div
                  key={index}
                  className="w-[280px] h-[320px] rounded-lg overflow-hidden  border !scrollbar-hide shadow-md cursor-pointer bg-black"
                  onClick={() => openLightbox(index)}
                >
                  <iframe
                    src={getEmbedURL(link)}
                    className="w-full h-full pointer-events-none"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                    title={`Reel ${index + 1}`}
                  ></iframe>
                </div>
              ))}
            </div>
          </div>

          {isOpen && (
            <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4">
              <button
                className="absolute top-5 right-5 text-white hover:text-gray-300"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>

              <button
                className="absolute left-5 text-white hover:text-gray-300"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                className="absolute right-5 text-white hover:text-gray-300"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              {/* Fixed-size Reel View */}
              <div className="w-[95%] max-w-[700px] h-[80vh] bg-black rounded-md overflow-hidden shadow-lg">
                <iframe
                  src={getEmbedURL(reelLinks[currentIndex])}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={`Reel ${currentIndex + 1}`}
                ></iframe>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
