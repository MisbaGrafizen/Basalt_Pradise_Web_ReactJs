import Header from "../../Component/header/Header";
import React, { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, MapPinCheck } from "lucide-react";
import blog1 from "../../../public/Blog4images/praragavhill3.webp";
import blog11 from "../../../public/10Blogs/Hathnimatafall2.jpg";
import blog111 from "../../../public/10Blogs/Hathnimatafall3.jpg";
import flyingBird1 from "../../../public/Basalt/B11.jpg";
import flyingBird2 from "../../../public/blog5Images/paragrvdhHill2.jpg";
import flyingBird3 from "../../../public/blog5Images/paragrvdhHill3.jpg";
import kadaDam from "../../../public/NewDriveImage/mainfront.jpg";
import kadaDam1 from "../../../public/lBlogdetailsImgae/history/11.jpg";
import kadaDam2 from "../../../public/Blog4images/kadaDam.jpg";
import { useNavigate } from "react-router-dom";
import StarBorder from "../../Component/Reactbits/StarBorder";
import Footer from "../../Component/footer/Footer";
import rickshaw from "../../../public/Icons/thailand.png";
import ropeway from "../../../public/Icons/cable-car-cabin.png";
const praragavhill = [blog1, blog11, blog111];

const FlyingBird = [flyingBird1];
const kadaDamMain = [kadaDam];
const kadaDamMains = [kadaDam1];

export default function HowToReach() {
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

  const handlenavigate1 = () => {
    navigate("/contact-us");
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
              Overview: Where is Pavagadh?
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
                Pavagadh is a hill near Halol town, in Panchmahal district,
                Gujarat
              </p>
              <div className="text-gray-600  md:text-[16px] text-[14px]">
                {" "}
                <b className="font-[600]  text-[#7442ff]"> Famous for: </b>{" "}
                Kalika Mata Temple (Shakti Peetha), Champaner-Pavagadh UNESCO
                site, ropeway rides, nature getaways
              </div>
              <div className="text-gray-600 md:text-[16px] text-[14px]">
                <b className="font-[600] text-[#7442ff] ">Best base: </b> Stay
                at Basalt Paradise, located 10–12 minutes from the ropeway
                station{" "}
              </div>
              <br />
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
              <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
              Vadodara to Pavagadh (Most Popular)
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

              <div className="flex mt-[40px] gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  {" "}
                  <i class="fa-solid fa-location-dot text-[20px] text-[#7442ff]"></i>{" "}
                  Distance:{" "}
                </b>
                <p> 45–50 km | Time: ~1.15 hrs </p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-circle-check  text-[#7442ff]"></i>Best
                  For:{" "}
                </b>
                <p>Quick 1-day or weekend trips</p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-car-side text-[#7442ff] text-[15px]"></i>
                  By Car / Taxi:{" "}
                </b>
                <p>Vadodara → NH-8 (Golden Bridge) → Halol → Pavagadh</p>
              </div>
              <p className="!ml-[25px]">
                Highway is smooth and well-maintained
              </p>
              <div className="!mt-[25px]">
                <div className="flex gap-[10px] mt-[10px]">
                  <i class="fa-solid fa-taxi-bus ] text-[#7442ff] w-[20px]"></i>

                  <div className="  gap-4 items-start">
                    <p>
                      <b className="font-[600] !mt-[5px]  flex-shrink-0 items-center gap-[10px]">
                        {" "}
                        By Public Transport:
                      </b>
                      Frequent GSRTC buses from Vadodara (Central Bus Stand) to
                      Halol
                      <br />
                      Halol to Pavagadh ropeway base is 5–6 km by rickshaw
                      (₹80–120 one-way)
                    </p>
                    <p></p>
                  </div>
                </div>

                {/* <div className="flex gap-[10px]">
                  <b className="font-[600] flex items-center gap-[10px]">
                    {" "}
                    <i class="fa-solid fa-train-tunnel text-[#7442ff] text-[17px]"></i>
                    By Public Transport
                  </b>
                  <p>Vadodara Railway Station is nearest major junction</p>
                </div> */}
                <p className="!ml-[25px]">
                  No direct train to Halol or Pavagadh — combine with bus/taxi
                </p>
              </div>
              <div className="mt-[10px]">
                <b className="font-[600] text-[#7442ff]">Bonus Tip:</b> Try to
                leave early morning to catch sunrise at Pavagadh (check our
                guide → /best-sunrise-sunset-points-pavagadh-halol)
              </div>
            </article>
          </div>
          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
              <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
              Ahmedabad to Pavagadh
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
              <div className="flex mt-[40px] gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  {" "}
                  <i class="fa-solid fa-location-dot text-[20px] text-[#7442ff]"></i>{" "}
                  Distance:{" "}
                </b>
                <p> 150 km | Time: ~3.5 hrs </p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-circle-check  text-[#7442ff]"></i>Best
                  For:{" "}
                </b>
                <p>Weekend or long weekend trips</p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-car-side text-[#7442ff] text-[15px]"></i>
                  By Car:{" "}
                </b>
                <p>
                  {" "}
                  Ahmedabad → Expressway/NH-48 → Vadodara → Halol → Pavagadh
                </p>
              </div>
              <p className="!ml-[25px]">
                Smooth drive with eateries along the way
              </p>
              <div className="!mt-[25px]">
                <div className="flex gap-[10px] mt-[10px]">
                  <i class="fa-solid fa-taxi-bus ] text-[#7442ff] w-[20px]"></i>

                  <div className=" !mr-[10px] gap-4 items-start">
                    <p>
                      <b className="font-[600] !mt-[5px] mr-[10px]  flex-shrink-0 items-center gap-[10px]">
                        {" "}
                        By Bus:
                      </b>
                      GSRTC and private operators run buses from Ahmedabad to
                      Halol every 1–2 hours
                      <br />
                      Some AC Volvo options are available
                    </p>
                    <p>From Halol, take auto to Pavagadh hill base</p>
                  </div>
                </div>

                <div className="flex mt-[5px] gap-[10px]">
                  <b className="font-[600] flex items-center gap-[10px]">
                    {" "}
                    <i class="fa-solid fa-train-tunnel text-[#7442ff] text-[17px]"></i>
                    By Public Transport
                  </b>
                  <p>Ahmedabad → Vadodara (fast trains, ~1.5 hrs)</p>
                </div>
                <p className="!ml-[25px]">
                  Continue via taxi or bus from Vadodara
                </p>
              </div>
              <div className="mt-[10px]">
                <b className="font-[600] text-[#7442ff]">Travel Pro Tip: </b>{" "}
                Try to Stay overnight at Basalt Paradise for a relaxed evening
                and next-day temple trek.
              </div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] flex items-center gap-[10px] text-gray-900">
              <i className="fa-solid text-[13px] text-[#7442ff] fa-circle"></i>
              Surat to Pavagadh
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

              <div className="flex mt-[40px] gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  {" "}
                  <i class="fa-solid fa-location-dot text-[20px] text-[#7442ff]"></i>{" "}
                  Distance:{" "}
                </b>
                <p> 260 km | Time: ~5 hrs</p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-circle-check  text-[#7442ff]"></i>Best
                  For:{" "}
                </b>
                <p>Pilgrimage or monsoon tourism</p>
              </div>

              <div className="!mt-[25px]">
                <div className="flex mt-[5px] gap-[10px]">
                  <b className="font-[600] flex items-center gap-[10px]">
                    {" "}
                    <i class="fa-solid fa-train-tunnel text-[#7442ff] text-[17px]"></i>
                    By Train:
                  </b>
                  <p>Surat → Vadodara (~2.5 hrs via express trains)</p>
                </div>
                <p className="!ml-[25px]">
                  Continue to Pavagadh via taxi or Halol-bound buses
                </p>
                <div className="flex gap-[10px] mt-[10px]">
                  <i class="fa-solid fa-taxi-bus ] text-[#7442ff] w-[20px]"></i>

                  <div className=" !mr-[10px] gap-4 items-start">
                    <p>
                      <b className="font-[600] !mt-[5px] mr-[10px]  flex-shrink-0 items-center gap-[10px]">
                        {" "}
                        By Bus:
                      </b>
                      GSRTC runs overnight and day buses Surat → Vadodara /
                      Halol
                      <br />
                      Less frequent than Ahmedabad/Vadodara route
                    </p>
                  </div>
                </div>
                <div className="flex gap-[10px]">
                  <b className="font-[600] flex items-center gap-[10px]">
                    <i class="fa-solid fa-car-side text-[#7442ff] text-[15px]"></i>
                    By Car:{" "}
                  </b>
                  <p> Surat → Bharuch → Vadodara → Halol</p>
                </div>
                <p className="!ml-[25px]">
                  Good for family trips or group travel
                </p>
              </div>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>
          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Local Transit Tips in Pavagadh/Halol
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
              <div className="flex mt-[40px] gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  {" "}
                  <img src={rickshaw} className="w-[22px]" alt="" />
                  Local rickshaws:{" "}
                </b>
                <p> Easy to find in Halol; share or book full</p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <img src={ropeway} className="w-[22px]" alt="" />
                  Ropeway tickets:{" "}
                </b>
                <p> Available at Machi base (₹150–₹200 return)</p>
              </div>
              <div className="flex gap-[10px]">
                <b className="font-[600] flex items-center gap-[10px]">
                  <i class="fa-solid fa-person-walking ml-[5px] text-[#7442ff] w-[18px]"></i>
                  Walking/climbing:{" "}
                </b>
                <p>Traditional pilgrims often climb 2,000+ steps on foot</p>
              </div>

              <div className="mt-[10px]">
                <b className="font-[600] text-[#7442ff]">Pro Tip:</b> For those
                staying at Basalt Paradise, staff can help arrange local
                transport or temple guides — reach out directly via
              </div>
              <StarBorder
                onClick={handlenavigate1}
                as="button"
                className="custom-class "
                color="#00FFFF"
                speed="5s"
              >
                Contact Now
              </StarBorder>
            </article>
          </div>

          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>


          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Where to Stay:
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
                                Candlelight Dinner & In-Room Dining
                            </h1> */}

              <p className="text-gray-600 md:text-[16px] text-[14px]">
                For peace, views, and comfort, check into Basalt Paradise —
                nestled between the hills, just 10 mins from Pavagadh ropeway.
                Great for couples, families, and solo explorers.
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
            </article>
          </div>
          <span className=" flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed "></span>

          <div className=" w-[100%]">
            <h1 className="text-[18px] mb-[10px] md:text-[27px] font-[600] text-gray-900">
              Final Word
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
                Reaching Pavagadh is easy — it’s the perfect nature-and-culture
                blend just a few hours from major cities. Whether you ride,
                drive, or take the ropeway to the top, the journey is half the
                experience.
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
                  href="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  Day Trip from Vadodara
                </a>
              </li>
              <li>
                <a
                  href="/blogs/best-time-to-visit-pavagadh-monsoon-guide"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  Best Monsoon Spots
                </a>
              </li>
              <li>
                <a
                  href="/blogs/budget-travel-halol-pavagadh-guide"
                  className="text-[#000000] font-[500] hover:underline"
                >
                  Budget Travel Tips for Halol
                </a>
              </li>
              <li>
                <a
                  href="/blogs/local-food-guide-halol-pavagadh"
                  className="text-[#000000] font-[500] hover:underline"
                >
                 Local Food Guide
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
