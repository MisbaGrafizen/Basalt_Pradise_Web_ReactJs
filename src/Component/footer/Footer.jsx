import React from "react";
import logo from "../../../public/Basalt_White_Logo.png";
import india from "../../../public/footer/india.jpeg";
import { useNavigate } from "react-router-dom";
import PixelCard from "../Reactbits/Pixelcard";
import b3 from "../../../public/Basalt/B3.jpg"

export default function Footer() {
  const countries = [
    { code: "IN", name: "India", phone: "+91" },
    { code: "US", name: "United States", phone: "+1" },
    { code: "UK", name: "United Kingdom", phone: "+44" },
    { code: "AE", name: "UAE", phone: "+971" },
  ];

  const navigate = useNavigate()

  const handlePrivacyPolicy = () => {
    navigate("/privacy-policy")
  }


  const handleTerms = () => {
    navigate("/terms")
  }

  return (
    // <>
    //   <div className=" flex w-[100%] font-Poppins h-[450px] bg-[#0E1E2C]">
    //     <div className="  w-[85%] flex h-[100%] mx-auto p-[15px] ">
    //       <div className=" flex gap-[1px] flex-col ">
    //         <div className=" flex w-[200px] h-[100px] ">
    //           <img src={logo} />
    //         </div>
    //         <div className="  text-[#fff]">
    //           <h2>Keep travelling all year round!</h2>
    //           <p className=" flex text-[13px] font-[300] text-[#c3c3c3]">
    //             Subscribe to our newsletter to find travel inspiration in your
    //             inbox.
    //           </p>
    //         </div>
    //         <div className=" flex flex-col  mt-[10px] w-[400px]">
    //           <div className=" flex  gap-[15px]">
    //             <div className=" w-[180px]  h-[45px]  rounded-[8px] outline-none  bg-transparent border-[1px]  px-[10px] border-[#686666]">
    //               <input placeholder=" Enter Youtr Name" className=" text-[#fff] w-[100%] h-[100%] bg-transparent outline-none " type="text" />
    //             </div>

    //             <div className=" w-[180px]  h-[45px]  rounded-[8px] outline-none  bg-transparent border-[1px]  px-[10px] border-[#686666]">
    //               <input placeholder=" Enter Your Email" className=" text-[#fff] w-[100%] h-[100%] bg-transparent outline-none " type="text" />
    //             </div>
    //           </div>
    //           <div className="  flex ">
    //           <div className=" w-[180px]  h-[45px] flex  rounded-[8px] outline-none  bg-transparent border-[1px]  px-[10px] border-[#686666]">
    //           <div >

    //           </div>
    //               <input placeholder=" Enter Your Email" className=" text-[#fff] w-[100%] h-[100%] bg-transparent outline-none " type="text" />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <footer className="bg-[#071a2d] font-Poppins  text-white pt-[30px] md:pb-[20px]  pb-[110px] px-6 md:px-12">
      <div className="md:max-w-[92%] mx-auto flex flex-col">
        <div className=" flex md:flex-row flex-col   gap-[20px] w-[100%] justify-between">
          <div className=" flex flex-col ">
            {/* Logo Section */}
            <div className="mb-">
              <img
                src={logo}
                alt="Company Logo"
                className="h-[70px]  w-[160px] mb-"
              />
              <p className="text-[16px]  mt-[10px] font-medium">
                Keep travelling all year round!
              </p>
            </div>

            {/* Contact Form Section */}
            <div className=" mb-12">
              <p className="text-gray-400 text-[10px] mb-6">
                Subscribe to our newsletter to find travel inspiration in your
                inbox.
              </p>
              <div className="space-y-2">
                <div className="grid md:grid-cols-2 gap-">


                </div>
                <div className="flex gap-2 items-center">
                  {/* <select className="bg-transparent border border-gray-600 rounded px-3 py-2 w-36 appearance-none custom-select">
                    {countries.map((country) => (
                      <option
                        key={country.code}
                        value={country.phone}
                        className="bg-[#1A2332]"
                      >
                        {country.name} ({country.phone})
                      </option>
                    ))}

                  </select> */}
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Email ID*"
                      className="bg-transparent border text-[12px] outline-none w-[210px] border-[#3a3f59] rounded-[6px] px-4 py-2"
                    />
                  </div>
                  <button className="bg-[#ff8000]  w-[90px] text-[14px] h-[34px] rounded-[4px] hover:bg-[#F4D03F]/90">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>




          {/* Links Section */}
          <div className="md:grid  w-[100%] md:w-[800px] md:ml-[70px]  flex md:grid-cols-3 md:mb-[40px] gap-[10px] md:gap-[30px] ">

            {/* Discover us */}
            <div className="">
              <h3 className="text-lg font-semibold mb-4">Discover us</h3>
              <ul className="  flex flex-col gap-[7px]">
                <li>
                  <a
                    href="/testimonials"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Guests Reviews
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/all-rooms"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    How To Book
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Our Team
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Tour Managers
                  </a>
                </li> */}


                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    CSR Policy
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Create Your Travel Portfolio
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Support */}
            <div className=" ">
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className=" flex flex-col gap-[7px]">
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.google.com/search?sca_esv=cc2a4126488dadb8&rlz=1C5CHFA_enIN1022IN1023&sxsrf=AHTn8zoOujCVN_EhRZWcpJNy4DF-jKMlyg:1741837797141&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzQVvI_O429WvNJ5H9m5FP3Dxi1hGTzbh3qS7J38kxnTWUC5yo4YiCROcQLWgINvB_Gbaz51qbrnWFVpdpHMktmEemRRe_6tHxyGieQ7cseWQuSAbFQ%3D%3D&q=Basalt+Paradise+Resort+%26+Spa+Reviews&sa=X&ved=2ahUKEwjMsp65k4aMAxVxTjABHUqALoEQ0bkNegQIHxAE&biw=1440&bih=711&dpr=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Leave Your Feedback
                  </a>

                </li>

                <li>
                  <a
                    href="/faqs"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/influencers-registration"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Influencer
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    COVID-19 Public Notice
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Singapore Visa
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Annual Return
                  </a>
                </li> */}
              </ul>
            </div>


            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className=" flex flex-col gap-[7px]">
                {/* <li>
                  <a
                    href="/spotlight"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Spotlight
                  </a>
                </li> */}
                <li>
                  <a
                    href="/blogs"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Blogs
                  </a>
                </li>

                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Video casts
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Hardik Bhai Patel
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Darshit Adesara
                  </a>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Articles By Neil Patil
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Travel Planner
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white text-[14px] font-[300]"
                  >
                    Customized Travel Planner
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
          <div className="  flex mb-[30px] gap-[40px]">
            <PixelCard variant="pink">
              <img className=" w-[100%] h-[100%] overflow-hidden object-cover" src={b3} />
            </PixelCard>


            <PixelCard variant="pink">
              <img className=" w-[100%] h-[100%] overflow-hidden object-cover" src={b3} />
            </PixelCard>

          </div>
          {/* Caution Message */}
        </div>
        <div className="mb-[10px]">
          <p className="text-[12px] text-gray-400 font-[300]">
            <span className="text-white  text-[15px] font-medium">
              *Caution: Beware of Fake Promotions or Offers{" "}
            </span>
            *Please do not believe or engage with any promotional emails, SMS or
            Web-link which ask you to click on a link and fill in your details.
            All Basalt Pradise authorized email communications are delivered from
            domain @basaltpradise.com  .
            *Basalt Pradise bears no liability or responsibility whatsoever
            for any communication which is fraudulent or misleading in nature
            and not received from registered domain.
          </p>
        </div>
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-6">
          <div className="flex flex-wrap justify-between w-[100%] gap-4 md:mb-0">
            <span className="text-sm md:text-start text-center text-gray-400">
              © 2025 All Rights Reserved by Basalt Pradise || Designed and
              Developed with ❤️ by Grafizen International LLC
            </span>
            <div className="  md:flex hidden  gap-[20px]">
              <a href="#" className="text-sm text-gray-400 hover:text-white" onClick={handlePrivacyPolicy}>
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white" onClick={handleTerms}>
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white">
                Site Map
              </a>
            </div>
          </div>
          {/* <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                />
              </svg>
              Payments on website are secure
            </span>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src="/placeholder.svg?height=40&width=40"
                  alt={`Payment Partner ${i}`}
                  className="h-8"
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>

      <style jsx>{`
        .custom-select {
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.5em 1.5em;
          padding-right: 2.5rem;
        }
      `}</style>
    </footer>
  );
}
