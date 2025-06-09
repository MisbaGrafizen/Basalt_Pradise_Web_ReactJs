// import React, { useEffect, useState } from "react";
// import "../src/App.css";
// import { Route, Routes, useLocation } from "react-router-dom";
// import Home from "./pages/home/Home ";

// import Loader from "./Component/loader/Loader";
// // import AboutUs from "./pages/aboutus/AboutUs";
// // import Rooms from "./pages/rooms/Rooms";
// // import Facilites from "./pages/facilitesMain/Facilites";
// // import DarshanTiming from "./pages/darshanTime/DarshanTiming";
// // import GalleryPage from "./pages/gallery/GalleryPage";
// // import SightSeeing from "./pages/sightSeeing/SightSeeing";
// // import ContactUs from "./pages/contactUs/ContactUs";
// import ScrollToTop from "./Component/Scrooltop";
// import AboutUs from "./pages/aboutUs/AboutUs";
// import AmentiesPage from "./pages/amenities/AmentiesPage";
// import Accomodation from "./pages/accomoPage/Accomodation";
// import { Root } from "postcss";
// import RoomListing from "./pages/roomListingpage/RoomListing";
// import RoomDetails from "./pages/roomDetails/RoomDetails";
// import ConatctUs from "./pages/ConatctPage/ConatctUs";
// import Blogs from "../src/pages/blogs/Blogs"
// import MyBookings from "./pages/myBookings/MyBookings";
// import BottomBar from "./Component/bottomBar/BottomBar";
// import BlogDetails from "./pages/blogs/Blogdetails";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import Terms from "./pages/Terms";
// import Faq from "./pages/faqs/Faq";
// import SpotLight from "./pages/spotlight/SpotLight";
// import Testimonials from "./pages/testimonials/Testimonials";
// import Memories from "./pages/memories/Memories";
// import PrivateVillas from "./pages/roomDetails/PrivateVilla";

// import UseGoogleAnalytics from "./Component/useGoogleAnalytics";
// import BlogdetailsSecond from "./pages/blogs/BlogdetailsSecond";
// import Blog3details from "./pages/blogs/Blog3details";
// import Blogs4 from "./pages/blogs/Blogs4";
// import Blog5Details from "./pages/blogs/Blog5Details";
// import Blog6Details from "./pages/blogs/Blog6Details";
// import Gallery from "./pages/gallery/Gallery";
// import Influencers from "./pages/InfluencersPage/Influencers";
// import DayPicnicBooking from "./pages/DayPicnicBooking";
// import RomanticGatewayBadodra from "./pages/blogs/RomanticGatewayBadodra";

// function App() {
//   const [loading, setLoading] = useState(false);

//   UseGoogleAnalytics();


//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500); // 1.5 seconds

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []);

//   return (
//     <>
//       <ScrollToTop />
//       <div className="w-100 ease-soft-spring h-[100%] !bg-[#ffffff]  duration-1000 ">

//         <Routes>
//           <Route path="/" element={loading ? <Loader /> : <Home />} />
//           <Route path="/about-us" element={loading ? <Loader /> : <AboutUs />} />
//           <Route path="/amenities" element={loading ? <Loader /> : <AmentiesPage />} />
//           <Route path="/accomdation" element={loading ? <Loader /> : <Accomodation />} />
//           <Route path="/all-rooms" element={loading ? <Loader /> : <RoomListing />} />
//           <Route path="/room-details" element={loading ? <Loader /> : <RoomDetails />} />
//           <Route path="/contact-us" element={loading ? <Loader /> : <ConatctUs />} />
//           <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
//           <Route path="/bookings" element={loading ? <Loader /> : <MyBookings />} />
//           <Route path="/blogs/must-visit-places-near-basalt-paradise" element={loading ? <Loader /> : <BlogDetails />} />
//           <Route path="/travel-tips" element={loading ? <Loader /> : <BlogdetailsSecond />} />
//           <Route path="/privacy-policy" element={loading ? <Loader /> : <PrivacyPolicy />} />
//           <Route path="/terms" element={loading ? <Loader /> : <Terms />} />
//           <Route path="/faqs" element={loading ? <Loader /> : <Faq />} />
//           <Route path="/spotlight" element={loading ? <Loader /> : <SpotLight />} />
//           <Route path="/testimonials" element={loading ? <Loader /> : <Testimonials />} />
//           <Route path="/memories" element={loading ? <Loader /> : <Memories />} />
//           <Route path="/private-vila-details" element={loading ? <Loader /> : <PrivateVillas />} />
//           <Route path="/blogs/offbeat-destinations-near-halol" element={loading ? <Loader /> : <Blog3details />} />
//           <Route path="/blogs/nature-spots-near-halol" element={loading ? <Loader /> : <Blogs4 />} />
//           <Route path="/adventure-activities" element={loading ? <Loader /> : <Blog5Details />} />
//           <Route path="/blogs/weekend-getaway-from-ahmedabad" element={loading ? <Loader /> : <Blog6Details />} />
//           <Route path="/gallery" element={loading ? <Loader /> : <Gallery />} />
//           <Route path="/influencers-registration" element={loading ? <Loader /> : <Influencers />} />
//           <Route path="/resort-booking" element={loading ? <Loader /> : <DayPicnicBooking />} />
//           <Route path="/blogs/romantic-getaways-near-vadodara" element={loading ? <Loader /> : <RomanticGatewayBadodra />} />









//         </Routes>

//       </div>

//       <BottomBar />
//     </>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import "../src/App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/home/Home ";

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

function App() {
  const [loading, setLoading] = useState(false);

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
            path="/blogs/must-visit-places-near-basalt-paradise"
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
        </Routes>





      </div>


      <BottomBar />
    </>
  );
}

export default App;