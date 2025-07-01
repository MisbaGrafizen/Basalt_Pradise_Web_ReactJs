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

export default function ADay() {
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
                            6:30 AM — Rise with the Hills
                        </h1>

                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                The day begins with the soft sounds of birdsong and mist drifting through the trees. There’s no alarm clock—just nature waking you up gently. Step onto your private balcony, inhale the fresh monsoon air, and watch the sunrise light up the basalt cliffs.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Optional morning activities :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Guided yoga session at the open-air pavilion</li>
                                <li>A mindful nature walk through the forest trail</li>
                                <li>Sunrise photography for the early risers</li>
                                <li>A quiet start sets the tone for a peaceful, grounded day.</li>
                            </p>
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Pro Tip : </b>Begin your day here early morning and carry a picnic breakfast from Basalt Paradise.
                                <br /></div> */}
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            8:00 AM — Breakfast, Fresh & Local
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
                                Head to our dining deck or request breakfast in your villa. Choose from farm-fresh fruits, multigrain parathas, herbal teas, and locally-sourced preserves. Light, nourishing, and satisfying.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Favorites include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Amla-ginger juice shot</li>
                                <li>Masala millet porridge</li>
                                <li>House-made sourdough toast with moringa butter</li>
                            </p>
                        </article>
                        <p className="text-gray-600 md:text-[16px] text-[14px]">Want something special? Let our chef know—customization is part of the experience.
                        </p>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            10:00 AM — Mid-Morning Me-Time
                        </h1>

                        <article className="space-y-2">
                            {/* 
                            <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Distance : </b>~37 km{" "}
                                </div>
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Travel Time : </b> ~35–40 mins{" "}
                                </div>

                            </div> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                This is your time. Whether you want to explore, relax, or just sit still—there’s no wrong way to enjoy it.                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Things to do in a resort like ours include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>A rejuvenating spa ritual with basalt stone therapy</li>
                                <li>Dipping into the infinity pool overlooking the forest</li>
                                <li>Reading or journaling in the silent garden</li>
                                <li>Visiting nearby spots like Champaner or Pavagadh for a short excursion</li>
                                <li>You set the pace. We just help you enjoy it.</li>
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            1:00 PM — Soulful Lunch
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
                                Our lunch menu is clean, creative, and seasonally inspired. Light enough to keep you refreshed, hearty enough to satisfy.                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Dishes might include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Bajra risotto with seasonal veggies</li>
                                <li>Paneer tikka with garden salad</li>
                                <li>Lemon-grass-infused buttermilk</li>
                                <li>Ghee-roasted jeera rice and moong dal</li>
                            </p>
                        </article>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">You’ll taste the region in every bite—and feel great afterward.</p>

                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            3:00 PM — Rest & Recharge
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
                                It’s warm outside. The perfect time to retreat indoors. Take a nap. Book a massage. Meditate. Or just lay back on your balcony with a cool drink and listen to the rustling trees.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Options for downtime :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>In-villa spa service</li>
                                <li>Cold-pressed juice bar</li>
                                <li>Afternoon board games or books</li>
                                <li>This is the luxury of having nothing on the schedule.</li>
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            5:30 PM — Golden Hour Magic
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

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                As the sun begins to dip, Basalt Paradise glows. Golden light spills through the trees, and everything feels cinematic. It’s the perfect time for a stroll, a shoot, or a soak in the pool.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Evening highlights :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>High tea with spiced fritters and basil chai</li>
                                <li>Scenic walk to the sunset point</li>
                                <li>Couple’s shoot or candid portraits with in-house photographers</li>
                                <li>Golden hour here really is golden.</li>
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            7:30 PM — Dinner & Bonfire
                        </h1>
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird1}
                                onClick={() => openLightbox(FlyingBird1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div> */}
                        {/* <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' md:text-[18px] font-[400]'> Pavagadh Hill,<b className='  font-[500]'> 8 km</b> from Basalt Paradise</b>
                            </p>
                        </div> */}
                        {/* Main Content */}
                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">As night falls, gather for an open-air dinner under the stars. The evening often ends with a quiet bonfire, soft music, and deep conversations—or peaceful silence.</p>
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                                You can expect :{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>A curated thali or global tasting menu</li>
                                <li>Candlelit setup for romantic dinners</li>
                                <li>Live acoustic music on select evenings</li>
                                <li>Bonfire with marshmallows or herbal nightcap</li>
                                <li>No nightlife. Just life—unplugged and beautiful.</li>
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">Whether you have a weekend or a week, our guests love combining wellness with wonder by discovering the best that Halol and its surrounds have to offer.</p> */}
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            9:30 PM — Stargazing & Slow Silence
                        </h1>

                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">With no city lights to compete, our skies are clear and endless. We provide binoculars and blankets if you want to stargaze from your villa or join a group on the viewing deck.</p>
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                Night rituals include :{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Stargazing lounge setup</li>
                                <li>Sound bath meditation or guided gratitude circle</li>
                                <li>Warm herbal tea with lemongrass and jaggery</li>
                                <li>The stars here don’t just shine—they whisper.</li>
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            11:00 PM — The Deepest Sleep You’ve Had in Months
                        </h1>

                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">No honking cars. No buzzing screens. Just the soft hush of the forest and a bed designed for dreams. And just like that, the day closes—full, slow, and fulfilling.
                            </p>
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                             Why This Isn’t Just a Stay—It’s a State of Mind
{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>A curated [resort itinerary in Halol] that feels effortless
</li>
                                <li>Designed for slow travel, mindful living, and deep rest
</li>
                                <li>A full day of [things to do in a resort] without needing to leave
</li>
                                <li> One of the most relaxing and beautiful [luxury day plans in Gujarat]
</li>
                            </p>
                        </article>
                    </div>


                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className="w-full my-">
                        <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">
                            {" "}
                            Related Blogs :
                        </h1>
                        <ul className="list-disc ml-4 text-[17px] space-y-2">
                            <li>
                                <a
                                    href="/blogs/the-ultimate-weekend-itinerary"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/wellness-by-nature-how-basalt"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                              Wellness by Nature: How Basalt Paradise Nurtures Mind, Body & Soul

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
                            <li>

                                <a
                                    href="/blogs/rain-or-shine-what-makes-monsoons"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical
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
