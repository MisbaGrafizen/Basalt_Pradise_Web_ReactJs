// import { useRef, useState } from "react"
// import Header from '../../Component/header/Header'
// import room1 from "../../../public/myTripGallery/room1.avif"
// import room2 from "../../../public/myTripGallery/room2.avif"
// import room3 from "../../../public/myTripGallery/room3.avif"
// import room4 from "../../../public/myTripGallery/room4.avif"
// import room5 from "../../../public/myTripGallery/room5.avif"
// import room6 from "../../../public/myTripGallery/room6.avif"
// import room7 from "../../../public/myTripGallery/room7.avif"
// import room8 from "../../../public/myTripGallery/room8.avif"
// import outdoor1 from "../../../public/myTripGallery/outdoor1.avif"
// import outdoor2 from "../../../public/myTripGallery/outdoor2.avif"
// import outdoor3 from "../../../public/myTripGallery/outdoor3.avif"
// import outdoor4 from "../../../public/myTripGallery/outdoor4.avif"
// import outdoor5 from "../../../public/myTripGallery/outdoor5.avif"
// import resturant1 from "../../../public/myTripGallery/resturant1.avif"
// import PlayArea1 from "../../../public/myTripGallery/playArea1.avif"
// import PlayArea2 from "../../../public/myTripGallery/playArea2.avif"
// import PlayArea3 from "../../../public/myTripGallery/playArea3.avif"
// import PlayArea4 from "../../../public/myTripGallery/playArea4.avif"
// import PlayArea5 from "../../../public/myTripGallery/playArea5.avif"
// import garden1 from "../../../public/myTripGallery/garden1.avif"
// import garden2 from "../../../public/myTripGallery/garden2.avif"
// import garden3 from "../../../public/myTripGallery/garden3.avif"
// import commonArea1 from "../../../public/myTripGallery/commonarea1.avif"
// import commonArea2 from "../../../public/myTripGallery/commonarea2.avif"
// import commonArea3 from "../../../public/myTripGallery/commonarea3.avif"
// import commonArea4 from "../../../public/myTripGallery/commonarea4.avif"












// export default function Gallery() {
//     const outdoorsRef = useRef(null)
//     const restaurantRef = useRef(null)
//     const roomref = useRef(null)
//     const Zenroom = useRef(null)



//     const [activeTab, setActiveTab] = useState("Room")

//     const scrollToSection = (sectionRef, tabName) => {
//         sectionRef.current.scrollIntoView({ behavior: "smooth" })
//         setActiveTab(tabName)
//     }

//     // Sample data for images
//     const roomImages = [
//         room1, room2, room3, room4, room5,
//     ]

//     const outdoorImages = [
//         outdoor1, outdoor2, outdoor3, outdoor4, outdoor5
//     ]

//     const villaRoom = [
//         room6, room7, room8,
//     ]
//     const restaurantImages = [resturant1]

//     const playArea = [
//         PlayArea1, PlayArea2, PlayArea3, PlayArea4, PlayArea5
//     ]
//     const garden = [
//         garden1, garden2, garden3
//     ]
//     const CommonArea = [
//         commonArea1, commonArea2, commonArea3, commonArea4
//     ]
//     const OtherS = [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5,
//     ]



//     return (
//         <>


//             <div className="flex flex-col w-full font-Poppins  ">
//                 {/* <div className="hero-background"></div> */}
//                 <Header />

//                 <div className="md:w-[78%] w-[95%] pb-[30px] pt-[110px]   2xl:w-[1320px] gap-[20px] mt-[5px]  flex-col md:flex  mx-auto">
//                     <div className=" w-[100%] bg-[white]">
//                         {/* Header */}
//                         <div className=" flex flex-col fixed top-[50px] z-[20] bg-white w-[78%]">


//                             <div className="flex justify-between w-[100%] bg-white items-center mb-6">
//                                 <button className="flex items-center text-lg font-bold">
//                                     Basalt Paradise Resort and Spa
//                                 </button>

//                             </div>

//                             {/* Photo Tabs */}
//                             <div className="flex gap-3 mb-6 w-[100%] bg-white">
//                                 <button className=" rounded-full px-4 py-2 bg-[#fcaf17] text-[#fff]">Property Photos</button>
//                                 <button className="border  text-[#fcaf17] border-[#fcaf17] rounded-full px-4 py-2 bg-white">Traveller Photos</button>
//                             </div>

//                             {/* Navigation */}
//                             <div className="flex overflow-x-auto border-b  w-[100%] bg-white border-gray-200 mb-6">
//                                 <button
//                                     className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Room"
//                                         ? " basalt-text font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-[#392866]"
//                                         : ""
//                                         }`}
//                                     onClick={() => scrollToSection(roomref, "Room")}
//                                 >
//                                     Private Villa
//                                 </button>
//                                 <button
//                                     className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Outdoors"
//                                         ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500"
//                                         : ""
//                                         }`}
//                                     onClick={() => scrollToSection(outdoorsRef, "Outdoors")}
//                                 >
//                                     Zen Room
//                                 </button>
//                                 <button
//                                     className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Restaurant"
//                                         ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500"
//                                         : ""
//                                         }`}
//                                     onClick={() => scrollToSection(restaurantRef, "Restaurant")}
//                                 >
//                                     Outdoors
//                                 </button>
//                                 <button
//                                     className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Play"
//                                         ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500"
//                                         : ""
//                                         }`}
//                                     onClick={() => scrollToSection(restaurantRef, "Play")}
//                                 >
//                                     Play Area
//                                 </button>
//                                 <button className="px-5 py-3 whitespace-nowrap">Garden</button>
//                                 <button className="px-5 py-3 whitespace-nowrap">Common Area</button>
//                                 <button className="px-5 py-3 whitespace-nowrap">Others</button>
//                             </div>
//                         </div>

//                         {/* Content Sections */}
//                         <div className="space-y-12  px-[20px] pt-[130px]  w-[100%] bg-white">
//                             {/* Room Section */}
//                             <div className="  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Private Villa</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
//                                     {villaRoom.map((src, index) => (
//                                         <div key={`room-top-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img src={src || "/placeholder.svg"} alt={`Room ${index + 1}`} className="w-full h-full object-cover" />
//                                         </div>
//                                     ))}
//                                 </div>

//                             </div>

//                             <div ref={Zenroom} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Zen Room </h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {roomImages.map((src, index) => (
//                                         <div key={`outdoor-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Outdoor ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Outdoors Section */}
//                             <div ref={outdoorsRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Outdoors</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {outdoorImages.map((src, index) => (
//                                         <div key={`outdoor-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Outdoor ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             {/* Restaurant Section */}
//                             <div ref={restaurantRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Restaurant</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {restaurantImages.map((src, index) => (
//                                         <div key={`restaurant-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Restaurant ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div ref={restaurantRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Play area</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {playArea.map((src, index) => (
//                                         <div key={`restaurant-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Restaurant ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div ref={restaurantRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Garden</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {garden.map((src, index) => (
//                                         <div key={`restaurant-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Restaurant ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div ref={restaurantRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Common Area</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {CommonArea.map((src, index) => (
//                                         <div key={`restaurant-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Restaurant ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                             <div ref={restaurantRef} className="mt-4  border-[1.5px] shadow-2 p-[20px] rounded-[10px] ">
//                                 <h2 className="text-xl font-medium mb-6">Others</h2>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                     {OtherS.map((src, index) => (
//                                         <div key={`restaurant-${index}`} className="rounded-lg overflow-hidden h-64">
//                                             <img
//                                                 src={src || "/placeholder.svg"}
//                                                 alt={`Restaurant ${index + 1}`}
//                                                 className="w-full h-full object-cover"
//                                             />
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//             </div>
//         </>
//     )
// }
import { useEffect, useRef, useState } from "react"
import {
    Star,
    MapPin,
    ChevronLeft,
    ChevronRight,
    Navigation2,
    Check,X,
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
import banquet  from "../../../public/Basalt/B8.jpg"
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
import { useLocation } from "react-router-dom"
import Footer from "../../Component/footer/Footer";










export default function Gallery() {
    const location = useLocation()
    const [photoTab, setPhotoTab] = useState(location?.state?.openGuest ? "guest" : "property")

    const villaRef = useRef(null)
    const zenRoomRef = useRef(null)
    const restaurantRef = useRef(null)
    const outdoorsRef = useRef(null)
    const playAreaRef = useRef(null)
    const gardenRef = useRef(null)
    const commonAreaRef = useRef(null)
    const othersRef = useRef(null)

    const [isOpen, setIsOpen] = useState(false);
    const [lightboxImages, setLightboxImages] = useState([]);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    


    const GuessrestaurantRef = useRef(null)
    const GuestoutdoorsRef = useRef(null)
    const GuestPool = useRef(null)
    const Guestroom = useRef(null)

    const [activeTab, setActiveTab] = useState("Room")
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
        if (villaRef.current) {
            villaRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [])

    const roomImages = [room1, room2, room3, room4, room5]
    const outdoorImages = [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5,garden1,garden2,garden3]
    const villaRoom = [room6, room7, room8,villaGa]
    const restaurantImages = [resturant1,banquet]
    const playArea = [PlayArea1, PlayArea2, PlayArea3, PlayArea4, PlayArea5]
    const garden = [garden1, garden2, garden3]
    const CommonArea = [commonArea1, commonArea2, commonArea3, commonArea4]
    const OtherS = [outdoor1, outdoor2, outdoor3, outdoor4, outdoor5]





    const RoomGuest = [GusseRoom1,GusseRoom2,]
    const GuestResturant = [GusseResturant1]
    const GuestOutdoors = [GusseOutdoors1,GusseOutdoors2,GusseOutdoors3,GusseOutdoors4,GusseOutdoors5,GusseOutdoors6,GusseOutdoors7,GusseOutdoors8,GusseOutdoors10,GusseOutdoors11,GusseOutdoors12,GusseOutdoors13,GusseOutdoors14,GusseOutdoors15,GusseOutdoors16]

    const Guestpool = [GussePoll1,GussePoll2,GussePoll3,GussePoll4,GussePoll5,]




    const openLightbox = (images, index) => {
        setLightboxImages(images);
        setCurrentImageIndex(index);
        setIsOpen(true);
    };
    
    const closeLightbox = () => setIsOpen(false);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % lightboxImages.length);
    

    return (
        <>
            <div className="flex flex-col w-full font-Poppins">
                <Header />

                <div className="md:w-[78%] w-[95%] pb-[30px] pt-[110px] 2xl:w-[1320px] gap-[20px] mt-[5px] flex-col md:flex mx-auto">
                    <div className="w-[100%] bg-[white]">
                        {/* Sticky Header */}
                        <div className="flex flex-col  h-fit fixed top-[50px] z-[20] bg-white w-[100%] 2xl:w-[1300] md:w-[78%]">

                            <div className="flex justify-between w-[100%] bg-white items-center mb-6">
                                <button className="flex items-center text-lg font-bold">Basalt Paradise Resort and Spa</button>
                            </div>

                            <div className="flex gap-3 mb-2  ml-[20px] md:ml-0 w-[100%] bg-white">
                                <div className="flex gap-3 mb-2 w-[100%] bg-white">
                                    <button
                                        className={`rounded-full text-[14px] px-4 py-2 ${photoTab === "property" ? "bg-[#fcaf17] text-[#fff]" : "border text-[#fcaf17] border-[#fcaf17] bg-white"}`}
                                        onClick={() => setPhotoTab("property")}
                                    >
                                        Property Photos
                                    </button>
                                    <button
                                        className={`rounded-full text-[14px] px-4 py-2 ${photoTab === "guest" ? "bg-[#fcaf17] text-[#fff]" : "border text-[#fcaf17] border-[#fcaf17] bg-white"}`}
                                        onClick={() => setPhotoTab("guest")}
                                    >
                                        Traveller Photos
                                    </button>
                                </div>

                            </div>
                        </div>


                        {photoTab === "property" ? (
                            <>


                                <div className="flex flex-col  h-fit fixed top-[155px] z-[20] bg-white 2xl:w-[1300px] md:w-[78%]">
                                    <div className="flex overflow-x-auto border-b w-[100%] bg-white border-gray-200 mb-6">

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Room" ? "basalt-text font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-[#392866]" : ""}`} onClick={() => scrollToSection(villaRef, "Room")}>Private Villa</button>

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "ZenRoom" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(zenRoomRef, "ZenRoom")}>Zen Room</button>

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Outdoors" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(outdoorsRef, "Outdoors")}>Outdoors</button>
                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Resturant" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(restaurantRef, "Resturant")}>Restaurant & Banquet</button>

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Play" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(playAreaRef, "Play")}>Kids Play Area</button>
{/* 
                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Garden" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(gardenRef, "Garden")}>Garden</button>

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Common" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(commonAreaRef, "Common")}>Common Area</button>

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTab === "Others" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection(othersRef, "Others")}>Others</button> */}

                                    </div>
                                </div>


                                {/* Content Sections */}
                                <div className="space-y-12 px-[20px] pt-[130px] w-[100%] bg-white">

                                    <div ref={villaRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Private Villa</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {villaRoom.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img onClick={() => openLightbox(villaRoom, index)} src={src} alt={`Villa ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={zenRoomRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Zen Room</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {roomImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} alt={`Zen Room ${index + 1}`}  onClick={() => openLightbox(roomImages, index)} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={outdoorsRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Outdoors</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {outdoorImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src}  onClick={() => openLightbox(outdoorImages, index)}  alt={`Outdoor ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={restaurantRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Restaurant & Banquet</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {restaurantImages.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(restaurantImages, index)} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div ref={playAreaRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6"> Kids Play Area</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {playArea.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img onClick={() => openLightbox(playArea, index)} src={src} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div ref={gardenRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Garden</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {garden.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(garden, index)}  alt={`Garden ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* <div ref={commonAreaRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Common Area</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {CommonArea.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(CommonArea, index)}  alt={`Common Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div> */}

                                    {/* <div ref={othersRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
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
                                    <div className="flex overflow-x-auto border-b w-[100%] bg-white border-gray-200 mb-6">

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTabGuest === "GuestRoom" ? "basalt-text font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-[#392866]" : ""}`} onClick={() => scrollToSection1(Guestroom, "GuestRoom")}>Room</button>

                                      

                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTabGuest === "GuestOutdoors" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection1(GuestoutdoorsRef, "GuestOutdoors")}>Outdoors</button>
                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTabGuest === "GuestResturant" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection1(GuessrestaurantRef, "GuestResturant")}>Resturant</button>



                                        <button className={`px-5 py-3 whitespace-nowrap relative ${activeTabGuest === "Guestpool" ? "text-blue-500 font-bold after:absolute after:bottom-[-1px] after:left-0 after:w-full after:h-[3px] after:bg-blue-500" : ""}`} onClick={() => scrollToSection1(GuestPool, "Guestpool")}>Pool</button>





                                    </div>
                                </div>


                                {/* Content Sections */}
                                <div className="space-y-12 px-[20px] pt-[130px] w-[100%] bg-white">

                                    <div ref={Guestroom} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Room</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {RoomGuest.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(RoomGuest, index)}  alt={`GuestRoom ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                

                                    <div ref={GuestoutdoorsRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Outdoors</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {GuestOutdoors.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(GuestOutdoors, index)} alt={`Outdoor ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div ref={GuessrestaurantRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Resturant</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {GuestResturant.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(GuestResturant, index)} alt={`Zen Room ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
        

                                    <div ref={GuestPool} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
                                        <h2 className="text-xl font-medium mb-6">Pool</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                            {Guestpool.map((src, index) => (
                                                <div key={index} className="rounded-lg overflow-hidden h-64">
                                                    <img src={src} onClick={() => openLightbox(Guestpool, index)} alt={`Play Area ${index + 1}`} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* <div ref={gardenRef} className="border-[1.5px] shadow-2 p-[20px] rounded-[10px]">
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
