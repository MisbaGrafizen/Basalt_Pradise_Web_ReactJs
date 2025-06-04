import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog1 from "../../../public/Blog4images/praragavhill3.webp";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import flyingBird1 from "../../../public/blog5Images/paragrvdhHill1.jpeg";
import flyingBird2 from "../../../public/blog5Images/paragrvdhHill2.jpg";
import flyingBird3 from "../../../public/blog5Images/paragrvdhHill3.jpg";
import kadaDam from "../../../public/Blog4images/kadaDam2.jpeg";
import kadaDam1 from "../../../public/Blog4images/kadaDam1.jpg";
import kadaDam2 from "../../../public/Blog4images/kadaDam.jpg";


import Bhadrakali1 from "../../../public/lBlogdetailsImgae/Bhadrakali1.webp"
import Bhadrakali2 from "../../../public/lBlogdetailsImgae/Bhadrakali2.webp"
import jain1 from "../../../public/lBlogdetailsImgae/jain1.avif"
import jain2 from "../../../public/lBlogdetailsImgae/jain2.avif"
import jain3 from "../../../public/lBlogdetailsImgae/jain3.avif"
import Lakulisa1 from "../../../public/lBlogdetailsImgae/Lakulisa1.webp"
import Lakulisa2 from "../../../public/lBlogdetailsImgae/Lakulisa2.webp"
import NavlakhaKothar1 from "../../../public/lBlogdetailsImgae/NavlakhaKothar1.jpg"
import NavlakhaKothar2 from "../../../public/lBlogdetailsImgae/NavlakhaKothar2.jpg"









import Footer from "../../Component/footer/Footer";

const navlakha = [NavlakhaKothar2, NavlakhaKothar1];

const jain = [jain1,jain2,jain3];
const laukshia = [Lakulisa1,Lakulisa2];
const bhadraKali = [Bhadrakali1,Bhadrakali2];
const hill3= [blog1,blog11,blog111];




const kadaDamMain = [kadaDam, kadaDam1, kadaDam2];

export default function HiddenTemple() {
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
      setCurrentIndex((prevIndex) => (prevIndex + 1) % navlakha.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % hill3.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);





  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexFlying((prevIndex) => (prevIndex + 1) % jain.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexFlying((prevIndex) => (prevIndex + 1) % laukshia.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexFlying((prevIndex) => (prevIndex + 1) % bhadraKali.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexKada((prevIndex) => (prevIndex + 1) % kadaDamMain.length);
    }, 2500); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <>
      <Header />
      <div className="  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex ">
        <div className=" md:w-[80%] gap-[40px] flex flex-col">
          <div className=" w-[100%]">
            <h1 className="text-[14px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Navlakha Kothar
            </h1>
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={NavlakhaKothar1}
                onClick={() => openLightbox(navlakha, currentIndex)}
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
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] ">Location:</b> <p> South side of Champaner Fort Complex </p></h1>
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
                A lesser-visited archaeological marvel, Navlakha Kothar was originally a granary but later developed sacred connotations among villagers. The structures now hold miniature shrines and Shivlings surrounded by old banyan trees.
              </p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] "> Vibe:</b> <p>  Quiet, meditative, untouched by tourist chaos.     </p></h1>
              </p>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={jain2}
                onClick={() => openLightbox(jain, currentIndexFlying)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Main Content */}
            <article className="space-y-2">
              <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                Jain Temple Cluster (Kalimati Temple & Others)
              </h1>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] ">Location:</b> <p> En route to Mahakali summit, inside heritage ruins</p></h1>
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
                These 14th-century Jain temples are tucked into the lower plateau area of Pavagadh. Unlike the main climb to Mahakali, this path is serene, flanked by stone pillars and overgrowth.
              </p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] "><b class=" font-[600]  text-[#7442ff] ">  Don’t miss:</b> The Kalimati Temple’s ornate carving and empty sanctum — a photographer’s delight.</h1>
              </p>
            </article>
          </div>
          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={laukshia[currentIndexFlying]}
                onClick={() => openLightbox(laukshia, currentIndexFlying)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            {/* Main Content */}
            <article className="space-y-2">
              <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  items-center font-[500] text-gray-900">
                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
                Lakulisa Temple – The Lost Shrine of Shaivism

              </h1>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] ">Location:</b> <p> Near Dudhiya Talav, Champaner </p></h1>
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
                These 14th-century Jain temples are tucked into the lower plateau area of Pavagadh. Unlike the main climb to Mahakali, this path is serene, flanked by stone pillars and overgrowth.
              </p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] "><b class=" font-[600]  text-[#7442ff] "> Fun fact: </b>  The temple faces the morning sun and is believed to radiate spiritual energy at dawn.</h1>
              </p>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <h1 className="text-[18px] md:text-[27px] font-[600] text-gray-900">
            Bhadrakali Temple (Not to Be Confused With Mahakali)
          </h1>

          <div className=" w-[100%]">
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">
              <img
                src={Bhadrakali2}
                onClick={() => openLightbox(bhadraKali, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>
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
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] ">Location:</b> <p> Off-route inside dense forest path beyond Pavagadh Hill</p></h1>
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
                Local priests and sadhus believe this is an ancient Shaktipeeth where tantrik sadhanas were once practiced.              </p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] "><b class=" font-[600]  text-[#7442ff] "> Best For:  </b>   Spiritual explorers and those into mysticism and tantric history.</h1>
              </p>
              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <h1 className="text-[18px] md:text-[27px] font-[600] text-gray-900">
            Ganga Yamuna Kund
          </h1>
          <div className=" w-[100%]">
            {/* Hero Banner */}
            <div className="relative w-full md:h-[400px] h-[200px] mb-3 bg-[#0a192f] rounded-lg overflow-hidden">


              <img
                src={hill3[currentIndexkada]}
                onClick={() => openLightbox(hill3, currentIndexkada)}
                alt="Basalt Paradise Resort"
                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
              />
            </div>

            <article className="space-y-2">
              {/* <h1 className="text-[18px] md:text-[23px] gap-[10px] flex  font-[500] text-gray-900">
                <i className="fa-solid text-[13px] text-[#7442ff] fa-circle mt-[10px]"></i>
                Sacred Heart Catholic Church, Halol – A Hidden Gem of Peace
              </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] flex items-center gap-1"><b class=" font-[600]  text-[#7442ff] ">Location:</b> <p> Midway on Pavagadh Hill</p></h1>
              </p>
              <p className="text-gray-600 md:text-[16px] text-[14px]">
                A twin-stepwell and water tank considered sacred by pilgrims. Most climbers pass by without realizing its historical or religious significance.</p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                <h1 class=" font-[500] text-[16px] "><b class=" font-[600]  text-[#7442ff] ">  Why Visit:  </b>   It’s a peaceful detour for those seeking blessings and a moment of solitude.</h1>
              </p>
              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <h1 className="text-[18px] md:text-[27px] font-[600] text-gray-900">
            Local Wisdom:
          </h1>
          <div className=" w-[100%]">
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
                Local Wisdom:
              </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                “People often come to Pavagadh for darshan, but few pause to discover the real sanctity of this place. The air holds energy if you stop and breathe.”
              </p>

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                Pujari from Kalimati Temple
              </p>
              <div className="  flex mt-[10px] flex-col gap-[6px]"></div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
     
          <div className=" w-[100%]">
          <h1 className="text-[18px] md:text-[27px] font-[600] text-gray-900">
            Tips for Temple Trekkers:
          </h1>


            <article className="  ">


              <p className="text-gray-600 md:text-[16px] text-[14px]">
                Wear sturdy footwear — most sites involve uneven terrain.

                Visit early morning (before 10 AM) for best light and peaceful surroundings.

                Respect local customs — remove shoes, avoid loud conversations, and don’t photograph interiors without permission.
              </p>


            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <div className="w-full my-">
            <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">
              Related Blogs :
            </h1>
            <ul className="list-disc ml-4 text-[17px] space-y-2">
              <li>
                <a
                  href="/blogs/nature-spots-near-halol"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  10 Must-Visit Places Near Basalt Paradise
                </a>
              </li>
              <li>
                <a
                  href="/blogs/must-visit-places-near-basalt-paradise"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  Cultural Sites Near Basalt Paradise
                </a>
              </li>
              <li>
                <a
                  href="/blogs/weekend-getaway-from-ahmedabad"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  History of Champaner-Pavagadh – A Heritage Explorer’s Guide
                </a>
              </li>
              <li>
                <a
                  href="/blogs/weekend-getaway-from-ahmedabad"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  Day Trip from Vadodara to Pavagadh
                </a>
              </li>
            </ul>
          </div>



          <h1 className=" font-[500] text-[16px] ">
            Planning a spiritual retreat at Basalt Paradise? These hidden gems are just a short ride (or hike) away. Let your soul wander.

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
