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



function App() {
  const [loading, setLoading] = useState(false);

 


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
        </Routes>
      </div>
    </>
  );
}

export default App;
