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
// import Cookies from 'js-cookie';
// import PageNotFound from "./pages/DamjiPage/PageNotFound";
// import CheackOut from "./pages/DamjiPage/CheackOut";
// import MyBooking from "./pages/DamjiPage/mybookings/MyBooking";
// import RoomDetails from "./pages/rooms/RoomDetails";



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
          <Route path="/about" element={loading ? <Loader /> : <AboutUs />} />
          <Route path="/amenities" element={loading ? <Loader /> : <AmentiesPage />} />
          <Route path="/accomdation" element={loading ? <Loader /> : <Accomodation />} />
          {/* <Route
            path="/about-us"
            element={loading ? <Loader /> : <AboutUs />}
          />
          <Route path="/all-rooms" element={loading ? <Loader /> : <Rooms />} />
          <Route
            path="/facilites"
            element={loading ? <Loader /> : <Facilites />}
          />  
          <Route
            path="/darshan-timing"
            element={loading ? <Loader /> : <DarshanTiming />}
          />
          <Route
            path="/gallery"
            element={loading ? <Loader /> : <GalleryPage />}
          />
          <Route
            path="/sight-seeing"
            element={loading ? <Loader /> : <SightSeeing />}
          />
          <Route
            path="/contct-us"
            element={loading ? <Loader /> : <ContactUs />}
          />
          <Route
            path="/pagenotfound"
            element={loading ? <Loader /> : <PageNotFound />}
          />
          <Route
            path="/cheackout"
            element={loading ? <Loader /> : <CheackOut />}
          />
           <Route
            path="/my-bookings"
            element={loading ? <Loader /> : <MyBooking />}
          />
                     <Route
            path="/room-details"
            element={loading ? <Loader /> : <RoomDetails />}
          /> */}
        </Routes>
      </div>
    </>
  );
}

export default App;
