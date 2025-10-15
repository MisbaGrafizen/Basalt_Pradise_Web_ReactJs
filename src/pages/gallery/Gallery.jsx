
import { useEffect, useRef, useState } from "react"
import {
    Star,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Navigation2,
    Check, X,
    Users,
    UtensilsCrossed,
    ParkingCircle
} from "lucide-react";
import Header from '../../Component/header/Header'
import room1 from "../../../public/myTripGallery/room1.avif"
import room2 from "../../../public/myTripGallery/room2.avif"
import room3 from "../../../public/myTripGallery/room3.avif"
import room4 from "../../../public/myTripGallery/room4.avif"
import room5 from "../../../public/myTripGallery/room5.avif"
import room6 from "../../../public/myTripGallery/room6.avif"
import room7 from "../../../public/myTripGallery/room7.avif"
import room8 from "../../../public/myTripGallery/room8.avif"
import outdoor1 from "../../../public/myTripGallery/outdoor1.avif"
import outdoor2 from "../../../public/myTripGallery/outdoor2.avif"
import outdoor3 from "../../../public/myTripGallery/outdoor3.avif"
import outdoor4 from "../../../public/myTripGallery/outdoor4.avif"
import outdoor5 from "../../../public/myTripGallery/outdoor5.avif"
import resturant1 from "../../../public/myTripGallery/resturant1.avif"
import PlayArea1 from "../../../public/myTripGallery/playArea1.avif"
import PlayArea2 from "../../../public/myTripGallery/playArea2.avif"
import PlayArea3 from "../../../public/myTripGallery/playArea3.avif"
import PlayArea4 from "../../../public/myTripGallery/playArea4.avif"
import PlayArea5 from "../../../public/myTripGallery/playArea5.avif"
import garden1 from "../../../public/myTripGallery/garden1.avif"
import garden2 from "../../../public/myTripGallery/garden2.avif"
import garden3 from "../../../public/myTripGallery/garden3.avif"
import commonArea1 from "../../../public/myTripGallery/commonarea1.avif"
import commonArea2 from "../../../public/myTripGallery/commonarea2.avif"
import commonArea3 from "../../../public/myTripGallery/commonarea3.avif"
import commonArea4 from "../../../public/myTripGallery/commonarea4.avif"
import villaGa from "../../../public/Basalt/B12.jpg"
import banquet from "../../../public/Basalt/B8.jpg"
import GusseRoom1 from "../../../public/myTripGallery/gussetPhotos/room1.avif"
import GusseRoom2 from "../../../public/myTripGallery/gussetPhotos/room2.avif"
import GusseResturant1 from "../../../public/myTripGallery/gussetPhotos/resturant1.avif"
import GusseOutdoors1 from "../../../public/myTripGallery/gussetPhotos/outdoors1.avif"
import GusseOutdoors2 from "../../../public/myTripGallery/gussetPhotos/outdoors2.avif"
import GusseOutdoors3 from "../../../public/myTripGallery/gussetPhotos/outdoors3.avif"
import GusseOutdoors4 from "../../../public/myTripGallery/gussetPhotos/outdoors4.avif"
import GusseOutdoors5 from "../../../public/myTripGallery/gussetPhotos/outdoors5.avif"
import GusseOutdoors6 from "../../../public/myTripGallery/gussetPhotos/outdoors6.avif"
import GusseOutdoors7 from "../../../public/myTripGallery/gussetPhotos/outdoors7.avif"
import GusseOutdoors8 from "../../../public/myTripGallery/gussetPhotos/outdoors8.avif"
import GusseOutdoors9 from "../../../public/myTripGallery/gussetPhotos/outdoors9.avif"
import GusseOutdoors10 from "../../../public/myTripGallery/gussetPhotos/outdoors10.avif"
import GusseOutdoors11 from "../../../public/myTripGallery/gussetPhotos/outdoors11.avif"
import GusseOutdoors12 from "../../../public/myTripGallery/gussetPhotos/outdoors12.avif"
import GusseOutdoors13 from "../../../public/myTripGallery/gussetPhotos/outdoors13.avif"
import GusseOutdoors14 from "../../../public/myTripGallery/gussetPhotos/outdoors14.webp"
import GusseOutdoors15 from "../../../public/myTripGallery/gussetPhotos/outdoors15.avif"
import GusseOutdoors16 from "../../../public/myTripGallery/gussetPhotos/outdoors15.avif"
import GussePoll1 from "../../../public/myTripGallery/gussetPhotos/pool1.jpeg"
import GussePoll2 from "../../../public/myTripGallery/gussetPhotos/pool2.avif"
import GussePoll3 from "../../../public/myTripGallery/gussetPhotos/pool3.webp"
import GussePoll4 from "../../../public/myTripGallery/gussetPhotos/pool4.avif"
import GussePoll5 from "../../../public/myTripGallery/gussetPhotos/pool5.webp"
import poolnignt from "../../../public/NewDriveImage/pool3.jpg"
import poolnignt1 from "../../../public/NewDriveImage/poll2.jpg"
import poolnight2 from "../../../public/NewDriveImage/nightswimmingpool.jpg"
import nightGreenArea from "../../../public/NewDriveImage/nightgreen1.jpg"
import resturant11 from "../../../public/NewDriveImage/benqwet.jpg"
import resturant22 from "../../../public/NewDriveImage/resturant.jpg"
import resturant33 from "../../../public/NewDriveImage/resturant1.jpg"
import resturant44 from "../../../public/NewDriveImage/resturant2.jpg"
import resturant55 from "../../../public/NewDriveImage/resturant3.jpg"
import resturant66 from "../../../public/NewDriveImage/resturant4.jpg"
import resturant77 from "../../../public/NewDriveImage/resturant5.jpg"
import front1 from "../../../public/NewDriveImage/mainfull.jpg"
import garden from "../../../public/NewDriveImage/graden.jpg"
import zen1 from "../../../public/NewDriveImage/zenout.jpg"
import area1 from "../../../public/NewDriveImage/area1.jpg"
import pool1 from "../../../public/NewDriveImage/Basalt infinity pool.jpg"
import drone1 from "../../../public/NewDriveImage/Basalt arial.jpg"
import villa11 from "../../../public/VilaNewImages/villa4.jpeg"
import villa22 from "../../../public/VilaNewImages/villa5.jpeg"
import villa33 from "../../../public/VilaNewImages/villa6.jpeg"
import villa44 from "../../../public/VilaNewImages/villa7.jpeg"
import villa55 from "../../../public/VilaNewImages/villa8.jpeg"
import b5 from "../../../public/Basalt/B5.jpg"
import b6 from "../../../public/Basalt/B6.jpg"
import forest1  from "../../../public/ForestAreaImges/ground1.jpeg"
import forest2  from "../../../public/ForestAreaImges/ground2.jpeg"
import forest3  from "../../../public/ForestAreaImges/ground3.jpeg"
import forest4  from "../../../public/ForestAreaImges/ground4.jpeg"
import forest5  from "../../../public/ForestAreaImges/ground5.jpeg"
import forest6  from "../../../public/ForestAreaImges/ground6.jpeg"
import forest7  from "../../../public/ForestAreaImges/ground7.jpeg"
import playArea11  from "../../../public/ForestAreaImges/playarea1.jpeg"
import playArea22  from "../../../public/ForestAreaImges/playarea2.jpeg"
import playArea33  from "../../../public/ForestAreaImges/playarea3.jpeg"
import playArea44  from "../../../public/ForestAreaImges/playarea4.jpeg"
import playArea55  from "../../../public/ForestAreaImges/playarea5.jpeg"
import playArea66  from "../../../public/ForestAreaImges/playarea6.jpeg"
import disco1 from "../../../public/discotheq/image1.jpg"
import disco2 from "../../../public/discotheq/image2.jpg"

import disco3 from "../../../public/discotheq/image3.jpg"

import disco4 from "../../../public/discotheq/image4.jpg"

import disco5 from "../../../public/discotheq/image5.jpg"
import disco6 from "../../../public/discotheq/image6.jpg"


import disco11 from "../../../public/discotheq/image11.jpg"
import disco7 from "../../../public/discotheq/image7.jpg"
import disco8 from "../../../public/discotheq/image8.jpg"
import disco9 from "../../../public/discotheq/image9.jpg"




import out1 from "../../../public/5june-edit/new1.jpg"
import out2 from "../../../public/5june-edit/new2.jpg"
import out3 from "../../../public/5june-edit/new3.jpg"
import out4 from "../../../public/5june-edit/new4.jpg"
import out5 from "../../../public/5june-edit/new5.jpg"
import out6 from "../../../public/5june-edit/new6.jpg"
import out7 from "../../../public/5june-edit/new7.jpg"
import out8 from "../../../public/5june-edit/new8.jpg"
import out9 from "../../../public/5june-edit/new9.jpg"
import out10 from "../../../public/5june-edit/new10.jpg"
import out11 from "../../../public/5june-edit/new11.jpg"
import out12 from "../../../public/5june-edit/new12.jpg"
import out13 from "../../../public/5june-edit/new13.jpg"
import out14 from "../../../public/5june-edit/new14.jpg"
import out15 from "../../../public/5june-edit/new15.jpg"
import out16 from "../../../public/5june-edit/new16.jpg"
import out17 from "../../../public/5june-edit/new17.jpg"
import out18 from "../../../public/5june-edit/new18.jpg"
import out19 from "../../../public/5june-edit/new19.jpg"
import out20 from "../../../public/5june-edit/new20.jpg"
import out21 from "../../../public/5june-edit/new21.jpg"
import out22 from "../../../public/5june-edit/new22.jpg"
import out23 from "../../../public/5june-edit/new23.jpg"
import out24 from "../../../public/5june-edit/new24.jpg"
import out25 from "../../../public/5june-edit/new25.jpg"

import gardendrone from "../../../public/Basalt Final/B17.png"
import zen2 from "../../../public/Basalt Final/B18.jpg"
import bridge from "../../../public/Basalt Final/B19.jpg"
import frogCenter from "../../../public/Basalt Final/B20.jpeg"
import frorest from "../../../public/Basalt Final/B21.jpg"
import mountain from "../../../public/Basalt Final/B22.jpeg"
import discotheqnew1 from "../../../public/latestImagesBasalt/beutifull-kuwo1.jpg"
import discotheqnew2 from "../../../public/latestImagesBasalt/beutifull-kuwo2.jpg"
import parking1 from "../../../public/latestImagesBasalt/parking1.jpg"
import parking2 from "../../../public/latestImagesBasalt/parking2.jpg"
import parking3 from "../../../public/latestImagesBasalt/parking3.jpg"
import parking4 from "../../../public/latestImagesBasalt/parking4.jpg"
import resturantnew1 from "../../../public/latestImagesBasalt/resturantnew1.jpg"
import resturantnew2 from "../../../public/latestImagesBasalt/resturantnew2.jpg"
import resturantnew3 from "../../../public/latestImagesBasalt/resturantnew3.jpg"
import resturantnew4 from "../../../public/latestImagesBasalt/resturantnew4.jpg"
import resturantnew6 from "../../../public/latestImagesBasalt/resturantnew6.jpg"

import zero1 from "../../../public/latestImagesBasalt/zeroedgepool1.jpg"
import zero2 from "../../../public/latestImagesBasalt/zeroedgepool2.jpg"
import zero3 from "../../../public/latestImagesBasalt/zeroedgepool3.jpg"
import zero4 from "../../../public/latestImagesBasalt/zeroedgepool4.jpg"
import zero5 from "../../../public/latestImagesBasalt/zeroedgepool5.jpg"

import disconight from "../../../public/latestImagesBasalt/discoquo.jpg"
import outdoornew from "../../../public/latestImagesBasalt/must.jpg"
import outdoonew2 from "../../../public/latestImagesBasalt/nighqua.jpg"
import outdoonew3 from "../../../public/latestImagesBasalt/nouko.jpg"
import outdoonew4 from "../../../public/latestImagesBasalt/zym.jpg"
import villa23 from "../../../public/latestImagesBasalt/villa.jpg"
import zeroedgesam from "../../../public/latestImagesBasalt/zeroedgepoolmu1.jpg"
import zeroedgesam1 from "../../../public/latestImagesBasalt/zeroedgepoolmu2.jpg"
import zeroedgesam2 from "../../../public/latestImagesBasalt/zeroedgepoolmu3.jpg"













import { useLocation } from "react-router-dom"
import Footer from "../../Component/footer/Footer"


export default function Gallery() {
    const travellerTabRef = useRef(null);
 
    const location = useLocation()
    const [photoTab, setPhotoTab] = useState(location?.state?.openGuest ? "guest" : "property")
    const outdoorsRef = useRef(null)
    const playAreaRef = useRef(null)
    const villaRef = useRef(null)
    const zenRoomRef = useRef(null)
    const restaurantRef = useRef(null)
const discothequeRef = useRef(null)
const parkingevchargeRef = useRef(null)


    const zeroedgepoolRef = useRef(null)
    const commonAreaRef = useRef(null)
    const othersRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);



    const GuessrestaurantRef = useRef(null)
    const GuestoutdoorsRef = useRef(null)
    const GuestPool = useRef(null)
    const Guestroom = useRef(null)
    const [activeTab, setActiveTab] = useState("Outdoors");
    const [activeTabGuest, setActiveTabGuest] = useState("GuestRoom")


    const scrollToSection = (sectionRef, tabName) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" })
        setActiveTab(tabName)
    }


    const scrollToSection1 = (sectionRef, tabName) => {
        sectionRef.current.scrollIntoView({ behavior: "smooth" })
        setActiveTabGuest(tabName)
    }

    // Auto scroll to Private Villa on mount
    useEffect(() => {
        if (outdoorsRef.current) {
            outdoorsRef.current.scrollIntoView({ behavior: "smooth" });
            setActiveTab("Outdoors");
        }
    }, []);


    const roomImages = [room1, room2, room3, room4, room5]
    // const outdoorImages = [out8,out10,out11,gardendrone,out16,out18,frorest,bridge,out21,villa23,out22,frogCenter,out23,out25,nightGreenArea, zen1, b5,zen2, drone1,  outdoor4, outdoor5, garden2, outdoor2, poolnignt, outdoor1, mountain,outdoornew,outdoonew2,outdoonew3,outdoonew4]

    const outdoorImages = [outdoor2,b5,out22, poolnignt, outdoor1,out10,out11,gardendrone,out16,out18,frorest,bridge,out21,villa23,frogCenter,out23,out25,nightGreenArea, zen1,zen2, drone1,  outdoor4, outdoor5, garden2,  outdoornew,outdoonew2,outdoonew3,outdoonew4]





    const villaRoom = [room6, room7, room8, villaGa, villa11, villa22, villa33, villa44, villa55]
    const restaurantImages = [ resturant77, resturant33, banquet, resturant55, resturant66,resturantnew2,resturantnew3,resturantnew4,resturantnew6]
    const playArea = [PlayArea1, PlayArea2,forest1, PlayArea4, PlayArea5,forest7,playArea11,playArea33,forest6,playArea44,]
    const forest = [forest1,forest2,forest3,forest4,forest6,forest7 ,forest5]
    const CommonArea = [commonArea1, commonArea2, commonArea3, commonArea4]
    const OtherS = [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5]
const discotheque =[ discotheqnew2,disco11,disco1,disco5,disco3,disco9,disco4,disco7,disco6,disco8,discotheqnew1,]
const parkingev =[parking3,parking1,parking2,parking4,]
// const zeroedge =[zero1,zero2,zero3,zero4,zero5,zeroedgesam,zeroedgesam1,zeroedgesam2]
const zeroedge =[zeroedgesam2,zero2, zero5,zeroedgesam1,]



    const RoomGuest = [GusseRoom1, GusseRoom2,]
    const GuestResturant = [GusseResturant1]
    const GuestOutdoors = [GusseOutdoors1, GusseOutdoors5, GusseOutdoors3, GusseOutdoors4, GusseOutdoors7, GusseOutdoors6, GusseOutdoors8, GusseOutdoors10, GusseOutdoors11, GusseOutdoors12, GusseOutdoors13, GusseOutdoors14, GusseOutdoors15, GusseOutdoors16]

    const Guestpool = [GussePoll1, GussePoll2, GussePoll3, GussePoll4, GussePoll5,]


    const openLightbox = (images, index) => {
        setLightboxImages(images);
        setCurrentImageIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => setIsOpen(false);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);



    const sectionRefs = {
        Outdoors: outdoorsRef,
        "Restaurant & Banquet": restaurantRef,
        // "Forest Area": forestRef,
        
        "Kids Play Area": playAreaRef,
        Discotheque :discothequeRef,
                "Parking + EV Charging" :parkingevchargeRef,
                    "Zero Edge Pool" :zeroedgepoolRef,
        "Private Villa": villaRef,
        "Zen Room": zenRoomRef,
    };

    const buttonPositions = {
        Outdoors: 10,
        "Restaurant & Banquet": 125,
        // "Forest Area": 340,
      
        "Kids Play Area": 340,
          Discotheque:492,
         "Parking + EV Charging":630,
           "Zero Edge Pool":845,
        "Private Villa": 1005,
        "Zen Room": 1130,
    };

    const buttonWidths = {
        Outdoors: 100,
        "Restaurant & Banquet": 200,
        // "Forest Area":115,
        "Kids Play Area": 138,
          Discotheque:123,
               "Parking + EV Charging":200,
               "Zero Edge Pool":140,
        "Private Villa": 120,
        "Zen Room": 115,
    };


    const handleScroll = (section) => {
        setActiveTab(section);
        if (sectionRefs[section] && sectionRefs[section].current) {
            sectionRefs[section].current.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };





    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection?.target?.dataset?.section) {
                    const section = visibleSection.target.dataset.section;
                    setActiveTab(section);
                }
            },
            {
                rootMargin: "-50% 0px -40% 0px", // triggers when section is centered
                threshold: 0.1,
            }
        );

        Object.entries(sectionRefs).forEach(([section, ref]) => {
            if (ref.current) {
                ref.current.dataset.section = section;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);


    const tabNavRef = useRef(null);

    useEffect(() => {
        const activeBtn = tabNavRef.current?.querySelector(`[data-tab="${activeTab}"]`);
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
    }, [activeTab]);
    const travellerButtonLabels = {
        GuestRoom: "Room",
        GuestOutdoors: "Outdoors",
        GuestResturant: "Restaurant",
        Guestpool: "Pool",
      };
      
    const travellerSectionRefs = {
        GuestRoom: Guestroom,
        GuestOutdoors: GuestoutdoorsRef,
        GuestResturant: GuessrestaurantRef,
        Guestpool: GuestPool,
    };

    const travellerButtonPositions = {
        GuestRoom: 8,
        GuestOutdoors: 100,
        GuestResturant: 220,
        Guestpool: 340,
    };

    const travellerButtonWidths = {
        GuestRoom: 70,
        GuestOutdoors: 100,
        GuestResturant: 112,
        Guestpool: 77,
    };
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSection = entries.find((entry) => entry.isIntersecting);
                if (visibleSection?.target?.dataset?.section) {
                    const section = visibleSection.target.dataset.section;
                    setActiveTabGuest(section);
                }
            },
            {
                rootMargin: "-50% 0px -40% 0px",
                threshold: 0.1,
            }
        );

        Object.entries(travellerSectionRefs).forEach(([section, ref]) => {
            if (ref.current) {
                ref.current.dataset.section = section;
                observer.observe(ref.current);
            }
        });

        return () => observer.disconnect();
    }, []);
    useEffect(() => {
        const activeBtn = travellerTabRef.current?.querySelector(`[data-tab="${activeTabGuest}"]`);
        if (activeBtn) {
            activeBtn.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
        }
    }, [activeTabGuest]);


    return (
        <>
            <div className="flex flex-col w-full font-Poppins">
                <Header />

                <div className="md:w-[78%] w-[95%] pb-[30px] pt-[110px] 2xl:w-[1320px] gap-[20px] mt-[5px] flex-col md:flex mx-auto">
                    <div className="w-[100%] bg-[white]">
                        {/* Sticky Header */}
                        <div className="flex flex-col  h-fit fixed top-[50px] z-[20] bg-white w-[100%] 2xl:w-[1300px] md:w-[79%]">

                            <div className="flex justify-between w-[100%] bg-white items-center mb-6">
                                <button className="flex items-center text-lg font-bold">Basalt Paradise Resort and Spa</button>
                            </div>

                            <div className="flex gap-3 mb-2  ml-[20px] md:ml-0 w-[100%] bg-white">
                                <div className="flex gap-3 mb-2 w-[100%] bg-white">
                                    <button
                                        className={`rounded-full text-[14px] px-4 py-[5px] ${photoTab === "property" ? "bg-[#fcaf17] text-[#fff]" : "border text-[#fcaf17] border-[#fcaf17] bg-white"}`}
                                        onClick={() => setPhotoTab("property")}
                                    >
                                        Property Photos
                                    </button>
                                    <button
                                        className={`rounded-full text-[14px] px-4 py-[5px] ${photoTab === "guest" ? "bg-[#fcaf17] text-[#fff]" : "border text-[#fcaf17] border-[#fcaf17] bg-white"}`}
                                        onClick={() => setPhotoTab("guest")}
                                    >
                                        Traveller Photos
                                    </button>
                                </div>

                            </div>
                        </div>


                        {photoTab === "property" ? (
                            <>


                                <div className="flex flex-col  h-fit fixed top-[145px] z-[20] overflow-x-auto  w-[100%] pb-[10px] bg-white 2xl:w-[1300px] md:w-[78%]">
                                    <nav className="border mx-[10px] rounded-tl-[20px] min-w-max 2xl:w-[1280px] shadow-md rounded-br-[20px] w-[72%]  overflow-x-auto border-[#E5E5E5] relative z-[20] bg-white ">
                                        <div className="max-w-[1400px] mx-auto relative">
                                            {/* Sliding Highlight */}
                                            <div
                                                className="absolute top-0 left-0 h-[35px] rounded-tl-[15px] shadow-md rounded-br-[15px] mt-[7px] bg-[#F59E0B] transition-all duration-300 ease-in-out"
                                                style={{
                                                    transform: `translateX(${buttonPositions[activeTab] ?? 0}px)`,
                                                    width: `${buttonWidths[activeTab]}px`,
                                                }}
                                            ></div>

                                            {/* Button List */}
                                            <ul className="flex items-center overflow-x-auto no-scrollbar">
                                                {Object.keys(buttonPositions).map((item) => (
                                                    <li key={item}>
                                                        <a
                                                            href="#"
                                                            data-tab={item}
                                                            onClick={(e) => {
                                                                e.preventDefault();
                                                                scrollToSection(sectionRefs[item], item);
                                                            }}
                                                            className={`inline-block px-6 py-[13px] text-[15px] transition-colors relative -mb-[1px] ${activeTab === item ? "!text-white font-[500]" : "text-[#666666] font-normal"
                                                                }`}
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </nav>

                                </div>


                                {/* Content Sections */}
                                <div className="space-y-12 px-[20px] pt-[130px] w-[100%] bg-white">
                                    <div ref={outdoorsRef} data-section="Outdoors" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative !top-[-10px] ">Outdoors</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {outdoorImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(outdoorImages, index)} alt={`Outdoor ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={restaurantRef} data-section="Restaurant & Banquet" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative top-[-10px] mb">Restaurant & Banquet</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {restaurantImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(restaurantImages, index)} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
{/* 
                                    <div ref={forestRef} data-section="Forest Area" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative top-[-10px] mb"> Forest Area</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {forest.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img onClick={() => openLightbox(forest, index)} src={src} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    <div ref={playAreaRef} data-section="Kids Play Area" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative top-[-10px] mb"> Indoor & Outdoor activities</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {playArea.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img onClick={() => openLightbox(playArea, index)} src={src} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>


          <div ref={discothequeRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Discotheque</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {discotheque.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(discotheque, index)}  alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> 


          <div ref={parkingevchargeRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Parking + EV Charging</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {parkingev.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(parkingev, index)}  alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> 


          <div ref={zeroedgepoolRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Zero Edge Pool</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {zeroedge.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(zeroedge, index)}  alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> 




                                    
                                    <div ref={villaRef} data-section="Private Villa" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative top-[-10px] mb">Private Villa</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {villaRoom.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img onClick={() => openLightbox(villaRoom, index)} src={src} alt={`Villa ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={zenRoomRef} data-section="Zen Room" className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium relative top-[-10px] mb">Zen Room</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {roomImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} alt={`Zen Room ${index + 1}`} onClick={() => openLightbox(roomImages, index)} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                           

                                    {/* <div ref={commonAreaRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Common Area</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {CommonArea.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(CommonArea, index)}  alt={`Common Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* <div ref={othersRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Others</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {OtherS.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(OtherS, index)}  alt={`Others ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                </div>
                            </>
                        ) : (
                            <>

                                <div className="flex flex-col  h-fit fixed top-[155px] z-[20] bg-white w-[78%]">
                                    <div className="flex flex-col h-fit fixed top-[145px] z-[20] pb-[10px] bg-white w-[78%]">
                                        <nav className="border mx-[10px] rounded-tl-[20px] min-w-max 2xl:w-[1370px] shadow-md rounded-br-[20px] w-[42%] border-[#E5E5E5] relative z-[20] bg-white">
                                            <div className="min-w-max relative">
                                                {/* Sliding Highlight */}
                                                <div
                                                    className="absolute top-0 left-0 h-[35px] rounded-tl-[15px] shadow-md rounded-br-[15px] mt-[7px] bg-[#F59E0B] transition-all duration-300 ease-in-out"
                                                    style={{
                                                        transform: `translateX(${travellerButtonPositions[activeTabGuest] ?? 0}px)`,
                                                        width: `${travellerButtonWidths[activeTabGuest] ?? 100}px`,
                                                    }}
                                                ></div>

                                                {/* Dynamic Tab Buttons */}
                                                <ul
                                                    ref={travellerTabRef}
                                                    className="flex items-center overflow-x-auto no-scrollbar min-w-max"
                                                >
                                                    {Object.keys(travellerButtonPositions).map((key) => (
                                                        <li key={key}>
                                                            <a
                                                                href="#"
                                                                data-tab={key}
                                                                onClick={(e) => {
                                                                    e.preventDefault();
                                                                    scrollToSection1(travellerSectionRefs[key], key);
                                                                }}
                                                                className={`inline-block px-6 py-[13px] text-[15px] transition-colors relative -mb-[1px] ${activeTabGuest === key
                                                                        ? "!text-white font-[500]"
                                                                        : "text-[#666666] font-normal"
                                                                    }`}
                                                            >
                                                                {travellerButtonLabels[key]}
                                                            </a>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>

                                </div>


                                {/* Content Sections */}
                                <div className="space-y-12 px-[20px] pt-[130px] w-[100%] bg-white">

                                    <div ref={Guestroom} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Room</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {RoomGuest.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(RoomGuest, index)} alt={`GuestRoom ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>



                                    <div ref={GuestoutdoorsRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Outdoors</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {GuestOutdoors.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(GuestOutdoors, index)} alt={`Outdoor ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div ref={GuessrestaurantRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Resturant</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {GuestResturant.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(GuestResturant, index)} alt={`Zen Room ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>


                                    <div ref={GuestPool} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Pool</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {Guestpool.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(Guestpool, index)} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div ref={gardenRef} className=" p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Others</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {garden.map((src, index) => (
                                                <div key={`garden-${index}`} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}


                                </div>
                            </>
                        )}

                    </div>
                </div>

            </div>

            {isOpen && (
                <div className="fixed inset-0 z-[7000] flex flex-col items-center justify-center bg-black/80 p-4">
                    {/* Close Button */}
                    <button className="absolute top-5 right-5 text-white hover:text-gray-300" onClick={closeLightbox}>
                        <X className="w-6 h-6" />
                    </button>

                    {/* Previous & Next Buttons */}
                    <button className="absolute left-5 text-white hover:text-gray-300" onClick={prevImage}>
                        <ChevronLeft className="w-8 h-8" />
                    </button>
                    <button className="absolute right-5 text-white hover:text-gray-300" onClick={nextImage}>
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Main Image */}
                    <img
                        src={lightboxImages[currentImageIndex]}
                        alt={`Gallery ${currentImageIndex + 1}`}
                        className="max-h-[80vh] max-w-full rounded-md object-contain mb-4"
                    />

                    {/* Thumbnail Strip */}
                    <div className="flex gap-2 overflow-x-auto max-w-full px-2">
                        {lightboxImages.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`h-[70px] w-[100px] object-cover rounded cursor-pointer border-2 ${currentImageIndex === index ? "border-yellow-400" : "border-transparent"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            )}
            <Footer />
        </>
    )
}
