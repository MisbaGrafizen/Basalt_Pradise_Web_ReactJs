import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPinCheck } from "lucide-react";
import blog1 from "../../../public/10Blogs/newblogs/Reborn.jpeg";
import blog11 from "../../../public/10Blogs/newblogs/Views.avif";
import blog111 from "../../../public/10Blogs/bhajiya.png";
import flyingBird1 from "../../../public/10Blogs/newblogs/Warms.jpg";
import flyingBird2 from "../../../public/10Blogs/Localsweets.avif";
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

export default function UnplugToReconnect() {
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
                            No Screens, No Stress—Just Stillness
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
                                We’re not anti-technology. We’re pro-presence.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                That means you won’t find giant screens in every corner. Instead, you'll find cozy nooks with a view, hammocks beneath tamarind trees, and long trails that beg to be walked in silence. Nature fills the gaps where noise used to be.
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Guests often say: “I checked my phone less here than I have in years.” That’s because your surroundings do the talking—mornings filled with light mist, evenings filled with fireflies.
                            </p>
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>Inhale for 5 seconds</li>
                                <li>Hold for 5 seconds</li>
                                <li>Exhale for 5 seconds</li>
                                <li>Repeat for 5 rounds</li>
                                <li>Nature’s own lullaby as you fall asleep</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Do this in your car before a meeting, at your desk between emails, or just before bedtime to release tension. It’s like a mini-check-in with your body and mind.
                            </p> */}
                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                        <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            Candlelight Conversations Replace Scroll Sessions
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
                                Our spaces are designed for connection. Candlelit dinners where conversation flows like wine. Board games that bring out laughs and nostalgia. Charpai chats under the stars. Lanterns instead of LED glare.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                And when your partner or child looks up and realizes you’ve been present—not just physically, but fully—it changes everything.
                            </p>
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Expect menus that evolve each evening—from local Gujarati thalis to continental comfort food. Everything is fresh, thoughtful, and served with grace.
                            </p> */}
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
                            Moments That Slow You Down, Gently
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
                                We don’t rush you here. There are no tight itineraries, no timers. Just the invitation to notice :
                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <li>The way steam curls from your cup of lemongrass chai</li>
                                <li>The way the wind sounds when it passes through tall bamboo</li>
                                <li>The pause before the rain begins</li>
                                <li>The joy of watching squirrels dart across stone paths</li>
                                {/* <li>Wrist and ankle rotations</li> */}
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                It's in these moments that your nervous system exhales. And that’s the beginning of true rest.
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
                            Quiet Corners That Pull You Inward
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
                                From our tucked-away reading hut to the shady grove behind the yoga lawn, there are hidden corners where guests love to wander with a journal, a book, or just their thoughts. No one interrupts. Even the wind seems to whisper softly here.
                            </p>
                            {/* </p>                            <p className="text-gray-600 md:text-[16px] text-[14px]">
//                                 This is not an “official” meditation spot—but many who find it end up sitting there longer than planned. Shoes off, back straight, breath deep… it’s as if the stone itself invites stillness.
//                             </p> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                If you're the kind who’s always “on,” these corners feel like a reset button for the soul.
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
                            Nights That Remind You What Wonder Feels Like
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
                                Once the sun slips away, the real magic begins. There are no screens lighting up faces here—only the moon, fireflies, and stars that actually show up because there’s no light pollution.
                            </p>
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Few know about it. Fewer make the time to go. But if you do… you’ll carry that sky in your heart forever.
                            </p> */}
                            {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                                DIY version :                               </p> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Guests often bring blankets and lie on the grass, spotting constellations, making wishes, and talking about dreams they’d forgotten.
                            </p>

                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>

                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
                    <div className=" w-[100%]">
                      <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            What Guests Say :
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
                                <li>“We didn’t even miss our phones.”</li>
                                <li> “My kids played with mud and leaves for hours—no gadgets, no complaints.”</li>
                                <li> “I realized how tired I was of multitasking. Here, I could just be.”</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                You don’t need to wait for your next visit to feel it again.
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                These little rituals—easy, nourishing, and deeply personal—can be your way of keeping the Basalt glow alive wherever life takes you.
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>


                    <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                      <h1 className="text-[18px] flex items-center gap-[10px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
                         <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                            Take a Piece of This Back Home
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
                            {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900"> */}
                                {/* <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i> */}
                           <p className="text-gray-600 md:text-[16px] text-[14px]">
                                We encourage you to pack more than just your bags when you leave. Take back rituals that keep you grounded :{" "}
                        </p>
                            {/* </h1> */}
  <p className="text-gray-600 md:text-[16px] text-[14px]">
                            <li>10-minute morning stretches before checking your phone</li>                          
                                <li>Evening walks without earbuds</li>
                                <li>A no-screens-at-dinner rule that makes space for conversation</li>
                                <li>Weekly nature time—even if it's just your balcony garden</li>
                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Because Basalt Paradise isn’t just a place you visit. It’s a pace of life you can return to, again and again.
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>

  <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

                    <div className=" w-[100%]">
                  <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
                            <i className="fa-solid mb-[40px] text-[13px] text-[#7442ff] fa-circle"></i>   
For those craving a real connection—not just faster Wi-Fi—Basalt Paradise welcomes you.
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
                                We encourage you to pack more than just your bags when you leave. Take back rituals that keep you grounded :{" "}
                            </h1> */}
  <p className="text-gray-600 md:text-[16px] text-[14px]">
                        Here, digital detox isn’t about disconnecting from the world.

                            </p>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
It’s about finally reconnecting with what truly matters.
                            </p>
                            {/* <b className="font-[600] !mt-[10px] text-[#7442ff]">Don't miss: </b>  Homemade laddoos sold by temple-side vendors – perfect post-darshan treat! */}



                        </article>
                    </div>

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
