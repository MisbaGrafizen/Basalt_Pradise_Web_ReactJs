import React from 'react'
import blog1 from "../../../public/Basalt/B5.jpg"
import blog2 from "../../../public/Basalt/B6.jpg"
import blog3 from "../../../public/Basalt/B7.jpg"
import Header from '../../Component/header/Header'
import Footer from '../../Component/footer/Footer'
import { useNavigate } from 'react-router-dom'


const blogdata = [
    {
        id: 1,
        date: "02-05-2025",
        image: blog1,
        description: " Lorem ipsum dolor sit amet, cre et dolore magna aliqua.dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ",

    },
    {
        id: 2,
        date: "03-05-2025",
        image: blog2,
        description: " hello ipsum dolor sit amet, cre et dolore magna aliqua.dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ",

    },
    {
        id: 3,
        date: "04-05-2025",
        image: blog3,
        description: " hello ipsum dolor sit amet, cre et dolore magna aliqua.dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat ",

    },
]




export default function Blogs() {
    const navigate = useNavigate()

const handleblogDetails =()=>{
    navigate("/blog-details")
}
    return (
        <>


            <Header />
            <div className=' flex  mb-[40px]  relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]  '>

                <div className=' flex-col gap-[20px]  flex md:w-[74%]'>
                    {blogdata.map((blog) => (
                        <div key={blog.id} className=' flex flex-col gap-[10px] '>
                            <img
                                className='flex w-[100%] h-[240px] md:h-[400px] object-cover rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                                src={blog.image}
                                alt="Blog"
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
                    ))}
                </div>

                <div className=" h-[550px]  right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[17px] rounded-[10px]">
                    <div id="infoProduto ">
                        <div className="blog-sidebar">
                            {/* Search Bar */}
                            <div className="sidebar-search flex justify-between border-[1px] p-[10px] rounded-[8px]">
                                <input
                                    type="text"
                                    className="search-input  outline-none"
                                    name="Search"
                                    placeholder="Search "
                                />
                                <button className="search-btn pr-[10px]" type="submit">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
                                            fill="#fcaf17"
                                        ></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ak-height-50 ak-height-lg-30"></div>

                            {/* Popular Categories */}
                            <div className="sidebar-section px-[10px]">
                                <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                    Popular Categories
                                </h5>
                                <ul className="flex flex-col gap-[4px]">
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">Energy-Efficient Fans</a>
                                    </li>
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">Designe Ceiling Fans</a>
                                    </li>
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">Smart Fans with IoT</a>
                                    </li>
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">Industrial  Fans</a>
                                    </li>
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">Outdoor Fans</a>
                                    </li>
                                    <li className=' items-center flex'>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">High-Speed Fans</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="ak-height-50 ak-height-lg-30"></div>

                            {/* Popular Tags */}
                            <div className="sidebar-section  mt-[20px] px-[10px]">
                                <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                    Popular Tags
                                </h5>
                                <ul className="flex  flex-col gap-[5px]">
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">EnergyEfficient</a>
                                    </li>
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">DesignerFans</a>
                                    </li>
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">SmartFans</a>
                                    </li>
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">IndustrialUse</a>
                                    </li>
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">OutdoorComfort</a>
                                    </li>
                                    <li>
                                        <i className="fa-sharp text-[5px] mr-[10px]  text-[#fcaf17] !mt-[-px] fa-solid fa-circle"></i>
                                        <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="#">HighSpeed</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
}
