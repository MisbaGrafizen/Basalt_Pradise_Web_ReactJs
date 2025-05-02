// import React from 'react'

// import { useState, useEffect, useRef } from "react"
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// import chatgpt from "../../../public/myTripGallery/ChatGPTicon1.avif"


// export default function LocationMap() {
//     const [showNearbyProperties, setShowNearbyProperties] = useState(false)
//     const [transportExpanded, setTransportExpanded] = useState(false)
//     const [keyLandmarksExpanded, setKeyLandmarksExpanded] = useState(true)
//     const [searchValue, setSearchValue] = useState("")
//     const mapRef = useRef(null)

//     // Mock function to initialize map - in a real app, you would use Google Maps API
//     useEffect(() => {
//         // This would be replaced with actual Google Maps initialization
//         console.log("Map initialized")

//         // Mock map initialization
//         if (mapRef.current) {
//             const mockMap = document.createElement("div")
//             mockMap.className = "w-full h-full bg-[#e8f0e8]"
//             mockMap.innerHTML = `
//           <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
//             This Hotel
//           </div>
//         `

//             // Clear previous content and append mock map
//             while (mapRef.current.firstChild) {
//                 mapRef.current.removeChild(mapRef.current.firstChild)
//             }
//             mapRef.current.appendChild(mockMap)
//         }
//     }, [])

//     const [landmarks, setLandmarks] = useState([
//         { name: "Champaner-Pavagadh Archaeological Park", type: "Tourist Attraction", distance: "10 Km", lat: 22.49, lng: 73.5, checked: false },

//         { name: "Champaner Road Junction", type: "Railway", distance: "15.5 Km", lat: 22.47, lng: 73.46, checked: false },
//     ]);

//     const toggleLandmark = (index) => {
//         const updated = [...landmarks];
//         updated[index].checked = !updated[index].checked;
//         setLandmarks(updated);
//     };

//     delete L.Icon.Default.prototype._getIconUrl;
//     L.Icon.Default.mergeOptions({
//         iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
//         iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
//         shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
//     });

//     const LandmarkMarkers = () => {
//         const map = useMap();
//         useEffect(() => {
//             const selected = landmarks.filter(l => l.checked);
//             if (selected.length > 0) {
//                 const last = selected[selected.length - 1];
//                 map.flyTo([last.lat, last.lng], 14); // Smooth fly to latest clicked
//             }
//         }, [landmarks, map]);

//         return (
//             <>
//                 {landmarks.map((landmark, index) => (
//                     landmark.checked && (
//                         <Marker key={index} position={[landmark.lat, landmark.lng]}>
//                             <Popup>
//                                 {landmark.name} <br /> {landmark.type}
//                             </Popup>
//                         </Marker>
//                     )
//                 ))}
//             </>
//         );
//     };

//     return (
//         <>


//             <div className=" md:w-[78%] w-[90%] mx-auto font-Poppins  border rounded-lg">
//                 <div className="bg-white rounded-lg shadow-sm md:p-6 p-4 mb-4">
//                     <h2 className="text-xl font-bold mb-4">Location</h2>

//                     <div className="flex items-center mb-4">
//                         <div className="w-6 h-6 mr-2 flex items-center justify-center">
//                             <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 viewBox="0 0 24 24"
//                                 fill="currentColor"
//                                 className="w-5 h-5 text-gray-500"
//                             >
//                                 <path
//                                     fillRule="evenodd"
//                                     d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
//                                     clipRule="evenodd"
//                                 />
//                             </svg>
//                         </div>
//                         <span className="text-gray-700">Location rated </span>
//                         <span className="text-blue-600 font-bold mx-1">4.8</span>
//                         <span className="text-gray-700">by guests</span>
//                     </div>

//                     <div className="border rounded-lg p-4 mb-2">
//                         <h3 className="font-bold mb-2">What guests said</h3>
//                         <div className="flex">
//                             <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3 flex-shrink-0">
//                           <img className=' flex w-[100%] ' src={chatgpt} />

//                             </div>
//                             <p className="text-gray-700 text-[12px]">
//                                 Guests consistently praised the property's excellent location, noting its proximity to major attractions
//                                 and the beautiful views it offered. Many reviews highlighted the ease of access and walkability, enhancing
//                                 the overall experience. Its inviting environment contributed to memorable stays.
//                             </p>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="relative bg-white rounded-lg shadow-sm  w-[100%] overflow-hidden">
//                     <div className="md:relative flex md:flex-row flex-col w-[100%]">
//                         {/* Map search and controls */}
//                         {/* <div className="absolute top-4 left-4  w-[400px] max-w-full">
//                             <div className="relative">
//                                 <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
//                                     <svg
//                                         className="w-4 h-4 text-gray-500"
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                                         />
//                                     </svg>
//                                 </div>
//                                 <input
//                                     type="text"
//                                     className="bg-white w-full pl-10 pr-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//                                     placeholder="Search distance from any location in Halol"
//                                     value={searchValue}
//                                     onChange={(e) => setSearchValue(e.target.value)}
//                                 />
//                             </div>

//                         </div> */}

//                         {/* Map container */}
//                         {/* <div className="h-[500px] w-full relative" ref={mapRef}>

//                             <div className="w-full h-full bg-[#e8f0e8]">

//                                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-2 py-1 rounded text-sm">
//                                     This Hotel
//                                 </div>
//                             </div>
//                         </div> */}


//                         <MapContainer center={[22.4989, 73.4647]} zoom={13} className="md:h-[500px] md:order-2  flex  order-1 h-[400px] w-full rounded-lg overflow-hidden">
//                             <TileLayer
//                                 attribution='&copy; OpenStreetMap contributors'
//                                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                             />
//                             <Marker position={[22.4989, 73.4647]}>
//                                 <Popup>Basalt Paradise</Popup>
//                             </Marker>

//                             {/* ✅ Dynamic Landmark Markers */}
//                             <LandmarkMarkers />
//                         </MapContainer>

//                         {/* Map controls */}




//                         {/* Key Landmarks panel */}
//                         <div className="w-[500px] max-w-full flex flex-col   md:order-2   order-1 bg-white rounded-md shadow-md">
//                             <div
//                                 className="flex justify-between items-center p-4 cursor-pointer"
//                                 onClick={() => setKeyLandmarksExpanded(!keyLandmarksExpanded)}
//                             >
//                                 <div className="flex items-center">
//                                     <svg
//                                         xmlns="http://www.w3.org/2000/svg"
//                                         className="h-6 w-6 text-blue-500 mr-2"
//                                         fill="none"
//                                         viewBox="0 0 24 24"
//                                         stroke="currentColor"
//                                     >
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                                         />
//                                         <path
//                                             strokeLinecap="round"
//                                             strokeLinejoin="round"
//                                             strokeWidth={2}
//                                             d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                                         />
//                                     </svg>
//                                     <h3 className="font-bold text-blue-500">Key Landmarks</h3>
//                                 </div>
//                                 <svg
//                                     xmlns="http://www.w3.org/2000/svg"
//                                     className={`h-5 w-5 text-blue-500 transform ${keyLandmarksExpanded ? "rotate-180" : ""}`}
//                                     fill="none"
//                                     viewBox="0 0 24 24"
//                                     stroke="currentColor"
//                                 >
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>

//                             {keyLandmarksExpanded && (
//                                 <div className="p-4 pt-0 border-t">
//                                     {landmarks.map((landmark, index) => (
//                                         <div key={index} className="flex items-start mb-1 pt-[10px] last:mb-0">
//                                             <input
//                                                 type="checkbox"
//                                                 className="mt-1 w-4 h-4 text-blue-600 rounded"
//                                                 checked={landmark.checked}
//                                                 onChange={() => toggleLandmark(index)}
//                                             />
//                                             <div className="ml-3 flex-1  ite">
//                                                 <div className="flex items-start">
//                                                     <div className="w-8 h-8 bg-blue-100 rounded-md flex items-center justify-center mr-3">
//                                                         <svg
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             className="h-5 w-5 text-blue-500"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                             stroke="currentColor"
//                                                         >
//                                                             <path
//                                                                 strokeLinecap="round"
//                                                                 strokeLinejoin="round"
//                                                                 strokeWidth={2}
//                                                                 d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
//                                                             />
//                                                         </svg>
//                                                     </div>
//                                                     <div className="flex-1">
//                                                         <div className="font-medium text-[13px]">{landmark.name}</div>
//                                                         <div className="text-[11px] text-gray-500">{landmark.type}</div>
//                                                     </div>
//                                                     <div className="flex items-center ml-[7px]">
//                                                         <span className="text-right text-[12px] font-medium">{landmark.distance}</span>
//                                                         <button className="ml-2 text-blue-500">
//                                                             <svg
//                                                                 xmlns="http://www.w3.org/2000/svg"
//                                                                 className="h-5 w-5"
//                                                                 fill="none"
//                                                                 viewBox="0 0 24 24"
//                                                                 stroke="currentColor"
//                                                             >
//                                                                 <path
//                                                                     strokeLinecap="round"
//                                                                     strokeLinejoin="round"
//                                                                     strokeWidth={2}
//                                                                     d="M17 8l4 4m0 0l-4 4m4-4H3"
//                                                                 />
//                                                             </svg>
//                                                         </button>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             )}
//                         </div>


//                         {/* Map attribution */}
//                         {/* <div className="absolute bottom-1 right-1 text-xs text-gray-500 bg-white bg-opacity-75 px-1 rounded">
//             <span>Keyboard shortcuts</span>
//             <span className="mx-2">|</span>
//             <span>Map data ©2025</span>
//             <span className="mx-2">|</span>
//             <span>Terms</span>
//             <span className="mx-2">|</span>
//             <span>Report a map error</span>
//           </div> */}
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }
import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import chatgpt from "../../../public/myTripGallery/ChatGPTicon1.avif";

// Basalt Paradise Coordinates
const BASE_LAT = 22.4989;
const BASE_LNG = 73.4647;

export default function LocationMap() {
  const [keyLandmarksExpanded, setKeyLandmarksExpanded] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const mapRef = useRef(null);

  const [landmarks, setLandmarks] = useState([
    {
      name: "Champaner-Pavagadh Archaeological Park",
      type: "Tourist Attraction",
      lat: 22.49,
      lng: 73.5,
      checked: false,
    },
    {
      name: "Champaner Road Junction",
      type: "Railway",
      lat: 22.47,
      lng: 73.46,
      checked: false,
    },
    {
      name: "Vadodara Airport",
      type: "Airport",
      lat: 22.3362,
      lng: 73.2266,
      checked: false,
    },
    {
      name: "Vadodara Railway Station",
      type: "Railway",
      lat: 22.3104,
      lng: 73.1806,
      checked: false,
    },
  ]);

  // Calculate distance between two points (Haversine formula)
  const getDistance = (lat1, lon1, lat2, lon2) => {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of earth in KM
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return (R * c).toFixed(1) + " Km";
  };

  const toggleLandmark = (index) => {
    const updated = [...landmarks];
    updated[index].checked = !updated[index].checked;
    setLandmarks(updated);
  };

  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconRetinaUrl:
      "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
    shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  });

  const LandmarkMarkers = () => {
    const map = useMap();
    useEffect(() => {
      const selected = landmarks.filter((l) => l.checked);
      if (selected.length > 0) {
        const last = selected[selected.length - 1];
        map.flyTo([last.lat, last.lng], 14);
      }
    }, [landmarks, map]);

    return (
      <>
        {landmarks.map(
          (landmark, index) =>
            landmark.checked && (
              <Marker key={index} position={[landmark.lat, landmark.lng]}>
                <Popup>
                  <strong>{landmark.name}</strong>
                  <br />
                  {landmark.type}
                </Popup>
              </Marker>
            )
        )}
      </>
    );
  };

  return (
    <div className="md:w-[78%] w-[90%] mx-auto font-Poppins border rounded-lg">
      <div className="bg-white rounded-lg shadow-sm md:p-6 p-4 mb-4">
        <h2 className="text-xl font-bold mb-2">Location</h2>
        <div className="flex items-center mb-4">
          <div className="w-6 h-6 mr-2 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5 text-gray-500"
            >
              <path
                fillRule="evenodd"
                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <span className="text-gray-700">Location rated </span>
          <span className="text-blue-600 font-bold mx-1">4.8</span>
          <span className="text-gray-700">by guests</span>
        </div>

        <div className="border rounded-lg p-4 mb-2">
          <h3 className="font-bold mb-2">What guests said</h3>
          <div className="flex">
            <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center mr-3">
              <img className="w-full" src={chatgpt} />
            </div>
            <p className="text-gray-700 text-sm">
              Guests consistently praised the property's excellent location and
              proximity to key spots like Baroda Airport, Railway, and
              Champaner-Pavagadh.
            </p>
          </div>
        </div>
      </div>

      <div className="relative bg-white rounded-lg shadow-sm w-full overflow-hidden">
        <div className="flex md:flex-row flex-col w-full">
          <MapContainer
            center={[BASE_LAT, BASE_LNG]}
            zoom={13}
            className="md:h-[500px] order-1 md:order-2 h-[400px] w-full rounded-lg overflow-hidden"
          >
            <TileLayer
              attribution="&copy; OpenStreetMap contributors"
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[BASE_LAT, BASE_LNG]}>
              <Popup>Basalt Paradise</Popup>
            </Marker>
            <LandmarkMarkers />
          </MapContainer>

          <div className="w-[500px] max-w-full flex flex-col order-2 md:order-1 bg-white rounded-md shadow-md">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => setKeyLandmarksExpanded(!keyLandmarksExpanded)}
            >
              <div className="flex items-center">
                <h3 className="font-bold text-blue-500">Key Landmarks</h3>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-5 w-5 text-blue-500 transform ${keyLandmarksExpanded ? "rotate-180" : ""
                  }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {keyLandmarksExpanded && (
              <div className="p-4 pt-0 border-t">
                {landmarks.map((landmark, index) => (
                  <label
                    key={index}
                    className="flex items-start mb-3 last:mb-0 pt-2"
                  >
                    <input
                      type="checkbox"
                      className="mt-1 w-4 h-4 text-blue-600"
                      checked={landmark.checked}
                      onChange={() => toggleLandmark(index)}
                    />
                    <div className="ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium text-sm">
                            {landmark.name}
                          </div>
                          <div className="text-xs text-gray-500">
                            {landmark.type}
                          </div>
                        </div>
                        <div className="text-sm font-medium text-gray-700">
                          {getDistance(BASE_LAT, BASE_LNG, landmark.lat, landmark.lng)}
                        </div>
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
