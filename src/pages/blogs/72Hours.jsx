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

export default function Hours() {
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
                            <i className="fa-regular fa-calendar-days text-[#7442ff]"></i> Day 1: Welcome, Unwind, Connect
                        </h1>

                        <article className="space-y-2">

                            <div className="flex-col">
                                <div className="flex text-[18px]  gap-[10px]">
                                    <b className="font-[600] text-[20px]     text-[#7442ff]">Morning : </b>Arrival & Check-In{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    You’ll be greeted with a cool towel, fresh coconut water, and that first breath of clean, salt-kissed air.
                                    Take your time settling into your villa. Notice the textures, the light, the scent of lemon grass in the air. You’re not in a hotel—you’re in harmony.
                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex text-[18px] gap-[10px]">
                                    <b className="font-[600]  text-[20px] text-[#7442ff]">Late Morning : </b>Leisurely Poolside Brunch{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Head to the infinity pool deck for a light brunch. Think: avocado toast with local sourdough, tropical fruit platters, cold brew with coconut milk.
                                </p>

                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Afternoon : </b>Spa Indulgence{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Start your stay the right way with our signature “Basalt Rebalance Ritual.” A mix of warm stone massage, herbal oil therapy, and sound healing. You’ll float out of there.
                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Sunset Hour : </b>Golden Cliffs Walk{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Meet your guide (or go solo) for a coastal trail walk that ends at the perfect cliffside spot to watch the sun melt into the sea. Bring your camera—or don’t. Some moments deserve to live only in memory.                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Evening : </b> Chef’s Table Dinner{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Join us for an intimate five-course meal curated by Chef Aarav, where every dish tells a story. Ingredients change seasonally, but the ocean-fresh snapper and the roasted coconut curry are local legends.
                                </p>
                            </div>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            <i className="fa-regular fa-calendar-days text-[#7442ff]"></i> Day 2: Explore, Discover, Breathe
                        </h1>

                        <article className="space-y-2">
                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Morning : </b>Guided Tide Pool Walk{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Low tide is your secret window into the marine world. Join our naturalist for a guided tide pool exploration—crabs, urchins, maybe even a baby octopus if you’re lucky.
                                </p>
                                <div className="flex gap-[10px]">
                                    <b className="font-[600] text-[#7442ff]">Pro tip:</b>coffee tastes better when sipped with salty fingers.
                                </div>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Late Morning : </b> Beach & Paddleboarding{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Grab a paddleboard and explore the gentle lagoon. Or lie back on a shaded lounger and do absolutely nothing. That’s also a sport here.
                                </p>
                            </div>
                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Lunch : </b> Local Eats at “The Palm”{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Casual beachside lunch with options like grilled pineapple salad, prawn tacos, and our famous hibiscus iced tea.                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Afternoon : </b> Creativity or Culture—Your Pick{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Casual beachside lunch with options like grilled pineapple salad, prawn tacos, and our famous hibiscus iced tea.                                </p>
                                <li> <b className="font-700"> Option A : </b>Join Saira’s art workshop using natural dyes and driftwood canvases.</li>
                                <li> <b className="font-700"> Option B : </b>Head to the nearby coastal village for a guided cultural walk with Lina. Visit the temple, meet artisans, sip chai with locals.</li>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Evening : </b>Sunset Bonfire + Live Music{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Return to the resort for a beachfront bonfire. Soft jazz guitar or local folk music sets the tone. House-made marshmallows. Warm mulled wine. Starry skies. Soft sand.

                                </p>
                            </div>

                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            <i className="fa-regular fa-calendar-days text-[#7442ff]"></i> Day 3: Reflect, Celebrate, Savor
                        </h1>

                        <article className="space-y-2">
                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Early Morning : </b>Yoga & Breathwork by the Sea{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Greet the sunrise with a gentle session on the meditation deck. Waves as background music. The scent of frangipani in the air. You’ll carry this stillness home with you.
                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Breakfast : </b> In-Villa or Treehouse Café{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    If you’re not ready to leave your villa just yet, we’ll bring breakfast to your terrace. Or head to the breezy café under the banyan tree—our turmeric lattes and jackfruit pancakes are worth getting up for.
                                </p>
                            </div>
                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Late Morning : </b> Free Time or Souvenir Hunt{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Swim, nap, write in your journal. Or stop by our boutique for locally made souvenirs—handwoven sarongs, stoneware, or a jar of wildflower honey to take home.
                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Check-Out : </b> Slow and Sweet{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    We won’t rush you. Enjoy one last drink at the lounge, take a final stroll through the gardens, and leave only when you’re truly ready.
                                </p>
                            </div>

                            <div className="flex-col">
                                <div className="flex !mt-[20px] text-[18px] items-center gap-[10px]">
                                    <b className="font-[600] text-[20px] text-[#7442ff]">Bonus : </b> Hidden Gems to Sneak In If You Can{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    The hammock tucked behind Villa 6—it has the best view of the moonrise
                                </p>
                            </div>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            The staff volleyball game at 5:30 p.m.—join in or just cheer
                        </h1>

                        <article className="space-y-2">
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                The silent library after dark—lantern-lit, with tea and old travel books
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                A secret tide pool where bioluminescent plankton sometimes sparkle at night (ask us… we might tell you)
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                And Just Like That… You’re Changed
                                Basalt Paradise isn’t a place you just visit. It’s a place that rearranges your rhythm. That slows your thoughts. That reminds you of the joy in simple things—stone, sea, silence, sun.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                72 hours may pass quickly—but the peace you find here lingers long after the sand is gone from your shoes.
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
                                    href="/blogs/what-makes-nighttime-basalt"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special
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
                            <li>
                                <a
                                    href="/blogs/what-you’ll-discover-on-our-hidden"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines
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
