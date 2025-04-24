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
import Blogs from "../src/pages/blogs/Blogs"
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
          <Route path="/about-us" element={loading ? <Loader /> : <AboutUs />} />
          <Route path="/amenities" element={loading ? <Loader /> : <AmentiesPage />} />
          <Route path="/accomdation" element={loading ? <Loader /> : <Accomodation />} />
          <Route path="/all-rooms" element={loading ? <Loader /> : <RoomListing />} />
          <Route path="/room-details" element={loading ? <Loader /> : <RoomDetails />} />
          <Route path="/contact-us" element={loading ? <Loader /> : <ConatctUs />} />
          <Route path="/blogs" element={loading ? <Loader /> : <Blogs />} />
          <Route path="/bookings" element={loading ? <Loader /> : <MyBookings />} />
          <Route path="/blogs/must-visit-places-near-basalt-paradise" element={loading ? <Loader /> : <BlogDetails />} />
          <Route path="/travel-tips" element={loading ? <Loader /> : <BlogdetailsSecond />} />
          <Route path="/privacy-policy" element={loading ? <Loader /> : <PrivacyPolicy />} />
          <Route path="/terms" element={loading ? <Loader /> : <Terms />} />
          <Route path="/faqs" element={loading ? <Loader /> : <Faq />} />
          <Route path="/spotlight" element={loading ? <Loader /> : <SpotLight />} />
          <Route path="/testimonials" element={loading ? <Loader /> : <Testimonials />} />
          <Route path="/memories" element={loading ? <Loader /> : <Memories />} />
          <Route path="/private-vila-details" element={loading ? <Loader /> : <PrivateVillas />} />
          <Route path="/blogs/offbeat-destinations-near-halol" element={loading ? <Loader /> : <Blog3details />} />
          <Route path="/blogs/nature-spots-near-halol" element={loading ? <Loader /> : <Blogs4 />} />
          <Route path="/adventure-activities" element={loading ? <Loader /> : <Blog5Details />} />
          <Route path="/blogs/weekend-getaway-from-ahmedabad" element={loading ? <Loader /> : <Blog6Details />} />
          <Route path="/gallery" element={loading ? <Loader /> : <Gallery />} />
          <Route path="/influencers-registration" element={loading ? <Loader /> : <Influencers />} />







        </Routes>

      </div>

      <BottomBar />
    </>
  );
}

export default App;
