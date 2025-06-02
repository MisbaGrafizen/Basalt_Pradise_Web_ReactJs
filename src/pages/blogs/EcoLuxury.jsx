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

export default function EcoLuxury() {
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
                            Built into Nature, Not Over It
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our story begins with the basalt itself—lava rock that shaped this land millions of years ago. Instead of flattening it, we built into it. Every villa, path, and common space was designed to flow with the natural contours of the land.
                            </p>

                            <li>No hills were blasted.</li>
                            <li>No cliffs were carved.</li>
                            <li>Trees were not removed—they were woven into the design.</li>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Even the spa dome is nestled in a volcanic alcove, using geothermal energy to naturally regulate its temperature.
                            </p>
                            <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">The result?</b>A resort that feels like it’s part of the landscape, not imposed on it.
                                <br /></div>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Luxury That Doesn’t Leave a Footprint
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We believe comfort and conscience can live side by side. Here’s how we’re doing that daily:                            </p>

                            <li>Solar Power fuels 80% of our operations, including water heating and lighting.</li>
                            <li>Rainwater Harvesting supplies water for all landscaping and outdoor showers.</li>
                            <li>Greywater Systems recycle used water into our permaculture gardens.</li>
                            <li>No Plastic Policy means glass, bamboo, clay, or steel—always reusable, never wasteful.</li>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Local Materials from basalt stone to coconut wood reduce transportation impact and support nearby artisans.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Even our pools are salt-filtered, reducing chemical use while being gentler on both your skin and the planet.
                            </p>
                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Farm to Fork, Thoughtfully
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our menus are curated daily based on what’s fresh from our own organic kitchen garden and local farming cooperatives. That means:
                            </p>
                            <li>Zero air-freighted produce.</li>
                            <li>Zero frozen, processed imports.</li>
                            <li>Maximum flavor, nutrition, and sustainability.</li>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                And yes—we have a “Carbon-Light” dining option, highlighting dishes that require the least water, fuel, and packaging to prepare, for guests who want to travel lighter on the planet.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                You can even visit our gardens and meet the chefs to see exactly where your meal begins.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Waste Isn’t Waste Here
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We compost. We reuse. We repurpose. And we teach others how.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                From turning food scraps into nutrient-rich compost to partnering with a local initiative that transforms discarded glass into handmade tableware, nothing here goes “in the bin.” Because in nature, everything has a second life—and so should our resources.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Community First, Always
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Sustainability isn’t just about the environment—it’s about people, too.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Whether you choose to end your day with a moonlit walk, a candle-lit bath on your private terrace, or a session of guided night meditation in the spa dome, you’ll feel something hard to describe and even harder to forget.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We also partner with local artisans and small businesses, feature rotating exhibitions of nearby craftspeople in our lounge, and host eco-walks led by local guides—so your stay supports the community in visible, lasting ways.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Sustainability is a State of Mind
                        </h1>


                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    At Basalt Paradise, we invite our guests to participate, not just observe.
                                </p>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    You’re welcome to:
                                </p>
                                <li>Join a weekly Zero-Waste Living workshop</li>
                                <li>Tour our sustainability systems with our eco-architect</li>
                                <li>Try a “Digital Detox Day” powered by candlelight and silence</li>
                                <li>Sponsor a tree in our coastal reforestation project</li>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    These aren’t obligations. They’re opportunities—to be part of something meaningful, even while you rest.
                                </p>
                            </div>

                        </article>
                    </div>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Indulgence With Intention
                        </h1>


                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Yes, we’ll fluff your pillows, pour your wine, and run your bath at sunset.
                                    But the real luxury we offer is peace of mind—the kind that comes from knowing your stay isn't costing the Earth.
                                </p>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">

                                    Basalt Paradise isn’t a compromise between indulgence and integrity.
                                </p>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    It’s a celebration of both.
                                </p>
                                <li>Travel beautifully.</li>
                                <li>Live gently.</li>
                                <li>Sleep deeply.</li>
                                <li>You’re in paradise.</li>

                            </div>

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
                                    href="/blogs/what-you’ll-discover-on-our-hidden"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                   The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines

                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/architecture-that-makes-basalt-paradise-unforgettable"
                                    className="text-[#000000] font-[500] hover:underline"
                                >Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                  From Lava to Luxury: The Story Behind Basalt Paradise’s Location
                                </a>
                            </li>
                        </ul>
                    </div>
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
                                    <h1 className=" flex  font-cu font-[600] basalt-text">
                                        Coming Soon . . .
                                    </h1>
                                </ul>
                            </div>
                            <div className="ak-height-50 ak-height-lg-30"></div>

                            {/* Popular Tags */}
                            <div className="sidebar-section  mt-[20px] px-[10px]">
                                <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                    Popular Blogs
                                </h5>
                                <ul className="flex  flex-col gap-[8px]">
                                    <li className="  flex">
                                        <i className="fa-sharp text-[5px] mt-[8px] mr-[10px]  text-[#fcaf17]  fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[13px] text-[#5c5b5b] "
                                            href="/blogs/must-visit-places-near-basalt-paradise"
                                        >
                                            10 Must-Visit Places Near Basalt Paradise
                                        </a>
                                    </li>
                                    <li className=" items-center flex">
                                        <i className="fa-sharp mt-[px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/travel-tips"
                                        >
                                            Travel Tips & Guides
                                        </a>
                                    </li>

                                    <li className="  flex">
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/blogs/offbeat-destinations-near-halol"
                                        >
                                            {" "}
                                            Offbeat Destinations Near Halol
                                        </a>
                                    </li>
                                    <li className="  flex">
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/blogs/nature-spots-near-halol"
                                        >
                                            {" "}
                                            Best Nature Spots Near Halol
                                        </a>
                                    </li>
                                    <li className="  flex">
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/adventure-activities"
                                        >
                                            {" "}
                                            Activities Near Basalt{" "}
                                        </a>
                                    </li>
                                    <li className="  flex">
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/blogs/weekend-getaway-from-ahmedabad"
                                        >
                                            {" "}
                                            Weekend from Ahmedabad
                                        </a>
                                    </li>
                                    <li className="  flex">
                                        <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                        <a
                                            className="  font-[400] text-[14px] text-[#5c5b5b] "
                                            href="/blogs/romantic-getaways-near-vadodara"
                                        >
                                            {" "}
                                            Romantic Getaways Near Vadodara
                                        </a>
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
