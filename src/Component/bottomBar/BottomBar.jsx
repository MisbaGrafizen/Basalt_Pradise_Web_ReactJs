import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export default function BottomBar() {
  const navigate = useNavigate();
  const location = useLocation();

  // Determine the active tab based on the current pathname
  const getActiveTab = () => {
    const path = location.pathname;
    if (path === "/") return "Home";
    if (path === "/about-us") return "About";
    if (path === "/blogs") return "Blogs";
    if (path === "/accomdation") return "accomdation";
    if (path === "/contact-us") return "contact-us";
    return ""; // Default for unknown paths
  };

  const activeTab = getActiveTab();



  return (
    <>
      <div className="md:hidden flex  items-center border-[1.2px]    px-[10px] w-[95%] rounded-[10px]  shadow-sm h-[65px] z-[1000] fixed bottom-[20px] left-0 right-0 mx-auto bg-white justify-around gap-[7px]">
        {/* Home */}
        <div
          onClick={() => navigate("/")}
          className={`flex font-Montserrat gap-[3px] px-[12px] w-[60px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Home" ? "border-[1.2px] border-[#1e26bd] icon_bottom  text-[#1e26bd]" : "border-none text-[#000]"
            }`}
        >
          <i
            className="fa-light fa-house text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Home
          </p>
        </div>

        {/* About */}
        <div
          onClick={() => navigate("/about-us")}
          className={`flex font-Montserrat gap-[3px] w-[60px] px-[6px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "About" ? "border-[1.5px] border-[#1e26bd] icon_bottom  text-[#1e26bd]" : "border-none text-[#000]"
            }`}
        >
          <i
            className="fa-light fa-square-info text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            About Us
          </p>
        </div>

        {/* Blogs */}
        <div
          onClick={() => navigate("/blogs")}
          className={`flex font-Montserrat gap-[3px] w-[60px] px-[12px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "Blogs" ? "border-[1.5px] border-[#1e26bd] icon_bottom  text-[#1e26bd]" : "border-none text-[#000]"
            }`}
        >
          <i
            className="fa-regular fa-blog text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Blogs
          </p>
        </div>

        {/* Support */}
        <div
          onClick={() => navigate("/accomdation")}
          className={`flex font-Montserrat gap-[3px] w-[60px] px-[10px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "accomdation" ? "border-[1.5px] border-[#1e26bd] icon_bottom  bg-[#] text-[#1e26bd]" : "border-none text-[#000]"
            }`}
        >
          <i
            className="fa-light fa-bed-front text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Accomo..
          </p>
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/contact-us")}
          className={`flex font-Montserrat gap-[3px] w-[60px] px-[3px] py-[7px] flex-col items-center justify-center cursor-pointer rounded-[8px] ${activeTab === "contact-us" ? "border-[1.5px] border-[#1e26bd] icon_bottom  text-[#1e26bd]" : "border-none text-[#000]"
            }`}
        >
          <i
            className="fa-light fa-user-headset text-[20px]"

          ></i>
          <p
            className="font-Montserrat text-[10px] font-[600]"

          >
            Contact Us
          </p>
        </div>
      </div>

    </>
  );
}
