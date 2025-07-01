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

export default function MonsoonWeddings() {
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
                            Why Monsoon? Why Not.

                        </h1>

                        <article className="space-y-2">

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                The monsoon transforms our surroundings into a lush wonderland. Basalt rock glistens, foliage deepens into emerald, and waterfalls awaken in nearby sanctuaries. It’s a time of renewal and emotion—perfect for new beginnings.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Benefits of a monsoon wedding :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Naturally dramatic atmosphere</li>
                                <li> Stunning rain-washed photo backdrops
                                </li>
                                <li>Cooler temperatures and softer sunlight
                                </li>
                                <li> Off-season exclusivity and pricing advantages
                                </li>
                                <li> More availability for your preferred dates
                                </li>
                            </p>
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Pro Tip : </b>Begin your day here early morning and carry a picnic breakfast from Basalt Paradise.
                                <br /></div> */}
                        </article>
                        <p className="text-gray-600 md:text-[16px] text-[14px]">Nature takes over the décor—and that’s the most beautiful part.
                        </p>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Cozy Setups & Creative Rain-Friendly Decor

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
                                At Basalt Paradise, we lean into the weather—not against it. Our event team has mastered the art of cozy, all-weather wedding setups that are both functional and unforgettable.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Monsoon-ready details include :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Transparent rain-proof canopies over open-air mandaps
                                </li>
                                <li>Indoor-outdoor transition lounges with views of the rain</li>
                                <li>Warm-toned fairy lights, draped florals, and floating candles
                                </li>
                                <li>Cozy seating pods with umbrellas and hot chai counters
                                </li>
                                <li>Tented baraat paths with vibrant, monsoon-themed décor
                                </li>
                            </p>
                        </article>
                        <p className="text-gray-600 md:text-[16px] text-[14px]">Expect moments like exchanging garlands with raindrops falling, or sharing vows as clouds drift across the horizon.
                        </p>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Food That Feels Like a Warm Hug

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
                                Our chefs curate rainy-season wedding menus that are soulful, seasonal, and deeply satisfying. Think steaming khichdi in copper pots, chaats with monsoon herbs, live jalebi counters, and endless cups of masala chai.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Popular monsoon additions :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Farsan & rain snacks corner
                                </li>
                                <li>Live chai-pakora stations
                                </li>
                                <li>Comfort food bars (dal makhani, sheero, khichdi, etc.)</li>
                                <li>Herbal welcome drinks (tulsi, ginger, jaggery blends)
                                </li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">Food becomes not just a part of the celebration—but the mood itself.</p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            A Photographer’s Dream

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
                                Raindrops on window panes. Wind playing with veils. Couples walking under shared umbrellas. The visual poetry of a monsoon wedding is unmatched. We work with photographers who know how to capture this magic with skill and subtlety.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Suggested ideas for monsoon wedding shots :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Couple portraits in the mist with basalt cliffs as backdrop
                                </li>
                                <li>Candid chai moments post-sangeet
                                </li>
                                <li>Baraat dancing under drizzles
                                </li>
                                <li>Umbrella aisle entrances
                                </li>
                                <li>Mehendi against a rainy green garden
                                </li>
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Small Guestlist, Big Emotions

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
                                Monsoon weddings are often intimate affairs—with just the right people, in just the right setting. Our property is designed to host 30–80 guests comfortably, allowing for personal touches, one-on-one hospitality, and unforgettable experiences.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Why couples love it :
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Full property buyout options
                                </li>
                                <li>Custom mehendi setups under cover
                                </li>
                                <li>
                                    Private spa treatments for bride/groom
                                </li>
                                <li>Quiet honeymoon transitions right after the ceremony
                                </li>
                                <li>Family bonding with bonfires, rain games, and cozy dinners
                                </li>
                            </p>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Why Basalt Paradise Is the Perfect
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
                                As the sun begins to dip, Basalt Paradise glows. Golden light spills through the trees, and everything feels cinematic. It’s the perfect time for a stroll, a shoot, or a soak in the pool.
                            </p>
                            <h1 className="text-[18px] mb-[10px] md:text-[22px] flex gap-[20px] items-center font-[400] text-gray-900">
                                Evening highlights :
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Natural beauty elevated by seasonal charm
                                </li>
                                <li>Proven rainy-season planning and decor expertise
                                </li>
                                <li> Indoor and semi-outdoor options for every event
                                </li>
                                <li>Curated dining, photography, and music packages</li>
                                <li>Located near Vadodara, yet feels like a world away
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
                                    href="/blogs/rain-or-shine-what-makes-monsoons"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/best-time-to-visit-pavagadh-monsoon-guide"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara

                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/staying-with-style-what-makes"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Staying with Style: What Makes Our Villas So Unique
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
