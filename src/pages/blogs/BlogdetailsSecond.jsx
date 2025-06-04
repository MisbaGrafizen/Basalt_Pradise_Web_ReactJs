import React, { useEffect, useState } from 'react';
import Header from '../../Component/header/Header'
import Footer from '../../Component/footer/Footer'
import hill from "../../../public/Blog2/Top_of_Pavadagh_hill.jpeg"
import Jamemasjid from "../../../public/Blog2/jameMasjid.jpg"
import mahakalilake from "../../../public/Blog2/mahakalilake.webp"
import kadaDam from "../../../public/Blog2/kadaDam.jpg"
import dinner from "../../../public/Basalt/B3.jpg"
import suctury from "../../../public/Blog2/Jambughoda-Wildlife-Sanctuary.jpg"
import waterfall from "../../../public/Blog2/waterfall.webp"
import statue from "../../../public/Blog2/sardar-patel-statue.webp"

export default function BlogdetailsSecond() {
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndexBear((prevIndex) => (prevIndex + 1) % bearmain.length);
        }, 2500); // Change image every 2 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <>
            <Header />
            <div className='  2xl:w-[1300px] font-Poppins !bg-[#] w-[90%] md:w-[80%]   h-[100%] mx-auto px-2 py-8 gap-[20px] pt-[110px] flex '>

                <div className=' md:w-[80%] w-[100%] gap-[40px] flex flex-col'>


                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>Day 1: Heritage & Spirituality</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={hill}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] gap-[10px] flex md:text-[23px] font-[500] md:items-center text-gray-900">
                                <i className="fa-solid text-[12px]   fa-circle mt-[8px]"></i>   9:00 AM – Start Your Day with a Scenic Drive to Pavagadh Hill
                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Pavagadh Hill & Kalika Mata Temple</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Begin your journey with a beautiful uphill drive to Pavagadh Hill, one of Gujarat’s most sacred sites. Either take a ropeway ride or trek to the Kalika Mata Temple, where you’ll be rewarded with breathtaking views and divine blessings.
                            </p>

                            <h1 className='  font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Visit early to avoid crowds and enjoy the sunrise view from the hilltop!
                            </h1>
                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                        <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>12:00 PM – Explore the Champaner-Pavagadh Archaeological Park </h1>
                        <div className="relative w-full  md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={Jamemasjid}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                            {/* <img
                                src={}
                                alt="Basalt Paradise Resort"
                                className="object-cover w-full h-full transition-all duration-1000 ease-in-out"
                            /> */}
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] flex items-center gap-[7px] md:text-[23px] font-[500] text-gray-900">
                            <i className="fa-solid text-[12px]   fa-circle"></i> 
                                9:00 AM – Start Your Day with a Scenic Drive to Pavagadh Hill 🏞️
                            </h1> */}



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Champaner Fort & Jami Masjid</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                After visiting the temple, head to Champaner-Pavagadh Archaeological Park, a UNESCO Heritage Site with ancient mosques, forts, and stepwells. Don’t miss:
                                <ul className='ex mt-[10px] flex flex-col gap-[5px] font-[400]'>
                                    <li>
                                        <i className="fa-regular mr-[4px] text-[18px] text-[#7442ff] fa-circle-check"></i> <b className=' font-[500]'>
                                            Jami Masjid –
                                        </b> A stunning Indo-Islamic mosque

                                    </li>
                                    <li>
                                        <i className="fa-regular  mr-[4px] text-[18px] text-[#7442ff] fa-circle-check"></i>  <b className=' font-[500]'> Kevda Masjid –</b> A hidden gem with intricate carvings
                                    </li>
                                    <li>
                                        <i className="fa-regular  mr-[4px] text-[18px] text-[#7442ff] fa-circle-check"></i>  <b className=' font-[500]'>Helical Stepwell –</b> An architectural marvel
                                    </li>
                                </ul>
                            </p>




                        </article>
                    </div>
                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%] ">
                        <h1 className=' flex md:items-center font-[600] mb-[10px] text-[18px] gap-[10px] '> <i className="fa-solid mt-[4px] text-[#7442ff] fa-fork-knife"></i>                          2:00 PM – Lunch at a Local Gujarati Restaurant  </h1>


                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                9:00 AM – Start Your Day with a Scenic Drive to Pavagadh Hill 🏞️
                            </h1> */}



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Champaner Fort & Jami Masjid</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px]  gap-[8px] items-center text-[14px]">
                                <i className="fa-solid text-[12px]   fa-circle"></i>  Try <b className=' font-[500]'> Kansaar Gujarati Thali </b>for an authentic meal with undhiyu, dhokla, and kadhi.

                            </p>

                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <b className=' font-[600]'>  Alternative Option : </b> If you prefer quick bites, check out local snack stalls serving fafda & jalebi!

                            </p>


                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                        <h1 className=' md:items-center gap-[10px] flex font-[600] mb-[10px] text-[18px]'>  <i className="fa-regular mt-[4px] fa-calendar-days"></i>  3:30 PM – Nature Retreat at Mahakali Lake </h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={mahakalilake}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                                9:00 AM – Start Your Day with a Scenic Drive to Pavagadh Hill 🏞️
                            </h1> */}



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Mahakali Lake</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Post-lunch, relax at <b className=' font-[500]'>Mahakali Lake</b> , a serene escape surrounded by lush greenery. Enjoy a peaceful <b className=' font-[500]'>boat ride</b> or simply soak in the natural beauty.
                            </p>


                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                        <h1 className=' flex font-[600] mb-[10px] items-center gap-[10px] text-[18px]'> <i className="fa-regular fa-calendar-days"></i> 6:00 PM – Sunset at Kada Dam</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={kadaDam}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] flex items-center gap-[10px] font-[500] text-gray-900">
                            <i className="fa-solid text-[12px]   fa-circle"></i>   9:00 AM – Start Your Day with a Scenic Drive to Pavagadh Hill 
                            </h1> */}



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Kada Dam</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                As the day winds down, drive to <b className=' font-[500]'>Kada Dam </b>, where the <b className=' font-[500]'>reflection of the setting sun</b> on the water makes for a breathtaking view. A perfect <b className=' font-[500]'>Instagram-worthy moment!</b>
                            </p>

                            <h1 className='  font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Bring your camera – the golden hour lighting is perfect!
                            </h1>
                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                        <h1 className=' flex font-[600] mb-[10px] md:items-center gap-[10px] text-[18px]'> <i className="fa-regular  mt-[4px] fa-calendar-days"></i> 8:00 PM – Dinner & Stay at Basalt Paradise 🌙</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={dinner}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] md:text-[23px] flex items-center gap-[10px] font-[500] text-gray-900">
                            <i className="fa-solid text-[12px]   fa-circle"></i>  8:00 PM – Dinner & Stay at Basalt Paradise 🌙
                            </h1> */}



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Basalt Paradise</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Enjoy a delicious dinner at Basalt Paradise, featuring local & continental delicacies. After an eventful day, unwind in your <b className=' font-[500]'>luxurious villa</b>,  and recharge for another exciting day!
                            </p>

                            {/* <h1 className=' flex font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Bring your camera – the golden hour lighting is perfect!
                            </h1> */}
                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>
                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>Day 2: Adventure & Leisure</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={suctury}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            <h1 className="text-[18px] gap-[10px] flex md:text-[23px] font-[500] md:items-center text-gray-900">
                                <i className="fa-solid text-[12px]   fa-circle mt-[8px]"></i>   6:00 AM – Morning Trek at Jambughoda Wildlife Sanctuary
                            </h1>



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Jambughoda Wildlife Sanctuary</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Kickstart your second day with an <b className=' font-[500]'>early morning trek</b>  at <b className=' font-[500]'>Jambughoda Wildlife Sanctuary, home to leopards, sloth bears, and exotic birds. If you're lucky, you might spot some rare wildlife</b> in their natural habitat!
                            </p>

                            {/* <h1 className=' flex font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Visit early to avoid crowds and enjoy the sunrise view from the hilltop!
                            </h1> */}
                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>10:00 AM – Breakfast at a Local Cafée</h1>
                        {/* <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={hill}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div> */}

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] gap-[10px] flex md:text-[23px] font-[500] items-center text-gray-900">
                                <i className="fa-solid text-[12px]   fa-circle"></i>  6:00 AM – Morning Trek at Jambughoda Wildlife Sanctuary
                            </h1> */}



                            {/* <div className=' cursor-default flex items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px ] fa-location-dot"></i>
                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Jambughoda Wildlife Sanctuary</b>
                                </p>
                            </div> */}
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                <b className=' font-[500]'>Recommended Spot:  Try Masala Chai & Poha at a roadside eatery for an authentic taste of Gujarat!</b>
                            </p>

                            {/* <h1 className=' flex font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Visit early to avoid crowds and enjoy the sunrise view from the hilltop!
                            </h1> */}
                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>11:00 AM – Visit the Hidden Beauty of Hathni Waterfall</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={waterfall}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] gap-[10px] flex md:text-[23px] font-[500] items-center text-gray-900">
                                <i className="fa-solid text-[12px]   fa-circle"></i>  6:00 AM – Morning Trek at Jambughoda Wildlife Sanctuary
                            </h1> */}



                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Hathni Waterfall</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                Drive to <b className=' font-[500]'>Hathni Waterfall </b>, a <b className=' font-[500]'>hidden paradise</b> known for its <b className=' font-[500]'>lush green surroundings and fresh mountain air. Ideal for nature lovers and photographers</b>!

                            </p>

                            <h1 className='  font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b> Visit during monsoon for the best views!

                            </h1>
                        </article>
                    </div>

                    <span className=' flex w-[50%] ml-[] border-t-[1.7px] border-[#7442ff]  border-dashed '></span>

                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>2:00 PM – Lunch & Leisure Time at Basalt Paradise </h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={dinner}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">
                            {/* <h1 className="text-[18px] gap-[10px] flex md:text-[23px] font-[500] items-center text-gray-900">
                                <i className="fa-solid text-[12px]   fa-circle"></i>  6:00 AM – Morning Trek at Jambughoda Wildlife Sanctuary
                            </h1> */}

                            <p className="text-gray-600 md:text-[16px] text-[14px]">After your adventure, return to <b className=' font-[500]'>Basalt Paradis</b> for a relaxed <b className=' font-[500]'>poolside lunch. Try their special seafood platter or traditional Gujarati thali</b>

                            </p>

                            <h1 className=' flex font-400] text-[17px] w-[100%]'>
                                Spend your afternoon at the <b className=' font-[500]'>infinity pool</b> or enjoy a rejuvenating <b className=' font-[500]'>spa session</b>.

                            </h1>
                        </article>
                    </div>

                    <div className=" w-[100%]">
                                             <h1 className=' flex font-[600] mb-[10px]  gap-[10px] text-[18px] md:items-center'> <i className="fa-regular mt-[4px] fa-calendar-days"></i>5:00 PM – Explore Kevadia & Statue of Unity</h1>
                        <div className="relative w-full md:h-[400px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                            <img
                                src={statue}
                                alt="Basalt Paradise Resort"
                                fill
                                className="object-cover w-[100%] h-[100%]"
                                priority
                            />
                        </div>

                        {/* Main Content */}
                        <article className="space-y-2">




                            <div className=' cursor-default flex  md:items-center gap-[10px]   text-[#7442ff] '>
                                <i className="fa-regular text-[20px] mt-[6px]  md:mt-0  fa-location-dot"></i>

                                <p className=' gap-[10px] mt-[2px] flex'>
                                    <b className=' text-[18px] font-[400]'>Statue of Unity</b>
                                </p>
                            </div>
                            <p className="text-gray-600 md:text-[16px] text-[14px]">
                                End your trip with a visit to India’s tallest statue – <b className=' font-[500]'>the Statue of Unity </b>. Witness the spectacular <b className=' font-[500]'>light & sound show</b> in the evening and enjoy a relaxing boat ride in the <b className=' font-[500]'>Narmada River</b>.
                            </p>

                            {/* <h1 className=' flex font-[500] text-[17px] w-[100%]'>
                                <b className='pr-[5px]'>Pro Tip : </b>  Visit early to avoid crowds and enjoy the sunrise view from the hilltop!
                            </h1> */}
                        </article>
                    </div>
                    <div className="w-full my-2">
                            <h1 className="text-[20px] basalt-text md:text-[23px] font-[600] mb-2">Related Blogs</h1>
                            <ul className="list-disc ml-4 text-[17px] space-y-2">
                                <li>
                                    <a href="/blogs/offbeat-destinations-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Explore Offbeat Destinations Near Halol
                                    </a>
                                </li>
                                <li>
                                    <a href="/blogs/nature-spots-near-halol" className="text-[#000000] font-[500] hover:underline">
                                    Discover Best Nature Spots Near Halol
                                    </a>
                                </li>

                                <li>
                                    <a href="/adventure-activities" className="text-[#000000] font-[500] hover:underline">
                                    Adventure Activities Near Basalt Paradise for Thrill Seekers
                                    </a>
                                </li>
                                <li>
                                    <a href="/blogs/must-visit-places-near-basalt-paradise" className="text-[#000000] font-[500] hover:underline">
                                    Complete Guide: 10 Must-Visit Places Near Basalt Paradise
                                    </a>
                                </li>   
                            </ul>
                        </div>
                </div>
           <div className=" h-fit  max-w-[300px] right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
                        <div id="infoProduto ">
                            <div className="blog-sidebar">



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
                                        Influencer Guests
                                    </h5>
                                    <ul className="flex flex-col gap-[4px]">
                                        <h1 className=' flex  font-cu font-[600] basalt-text'>Coming Soon . . .</h1>


                                    </ul>
                                </div>
                                <div className="ak-height-50 ak-height-lg-30"></div>

                                {/* Popular Tags */}
                                <div className="sidebar-section  mt-[20px] px-[10px]">
                                    <h5 className="title font-[600] text-[19px] py-[10px] text-[#000000]">
                                        Popular Blogs
                                    </h5>
                                    <ul className="flex  flex-col gap-[8px]">
                                        <li className='  flex'>
                                            <i className="fa-sharp text-[5px] mt-[8px] mr-[10px]  text-[#fcaf17]  fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[13px] text-[#5c5b5b] ' href="/blogs/must-visit-places-near-basalt-paradise">10 Must-Visit Places Near Basalt Paradise</a>
                                        </li>
                                        <li className=' items-center flex'>
                                            <i className="fa-sharp mt-[px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/travel-tips">Travel Tips & Guides</a>
                                        </li>

                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/offbeat-destinations-near-halol">         Offbeat Destinations Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/nature-spots-near-halol">      Best Nature Spots Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/adventure-activities">    Activities Near Basalt </a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/weekend-getaway-from-ahmedabad">   Weekend from Ahmedabad</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/romantic-getaways-near-vadodara">   Romantic Getaways Near Vadodara</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/spiritual-trails-near-halol">   Spiritual Trails Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-halol">   Best Time To Visit Pavagadh Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/birdwatching-and-eco-tourism-halol">   Birdwatching & Eco-Tourism halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/hidden-temples-spiritual-sites-pavagadh">   Hidden Temples & Spiritual Sites Pavagadh</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/best-time-to-visit-pavagadh-monsoon-guide">   Best Time To Visit Pavagadh Monsoon Guide</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/photography-places-halol-instagram-reels">   Top Photography Spots Near Halol</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/one-day-trip-pavagadh-from-vadodara-itinerary">  One Day Trip Pavagadh From Vadodara</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/history-of-champaner-pavagadh-heritage-guide"> History Of Champaner Pavagadh</a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/budget-travel-halol-pavagadh-guide"> Budget Travel Halol Pavagadh </a>
                                        </li>
                                        <li className='  flex'>
                                            <i className="fa-sharp  mt-[8px] text-[5px] mr-[10px]  text-[#fcaf17]   fa-solid fa-circle"></i>
                                            <a className='  font-[400] text-[14px] text-[#5c5b5b] ' href="/blogs/local-markets-handicrafts-halol-shopping-guide"> Local Markets & Handicrafts in Halol – Where to Shop Like a Local</a>
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
