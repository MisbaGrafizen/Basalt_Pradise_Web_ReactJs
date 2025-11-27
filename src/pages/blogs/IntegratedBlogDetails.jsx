// import React from 'react'
// import Header from '../../Component/header/Header'
// import Footer from '../../Component/footer/Footer'

// export default function IntegratedBlogDetails() {
//   return (

// <>
//        <Header />
//             <div className='  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto  py-8 gap-[20px] pt-[110px] flex '>

//                 <div className=' md:w-[80%] flex gap-[30px] flex-col'>


//                 </div>
//                <div className=" h-fit  max-w-[300px] right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
//                         <div id="infoProduto ">
//                             <div className="blog-sidebar">



//                                 <div className="sidebar-search flex justify-between border-[1px] p-[10px] rounded-[8px]">
//                                     <input
//                                         type="text"
//                                         className="search-input  outline-none"
//                                         name="Search"
//                                         placeholder="Search "
//                                     />
//                                     <button className="search-btn pr-[10px]" type="submit">
//                                         <svg
//                                             width="16"
//                                             height="16"
//                                             viewBox="0 0 16 16"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
//                                                 fill="#fcaf17"
//                                             ></path>
//                                         </svg>
//                                     </button>
//                                 </div>
//                                 <div className="ak-height-50 ak-height-lg-30"></div>

//                                 {/* Popular Categories */}
//                                 <div className="sidebar-section px-[10px]">
//                                     <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
//                                         Influencer Guests
//                                     </h5>
//                                     <ul className="flex flex-col gap-[4px]">
//                                         <h1 className=' flex  font-cu font-[600] basalt-text'>Coming Soon . . .</h1>


//                                     </ul>
//                                 </div>
//                                 <div className="ak-height-50 ak-height-lg-30"></div>

//                                 {/* Popular Tags */}
//                                 <div className="sidebar-section  mt-[20px] px-[10px]">
//                                     <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
//                                         Popular Blogs
//                                     </h5>
//                                     <ul className="flex  flex-col gap-[8px]">
//                                         <li className='  flex'>
//                                             <i className="fa-sharp text-[5px] mt-[8px] mr-[10px]  text-[#fcaf17]  fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[13px] text-[#5c5b5b] ' href="/blogs/must-visit-places-near-basalt-paradise">10 Must-Visit Places Near Basalt Paradise</a>
//                                         </li>
//                                         <li className=' items-center flex'>
//                                             <i className="fa-sharp mt-[px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/travel-tips">Travel Tips & Guides</a>
//                                         </li>

//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/offbeat-destinations-near-halol">         Offbeat Destinations Near Halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/nature-spots-near-halol">      Best Nature Spots Near Halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/adventure-activities">    Activities Near Basalt </a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/weekend-getaway-from-ahmedabad">   Weekend from Ahmedabad</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/romantic-getaways-near-vadodara">   Romantic Getaways Near Vadodara</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/spiritual-trails-near-halol">   Spiritual Trails Near Halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-halol">   Best Time To Visit Pavagadh Halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/birdwatching-and-eco-tourism-halol">   Birdwatching & Eco-Tourism halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/hidden-temples-spiritual-sites-pavagadh">   Hidden Temples & Spiritual Sites Pavagadh</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-monsoon-guide">   Best Time To Visit Pavagadh Monsoon Guide</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/photography-places-halol-instagram-reels">   Top Photography Spots Near Halol</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary">  One Day Trip Pavagadh From Vadodara</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/history-of-champaner-pavagadh-heritage-guide"> History Of Champaner Pavagadh</a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/budget-travel-halol-pavagadh-guide"> Budget Travel Halol Pavagadh </a>
//                                         </li>
//                                         <li className='  flex'>
//                                             <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
//                                             <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/local-markets-handicrafts-halol-shopping-guide"> Local Markets & Handicrafts in Halol – Where to Shop Like a Local</a>
//                                         </li>

//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//             </div>
//             <Footer />

// </>
//   )
// }


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../Component/header/Header';
import Footer from '../../Component/footer/Footer';
import axios from 'axios';

export default function IntegratedBlogDetails() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // Dummy Data for Bottom Blog Section


  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/v2/hotel/admin/blog/${id}`);
        console.log('response', response)
        setBlog(response.data.data);
      } catch (error) {
        console.error('Failed to fetch blog details:', error);
      }
    };

    fetchBlog();
  }, [id]);

  //   if (loading) return <p className="text-center mt-20">Loading...</p>;
  if (!blog) return <p className="text-center mt-20">Blog not found</p>;

  return (
    <>
      <Header />
      <div className='2xl:w-[1300px] font-Poppins w-[90%] md:w-[80%] h-full mx-auto py-8 gap-[20px] pt-[110px] flex'>
        <div className='md:w-[80%] flex gap-[30px] flex-col'>
          <h1 className='text-[28px] font-[700]'>{blog.title}</h1>
          <div className='w-full h-[400px] overflow-hidden rounded-md'>
            <img src={blog.image} alt={blog.title} className='w-full h-full object-cover rounded-md' />
          </div>
          <div className='mt-[20px] text-[16px] text-[#333] leading-relaxed prose max-w-none'>
            <div dangerouslySetInnerHTML={{ __html: blog.description }} />
          </div>
          {blog.subblogs && (
            <div className='mt-[40px] text-[16px] text-[#444] leading-relaxed prose max-w-none'>
              <div dangerouslySetInnerHTML={{ __html: blog.subblogs }} />
            </div>
          )}
        </div>

        {/* Sidebar remains unchanged */}
        <div className="h-fit max-w-[300px] right-[10%] border-[1.1px] md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
          {/* ...existing sidebar content... */}
        </div>
      </div>




     
      <Footer />
    </>
  );
}
