import React, { useState } from 'react'
import Header from '../../Component/header/Header'
const buttons = [
  "10 Must-Visit Places Near Basalt Paradise",
  "Travel Tips & Guides",
  "Resort & Hospitality Insights",
  "Guest Blogs",
  "Special Events & Festivities",
  

];
export default function AmentiesPage() {
  const [selectedButton, setSelectedButton] = useState(buttons[0]);




    const handleClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

  return (
    <>

      <div className=' w-[100%]'>
        <Header />


        <div className=' select-none flex  mb-[40px] flex-col gap-[30px]  relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]  '>
          <div className=' md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%]   overflow-x-auto    gap-[10px] '>
            {buttons.map((buttonName) => (
              <button
                key={buttonName}
                onClick={() => handleClick(buttonName)}
                className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px]  flex-shrink-0
                      ${selectedButton === buttonName
                    ? "basalt text-white border-none"
                    : "bg-transparent border-[1.2px] text-[#1e26bd] border-[#1e26bd]"
                  }`}
              >
                {buttonName}
              </button>
            ))}
          </div>
          <div className=' flex w-[100%] gap-[20px] justify-between'>


            <div className=' flex-col gap-[20px]  flex md:w-[74%]'>






{/* 
              {blogdata.map((blog) => (
                <div key={blog.id} className=' flex flex-col gap-[10px] '>
                  <img
                    className='flex w-[100%] h-[240px] md:h-[400px] object-cover rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                    src={blog.image}
                    alt="Blogs"
                  />

                  <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-center  gap-[20px]'>


                    <div className=' flex w-[100%] gap-[10px] flex-col '>


                      <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#7442ff] '>
                        <i className="fa-light fa-calendar-days"></i>
                        <p className=' mt-[2px] flex'>
                          {blog.date}
                        </p>
                      </div>
                      <div className=' text-[17px] flex text-justify  px-[10px] md:w-[85%]'>
                        <p>
                          {blog.description}
                        </p>
                      </div>
                    </div>

                    <div className='flex gap-[10px] cursor-pointer pl-[10px]  text-[#7442ff] w-[150px] items-center  ' onClick={handleblogDetails}>
                      <p className='hover:underline'>
                        Read More
                      </p>
                      <i className="fa-regular fa-arrow-right"></i>
                    </div>
                  </div>
                  <span className=' flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed '>

                  </span>
                </div>
              ))} */}
            </div>

        
          </div>

        </div>
      </div>
    </>
  )
}
