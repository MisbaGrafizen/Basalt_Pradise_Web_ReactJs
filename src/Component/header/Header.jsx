import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../public/logo.png";

export default function Header() {
  const location = useLocation(); // Get the current path
  const [selected, setSelected] = useState(location.pathname); // Track selected route

  const handleLinkClick = (path) => {
    setSelected(path); // Update the selected route
  };

  return (
    <>
      <div className="bg-white flex w-full font-Poppins z-[100] mx-auto fixed">
        <div className="flex w-[80%] h-[70px] mt-[20px] mx-auto  flex-col">
          <div className="flex w-full">
            <div className="flex w-full">
              <div className="flex w-full relative justify-between">
                <img className="flex w-[145px]" src={logo} alt="Logo" />
                <div className="flex w-[76%] mt-[5px] justify-between">
                  <div>
                    <div className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat mt-[-0.4%] flex font-[600] justify-end md36:hidden md:flex">
                      <Link
                        to="/"
                        onClick={() => handleLinkClick("/")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : " text-[#515151]"
                        }`}
                      >
                        Desk
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/about-us"
                        onClick={() => handleLinkClick("/about-us")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/about-us"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : " text-[#515151]"
                        }`}
                      >
                        About us
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/all-rooms"
                        onClick={() => handleLinkClick("/all-rooms")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/all-rooms"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : " text-[#515151]"
                        }`}
                      >
                        Accommodation
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/amenities"
                        onClick={() => handleLinkClick("/amenities")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/amenities"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : " text-[#515151]"
                        }`}
                      >
                        Amenities
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/blogs"
                        onClick={() => handleLinkClick("/blogs")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/blogs"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : "  text-[#515151]"
                        }`}
                      >
                        Blogs
                      </Link>
                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/memories"
                        onClick={() => handleLinkClick("/memories")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/memories"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : "  text-[#515151]"
                        }`}
                      >
                Memories
                      </Link>
                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/contact"
                        onClick={() => handleLinkClick("/contact")}
                        className={`cursor-pointer font-[400] font-Poppins ${
                          selected === "/contact"
                            ? "text-yellow-500 hover:text-yellow-500"
                            : "  text-[#515151]"
                        }`}
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                  <button className="mt-[-7px] flex w-[115px] gap-[10px] h-[33px] text-[14px] font-[500] rounded-[5px] basalt text-[#fff] text-center justify-center items-center">
                    <i className="fa-solid fa-user"></i>
                    <span className="bg-white flex w-[2px] h-[20px]"></span>
                    Bookings
                  </button>
                  <span className="absolute h-[0.5px] bg-[#13002f] top-[36.5px] right-[-0.2%] flex w-[87.5%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
