// import React, { useState } from 'react'
import { Star, ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
// import stars from "../../../public/staffhand/stars1.png";


// import b3 from "../../../public/Basalt/B3.jpg"
// import b1 from "../../../public/Basalt/B1.jpg"
// import b4 from "../../../public/Basalt/B4.jpg"
// import b5 from "../../../public/Basalt/B5.jpg"
// import b6 from "../../../public/Basalt/B6.jpg"
// import b7 from "../../../public/Basalt/B7.jpg"

// import b8 from "../../../public/Basalt/B8.jpg"
// import b9 from "../../../public/Basalt/B9.jpg"
// import b10 from "../../../public/Basalt/B10.jpg"
// import b11 from "../../../public/Basalt/B11.jpg"
// import b12 from "../../../public/Basalt/B12.jpg"
// import b13 from "../../../public/Basalt/B13.jpg"






// export default function Gallery() {
//     const memories = [
//         {
//             id: 1,
//             src: b9,
//             alt: "Santorini, Greece - Stunning white buildings and blue sea",
//             size: "main",
//         },
//         // { 
//         //     id: 2,
//         //     src:b1,
//         //     alt: "Eiffel Tower, France - Paris at sunset",
//         //     size: "medium",
//         // },
//         // {
//         //     id: 3,
//         //     src: b4 ,
//         //     alt: "Kyoto, Japan - Traditional red Torii gates",
//         //     size: "tall",
//         // },
//         // {
//         //     id: 4,
//         //     src: b5 ,
//         //     alt: "Great Wall of China - Historical landmark",
//         //     size: "tall",
//         // },
//         // {
//         //     id: 5,
//         //     src:b6,
//         //     alt: "Venice, Italy - Beautiful canals and gondolas",
//         //     size: "tall",
//         // },
//         // {
//         //     id: 6,
//         //     src: b7,
//         //     alt: "Machu Picchu, Peru - Ancient Incan city",
//         //     size: "large",
//         // },
//         // {
//         //   id: 7,
//         //   src: "https://images.pexels.com/photos/164046/pexels-photo-164046.jpeg",
//         //   alt: "Sydney, Australia - Opera House view",
//         //   size: "small",
//         // },
//         {
//             id: 8,
//             src: b5,
//             alt: "Dubai, UAE - Modern skyscrapers",
//             size: "main2",
//         },
//         // {
//         //     id: 9,
//         //     src: b9,
//         //     alt: "New York City, USA - Times Square lights",
//         //     size: "meduim",
//         // },
//         // {
//         //     id: 10,
//         //     src: b10,
//         //     alt: "Rio de Janeiro, Brazil - Christ the Redeemer",
//         //     size: "small",
//         // },
//         // {
//         //     id: 11,
//         //     src: b11,
//         //     alt: "Great Wall of China - Historical landmark",
//         //     size: "medium",
//         // },
//         // {
//         //     id: 12,
//         //     src: b12,
//         //     alt: "Great Wall of China - Historical landmark",
//         //     size: "my",
//         // },

//     ];






//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(null);

//     // Open the lightbox at a specific image
//     const openLightbox = (index) => {
//         setCurrentIndex(index);
//         setIsOpen(true);
//     };

//     // Close the lightbox
//     const closeLightbox = () => {
//         setIsOpen(false);
//         setCurrentIndex(null);
//     };

//     // Go to previous image
//     const prevImage = () => {
//         setCurrentIndex((prev) => {
//             // Wrap around to last image if at first image
//             return prev === 0 ? memories.length - 1 : prev - 1;
//         });
//     };

//     // Go to next image
//     const nextImage = () => {
//         setCurrentIndex((prev) => {
//             // Wrap around to first image if at last image
//             return prev === memories.length - 1 ? 0 : prev + 1;
//         });
//     };


//     return (
//         <>
//             <section className='  md:w-[85%] px-[40px] relative  flex-col font-Poppins  md:overflow-visible overflow-x-hidden   gap-[30px] w-[90%] flex mx-auto   2xl:w-[1390px]'>

//                 <h1 className=" flex text-[23px]  px-[10px] font-Poppins ">
//                     Actual
//                     <span
//                         style={{
//                             color: "#ffc02d",
//                             textShadow: "0 2px 4px rgba(224, 224, 222, 0.4)",
//                         }}
//                         className="  text-[#fcaf17] drop-shadow-2xl [text-shadow:_0_2px_4px_rgb(196, 196, 196)]  flex font-[600] px-[6px] font-Poppins"
//                     >
//                         Paradise
//                     </span>
//                     <img className=" w-[30px]" src={stars} />
//                 </h1>

//                 <div className=' flex w-[45px] items-center left-[17px]  border-[#3b22ff] !bg-white  z-[60] justify-center border-[1.2px] rounded-[50%]  top-[50%]  h-[45px]  absolute  '>
//                     <i className="fa-regular  text-[20px] basalt-text fa-chevron-left"></i>
//                 </div>
//                 <div className=' flex w-[45px] items-center right-[17px] border-[#3b22ff] bg-white  z-[60] justify-center border-[1.2px] rounded-[50%]  top-[50%]  h-[45px]  absolute  '>
//                     <i className="fa-regular  text-[20px]  basalt-text fa-chevron-right"></i>
//                 </div>

//                 <div className=' flex w-[100%] overflow-x-auto gap-[14px]  h-[340px] '>
//                     <img
//                         src={b9}

//                         className=" w-[700px] object-cover rounded-[8px] h-[100%]"
//                     />
//                     <img
//                         src={b5}

//                         className=" w-[390px] object-cover rounded-[8px] h-[100%]"
//                     />
//                     <img
//                         src={b13}

//                         className=" w-[490px] object-cover rounded-[8px] h-[100%]"
//                     />
//                     <img
//                         src={b11}

//                         className=" w-[430px] object-cover rounded-[8px] h-[100%]"
//                     />
//                     <img
//                         src={b12}

//                         className=" w-[490px] object-cover rounded-[8px] h-[100%]"
//                     />
//                     <div className=' flex items-center ml-[20px]  h-[100%]'>
//                         <div className=' basalt flex w-[2px]  items-center h-[60%]'>

//                         </div>
//                         <div className=' flex  justify-center font-Poppins hover:underline-offset-3  cursor-pointer hover:underline  w-[120px] font-[500] items-center basalt-text  gap-[10px]  '>
//                             View All <i className="fa-regular fa-arrow-right"></i>
//                         </div>
//                     </div>
//                 </div>

//                 {/* 
//                 <section className="travel-memories">
//                     <div className="memories-grid">
//                         {memories.map((memory, i) => (
//                             <div
//                                 key={memory.id}
//                                 className={`memory-item ${memory.size}`}
//                                 onClick={() => openLightbox(i)}
//                             >
//                                 <img
//                                     src={memory.src}
//                                     alt={memory.alt}
//                                     className="memory-image"
//                                 />
//                             </div>
//                         ))}
//                     </div>


//                     <style jsx>{`
//         .travel-memories {
//           height: 80vh;
//           padding: 10px;
//           box-sizing: border-box;
//         }
//         .memories-grid {
//           display: flex;
//           grid-template-columns: repeat(6, 1fr);
//           grid-auto-rows: 1fr;
//           grid-auto-flow: dense;
//           gap: 8px;
//           height: 100%;
//           width: 100%;
//         }
//         .memory-item {
//           position: relative;
//           overflow: hidden;
//           border-radius: 8px;
//         }
//         .memory-image {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           border-radius: 8px;
//         }


//         .small {
//           grid-column: span 1;
//           grid-row: span 1;
//         }
//         .medium {
//           grid-column: span 2;
//           grid-row: span 2;
//         }
//         .wide {
//           grid-column: span 3;
//           grid-row: span 1;
//         }
//         .tall {
//           grid-column: span 1;
//           grid-row: span 3;
//         }
//         .large {
//           grid-column: span 3;
//           grid-row: span 3;
//         }
//         .my {
//                  grid-column: span 1;
//           grid-row: span 2;
//         }

//       .main {
//                 grid-column: span 4;
//       height:340px;
//       }

//       .main2 {
//                 grid-column: span 2;
//       height:340px;
//       }

//         @media (max-width: 1024px) {
//           .memories-grid {
//             grid-template-columns: repeat(4, 1fr);
//           }
//           .wide, .large {
//             grid-column: span 2;
//           }
//         }
//         @media (max-width: 768px) {
//           .memories-grid {
//             grid-template-columns: repeat(3, 1fr);
//           }
//           .wide {
//             grid-column: span 2;
//           }
//           .large {
//             grid-column: span 3;
//           }
//         }
//         @media (max-width: 480px) {
//           .memories-grid {
//             grid-template-columns: repeat(2, 1fr);
//           }
//           .wide, .large {
//             grid-column: span 2;
//             grid-row: span 2;
//             height:120px;
//           }
//           .tall {
//             grid-column: span 1;
//             grid-row: span 2;
//                height:120px;
//           }
//           .medium{
//           height:120px;
//           }
//         }
//       `}</style>
//                 </section> */}


// {isOpen && currentIndex !== null && (
//     <div className="fixed inset-0 z-[7000] hidden md:flex items-center justify-center bg-black/80 p-4">
//         {/* Close Button */}
//         <button
//             className="absolute top-5 right-5 text-white hover:text-gray-300"
//             onClick={closeLightbox}
//         >
//             <X className="w-6 h-6" />
//         </button>

//         {/* Prev Button */}
//         <button
//             className="absolute left-5 text-white hover:text-gray-300"
//             onClick={prevImage}
//         >
//             <ChevronLeft className="w-8 h-8" />
//         </button>

//         {/* Next Button */}
//         <button
//             className="absolute right-5 text-white hover:text-gray-300"
//             onClick={nextImage}
//         >
//             <ChevronRight className="w-8 h-8" />
//         </button>

//         {/* Fullscreen Image */}
//         <img
//             src={memories[currentIndex].src}
//             alt={memories[currentIndex].alt}
//             className="max-h-full max-w-full object-contain"
//         />
//     </div>
// )}
//             </section>

//         </>
//     )
// }
import React, { useState, useRef, useEffect } from 'react';
// import {  ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react";
import stars from "../../../public/staffhand/stars1.png";
import b5 from "../../../public/Basalt/B5.jpg";
// import b9 from "https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840373/odsq0dpiz2usacvwrnak.jpg";
import b11 from "../../../public/Basalt/B11.jpg";
import b12 from "../../../public/Basalt/B12.jpg";
import b13 from "../../../public/Basalt/B13.jpg";
import { useNavigate } from "react-router-dom";

export default function Gallery() {
    const scrollRef = useRef(null);
    const [showLeftArrow, setShowLeftArrow] = useState(false);
    const [showRightArrow, setShowRightArrow] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const navigate = useNavigate()
    const images = [
        { src: "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818029/B5_ohq2xp.jpg", width: "700px" },
        { src: "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818028/B1_wa3352.jpg", width: "390px" },
        { src: "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818034/B13_z3wlof.jpg", width: "490px" },
        { src: "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818081/B8_qwdomx.jpg", width: "430px" },
        { src: "https://res.cloudinary.com/dtqzhmivb/image/upload/v1745818029/B3_lu2wbv.jpg", width: "510px" }
    ];

    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (scrollRef.current) {
    //             const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    //             setShowLeftArrow(scrollLeft > 0);
    //             setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
    //         }
    //     };

    //     const scrollElement = scrollRef.current;
    //     if (scrollElement) {
    //         scrollElement.addEventListener('scroll', handleScroll);
    //         handleScroll();
    //     }

    //     return () => {
    //         if (scrollElement) {
    //             scrollElement.removeEventListener('scroll', handleScroll);
    //         }
    //     };
    // }, []);
    useEffect(() => {
        const handleScroll = () => {
            if (scrollRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
                setShowLeftArrow(scrollLeft > 0);
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1); // Adding -1 to handle precision errors
            }
        };

        const scrollElement = scrollRef.current;
        if (scrollElement) {
            scrollElement.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }

        return () => {
            if (scrollElement) {
                scrollElement.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };


    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleNavigate = () => {

        navigate("/gallery")
    }

    return (
        <section className='  md:w-[85%] md:px-[40px] px-[35px] relative  flex-col font-Poppins  md:overflow-visible overflow-x-hidden   gap-[10px] md:gap-[30px] w-[100%] flex mx-auto   2xl:w-[1300px]'>
            <h1 className="flex text-[30px] font-Poppins">
                Actual
                <span className="text-[#fcaf17] font-[600] px-[6px]">
                    Paradise
                </span>
                <img className="w-[30px]" src={stars} alt="stars" />
            </h1>

            {showLeftArrow && (
                <button
                    className='absolute left-[14px] top-[52%] z-[10] bg-white border-[1.2px] border-[#3b22ff] rounded-[50%] w-[45px] h-[45px] flex items-center justify-center'
                    onClick={() => scroll('left')}
                >
                    <ChevronLeft className="text-[#3b22ff] w-6 h-6" />
                </button>
            )}

            {showRightArrow && (
                <button
                    className='absolute right-[14px] top-[48%] md:top-[52%] z-[10] bg-white border-[1.2px] border-[#3b22ff] rounded-[50%] w-[45px] h-[45px] flex items-center justify-center'
                    onClick={() => scroll('right')}
                >
                    <ChevronRight className="text-[#3b22ff] w-6 h-6" />
                </button>
            )}

            <div ref={scrollRef} className='flex w-full overflow-x-auto gap-[14px] h-[340px] scroll-smooth no-scrollbar'>
                {images.map((image, index) => (
                    <img key={index} src={image.src} className={`object-cover rounded-[8px] h-[100%] cursor-pointer`} style={{ width: image.width }} alt={`Gallery ${index + 1}`} onClick={() => openLightbox(index)} />
                ))}
                <div className=' flex items-center ml-[20px]  h-[100%]'>
                    <div className=' basalt flex w-[2px]  items-center h-[60%]'>

                    </div>
                    <div className=' flex  justify-center font-Poppins hover:underline-offset-3  cursor-pointer hover:underline  w-[120px] font-[500] items-center basalt-text  gap-[10px]  ' onClick={handleNavigate}>
                        View All <i className="fa-regular fa-arrow-right"></i>
                    </div>
                </div>


            </div>

            {isOpen && currentIndex !== null && (
                <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
                    <button className="absolute top-5 right-5 text-white hover:text-gray-300" onClick={closeLightbox}>
                        <X className="w-6 h-6" />
                    </button>
                    <button className="absolute left-5 text-white hover:text-gray-300" onClick={prevImage}>
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button className="absolute right-5 text-white hover:text-gray-300" onClick={nextImage}>
                        <ChevronRight className="w-8 h-8" />
                    </button>
                    <img src={images[currentIndex].src} alt={`Gallery ${currentIndex + 1}`} className="max-h-full max-w-full rounded-md object-contain" />
                </div>
            )}
            <div className=" pt-[20px]">

                <button className=" flex font-[500]  gap-[10px]  px-[13px] rounded-[6px] text-[#fff] basalt w-fit h-[45px] items-center justify-center" onClick={handleNavigate}>
                    View Gallery <i className="fa-regular fa-arrow-right"></i>
                </button>

            </div>

        </section>
    );
}