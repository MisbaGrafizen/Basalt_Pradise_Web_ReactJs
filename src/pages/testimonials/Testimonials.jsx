import React from 'react'
import Header from '../../Component/header/Header'
import vector from "../../../public/review/profile.jpeg";
import image1 from "../../../public/Basalt/B2.jpg";
import image2 from "../../../public/Basalt/B3.jpg";
import image3 from "../../../public/Basalt/B4.jpg";
import image4 from "../../../public/Basalt/B5.jpg";
import Footer from '../../Component/footer/Footer';

export default function Testimonials() {
    const testimonials = [
        {
          id: 1,
          name: "Darshit Mayurkumar Adesara",
          rating: 4.8,
          review:
            "Dear all, thank you for all the services you and your team provided during our stay in Basalt Paradise. The hospitality was beyond expectations!",
          profileImg: vector,
          images: [image4, image3, image2, image1],
        },
        {
          id: 2,
          name: "Rahul Sharma",
          rating: 4.5,
          review:
            "A truly mesmerizing experience at Basalt Paradise! The views, hospitality, and food were just amazing. Highly recommend for a peaceful getaway.",
          profileImg: vector,
          images: [image1, image2, image3, image4],
        },
        {
          id: 3,
          name: "Priya Patel",
          rating: 5.0,
          review:
            "Basalt Paradise is a must-visit! The resort is clean, luxurious, and offers breathtaking views. The staff made us feel at home. 10/10!",
          profileImg: vector,
          images: [image3, image4, image2, image1],
        },
        {
          id: 4,
          name: "Amit Verma",
          rating: 4.9,
          review:
            "Loved everything about Basalt Paradise! The poolside views were stunning and the food was delightful. Will definitely visit again.",
          profileImg: vector,
          images: [image3, image2, image1, image4],
        },
        {
          id: 5,
          name: "Sneha Mehta",
          rating: 4.7,
          review:
            "The perfect place for a family vacation. My kids had a great time, and the service was impeccable. Highly recommended!",
          profileImg: vector,
          images: [image1, image2, image3, image4],
        },
        {
          id: 6,
          name: "Kunal Joshi",
          rating: 4.6,
          review:
            "Basalt Paradise offers a great combination of nature and luxury. The staff was welcoming, and the ambiance was truly relaxing.",
          profileImg: vector,
          images: [image3, image1, image2, image4],
        },
        {
          id: 7,
          name: "Neha Kapoor",
          rating: 4.8,
          review:
            "My honeymoon at Basalt Paradise was magical! The candlelight dinner by the beach was unforgettable. Thank you for the special arrangements!",
          profileImg: vector,
          images: [image2, image3, image4, image4],
        },
        {
          id: 8,
          name: "Vikas Chauhan",
          rating: 4.9,
          review:
            "Stayed here for a week and loved every moment. The rooms were spacious, the staff was polite, and the food was top-notch!",
          profileImg: vector,
          images: [image3, image1, image2, image4],
        },
        {
          id: 9,
          name: "Ananya Rao",
          rating: 5.0,
          review:
            "A hidden gem! Basalt Paradise is the best resort I’ve ever been to. The spa services were rejuvenating. Worth every penny!",
          profileImg: vector,
          images: [image3, image1, image4, image2],
        },
        {
          id: 10,
          name: "Rohan Desai",
          rating: 4.7,
          review:
            "Perfect for a weekend escape. The mountain views and peaceful environment made my trip so relaxing. Looking forward to my next visit!",
          profileImg: vector,
          images: [image1, image2, image3, image4],
        },
      ];
      
    return (
        <>
            <Header />
            <div className="md:w-[80%] w-[95%] md:px-[15px] md:pt-[120px] pt-[120px] pb-[80px] font-Poppins flex mx-auto">
                <div className=' grid gap-[20px] mx-auto grid-cols-1 backdrop:  md:grid-cols-3 '>
                    {/* <div className=" flex w-[357px] md:w-[355px] mr-[10px] h-[100%]  p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px] flex-shrink-0 ">
                        <div className=" flex flex-col gap-[10px]">
                            <div className=" flex   gap-[15px]">
                                <div className=" flex w-[40px] h-[40px]  overflow-hidden rounded-[50%] ">
                                    <img className=" flex w-[100%] h-[100%]" src={vector} />
                                </div>
                                <div className=" flex flex-col gap-[px]">
                                    <p className="   flex text-[#000] leading-5 font-[500] font-Poppins text-[13px] md:text-[16px]">
                                        Darshit Mayurkumar Adesara
                                    </p>
                                    <div className=" flex font-Poppins gap-[5px] ">
                                        <i class="fa-solid mt-[3px] fa-star text-[#1e49cb] text-[15px]"></i>
                                        <p>4.8</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex font-[400] text-[14px] font-Poppins  text-[#202020] text-justify">
                                Dear all thank you for all the services you and your team
                                provide during our stay in ...
                            </div>
                            <div className=" flex gap-[10px] justify-between mt-[5px]">
                                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                                    <img
                                        className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                                        src={image1}
                                    />
                                </div>
                                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                                    <img
                                        className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                                        src={image1}
                                    />
                                </div>
                                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                                    <img
                                        className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                                        src={image1}
                                    />
                                </div>
                                <div className=" flex w-[60px] md:w-[70px] h-[60px] rounded-[10px]">
                                    <img
                                        className=" w-[100%] h-[100%] object-cover rounded-[10px]"
                                        src={image1}
                                    />
                                </div>
                            </div>
                        </div>
                    </div> */}


                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="flex w-[357px] md:w-[355px] h-[100%] p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px] flex-shrink-0"
                        >
                            <div className="flex flex-col gap-[10px]">
                                {/* Profile & Name */}
                                <div className="flex gap-[15px]">
                                    <div className="w-[40px] h-[40px] overflow-hidden rounded-full">
                                        <img
                                            className="w-full h-full object-cover"
                                            src={testimonial.profileImg}
                                            alt="Profile"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-[#000] leading-5 font-[500] text-[13px] md:text-[16px]">
                                            {testimonial.name}
                                        </p>
                                        <div className="flex items-center gap-[5px] text-[#1e49cb] text-[15px]">
                                            <i className="fa-solid fa-star"></i>
                                            <p>{testimonial.rating}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Review */}
                                <div className="text-[14px] text-[#202020] text-justify">
                                    {testimonial.review}
                                </div>

                                {/* Images */}
                                <div className="flex gap-[10px] justify-between mt-[5px]">
                                    {testimonial.images.map((img, index) => (
                                        <div
                                            key={index}
                                            className="w-[60px] md:w-[70px] h-[60px] rounded-[10px]"
                                        >
                                            <img
                                                className="w-full h-full object-cover rounded-[10px]"
                                                src={img}
                                                alt={`Review Image ${index + 1}`}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
<Footer />
        </>
    )
}
