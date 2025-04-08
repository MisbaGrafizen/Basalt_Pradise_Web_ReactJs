import React from 'react'
import Header from '../../Component/header/Header'
import vector from "../../../public/review/profile.jpeg";
import maleVector from "../../../public/review/manVector.avif";
import femaleVector from "../../../public/review/female.avif";


import image1 from "../../../public/Basalt/B2.jpg";
import image2 from "../../../public/Basalt/B3.jpg";
import image3 from "../../../public/Basalt/B4.jpg";
import image4 from "../../../public/Basalt/B5.jpg";
import Footer from '../../Component/footer/Footer';

import desai1 from "../../../public/desai/unnamed.jpg"
import desai2 from "../../../public/desai/unnamed1.jpg"
import desai3 from "../../../public/desai/unnamed2.jpg"
import desai4 from "../../../public/desai/unnamed3.jpg"

import chuan1 from "../../../public/chuanSimran/image1.jpg"
import chuan2 from "../../../public/chuanSimran/image2.jpg"
import chuan3 from "../../../public/chuanSimran/image3.jpg"
import chuan4 from "../../../public/chuanSimran/image4.jpg"


import pintu1 from "../../../public/pintu/image1.jpg"
import pintu2 from "../../../public/pintu/image2.jpg"

import kena1 from "../../../public/kena/image1.jpg"
import gourav from "../../../public/gaurav/image1.jpg"

import geet from "../../../public/geet/image1.jpg"
import geet1 from "../../../public/geet/image2.jpg"
import geet2 from "../../../public/geet/image3.jpg"

import urmila from "../../../public/urmila/image1.jpg"
import urmila1 from "../../../public/urmila/image2.jpg"

import dhruvi from "../../../public/dhruvi/image1.jpg"
import dhruvi1 from "../../../public/dhruvi/image2.jpg"
import dhruvi2 from "../../../public/dhruvi/image3.jpg"
import dhruvi3 from "../../../public/dhruvi/image4.jpg"


import brush from "../../../public/brush/image1.jpg"
import brush1 from "../../../public/brush/image2.jpg"
import brush2 from "../../../public/brush/image3.jpg"
import brush3 from "../../../public/brush/image4.jpg"


import kanpil1 from "../../../public/pankil/image1.jpg"
import kanpil2 from "../../../public/pankil/image2.jpg"
import kanpil3 from "../../../public/pankil/image3.jpg"
import kanpil4 from "../../../public/pankil/image4.jpg"


import thakkar from "../../../public/thakkar/image1.jpg"
import thakkar2 from "../../../public/thakkar/image2.jpg"
import thakkar3 from "../../../public/thakkar/image3.jpg"
import thakkar4 from "../../../public/thakkar/image4.jpg"

import kiran from "../../../public/kiran/image1.jpg"
import kiran1 from "../../../public/kiran/image2.jpg"
import kiran3 from "../../../public/kiran/image3.jpg"
import kiran4 from "../../../public/kiran/image4.jpg"

import my1 from "../../../public/mydoyal/image1.jpg"
import my2 from "../../../public/mydoyal/image2.jpg"
import my3 from "../../../public/mydoyal/image3.jpg"
import my4 from "../../../public/mydoyal/image4.jpg"

import kisahn1 from "../../../public/kisahan/image1.jpg"
import kisahn2 from "../../../public/kisahan/image2.jpg"
import kisahn3 from "../../../public/kisahan/image3.jpg"
import kisahn4 from "../../../public/kisahan/image4.jpg"


import kuntal from "../../../public/kuntalParmer/image1.jpg"
import kuntal1 from "../../../public/kuntalParmer/image2.jpg"
import kuntal2 from "../../../public/kuntalParmer/image3.jpg"
import kuntal3 from "../../../public/kuntalParmer/image4.jpg"

import nikitha from "../../../public/Nikitha/image1.jpg"
import nikitha1 from "../../../public/Nikitha/image2.jpg"

import pankhi from "../../../public/pankhipathak/image1.jpg"
import pankhi1 from "../../../public/pankhipathak/image2.jpg"


import kudan from "../../../public/kudan/image1.jpg"
import kudan1 from "../../../public/kudan/image1.jpg"
import kudan2 from "../../../public/kudan/image3.jpg"


import priyanka1 from "../../../public/all-testimonals/image1.jpg"
import priyanka2 from "../../../public/all-testimonals/image2.jpg"
import priyanka3 from "../../../public/all-testimonals/image3.jpg"
import priyanka4 from "../../../public/all-testimonals/image4.jpg"


import Miyani1 from "../../../public/all-testimonals/Miyani/image1.jpg"
import Miyani2 from "../../../public/all-testimonals/Miyani/image2.jpg"

import Shreya from "../../../public/all-testimonals/shreya/image1.jpg"
import shreya1 from "../../../public/all-testimonals/shreya/image2.jpg"


export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Prinkesh Desai",
      rating: 5.0,
      review:
        " The location basat Paradise is an exceptional destination with incredible service, beautiful surroundings, and top-notch amenities.",
      profileImg: maleVector,
      images: [desai1, desai2, desai3, desai4],
    },
    {
      id: 2,
      name: "Chauhan Simran",
      rating: 5.0,
      review:
        "The basalt paradise in near halol is an absolute gem that exceeded all my expectations. From the moment I arrived ...",
      profileImg: maleVector,
      images: [chuan1, chuan2, chuan3, chuan4],
    },
    {
      id: 10,
      name: "Pintu Raval",
      rating: 5.0,
      review:
        "The resort and villa basalt paradise in near pavagadh s a top-tier resort that offers a perfect blend of luxury and comfort...",
      profileImg: maleVector,
      images: [pintu1, pintu2,],
    },
    {
      id: 7,
      name: "Urmila jayanti",
      rating: 5,
      review:
        "I have had great experience while our stay . The food and ambience is amazing . Would love to come here again .",
      profileImg: femaleVector,
      images: [urmila, urmila1,],
    },
    {
      id: 4,
      name: "Dhruvi Chowdhary",
      rating: 5,
      review:
        "I’ve had the best experience over here, i went with my family and had such a great time overall. The villa, scenic views, food and  ...",
      profileImg: femaleVector,
      images: [dhruvi, dhruvi1, dhruvi2, dhruvi3],
    },
    {
      id: 5,
      name: "Brush21 Kalgi Shah",
      rating: 5.0,
      review:
        "I recently stayed at Basalt Paradise Resort, and it was truly an unforgettable experience! The serene location near Pavagadh ...",
      profileImg: femaleVector,
      images: [brush, brush1, brush2, brush3],
    },
    {
      id: 6,
      name: "PANKIL KAPADIA",
      rating: 5,
      review:
        "Nice spacious & luxurious villa rooms, well furnished, big and cozy king size beds, well maintained rooms, lobby and ...",
      profileImg: maleVector,
      images: [kanpil1, kanpil2, kanpil3, kanpil4],
    },
    {
      id: 7,
      name: "Pathik thakkar",
      rating: 5.0,
      review:
        "Nice spacious & luxurious villa rooms, well furnished, big and cozy king size beds, well maintained rooms, lobby and ...",
      profileImg: maleVector,
      images: [thakkar, thakkar2, thakkar3, thakkar4],
    },

    {
      id: 8,
      name: "Kiran Gupta",
      rating: 4.7,
      review:
        "It was amazing experience nice place for staycation, quality food with beautiful views and services...d",
      profileImg: maleVector,
      images: [kiran, kiran1, kiran3, kiran4],
    },
    {
      id: 9,
      name: "My experience diaries",
      rating: 5,
      review:
        "Nice spacious & luxurious villa rooms, well furnished, big and cozy king size beds, well maintained rooms, lobby and ...",
      profileImg: femaleVector,
      images: [my1, my2, my3, my4],
    },
    {
      id: 12,
      name: "Kena Patel",
      rating: 5,
      review:
        "Had an amazing stay at Basalt Paradise Resort! The private pool villas were stunning, the food was fantastic, and the discotheque added ...",
      profileImg: femaleVector,
      images: [kena1,],
    },
    {
      id: 5,
      name: "Gaurav Mehta",
      rating: 5,
      review:
        "We have opted for Villa. Stay was luxurious and comfortable. Food was amazing. Really Enjoyed with my family. Staff is polite and well mannered...",
      profileImg: maleVector,
      images: [gourav],
    },
    {
      id: 6,
      name: "Geet D",
      rating: 4.0,
      review:
        " A well maintained property for a tranquil getaway with friends, your partner, or with family. There's something for everyone, including a pool...",
      profileImg: maleVector,
      images: [geet, geet1, geet2,],
    },
    {
      id: 14,
      name: "Kishan Motiyani",
      rating: 5.0,
      review:
        "Very clean and clam place with a great view.Great family staycation place. Staff is very cooperative and food is also good, Great ...",
      profileImg: maleVector,
      images: [kisahn1, kisahn2, kisahn3, kisahn4],
    },
    {
      id: 15,
      name: "  Kuntal Parmar",
      rating: 5.0,
      review:
        "Basalt Paradise near Pavagadh Hills is the perfect destination for a luxurious and peaceful retreat.The private pool villas are impeccably designed .",
      profileImg: maleVector,
      images: [kuntal, kuntal1, kuntal2, kuntal3],
    },
    {
      id: 16,
      name: "Nikita Parikh",
      rating: 5.0,
      review:
        "I recently stayed at Basalt Resort, and it was fantastic. The resort features beautiful grounds, excellent service, and spacious rooms with stunning views. ",
      profileImg: femaleVector,
      images: [nikitha, nikitha1,],
    },
    {
      id: 17,
      name: "Pankti Pathak",
      rating: 5.0,
      review:
        "Our stay at Basalt Paradise was truly exceptional. We stayed in a 2BHK Private Pool Villa that offered the perfect blend of comfort and luxury.",
      profileImg: femaleVector,
      images: [pankhi, pankhi1],
    },
    {
      id: 18,
      name: "Kundan Joshi",
      rating: 5.0,
      review:
        "Nice food, wonderful, stay. highly recommended the people please visit basalt resort .",
      profileImg: maleVector,
      images: [kudan, kudan1, kudan2],
    },

    {
      id: 19,
      name: "Priyankka Dadwal",
      rating: 5.0,
      review:
        "You can immerse yourself in nature's scenic beauty at Basalt Paradise Resort in Vadodara, near Pavagadh Hill.From lush gardens and serene ponds to charmingrooms surrounded ..",
      profileImg: femaleVector,
      images: [priyanka1, priyanka2, priyanka3, priyanka4],
    },

    {
      id: 20,
      name: "Miyani Yogesh",
      rating: 5.0,
      review:
        "7 start likes stays and ambient All indoor and outdoor amenities and sports well maintained and working ,Super tasty food. Very supportive staff.",
      profileImg: femaleVector,
      images: [Miyani1, Miyani2],
    },

    {
      id: 21,
      name: "Shreya Thakkar",
      rating: 5.0,
      review:
        "Our stay at Basalt Paradise Resort was truly unforgettable! The villa was incredibly spacious and featured an indoor swimming pool,which added a luxurious ouch to our...",
      profileImg: femaleVector,
      images: [Shreya, shreya1],
    },

  ];



  return (
    <>
      <Header />
      <div className="md:w-[80%] flex-col gap-[30px] w-[90%] md:px-[15px] md:pt-[110px] pt-[120px] pb-[80px] font-Poppins flex mx-auto">
        <div className="flex flex-col">
          <h1 className="flex font-[700] text-[35px] font-Poppins">
            Guest <span className="text-[#fcaf17]  pl-[10px]">Reviews</span>
          </h1>

        </div>
        <div className=' grid gap-[20px] mx-auto justify-between grid-cols-1 backdrop:  md:grid-cols-3 '>
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
              className="flex w-[357px] md:w-[355px] justify-between h-[100%] p-[15px] border-[1.5px] shadow-sm border-[#e3e2e2fc] rounded-[10px] flex-shrink-0"
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
                <div className="flex gap-[15px]   mt-[5px]">
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
