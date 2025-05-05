
import Header from '../../Component/header/Header'
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog1 from "../../../public/10Blogs/Hathnimatafall.jpg";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import kadaDam1 from "../../../public/blog3images/kadadam1.jpg";
import kadaDam2 from "../../../public/blog3images/kadadam2.jpg";
import hanuman1 from "../../../public/blog3images/zand-hanuman-temple1.png"
import hanuman2 from "../../../public/blog3images/zand-hanuman-temple2.png"
import hanuman3 from "../../../public/blog3images/zand-hanuman-temple2.jpg"

import shibrajPur from "../../../public/blog3images/shivrajPur.jpg"
import shibrajPur1 from "../../../public/blog3images/shivrajPur1.jpg"
import shibrajPur2 from "../../../public/blog3images/shivrajPur3.jpg"
import bear1 from "../../../public/blog3images/bear1.jpg"
import bear2 from "../../../public/blog3images/bear2.jpg"
import bear3 from "../../../public/blog3images//bear3.jpg"
import Footer from '../../Component/footer/Footer';

const pavagadhbannernewimages = [blog1, blog11, blog111]
const kadaDam = [kadaDam1, kadaDam2]
const hanuman = [hanuman1, hanuman2, hanuman3]
const shibrajPurmain = [shibrajPur, shibrajPur1, shibrajPur2]
const bearmain = [bear1, bear2, bear3]

export default function Blog3details() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexkada, setCurrentIndexkada] = useState(0);
    const [currentIndexHanuman, setCurrentIndexHanuman] = useState(0);
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


    const [currentIndexshivrajPur, setCurrentIndexshivrajPur] = useState(0);
    const [currentIndexBear, setCurrentIndexBear] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pavagadhbannernewimages.length);
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
            setCurrentIndexHanuman((prevIndex) => (prevIndex + 1) % hanuman.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexshivrajPur((prevIndex) => (prevIndex + 1) % shibrajPurmain.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexBear((prevIndex) => (prevIndex + 1) % bearmain.length);
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
                                src={pavagadhbannernewimages[currentIndex]}
                                onClick={() => openLightbox(pavagadhbannernewimages, currentIndex)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Hathni Waterfall – A Nature Lover’s Paradise
                            </h1>



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Hidden amidst lush greenery, Hathni Waterfall is one of Gujarat’s most mesmerizing waterfalls.
                                Located about 30 km from Halol, this offbeat destination is perfect for a peaceful retreat.
                                Surrounded by dense forests, the waterfall gets its name from a rock formation that resembles an elephant (Hathni in Gujarati).
                            </p>
                            <div className=' flex flex-col gap-[6px]'>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Best time to visit :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Monsoon season (July – September)
                                        </p>
                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Activities :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Trekking, nature photography, picnic
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className='font-[400] text-[14px]'>
                                        <div className='font-[600] text-[16px] mb-[2px]'>
                                            How to reach :
                                        </div>
                                        <div>
                                            Drive from Halol towards Jambughoda Wildlife Sanctuary, a short trek is required from the parking area.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff] mt-[20px] border-dashed '></span>
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

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Kada Dam – A Hidden Scenic Reservoir
                            </h1>



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                If you love sunsets by the water, Kada Dam is a must-visit!
                                This quiet and scenic reservoir is located just a short drive from Halol.
                                Unlike popular tourist spots, Kada Dam remains untouched and offers a peaceful escape for travelers looking to connect with nature.
                            </p>
                            <div className=' flex flex-col gap-[6px]'>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Best time to visit :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Early mornings or evenings for sunset views
                                        </p>
                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Activities :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Birdwatching, picnic, relaxing by the water
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className='font-[400] md:flex gap-[8px] items-center text-[14px]'>
                                        <div className='font-[600] text-[16px] mb-[2px]'>
                                            How to reach :
                                        </div>
                                        <div>
                                            Located 20 km from Halol, accessible via a short drive.
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff] mt-[20px] border-dashed '></span>
                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={hanuman[currentIndexHanuman]}
                                onClick={() => openLightbox(hanuman, currentIndexHanuman)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Jhand Hanuman Temple – A Spiritual & Scenic Escape
                            </h1>



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Located in the hills near Halol, the Jhand Hanuman Temple is a unique blend of spirituality and natural beauty.It is known for its peaceful surroundings, making it an ideal offbeat spot for meditation and introspection.
                            </p>
                            <div className=' flex flex-col gap-[6px]'>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Best time to visit :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Throughout the year
                                        </p>
                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Activities :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Temple visit, meditation, trekking nearby hills
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className='font-[400] md:flex items-center gap-[8px] text-[14px]'>
                                        <div className='font-[600] text-[16px] mb-[2px]'>
                                            How to reach :
                                        </div>
                                        <div>
                                            Drive from Halol, followed by a small uphill trek.


                                        </div>
                                    </div>
                                </div>

                            </div>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff] mt-[20px] border-dashed '></span>
                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={shibrajPurmain[currentIndexshivrajPur]}
                                onClick={() => openLightbox(shibrajPurmain, currentIndexshivrajPur)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Zarwani Waterfall – An Untouched Beauty
                            </h1>



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Located inside Shoolpaneshwar Wildlife Sanctuary, about 80 km from Halol, this spot is still unexplored by most tourists. The waterfall flows through a beautiful rocky landscape surrounded by forests.
                            </p>
                            <div className=' flex flex-col gap-[6px]'>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Best time to visit :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Monsoon and post-monsoon
                                        </p>
                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Activities :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Nature walks, waterfall trekking, and photography
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className='font-[400] md:flex items-center gap-[8px] text-[14px]'>
                                        <div className='font-[600] text-[16px] mb-[2px]'>
                                            How to reach :
                                        </div>
                                        <div>
                                            Carry good trekking shoes as the terrain can be slippery during monsoon.


                                        </div>
                                    </div>
                                </div>

                            </div>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff] mt-[20px] border-dashed '></span>
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

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Ratanmahal Sloth Bear Sanctuary – A Wildlife Lover’s Drea
                            </h1>



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                If you love wildlife, Ratanmahal Sloth Bear Sanctuary is a must-visit.
                                Located near the Gujarat-Madhya Pradesh border, this sanctuary is home to the rare sloth bears along with leopards, hyenas, and a variety of birds.
                            </p>
                            <div className=' flex flex-col gap-[6px]'>

                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Best time to visit :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Winter months (November – February)
                                        </p>
                                    </div>
                                </div>


                                <div className=' flex gap-[10px] '>

                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className=' items-center md:flex gap-[8px]'>


                                        <h1 className=' font-[600] text-[16px]'>
                                            Activities :
                                        </h1>
                                        <p className='  font-[400] text-[14px]'>
                                            Wildlife spotting, nature photography, jungle safari
                                        </p>
                                    </div>
                                </div>
                                <div className='flex gap-[10px]'>
                                    <i className="fa-solid text-[11px] mt-[6px] fa-circle"></i>
                                    <div className='font-[400] md:flex items-center gap-[8px] text-[14px]'>
                                        <div className='font-[600] text-[16px] mb-[2px]'>
                                            How to reach :
                                        </div>
                                        <div>
                                            Located around 100 km from Halol, best accessed by car.


                                        </div>
                                    </div>
                                </div>

                            </div>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff] mt-[20px] border-dashed '></span>

                    <div className="w-full my-2">
                        <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">Related Blogs</h1>
                        <ul className="list-disc ml-4 text-[17px] space-y-2">
                            <li>
                                <a href="/blogs/nature-spots-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Best Nature Spots Near Halol
                                </a>
                            </li>
                            <li>
                                <a href="/adventure-activities" className="text-[#000000] font-[500] hover:underline">
                                    Adventure Activities Near Basalt Paradise
                                </a>
                            </li>

                            <li>
                                <a href="/adventure-activities" className="text-[#000000] font-[500] hover:underline">
                                    10 Must-Visit Places Near Basalt Paradise
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className=" h-fit  right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
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
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/romantic-getaways-near-vadodara">   Romantic Getaways Near Vadodara</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/spiritual-trails-near-halol">   Spiritual Trails Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-halol">   Best Time To Visit Pavagadh Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/birdwatching-and-eco-tourism-halol">   Birdwatching & Eco-Tourism halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/hidden-temples-spiritual-sites-pavagadh">   Hidden Temples & Spiritual Sites Pavagadh</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-monsoon-guide">   Best Time To Visit Pavagadh Monsoon Guide</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/photography-places-halol-instagram-reels">   Top Photography Spots Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary">  One Day Trip Pavagadh From Vadodara</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/history-of-champaner-pavagadh-heritage-guide"> History Of Champaner Pavagadh</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/budget-travel-halol-pavagadh-guide"> Budget Travel Halol Pavagadh </a>
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
