import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPinCheck } from "lucide-react";
import blog1 from "../../../public/10Blogs/Traditionalthali.avif";
import blog11 from "../../../public/10Blogs/snacks.png";
import blog111 from "../../../public/10Blogs/bhajiya.png";
import flyingBird1 from "../../../public/NewDriveImage/resturant1.jpg";
import flyingBird2 from "../../../public/10Blogs/LocalSweets.avif";
import flyingBird3 from "../../../public/NewDriveImage/mainfull.jpg";
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

export default function CulinaryJourney() {
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
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            From Local Farms to Your Plate
                        </h1>
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill}
                                onClick={() => openLightbox(praragavhill)}
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

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                At Basalt Paradise, we don’t just cook—we curate. Our chefs work directly with nearby farmers and organic suppliers across Gujarat to source seasonal vegetables, herbs, dairy, and grains. That means your salad greens were likely harvested just this morning. Your paneer? Made from fresh milk delivered at sunrise. And your mango chutney? Blended with Alphonsos picked from an orchard 20 minutes away.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It’s this closeness to the land that defines our approach to [farm to table Gujarat] dining. We don’t believe in shortcuts. We believe in stories—of soil, sun, and slow ripening.              </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                            The Best Food in Halol Starts Here
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
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Where to Try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                You don’t have to travel far to find the [best food in Halol]—you just have to find your table at Basalt. Whether you’re dining under the stars or inside our scenic hill-facing restaurant, every plate is layered with intention.
                            </p>
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                                Some guest favorites include:{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Grilled Bhavnagari Peppers stuffed with quinoa and local goat cheese</li>
                                <li>Lemongrass-infused Kadhi with crispy okra fritters</li>
                                <li>Moringa Millet Risotto, slow-cooked in a ginger-garlic stock</li>
                            </p>

                            <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">And for dessert?</b> Our rose & basil seed panna cotta is as refreshing as it is unforgettable.
                                <br /></div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">For meat lovers, our seafood is sourced from Gujarat’s southern coast, and our slow-roasted lamb is marinated overnight with spices hand-ground in our own kitchen.
                            </p>

                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                            Meet the Culinary Team Behind the Magic
                        </h1>
                        {/* Hero Banner */}
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill11}
                                onClick={() => openLightbox(praragavhill11)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Instagrammable Views & Sunset Points

                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                At Basalt Paradise, every dish is a collaborative creation—born from passion, precision, and a shared love for local ingredients. Our culinary team blends time-honored regional recipes with contemporary techniques, ensuring each meal feels both rooted and refined.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                What makes our kitchen unique isn’t just the skill—but the heart behind every plate. Our chefs spend time studying seasonal harvests, tasting farm-fresh ingredients, and crafting menus that reflect the spirit of Gujarat while inviting global palettes to the table.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Don’t be surprised if your server offers you a special dish “not on the menu”—our team loves experimenting with the day’s freshest picks to surprise our guests with something new and memorable.                            </p>
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Hidden gem:</b> Try the green chutney thela near Ropeway Base Gate — super popular with trekkers!
                                <br /></div> */}
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            A Luxury Dining Experience Halol Has Never Seen Before
                        </h1>
                        <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={FlyingBird}
                                onClick={() => openLightbox(FlyingBird)}
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
                                At Basalt Paradise, food isn’t just fuel—it’s a form of luxury. And luxury, to us, is authenticity paired with elegance. From candlelit dinners on private decks to rustic picnics in our mango orchard, we create environments where dining becomes memory-making.
                            </p>
                            {/* <div className="!mt-[20px]"></div>
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                What to expect:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our wine list is handpicked to complement the earthy and vibrant notes of our cuisine. You’ll find Indian vineyard gems alongside international pours—all curated to match the mood, meal, and moment.
                            </p>
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex !mt-[20px] items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                What’s in it?{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                So whether you're celebrating an anniversary, enjoying a solo escape, or gathering with friends, we promise a [luxury dining experience Halol] can proudly claim.
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            Conscious Choices, Richer Flavors
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
                                Must try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Beyond indulgence, we deeply care about sustainability. No plastic containers, minimal food waste, composting all organic scraps, and supporting regenerative farms—these aren’t marketing lines. They’re how we operate, daily.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Choosing farm-to-table isn’t a trend for us—it’s a responsibility. One that we hope enriches not just your palate, but your perspective.
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



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
                                    href="/blogs/offbeat-destinations-near-halol"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                  Wellness with a View: The Spa Experiences at Basalt Paradise
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
                                    href="/blogs/stories-from-has-the-people"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Basalt Paradise Through a Local Lens: Stories from the People Who Call it Home
                                </a>
                            </li>
                            {/* <li>
                                <a
                                    href="/blogs/hidden-temples-spiritual-sites-pavagadh"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Hidden Temples Around Pavagadh
                                </a>
                            </li> */}
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
