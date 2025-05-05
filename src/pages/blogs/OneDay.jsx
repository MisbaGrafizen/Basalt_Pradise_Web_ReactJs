import Header from '../../Component/header/Header'
import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog1 from "../../../public/Blog4images/praragavhill3.webp";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import flyingBird1 from "../../../public/blog5Images/paragrvdhHill1.jpeg"
import flyingBird2 from "../../../public/blog5Images/paragrvdhHill2.jpg"
import flyingBird3 from "../../../public/blog5Images/paragrvdhHill3.jpg"
import kadaDam from "../../../public/Blog4images/kadaDam2.jpeg"
import kadaDam1 from "../../../public/Blog4images/kadaDam1.jpg"
import kadaDam2 from "../../../public/Blog4images/kadaDam.jpg"



import Footer from '../../Component/footer/Footer';

const praragavhill = [blog1, blog11, blog111]

const FlyingBird = [flyingBird1, flyingBird2, flyingBird3]
const kadaDamMain = [kadaDam, kadaDam1, kadaDam2]


export default function OneDay() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexFlying, setCurrentIndexFlying] = useState(0);
    const [currentIndexkada, setCurrentIndexKada] = useState(0);



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
            setCurrentIndex((prevIndex) => (prevIndex + 1) % praragavhill.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexFlying((prevIndex) => (prevIndex + 1) % FlyingBird.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexKada((prevIndex) => (prevIndex + 1) % kadaDamMain.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>



            <Header />
            <div className='  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex '>

                <div className=' md:w-[80%] gap-[40px] flex flex-col'>


                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                        Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill[currentIndex]}
                                onClick={() => openLightbox(praragavhill, currentIndex)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        {/* <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' md:text-[18px] font-[400]'> Pavagadh Hill,<b className='  font-[500]'> 8 km</b> from Basalt Paradise</b>
                            </p>
                        </div> */}
                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Private, Scenic & Secluded
                            </h1> */}




                            <p className="text-gray-600 md:text-[16px] text-[14px]">

                            A one-day trip to Pavagadh from Vadodara is just what your travel-hungry soul needs. From sacred temples to ancient stepwells, jungle trails to street food, this itinerary packs it all — and still lets you return home by dinner.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Let’s plan your perfect 1-day escape!
</p>


                        </article>
                    </div>


                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird[currentIndexFlying]}
                                onClick={() => openLightbox(FlyingBird, currentIndexFlying)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Instagrammable Views & Sunset Points

                            </h1> */}

<div className="f">
                <b className="font-[600] text-[#7442ff]">Total Distance:  </b>{" "}
                ~55 km from Vadodara
                
              </div>
              <div className="f">
                <b className="font-[600] text-[#7442ff]"> Travel Time: </b>{" "}
                1.5 hours by car or hired cab
                
              </div>
              <div className="f">
                <b className="font-[600] text-[#7442ff]"> Ideal Trip Time:  </b>{" "}
                6:00 AM – 8:00 PM

              </div>


                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Each evening at Basalt Paradise feels like a postcard. The golden hour glows over the landscape, making it the perfect setting for sunset strolls or dreamy couple photos.

                            </p> */}


                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird[currentIndexFlying]}
                                onClick={() => openLightbox(FlyingBird, currentIndexFlying)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Pool Access & Couple-Friendly Rooms
                            </h1> */}

<div className="f">
                <b className="font-[600] text-[#7442ff]">  6:00 AM -  </b>{" "}
                Start Early from Vadodara

              </div>


                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Beat the traffic and enjoy a smooth ride via Halol Highway. Carry water and snacks, or stop for tea and breakfast at roadside dhabas near Halol.                            </p>


                        </article>
                    </div>


                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    {/* <h1 className="text-[18px] md:text-[27px] font-[600] text-gray-900">
                        Nearby Romantic Spots (Perfect for Day Outings)
                    </h1> */}


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        {/* <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' md:text-[18px] font-[400]'>Jambughoda Wildlife Sanctuary, ~25 km from Basalt Paradise</b>
                            </p>
                        </div> */}

<div className="f">
                <b className="font-[600] text-[#7442ff]">  7:30 AM – </b>{" "}
                Reach Pavagadh & Begin the Ascent
                Head straight to the famous Kalika Mata Temple atop Pavagadh Hill. You can hike up the 1,800+ steps (takes about 1.5 hrs) or take the ropeway for a quicker, scenic route.

              </div>

              <div className="f">
                <b className="font-[600] text-[#7442ff]">   Optional: </b>{" "}
                Visit nearby Jain temples en route to the summit if time allows.
              </div>

                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Beat the traffic and enjoy a smooth ride via Halol Highway. Carry water and snacks, or stop for tea and breakfast at roadside dhabas near Halol.                            </p> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Pavagadh Ropeway & Kalika Mata Temple
                            </h1> */}




                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Hike or take the cable car for a serene experience above the clouds. Spiritual and romantic all in one. </p> */}

                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Champaner Archaeological Park
                            </h1> */}

<div className="f">
                <b className="font-[600] text-[#7442ff]"> 10:00 AM –</b>{" "}
                Explore Champaner-Pavagadh Archaeological Park

              </div>

                  <p className="text-gray-600 md:text-[16px] text-[14px]">
                  This UNESCO World Heritage Site is a treasure trove of Indo-Islamic architecture, forts, mosques, stepwells, and ruined palaces.</p>

              <div className="f">
                <b className="font-[600] text-[#7442ff]">   Must-see highlights: </b>{" "}
             <li>Jami Masjid (perfectly preserved)</li>
             <li>Saat Kaman (Seven Arches)</li>
             <li>Helical Stepwell</li>
              </div>


                        
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Ajwa Water Park (30–40 mins drive)
                            </h1> */}


<div className="f">
                <b className="font-[600] text-[#7442ff]">  12:30 PM – </b>{" "}
                Lunch Break in Halol

              </div>

                  <p className="text-gray-600 md:text-[16px] text-[14px]">
                  Head to a local restaurant or dhaba for a hearty Gujarati thali or Kathiyawadi meal.</p>
              <div className="f">
                <b className="font-[600] text-[#7442ff]">  Recommendations: </b>{" "}
             <li>Hotel Tulsi or local food joints near the highway</li>
             <li>Street-side stalls for buttermilk, bhajiyas, and farsan)</li>
             {/* <li>Helical Stepwell</li> */}
              </div>



                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                For adventurous couples who like to add some fun and laughter to their romantic getaway.</p> */}

                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>


                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
 <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> 2:00 PM – </b> Hidden Temple or Nature Stop
                        Choose one based on your vibe:
                    </h1>

                    <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> For Spiritual:  </b> Visit Bhadrakali or Lakulisa Temple
                        Choose one based on your vibe:
                    </h1>
                    <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '>For Nature:</b>Take a short detour to Jambughoda Wildlife Sanctuary 
                        Choose one based on your vibe:
                    </h1>


                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Basalt Paradise can arrange a private candlelight dinner upon request — either in the garden or on your balcony. Whether you prefer Gujarati thalis or continental platters, our curated menu delights all palates.
                            </p> */}

                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
 <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> 4:00 PM –  </b> Quick Local Market Stop
                      
                    </h1>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Grab souvenirs, local snacks, or spiritual trinkets from shops near the temple base or Halol market.                            </p>

                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>
                   

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
 <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> 5:00 PM –   </b>Tea & Sunset Point
                      
                    </h1>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Enjoy a cup of tea with a view at a hillside dhaba or Basalt Paradise’s cafe (if open for walk-ins). Great photo ops here!</p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
 <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> Packing Tips: </b>Comfortable walking shoes.
                      
                    </h1>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                           <li>Hat/cap, sunglasses, and sunscreen</li>
                           <li>Camera or phone with good battery</li>
                           <li>Cash for entry tickets and local stalls</li>
                           <li>Rain gear (if visiting in monsoon)</li>
                           </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>

                    <div className=" w-[100%]">
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain[currentIndexkada]}
                                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
 <h1 className=' font-[500] text-[16px] '>
                        <b className=' font-[600]  text-[#7442ff] '> Bonus:   </b>Stay at Basalt Paradise
                      
                    </h1>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                            If you fall in love with the serenity and want to stay overnight, Basalt Paradise is the ideal retreat — calm, nature-rich, and just 15–20 mins from all the major sites.</p>                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>


                        </article>
                    </div>
                   
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className="w-full my-">
                        <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">Related Blogs</h1>
                        <ul className="list-disc ml-4 text-[17px] space-y-2">
                            <li>
                                <a href="/blogs/nature-spots-near-halol" className="text-[#000000] font-[500] hover:underline">
                                Why Monsoon Is the Best Time to Visit Pavagadh
                                </a>
                            </li>
                            <li>
                                <a href="/blogs/must-visit-places-near-basalt-paradise" className="text-[#000000] font-[500] hover:underline">
                                 
Hidden Temples Around Pavagadh

                                </a>
                            </li>
                            <li>
                                <a href="/blogs/weekend-getaway-from-ahmedabad" className="text-[#000000] font-[500] hover:underline">
                                Local Food Guide: What to Eat in Halol
                                </a>
                            </li>
                            <li>
                                <a href="/blogs/weekend-getaway-from-ahmedabad" className="text-[#000000] font-[500] hover:underline">
                                10 Must-Visit Places Near Basalt Paradise
                                </a>
                            </li>
                        </ul>
                    </div>




                    <h1 className=' font-[500] text-[16px] '>
                    Ready for your one-day getaway? Pavagadh’s waiting with open arms and ancient stones.                    </h1>
                </div>

                <div className=" h-[460px]  right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
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
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/romantic-getaways-near-vadodara"> Romantic Getaways Near Vadodara</a>

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
