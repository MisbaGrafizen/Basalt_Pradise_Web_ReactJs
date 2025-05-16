import React, { useEffect, useState } from 'react';
import blog1 from "../../../public/10Blogs/pavagadhbannernew.jpeg";
import blog11 from "../../../public/10Blogs/pavagadhbannernew2.jpeg";
import blog111 from "../../../public/10Blogs/pavagadhbannernew3.jpeg";

import blog2 from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg";

import blog3 from "../../../public/10Blogs/Jambughoda.jpg";
import blog4 from "../../../public/10Blogs/Hathnimatafall.jpg";
import blog5 from "../../../public/10Blogs/SOU.jpg";
import blog6 from "../../../public/10Blogs/general-view.jpg";
import blog7 from "../../../public/10Blogs/SOU.jpg";
import Footer from '../../Component/footer/Footer';
import Header from '../../Component/header/Header';

const pavagadhbannernewimages = [blog1, blog11, blog111]


export default function BlogDetails() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexCitadel, setCurrentIndexCitadel] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % pavagadhbannernewimages.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexCitadel((prevIndex) => (prevIndex + 1) % pavagadhbannernewimages.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <Header />
            <div className='  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto  py-8 gap-[20px] pt-[110px] flex '>

                <div className=' md:w-[80%] flex gap-[30px] flex-col'>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={pavagadhbannernewimages[currentIndex]}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Pavagadh Hill & Kalika Mata Temple
                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 5 km</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A UNESCO World Heritage site, Pavagadh Hill is famous for the Kalika Mata Temple, a revered Hindu pilgrimage site. Enjoy a scenic cable car ride to the temple and soak in breathtaking views of Gujarat’s landscape.
                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%] flex flex-col gap-[0px] h-[100%] mx-auto  py-8">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={blog2}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Champaner-Pavagadh Archaeological Park

                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise:6 km

                                    </b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A treasure trove of history, this UNESCO-listed heritage site boasts stunning mosques, forts, and stepwells from the 8th to 16th century. Must-visit spots include Jami Masjid and Kevda Masjid—architectural masterpieces blending Hindu and Islamic styles.
                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={blog3}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Jambughoda Wildlife Sanctuary

                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 35 km

                                    </b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">

                                Nature lovers, this one’s for you! Jambughoda Wildlife Sanctuary is home to leopards, sloth bears, and exotic bird species. Enjoy a wildlife safari or a peaceful trek through lush forests.

                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%] flex flex-col gap-[0px] h-[100%] mx-auto  py-8">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={blog4}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Hathni Waterfall

                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 45 km

                                    </b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">

                                A hidden paradise during monsoons, Hathni Waterfall is a must-visit for those seeking tranquility amidst nature. A perfect picnic spot, it offers a refreshing break from city life.

                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className="w-[100%] flex flex-col gap-[0px] h-[100%] mx-auto  py-8">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={blog5}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Sardar Sarovar Dam & Statue of Unity

                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 90 km

                                    </b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">

                                A short drive from Basalt Paradise, this marvel houses the world’s tallest statue—the Statue of Unity! Witness a spectacular light & sound show, visit the viewing gallery, or take a boat ride in the Narmada River.


                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className="w-[100%] flex flex-col gap-[0px] h-[100%] mx-auto  py-8">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={blog6}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                Mahakali Lake

                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'> Distance from Basalt Paradise: 3 km

                                    </b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">

                                A serene escape for couples and families, Mahakali Lake is ideal for evening strolls and birdwatching. Sunset views here are magical!



                            </p>

                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className="w-full my-2">
                        <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">Related Blogs</h1>
                        <ul className="list-disc ml-4 text-[17px] space-y-2">
                            <li>
                                <a href="/adventure-activities" className="text-[#000000] font-[500] hover:underline">
                                    Adventure Activities Near Basalt Paradise
                                </a>
                            </li>
                            <li>
                                <a href="/blogs/nature-spots-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Best Nature Spots Near Halol
                                </a>
                            </li>
                            <li>
                                <a href="/blogs/offbeat-destinations-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Offbeat Destinations Near Halol
                                </a>
                            </li>

                        </ul>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
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
            <Footer />
        </>
    );
}
