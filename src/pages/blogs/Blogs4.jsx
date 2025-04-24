import React, { useEffect, useState } from 'react';
import Header from '../../Component/header/Header'
import { X, ChevronLeft, ChevronRight } from "lucide-react";


import bear1 from "../../../public/Blog4images/Jambughoda1.jpg"
import bear2 from "../../../public/Blog4images/Jambughoda1.jpeg"
import bear3 from "../../../public/Blog4images/Jambughoda2.avif"
import bear4 from "../../../public/Blog4images/Jambughoda3.jpg"

import blog1 from "../../../public/10Blogs/Hathnimatafall.jpg";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";

import kadaDam1 from "../../../public/Blog4images/kadaDam.jpg"
import kadaDam2 from "../../../public/Blog4images/kadaDam1.jpg"
import kadaDam3 from "../../../public/Blog4images/kadaDam2.jpeg"

import paragavaHill1 from "../../../public/Blog4images/praragavhill.jpeg"
import paragavaHill2 from "../../../public/Blog4images/praragavhill1.jpg"
import paragavaHill3 from "../../../public/Blog4images/praragavhill3.webp"

import Footer from '../../Component/footer/Footer';



const bearmain = [bear1, bear2, bear3, bear4]
const waterfall = [blog1, blog11, blog111]
const kadaDam = [kadaDam1, kadaDam2, kadaDam3]
const paragavaHillMain = [paragavaHill1, paragavaHill2, paragavaHill3]


export default function Blogs4() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexBear, setCurrentIndexBear] = useState(0);
    const [currentIndexkada, setCurrentIndexkada] = useState(0);
    const [currentIndexhill, setCurrentIndexhill] = useState(0);



    const [isOpen, setIsOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const openLightbox = (imagesArray, index) => {
        setLightboxImages(imagesArray);
        setLightboxIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const nextImage = () => {
        setLightboxIndex((prevIndex) => (prevIndex + 1) % lightboxImages.length);
    };

    const prevImage = () => {
        setLightboxIndex((prevIndex) =>
            (prevIndex - 1 + lightboxImages.length) % lightboxImages.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexBear((prevIndex) => (prevIndex + 1) % bearmain.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % waterfall.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexkada((prevIndex) => (prevIndex + 1) % kadaDam.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexhill((prevIndex) => (prevIndex + 1) % paragavaHillMain.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <Header />
            <div className='  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex '>

                <div className=' md:w-[80%] gap-[40px] flex flex-col'>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={bearmain[currentIndexBear]}
                                onClick={() => openLightbox(bearmain, currentIndexBear)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 25 km</b>
                            </p>
                        </div>
                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Jambughoda Wildlife Sanctuary – Nature & Wildlife Paradise!
                            </h1>




                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Jambughoda Wildlife Sanctuary is a breathtaking nature reserve, home to leopards, sloth bears, and exotic birds. The dense forests, waterfalls, and scenic trekking trails make it a must-visit for nature lovers & photographers.
                            </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>
                                <h1 className=' flex font-[600] mt-[10px] text-[20px] basalt-text'>
                                    Why Visit
                                </h1>
                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Lush greenery & fresh air
                                        </h1>

                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Trekking & jungle safari experience
                                        </h1>

                                    </div>
                                </div>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Rare wildlife spotting
                                        </h1>

                                    </div>
                                </div>

                            </div>
                            <div className=' cursor-default pt-[10px] flex items-center gap-[10px]   '>
                                <i className="fa-regular  text-[#7442ff] fa-calendar-days"></i>
                                <p className=' flex items-center  gap-[10px] mt-[2px] '>
                                    <b className=' text-[18px] font-[600] te'> Best Time to Visit : </b> <p className=' flex font-[500]'>November – March</p>
                                </p>
                            </div>

                        </article>
                    </div>


                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={waterfall[currentIndex]}
                                onClick={() => openLightbox(waterfall, currentIndex)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' text-[18px] font-[400]'>  30 km from Halol</b>
                            </p>
                        </div>
                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Hathni Waterfall – A Hidden Gem in the Forest!
                            </h1>




                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Tucked away in Jambughoda Forest, Hathni Waterfall is a breathtaking natural beauty surrounded by lush greenery & rocky cliffs. The peaceful sound of water makes it a perfect escape from city noise.
                            </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>
                                <h1 className=' flex font-[600] mt-[10px] text-[20px] basalt-text'>
                                    Why Visit
                                </h1>
                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            One of the most beautiful waterfalls in Gujarat
                                        </h1>

                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Refreshing atmosphere & scenic beauty
                                        </h1>

                                    </div>
                                </div>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Great for trekking & photography
                                        </h1>

                                    </div>
                                </div>

                            </div>
                            <div className=' cursor-default pt-[10px] flex md:items-center gap-[10px]   '>
                                <i className="fa-regular  md:mt-0 mt-[7px] text-[#7442ff] fa-calendar-days"></i>
                                <p className=' md:flex items-center  gap-[10px] mt-[2px] '>
                                    <b className=' text-[18px] font-[600] te'> Best Time to Visit : </b> <p className=' flex font-[500]'>Evening (for best sunset view)</p>
                                </p>
                            </div>

                        </article>
                    </div>



                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDam[currentIndexkada]}
                                onClick={() => openLightbox(kadaDam, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' text-[18px] font-[400]'> 20 km from Halol</b>
                            </p>
                        </div>
                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Kada Dam – Stunning Sunset Point!
                            </h1>




                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A lesser-known nature spot, Kada Dam is perfect for a peaceful evening by the water. If you love sunsets, birdwatching, and serene lakes, this is a hidden treasure near Halol.
                            </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>
                                <h1 className=' flex font-[600] mt-[10px] text-[20px] basalt-text'>
                                    Why Visit
                                </h1>
                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Peaceful & crowd-free location
                                        </h1>

                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Scenic sunset & birdwatching
                                        </h1>

                                    </div>
                                </div>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Perfect picnic spot
                                        </h1>

                                    </div>
                                </div>

                            </div>
                            <div className=' cursor-default pt-[10px] flex md:items-center gap-[10px]   '>
                                <i className="fa-regular  text-[#7442ff] md:mt-0 mt-[6px] fa-calendar-days"></i>
                                <p className=' md:flex items-center  gap-[10px] mt-[2px] '>
                                    <b className=' text-[18px] font-[600] te'> Best Time to Visit : </b> <p className=' flex font-[500]'>Evening (for best sunset view)</p>
                                </p>
                            </div>

                        </article>
                    </div>


                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={paragavaHillMain[currentIndexhill]}
                                onClick={() => openLightbox(paragavaHillMain, currentIndexhill)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' text-[18px] font-[400]'> Near Pavagadh Hill</b>
                            </p>
                        </div>
                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Pavagadh Forest – A Green Escape!
                            </h1>




                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Looking for dense green forests & scenic landscapes? The Pavagadh Forest region offers tranquil nature trails, fresh air, and amazing viewpoints for relaxation.
                            </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>
                                <h1 className=' flex font-[600] mt-[10px] text-[20px] basalt-text'>
                                    Why Visit
                                </h1>
                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Lush greenery & fresh oxygen
                                        </h1>

                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Perfect for meditation & relaxation
                                        </h1>

                                    </div>
                                </div>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[9px] mt-[8px] fa-circle"></i>
                                    <div className=' items-center flex gap-[8px]'>
                                        <h1 className=' font-[500] text-[16px]'>
                                            Great hiking trails & wildlife spotting
                                        </h1>

                                    </div>
                                </div>

                            </div>
                            <div className=' cursor-default pt-[10px] flex md:items-center gap-[10px]   '>
                                <i className="fa-regular md:mt-0 mt-[6px]  text-[#7442ff] fa-calendar-days"></i>
                                <p className=' md:flex items-center  gap-[10px] mt-[2px] '>
                                    <b className=' text-[18px] font-[600] te'> Best Time to Visit : </b> <p className=' flex font-[500]'>Throughout the year</p>
                                </p>
                            </div>

                        </article>
                    </div>
                    <div className="w-full my-2">
                            <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">Related Blogs</h1>
                            <ul className="list-disc ml-4 text-[17px] space-y-2">
                                <li>
                                    <a href="/blogs/offbeat-destinations-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Offbeat Destinations Near Halol
                                    </a>
                                </li>
                                <li>
                                    <a href="/adventure-activities" className="text-[#000000] font-[500] hover:underline">
                                    Adventure Activities Near Basalt Paradise
                                    </a>
                                </li>
                                <li>
                                    <a href="/blogs/must-visit-places-near-basalt-paradise" className="text-[#000000] font-[500] hover:underline">
                                    10 Must-Visit Places Near Basalt Paradise
                                    </a>
                                </li>
                            </ul>
                        </div>

                </div>

                <div className=" h-[430px]  right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
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
                                            <a className='  font-[400] text-[13px] text-[#5c5b5b] ' href="/blogs/must-visit-places-near-basalt-paradise">10 Must-Visit Places Near Basalt Paradise</a>
                                        </li>
                                        <li className=' items-center flex'>
                                            <i className="fa-sharp mt-[px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/travel-tips">Travel Tips & Guides</a>
                                        </li>

                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/offbeat-destinations-near-halol">         Offbeat Destinations Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/nature-spots-near-halol">      Best Nature Spots Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/adventure-activities">    Activities Near Basalt </a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/weekend-getaway-from-ahmedabad">   Weekend from Ahmedabad</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
            {isOpen && (
                <div className="fixed inset-0 z-[7000] flex flex-col items-center justify-center bg-black/80 p-4">
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
                        src={lightboxImages[lightboxIndex]}
                        alt={`Image ${lightboxIndex + 1}`}
                        className="max-h-[80%] max-w-[90%] rounded-md object-contain mb-4"
                    />
                    <div className="flex gap-2 overflow-x-auto max-w-full px-2">
                        {lightboxImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setLightboxIndex(index)}
                                className={`h-[70px] w-[100px] object-cover rounded cursor-pointer border-2 ${lightboxIndex === index
                                    ? "border-yellow-400"
                                    : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
