import React, { useState } from 'react'
import pavagadhbannernew from "../../../public/10Blogs/all.png"
import tours from "../../../public/Blog2/photogrid.jpg"
import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
import Jambughoda from "../../../public/10Blogs/Jambughoda-Wildlife-Sanctuary-banner.jpg"
import Hathnimatafall from "../../../public/10Blogs/Hathnimatafall.jpg"
import sou from "../../../public/10Blogs/SOU.jpg"
import general from "../../../public/10Blogs/general-view.jpg"
import kada from "../../../public/10Blogs/kada-dam.jpg"

import Cbeautifulitadel from "../../../public/10Blogs/beautiful-kevdi-monsoon.jpeg"
import kaliniketang from "../../../public/10Blogs/kali-niketan-chhota-udepur-vadodara-hotels-1gdlmzq.avif"
import Siddheshwar from "../../../public/10Blogs/Siddheshwar_Mahadev_Temple_at_Visavada_Gujarat_India_1523534041t.jpg"
// import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog3 from "../../../public/Basalt/B7.jpg"
import Header from '../../Component/header/Header'
import Footer from '../../Component/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import blog1cover from "../../../public/BlogsCoverS/basalt_blog1.jpg"
import blog2cover from "../../../public/BlogsCoverS/basalt_blog2.jpg"
import blog3cover from "../../../public/BlogsCoverS/basalt_blog3.jpg"
import blog4cover from "../../../public/BlogsCoverS/basalt_blog4.jpg"
import blog5cover from "../../../public/BlogsCoverS/basalt_blog5.jpg"





const blogdata = [
    {
        id: 1,
        category: "Local Attractions & Experiences",
        route: "/blog-details", // Unique route
        disatnce: "Discover the Hidden Gems Around Pavagadh & Halol!",
        image: blog1cover,
        tittle: "10 Must-Visit Places Near Basalt Paradise",
        description: "Planning a short getaway to Halol & Pavagadh? Whether you're a history lover, nature enthusiast, or spiritual traveler...",
        fullContent: "This is the full content for Blog 1..."
    },
    {
        id: 2,
        category: "Travel Tips & Guides",
        route: "/travel-tips", // Unique route
        disatnce: "Explore Travel Hacks for Your Trip!",
        image: blog5cover,
        tittle: "A Perfect 2-Day Itinerary for Halol & Pavagadh",
        description: "Nestled in the scenic beauty of Pavagadh, Basalt Paradise is the perfect getaway for travelers seeking nature, history, and adventure...",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 3,
        category: "Offbeat Destinations Near Halol",
        route: "/offbeat-destinations", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog3cover,
        tittle: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        description: "Tired of crowded tourist places? Looking for hidden gems that offer peace, nature, and unique experiences ? Halol, known for its historical significance and natural beauty, has some breathtaking offbeat destinations waiting to be explored.",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 4,
        category: "Best Nature Spots Near Halol",
        route: "/nature-spots", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog4cover,
        tittle: "Escape Into Nature: Discover Halol’s Hidden Scenic Wonders!",
        description: "Need a peaceful break from city life? The region around Halol & Pavagadh is filled with serene lakes, lush green landscapes, waterfalls, and wildlife sanctuaries—perfect for nature lovers! Here’s a guide to the best nature spots near Halol for a refreshing getaway.",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 5,
        category: " Activities Near Basalt",
        route: "/adventure-activities", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog2cover,
        tittle: "Experience Thrill & Adventure Near Basalt Paradise – A Must-Try Guide!",
        description: "If you’re visiting Basalt Paradise and looking for an adrenaline rush, you're in for a treat! The area around Halol & Pavagadh isn’t just about history and nature—it’s also packed with thrilling adventure activities. Whether you love trekking, water sports, or wildlife safaris, this guide will take you through the top adventure experiences you can’t miss!",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 6,
        category: "Weekend from Ahmedabad",
        route: "/weekend", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: tours,
        tittle: "Looking for a quick escape from Ahmedabad? Here’s why Basalt Paradise should be your next weekend destination!",
        description: "Life in Ahmedabad is exciting, but let’s be honest—it can get hectic! If you’re craving a peaceful weekend away from the city’s hustle, Basalt Paradise in Halol is the perfect retreat. Just a few hours’ drive from Ahmedabad, this hidden gem offers lush greenery, historical sites, adventure activities, and a relaxing atmosphere.",
        fullContent: ""
    },

];



export default function Blogs() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("Local Attractions & Experiences");
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const buttons = [
        "Local Attractions & Experiences",
        "Travel Tips & Guides",
        "Offbeat Destinations Near Halol",
        "Best Nature Spots Near Halol",
        " Activities Near Basalt",
        "Weekend from Ahmedabad"
    ];

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBlogDetails = (route) => {
        navigate(route);
    };

    const filteredBlogs = blogdata.filter(blog => blog.category === selectedCategory);
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredBlogs.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filteredBlogs.length - 1 ? 0 : prevIndex + 1
        );
    };
    return (
        <>


            <Header />
            <section className=' select-none flex  mb-[40px] flex-col gap-[30px] 2xl:w-[1300px]  relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]  '>
                <div className=' md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%]   overflow-x-auto    gap-[10px] '>
                    {buttons.map((buttonName) => (
                        <button
                            key={buttonName}
                            onClick={() => handleClick(buttonName)}
                            className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px] flex-shrink-0
                      ${selectedCategory === buttonName
                                    ? "bg-[#fcaf17] text-white border-[#fcaf17]"
                                    : "bg-transparent text-[#fcaf17] border-[#fcaf17]"
                                }`}
                        >
                            {buttonName}
                        </button>
                    ))}
                </div>
                <div className=' flex w-[100%] gap-[20px] justify-between'>


                    <div className=' flex-col gap-[20px]  flex md:w-[74%]'>







                        {filteredBlogs.map((blog, index) => (
                            <div key={blog.id} className=' flex flex-col gap-[10px] '>
                                <img
                                    onClick={() => openLightbox(index)}
                                    className='cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                                    src={blog.image}
                                    alt="Blogs"
                                />
                                <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
                                    <div className=' flex w-[100%] gap-[10px] flex-col '>
                                        <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#7442ff] '>

                                            <p className=' gap-[10px] mt-[2px] flex'>
                                                <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
                                            </p>
                                        </div>
                                        <h1 className=' px-[10px] font-[500] text-[19px]'>
                                            {blog.tittle}
                                        </h1>
                                        <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
                                            <p>
                                                {blog.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button className='flex gap-[10px] cursor-pointer pr-[10px] text-[#7442ff] w-[150px] items-center' onClick={() => handleBlogDetails(blog.route)}>
                                        <p className='hover:underline'>Read More</p>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </button>
                                </div>
                                <span className=' flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed '>

                                </span>
                            </div>
                        ))}
                    </div>

                    <div className=" h-[390px]  right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
                        <div id="infoProduto ">
                            <div className="blog-sidebar">



                                <div className="sidebar-search flex justify-between border-[1px] p-[10px] rounded-[8px]">
                                    <input
                                        type="text"
                                        className="search-input  outline-none"
                                        name="Search"
                                        placeholder="Search "
                                    />
                                    <button className="search-btn pr-[10px]" type="submit">
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 16 16"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
                                                fill="#fcaf17"
                                            ></path>
                                        </svg>
                                    </button>
                                </div>
                                <div className="ak-height-50 ak-height-lg-30"></div>

                                {/* Popular Categories */}
                                <div className="sidebar-section px-[10px]">
                                    <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                        Influencer Guests
                                    </h5>
                                    <ul className="flex flex-col gap-[4px]">
                                        <h1 className=' flex  font-cu font-[600] basalt-text'>Coming Soon . . .</h1>


                                    </ul>
                                </div>
                                <div className="ak-height-50 ak-height-lg-30"></div>

                                {/* Popular Tags */}
                                <div className="sidebar-section  mt-[20px] px-[10px]">
                                    <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                        Popular Blogs
                                    </h5>
                                    <ul className="flex  flex-col gap-[8px]">
                                        <li className='  flex'>
                                            <i className="fa-sharp text-[5px] mt-[8px] mr-[10px]  text-[#fcaf17]  fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[13px] text-[#5c5b5b] ' href="/blog-details">Local Attractions & Experiences</a>
                                        </li>
                                        <li className=' items-center flex'>
                                            <i className="fa-sharp mt-[px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/travel-tips">Travel Tips & Guides</a>
                                        </li>

                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/offbeat-destinations">         Offbeat Destinations Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/nature-spots">      Best Nature Spots Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/adventure-activities">    Activities Near Basalt </a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/weekend">   Weekend from Ahmedabad</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {isOpen && currentIndex !== null && (
                    <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
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
                        <img
                            src={filteredBlogs[currentIndex].image}
                            alt={`Blog ${currentIndex + 1}`}
                            className="max-h-full max-w-[80%] rounded-md object-contain"
                        />
                    </div>
                )}


            </section>
            <Footer />
        </>
    )
}
