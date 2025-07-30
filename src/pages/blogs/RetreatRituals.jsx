import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPinCheck } from "lucide-react";
import blog1 from "../../../public/10Blogs/newblogs/Reborn.jpeg";
import blog11 from "../../../public/10Blogs/newblogs/Views.avif";
import blog111 from "../../../public/10Blogs/bhajiya.png";
import flyingBird1 from "../../../public/10Blogs/newblogs/Warms.jpg";
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

export default function RetreatRituals() {
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
                        <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            The Sunrise Sippers
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
                                It often starts with one simple morning. A gentle knock on the villa door. A tray of fresh lemongrass tea or masala chai. A view soaked in early golden light.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                That first day, guests sit on the porch quietly, sipping slowly.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                By the second day, it’s a ritual. Same time. Same seat. Sometimes a journal in hand, sometimes a soft shawl, sometimes just thoughts and silence.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Many say it’s the <b>most peaceful five minutes of their entire trip.</b>
                            </p>
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            The Walkers & Wanderers
                        </h1>
                        {/* Hero Banner */}
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill1}
                                onClick={() => openLightbox(praragavhill1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Where to Try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                For some, it’s a particular path they discover—through wildflowers, under gulmohar trees, beside chirping sparrows. A few guests choose to walk the same trail every morning, just after breakfast.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Some even give names to the turns—“the butterfly bend,” “the peacock point.”
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                They begin to own the space in their own way. And when they leave? They remember the quiet rustle of the same trees they passed for three mornings straight.
                            </p>
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                What you need :
                            </p> */}

                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>A bucket or basin of warm water</li>
                                <li>A few drops of essential oil (eucalyptus or lavender)</li>
                                <li>Handful of rock salt or Epsom salt</li>
                                <li>Fresh herbs like mint, basil, or rosemary (optional)</li>
                                <li>Nature’s own lullaby as you fall asleep</li>
                            </p> */}
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Soak your feet for 10–15 minutes. Light a candle. Close your eyes. Feel your body say “thank you.”
                            </p> */}
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Tip:</b> Book a valley-facing villa to catch the best morning views, especially in July and August.
                                <br /></div> */}


                        </article>
                    </div>
                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            The Garden Journalers
                        </h1>
                        {/* Hero Banner */}
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill1}
                                onClick={() => openLightbox(praragavhill1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Where to Try:{" "}
                            </h1> */}
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Here sits a low-slung library corner with books arranged in soft chaos, scattered cushions, and a skylight that lets natural light flood in during the day. It’s cozy, quiet, and kind of magical.
                            </p> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Our garden benches have stories.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                They’ve held writers with half-filled notebooks. Doodlers sketching birds. Moms journaling while kids play nearby. Business owners reflecting. Lovers writing letters they may never send.                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                One guest said,
                                <li>“I only journal when I’m here. Somehow this place makes me want to write.”</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                And so every time they return, they pick up that habit—just like they left it.
                            </p>
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Tip:</b> Book a valley-facing villa to catch the best morning views, especially in July and August.
                                <br /></div> */}


                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            The Fire Pit Conversations
                        </h1>
                        {/* Hero Banner */}
                        {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={praragavhill1}
                                onClick={() => openLightbox(praragavhill1)}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            />
                        </div> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Where to Try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                There’s something timeless about sitting by a fire.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                At Basalt, some guests make it a nightly tradition—meet at the fire pit, share stories, toast marshmallows, or sit in companionable silence. One couple has been coming for three years, and every visit ends the same way: hand-in-hand by the fire, whispering reflections of the day.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                You won’t see these rituals on itineraries.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                But they
                                <b>become the heart</b>        of people’s stay.
                            </p>
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Make yourself a cup of masala or lemongrass chai</li>
                                <li>Sit by a window (or balcony or garden corner)</li>
                                <li>No phone. No agenda. Just sip and breathe.</li>
                                <li>Board game  s stretched out beside flickering shadows</li>
                                <li>Nature’s own lullaby as you fall asleep</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                This five-minute “chai stillness” is surprisingly restorative.
                            </p> */}
                            {/* <div className="!mt-[10px]">
                                <b className="font-[600]  text-[#7442ff]">Tip:</b> Book a valley-facing villa to catch the best morning views, especially in July and August.
                                <br /></div> */}


                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                      <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            The “Same Dish Every Time” Club
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
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Must try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Surprisingly, even meals can become ritualistic.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                “I always order the lemon coriander soup first night.”
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                “I end every trip with that cinnamon-spiced hot chocolate.”
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                When comfort food meets memory, it becomes tradition. And at Basalt Paradise, even our kitchen staff remembers these personal favorites—greeting guests not with “What would you like today?” but “Your usual?”                            </p>

                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                       <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            Why These Rituals Matter
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
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Must try:{" "}
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                These aren’t trends or TikTok hacks.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                They’re gentle moments of control, presence, and peace in a world that often moves too fast.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                When guests form personal rituals, they connect with the space deeply. They aren’t just visiting. They’re <b>rooting in.
                                </b>                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                These rituals become mental bookmarks. When life feels heavy back home, many think of that exact bench, that exact chai, that exact view.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                And they smile.
                            </p>

                        </article>
                    </div>


                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
Create Your Own Next Time
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

                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                At Basalt Paradise, digital detox doesn’t come with a lecture. It comes with alternatives that are infinitely more satisfying :
                            </h1> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                       When you visit Basalt Paradise, don’t just “do the itinerary.”

                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
 Feel the rhythm. Let a ritual find you.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
It might be an evening swing under the banyan tree.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                              A daily barefoot walk on dew-soaked grass.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
 Or simply whispering “thank you” to the mountains every night before sleep.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
Because often, it’s not the big things we remember.
                            </p>
                             <p className="text-gray-600 md:text-[16px] text-[14px]">
It’s the <b>tiny, repeated, beautiful moments</b>that turn a getaway into a grounding.
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>

                    {/* <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            For those craving a real connection—not just faster Wi-Fi—Basalt Paradise welcomes you.
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

                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                We encourage you to pack more than just your bags when you leave. Take back rituals that keep you grounded :{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Here, digital detox isn’t about disconnecting from the world.

                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It’s about finally reconnecting with what truly matters.
                            </p>
                            <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat!



                        </article>
                    </div> */}

                    {/* /   <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span> */}
                    {/* <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            Why Monsoon Season Is the Hidden Gem of Basalt Paradise
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
                  
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Must try:{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>    Less crowded, more intimate atmosphere</li>

                                <li>  Stunning visuals perfect for content creators and photographers</li>

                                <li> Special monsoon offers and spa packages</li>

                                <li>     Perfect for couples, solo travelers, and nature lovers</li>
                            </p>
                            <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat!



                        </article>
                    </div> */}


                    {/* <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                            Want to know the real luxury?
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
                        <article className="space-y-2">
                            <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Must try:{" "}
                            </h1>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It’s waking up without urgency, without noise—just nature, warmth, and a slow stretch into your best day.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Welcome to mornings at Basalt Paradise.
                            </p>
                            <StarBorder
                                onClick={handlenavigate}
                                as="button"
                                className="custom-class "
                                color="#00FFFF"
                                speed="5s"
                            >
                                Book Now
                            </StarBorder>
                            <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat!



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
                                    href="/blogs/quiet-mornings-mountain-mists-waking"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Quiet Mornings & Mountain Mists: Waking Up at Basalt Paradise
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/basalt-paradise-after-dark"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Basalt Paradise After Dark: How the Resort Glows When the Day Ends
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/monsoon-weddings-at-basalt-paradise"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    Monsoon Weddings at Basalt Paradise: The Dreamy Celebration You Didn’t Know You Needed
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blogs/day-in-the-life-at-basalt"
                                    className="text-[#000000] font-[500] hover:underline"
                                >
                                    A Day in the Life at Basalt Paradise: From Sunrise to Starlight
                                </a>
                            </li>
                        </ul>
                    </div>



                    {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                        <b>Rain doesn’t ruin the plans here—it rewrites them beautifully.</b>
                        <br />
                        So the next time you see clouds forming over Halol, smile. It means Basalt Paradise is about to turn into something even more special.
                    </p> */}

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
