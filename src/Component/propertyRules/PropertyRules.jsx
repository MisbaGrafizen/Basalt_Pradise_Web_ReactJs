import React, { useState, useRef, useEffect } from "react";

export default function PropertyRules() {




    // const [showRulesModal, setShowRulesModal] = useState(   );
    // const [activeTab, setActiveTab] = useState("MUST READ RULES");
  
    // const modalRef = useRef(null);
    // const contentRef = useRef(null);
  
    // // Refs for each section
    // const mustReadRulesRef = useRef(null);
    // const guestProfileRef = useRef(null);
    // const idProofRelatedRef = useRef(null);
    // const smokingRulesRef = useRef(null);
  
    // const tabs = [
    //   { id: "MUST READ RULES", ref: mustReadRulesRef },
    //   { id: "GUEST PROFILE", ref: guestProfileRef },
    //   { id: "ID PROOF RELATED", ref: idProofRelatedRef },
    //   { id: "SMOKING", ref: smokingRulesRef },
    // ];
  
    // const handleTabClick = (tab) => {
    //   setActiveTab(tab);
    //   const tabInfo = tabs.find((t) => t.id === tab);
    //   if (tabInfo?.ref.current && contentRef.current) {
    //     const sectionTop = tabInfo.ref.current.offsetTop;
    //     contentRef.current.scrollTo({
    //       top: sectionTop - 20,
    //       behavior: "smooth",
    //     });
    //   }
    // };
  
    // useEffect(() => {
    //   const handleScroll = () => {
    //     if (!contentRef.current) return;
  
    //     const scrollPosition = contentRef.current.scrollTop + 100;
  
    //     for (const tab of tabs) {
    //       if (!tab.ref.current) continue;
  
    //       const sectionTop = tab.ref.current.offsetTop;
    //       const sectionBottom = sectionTop + tab.ref.current.offsetHeight;
  
    //       if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
    //         setActiveTab(tab.id);
    //         break;
    //       }
    //     }
    //   };
  
    //   const contentElement = contentRef.current;
    //   if (contentElement) {
    //     contentElement.addEventListener("scroll", handleScroll);
    //     return () => contentElement.removeEventListener("scroll", handleScroll);
    //   }
    // }, []);
  
    // const closeModal = () => {
    //   setShowRulesModal(false);
    // };
  
    // useEffect(() => {
    //   const handleClickOutside = (event) => {
    //     if (modalRef.current && !modalRef.current.contains(event.target)) {
    //       closeModal();
    //     }
    //   };
  
    //   if (showRulesModal) {
    //     document.addEventListener("mousedown", handleClickOutside);
    //   }
  
    //   return () => {
    //     document.removeEventListener("mousedown", handleClickOutside);
    //   };
    // }, [showRulesModal]);
  
    // if (!showRulesModal) return null;
  

    
    return (
        <>

            <div className="bg-white rounded-lg w-[90%] mx-auto md:w-[78%]  border p-3 font-Poppins shadow-sm">
                <h2 className="text-[17px] font-[600] text-gray-900">Property Rules</h2>
                <div className="flex text-sm text-gray-700 mt-0.5 mb-4">
                    <span>Check-in: 12 PM</span>
                    <span className="mx-6"><b className=' font-[600]'>Check-out :</b> 10 AM</span>
                </div>

                <div className="border-t border-gray-200 pt-[10px]"></div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div>
                        <div className="flex items-start mb-2">
                            <div className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <div className="flex items-center flex-wrap">
                                    <span className="font-medium text-sm text-gray-800">Couple, Bachelor Rules</span>
                                    <span className="ml-2 text-[9px] flex items-center bg-red-100 text-red-600 px-1.5 pt-[2px] uppercase tracking-wide font-medium rounded">
                                        Couple friendly
                                    </span>
                                </div>
                                <p className="text-[13px] text-gray-600 mt-0.5">Unmarried couples/guests with Local IDs are allowed.</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-2">
                            <div className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-[13px] text-gray-600">Passport and Aadhar are accepted as ID proof(s)</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-start mb-2">
                            <div className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm text-gray-600">Pets are not allowed</p>
                            </div>
                        </div>

                        <div className="flex items-start mb-2">
                            <div className="mt-1.5 mr-2 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0"></div>
                            <div>
                                <p className="text-sm text-gray-600">Outside food is not allowed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 mt-3 pt-3 flex flex-wrap gap-2">
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md">
                        Must Read Rules
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md">
                        Guest Profile
                    </button>
                    <button className="px-3 py-1.5 text-sm font-medium text-gray-800 bg-white border border-gray-200 rounded-md">
                        ID Proof Related
                    </button>
                    <a href="#" className="px-3 py-1.5 text-sm font-medium text-blue-500 hover:underline">
                        Read All Property Rules
                    </a>
                </div>
            </div>



            {/* {showRulesModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50  font-Poppins flex justify-center items-center z-[10000]">
          <div ref={modalRef} className="bg-white rounded-lg w-11/12 max-w-[600px] max-h-[95vh] h-[100%] overflow-hidden shadow-xl">
     
            <div className="p-5 border-b border-gray-200">
              <h2 className="text-xl font-semibold m-0">House Rules & Information</h2>
            </div>


            <div className="flex border-b overflow-x-auto border-gray-200 relative">
              {tabs.map((tab) => (
                <div
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`px-5 py-2 text-[14px] cursor-pointer relative z-10 flex-shrink-0 ${
                    activeTab === tab.id ? "font-[600] text-blue-600 border-b-2 border-blue-600" : "text-gray-700"
                  }`}
                >
                  {tab.id}
                </div>
              ))}
            </div>


            <div ref={contentRef} className="p-5 overflow-y-auto max-h-[calc(90vh-130px)]">
      
              <div ref={mustReadRulesRef}>
                <h3 className="text-[17px] font-[500] mt-0">Must Read Rules</h3>
                <ul className="text-[12px] gap-[4px] pt-[10px] flex-col flex  leading-[15px]">
                  <li className="  ">Passport and Aadhar are accepted as ID proof(s)</li>
                  <li className="  2.5">Pets are not allowed</li>
                  <li className="  2.5">Outside food is not allowed</li>
                </ul>
              </div>


              <div ref={guestProfileRef} className="mt-4">
                <h3 className="text-[17px] font-[500] mt-0">Guest Profile</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="mb-2.5">Unmarried couples allowed</li>
                </ul>
              </div>

              <div ref={idProofRelatedRef} className="mt-4">
                <h3 className="text-[17px] font-[500] mt-0">ID Proof Related</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="">Passport and Aadhar are accepted as ID proof(s)</li>
                  <li className="">Local ids are allowed</li>
                </ul>
              </div>


              <div ref={smokingRulesRef} className="mt-4">
                <h3 className="text-[17px] font-[500] mt-0">Smoking/Alcohol consumption Rules</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="">Alcohol consumption is not allowed within the property premises.</li>
                  <li className="">Smoking within the premises is allowed</li>
                </ul>
              </div>


              <div className="mt-4">
                <h3 className="text-[17px] font-[500] mt-0">Food Arrangement</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="">Non veg food is not allowed</li>
                  <li className="">Outside food is not allowed</li>
                  <li className="">Food delivery service is not available at the property</li>
                  <li className="">In room dining not available</li>
                </ul>
              </div>


              <div className="mt-8">
                <h3 className="text-[17px] font-[500] mt-0">Property Accessibility</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="mb-2.5">
                    This property is accessible to guests who use a wheelchair. Guests are requested to carry their own
                    wheelchair.
                  </li>
                </ul>
              </div>

\
              <div className="mt-8">
                <h3 className="text-[17px] font-[500] mt-0">Pet(s) Related</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="mb-2.5">Pets are not allowed</li>
                  <li className="mb-2.5">There are no pets living on the property</li>
                </ul>
              </div>


              <div className="mt-8">
                <h3 className="text-[17px] font-[500] mt-0">Other Rules</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="mb-2.5">Allows private parties or events</li>
                  <li className="mb-2.5">
                    Guests are requested not to invite outside visitors in the room during their stay.
                  </li>
                </ul>
              </div>


              <div className="mt-8">
                <h3 className="text-[17px] font-[500] mt-0">Child & Extra Bed Policy</h3>
                <ul className="text-[12px] gap-[5px] pt-[10px] flex-col  flex  leading-[15px]">
                  <li className="mb-2.5">
                    An extra bed will be provided to accommodate any child included in the booking for a charge
                    mentioned below.
                  </li>
                  <li className="mb-2.5">
                    INR 1200 will be charged for an extra mattress per child. (To be paid at the property)
                  </li>
                  <li className="mb-2.5">
                    An extra bed will be provided to accommodate any additional guest included in the booking for a
                    charge mentioned below.
                  </li>
                  <li className="mb-2.5">
                    INR 2000 will be charged for an extra mattress per guest. (To be paid at the property)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )} */}
        </>
    )
}
