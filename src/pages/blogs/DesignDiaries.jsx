import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPinCheck } from "lucide-react";
import blog1 from "../../../public/NewDriveImage/zenout.jpg";
import blog11 from "../../../public/NewDriveImage/Basalt arial.jpg";
import blog111 from "../../../public/NewDriveImage/mainfront.jpg";
import flyingBird1 from "../../../public/NewDriveImage/area1.jpg";
import flyingBird2 from "../../../public/NewDriveImage/resturant1.jpg";
import flyingBird3 from "../../../public/NewDriveImage/graden.jpg";
import kadaDam from "../../../public/NewDriveImage/nightgreen1.jpg";
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

export default function DesignDiaries() {
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

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % praragavhill.length);
    //     }, 2500); // Change image every 2 seconds

    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndexFlying((prevIndex) => (prevIndex + 1) % FlyingBird.length);
    //     }, 2500); // Change image every 2 seconds

    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndexKada((prevIndex) => (prevIndex + 1) % kadaDamMain.length);
    //     }, 2500); // Change image every 2 seconds

    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);
    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndexKada((prevIndex) => (prevIndex + 1) % kadaDamMains.length);
    //     }, 2500); // Change image every 2 seconds

    //     return () => clearInterval(interval); // Cleanup on unmount
    // }, []);

    return (
        <>
            <Header />
            <div className="  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex ">
                <div className=" md:w-[80%] gap-[40px] flex flex-col">
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            The Philosophy: Let Nature Lead
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill}
                                onClick={() => openLightbox(praragavhill)}
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
                Where to Try:{" "}
              </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                When the design team first arrived at the site, they didn’t bring blueprints. They brought notebooks, sketchpads, and open eyes.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <b className="font-500">“We started by listening,”</b> says Arjun Mehta, the lead architect. “To the wind. To the tide. To the cliffs. We wanted the land to tell us what it needed.”
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                That philosophy—nature first, structure second—became the foundation of every decision. Rooms are oriented to catch the sunrise or frame the ocean. Walkways weave around existing trees. Even the shadows were considered, casting dappled light across courtyards in a way that cools the air naturally.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It’s not about dominating the landscape. It’s about becoming part of it.
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                            Material Matters: Built From the Earth Itself
                        </h1>
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill1}
                                onClick={() => openLightbox(praragavhill1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Take a look around and you’ll notice something subtle: almost everything feels like it belongs here. That’s because it does.                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Basalt stone, of course, is everywhere. Harvested locally and minimally processed, it gives walls their cool, charcoal tone and grounds the entire resort in the geology of the land.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Bamboo is used for roofing and outdoor structures—not just for aesthetics, but because it’s sustainable, fast-growing, and locally sourced.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Reclaimed wood adds warmth to interiors and tells stories of its own, some planks coming from old coastal fishing boats and village homes.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Lime plaster on walls allows for breathability in the humid coastal air, avoiding the use of synthetic paints or finishes.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Every texture is deliberate. Nothing feels artificial. Even the tiles underfoot are handmade, with tiny imperfections that make them human.
                            </p>

                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                            Form Meets Function: Design That Cares
                        </h1>
                        {/* Hero Banner */}
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill11}
                                onClick={() => openLightbox(praragavhill11)}
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
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>The architecture here doesn’t just look beautiful—it works beautifully too.</li>
                                <li>Rooms are cross-ventilated, reducing the need for air conditioning.</li>
                                <li>Sloped roofs collect rainwater into a central harvesting system used for irrigation.</li>
                                <li>Solar panels power a significant portion of the resort’s energy.</li>
                                <li>Native plants are used in landscaping, requiring less water and attracting local birds and pollinators.</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">Even the lighting is low-intensity and downward-facing to protect nesting sea turtles and preserve the night sky for stargazing guests.</p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">This isn’t eco-design for the sake of trend. It’s sustainability woven into comfort—luxury with a conscience.</p>


                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            The Invisible Details
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird1}
                                onClick={() => openLightbox(FlyingBird1)}
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
                                Where to eat:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Great architecture doesn’t always announce itself. Sometimes, it whispers.                            </p>
                            <div className="!mt-[20px]"></div>
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                What to expect:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Like how the sound of running water near the spa is actually a carefully placed stream to enhance relaxation. Or how the soft curve of your villa’s ceiling mimics the inside of a shell—an organic shape that naturally amplifies light and sound.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Or how the smell of the wood in the open-air library comes from driftwood treated only with natural oils—chosen for its scent and the stories it carries from the sea.                         </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            A Place That Changes With You
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDamMain}
                                onClick={() => openLightbox(kadaDamMain)}
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
                                Must try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Perhaps the most unforgettable thing about the architecture at Basalt Paradise is how it adapts.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                In the morning, it’s all bright reflections and breezy shadows. In the evening, it’s golden edges and cozy corners. The spaces seem to move with the day, just like the tides they were designed around.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                “Guests always say they discover something new on their third or fourth day,” Arjun shares. “A line of light they hadn’t noticed. A bench carved into the rock. A moment of stillness. That’s the goal—to design something that keeps unfolding.”                                   </p>


                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            The Takeaway
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird2}
                                onClick={() => openLightbox(FlyingBird2)}
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
                                Must try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                At Basalt Paradise, design isn’t just decoration. It’s storytelling. Sustainability. Sincerity. Every curve and color has a reason. Every material is a love letter to the land.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                               So next time you walk barefoot on those cool stone paths or rest your eyes on the gentle curve of the ocean-facing suite—know that you’re not just staying in architecture.
You’re staying with it.</p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                               And that’s what makes Basalt Paradise unforgettable.
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
                                    href="/blogs/basalt-paradise-balances-nature"
                                    className="text-[#000000] font-[500] hover:underline"
                                >Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence
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
                            <li>
                                <a
                                    href="/blogs/basalt-paradise-has-the-most-magical"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                          Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours
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
