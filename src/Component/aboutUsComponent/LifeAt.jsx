// import React from "react";
// import image1 from "../../../public/Basalt Final/B5.jpg";
// import logo from "../../../public/logo.png";

// export default function LifeAt() {
//   return (
//     <>
//       <div className="w-[100%] px-[10px] font-Poppins flex mx-auto">
//         <div className="flex  flex-col  gap-[30px] justify-between relative w-[100%]">
//           <div className=" flex  justify-between  items-center w-[100%]  ">
//             <div>
//               <h1 className=" text-[43px]  gap-[17px] flex font-Montserrat font-[600]">
//                 Life At{" "}
//                 <span className=" flex basalt-text1">Basalt Pradise</span>
//               </h1>
//               <h2 className=" flex   text-[20px] font-[500] ">
//                 A Whirlwind of Excitement, Discovery, Innovation, & Limitless
//                 Growth!
//               </h2>
//             </div>
//             <button className=" flex w-[180px] basalt-button h-[50px]  font-Poppins text-[14px]  text-[#fff] rounded-[6px] font-[500] justify-center items-center">
//               Yes , We are Hiringe!
//             </button>
//           </div>

//           <div className="border border-gray-200 flex flex-col gap-[30px] rounded-lg overflow-hidden">
//             {/* Orange top border */}
//             <div className="h-[7px] bg-orange-500"></div>

//             {/* Profile header */}
//             <div className=" flex  justify-center items-center gap-3">
//               <div>
//                 <img className=" w-[150px] flex object-cover " src={logo} />
//               </div>
//               <div>
//                 <h2 className="font-bold text-[23px] text-gray-900">
//                   LIFE AT BASALT_PARADISE
//                 </h2>
//                 <p className="text-gray-600 text-sm">life_at_Bbasalt_pradise</p>
//               </div>
//             </div>

//             {/* Image grid */}
//             <div className="flex gap-[20px] w-[95%]  mx-auto  overflow-x-auto pb-[30px]  ">
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//               <img
//                 className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
//                 src={image1}
//               />
//             </div>

//             {/* Navigation arrow */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import image1 from "../../../public/Basalt Final/B5.jpg";
import logo from "../../../public/logo.png";
import Celebration from "./Celebration";

export default function LifeAt() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/me/media?fields=id,caption,media_url,thumbnail_url&access_token=YOUR_ACCESS_TOKEN`
        );
        const data = await response.json();
        setPosts(data.data || []);
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, []);

  return (
    <>
      <div className="w-[100%] md:px-[10px] font-Poppins flex mx-auto">
        <div className="flex  flex-col  gap-[30px] justify-between relative w-[100%]">
          <div className=" flex   flex-col md:flex-row justify-between  items-center w-[100%]  ">
            <div className="  flex flex-col gap-[10px] w-[100%]">
              <h1 className=" md:text-[47px] text-center   w-fit mx-auto md:mx-0 text-[26px] gap-[17px] flex  font-Poppins font-[700]">
                Life At{" "}
                <span className=" flex basalt-text1">Basalt Pradise</span>
              </h1>
              <h2 className=" flex  md:text-start text-center  md:text-[20px] text-[#515151] font-[500] ">
                A Whirlwind of Excitement, Discovery, Innovation, & Limitless
                Growth!
              </h2>
            </div>
            <button className=" flex w-[160px] basalt-button h-[45px] mt-[20px]  font-Poppins text-[13px]  text-[#fff] rounded-[6px] font-[500] justify-center items-center">
              Yes , We are Hiring!
            </button>
          </div>
          <Celebration />
          <div className="w-[80%] mb-[25px]  mt-px] mx-auto h-[1px] bg-gradient-to-r from-transparent via-[#d8d8d8] to-transparent"></div>
          <div className="border border-gray-200 flex flex-col gap-[30px] rounded-lg overflow-hidden">
            {/* Orange top border */}
            <div className="h-[7px] bg-orange-500"></div>

            {/* Profile header */}
            <div className=" flex  justify-center items-center gap-3">
              <div>
                <img className=" w-[150px] flex object-cover " src={logo} />
              </div>
              <div>
                <h2 className="font-bold text-[23px] text-gray-900">
                  LIFE AT BASALT_PARADISE
                </h2>
                <p className="text-gray-600 text-sm">life_at_Bbasalt_pradise</p>
              </div>
            </div>

            {/* Image grid */}
            <div className="flex gap-[20px] w-[95%]  mx-auto  overflow-x-auto pb-[30px]  ">
              {/* <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              />
              <img
                className=" flex h-[300px]   rounded-[5px]  w-[270px] object-cover"
                src={image1}
              /> */}
              {posts.map((post) => (
                <img
                  key={post.id}
                  className="flex h-[300px] rounded-[5px] w-[270px] object-cover"
                  src={post.media_url || post.thumbnail_url}
                  alt={post.caption || "Instagram Post"}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
