import React, { useState } from "react";
import faq from "../../../Public/Basalt/B9.jpg";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What types of rooms are available at Basalt Paradise Resort and Spa?",
      answer:
    " The resort offers two distinct room types designed to cater to various preferences. Detailed descriptions, images, and current availability can be found in accommodation section. Click here",
    },
    {
      question: "Where is Basalt Paradise Resort and Spa located?",
      answer:
        "The resort is situated at Gopipura, Halol, Panchmahals, Gujarat. This location provides convenient access to local attractions, including the Champaner-Pavagadh Archaeological Park.",
    },
    {
      question: "What are the check-in and check-out times at the resort?",
      answer:
        "Standard check-in time is at 12 PM, and check-out is at 10 AM. Early check-ins and late check-outs may be accommodated based on availability; it's advisable to contact the resort directly for special requests.",
    },
    {
      question: "What are some nearby tourist attractions?",
      answer:
        "The resort is in proximity to several attractions, notably the Champaner-Pavagadh Archaeological Park, a UNESCO World Heritage Site renowned for its historical and architectural significance.",
    },
    // {
    //   question: 'Are pets allowed at the resort?',
    //   answer: "For information regarding the resort's pet policy, it's recommended to contact the property directly to confirm whether accommodations can be made for pets.",
    // }
  ];


  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-[80%] w-[95%]  px-[10px] flex flex-col gap-[30px]  mx-auto">
      <div className="w-[100%] flex flex-col md:gap-[10px]">
      <div className="flex flex-col">
          <h1 className="flex font-[600] text-[35px] font-Poppins">
          Frequently Asked <span className="text-[#fcaf17] font-[700] pl-[10px]"> Questions</span>
          </h1>
   
        </div>

        <div className="flex w-[100%] gap-[30px] mt-[20px] flex-col justify-between">
          <div className="w-[100%] flex md:flex-row flex-col justify-between">
            <div className="md:w-[30%]  ">
              <img
                className=" w-[100%] md:h-[300px]  rounded-[10px]  shadow-md"
                src="https://res.cloudinary.com/demjxtyj8/image/upload/v1744006365/anoirryt55vkwffchlfk.jpg"
                alt="FAQ"
              />
            </div>



            <div className="flex flex-col   gap-[20px] md:mt-[0px] mt-[30px] md:w-[65%]">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="font-Redhat rounded-[10px] border-[1.5px] overflow-hidden "
                >
                  <div
                    className={`font-[600] flex justify-between bg-white  text-[#5a5555] md:items-center m px-[15px] md:py-[14px] py-[10px] text-[15] md:text-[18px] cursor-pointer ${activeIndex === index
                        ? "border-b-[1.5px] rounded-b-[14px] "
                        : "  border-b-none"
                      }`}
                    onClick={() => toggleAnswer(index)}
                  >
                    <p className=" text-justify  font-Poppins font-[400]">{faq.question}</p>
                    <i
                      className={`fa-regular  ml-[10px] md:mt-0 mt-[5px] ${activeIndex === index
                          ? "fa-circle-minus rotate"
                          : "fa-circle-plus rotate-reverse"
                        }`}
                    ></i>
                  </div>
                  <div
                    className={`text-[15px]  text-[#646464] w-[90%] font-[500]  ${activeIndex === index
                        ? " px-[15px] py-[10px] max-h-[200px] opacity-100 flex"
                        : "max-h-0 opacity-0  px-[5px] py-[1px] "
                      }`}
                  >
                    <p className=" font-Poppins text-justify  leading-[22px] font-[300]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Inline styles for icon rotation */}
      {/* <style jsx>{`
          .rotate {
            transform: rotate(180deg);
            transition: transform 0.7s ease-out;
          }
          .rotate-reverse {
            transform: rotate(0deg);
            transition: transform 0.7s ease-out;
          }
          .fa-circle-plus,
          .fa-circle-minus {
            transition: transform 0.7s ease-out;
          }
        `}</style> */}
    </div>
  );
}
