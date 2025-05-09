import React, { useState, useEffect } from "react";
// import video from "../../../public/preloader.mp4";
import video from "../../../public/preloaderNew.mp4";


export default function Preloader() {
  const [percent, setPercent] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [hideAnimation, setHideAnimation] = useState(false);

  useEffect(() => {
    // Increment the percentage
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 170) {
          clearInterval(interval);
          setTimeout(() => {
            setHideAnimation(true); // Trigger hide animation
            setTimeout(() => setShowLoader(false), 1000); // Allow animation to complete
          }, 1100); // Brief pause at 100%
          return 170;
        }
        return prev + 1;
      });
    }, 17); // Adjust this for a smoother increment

    return () => clearInterval(interval);
  }, []);

  return (
    showLoader && (
      <div
        id="preloader"
        className={`preloader w-[100%] !bg-white ${
          hideAnimation ? "hide-transform" : "show-transform"
        }`}
      >
        <div className="flex  w-[100%] justify-center items-center fixed top-0 left-0  h-full z-50">
          <div className="flex w-[100%] flex-col items-center">
            <video autoPlay muted className="w-[100%] h-[100vh]">
              <source src="https://res.cloudinary.com/dn1jdxyoq/video/upload/v1741842129/rlhszubylif9ie3p2wyr.mp4" type="video/mp4" />
            </video>

            {/* <img className="w-[100%] h-[100vh]" src={video} /> */}
      
          </div>
        </div>
      </div>
    )
  );
}
