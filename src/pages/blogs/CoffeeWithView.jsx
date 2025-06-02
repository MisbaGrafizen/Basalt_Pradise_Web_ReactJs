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

export default function CoffeeWithView() {
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
                            Basalt Black:
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Our Signature Single-Origin Roast
                            You’ll know it when you smell it—rich, earthy, with notes of dark cocoa and a whisper of sea salt. Our house blend, Basalt Black, is sourced from a small plantation nestled in the Western Ghats. The beans are roasted right here on-site in small batches and brewed fresh every morning.
                        </p>

                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <div className="flex text-[18px] items-center gap-[10px]">
                                    <i className="fa-solid fa-location-dot text-[#7442ff]"></i> <b className="font-[600] text-[20px] text-[#7442ff]">Best enjoyed at : </b>The Morning Deck{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    This open terrace near the spa overlooks the cliffs. Order a Basalt Black long pour and watch the waves roll in below. If you're lucky, a pod of dolphins might cruise by.
                                </p>
                            </div>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Coconut Cold Brew with Wild Palm Sugar
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            This is the drink that surprised our guests the most—and became a fast favorite. We steep our cold brew for 16 hours, then infuse it with fresh coconut water and sweeten it gently with palm sugar harvested by local tappers.
                        </p>
                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            It’s hydrating, energizing, and somehow feels like a beach holiday in a glass.
                        </p>
                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <div className="flex text-[18px] items-center gap-[10px]">
                                    <i className="fa-solid fa-location-dot text-[#7442ff]"></i> <b className="font-[600] text-[20px] text-[#7442ff]">Best enjoyed at : </b>The Poolside Swing Seats{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Feet in the water, cold brew in hand, sun playing hide-and-seek through the palms. Perfection.
                                </p>
                            </div>

                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            Spiced Morning Tonic
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            A Coffee for the Senses
                            Inspired by ancient Ayurvedic blends, this one’s for the wellness seekers. Espresso mixed with steamed almond milk, cardamom, cinnamon, and just a touch of turmeric. Balanced, comforting, and oddly addictive.
                        </p>
                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <div className="flex text-[18px] items-center gap-[10px]">
                                    <i className="fa-solid fa-location-dot text-[#7442ff]"></i> <b className="font-[600] text-[20px] text-[#7442ff]">Best enjoyed at : </b>The Treehouse Café{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    A quiet nook wrapped around a banyan tree, with hanging lanterns and a view of the herb garden below. Sit barefoot and sip slowly—this one deserves your full attention.
                                </p>
                            </div>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            The Sunset Mocha
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Think you can’t drink coffee at sunset? Think again. Our Sunset Mocha uses locally made dark chocolate and a touch of sea salt for a bold, bittersweet flavor. It’s half a dessert, half a bold ending to a day well lived.
                        </p>
                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <div className="flex text-[18px] items-center gap-[10px]">
                                    <i className="fa-solid fa-location-dot text-[#7442ff]"></i> <b className="font-[600] text-[20px] text-[#7442ff]">Best enjoyed at : </b>Cliff Bar Balcony, 6:15 PM{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    Right as the sky turns gold. Bonus: it pairs incredibly well with our almond fig tart.
                                </p>
                            </div>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            The Barista Experience – Brew It Yourself
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            Want to get hands-on? Join our in-house barista for a morning workshop on the art of hand-brewing. You’ll learn the difference between pour-over and French press, get to grind your own beans, and take home a small jar of our signature roast.
                        </p>
                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <div className="flex text-[18px] items-center gap-[10px]">
                                    <i className="fa-solid fa-location-dot text-[#7442ff]"></i> <b className="font-[600] text-[20px] text-[#7442ff]">Best enjoyed at : </b>The Roastery Lounge{" "}
                                </div>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    This tucked-away space smells like roasted beans, old books, and warmth. You may come for the coffee, but you’ll stay for the conversations.
                                </p>
                            </div>

                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] flex gap-[20px] items-center font-[600] text-gray-900">
                            A Note on Sustainability
                        </h1>

                        <p className="text-gray-600 md:text-[16px] text-[14px]">
                            All our beans are fair-trade and shade-grown. We work with small-scale farmers and reinvest in their communities. Our to-go cups are made from coconut fiber, and we compost every coffee ground for use in our herb garden. Because luxury should never come at the planet’s expense.                        </p>
                        <article className="space-y-2">

                            <div className="flex-col mt-[15px]">
                                <b>The Ritual of It All</b>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    At Basalt Paradise, coffee isn’t rushed. It isn’t gulped. It’s savored. Sometimes shared. Sometimes enjoyed in silence. Always paired with a view, a breeze, or a bird call.
                                </p>
                                <p className="text-gray-600 md:text-[16px] text-[14px]">
                                    So whether you’re a caffeine purist or a curious sipper, there’s a brew—and a moment—waiting just for you here.
                                    </p>
                                    <p className="text-gray-600 md:text-[16px] text-[14px]">
                                   Let the world wait. Your cup is full.
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
                                    href="/blogs/stories-from-has-the-people"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                   Basalt Paradise Through a Local Lens: Stories from the People Who Call it Home
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
                            <li>
                                <a
                                    href="/blogs/local-brews-you’ll-only"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                   72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary
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
