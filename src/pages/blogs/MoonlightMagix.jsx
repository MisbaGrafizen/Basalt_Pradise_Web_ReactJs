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

export default function MoonlightMagix() {
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
                            A Sky That Dances
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                The farther you are from city lights, the more the stars show up for you—and Basalt Paradise is blessed with one of the clearest night skies on the western coast. When the moon is new, the stars spill across the sky like glittering constellations. And when it’s full, everything glows—paths, palm trees, the pool surface—bathed in a gentle silver light.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We even have our own stargazing deck tucked away on the eastern ridge, complete with cushions, warm shawls, and a telescope if you're curious. But honestly? Most guests end up lying back and just watching the sky with their eyes wide open and their minds perfectly quiet.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Bonfires by the Beach
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Every evening around 8 PM, we light the firepit down by the driftwood circle. There’s no stage. No big announcement. Just the sound of flames crackling, gentle music from a local guitarist, and the sea murmuring in the background.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We serve toasted marshmallows, cinnamon hot toddies, and if you're lucky, a staff member might share a folktale about the "stone spirits" said to roam these cliffs by moonlight.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It’s cozy. Intimate. The kind of moment that makes strangers feel like old friends.
                            </p>
                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Midnight Swims
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                There’s something wildly freeing about slipping into the infinity pool at night. The water’s warm, the air is cool, and the lights are soft and golden, mimicking fireflies. Some nights, if the tide is just right, we guide guests to a protected cove where the sea itself sparkles—with bioluminescent plankton glowing around your hands and feet like underwater stardust.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We call it the Glow Swim—and it’s something you’ll tell stories about for years.
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Nightcaps with a View
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                The Cliff Bar stays open late—not because it’s lively, but because it’s lovely. Sit under a canopy of stars with a glass of red wine or a local spiced rum cocktail, and just be.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We’ve curated a “Moon Menu” of nighttime drinks, like our lavender gin fizz, dark roast affogato martinis, and turmeric bourbon sours—all designed to help you unwind without making you sluggish.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Add a jazz vinyl playing softly in the background, and you’re in another era entirely.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Stillness That Heals
                        </h1>
                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Nighttime at Basalt Paradise has a way of slowing everything down—your thoughts, your breath, your sense of urgency. Many guests tell us their best sleep happens here, not just because the beds are comfortable, but because the entire environment is restful.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Whether you choose to end your day with a moonlit walk, a candle-lit bath on your private terrace, or a session of guided night meditation in the spa dome, you’ll feel something hard to describe and even harder to forget.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A kind of peace that feels like it was waiting just for you.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Let the Night Change You
                        </h1>


                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    At Basalt Paradise, the magic doesn’t fade with the sun.
                                    It just gets quieter. Softer. Closer to your skin. It wraps around you like a warm shawl and stays long after you’ve gone to bed.
                                </p>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    So when you're here—don’t just spend your days well.
                                    Spend your nights wide-eyed and barefoot under the stars.
                                </p>

                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Because moonlight has its own kind of luxury.
                                </p>

                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    And here, it’s all yours.
                                </p>
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
                                    href="/blogs/basalt-paradise-has-the-most-magical"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours

                                </a>
                            </li>
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
                                    href="/blogs/local-brews-you’ll-only"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise
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
