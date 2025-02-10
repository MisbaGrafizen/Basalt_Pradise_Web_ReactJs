import React, { useState } from "react";
import faq from "../../../Public/Basalt Final/B9.jpg";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      question: "What types of accommodations does Basalt Paradise offer?",
      answer:
        "Basalt Paradise offers a variety of luxurious accommodations, including ocean-view suites, private villas, and elegant guest rooms designed for comfort and relaxation.",
    },
    {
      question: "Are there any eco-friendly initiatives at Basalt Paradise?",
      answer:
        "Yes, Basalt Paradise is committed to sustainability, featuring energy-efficient lighting, water conservation practices, and eco-friendly amenities to minimize environmental impact.",
    },
    {
      question: "Does Basalt Paradise have outdoor recreational activities?",
      answer:
        "Yes, guests can enjoy a range of outdoor activities, including private beach access, guided nature trails, water sports, and relaxing poolside experiences.",
    },
    {
      question: "What is the cancellation policy at Basalt Paradise?",
      answer:
        "Our cancellation policy varies based on the type of booking. Standard reservations can be canceled up to 48 hours before arrival, while special packages may have different terms. Please check your booking details for more information.",
    },
    // {
    //     question: 'Does Basalt Paradise offer spa and wellness services?',
    //     answer: 'Yes, our full-service spa offers massages, facials, and wellness treatments to ensure a relaxing and rejuvenating stay. Contact our concierge for appointments.',
    // }
  ];


  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="md:w-[80%] w-[95%]  px-[10px] flex flex-col gap-[30px]  mx-auto">
      <div className="w-[100%] flex flex-col md:gap-[20px]">

        <div className="flex w-[100%] gap-[30px] mt-[20px] flex-col justify-between">
          <div className="w-[100%] flex md:flex-row flex-col justify-between">
            <div className="md:w-[30%]  ">
              <img
                className=" w-[100%] md:h-[300px]  rounded-[10px]  shadow-md"
                src={faq}
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
                    className={`font-[600] flex justify-between  text-[#5a5555] md:items-center m px-[15px] md:py-[14px] py-[10px] text-[15] md:text-[18px] cursor-pointer ${activeIndex === index
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
