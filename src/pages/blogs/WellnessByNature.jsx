import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog1 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import blog11 from "../../../public/10Blogs/JambughodaWaterfall.jpg";
import blog111 from "../../../public/10Blogs/DevDam.webp";
import flyingBird1 from "../../../public/10Blogs/KadiaDungar.jpg";
import flyingBird2 from "../../../public/Basalt/B6.jpg";
import flyingBird3 from "../../../public/10Blogs/trip.png";
import kadaDam from "../../../public/lBlogdetailsImgae/history/imgs.jpg";
import kadaDam1 from "../../../public/lBlogdetailsImgae/history/11.jpg";
import kadaDam2 from "../../../public/Blog4images/kadaDam.jpg";
import { useNavigate } from "react-router-dom";
import StarBorder from "../../Component/Reactbits/StarBorder";
import Footer from "../../Component/footer/Footer";

const praragavhill = [blog1];
const praragavhill1 = [blog11];
const praragavhill11 = [blog111];
const FlyingBird = [flyingBird1];
const FlyingBird1 = [flyingBird2];
const FlyingBird2 = [flyingBird3];
const kadaDamMain = [kadaDam];
const kadaDamMains = [kadaDam1];

export default function WellnessByNature() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentIndexFlying, setCurrentIndexFlying] = useState(0);
    const [currentIndexkada, setCurrentIndexKada] = useState(0);
    const navigate = useNavigate();
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
        setLightboxIndex(
            (prevIndex) =>
                (prevIndex - 1 + lightboxImages.length) % lightboxImages.length
        );
    };

    const handlenavigate = () => {
        navigate("/all-rooms");
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
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexKada((prevIndex) => (prevIndex + 1) % kadaDamMains.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <Header />
            <div className="  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex ">
                <div className=" md:w-[80%] gap-[40px] flex flex-col">
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            {/* <i className="fa-regular fa-calendar-days text-[#7442ff]"></i> Day 1: Welcome, Unwind, Connect */}Spa Experiences that Go Beyond Skin Deep
                        </h1>

                        <article className="space-y-2">
                            {/* 
                            <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~15 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b> ~25–30 mins{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Step into our hill-view spa sanctuary, where every treatment is curated to reset your body and calm your mind. From deep tissue massages using locally sourced herbal oils to Ayurvedic therapies tailored for detox and rejuvenation—our spa is a space where healing meets nature.

                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                What makes it special :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Organic oils infused with moringa, turmeric, and lemongrass</li>
                                <li>Rainforest-inspired interiors with panoramic views</li>
                                <li>Hot stone therapy using locally-sourced basalt stones</li>
                                <li>Guided post-treatment relaxation in our herb garden lounge</li>
                            </p>
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Pro Tip : </b>Begin your day here early morning and carry a picnic breakfast from Basalt Paradise.
                                <br />
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">Guests often say it's the most relaxed they’ve felt in years—and we believe them.</p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Morning Silence, Mindful Moments
                        </h1>

                        <article className="space-y-2">
                            {/* 
                            <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~11 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b>  ~20–25 mins{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Wake up to birdsong instead of alarms, and begin your day with guided meditation or breathwork in our open-air yoga pavilion. The surrounding landscape—untouched and meditative—becomes part of the practice itself.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Daily wellness rituals include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Sunrise yoga with forest views</li>
                                <li>Sound healing sessions by the waterbody</li>
                                <li>Forest-bathing walks through our private trails</li>
                                <li>Evening gratitude meditations under the stars</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">You don’t need to be a yogi to participate—just bring your breath, and let the hills do the rest.</p>
                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Clean Eating with a Local Soul
                        </h1>

                        <article className="space-y-2">

                            {/* <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~37 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b> ~35–40 mins{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our wellness kitchen follows the “Sattvic” principle—meaning light, clean, and energy-enhancing meals crafted from seasonal, local ingredients. Whether you're here for a full detox or just want to eat consciously, our menu is designed to nourish without compromising on flavor.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Favorites include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Khichdi bowls with homemade ghee</li>
                                <li>Cold-pressed juices with amla, mint, and ginger</li>
                                <li>Herbal infusions to support digestion and immunity</li>
                                <li>Farm-to-table salads picked fresh each morning</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">Want something custom?
                                <br /> Our culinary team is happy to tailor meals to your preferences or dietary goals.</p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Healing Through Nature
                        </h1>

                        <article className="space-y-2">

                            {/* <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~37 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b> ~1 hour{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                As a true [nature healing resort], we believe the outdoors can be your greatest healer. You’ll find quiet corners, private decks, and sun-dappled walking trails all around the property. No noise. No pressure. Just the calming rhythm of rustling trees and flowing water.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Explore at your own pace :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Reflect by the lotus pond</li>
                                <li>Journal under the mango grove</li>
                                <li>Read beside the basalt rock formations</li>
                                <li>Walk barefoot after a light rain</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">This is a space where your body can slow down, and your mind can catch up.</p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Stay Designed for Restoration
                        </h1>

                        <article className="space-y-2">
                            {/* 
                            <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~41 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b> ~55 mins{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our villas aren’t just beautiful—they’re intentionally calming. Earth-tone palettes, natural textures, blackout curtains, essential oil diffusers, and minimal distractions create an environment for deep rest. Whether you’re staying solo, as a couple, or with a wellness group, you’ll feel the stillness settle in.
                                <br />
                                Want to unplug completely? Ask us for a digital detox suite—no TV, limited Wi-Fi, and nature all around.
                            </p>
                            {/* <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                What guests love :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Serene lakeside walks</li>
                                <li>Birdwatching</li>
                                <li>Rich biodiversity and peaceful vibes</li>
                                <li>Ideal for eco-travelers or those who want a digital detox in the wild.</li>
                            </p> */}

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                           Why Wellness Feels Natural Here
                        </h1>

                        <article className="space-y-2">

                            {/* <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~65 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b>~1 hr 10 mins{" "}
                                </div>

                            </div> */}

                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A slightly longer drive, but well worth it. Dakor is home to a beloved Lord Krishna temple that draws spiritual seekers from across Gujarat.
                            </p> */}
                            {/* <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Why visit :
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Surrounded by hills, forests, and fresh air</li>
                                <li>Thoughtfully designed rituals, not mass-produced packages</li>
                                <li>Kind, intuitive staff who respect your pace</li>
                                <li>Ideal for solo retreats, romantic renewals, or quiet groups</li>
                                <li> One of the most peaceful [wellness retreats in Gujarat]</li>
                            </p>

                        </article>
                    </div>

                    {/* <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            Why Basalt Paradise Is the Perfect Base
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird1}
                                onClick={() => openLightbox(FlyingBird1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>
                        <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' md:text-[18px] font-[400]'> Pavagadh Hill,<b className='  font-[500]'> 8 km</b> from Basalt Paradise</b>
                            </p>
                        </div>
-                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Must try:{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Central location with smooth road access</li>
                                <li>Private transport and itinerary support available</li>
                                <li>Packed meals and curated guides on request</li>
                                <li>Ideal for guests visiting from Vadodara or Ahmedabad</li>
                            </p>
                            <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat!
                            <p className="text-gray-600 md:text-[16px] text-[14px]">Whether you have a weekend or a week, our guests love combining wellness with wonder by discovering the best that Halol and its surrounds have to offer.</p>
                        </article>
                    </div> */}

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className="w-full my-">
                        <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">
                            {" "}
                            Related Blogs :
                        </h1>
                        <ul className="list-disc ml-4 text-[17px] space-y-2">
                            <li>
                                <a
                                    href="/blogs/rain-or-shine-what-makes-monsoons"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                   Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/basalt-paradise-balances-nature"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                   Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/culinary-journey-basalt-paradise"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                 A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol
                                </a>
                            </li>
                            <li>

                                <a
                                    href="/blogs/what-makes-nighttime-basalt"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                 Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" h-fit  max-w-[300px] right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
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
                                    <li className='  flex'>
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/local-markets-handicrafts-halol-shopping-guide"> Local Markets & Handicrafts in Halol – Where to Shop Like a Local</a>
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
    );
}
