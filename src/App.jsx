
import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";

import Loader from "./Component/loader/Loader";
// import AboutUs from "./pages/aboutus/AboutUs";
// import Rooms from "./pages/rooms/Rooms";
// import Facilites from "./pages/facilitesMain/Facilites";
// import DarshanTiming from "./pages/darshanTime/DarshanTiming";
// import GalleryPage from "./pages/gallery/GalleryPage";
// import SightSeeing from "./pages/sightSeeing/SightSeeing";
// import ContactUs from "./pages/contactUs/ContactUs";
import ScrollToTop from "./Component/Scrooltop";
import AboutUs from "./pages/aboutUs/AboutUs";
import AmentiesPage from "./pages/amenities/AmentiesPage";
import Accomodation from "./pages/accomoPage/Accomodation";
import { Root } from "postcss";
import RoomListing from "./pages/roomListingpage/RoomListing";
import RoomDetails from "./pages/roomDetails/RoomDetails";
import ConatctUs from "./pages/ConatctPage/ConatctUs";
import Blogs from "../src/pages/blogs/Blogs";
import MyBookings from "./pages/myBookings/MyBookings";
import BottomBar from "./Component/bottomBar/BottomBar";
import BlogDetails from "./pages/blogs/Blogdetails";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Faq from "./pages/faqs/Faq";
import SpotLight from "./pages/spotlight/SpotLight";
import Testimonials from "./pages/testimonials/Testimonials";
import Memories from "./pages/memories/Memories";
import PrivateVillas from "./pages/roomDetails/PrivateVilla";

import UseGoogleAnalytics from "./Component/useGoogleAnalytics";
import BlogdetailsSecond from "./pages/blogs/BlogdetailsSecond";
import Blog3details from "./pages/blogs/Blog3details";
import Blogs4 from "./pages/blogs/Blogs4";
import Blog5Details from "./pages/blogs/Blog5Details";
import Blog6Details from "./pages/blogs/Blog6Details";
import Gallery from "./pages/gallery/Gallery";
import Influencers from "./pages/InfluencersPage/Influencers";
import DayPicnicBooking from "./pages/DayPicnicBooking";
import RomanticGatewayBadodra from "./pages/blogs/RomanticGatewayBadodra";
import SpiritualTrails from "./pages/blogs/SpiritualTrails";
import BestPlaceTo from "./pages/blogs/BestPlaceTo";
import BirdWatching from "./pages/blogs/BirdWatching";
import HiddenTemple from "./pages/blogs/HiddenTemple";
import WhyMonsoon from "./pages/blogs/WhyMonsoon";
import TopPhotography from "./pages/blogs/TopPhotography";
import OneDay from "./pages/blogs/OneDay";
import History from "./pages/blogs/History";
import Bugdet from "./pages/blogs/Bugdet";
import LocalMarkets from "./pages/blogs/LocalMarkets";
import BestSunrise from "./pages/blogs/BestSunrise";
import HowToReach from "./pages/blogs/HowToReach";
import TopWaterfall from "./pages/blogs/TopWaterfall";
import LocalFoods from "./pages/blogs/LocalFoods";
import MagicalGolden from "./pages/blogs/MagicalGolden";
import StoriesFromPeople from "./pages/blogs/StoriesFromPeople";
import WhatYouDiscover from "./pages/blogs/WhatYouDiscover";
import DesignDiaries from "./pages/blogs/DesignDiaries";
import Hours from "./pages/blogs/72Hours";
import CoffeeWithView from "./pages/blogs/CoffeeWithView";
import MoonlightMagix from "./pages/blogs/MoonlightMagix";
import EcoLuxury from "./pages/blogs/EcoLuxury";
import CulnaryJourney from "./pages/blogs/CulinaryJourney";
import WhyBestResort from "./pages/blogs/WhyBestResort";
import ExploringHalol from "./pages/blogs/ExploringHalol";
import RainOrShine from "./pages/blogs/RainOrShine";
import IntegratedBlogDetails from "./pages/blogs/IntegratedBlogDetails";
import WellnessByNature from "./pages/blogs/WellnessByNature";
import Staying from "./pages/blogs/Staying";
import ADay from "./pages/blogs/ADay";
import MonsoonWeddings from "./pages/blogs/MonsoonWeddings";
import BasaltForFamilies from "./pages/blogs/BasaltForFamilies";
import QuietMornings from "./pages/blogs/QuietMornings";
import BasaltParadiseDark from "./pages/blogs/BasaltParadiseDark";
import WildAtHalol from "./pages/blogs/WildAtHalol";
import RainyCozy from "./pages/blogs/RainyCozy";
import TheHiddenCorners from "./pages/blogs/TheHiddenCorners";
import WellnessOnThe from "./pages/blogs/WellnessOnThe";
import ColorOfHalol from "./pages/blogs/ColorOfHalol";
import UnplugToReconnect from "./pages/blogs/UnplugToReconnect";
import OfflineEscape from "./pages/blogs/OfflineEscape";
import RetreatRituals from "./pages/blogs/RetreatRituals";
import SunriseStories from "./pages/blogs/SunriseStories";
import TheArtisans from "./pages/blogs/TheArtisans";
import SeasonalSpa from "./pages/blogs/SeasonalSpa";
import BasaltByDay from "./pages/blogs/BasaltByDay";
import MusicInAir from "./pages/blogs/MisicInAir";
import TrailTails from "./pages/blogs/Trail&Tails";
import HealingPower from "./pages/blogs/HealingPower";
import QuiteCorners from "./pages/blogs/QuiteCorners";
import WellTravel from "./pages/blogs/WellTravel";
import PlayfulSouls from "./pages/blogs/PlayfulSoules";
import { motion, AnimatePresence } from "framer-motion";
import offer from "../public/Basalt Navaratri Special Offer .jpg"

function App() {
  const [loading, setLoading] = useState(false);
const [open, setOpen] = useState(false);

  // Show modal after 3 seconds when page loads
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []); // Empty dependency ensures it runs only once after hard refresh

  UseGoogleAnalytics();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 1.5 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <ScrollToTop />
      <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">
        <Routes>
          <Route path="/" element={loading ? <Loader /> : <Home />} />
          <Route
            path="/about-us"
            element={loading ? <Loader /> : <AboutUs />}
          />
          <Route
            path="/amenities"
            element={loading ? <Loader /> : <AmentiesPage />}
          />
          <Route
            path="/accomdation"
            element={loading ? <Loader /> : <Accomodation />}
          />
          <Route
            path="/all-rooms"
            element={loading ? <Loader /> : <RoomListing />}
          />
          <Route
            path="/room-details"
            element={loading ? <Loader /> : <RoomDetails />}
          />
          <Route
            path="/contact-us"
            element={loading ? <Loader /> : <ConatctUs />}
          />
          <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
          <Route
            path="/bookings"
            element={loading ? <Loader /> : <MyBookings />}
          />
          <Route
            path="/blogs/:slug"
            element={loading ? <Loader /> : <BlogDetails />}
          />
          <Route
            path="/travel-tips"
            element={loading ? <Loader /> : <BlogdetailsSecond />}
          />
          <Route
            path="/privacy-policy"
            element={loading ? <Loader /> : <PrivacyPolicy />}
          />
          <Route path="/terms" element={loading ? <Loader /> : <Terms />} />
          <Route path="/faqs" element={loading ? <Loader /> : <Faq />} />
          <Route
            path="/spotlight"
            element={loading ? <Loader /> : <SpotLight />}
          />
          <Route
            path="/testimonials"
            element={loading ? <Loader /> : <Testimonials />}
          />
          <Route
            path="/memories"
            element={loading ? <Loader /> : <Memories />}
          />
          <Route
            path="/private-vila-details"
            element={loading ? <Loader /> : <PrivateVillas />}
          />
          <Route
            path="/blogs/offbeat-destinations-near-halol"
            element={loading ? <Loader /> : <Blog3details />}
          />
          <Route
            path="/blogs/nature-spots-near-halol"
            element={loading ? <Loader /> : <Blogs4 />}
          />
          <Route
            path="/adventure-activities"
            element={loading ? <Loader /> : <Blog5Details />}
          />
          <Route
            path="/blogs/weekend-getaway-from-ahmedabad"
            element={loading ? <Loader /> : <Blog6Details />}
          />
          <Route path="/gallery" element={loading ? <Loader /> : <Gallery />} />
          <Route
            path="/influencers-registration"
            element={loading ? <Loader /> : <Influencers />}
          />
          <Route
            path="/resort-booking"
            element={loading ? <Loader /> : <DayPicnicBooking />}
          />
          <Route
            path="/blogs/romantic-getaways-near-vadodara"
            element={loading ? <Loader /> : <RomanticGatewayBadodra />}
          />
          <Route
            path="/blogs/spiritual-trails-near-halol"
            element={loading ? <Loader /> : <SpiritualTrails />}
          />
          <Route
            path="/blogs/best-time-to-visit-pavagadh-halol"
            element={loading ? <Loader /> : <BestPlaceTo />}
          />
          <Route
            path="/blogs/birdwatching-and-eco-tourism-halol"
            element={loading ? <Loader /> : <BirdWatching />}
          />
          <Route path="/blogs/hidden-temples-spiritual-sites-pavagadh" element={loading ? <Loader /> : <HiddenTemple />} />

          <Route path="/blogs/best-time-to-visit-pavagadh-monsoon-guide" element={loading ? <Loader /> : <WhyMonsoon />} />
          <Route path="/blogs/photography-places-halol-instagram-reels" element={loading ? <Loader /> : <TopPhotography />} />
          <Route path="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary" element={loading ? <Loader /> : <OneDay />} />
          <Route path="/blogs/history-of-champaner-pavagadh-heritage-guide" element={loading ? <Loader /> : <History />} />
          <Route path="/blogs/budget-travel-halol-pavagadh-guide" element={loading ? <Loader /> : <Bugdet />} />
          <Route path="/blogs/local-markets-handicrafts-halol-shopping-guide" element={loading ? <Loader /> : <LocalMarkets />} />
          <Route path="/blogs/best-sunrise-sunset-points-pavagadh-halol" element={loading ? <Loader /> : <BestSunrise />} />
          <Route path="/blogs/how-to-reach-pavagadh-vadodara-ahmedabad-surat" element={loading ? <Loader /> : <HowToReach />} />
          <Route path="/blogs/waterfalls-near-halol-monsoon-travel" element={loading ? <Loader /> : <TopWaterfall />} />
          <Route path="/blogs/local-food-guide-halol-pavagadh" element={loading ? <Loader /> : <LocalFoods />} />
          <Route path="/blogs/basalt-paradise-has-the-most-magical" element={loading ? <Loader /> : <MagicalGolden />} />
          <Route path="/blogs/stories-from-has-the-people" element={loading ? <Loader /> : <StoriesFromPeople />} />
          <Route path="/blogs/what-you’ll-discover-on-our-hidden" element={loading ? <Loader /> : <WhatYouDiscover />} />
          <Route path="/blogs/architecture-that-makes-basalt-paradise-unforgettable" element={loading ? <Loader /> : <DesignDiaries />} />
          <Route path="/blogs/the-ultimate-weekend-itinerary" element={loading ? <Loader /> : <Hours />} />
          <Route path="/blogs/local-brews-you’ll-only" element={loading ? <Loader /> : <CoffeeWithView />} />
          <Route path="/blogs/what-makes-nighttime-basalt" element={loading ? <Loader /> : <MoonlightMagix />} />
          <Route path="/blogs/basalt-paradise-balances-nature" element={loading ? <Loader /> : <EcoLuxury />} />
          <Route path="/blogs/culinary-journey-basalt-paradise" element={loading ? <Loader /> : <CulnaryJourney />} />
          <Route path="/blogs/basalt-paradise-best-resort" element={loading ? <Loader /> : <WhyBestResort />} />
          <Route path="/blogs/exploring-halol-the-best" element={loading ? <Loader /> : <ExploringHalol />} />
          <Route path="/blogs/rain-or-shine-what-makes-monsoons" element={loading ? <Loader /> : <RainOrShine />} />
          <Route path="/blogs/wellness-by-nature-how-basalt" element={loading ? <Loader /> : <WellnessByNature />} />
          <Route path="/blogs/day-in-the-life-at-basalt" element={loading ? <Loader /> : <ADay />} />
          <Route path="/blogs/monsoon-weddings-at-basalt-paradise" element={loading ? <Loader /> : <MonsoonWeddings />} />
          <Route path="/blogs/staying-with-style-what-makes" element={loading ? <Loader /> : <Staying />} />
          <Route path="/blogs/basalt-paradise-for-families" element={loading ? <Loader /> : <BasaltForFamilies />} />
          <Route path="/blogs/quiet-mornings-mountain-mists-waking" element={loading ? <Loader /> : <QuietMornings />} />
          <Route path="/blogs/basalt-paradise-after-dark" element={loading ? <Loader /> : <BasaltParadiseDark />} />
          <Route path="/blogs/wild-at-halol-discovering" element={loading ? <Loader /> : <WildAtHalol />} />
          <Route path="/blogs/rainy-cozy-monsoon-moments" element={loading ? <Loader /> : <RainyCozy />} />
          <Route path="/blogs/the-hidden-corners-five" element={loading ? <Loader /> : <TheHiddenCorners />} />
          <Route path="/blogs/wellness-on-the-go" element={loading ? <Loader /> : <WellnessOnThe />} />
          <Route path="/blogs/color-of-halol-painting" element={loading ? <Loader /> : <ColorOfHalol />} />
          <Route path="/blogs/unplug-to-reconnect-how" element={loading ? <Loader /> : <UnplugToReconnect />} />
          <Route path="/blogs/offline-escapes-a-day" element={loading ? <Loader /> : <OfflineEscape />} />
          <Route path="/blogs/retreat-rituals-how-guests" element={loading ? <Loader /> : <RetreatRituals />} />
          <Route path="/blogs/sunrise-stories-guests-share" element={loading ? <Loader /> : <SunriseStories />} />
          <Route path="/blogs/the-artisans-of-halol" element={loading ? <Loader /> : <TheArtisans />} />
          <Route path="/blogs/seasonal-spa-rituals-treatments" element={loading ? <Loader /> : <SeasonalSpa />} />
          <Route path="/blogs/basalt-by-day-stars" element={loading ? <Loader /> : <BasaltByDay />} />
          <Route path="/blogs/music-in-air-how" element={loading ? <Loader /> : <MusicInAir />} />
          <Route path="/blogs/trail-tales-short-walks" element={loading ? <Loader /> : <TrailTails />} />
          <Route path="/blogs/healing-power-of-stone" element={loading ? <Loader /> : <HealingPower />} />
          <Route path="/blogs/quiet-corners-the-best" element={loading ? <Loader /> : <QuiteCorners />} />
          <Route path="/blogs/well-traveled-well-rested" element={loading ? <Loader /> : <WellTravel />} />
          <Route path="/blogs/playful-souls-rediscovering-childhood" element={loading ? <Loader /> : <PlayfulSouls />} />
          <Route path="/blogs/main/:id" element={loading ? <Loader /> : <IntegratedBlogDetails />} />
        </Routes>



 <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative  rounded-xl overflow-hidden shadow-lg"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-3 right-3 text-[#fff] text-2xl"
              >
             <i class="fa-solid fa-circle-xmark"></i>
              </button>

              {/* Full Image */}
              <img
                src={offer} // replace with your image
                alt="Modal"
                className=" h-[350px] md:h-[500px] object-content"
              />

              {/* WhatsApp Button */}
              <a 
                  href="https://wa.me/918799284980" // replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer" className=" px-6 py-[7px]  mt-[px] mx-auto justify-center items-center flex basalt  w-[100%] min-w-[350px] md:min-w-[400px] ">
                <div
              
                  className="  font-Poppins font-[500] text-[18px]  !text-white  rounded-[7px]  transition"
                >
                Inquiry Now
                </div>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      </div>


      <BottomBar />
    </>
  );
}

export default App;