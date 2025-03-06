import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/logo.png";
import {
  Modal as NextUIModal,
  ModalBody,
  ModalContent,
} from "@nextui-org/react";
import { motion } from "framer-motion";
export default function Header() {
  const location = useLocation(); // Get the current path
  const [selected, setSelected] = useState(location.pathname); // Track selected route

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [step, setStep] = useState("number");
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [timer, setTimer] = useState(30);




  const handleloginOpen = () => {
    setIsModalOpen(true)
  }
  useEffect(() => {
    setIsLoggedIn(false);
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const closeAndResetModal = () => {
    resetModal();
    setIsModalOpen(false);
  };

  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value.length <= 10 && /^[0-9]*$/.test(value)) {
      setMobileNumber(value);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);


  const resetModal = () => {
    setStep("number");
    setMobileNumber("");
    setOtp(new Array(6).fill(""));
    setIsTermsChecked(false);
    setName("");
    setEmail("");
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  const handleLinkClick = (path) => {
    setSelected(path);
  };
  const sendOtp = () => {
    if (mobileNumber.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    console.log("OTP sent to:", mobileNumber);
    setStep("otp"); // Move to the OTP verification step
    setTimer(30); // Reset OTP timer

    // Simulate OTP sending process
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };
  const resendOtp = () => {
    console.log("Resending OTP...");
    setTimer(30); // Reset timer

    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer === 1) {
          clearInterval(interval);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };


  const verifyOtp = () => {
    const enteredOtp = otp.join(""); // Convert the array of OTP digits into a string

    if (enteredOtp.length !== 6) {
      alert("Please enter a 6-digit OTP.");
      return;
    }

    console.log("Verifying OTP:", enteredOtp);

    // Simulating OTP verification (In real implementation, replace with an API call)
    if (enteredOtp === "123456") { // Replace this with actual backend verification
      console.log("OTP verified successfully!");
      setStep("emailAndName"); // Proceed to the next step
    } else {
      alert("Invalid OTP. Please try again.");
      setOtp(new Array(6).fill("")); // Clear the OTP input
    }
  };



  const handleOtpChange = (e, index) => {
    const { value } = e.target;

    // Ensure only a single digit is entered
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to the next input field if a digit is entered
      if (value && index < otp.length - 1) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleOtpKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (newOtp[index] !== "") {
        // If the field is not empty, just clear the current field
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        // If the field is already empty, move back and clear previous field
        newOtp[index - 1] = "";
        setOtp(newOtp);
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };


  const updateUser = () => {
    if (!name || !email) {
      alert("Please enter your name and email.");
      return;
    }
  
    console.log("User details submitted:", { name, email });
  
    // Here, you can call an API to store user details
    // Example:
    // fetch("https://your-api.com/register", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, mobileNumber }),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log("Registration success:", data);
    //   setIsLoggedIn(true);
    //   setIsModalOpen(false);
    // })
    // .catch(error => console.error("Error registering user:", error));
  
    // Simulate successful registration
    setIsLoggedIn(true);
    setIsModalOpen(false);
  };
  
  return (
    <>
      <div className="bg-white flex w-full font-Poppins z-[100] mx-auto fixed">
        <div className="flex md:w-[80%]  w-[90%] h-[70px] mt-[20px] mx-auto  flex-col">
          <div className="flex w-full">
            <div className="flex w-full">
              <div className="flex w-full relative justify-between">
                <img className="flex w-[140px] md:w-[145px]" src={logo} alt="Logo" />
                <div className="flex w-[68%]  mt-[5px] items-center md:items-start justify-between">
                  <div>
                    <div className="xl:text-[15px] gap-[15px] text-[#000] items-center pl-[20px] font-Montserrat mt-[-0.4%] flex font-[600] justify-end md36:hidden md:flex">
                      <Link
                        to="/"
                        onClick={() => handleLinkClick("/")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : " text-[#515151]"
                          }`}
                      >
                        Desk
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/about-us"
                        onClick={() => handleLinkClick("/about-us")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/about-us"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : " text-[#515151]"
                          }`}
                      >
                        About us
                      </Link>

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/all-rooms"
                        onClick={() => handleLinkClick("/all-rooms")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/all-rooms"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : " text-[#515151]"
                          }`}
                      >
                        Accommodation
                      </Link>

                  <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/amenities"
                        onClick={() => handleLinkClick("/amenities")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/amenities"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : " text-[#515151]"
                          }`}
                      >
                        Amenities
                      </Link> 

                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/blogs"
                        onClick={() => handleLinkClick("/blogs")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/blogs"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : "  text-[#515151]"
                          }`}
                      >
                        Blogs
                      </Link>
                      {/* <span className="flex h-[24px] w-[1px] bg-black"></span> */}

                      {/* <Link
                        to="/memories"
                        onClick={() => handleLinkClick("/memories")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/memories"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : "  text-[#515151]"
                          }`}
                      >
                        Memories
                      </Link> */}
                      <span className="flex h-[24px] w-[1px] bg-black"></span>

                      <Link
                        to="/contact-us"
                        onClick={() => handleLinkClick("/contact-us")}
                        className={`cursor-pointer font-[400] font-Poppins ${selected === "/contact-us"
                          ? "text-yellow-500 hover:text-yellow-500"
                          : "  text-[#515151]"
                          }`}
                      >
                        Contact us
                      </Link>
                    </div>
                  </div>
                  <button className="md:mt-[-7px] flex w-[90px] gap-[10px] h-[33px] text-[14px] font-[500] rounded-[5px] basalt text-[#fff] text-center justify-center items-center" onClick={handleloginOpen}>
                    <i className="fa-solid fa-user"></i>
                    <span className="bg-white flex w-[2px] h-[20px]"></span>
                    Login
                  </button>
                  <span className="absolute h-[0.5px] bg-[#13002f] top-[36.5px] hidden right-[-0.2%] md:flex w-[87.5%]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NextUIModal
        className="!border-0  md:relative md:flex flex-col  my-auto  font-Poppins  md:!max-w-[655px] md:top-0 bottom-0   overflow-hidden !rounded-[10px]"
        isOpen={isModalOpen}
        onOpenChange={closeAndResetModal}
      >
        <ModalContent className="rounded-[10px]  bg-transparent z-[2000] !border-0 md:max-w-[800px] max-w-[350px]  !font-Montserrat !p-[0px]">
          <ModalBody className=" w-[100%] relative  !p-[0px] !border-0">
            <div className="w-[100%]  flex items-center !border-0  rounded-r-[10px] overflow-hidden justify-center ">
              <div className="w-full  md:max-w-[1000px] !border-0 md:h-[450px] h-[400px] items-center flex rounded-[10px]  md:overflow-hidden">
                {/* Left Panel */}
                <div className="w-[300px] hidden md:flex  left-design h-[100%] z-[400]  rounded-[10px] basalt p-12  flex-col text-white"></div>
                <div className=" md:w-[650px]   md:hidden flex pl-[] w-[350px]  rounded-[10px]  bg-white  h-[420px] 2">
                  <div className=" flex absolute z-[30] bg-[#de1b1b] justify-center w-[30px] h-[30px] items-center text-white">
                    <i class="fa-solid fa-xmark"></i>
                  </div>

                  <motion.div className="flex-1 bg-white !rounded-r-[10px]  overflow-hidden rounded-[10px] h-[420px]">
                    <div className="flex flex-col justify-between h-full   py-[25px] px-[10px] md:px-[20px] md36:max-w-[380px]  !rounded-[10px] md:max-w-[360px] ml-auto mr-[0px]">
                      {step === "number" && (
                        <div className=" flex  h-[100%] flex-col rounded-[10px] ">
                          <h3 className="text-[33px]  font-[700] pt-[10px] text-center text text-gray-800 font-Montserrat">
                            Login / Sign Up
                          </h3>

                          <div className="space-y-2  ml-[10px]   md:px-0 px-[10px] mt-[50px]">
                            <div className="relative ">
                              <div className="input-box12">
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  inputMode="numeric"
                                  // value={mobileNumber}
                                  // onChange={handleNumberChange}
                                  maxLength={10}
                                  className={`font-Roboto h-[40px] ml-[5px]  !w-[90%] pl-[10px] rounded-[0px]`}
                                  required
                                />
                                <span
                                  className={`font-Roboto ml-[5px] font-[500] text-[15px] `}
                                >
                                  Enter Your Mobile Number
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex ml-[10px]  md:px-0 px-[10px]   mt-[100px] mb-[10px] justify-start ">
                            <input
                              type="checkbox"
                              id="terms"
                              className="mr-2"
                              checked={isTermsChecked}
                              style={{
                                width: "18px",
                                borderRadius: " 10px",
                                height: "18px",
                              }}
                              onChange={(e) =>
                                setIsTermsChecked(e.target.checked)
                              }
                            />
                            <label
                              htmlFor="terms"
                              className="font-[500] flex gap-[10px] text-[11px] cursor-pointer text-center"
                            >
                              <span className="text-[#807c7c] font-Montserrat  text-start">
                                By proceeding, I agree to T&C Privacy & Policy &
                                Tariff Notes
                              </span>
                            </label>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`md:w-full w-[90%] py-2.5  ml-[10px] md:ml-0 font-Montserrat font-[600]  p
                           rounded-[7px] text-white text-[19px]  transition-colors ${mobileNumber.length === 10
                                ? " basalt "
                                : " cursor-not-allowed"
                              }`}
                            disabled={mobileNumber.length !== 10}
                            onClick={sendOtp}
                          >
                            Continue
                          </motion.button>
                        </div>
                      )}

                      {step === "otp" && (
                        <>
                          <div className="flex  md36:max-w-[390px] md:max-w-[410px] h-[100%] ">
                            <div className=" flex   f w-[100%] h-[100%] flex-col ">
                              <h3 className="text-[33px]  font-[700] pt-[10px]  mx-auto text text-gray-800 font-Montserrat">
                                {" "}
                                Enter OTP
                              </h3>

                              <div className="  !h-[100%]  mt-[40px]">
                                <div className="relative ">
                                  <div className="flex ml-[8px] justify-right gap-[7px]">
                                    {otp.map((value, index) => (
                                      <input
                                        key={index}
                                        type="text"
                                        inputMode="numeric"
                                        pattern="[0-9]*"
                                        maxLength="1"
                                        autoComplete="off"
                                        value={value}
                                        onChange={(e) => {
                                          const newValue = e.target.value;

                                          if (/^\d$/.test(newValue)) {
                                            const otpArray = [...otp];
                                            otpArray[index] = newValue;
                                            setOtp(otpArray);

                                            // Move to the next input field if available
                                            const nextInput = document.getElementById(`otp-input-${index + 1}`);
                                            if (nextInput) {
                                              nextInput.focus();
                                            }
                                          }
                                        }}
                                        onKeyDown={(e) => {
                                          if (e.key === "Backspace") {
                                            const otpArray = [...otp];

                                            // If the field is not empty, clear it
                                            if (otpArray[index] !== "") {
                                              otpArray[index] = "";
                                              setOtp(otpArray);
                                            } else if (index > 0) {
                                              // If already empty, move focus to the previous field and clear it
                                              otpArray[index - 1] = "";
                                              setOtp(otpArray);
                                              document.getElementById(`otp-input-${index - 1}`).focus();
                                            }
                                          }
                                        }}
                                        id={`otp-input-${index}`}
                                        className="w-[45px] h-[45px] font-Roboto text-center mx-[1px] text-[20px] font-[500] border-b-[1.5px] border-[#000] outline-none"
                                      />
                                    ))}
                                  </div>

                                  <div className="flex text-[#0e2447] ml-[8px]  duration-200 font-Roboto   mt-[10px] font-[400]  text-[13px] ">
                                    {timer > 0 ? (
                                      <p className="  font-Montserrat  w-[210px]">
                                        {" "}
                                        Time remaining: {timer} seconds
                                      </p>
                                    ) : (
                                      <button
                                        onClick={resendOtp}
                                        className="text-[#000000] duration-200  font-Montserrat   font-[400] hover:underline text-[13px]"
                                      >
                                        Resend OTP
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.95 }}
                                  className=" w-[94%] ml-[5px] md:w-[100%]"
                                >
                                  <button
                                    onClick={verifyOtp} // Now this function is properly defined
                                    className={`left-0 right-0 mt-[120px] font-Montserrat mx-auto h-[50px] font-[700] text-[#fff] top-[30px] w-[100%] rounded-[10px] text-[20px] ${otp.every((digit) => digit !== "") ? "basalt" : "bg-gray-300 cursor-not-allowed"
                                      }`}
                                    disabled={!otp.every((digit) => digit !== "")}
                                  >
                                    Verify OTP
                                  </button>
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {step === "emailAndName" && (
                        <>
                          <div id="emailAndName">
                            <div className="flex  max-w-[410px] h-[100%] ">
                              <div className=" flex   f w-[100%] h-[100%] flex-col ">
                                <h3 className="text-[33px]  font-[700] pt-[10px] pr-[10px] md:pr-0 mx-auto text text-gray-800 font-Montserrat">
                                  {" "}
                                  Enter Your Details
                                </h3>

                                <div className="  !h-[100%]  w-[100%] mt-[40px]">
                                  <div className="relative w-[100%] ">
                                    <div className="flex flex-col gap-[30px] px-[10px] mx-auto w-[100%]">
                                      <div className="input-box12 ">
                                        <input
                                          type="text"
                                          value={name}
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                          className={`font-Roboto h-[40px] !w-[93%] ml-[8px]  pl-[10px] rounded-[0px]`}
                                          required
                                        />
                                        <span
                                          className={`font-Roboto ml-[4px]  font-[500] text-[15px] `}
                                        >
                                          Enter Your Name
                                        </span>
                                      </div>
                                      <div className="input-box12 ">
                                        <input
                                          type="text"
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                          className={`font-Roboto h-[40px] !w-[93%] ml-[8px]  pl-[10px] rounded-[0px]`}
                                          required
                                        />
                                        <span
                                          className={`font-Roboto ml-[4px]  font-[500] text-[15px] `}
                                        >
                                          Enter Your Email
                                        </span>
                                      </div>
                                    </div>
                                    <motion.button
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.95 }}
                                      className=" w-[94%] ml-[5px] md:ml-0 md:w-[100%]"
                                    >
                                      <button
                                        onClick={updateUser}
                                        className={`left-0 right-0 mt-[80px] font-Montserrat mx-auto h-[50px] font-[600] text-[#fff] w-[100%] rounded-[10px] text-[20px] ${name && email
                                          ? " basalt "
                                          : "bg-gray-300 cursor-not-allowed"
                                          }`}
                                        disabled={!name || !email}
                                      >
                                        Register Now
                                      </button>
                                    </motion.button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>
                <div className=" md:w-[650px] absolute whiteform w-[360px] md:flex hidden flex-col  rounded-[10px]  bg-white  h-[420px] 2">
                  <div className=" flex absolute z-[30] bg-[#de1b1b] justify-center w-[30px] h-[30px] items-center text-white">
                    <i class="fa-solid fa-xmark"></i>
                  </div>

                  <motion.div className="flex-1 bg-white !rounded-r-[10px]  overflow-hidden rounded-[10px] h-[420px]">
                    <div className="flex flex-col justify-between h-full   py-[10px] px-[10px] md:px-[20px] md36:max-w-[380px]  !rounded-[10px] md:max-w-[360px] ml-auto mr-[0px]">
                      {step === "number" && (
                        <div className=" flex  h-[100%] flex-col rounded-[10px] ">
                          <h3 className="text-[33px]  font-[700] pt-[10px] text-center text text-gray-800 font-Montserrat">
                            Login / Sign Up
                          </h3>

                          <div className="space-y-2  ml-[10px]   md:px-0 px-[10px] mt-[50px]">
                            <div className="relative ">
                              <div className="input-box12">
                                <input
                                  type="text"
                                  id="phoneNumber"
                                  inputMode="numeric"
                                  value={mobileNumber}
                                  onChange={handleNumberChange}
                                  maxLength={10}
                                  className={`font-Roboto h-[40px] ml-[5px]  !w-[90%] pl-[10px] rounded-[0px]`}
                                  required
                                />
                                <span
                                  className={`font-Roboto ml-[5px] font-[500] text-[15px] `}
                                >
                                  Enter Your Mobile Number
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="flex ml-[10px]  md:px-0 px-[10px]   mt-[137px] mb-[10px] justify-start ">
                            <input
                              type="checkbox"
                              id="terms"
                              className="mr-2"
                              checked={isTermsChecked}
                              style={{
                                width: "18px",
                                borderRadius: " 10px",
                                height: "18px",
                              }}
                              onChange={(e) =>
                                setIsTermsChecked(e.target.checked)
                              }
                            />
                            <label
                              htmlFor="terms"
                              className="font-[500] flex gap-[10px] text-[11px] cursor-pointer text-center"
                            >
                              <span className="text-[#807c7c] font-Montserrat  text-start">
                                By proceeding, I agree to T&C Privacy & Policy &
                                Tariff Notes
                              </span>
                            </label>
                          </div>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`md:w-full w-[90%] py-2.5  ml-[10px] md:ml-0 font-Montserrat font-[600]  p
                           rounded-[7px] text-white text-[19px]  transition-colors ${mobileNumber.length === 10
                                ? " basalt"
                                : "bg-gray-300 cursor-not-allowed"
                              }`}
                            disabled={mobileNumber.length !== 10}
                            onClick={sendOtp}
                          >
                            Continue
                          </motion.button>
                        </div>
                      )}

                      {step === "otp" && (
                        <>
                          <div className="flex  md36:max-w-[390px] md:max-w-[410px] h-[100%] ">
                            <div className=" flex   f w-[100%] h-[100%] flex-col ">
                              <h3 className="text-[33px]  font-[700] pt-[10px]  mx-auto text text-gray-800 font-Montserrat">
                                {" "}
                                Enter OTP
                              </h3>

                              <div className="  !h-[100%]  mt-[40px]">
                                <div className="relative ">
                                  <div className="flex ml-[8px] justify-right gap-[7px]">
                                    {otp.map((value, index) => (
                                      <input
                                        key={index}
                                        type="number"
                                        maxLength="1"
                                        value={value}
                                        onChange={(e) => {
                                          const newValue = e.target.value;
                                          if (/^\d$/.test(newValue)) {
                                            const otpArray = [...otp];
                                            otpArray[index] = newValue;
                                            setOtp(otpArray);

                                            // Move to the next input if available
                                            // const nextInput =
                                            //   document.getElementById(
                                            //     `otp-input-${index + 1}`
                                            //   );
                                            // if (nextInput) {
                                            //   nextInput.focus();
                                            // }
                                          }
                                        }}
                                        onKeyDown={(e) => {
                                          if (e.key === "Backspace") {
                                            const otpArray = [...otp];
                                            otpArray[index] = ""; // Clear the current input
                                            setOtp(otpArray);

                                            // Move to the previous input if available
                                            const prevInput =
                                              document.getElementById(
                                                `otp-input-${index - 1}`
                                              );
                                            if (prevInput) {
                                              prevInput.focus();
                                            }
                                          }
                                        }}
                                        id={`otp-input-${index}`}
                                        className="w-[45px] h-[45px] font-Roboto text-center mx-[1px] justify-between text-[20px] font-[500] border-b-[1.5px] border-[#000]  outline-none"
                                      />
                                    ))}
                                  </div>
                                  <div className="flex text-[#0e2447] ml-[8px]  duration-200 font-Roboto   mt-[10px] font-[400]  text-[13px] ">
                                    {timer > 0 ? (
                                      <p className="  font-Montserrat  w-[210px]">
                                        {" "}
                                        Time remaining: {timer} seconds
                                      </p>
                                    ) : (
                                      <button
                                        onClick={resendOtp}
                                        className="text-[#000000] duration-200  font-Montserrat   font-[400] hover:underline text-[13px]"
                                      >
                                        Resend OTP
                                      </button>
                                    )}
                                  </div>
                                </div>

                                <motion.button
                                  whileHover={{ scale: 1.02 }}
                                  whileTap={{ scale: 0.95 }}
                                  className=" w-[94%] ml-[5px] md:w-[100%]"
                                >
                                  <button
                                    onClick={verifyOtp}
                                    className={`left-0 right-0 mt-[155px] font-Montserrat mx-auto h-[50px] font-[700] text-[#fff] top-[30px] w-[100%] rounded-[10px] text-[20px] ${otp.every((digit) => digit !== "")
                                      ? "basalt"
                                      : "bg-gray-300 cursor-not-allowed"
                                      }`}
                                    disabled={
                                      !otp.every((digit) => digit !== "")
                                    }
                                  >
                                    Verify OTP
                                  </button>
                                </motion.button>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      {step === "emailAndName" && (
                        <>
                          <div id="emailAndName">
                            <div className="flex  max-w-[410px] h-[100%] ">
                              <div className=" flex   f w-[100%] h-[100%] flex-col ">
                                <h3 className="text-[33px]  font-[700] pt-[10px] pr-[10px] md:pr-0 mx-auto text text-gray-800 font-Montserrat">
                                  {" "}
                                  Enter Your Details
                                </h3>

                                <div className="  !h-[100%]  w-[100%] mt-[40px]">
                                  <div className="relative w-[100%] ">
                                    <div className="flex flex-col gap-[30px] px-[10px] mx-auto w-[100%]">
                                      <div className="input-box12 ">
                                        <input
                                          type="text"
                                          value={name}
                                          onChange={(e) =>
                                            setName(e.target.value)
                                          }
                                          className={`font-Roboto h-[40px] !w-[93%] ml-[8px]  pl-[10px] rounded-[0px]`}
                                          required
                                        />
                                        <span
                                          className={`font-Roboto ml-[4px]  font-[500] text-[15px] `}
                                        >
                                          Enter Your Name
                                        </span>
                                      </div>
                                      <div className="input-box12 ">
                                        <input
                                          type="text"
                                          value={email}
                                          onChange={(e) =>
                                            setEmail(e.target.value)
                                          }
                                          className={`font-Roboto h-[40px] !w-[93%] ml-[8px]  pl-[10px] rounded-[0px]`}
                                          required
                                        />
                                        <span
                                          className={`font-Roboto ml-[4px]  font-[500] text-[15px] `}
                                        >
                                          Enter Your Email
                                        </span>
                                      </div>
                                    </div>
                                    <motion.button
                                      whileHover={{ scale: 1.02 }}
                                      whileTap={{ scale: 0.95 }}
                                      className=" w-[94%] ml-[5px] md:ml-0 md:w-[100%]"
                                    >
                                      <button
                                        onClick={updateUser}
                                        className={`left-0 right-0 mt-[120px] font-Montserrat mx-auto h-[50px] font-[600] text-[#fff] w-[100%] rounded-[10px] text-[20px] ${name && email
                                          ? "anime-green-btn"
                                          : "bg-gray-300 cursor-not-allowed"
                                          }`}
                                        disabled={!name || !email}
                                      >
                                        Register Now
                                      </button>
                                    </motion.button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </motion.div>
                </div>

              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </NextUIModal>
    </>
  );
}
