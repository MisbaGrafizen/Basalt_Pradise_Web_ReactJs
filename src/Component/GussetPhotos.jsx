import React from 'react'
import guse1 from "../../public/myTripGallery/gussetPhotos/room1.avif"
import guse2 from "../../public/myTripGallery/gussetPhotos/room2.avif"
import guse3 from "../../public/myTripGallery/gussetPhotos/outdoors1.avif"
import guse4 from "../../public/myTripGallery/gussetPhotos/outdoors2.avif"
import guse5 from "../../public/myTripGallery/gussetPhotos/outdoors3.avif"
import { useNavigate } from 'react-router-dom'





export default function GussetPhotos() {

    const photos = [
        {
            id: 1,
            src: guse1,
            alt: "Room with colorful floor mats",
        },
        {
            id: 2,
            src: guse2,
            alt: "Bedroom with stone wall",
        },
        {
            id: 3,
            src: guse3,
            alt: "Bedroom with stone wall view",
        },
        {
            id: 4,
            src: guse4,
            alt: "Swimming pool with mountain view",
        },
        {
            id: 5,
            src: guse5,
            alt: "Additional guest photo",
            overlay: "+29 Guest Photos",
        },
    ]

    const navigate = useNavigate()
    const GuestHandle =()=>{
        navigate("/gallery", { state: { openGuest: true } })



    }
    return (
        <>


            <div className="bg-white  shadow-2  p-[15px] md:p-[20px] rounded-xl font-Poppins  md:w-[78%] w-[90%] mx-auto">
                <h2 className="text-2xl font-bold mb-4 text-black">Photos by Guests</h2>

                <div className="flex gap-3 overflow-x-auto scrollbar-hide">
                    {photos.map((photo) => (
                        <div key={photo.id} className="relative  cursor-pointer min-w-[240px] h-40 rounded-lg overflow-hidden" onClick={GuestHandle}>
                            <div className="w-full h-full relative">
                                <img
                                    src={photo.src || "/placeholder.svg"}
                                    alt={photo.alt}
                                    className="w-full h-full object-cover rounded-lg"
                                />

                                {photo.overlay && (
                                    <div className="absolute cursor-pointer inset-0 flex items-center justify-center bg-black/40 text-white font-bold text-lg rounded-lg">
                                        {photo.overlay}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
