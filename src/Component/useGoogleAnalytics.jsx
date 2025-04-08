import { useEffect } from "react";

const UseGoogleAnalytics = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-KP10NG3045`;
    document.head.appendChild(script);

    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", "G-KP10NG3045");
    };
  }, []);
};

export default UseGoogleAnalytics;
