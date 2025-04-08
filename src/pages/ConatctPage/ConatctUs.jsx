// import React, { useState } from 'react'
// import Header from '../../Component/header/Header'

// export default function ConatctUs() {
//   const [formState, setFormState] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   })

//   const handleSubmit = () => {
//     e.preventDefault()
//     // Handle form submission
//     console.log(formState)
//   }
//   return (
//     <>
//       <Header />
//       <div className=' font-Poppins pt-[80px] flex w-[100%]'>
//         <div className="min-h-[700px]  w-[80%] mx-auto p-4 md:p-8">
//           <div className=" mx-auto shadow-xl rounded-[23px] relative">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,minmax(40px,1fr))] grid-rows-[repeat(auto-fill,minmax(40px,1fr))] opacity-[0.15]">
//               {[...Array(100)].map((_, i) => (
//                 <div key={i} className="border-[0.5px] border-slate-900" />
//               ))}
//             </div>

//             <div className="relative bg-white rounded-[2rem] shadow-2xl shadow-slate-200 overflow-hidden">
//               <div className="grid lg:grid-cols-2">
//                 {/* Left Section - Contact Info */}
//                 <div className="relative bg-slate-900 p-8 md:p-12 text-white overflow-hidden">
//                   <div className="absolute inset-0 opacity-50">
//                     {[...Array(20)].map((_, i) => (
//                       <div
//                         key={i}
//                         className="absolute rounded-full bg-gradient-to-br from-indigo-500 to-purple-500"
//                         style={{
//                           width: Math.random() * 200 + 50 + "px",
//                           height: Math.random() * 200 + 50 + "px",
//                           left: Math.random() * 100 + "%",
//                           top: Math.random() * 100 + "%",
//                           transform: "translate(-50%, -50%)",
//                           filter: "blur(40px)",
//                         }}
//                       />
//                     ))}
//                   </div>

//                   <div className="relative">
//                     <h2 className="text-3xl md:text-[42px] font-[500] mb-6">Let's start a conversation</h2>
//                     <p className="text-slate-300 mb-8 text-[15px] max-w-md">
//                       Have a project in mind? Looking to partner or work together? Reach out through the form and I'll get
//                       back to you in the next 24-48 hours.
//                     </p>

//                     <div className="space-y-5">
//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
//                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={1.5}
//                               d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-300">Mail us at</p>
//                           <p className="font-medium">contact@company.com</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
//                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={1.5}
//                               d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                             />
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={1.5}
//                               d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-300">Visit us at</p>
//                           <p className="font-medium">123 Business Avenue, Suite 100</p>
//                         </div>
//                       </div>

//                       <div className="flex items-center space-x-4">
//                         <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
//                           <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={1.5}
//                               d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
//                             />
//                           </svg>
//                         </div>
//                         <div>
//                           <p className="text-sm text-slate-300">Call us at</p>
//                           <p className="font-medium">+1 (555) 000-0000</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Section - Contact Form */}
//                 <div className="p-8 md:p-12">
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="space-y-4">
//                       <label className="block text-sm font-medium text-slate-700">Full Name</label>
//                       <input
//                         type="text"
//                         value={formState.name}
//                         onChange={(e) => setFormState({ ...formState, name: e.target.value })}
//                         className="w-full px-4 h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors duration-200"
//                         placeholder="John Doe"
//                       />
//                     </div>

//                     <div className="space-y-4">
//                       <label className="block text-sm font-medium text-slate-700">Email Address</label>
//                       <input
//                         type="email"
//                         value={formState.email}
//                         onChange={(e) => setFormState({ ...formState, email: e.target.value })}
//                         className="w-full px-4 h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors duration-200"
//                         placeholder="john@example.com"
//                       />
//                     </div>

//                     <div className="space-y-4">
//                       <label className="block text-sm font-medium text-slate-700">Subject</label>
//                       <input
//                         type="text"
//                         value={formState.subject}
//                         onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
//                         className="w-full px-4 h-14 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors duration-200"
//                         placeholder="Project Discussion"
//                       />
//                     </div>

//                     <div className="space-y-4">
//                       <label className="block text-sm font-medium text-slate-700">Message</label>
//                       <textarea
//                         value={formState.message}
//                         onChange={(e) => setFormState({ ...formState, message: e.target.value })}
//                         rows={4}
//                         className="w-full px-4 py-3 rounded-xl border-slate-200 bg-slate-50 focus:bg-white transition-colors duration-200 resize-none"
//                         placeholder="Tell us about your project..."
//                       />
//                     </div>

//                     <button
//                       type="submit"
//                       className="w-full bg-slate-900 text-white h-14 rounded-xl hover:bg-slate-800 
//                            transition-all duration-200 relative overflow-hidden group"
//                     >
//                       <span className="relative z-10">Send Message</span>
//                       <div
//                         className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 
//                                 group-hover:opacity-100 transition-opacity duration-200"
//                       />
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>


//       </div>



//     </>
//   )
// }
import React, { useState } from "react";

import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";
import TheSpotLight from "../../Component/spotlight/TheSpotLight";
import { Review } from "../../Component/review/Review";
import AlertBanner from "../../Component/aboutUsComponent/AlertBanner";


export default function ContactUs() {




  return (
    <>


      <section className=" w-[100%]  ">
        <Header />
        <div className=" 2xl:w-[1300px]   pt-[130px]  w-[100%] h-[100%] mx-auto">
          <div className=" md:w-[80%] relative mb-[30px] mx-auto bg-[] z-[1] flex flex-col  md150:w-[1200px]">

            <form className="w-[100%] ] px-[20px] h-[100%]">
              <div className="w-[100%] mx-auto flex flex-col gap-[20px] md:gap-[40px]">
                <div className="w-[100%] justify-between  flex flex-col gap-[20px] md:flex-row">
                  <div className="md:w-[45%] gap-[40px] flex flex-col">
                    <div className="w-[100%] flex justify-between flex-col ">
                      <p className=" font-[600] basalt-text  leading-[40px]   font-lucida-bright-regular text-[#ffa93a]  text-[30px]">
                        We would love to hear from you.
                      </p>
                      <p className="w-[100%]  text-[15px] md:text-[16px] font-lucida-bright-regular text-[#273338]">
                        Well, hello! We would love to hear from you! For product
                        questions and customer service inquiries, please feel
                        free to drop us an email.
                      </p>
                    </div>
                    <div className="border-[1px] bg-[#fff] shadow-lg py-[15px] px-[18px] rounded-[10px] mt-[17px] md:mt-[23px] gap-[7px] flex flex-col w-[100%]">
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] basalt-text text-[#ffa93a] fa-solid fa-phone-volume"></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular  text-[17px]">
                            Customer care number
                          </p>
                          <p className="w-[100%]  text-[15px]  font-Roboto md:text-[14px] font-[400]font-lucida-bright-regular text-[#646464]">
                            +91 87994 54980
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] basalt-text text-[#ffa93a] fa-solid fa-envelope"></i>
                        <div>
                          <p className="font-[600]  font-lucida-bright-regular text-[17px]">
                            Business inquiry
                          </p>
                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular  text-[#646464]">
                          info@basaltparadise.com
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px] border-b-[1.5px] pb-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] basalt-text text-yellow-500 fa-solid fa-envelope"></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular text-[17px]">
                            Customer care
                          </p>
                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular  text-[#646464]">
                            help@basaltparadise.com
                          </p>
                        </div>
                      </div>
                      <div className="flex  gap-[20px]  pt-[7px] justify-start">
                        <i className=" text-[20px] mt-[5px] basalt-text text-yellow-500 fa-solid fa-location-dot "></i>
                        <div>
                          <p className="font-[600] font-lucida-bright-regular  text-[17px]">
                             Address
                          </p>

                          <p className="w-[100%]  text-[15px] md:text-[14px] font-[400] font-lucida-bright-regular text-[#646464]">
                          Nurpura, On Halol-Vadodara Highway
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Inputs */}
                  <div autoComplete='off' className="md:w-[45%] gap-[20px] border-[#ffa93a] border  bg-[#ffffff] rounded-[10px] shadow-lg p-[20px] md:py-[18px] md:px-[30px] mt-[20px] md:mt-[10px] flex flex-col">
                    <div className="flex w-[100%] justify-between gap-[20px] font-Poppins">
                      <div className="w-[49%] h-[40px]  flex flex-col rounded-[0px] border-b-[1px] border-[#ffa93a]">
                        <input
                          name="name"

                          placeholder="Name"
                          autoComplete="new-name"
                          className="w-[100%] font-lucida-bright-regular outline-none   px-[px] h-[100%] border-none bg-transparent"
                          // value={formData.name}
                          // onChange={handleChange}
                          type="text"
                        />
                        {/* {errors.name && (
                          <p className="text-sm text-red-500">{errors.name}</p>
                        )} */}
                      </div>
                      <div className="w-[49%] h-[40px]   flex flex-col rounded-[0px] border-b-[1px] border-[#ffa93a]">
                        <input
                          name="email"
                          autoComplete='Email'
                          placeholder="Email"
                          className="w-[100%] outline-none font-lucida-bright-regular   h-[100%] border-none bg-transparent"
                          // value={formData.email}
                          // onChange={handleChange}
                          type="text"
                        />
                        {/* {errors.email && (
                          <p className="text-sm text-red-500">{errors.email}</p>
                        )} */}
                      </div>
                    </div>
                    <div className="flex w-[100%] mb-[20px] justify-between gap-[20px] font-Poppins">
                      <div className="w-[49%] h-[40px]   font-lucida-bright-regular  flex flex-col rounded-[0px] border-b-[1px] border-[#ffa93a]">
                        <input
                          name="phone"
                          autoComplete='number'
                          placeholder="Number"
                          className="w-[100%] outline-none font-lucida-bright-regular  h-[100%] border-none bg-transparent"
                          // value={formData.phone}
                          // onChange={handleChange}
                          type="tel"
                          maxLength="10"
                        />

                      </div>
                      <div className="w-[49%] h-[40px] font-lucida-bright-regular   flex flex-col rounded-[0px] border-b-[1px] border-[#ffa93a]">
                        <input
                          name="subject"
                          autoComplete="off"
                          placeholder="Subject"
                          className="w-[100%] outline-none font-lucida-bright-regular h-[100%] border-none bg-transparent"
                          // value={formData.subject}
                          // onChange={handleChange}
                          type="text"
                        />
                        {/* {errors.subject && (
                          <p className="text-sm text-red-500">
                            {errors.subject}
                          </p>
                        )} */}
                      </div>
                    </div>
                    <div className="w-[100%] font-Poppins  border-[#ffa93a] border rounded-[10px] h-[130px] md:h-[160px]">

                      <textarea
                        name="message"
                        autoComplete="off"
                        placeholder="Message"
                        className="w-[100%] h-[100%] font-lucida-bright-regular border-none p-[10px] rounded-[10px] outline-none"
                      // value={formData.message}
                      // onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="flex justify-center basalt text-[#fff] mt-[10px] text-[#000] text-[18px] rounded-[6px] font-lucida-bright-regular  md:mx-0 py-[8px] w-[120px] font-[500] transition-transform duration-200 active:scale-95"

                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>



          </div>

        </div>




      </section>


          <div className=" 2xl:w-[1300px] !bg-[#]  pb-[20px] pt-[40px]   flex flex-col gap-[62px] h-[100%] mx-auto">
              <Review />
              {/* <TheSpotLight /> */}
              <div className=" w-[90%] mx-auto">
                <AlertBanner />
              </div>
              </div>
      <Footer />
    </>
  );
}
