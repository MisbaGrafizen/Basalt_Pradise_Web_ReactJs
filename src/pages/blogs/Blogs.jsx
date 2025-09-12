// import React, { useState, useRef, useEffect } from 'react'
// import pavagadhbannernew from "../../../public/10Blogs/all.png"
// import ahemdabad from "../../../public/lBlogdetailsImgae/covarsBlogs/WeekendsAhmd.jpg"
// import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
// import Hathnimatafall from "../../../public/10Blogs/Hathnimatafall.jpg"
// import sou from "../../../public/10Blogs/SOU.jpg"
// import spiritual from "../../../public/BlogsCoverS/NewBlogCover/SacredJourneys.png"
// import besttime from "../../../public/lBlogdetailsImgae/covarsBlogs/BestTime-cover1.jpg"
// import tours from "../../../public/BlogsCoverS/NewBlogCover/WhyCouple.png"
// import birdwatching from "../../../public/lBlogdetailsImgae/covarsBlogs/BirdWatching-cover.jpg"
// import general from "../../../public/10Blogs/general-view.jpg"
// import kada from "../../../public/10Blogs/kada-dam.jpg"

// import Cbeautifulitadel from "../../../public/10Blogs/beautiful-kevdi-monsoon.jpeg"
// import kaliniketang from "../../../public/10Blogs/kali-niketan-chhota-udepur-vadodara-hotels-1gdlmzq.avif"
// import Siddheshwar from "../../../public/10Blogs/Siddheshwar_Mahadev_Temple_at_Visavada_Gujarat_India_1523534041t.jpg"
// // import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
// import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import blog3 from "../../../public/Basalt/B7.jpg"
// import Header from '../../Component/header/Header'
// import Footer from '../../Component/footer/Footer'
// import { useNavigate } from 'react-router-dom'
// import { Button } from 'antd'
// import blog1cover from "../../../public/BlogsCoverS/basalt_blog1.jpg"
// import blog2cover from "../../../public/BlogsCoverS/basalt_blog2.jpg"
// import blog3cover from "../../../public/BlogsCoverS/basalt_blog3.jpg"
// import blog4cover from "../../../public/BlogsCoverS/basalt_blog4.jpg"
// import blog5cover from "../../../public/BlogsCoverS/basalt_blog5.jpg"
// import hidedenTemple from "../../../public/lBlogdetailsImgae/covarsBlogs/hiddentemple.jpg"
// import moonsoon from "../../../public/lBlogdetailsImgae/covarsBlogs/moonsoon.webp"
// import photogarphy from "../../../public/lBlogdetailsImgae/covarsBlogs/photographyreel.jpg"
// import onedaytrip from "../../../public/lBlogdetailsImgae/covarsBlogs/onedaytripplan.jpg"
// import champaner from "../../../public/lBlogdetailsImgae/covarsBlogs/champner-pavagadh.jpg"
// import budget from "../../../public/lBlogdetailsImgae/covarsBlogs/budgetTravel.jpeg"
// import LocalMarkets from "../../../public/lBlogdetailsImgae/LocalMarket/localmarketcover.avif"
// import bestsunrise from "../../../public/lBlogdetailsImgae/BestSunset/newcover.jpg"
// import hoetoreach from "../../../public/lBlogdetailsImgae/HowToReach/cover.jpeg"
// import waterfalls from "../../../public/lBlogdetailsImgae/TopWaterfalls/top.jpg"
// import local from "../../../public/lBlogdetailsImgae/LocalFood/LocalFoodCover.png"
// import magic from "../../../public/BlogsCoverS/NewBlogCover/1.png"
// import basalt from "../../../public/BlogsCoverS/NewBlogCover/2.png"
// import secret from "../../../public/BlogsCoverS/NewBlogCover/3.png"
// import architecture from "../../../public/BlogsCoverS/NewBlogCover/4.png"
// import hours from "../../../public/BlogsCoverS/NewBlogCover/5.png"
// import coffee from "../../../public/BlogsCoverS/NewBlogCover/6.png"
// import moonllight from "../../../public/BlogsCoverS/NewBlogCover/7.png"
// import nature from "../../../public/BlogsCoverS/NewBlogCover/8.png"
// import culinary from "../../../public/BlogsCoverS/NewBlogCover/Culinary.jpg"
// import whybasalat from "../../../public/BlogsCoverS/NewBlogCover/WhyBasaltParadise.jpg"
// import explore from "../../../public/BlogsCoverS/NewBlogCover/ExploringHalol.jpg"
// import rain from "../../../public/BlogsCoverS/NewBlogCover/FallinLove.jpg"
// import wellness from "../../../public/BlogsCoverS/rencet/Wellness.jpg"
// import stay from "../../../public/BlogsCoverS/rencet/Stayingwith.jpg"
// import day from "../../../public/BlogsCoverS/rencet/ADay.jpg"
// import weddings from "../../../public/BlogsCoverS/rencet/Monsoon.jpg"
// import basalt1 from "../../../public/BlogsCoverS/rencet/Basalt.jpg"
// import quite from "../../../public/BlogsCoverS/rencet/Quiet.jpg"
// import dark from "../../../public/BlogsCoverS/rencet/BasaltAfterDark.jpg"
// import wlidat from "../../../public/BlogsCoverS/rencet/Wild.jpg"
// import rainyretreat from "../../../public/BlogsCoverS/rencet/RainyRetreat.jpg"
// import thehidden from "../../../public/BlogsCoverS/rencet/TheHidden.jpg"
// import wellnesson from "../../../public/BlogsCoverS/rencet/Wellness.jpg"
// import colorof from "../../../public/BlogsCoverS/rencet/ColorofHalol.jpg"
// import unplg from "../../../public/BlogsCoverS/rencet/Unplugto.jpg"
// import offlineescape from "../../../public/BlogsCoverS/rencet/OfflineEscapes.jpg"
// import retreatritual from "../../../public/BlogsCoverS/rencet/RetreatRituals.jpg"
// import theart from "../../../public/BlogsCoverS/NewBlogCover/WellnesInTune.jpeg"
// import sunrisestory from "../../../public/BlogsCoverS/NewBlogCover/MorningStay.jpeg"
// import quitecorner from "../../../public/BlogsCoverS/NewBlogCover/FindYour.jpeg"
// import musictune from "../../../public/BlogsCoverS/NewBlogCover/HearTheMagic.jpeg"
// import seasonal from "../../../public/BlogsCoverS/NewBlogCover/CraftedIn.jpeg"
// import trail from "../../../public/BlogsCoverS/NewBlogCover/WalkThePaths.jpeg"
// import bpday from "../../../public/BlogsCoverS/NewBlogCover/AForest.jpeg"
// import stoe from "../../../public/BlogsCoverS/NewBlogCover/WellnessRooted.jpeg"
// import welltravel from "../../../public/BlogsCoverS/NewBlogCover/WhereHolidayFeels.jpeg"
// import playfulmusic from "../../../public/BlogsCoverS/NewBlogCover/TheArt.jpeg"


// import axios from "axios";



// import { time } from 'framer-motion'











// const blogdata = [
//     {
//         id: 1,
//         category: "10 Must-Visit Places Near Basalt Paradise",
//         route: "/blogs/must-visit-places-near-basalt-paradise", // Unique route
//         disatnce: "Discover the Hidden Gems Around Pavagadh & Halol!",
//         image: blog1cover,
//         date: "24-03-2025",
//         time: "06:34 PM",
//         tittle: "10 Must-Visit Places Near Basalt Paradise",
//         description: "Planning a short getaway to Halol & Pavagadh? Whether you're a history lover, nature enthusiast, or spiritual traveler...",
//         fullContent: "This is the full content for Blog 1..."
//     },
//     {
//         id: 2,
//         category: "Travel Tips & Guides",
//         route: "/travel-tips", // Unique route
//         disatnce: "Explore Travel Hacks for Your Trip!",
//         image: blog5cover,
//         date: "26-03-2025",
//         time: "06:42 PM",
//         tittle: "A Perfect 2-Day Itinerary for Halol & Pavagadh",
//         description: "Nestled in the scenic beauty of Pavagadh, Basalt Paradise is the perfect getaway for travelers seeking nature, history, and adventure...",
//         fullContent: "This is the full content for Blog 2..."
//     },

//     {
//         id: 3,
//         category: "Best Nature Spots Near Halol",
//         route: "/blogs/nature-spots-near-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: blog4cover,
//         date: "29-03-2025",
//         time: "06:10 PM",
//         tittle: "Escape Into Nature: Discover Halol’s Hidden Scenic Wonders!",
//         description: "Need a peaceful break from city life? The region around Halol & Pavagadh is filled with serene lakes, lush green landscapes, waterfalls, and wildlife sanctuaries—perfect for nature lovers! Here’s a guide to the best nature spots near Halol for a refreshing getaway.",
//         fullContent: "This is the full content for Blog 2..."
//     },
//     {
//         id: 4,
//         category: "Offbeat Destinations Near Halol",
//         route: "/blogs/offbeat-destinations-near-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: blog3cover,
//         date: "28-03-2025",
//         time: "06:10 PM",
//         tittle: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         description: "Tired of crowded tourist places? Looking for hidden gems that offer peace, nature, and unique experiences ? Halol, known for its historical significance and natural beauty, has some breathtaking offbeat destinations waiting to be explored.",
//         fullContent: "This is the full content for Blog 2..."
//     },
//     {
//         id: 5,
//         category: " Activities Near Basalt",
//         route: "/adventure-activities", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: blog2cover,
//         date: "31-03-2025",
//         time: "06:20 PM",
//         tittle: "Experience Thrill & Adventure Near Basalt Paradise – A Must-Try Guide!",
//         description: "If you’re visiting Basalt Paradise and looking for an adrenaline rush, you're in for a treat! The area around Halol & Pavagadh isn’t just about history and nature—it’s also packed with thrilling adventure activities. Whether you love trekking, water sports, or wildlife safaris, this guide will take you through the top adventure experiences you can’t miss!",
//         fullContent: "This is the full content for Blog 2..."
//     },
//     {
//         id: 6,
//         category: "Weekend from Ahmedabad",
//         route: "/blogs/weekend-getaway-from-ahmedabad", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: ahemdabad,
//         date: "02-04-2025",
//         time: "06:26 PM",
//         tittle: "Looking for a quick escape from Ahmedabad? Here’s why Basalt Paradise should be your next weekend destination!",
//         description: "Life in Ahmedabad is exciting, but let’s be honest—it can get hectic! If you’re craving a peaceful weekend away from the city’s hustle, Basalt Paradise in Halol is the perfect retreat. Just a few hours’ drive from Ahmedabad, this hidden gem offers lush greenery, historical sites, adventure activities, and a relaxing atmosphere.",
//         fullContent: ""
//     },
//     {
//         id: 7,
//         category: "Romantic Getaways Near Vadodara",
//         route: "/blogs/romantic-getaways-near-vadodara", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: tours,
//         date: "04-04-2025",
//         time: "06:14 PM",
//         tittle: "Romantic Getaways Near Vadodara – Why Couples Love Basalt Paradise",
//         description: "Looking for a peaceful and romantic escape away from the chaos of city life? Whether it’s an anniversary celebration, honeymoon, or just a spontaneous weekend trip, Basalt Paradise is fast becoming a favorite for couples in Gujarat seeking intimacy, luxury, and scenic charm — all within driving distance from Vadodara.",
//         fullContent: ""
//     },
//     {
//         id: 8,
//         category: "Spritual Trails Near Halol",
//         route: "/blogs/spiritual-trails-near-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: spiritual,
//         date: "07-04-2025",
//         time: "06:20 PM",
//         tittle: "Spritual Trails Near Halol – Exploring sacred spaces around basalt paradise",
//         description: "If you’re someone who finds peace in prayers, solace in temples, and joy in age-old spiritual traditions — then Halol and the surrounding Pavagadh region have a lot to offer. This serene land is home to sacred temples, ancient Jain monuments, peaceful mosques, and even a tranquil church — making it a truly soulful destination.",
//         fullContent: ""
//     },
//     {
//         id: 9,
//         category: "Best Time to Visit Pavagadh & Halol",
//         route: "/blogs/best-time-to-visit-pavagadh-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: besttime,
//         date: "09-04-2025",
//         time: "06:56 PM",
//         tittle: "Best Time to Visit Pavagadh & Halol: Weather guide for travelers",
//         description: "Planning a trip to the historic hills of Pavagadh or the scenic town of Halol? Great idea! Whether you're coming for the majestic Kalika Mata Temple, the rich heritage of Champaner, or a cozy escape at Basalt Paradise — timing matters.",
//         fullContent: ""
//     },
//     {
//         id: 10,
//         category: "Birdwatching & Eco-Tourism Near Halol",
//         route: "/blogs/birdwatching-and-eco-tourism-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: birdwatching,
//         date: "14-04-2025",
//         time: "07:05 PM",
//         tittle: "Birdwatching & Eco-tourism Near Halol: a nature lover’s escape",
//         description: "Tucked between rolling hills and lush green plains, the region is also a peaceful haven for migratory birds, rare flora, and eco-conscious travelers. Whether you're a nature photographer, a trekking enthusiast, or someone",
//         fullContent: ""
//     },
//     {
//         id: 11,
//         category: "Hidden Waterfalls Near Basalt Paradise",
//         route: "/blogs/hidden-waterfalls-near-basalt-paradise", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: tours,
//         date: "16-04-2025",
//         time: "07:02 PM",
//         tittle: "Hidden Waterfalls Near Basalt Paradise: a nature escape awaits",
//         description: "If the gentle sound of cascading water and the serenity of untouched nature excite you more than bustling tourist hubs, this one’s for you. The hills and forests around Pavagadh and Halol are home to some of Gujarat’s lesser-known gems — secret waterfalls that come alive during and post-monsoon.",
//         fullContent: ""
//     },

//     {
//         id: 12,
//         category: " Hidden Temples & Spiritual Sites Around Pavagadh",
//         route: "/blogs/hidden-temples-spiritual-sites-pavagadh", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: hidedenTemple,
//         date: "18-04-2025",
//         time: "07:08 PM",
//         tittle: "Hidden Temples & Spiritual Sites Around Pavagadh: A Divine Trail Less Traveled",
//         description: "Tucked within the vibrant hills and lush greenery of Pavagadh lies a spiritual trail that often goes unnoticed by hurried tourists. Beyond the grand Mahakali Temple and UNESCO-tagged Champaner complex, there’s a deeper soul to this region — a quiet world of ancient shrines, centuries-old steps, and peaceful sanctuaries that locals revere but few visitors know about.If you’re a seeker of silence, heritage, or offbeat experiences — this blog is your gateway. ",
//         fullContent: ""
//     },
//     {
//         id: 13,
//         category: "Why Monsoon Is the Best Season to Visit Pavagadh",
//         route: "/blogs/best-time-to-visit-pavagadh-monsoon-guide", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: moonsoon,
//         date: "21-04-2025",
//         time: "07:05 PM",
//         tittle: "Why Monsoon Is the Best Season to Visit Pavagadh: Nature, Mist & Magic",
//         description: "If you think Pavagadh is only meant for spiritual treks or scorching summer temple visits — think again. ",
//         fullContent: ""
//     },
//     {
//         id: 14,
//         category: "Top Photography Spots Near Halol",
//         route: "/blogs/photography-places-halol-instagram-reels",

//         image: photogarphy,
//         date: "28-04-2025",
//         time: "07:28 PM",
//         tittle: "Top Photography Spots Near Halol",
//         description: "If your camera roll isn’t filled with misty hills, ancient steps, and vibrant temple backdrops — have you even been to Halol and Pavagadh?",
//         fullContent: ""
//     },
//     {
//         id: 15,
//         category: "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
//         route: "/blogs/one-day-trip-pavagadh-from-vadodara-itinerary", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: onedaytrip,
//         date: "30-04-2025",
//         time: "07:14 PM",
//         tittle: "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
//         description: "Looking for a quick weekend getaway that’s rich in history, spirituality, and natural beauty — all within 1.5 hours of Vadodara?",
//         fullContent: ""
//     },
//     {
//         id: 16,
//         category: "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
//         route: "/blogs/history-of-champaner-pavagadh-heritage-guide", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: champaner,
//         date: "02-05-2025",
//         time: "07:23 PM",
//         tittle: "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
//         description: "Tucked in the Aravalli foothills near Halol lies a treasure trove of forgotten dynasties, Islamic architecture, Hindu shrines, and centuries-old stepwells — all waiting to be discovered.",
//         fullContent: ""
//     },
//     {
//         id: 17,
//         category: "Budget Travel Tips for Exploring Halol & Pavagadh",
//         route: "/blogs/budget-travel-halol-pavagadh-guide", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: budget,
//         date: "23-04-2025",
//         time: "07:28 PM",
//         tittle: "Budget Travel Tips for Exploring Halol & Pavagadh",
//         description: "Traveling doesn’t have to break the bank — especially if you’re exploring a place as enriching and scenic as Halol and Pavagadh. Whether you're a student, solo backpacker, or someone who just loves to make every rupee count, this guide will help you enjoy a rich experience without overspending.",
//         fullContent: ""

//     },

//     {
//         id: 18,
//         category: "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
//         route: "/blogs/local-markets-handicrafts-halol-shopping-guide", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: LocalMarkets,
//         date: "25-04-2025",
//         time: "05:43 PM",
//         tittle: "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
//         description: "Halol isn’t just about heritage and hills — it’s also a hidden haven for colorful bazaars, handcrafted goods, and authentic Gujarati culture. If you’re staying at Basalt Paradise or visiting nearby Pavagadh, don’t miss the chance to shop local and take a piece of the region home with you.Here’s your insider guide to shopping in and around Halol — affordably, responsibly, and like a true traveler.",
//         fullContent: ""

//     },
//     {
//         id: 19,
//         category: "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
//         route: "/blogs/best-sunrise-sunset-points-pavagadh-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: bestsunrise,
//         date: "28-04-2025",
//         time: "11:15 AM",
//         tittle: "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
//         description: "If you love golden hour light, dramatic landscapes, and peaceful moments with nature, the Pavagadh-Halol region is a dream come true. Whether you're a photographer, a romantic traveler, or just want a perfect start or end to your day, we’ve got you covered.Here are the most scenic sunrise and sunset viewpoints near Basalt Paradise — all tried and loved by locals.",
//         fullContent: ""

//     },
//     {
//         id: 20,
//         category: "How to Reach Pavagadh from Major Cities – Vadodara, Ahmedabad, Surat",
//         route: "/blogs/how-to-reach-pavagadh-vadodara-ahmedabad-surat", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: hoetoreach,
//         date: "30-04-2025",
//         time: "11:21 AM",
//         tittle: "How to Reach Pavagadh from Vadodara, Ahmedabad & Surat – Complete Travel Guide",
//         description: "Planning a getaway to the historic hills of Pavagadh and Halol? Whether you're coming for the Kalika Mata Temple, the UNESCO Champaner ruins, or a weekend at Basalt Paradise, this travel guide makes your journey stress-free.  Here’s how to reach Pavagadh from Gujarat’s biggest cities — including travel tips, routes, and local transit options.",
//         fullContent: ""

//     },
//     {
//         id: 21,
//         category: "Top Waterfalls Near Halol to Explore This Monsoon",
//         route: "/blogs/waterfalls-near-halol-monsoon-travel", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: waterfalls,
//         date: "03-05-2025",
//         time: "06:30 PM",
//         tittle: " Top Waterfalls Near Halol to Explore This Monsoon",
//         description: "The Pavagadh region isn’t just about temples and history — it transforms into a lush green paradise during monsoon. If you’re planning a visit to Halol between June and September, don’t miss out on these seasonal gems: stunning waterfalls just a short ride or trek away from Basalt Paradise.Whether you're a weekend hiker, nature lover, or Instagram explorer, here are the best waterfalls near Halol for the perfect rainy-day escape.",
//         fullContent: ""

//     },
//     {
//         id: 22,
//         category: "Local Food Guide: What to Eat in Halol & Around Pavagadh",
//         route: "/blogs/local-food-guide-halol-pavagadh", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: local,
//         date: "07-05-2025",
//         time: "06:30 PM",
//         tittle: " Local Food Guide: What to Eat in Halol & Around Pavagadh",
//         description: "When you're exploring the scenic hills of Pavagadh or the ancient UNESCO city of Champaner, your journey isn’t complete without indulging in the local flavors of Gujarat. From traditional thalis to spicy farsan, this food guide will take your taste buds on a journey just as rewarding as the destination.Here’s what (and where) to eat in and around Halol and Pavagadh.",
//         fullContent: ""

//     },
//     {
//         id: 23,
//         category: "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
//         route: "/blogs/basalt-paradise-has-the-most-magical", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: magic,
//         date: "10-05-2025",
//         time: "11:06 AM",
//         tittle: "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
//         description: "There’s something strangely hypnotic about sunsets at Basalt Paradise. Maybe it's the way the sky blushes in soft pinks and golds. Or how the light hits the jagged basalt cliffs just right, making them glow as if they were alive. Ask any guest, and they’ll tell you the same thing: sunsets here feel different.But why? What makes the golden hour at Basalt Paradise more magical than anywhere else?Let’s dig into the beautiful blend of science and nature that makes this daily show unforgettable.",
//         fullContent: ""

//     },
//     {
//         id: 24,
//         category: "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
//         route: "/blogs/stories-from-has-the-people", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: basalt,
//         date: "13-05-2025",
//         time: "11:03 AM",
//         tittle: "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
//         description: "Most people come to Basalt Paradise for the views. The cliffs, the ocean, the golden sunsets. But there’s something else here—something you won’t find in guidebooks or Instagram stories.",
//         fullContent: ""

//     },
//     {
//         id: 25,
//         category: "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
//         route: "/blogs/what-you’ll-discover-on-our-hidden", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: secret,
//         date: "16-05-2025",
//         time: "10:03 AM",
//         tittle: "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
//         description: "At first glance, the tide pools near Basalt Paradise might look like nothing more than shallow puddles in the rocks, left behind by the retreating sea. But take a closer look—and a whole hidden world begins to stir.Tiny fish dart between crevices. Sea anemones open and close like underwater flowers. Crabs scuttle sideways, half-camouflaged against the basalt. It’s quiet, intimate, and alive. And for those who slow down enough to notice, it’s one of the most magical experiences Basalt Paradise has to offer.",
//         fullContent: ""

//     },
//     {
//         id: 26,
//         category: "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
//         route: "/blogs/architecture-that-makes-basalt-paradise-unforgettable", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: architecture,
//         date: "16-05-2025",
//         time: "10:03 AM",
//         tittle: "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
//         description: "There are places that impress you the moment you arrive—and then there are places that slowly reveal themselves, detail by detail, until you realize you’re standing inside a story.Basalt Paradise is the latter.From the curves of the roofline that mimic the waves, to the cool, quiet hush of natural stone underfoot—every element here is intentional. Not just built, but designed to blend, breathe, and belong.This isn’t just a resort. It’s architecture with soul.",
//         fullContent: ""

//     },
//     {
//         id: 27,
//         category: "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
//         route: "/blogs/the-ultimate-weekend-itinerary", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: hours,
//         date: "19-05-2025",
//         time: "10:45 AM",
//         tittle: "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
//         description: "You’ve booked your escape. The calendar is blocked. The suitcase is (almost) packed. But what should you actually do once you arrive at Basalt Paradise?You could let the ocean breeze decide—or you could follow our handpicked 72-hour itinerary, crafted for those who want a perfect balance of adventure, rest, flavor, and soul.This isn’t just a schedule. It’s a weekend you’ll remember for a long, long time.",
//         fullContent: ""

//     },
//     {
//         id: 28,
//         category: "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
//         route: "/blogs/local-brews-you’ll-only", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: coffee,
//         date: "22-05-2025",
//         time: "06:15 PM",
//         tittle: "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
//         description: "There’s coffee—and then there’s coffee at Basalt Paradise. It’s not just a drink here; it’s a ritual. A slow, sensory moment woven into the rhythm of the resort. Whether you're perched on a cliffside deck watching the morning mist rise or sipping under a banyan tree as the breeze moves through your hair—coffee tastes different when it’s brewed in a place like this.But it’s not just about the view. At Basalt Paradise, we take our beans as seriously as we take our sunsets. Let’s take you through the most memorable brews—and the breathtaking spots you’ll want to savor them in.",
//         fullContent: ""

//     },
//     {
//         id: 29,
//         category: "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
//         route: "/blogs/what-makes-nighttime-basalt", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: moonllight,
//         date: "26-05-2025",
//         time: "06:35 PM",
//         tittle: "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
//         description: "When the sun sets at Basalt Paradise, the day doesn’t end—it simply changes rhythm.The heat softens. The ocean hushes. And a different kind of beauty rises with the moon.This isn’t nightlife in the loud, neon sense. It’s quieter. Dreamier. The kind of night that feels like a secret whispered just to you.Here’s why nighttime at Basalt Paradise is not to be missed—and might just become your favorite part of the day.",
//         fullContent: ""
//     },
//     {
//         id: 30,
//         category: "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
//         route: "/blogs/basalt-paradise-balances-nature", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: nature,
//         date: "29-05-2025",
//         time: "11:15 AM",
//         tittle: "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
//         description: "Luxury often conjures up images of opulence, excess, and escape. But at Basalt Paradise, we believe true luxury means living well without taking too much—from nature, from culture, or from tomorrow.We’re part retreat, part responsibility. A place where the earth is treated with as much reverence as our guests. And every detail—from your villa’s stonework to the soap in your shower—has been chosen with care, conscience, and a deep respect for the land that holds us.This is what eco-luxury looks like when it's done not as a trend, but as a truth.",
//         fullContent: ""
//     },
//     {
//         id: 31,
//         category: "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
//         route: "/blogs/culinary-journey-basalt-paradise", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: culinary,
//         date: "31-05-2025",
//         time: "06:03 PM",
//         tittle: "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
//         description: "Tucked between the basalt-rich landscapes of Halol and the golden horizons that frame every sunset, Basalt Paradise is more than a luxurious escape—it’s a sensory experience. And if there’s one thing our guests remember long after their stay, it’s the food.Welcome to our kitchen, where farm-to-table philosophy meets luxury—and where every ingredient tells a local story.",
//         fullContent: ""
//     },
//     {
//         id: 32,
//         category: "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
//         route: "/blogs/basalt-paradise-best-resort", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: whybasalat,
//         date: "03-06-2025",
//         time: "06:20 PM",
//         tittle: "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
//         description: "There are places you visit—and then there are places you celebrate. At Basalt Paradise, we believe in creating unforgettable memories, not just offering a stay. Whether it’s a dreamy anniversary, a surprise birthday bash, an intimate proposal, or even a soulful wedding by the hills, our resort is where special moments come alive.Set amidst the tranquil landscapes of Halol and just a short drive from Vadodara, we offer the perfect blend of luxury, privacy, and personalization—making us the go-to [resort for celebrations Vadodara] has come to love.",
//         fullContent: ""
//     },
//     {
//         id: 33,
//         category: "Exploring Halol: The Best Day Trips from Basalt Paradise",
//         route: "/blogs/exploring-halol-the-best", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: explore,
//         date: "03-06-2025",
//         time: "11:10 AM",
//         tittle: "Exploring Halol: The Best Day Trips from Basalt Paradise",
//         description: "When you stay at Basalt Paradise, you're not just indulging in luxury—you're stepping into the heart of Gujarat’s heritage and natural beauty. Our serene resort in Halol is perfectly positioned for discovering nearby gems—from ancient forts and spiritual shrines to misty waterfalls and wildlife sanctuaries.Here’s your curated guide to the best day trips from Halol, complete with accurate distances and insider tips.",
//         fullContent: ""
//     },
//     {
//         id: 34,
//         category: "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
//         route: "/blogs/rain-or-shine-what-makes-monsoons", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: rain,
//         date: "05-06-2025",
//         time: "11:30 AM",
//         tittle: "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
//         description: "The monsoon in Gujarat has its own rhythm—a slow, poetic unfolding of rain-kissed mornings, misty hills, and vibrant green landscapes. At Basalt Paradise, the rains don’t dampen the experience—they elevate it. Whether you’re watching the clouds drift lazily over the hills or sipping masala chai under a thatched canopy, the monsoon becomes more than just weather—it becomes a feeling.",
//         fullContent: ""
//     },
//     {
//         id: 35,
//         category: "Wellness by Nature: How Basalt Paradise Nurtures Mind, Body & Soul",
//         route: "/blogs/wellness-by-nature-how-basalt", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: wellness,
//         date: "09-06-2025",
//         time: "11:42 AM",
//         tittle: "Wellness by Nature: How Basalt Paradise Nurtures Mind, Body & Soul",
//         description: "In today’s fast-paced world, the most luxurious thing we can offer ourselves is stillness—a quiet breath, a deeper connection, a place to simply be. Tucked in the basalt-kissed hills of Halol, Basalt Paradise is not just a resort. It’s a retreat for the soul—where wellness is not a product, but a way of living.Whether you're escaping burnout or just craving balance, this is where the journey inward begins.",
//         fullContent: ""
//     },
//     {
//         id: 36,
//         category: "Staying with Style: What Makes Our Villas So Unique",
//         route: "/blogs/staying-with-style-what-makes", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: stay,
//         date: "12-06-2025",
//         time: "06:00 PM",
//         tittle: "Staying with Style: What Makes Our Villas So Unique",
//         description: "A great vacation isn't just about where you go—it's about where you stay. At Basalt Paradise, our villas are more than just rooms. They are private sanctuaries crafted with thoughtful design, natural elegance, and an eye for detail. Whether you’re planning a romantic escape, a solo reset, or a quiet family holiday, our villas give you space to unwind in style and reconnect—with nature, with loved ones, and with yourself.Here’s what sets our villas apart—and why so many guests say their stay feels like home, only better.",
//         fullContent: ""
//     },
//     {
//         id: 37,
//         category: "A Day in the Life at Basalt Paradise: From Sunrise to Starlight",
//         route: "/blogs/day-in-the-life-at-basalt", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: day,
//         date: "16-06-2025",
//         time: "06:20 PM",
//         tittle: "A Day in the Life at Basalt Paradise: From Sunrise to Starlight",
//         description: "Some places are meant to be seen. Basalt Paradise is meant to be felt. From the first golden light of sunrise to the starry silence of midnight, each moment at our resort flows into the next with an ease that only nature and thoughtful design can create.If you’ve ever wondered what a full day here looks like, consider this your guide to slowing down, tuning in, and experiencing a day of mindful luxury in Halol.",
//         fullContent: ""
//     },
//     {
//         id: 38,
//         category: "Monsoon Weddings at Basalt Paradise: The Dreamy Celebration You Didn’t Know You Needed",
//         route: "/blogs/monsoon-weddings-at-basalt-paradise", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: weddings,
//         date: "18-06-2025",
//         time: "06:40 PM",
//         tittle: "Monsoon Weddings at Basalt Paradise: The Dreamy Celebration You Didn’t Know You Needed",
//         description: "For couples who crave intimacy, emotion, and a little magic, a monsoon wedding at Basalt Paradise isn’t just a ceremony—it’s an experience. While many rush to book spring or winter dates, those who choose the monsoon season discover something rare: a celebration wrapped in romance, nature, and spontaneity.Think: mist-draped cliffs, floral mandaps soaked in earthy petrichor, and vows whispered to the rhythm of rain.Welcome to the monsoon wedding you didn’t know you were dreaming of.",
//         fullContent: ""
//     },
//     {
//         id: 39,
//         category: "Basalt Paradise for Families: Why Kids (and Parents) Love It Here",
//         route: "/blogs/basalt-paradise-for-families", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: basalt1,
//         date: "20-06-2025",
//         time: "11:10 PM",
//         tittle: "At Basalt Paradise, we understand that a great family vacation is one where everyone feels taken care of—from toddlers to teens, and especially tired parents. Our resort isn’t just peaceful, it’s playful. It’s not just luxurious, it’s thoughtfully designed for families who want to bond, explore, and unwind together.Whether you’re planning a short weekend or a full week away from city noise, here's why Basalt Paradise is one of the best.",
//         fullContent: ""
//     },
//        {
//         id: 40,
//         category: "Quiet Mornings & Mountain Mists: Waking Up at Basalt Paradise",
//         route: "/blogs/quiet-mornings-mountain-mists-waking", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: quite,
//         date: "23-06-2025",
//         time: "11:40 AM",
//         tittle: "Quiet Mornings & Mountain Mists: Waking Up at Basalt Paradise",
//         description: "There’s a special kind of peace that only early mornings can offer—the kind where time seems to pause, the air feels softer, and the world hasn’t quite started spinning at full speed. At Basalt Paradise, those quiet mornings aren’t just moments… they’re memories waiting to be made.Whether you’re a morning person or not, here, sunrise has a way of gently inviting you to experience its magic.",
//         fullContent: ""
//     },
//       {
//         id: 41,
//         category: "Basalt Paradise After Dark: How the Resort Glows When the Day Ends",
//         route: "/blogs/basalt-paradise-after-dark", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: dark,
//         date: "26-06-2025",
//         time: "11:00 AM",
//         tittle: "Basalt Paradise After Dark: How the Resort Glows When the Day Ends",
//         description: "If mornings at Basalt Paradise are a gentle awakening, then nights are a slow, soulful exhale.As the sun dips behind the hills and the sky trades gold for indigo, something magical happens here. The resort doesn’t go quiet — it softens. It glows. It begins to breathe in a whole new rhythm.Here, after dark isn’t about switching off. It’s about tuning in—to yourself, to nature, and to a kind of peace that only arrives with moonlight.",
//         fullContent: ""
//     },
//     {
//         id: 42,
//         category: "Wild at Halol: Discovering the Local Flora & Fauna Around the Resort",
//         route: "/blogs/wild-at-halol-discovering", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: wlidat,
//         date: "26-06-2025",
//         time: "06:28 PM",
//         tittle: "Wild at Halol: Discovering the Local Flora & Fauna Around the Resort",
//         description: "When the skies open up and the first raindrops fall on the earth, something magical begins at Basalt Paradise. The dry greens turn lush, the air turns fragrant, and time seems to slow—inviting you to pause, breathe, and sink into comfort.This isn’t just another resort during monsoon. It’s a cocoon. A cozy escape. A place where the rain doesn’t interrupt your plans—it becomes the plan.",
//         fullContent: ""
//     },
//     {
//         id: 43,
//         category: "Rainy Retreat: Cozy Monsoon Moments at Basalt Paradise",
//         route: "/blogs/rainy-cozy-monsoon-moments", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: rainyretreat,
//         date: "30-06-2025",
//         time: "06:15 PM",
//         tittle: "Rainy Retreat: Cozy Monsoon Moments at Basalt Paradise",
//         description: "You might come to Basalt Paradise for peace and luxury—but what stays with you long after your trip is the wild heart of Halol that pulses all around.Here, nature is not a backdrop—it’s the main character. The moment you step beyond your villa, you’re greeted not by walls and Wi-Fi, but by chirps, rustles, fluttering wings, and towering trees that have stood for decades.This is a sanctuary for the soul—and for the senses.",
//         fullContent: ""
//     },
//     {
//         id: 44,
//         category: "The Hidden Corners: Five Quiet Spots at Basalt Paradise You Didn’t Know Existed",
//         route: "/blogs/the-hidden-corners-five", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: thehidden,
//         date: "03-07-2025",
//         time: "11:09 AM",
//         tittle: "The Hidden Corners: Five Quiet Spots at Basalt Paradise You Didn’t Know Existed",
//         description: "Not all treasures at Basalt Paradise come with signage or a spotlight. Some are hidden in plain sight—waiting patiently to be stumbled upon by the wanderer, the dreamer, the introvert, or the romantically curious.This blog isn’t about the infinity pool or the spa or the villas. This one’s about the secret places. The ones where time slows down, silence feels like a friend, and nature wraps you in quiet companionship.Here are five hidden corners of Basalt Paradise that many guests discover by chance—and fall in love with for life.",
//         fullContent: ""
//     },
//      {
//         id: 45,
//         category: "Wellness on the Go: Quick Spa and Relaxation Rituals Guests Can Do Anywhere",
//         route: "/blogs/wellness-on-the-go", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: wellnesson,
//         date: "05-07-2025",
//         time: "11:37 AM",
//         tittle: "Wellness on the Go: Quick Spa and Relaxation Rituals Guests Can Do Anywhere",
//         description: "There’s something deeply rejuvenating about a stay at Basalt Paradise—the still air, the gentle hum of nature, the grounding quiet that settles in without effort. But here’s the best part: the feeling doesn’t have to stay behind when you leave.We believe wellness should travel with you. Inspired by the spa experiences, nature rhythms, and soul-soothing moments at the resort, here are easy, portable rituals you can take back home to reset anytime, anywhere.",
//         fullContent: ""
//     },
//      {
//         id: 46,
//         category: "Color of Halol: Painting the Resort Through Seasonal Hues",
//         route: "/blogs/color-of-halol-painting", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: colorof,
//         date: "07-07-2025",
//         time: "11:48 AM",
//         tittle: "Color of Halol: Painting the Resort Through Seasonal Hues",
//         description: "Some places are best understood through feeling.Basalt Paradise is one of them.But if we had to describe it in color, we’d let the seasons do the talking.Here in Halol, the year doesn't just pass in days—it moves in strokes of color, each one tinting the mood, the light, the memories made in every corner of the resort.Let’s walk you through it—season by season, shade by shade.",
//         fullContent: ""
//     },
//     {
//         id: 46,
//         category: "Unplug to Reconnect: How Basalt Paradise Makes Digital Detox Feel Effortless",
//         route: "/blogs/unplug-to-reconnect-how", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: unplg,
//         date: "09-07-2025",
//         time: "11:12 AM",
//         tittle: "Unplug to Reconnect: How Basalt Paradise Makes Digital Detox Feel Effortless",
//         description: "It starts the moment you arrive.The phone signal begins to flicker. Notifications slow down. The buzz of city life fades into birdsong and rustling leaves. And for the first time in what feels like forever—you exhale. Deeply.At Basalt Paradise, digital detox isn’t forced. It’s just the natural rhythm of things. The world here runs on sunrise glows, afternoon naps, and slow meals under open skies. And without even realizing it, you find yourself letting go… of your phone, your inbox, your to-do list.Here’s how this unplugged escape helps guests reconnect—with nature, with loved ones, and most importantly, with themselves.",
//         fullContent: ""
//     },
//      {
//         id: 47,
//         category: "Offline Escapes: A Day Without Wi-Fi at Basalt Paradise",
//         route: "/blogs/offline-escapes-a-day", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: offlineescape,
//         date: "11-07-2025",
//         time: "06:17 PM",
//         tittle: "Offline Escapes: A Day Without Wi‑Fi at Basalt Paradise",
//         description: "Imagine a day where your fingers aren’t endlessly scrolling, but wrapped around a warm mug of chai… where eyes aren’t glued to screens, but wide open to misty views and drifting clouds… where silence isn’t awkward, but peaceful.At Basalt Paradise, this kind of day isn’t unusual.It’s just a regular Tuesday.Welcome to the kind of luxury we’ve forgotten—the freedom to be truly offline.",
//         fullContent: ""
//     },
//     {
//         id: 48,
//         category: "Retreat Rituals: How Guests Create Personal Traditions at Basalt Paradise",
//         route: "/blogs/retreat-rituals-how-guests", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: retreatritual,
//         date: "14-07-2025",
//         time: "06:38 PM",
//         tittle: "Retreat Rituals: How Guests Create Personal Traditions at Basalt Paradise",
//         description: "Some memories stick not because they were loud or grand, but because they were quiet, repeated, and deeply personal.At Basalt Paradise, many guests come for rest—but leave with something far more lasting: their own little rituals.Routines. Rhythms. Moments they look forward to every single day they’re here. And sometimes… even long after they return home.Let’s walk you through how these personal traditions take root—and why they matter.",
//         fullContent: ""
//     },
//      {
//         id: 49,
//         category: "Sunrise Stories: Guests Share Their Morning Moments at Basalt Paradise",
//         route: "/blogs/sunrise-stories-guests-share", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: sunrisestory,
//         date: "07-08-2025",
//         time: "06:12 PM",
//         tittle: "Sunrise Stories: Guests Share Their Morning Moments at Basalt Paradise",
//         description: "There’s something magical about mornings at Basalt Paradise. Long before the world outside stirs into motion, the resort awakens with gentle whispers of nature—mist curling over the hills, dew glistening on leaves, and a calmness that makes every breath feel fuller. Guests often say it’s these early hours that linger in memory long after their stay ends.In this blog, we share heartfelt stories of mornings as seen through the eyes of our guests—moments that capture the soul of this resort in Halol near Vadodara.",
//         fullContent: ""
//     },
//       {
//         id: 50,
//         category: "The Artisans of Halol: Handmade Gifts to Take Home from Basalt Paradise",
//         route: "/blogs/the-artisans-of-halol", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: theart,
//         date: "10-08-2025",
//         time: "06:48 PM",
//         tittle: "The Artisans of Halol: Handmade Gifts to Take Home from Basalt Paradise",
//         description: "When you visit Basalt Paradise, the memories you make don’t have to end at check-out. Nestled in the cultural heart of Halol near Vadodara, the resort is surrounded by talented local artisans whose crafts carry centuries of tradition. From handwoven textiles to earthy stone pottery, these treasures allow guests to take a piece of Halol’s soul back home.",
//         fullContent: ""
//     },
//      {
//         id: 51,
//         category: "Seasonal Spa Rituals: Treatments Inspired by Halol’s Changing Weather",
//         route: "/blogs/seasonal-spa-rituals-treatments", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: seasonal,
//         date: "13-08-2025",
//         time: "11:02 AM",
//         tittle: "Seasonal Spa Rituals: Treatments Inspired by Halol’s Changing Weather",
//         description: "At Basalt Paradise, relaxation isn’t just about a massage or a facial—it’s about aligning with the rhythm of nature. Nestled in the tranquil setting of Halol near Vadodara, the resort’s spa draws inspiration from the changing seasons, creating rituals that soothe both body and mind. Guests often say these treatments feel like nature itself wrapping them in comfort.",
//         fullContent: ""
//     },
//      {
//         id: 52,
//         category: "Basalt by Day, Stars by Night: How Light Shapes Your Senses at the Resort",
//         route: "/blogs/basalt-by-day-stars", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: bpday,
//         date: "16-08-2025",
//         time: "11:27 AM",
//         tittle: "Basalt by Day, Stars by Night: How Light Shapes Your Senses at the Resort",
//         description: "At Basalt Paradise in Halol near Vadodara, time isn’t measured by clocks—it’s painted by light. From the very first morning rays spilling across the pool to the soft shimmer of starlight that blankets the villas, every hour at the resort feels different. Guests often describe their stay as “living inside a moving painting,” where the canvas changes with the sun and moon.",
//         fullContent: ""
//     },
//       {
//         id: 53,
//         category: "Music in the Air: How Natural Sounds Become Part of Your Stay",
//         route: "/blogs/music-in-air-how", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: musictune,
//         date: "20-08-2025",
//         time: "06:02 PM",
//         tittle: "Music in the Air: How Natural Sounds Become Part of Your Stay",
//         description: "At Basalt Paradise in Halol near Vadodara, the atmosphere is more than just visual beauty—it’s an experience you can hear. The resort has its own rhythm, shaped not only by design but by the music of nature. Guests often find themselves pausing, eyes closed, just to listen. From bamboo groves swaying to the quiet laughter of a flowing stream, every corner hums with an ambient soundtrack that lingers long after you leave.",
//         fullContent: ""
//     },
//     {
//         id: 54,
//         category: "Trail & Tales: Short Walks That Reveal Halol’s Hidden Stories",
//         route: "/blogs/trail-tales-short-walks", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: trail,
//         date: "23-08-2025",
//         time: "06:38 PM",
//         tittle: "Trail & Tales: Short Walks That Reveal Halol’s Hidden Stories",
//         description: "Every destination has secrets, and in Halol, Gujarat, those secrets often live along its trails. At Basalt Paradise resort, guests don’t just walk for leisure—they wander into stories. Each step reveals a layer of culture, history, or folklore that gives the land its soul. Whether it’s a shaded path lined with ancient trees or a winding route toward forgotten ruins, these short walks become more than exercise—they become time travel.",
//         fullContent: ""
//     },
//      {
//         id: 55,
//         category: "The Healing Power of Stone: How Basalt Shapes Our Well-Being",
//         route: "/blogs/healing-power-of-stone", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: stoe,
//         date: "26-08-2025",
//         time: "06:13 PM",
//         tittle: "The Healing Power of Stone: How Basalt Shapes Our Well-Being",
//         description: "At first glance, Basalt Paradise is named for the rugged stone that defines its architecture. But basalt is more than a building material—it’s an element of balance, grounding, and calm. Across cultures and centuries, stone has carried symbolic and practical healing power, and here in Halol, basalt continues that story.",
//         fullContent: ""
//     },
//      {
//         id: 56,
//         category: "Quiet Corners: The Best Spots to Read, Reflect & Really Be",
//         route: "/blogs/quiet-corners-the-best", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: quitecorner,
//         date: "29-08-2025",
//         time: "11:13 AM",
//         tittle: "Quiet Corners: The Best Spots to Read, Reflect & Really Be",
//         description: "At Basalt Paradise, peace isn’t something you look for—it finds you. The resort is designed with thoughtful nooks and shaded spaces that invite you to pause, breathe, and reconnect. Whether you carry a book, a journal, or simply your own thoughts, these quiet corners are where moments of stillness turn into cherished memories.",
//         fullContent: ""
//     },
//      {
//         id: 57,
//         category: "Well-Traveled, Well-Rested: Guest Tips for Packing Light and Loving Your Stay",
//         route: "/blogs/well-traveled-well-rested", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: playfulmusic,
//         date: "31-08-2025",
//         time: "11:39 AM",
//         tittle: "Well-Traveled, Well-Rested: Guest Tips for Packing Light and Loving Your Stay",
//         description: "At Basalt Paradise, guests often arrive with bags full of clothes, shoes, and “just in case” extras. But what they discover quickly is this: the lighter you pack, the deeper you enjoy. Travel isn’t about carrying everything you own—it’s about giving yourself the space to rest, move freely, and collect memories instead of luggage tags.Here are a few guest-inspired tips for packing light and loving your stay.",
//         fullContent: ""
//     },
//      {
//         id: 58,
//         category: "Playful Souls: Rediscovering Childhood Joy at Basalt Paradise",
//         route: "/blogs/playful-souls-rediscovering-childhood", // Unique route
//         // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
//         image: welltravel,
//         date: "15-08-2025",
//         time: "11:28 AM",
//         tittle: "Playful Souls: Rediscovering Childhood Joy at Basalt Paradise",
//         description: "When was the last time you truly felt like a child again? Not just relaxed, but carefree—laughing until your stomach hurt, chasing a game for no reason, or lying on the grass watching clouds drift by. At Basalt Paradise, guests often find themselves rediscovering this forgotten side of life. It’s not just a resort; it’s a reminder that joy lives in the simplest of moments.",
//         fullContent: ""
//     },
// ];



// export default function Blogs() {
//     const navigate = useNavigate();
//     const [selectedCategory, setSelectedCategory] = useState("All");
//     const [isOpen, setIsOpen] = useState(false);
//     const [currentIndex, setCurrentIndex] = useState(null);
//     const [blogs, setBlogs] = useState([]);
//     const [activeTitle, setActiveTitle] = useState(null);

//     const buttons = [
//   "All",
//   "Playful Souls: Rediscovering Childhood Joy at Basalt Paradise",
//   "Well-Traveled, Well-Rested: Guest Tips for Packing Light and Loving Your Stay",
//   "Quiet Corners: The Best Spots to Read, Reflect & Really Be",
//   "The Healing Power of Stone: How Basalt Shapes Our Well-Being",
//   "Trail & Tales: Short Walks That Reveal Halol’s Hidden Stories",
//   "Music in the Air: How Natural Sounds Become Part of Your Stay",
//   "Basalt by Day, Stars by Night: How Light Shapes Your Senses at the Resort",
//   "Seasonal Spa Rituals: Treatments Inspired by Halol’s Changing Weather",
//   "The Artisans of Halol: Handmade Gifts to Take Home from Basalt Paradise",
//   "Sunrise Stories: Guests Share Their Morning Moments at Basalt Paradise",
//   "Retreat Rituals: How Guests Create Personal Traditions at Basalt Paradise",
//   "Offline Escapes: A Day Without Wi-Fi at Basalt Paradise",
//   "Unplug to Reconnect: How Basalt Paradise Makes Digital Detox Feel Effortless",
//   "Color of Halol: Painting the Resort Through Seasonal Hues",
//   "Wellness on the Go: Quick Spa and Relaxation Rituals Guests Can Do Anywhere",
//   "The Hidden Corners: Five Quiet Spots at Basalt Paradise You Didn’t Know Existed",
//   "Rainy Retreat: Cozy Monsoon Moments at Basalt Paradise",
//   "Wild at Halol: Discovering the Local Flora & Fauna Around the Resort",
//   "Basalt Paradise After Dark: How the Resort Glows When the Day Ends",
//   "Quiet Mornings & Mountain Mists: Waking Up at Basalt Paradise",
//   "Basalt Paradise for Families: Why Kids (and Parents) Love It Here",
//   "Monsoon Weddings at Basalt Paradise: The Dreamy Celebration You Didn’t Know You Needed",
//   "A Day in the Life at Basalt Paradise: From Sunrise to Starlight",
//   "Staying with Style: What Makes Our Villas So Unique",
//   "Wellness by Nature: How Basalt Paradise Nurtures Mind, Body & Soul",
//   "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
//   "Exploring Halol: The Best Day Trips from Basalt Paradise",
//   "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
//   "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
//   "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
//   "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
//   "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
//   "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
//   "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
//   "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
//   "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
//   "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
//   "Local Food Guide: What to Eat in Halol & Around Pavagadh",
//   "Top Waterfalls Near Halol to Explore This Monsoon",
//   "How to Reach Pavagadh from Major Cities – Vadodara, Ahmedabad, Surat",
//   "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
//   "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
//   "Budget Travel Tips for Exploring Halol & Pavagadh",
//   "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
//   "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
//   "Top Photography Spots Near Halol",
//   "Why Monsoon Is the Best Season to Visit Pavagadh",
//   "Hidden Temples & Spiritual Sites Around Pavagadh",
//   "Birdwatching & Eco-Tourism Near Halol",
//   "Best Time to Visit Pavagadh & Halol",
//   "Spritual Trails Near Halol",
//   "Romantic Getaways Near Vadodara",
//   "Weekend from Ahmedabad",
//   "Activities Near Basalt",
//   "Best Nature Spots Near Halol",
//   "Offbeat Destinations Near Halol",
//   "Travel Tips & Guides",
//   "10 Must-Visit Places Near Basalt Paradise",
// ];

//     const handleClick = (category) => {
//         setSelectedCategory(category);
//     };

//     const handleTitleClick = (category) => {
//         setActiveTitle(category);
//     };


//     const handleBlogDetails = (route) => {
//         navigate(route);
//     };

//     // Helper to convert blog date+time to timestamp
// const toMillis = (blog) => {
//   if (blog.date) {
//     const [dd, mm, yyyy] = blog.date.split("-").map(Number);
//     let hh = 0, min = 0;

//     if (blog.time) {
//       const [timePart, ampmRaw] = blog.time.split(" ");
//       const [h, m] = timePart.split(":").map(Number);
//       const ampm = (ampmRaw || "").toUpperCase();
//       hh = h % 12 + (ampm === "PM" ? 12 : 0);
//       if (ampm === "AM" && h === 12) hh = 0; // midnight fix
//       min = m || 0;
//     }

//     return new Date(yyyy, mm - 1, dd, hh, min).getTime();
//   }
//   return 0;
// };

// // Always sort blogdata by newest date first
// const sortedBlogData = [...blogdata].sort((a, b) => toMillis(b) - toMillis(a));

// console.log('sortedBlogData', sortedBlogData)

// const filteredBlogs =
//   selectedCategory === "All"
//     ? sortedBlogData
//     : sortedBlogData.filter((blog) => blog.category === selectedCategory);

//     console.log('filteredBlogs', filteredBlogs)


//     // const filteredBlogs =
//     //     selectedCategory === "All"
//     //         ? blogdata
//     //         : blogdata.filter(blog => blog.category === selectedCategory);

//     const openLightbox = (index) => {
//         setCurrentIndex(index);
//         setIsOpen(true);
//     };

//     const closeLightbox = () => {
//         setIsOpen(false);
//         setCurrentIndex(null);
//     };

//     const prevImage = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? filteredBlogs.length - 1 : prevIndex - 1
//         );
//     };

//     const nextImage = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === filteredBlogs.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const scrollRef = useRef(null);
//     let isDragging = false;
//     let startX;
//     let scrollLeft;

//     const formatDateTime = (isoDateStr) => {
//         const date = new Date(isoDateStr);
//         const options = {
//             day: '2-digit',
//             month: '2-digit',
//             year: 'numeric',
//             hour: '2-digit',
//             minute: '2-digit',
//             hour12: true,
//         };

//         return date
//             .toLocaleString('en-GB', options)
//             .replace(/\//g, '-')
//             .replace(',', ' –')
//             .toUpperCase();
//     };


//     useEffect(() => {
//         const fetchBlogs = async () => {
//             try {
//                 const response = await axios.get('http://localhost:3000/api/v2/hotel/admin/blog');
//                 setBlogs(response.data?.careerData);
//             } catch (error) {
//                 console.error("Failed to fetch blogs:", error);
//             }
//         };

//         fetchBlogs();
//     }, []);

//     useEffect(() => {
//         const slider = scrollRef.current;

//         const mouseDownHandler = (e) => {
//             isDragging = true;
//             slider.classList.add('cursor-grabbing');
//             startX = e.pageX - slider.offsetLeft;
//             scrollLeft = slider.scrollLeft;
//         };

//         const mouseLeaveHandler = () => {
//             isDragging = false;
//             slider.classList.remove('cursor-grabbing');
//         };

//         const mouseUpHandler = () => {
//             isDragging = false;
//             slider.classList.remove('cursor-grabbing');
//         };

//         const mouseMoveHandler = (e) => {
//             if (!isDragging) return;
//             e.preventDefault();
//             const x = e.pageX - slider.offsetLeft;
//             const walk = (x - startX) * 2; // scroll speed
//             slider.scrollLeft = scrollLeft - walk;
//         };

//         slider.addEventListener('mousedown', mouseDownHandler);
//         slider.addEventListener('mouseleave', mouseLeaveHandler);
//         slider.addEventListener('mouseup', mouseUpHandler);
//         slider.addEventListener('mousemove', mouseMoveHandler);

//         return () => {
//             slider.removeEventListener('mousedown', mouseDownHandler);
//             slider.removeEventListener('mouseleave', mouseLeaveHandler);
//             slider.removeEventListener('mouseup', mouseUpHandler);
//             slider.removeEventListener('mousemove', mouseMoveHandler);
//         };
//     }, []);

//     const categoryBlogs = activeTitle
//         ? blogs.filter((blog) => blog.title === activeTitle)
//         : blogs;

//     const titles = [...new Set(blogs?.map(blog => blog.title))];


//     console.log('activeTitle', blogs)


//     return (
//         <>


//             <Header />
//             <section className=' flex  mb-[40px] flex-col gap-[30px] 2xl:w-[1300px]  relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]  '>
//                 <div className='md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%] overflow-x-auto gap-[10px]' ref={scrollRef}>
//                     {/* {titles?.map((buttonName) => (
//                         <button
//                             key={buttonName}
//                             onClick={() => handleTitleClick(buttonName)}
//                             className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px] flex-shrink-0
//                       ${activeTitle === buttonName
//                                     ? "bg-[#fcaf17] text-white border-[#fcaf17]"
//                                     : "bg-transparent text-[#fcaf17] border-[#fcaf17]"
//                                 }`}
//                         >
//                             {buttonName}
//                         </button>
//                     ))} */}


//                     {/* old Buttons   */}

//                     {buttons.map((buttonName) => (
//                         <button
//                             key={buttonName}
//                             onClick={() => handleClick(buttonName)}
//                             className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px] flex-shrink-0
//                       ${selectedCategory === buttonName
//                                     ? "bg-[#fcaf17] text-white border-[#fcaf17]"
//                                     : "bg-transparent text-[#fcaf17] border-[#fcaf17]"
//                                 }`}
//                         >
//                             {buttonName}
//                         </button>
//                     ))}
//                 </div>
//                 <div className=' flex w-[100%] gap-[20px] justify-between'>


//                     <div className=' flex-col gap-[20px]  flex md:w-[74%]'>



//                         {/* {categoryBlogs?.map((blog, index) => (
//                             <div key={blog.id} className=' flex flex-col gap-[10px] '>
//                                 <img
//                                     onClick={() => openLightbox(index)}
//                                     className='cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
//                                     src={blog.image}
//                                     alt="Blogs"
//                                 />
//                                 <div className=' px-[10px] text-[14px] items-center  flex text-[#7442ff] gap-[10px]'>
//                                     <i class="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
//                                     {formatDateTime(blog.createdAt)}
//                                 </div>
//                                 <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
//                                     <div className=' flex w-[100%] gap-[10px] flex-col '>
//                                         <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#7442ff] '>

//                                             <p className=' gap-[10px] mt-[2px] flex'>
//                                                 <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
//                                             </p>
//                                         </div>
//                                         <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
//                                            <div
//   className="prose prose-sm md:prose-base prose-headings:font-semibold prose-p:mb-4"
//   dangerouslySetInnerHTML={{ __html: blog.description }}
// ></div>

//                                         </div>
//                                     </div>
//                                     <button className='flex gap-[10px] cursor-pointer pr-[10px] text-[#7442ff] w-[150px] items-center'
//                                       onClick={() => navigate(`/blogs/main/${blog._id}`)}>
//                                         <p className='hover:underline'>Read More</p>
//                                         <i className="fa-regular fa-arrow-right"></i>
//                                     </button>
//                                 </div>
//                                 <span className=' flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed '>

//                                 </span>
//                             </div>
//                         ))} */}

//                         {/* 0ld Blogsss */}
//                         {filteredBlogs.map((blog, index) => (
//                             <div key={blog.id} className=' flex flex-col gap-[10px] '>
//                                 <img
//                                     onClick={() => openLightbox(index)}
//                                     className='cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
//                                     src={blog.image}
//                                     alt="Blogs"
//                                 />
//                                 <div className=' px-[10px] text-[14px] items-center  flex text-[#7442ff] gap-[10px]'>
//                                     <i class="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
//                                     {blog.date} - {blog.time}
//                                 </div>
//                                 <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
//                                     <div className=' flex w-[100%] gap-[10px] flex-col '>
//                                         <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#7442ff] '>

//                                             <p className=' gap-[10px] mt-[2px] flex'>
//                                                 <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
//                                             </p>
//                                         </div>
//                                         <h1 className=' px-[10px] font-[500] text-[19px]'>
//                                             {blog.tittle}
//                                         </h1>
//                                         <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
//                                             <p>
//                                                 {blog.description}
//                                             </p>
//                                         </div>
//                                     </div>
//                                     <button className='flex gap-[10px] cursor-pointer pr-[10px] text-[#7442ff] w-[150px] items-center' onClick={() => handleBlogDetails(blog.route)}>
//                                         <p className='hover:underline'>Read More</p>
//                                         <i className="fa-regular fa-arrow-right"></i>
//                                     </button>
//                                 </div>
//                                 <span className=' flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed '>

//                                 </span>
//                             </div>
//                         ))}
//                     </div>

//                     <div className=" h-fit  max-w-[300px] right-[10%] border-[1.1px]  md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
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
//                 </div>
//                 {isOpen && currentIndex !== null && (
//                     <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
//                         <button
//                             className="absolute top-5 right-5 text-white hover:text-gray-300"
//                             onClick={closeLightbox}
//                         >
//                             <X className="w-6 h-6" />
//                         </button>
//                         <button
//                             className="absolute left-5 text-white hover:text-gray-300"
//                             onClick={prevImage}
//                         >
//                             <ChevronLeft className="w-8 h-8" />
//                         </button>
//                         <button
//                             className="absolute right-5 text-white hover:text-gray-300"
//                             onClick={nextImage}
//                         >
//                             <ChevronRight className="w-8 h-8" />
//                         </button>
//                         <img
//                             src={filteredBlogs[currentIndex].image}
//                             alt={`Blog ${currentIndex + 1}`}
//                             className="max-h-full max-w-[80%] rounded-md object-contain"
//                         />
//                     </div>
//                 )}


//             </section>
//             <Footer />
//         </>
//     )
// }


import React, { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";

const API_BASE = "https://server.grafizen.in/api/v2/hotel/admin";

const getId = (b) =>
    typeof b?._id === "string" ? b._id : b?._id?.$oid || b?.id || "";

const getCreatedAt = (b) => {
    if (typeof b?.createdAt === "string") return new Date(b.createdAt);
    if (b?.createdAt?.$date) return new Date(b.createdAt.$date);
    return null;

};

// Get plain preview text (strips tags & headings)
const getPreviewText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = typeof html === "string" ? html : "";
    // don’t repeat the page title in preview
    div.querySelectorAll("h1,h2,h3").forEach((n) => n.remove());
    return (div.textContent || "").replace(/\s+/g, " ").trim();
};


const slugify = (str) =>
    (str || "blog")
        .toString()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 120);

const transformPreviewHtml = (html) => {
    const src = (typeof html === "string" ? html : "") || "";
    const div = document.createElement("div");
    div.innerHTML = src;

    div.querySelectorAll("h1").forEach((n) => n.remove());

    const add = (el, classes) =>
        classes.split(" ").forEach((c) => c && el.classList.add(c));

    div.querySelectorAll("h2").forEach((el) =>
        add(el, "!text-[#7442ff] !font-[600] !leading-snug !mt-1 !mb-1 !text-[22px] md:!text-[26px]")
    );
    div.querySelectorAll("h3").forEach((el) =>
        add(el, "!text-[#7442ff] !font-[600] !leading-snug !mt-1 !mb-1 !text-[18px] md:!text-[20px]")
    );

    div.querySelectorAll("p").forEach((p) => {
        const stripped = p.innerHTML.replace(/<br\s*\/?>/gi, "").trim();
        const txt = (p.textContent || "").trim();
        if (!stripped && !txt) {
            p.remove();
            return;
        }
        add(p, "!my-2 !leading-relaxed");
    });

    div.querySelectorAll("ul,ol").forEach((list) => add(list, "!my-2"));
    div.querySelectorAll("li").forEach((li) => add(li, "!my-1"));

    div.innerHTML = div.innerHTML.replace(/(?:<br\s*\/?>\s*)+$/i, "");

    const blocks = Array.from(
        div.querySelectorAll("p,h2,h3,ul,ol,blockquote,figure,img")
    );
    const last = [...blocks]
        .reverse()
        .find((el) => (el.textContent || "").trim() || el.tagName === "IMG");
    if (last) add(last, "!mb-0");

    return div.innerHTML;
};




const extractTitleFromHtml = (html) => {
    if (!html || typeof html !== "string") return "Blog";
    const div = document.createElement("div");
    div.innerHTML = html;
    const h = div.querySelector("h1,h2,h3");
    if (h?.textContent) return h.textContent.trim();
    const text = (div.textContent || "").trim();
    return text ? text.slice(0, 90) : "Blog";
};

const normalize = (b) => {
    const id = getId(b);
    const createdAt = getCreatedAt(b);
    const description = typeof b?.description === "string" ? b.description : "";
    const subblogs = typeof b?.subblogs === "string" ? b.subblogs : "";

    // derive H1 from description (fallback: subblogs/text)
    const h1 = extractTitleFromHtml(description || subblogs);
    const slug = slugify(h1 || id); // always produce a slug

    return {
        id,
        image: b?.image || "",
        title: h1,
        h1,
        slug,
        description,
        subblogs,
        category: b?.category || "All",
        createdAt,
        date: b?.date || null,
        time: b?.time || null,
        route: `/blogs/${slug}`,
    };
};


const formatDateTimeUi = (dt, fallbackDate, fallbackTime) => {
    if (dt instanceof Date && !isNaN(dt)) {
        return dt
            .toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
            })
            .replace(/\//g, "-")
            .replace(",", " –")
            .toUpperCase();
    }
    return `${fallbackDate || ""} ${fallbackTime || ""}`.trim();
};

export default function Blogs() {
    const navigate = useNavigate();

    // UI state
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [selectedTitle, setSelectedTitle] = useState("All");

    // Data state
    const [allBlogs, setAllBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    // get the first <h1> text from an HTML string
    const getH1FromHtml = (html) => {
        if (!html || typeof html !== "string") return "";
        const div = document.createElement("div");
        div.innerHTML = html;
        const h1 = div.querySelector("h1");
        return h1?.textContent?.trim() || "";
    };

    // derive the "button title" for a blog: <h1> from description, else subblogs, else fallback
    const getBlogH1 = (blog) =>
        getH1FromHtml(blog.description) ||
        getH1FromHtml(blog.subblogs) ||
        blog.title ||
        "Untitled";

    // Fetch list
    useEffect(() => {
        let mounted = true;
        (async () => {
            try {
                const res = await axios.get(`${API_BASE}/blog`);
                const raw = res.data?.careerData || res.data || [];
                const normalized = (Array.isArray(raw) ? raw : []).map(normalize);
                if (mounted) setAllBlogs(normalized);
            } catch (e) {
                console.error("Failed to fetch blogs:", e);
                if (mounted) setAllBlogs([]);
            } finally {
                if (mounted) setLoading(false);
            }
        })();
        return () => {
            mounted = false;
        };
    }, []);

    // Derived lists
    const sortedBlogs = useMemo(() => {
        return [...allBlogs].sort((a, b) => {
            const ta = a.createdAt ? a.createdAt.getTime() : 0;
            const tb = b.createdAt ? b.createdAt.getTime() : 0;
            return tb - ta;
        });
    }, [allBlogs]);

    const titleButtons = useMemo(() => {
        const set = new Set(sortedBlogs.map((b) => b.h1).filter(Boolean));
        return ["All", ...Array.from(set)];
    }, [sortedBlogs]);

    const visibleBlogs = useMemo(() => {
        return selectedTitle === "All"
            ? sortedBlogs
            : sortedBlogs.filter((b) => b.h1 === selectedTitle);
    }, [sortedBlogs, selectedTitle]);

    const popularBlogs = useMemo(() => {
        const seen = new Set();
        const out = [];
        for (const b of sortedBlogs) {
            const h1 = b.h1;
            if (!h1 || seen.has(h1)) continue;
            out.push({ h1, blog: b });
            seen.add(h1);
            if (out.length >= 15) break; // cap at 15
        }
        return out;
    }, [sortedBlogs]);


    // Handlers
    const handleClick = (title) => setSelectedTitle(title);
    const handleBlogDetails = (blog) => {
        navigate(`/blogs/${blog.slug}`, { state: { blogId: blog.id, blog } });
    };


    // Lightbox
    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };
    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };
    const prevImage = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? visibleBlogs.length - 1 : prev - 1
        );
    };
    const nextImage = () => {
        setCurrentIndex((prev) =>
            prev === visibleBlogs.length - 1 ? 0 : prev + 1
        );
    };

    // Drag-to-scroll for chip row (optional)
    const scrollRef = useRef(null);
    useEffect(() => {
        const slider = scrollRef.current;
        if (!slider) return;
        let dragging = false;
        let startX = 0;
        let startLeft = 0;

        const down = (e) => {
            dragging = true;
            slider.classList.add("cursor-grabbing");
            startX = e.pageX - slider.offsetLeft;
            startLeft = slider.scrollLeft;
        };
        const leave = () => {
            dragging = false;
            slider.classList.remove("cursor-grabbing");
        };
        const up = () => {
            dragging = false;
            slider.classList.remove("cursor-grabbing");
        };
        const move = (e) => {
            if (!dragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = startLeft - walk;
        };

        slider.addEventListener("mousedown", down);
        slider.addEventListener("mouseleave", leave);
        slider.addEventListener("mouseup", up);
        slider.addEventListener("mousemove", move);
        return () => {
            slider.removeEventListener("mousedown", down);
            slider.removeEventListener("mouseleave", leave);
            slider.removeEventListener("mouseup", up);
            slider.removeEventListener("mousemove", move);
        };
    }, []);

    return (
        <>
            <Header />

            <section className="flex mb-[40px] flex-col gap-[30px] 2xl:w-[1300px] relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]">
                {/* Categories */}
                <div
                    className="md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%] overflow-x-auto gap-[10px]"
                    ref={scrollRef}
                >
                    {titleButtons.map((c) => (
                        <button
                            key={c}
                            onClick={() => handleClick(c)}
                            className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px] flex-shrink-0 ${selectedTitle === c
                                ? "bg-[#fcaf17] text-white border-[#fcaf17]"
                                : "bg-transparent text-[#fcaf17] border-[#fcaf17]"
                                }`}
                        >
                            {c}
                        </button>
                    ))}
                </div>

                <div className="select-none flex w-[100%] gap-[20px] justify-between">
                    {/* LEFT: list */}
                    <div className="flex-col gap-[20px] flex md:w-[74%]">
                        {loading ? (
                            <div className="p-6 text-[#7442ff]">Loading blogs…</div>
                        ) : visibleBlogs.length === 0 ? (
                            <div className="p-6 text-[#7442ff]">No blogs found.</div>
                        ) : (
                            visibleBlogs.map((blog, index) => (
                                <div key={blog.id} className="flex flex-col gap-[10px]">
                                    {blog.image ? (
                                        <img
                                            onClick={() => openLightbox(index)}
                                            className="cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]"
                                            src={blog.image}
                                            alt={blog.title}
                                        />
                                    ) : null}

                                    <div className="px-[10px] text-[14px] items-center flex text-[#7442ff] gap-[10px]">
                                        <i className="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
                                        {formatDateTimeUi(blog.createdAt, blog.date, blog.time)}
                                    </div>

                                    <div className="flex w-[100%] md:flex-row flex-col justify-between md:items-end gap-[14px]">
                                        <div className="flex w-[100%] gap-[10px] flex-col">
                                            <h1 className="px-[10px] font-[500] text-[19px]">
                                                {blog.h1 || blog.title}
                                            </h1>

                                            <div className="text-[15px] flex text-justify px-[10px] md:w-[98%]">
                                                {/* description is HTML from your API */}
                                                <p
                                                    className="text-[16px] leading-relaxed m-0 flex-1"
                                                    style={{
                                                        display: "-webkit-box",
                                                        WebkitBoxOrient: "vertical",
                                                        WebkitLineClamp: 2,     // 2-line ellipsis
                                                        overflow: "hidden",
                                                    }}
                                                >
                                                    {getPreviewText(blog.description || blog.subblogs)}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            className="flex gap-[10px] cursor-pointer pr-[10px] text-[#7442ff] w-[150px] items-center"
                                            onClick={() => handleBlogDetails(blog)}
                                        >
                                            <p className="hover:underline">Read More</p>
                                            <i className="fa-regular fa-arrow-right"></i>
                                        </button>
                                    </div>

                                    <span className="flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed" />
                                </div>
                            ))
                        )}
                    </div>

                    {/* RIGHT: simple sidebar */}
                    <div className="h-fit max-w-[300px] right-[10%] border-[1.1px] md:flex hidden border-[#fcaf17] bg-white shadow p-[16px] rounded-[10px]">
                        <div className="w-full">
                            <div className="flex justify-between border-[1px] p-[10px] rounded-[8px]">
                                <input
                                    type="text"
                                    className="outline-none flex-1"
                                    placeholder="Search"
                                    disabled
                                />
                                <button className="search-btn pr-[10px]" type="submit">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http:www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M15.682 14.318L12.025 10.662C12.722 9.719 13.111 8.563 13.111 7.333C13.111 3.868 10.244 1 6.778 1C3.312 1 0.444 3.868 0.444 7.333C0.444 10.798 3.312 13.666 6.778 13.666C8.008 13.666 9.163 13.277 10.106 12.579L13.762 16.236C13.975 16.448 14.311 16.448 14.524 16.236L15.681 15.08C15.894 14.868 15.894 14.533 15.682 14.318ZM6.778 11.889C4.347 11.889 2.222 9.763 2.222 7.333C2.222 4.902 4.347 2.777 6.778 2.777C9.208 2.777 11.333 4.902 11.333 7.333C11.333 9.763 9.208 11.889 6.778 11.889Z"
                                            fill="#fcaf17"
                                        ></path>
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-6">
                                <h5 className="font-[600] text-[19px] py-[10px] text-[#000000]">
                                    Popular Blogs
                                </h5>
                                <ul className="flex flex-col gap-[8px] text-[14px] text-[#5c5b5b]">
                                    {popularBlogs.length === 0 ? (
                                        <li>Nothing yet.</li>
                                    ) : (
                                        popularBlogs.map(({ h1, blog }) => (
                                            <li key={blog.id} className="flex items-start">
                                                <i className="fa-sharp text-[5px] mt-[8px] mr-[10px] text-[#fcaf17] fa-solid fa-circle"></i>
                                                <button
                                                    type="button"
                                                    onClick={() => handleBlogDetails(blog)}
                                                    className="text-left hover:underline w-full pr-2"
                                                    title={h1}
                                                >
                                                    {/* 2-line clamp + ellipsis (works even without Tailwind line-clamp plugin) */}
                                                    <span
                                                        className="block max-w-[230px] line-clamp-2"
                                                        style={{
                                                            display: "-webkit-box",
                                                            WebkitLineClamp: 2,
                                                            WebkitBoxOrient: "vertical",
                                                            overflow: "hidden",
                                                        }}
                                                    >
                                                        {h1}
                                                    </span>
                                                </button>
                                            </li>
                                        ))
                                    )}
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {isOpen && currentIndex !== null && (
                    <div className="fixed inset-0 z-[7000] flex items-center justify-center bg-black/80 p-4">
                        <button
                            className="absolute top-5 right-5 text-white hover:text-gray-300"
                            onClick={closeLightbox}
                        >
                            <X className="w-6 h-6" />
                        </button>
                        <button
                            className="absolute left-5 text-white hover:text-gray-300"
                            onClick={prevImage}
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            className="absolute right-5 text-white hover:text-gray-300"
                            onClick={nextImage}
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>
                        <img
                            src={visibleBlogs[currentIndex].image}
                            alt={`Blog ${currentIndex + 1}`}
                            className="max-h-full max-w-[80%] rounded-md object-contain"
                        />
                    </div>
                )}
            </section>

            <Footer />
        </>
    );
}
