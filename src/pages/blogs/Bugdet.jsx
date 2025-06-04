import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog1 from "../../../public/Blog4images/praragavhill3.webp";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import flyingBird1 from "../../../public/Basalt/B11.jpg";
import flyingBird2 from "../../../public/blog5Images/paragrvdhHill2.jpg";
import flyingBird3 from "../../../public/blog5Images/paragrvdhHill3.jpg";
import kadaDam from "../../../public/lBlogdetailsImgae/history/imgs.jpg";
import kadaDam1 from "../../../public/lBlogdetailsImgae/history/11.jpg";
import kadaDam2 from "../../../public/Blog4images/kadaDam.jpg";

import Footer from "../../Component/footer/Footer";

const praragavhill = [blog1, blog11, blog111];

const FlyingBird = [flyingBird1];
const kadaDamMain = [kadaDam];
const kadaDamMains = [kadaDam1];
export default function Bugdet() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexFlying, setCurrentIndexFlying] = useState(0);
  const [currentIndexkada, setCurrentIndexKada] = useState(0);

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
              Budget Travel Tips for Exploring Halol & Pavagadh{" "}
            </h1>
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={praragavhill[currentIndex]}
                onClick={() => openLightbox(praragavhill, currentIndex)}
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
                                Private, Scenic & Secluded
                            </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                From local transportation to affordable food and low-cost
                sightseeing, here are our top tips for seeing the best of this
                heritage-packed region on a budget.
              </p>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Get There Cheaply{" "}
            </h1>
            {/* Hero Banner */}
            {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={FlyingBird[currentIndexFlying]}
                onClick={() => openLightbox(FlyingBird, currentIndexFlying)}
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

              <div className="">
                <b className="font-[600] text-[#7442ff]">From Vadodara:</b> Take
                a GSRTC bus (₹50–₹80) or shared auto (₹100–₹150).
                <br />
                <b className="font-[600] text-[#7442ff]">
                  From Ahmedabad:
                </b>{" "}
                State buses and trains to Vadodara, then hop to Halol.
                <br />
                <b className="font-[600] text-[#7442ff]">Budget Tip:</b> Travel
                early morning to avoid surge fares and crowds.
              </div>
            </article>
          </div>
          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Stay Smart, Sleep Well
            </h1>
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={FlyingBird[currentIndexFlying]}
                onClick={() => openLightbox(FlyingBird, currentIndexFlying)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Main Content */}
            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Pool Access & Couple-Friendly Rooms
                            </h1> */}
              {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                            8th–10th century: Pavagadh becomes a major Hindu spiritual center, home to Shaivite and Jain temples.</p>
                            */}
              <div className="">
                <b className="font-[600] text-[#7442ff]">Budget Hotels in Halol:</b>{" "}
                Look for basic but clean stays around the main market (₹600–₹1000 per night).
              </div>
              <div className="">
                <b className="font-[600] text-[#7442ff]">Hostels & Dharamshalas: </b>{" "}
                Near Pavagadh foothill, spiritual lodges offer rooms for ₹300–₹500 (ask locals).
              </div>
              <div className="">
                <b className="font-[600] text-[#7442ff]">Boutique but affordable: </b> Mahmud
                Basalt Paradise offers comfort + nature starting ₹1500/night, ideal for small groups.
              </div>
              {/* <div className="">
                <b className="font-[600] text-[#7442ff]">1536 AD: </b> Mughal
                invasion under Humayun leads to the decline of Champaner’s
                political relevance.
              </div>
              <div className="">
                <b className="font-[600] text-[#7442ff]">2004: </b> UNESCO
                recognizes it as a World Heritage Site.
              </div> */}
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
            Eat Local, Save Big
            </h1>
            {/* Hero Banner */}
            {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMain[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div> */}
            {/* <div className=' cursor-default mb-[10px] flex items-center gap-[10px]   text-[#7442ff] '>
                            <i className="fa-regular text-[20px ] fa-location-dot"></i>
                            <p className=' gap-[10px] mt-[2px] flex'>
                                <b className=' md:text-[18px] font-[400]'>Jambughoda Wildlife Sanctuary, ~25 km from Basalt Paradise</b>
                            </p>
                        </div> */}
            {/* Main Content */}
            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Pavagadh Ropeway & Kalika Mata Temple
                            </h1> */}
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Street food around Halol Bus Stand: Dabeli, samosa, chai — all under ₹50
              </p>
                            <div className='  flex mt-[10px] flex-col gap-[6px]'>

                            </div>
              <div className="">
                <b className="font-[600] text-[#7442ff]">
                Local thali joints:
                </b>{" "}
                Full Gujarati meals for ₹120–₹150
              </div>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Carry refillable bottle — filtered water available near temples and shops
              </p>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
            DIY Instead of Tour Packages
                        </h1>
            {/* Hero Banner */}
            {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMain[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div> */}

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Champaner Archaeological Park
                            </h1> */}
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Download a self-guided walking map of Champaner (available at ticket counters or online)

              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Read up via our Heritage Explorer’s Blog <i class="fa-thin fa-arrow-right"></i> /history-of-champaner-pavagadh-heritage-guide
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Use apps like Google Lens or Insta360 for interactive photo + info experiences
              </p>
             
              <div className="  flex mt-[10px] flex-col gap-[6px]"> </div>
              <div className="f">
                {/* <b className="font-[600] text-[#7442ff]"> Bonus:  </b>{" "}
              Basalt Paradise’s outdoor seating and natural landscaping look even more beautiful under rain.
                 */}
              </div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
            Capture Content, Not Just Costs
            </h1>
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMain[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Ajwa Water Park (30–40 mins drive)
                            </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Make the most of scenic spots — no need to spend on activities. Just bring a tripod and shoot reels at:
              </p>
             <li>Jami Masjid</li>
             <li>Ropeway view</li>
             <li>Dudhiya Talav</li>
             <li>Sunset from Saat Kaman</li>
             <p className="text-gray-600 md:text-[16px] text-[14px]">
             See our full photo guide <i class="fa-thin fa-arrow-right"></i> /photography-places-halol-instagram-reels
              </p>
             
              <div className="  flex mt-[10px] flex-col gap-[6px]"> </div>
              <div className="f"></div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
            Walk & Share Rides
            </h1>
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMains[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMains, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Ropeway to temple saves time but walking up Pavagadh is free (and adventurous)
              </p>

              <div className="">
                <b className="font-[600] text-[#7442ff]">
                Use shared autos from Halol to Champaner: 
                </b>{" "}
                ₹10–₹20 per ride
              </div>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Group up with fellow travelers for jeep rides to temples or waterfalls
              </p>
              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
            </article>
          </div>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
            Bonus Tips:
            </h1>
            {/* Hero Banner */}
            {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMain[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div> */}

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}
                          

              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Download offline maps of Halol–Pavagadh before coming
     </p>
     <p className="text-gray-600 md:text-[16px] text-[14px]">
     Use PayTM/PhonePe — most street shops now accept UPI
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Carry a power bank — long day = battery drain

              </p>

              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
            </article>
          </div>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Final Word:
            </h1>
            {/* Hero Banner */}
            {/* <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={kadaDamMain[currentIndexkada]}
                onClick={() => openLightbox(kadaDamMain, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div> */}

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                                Candlelight Dinner & In-Room Dining
                            </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
              Traveling on a budget isn’t a compromise — it’s a more mindful, immersive experience. The charm of Halol and Pavagadh lies not in expensive activities but in their heritage, nature, and people. With the right tips, you’ll return richer in stories, not poorer in wallet.
              </p>
              {/* <p className="text-gray-600 md:text-[16px] text-[14px]">
                Whether you’re coming for spiritual peace, historical awe, or
                simply the Insta-worthy architecture — this heritage site will
                leave a mark on your soul.
              </p> */}
              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
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
                  href="/blogs/nature-spots-near-halol"
                  className="text-[#000000] font-[500] hover:underline"
                >
               Local Food Guide: What to Eat in Halol
                </a>
              </li>
              <li>
                <a
                  href="/blogs/must-visit-places-near-basalt-paradise"
                  className="text-[#000000] font-[500] hover:underline"
                >
               One-Day Trip Itinerary from Vadodara
                </a>
              </li>
              <li>
                <a
                  href="/blogs/weekend-getaway-from-ahmedabad"
                  className="text-[#000000] font-[500] hover:underline"
                >
                Photography Spots in Halol
                </a>
              </li>
              <li>
                <a
                  href="/blogs/weekend-getaway-from-ahmedabad"
                  className="text-[#000000] font-[500] hover:underline"
                >
                 Monsoon Guide to Visiting Pavagadh
                </a>
              </li>
              <li>
                <a
                  href="/blogs/weekend-getaway-from-ahmedabad"
                  className="text-[#000000] font-[500] hover:underline"
                >
                History of Champaner-Pavagadh
                </a>
              </li>
            </ul>
          </div>

          <h1 className=" font-[500] text-[16px] ">
            Rainy days await. Basalt Paradise is ready{" "}
          </h1>
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
                className={`h-[70px] w-[100px] object-cover rounded cursor-pointer border-2 ${
                  lightboxIndex === index
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
