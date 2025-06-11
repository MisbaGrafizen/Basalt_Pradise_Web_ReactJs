import React, { useState, useRef, useEffect } from 'react'
import pavagadhbannernew from "../../../public/10Blogs/all.png"
import ahemdabad from "../../../public/lBlogdetailsImgae/covarsBlogs/WeekendsAhmd.jpg"
import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
import Hathnimatafall from "../../../public/10Blogs/Hathnimatafall.jpg"
import sou from "../../../public/10Blogs/SOU.jpg"
import spiritual from "../../../public/BlogsCoverS/NewBlogCover/SacredJourneys.png"
import besttime from "../../../public/lBlogdetailsImgae/covarsBlogs/BestTime-cover1.jpg"
import tours from "../../../public/BlogsCoverS/NewBlogCover/WhyCouple.png"
import birdwatching from "../../../public/lBlogdetailsImgae/covarsBlogs/BirdWatching-cover.jpg"
import general from "../../../public/10Blogs/general-view.jpg"
import kada from "../../../public/10Blogs/kada-dam.jpg"

import Cbeautifulitadel from "../../../public/10Blogs/beautiful-kevdi-monsoon.jpeg"
import kaliniketang from "../../../public/10Blogs/kali-niketan-chhota-udepur-vadodara-hotels-1gdlmzq.avif"
import Siddheshwar from "../../../public/10Blogs/Siddheshwar_Mahadev_Temple_at_Visavada_Gujarat_India_1523534041t.jpg"
// import Citadel from "../../../public/10Blogs/Citadel-sat-kaman-banner.jpg"
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import blog3 from "../../../public/Basalt/B7.jpg"
import Header from '../../Component/header/Header'
import Footer from '../../Component/footer/Footer'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import blog1cover from "../../../public/BlogsCoverS/basalt_blog1.jpg"
import blog2cover from "../../../public/BlogsCoverS/basalt_blog2.jpg"
import blog3cover from "../../../public/BlogsCoverS/basalt_blog3.jpg"
import blog4cover from "../../../public/BlogsCoverS/basalt_blog4.jpg"
import blog5cover from "../../../public/BlogsCoverS/basalt_blog5.jpg"
import hidedenTemple from "../../../public/lBlogdetailsImgae/covarsBlogs/hiddentemple.jpg"
import moonsoon from "../../../public/lBlogdetailsImgae/covarsBlogs/moonsoon.webp"
import photogarphy from "../../../public/lBlogdetailsImgae/covarsBlogs/photographyreel.jpg"
import onedaytrip from "../../../public/lBlogdetailsImgae/covarsBlogs/onedaytripplan.jpg"
import champaner from "../../../public/lBlogdetailsImgae/covarsBlogs/champner-pavagadh.jpg"
import budget from "../../../public/lBlogdetailsImgae/covarsBlogs/budgetTravel.jpeg"
import LocalMarkets from "../../../public/lBlogdetailsImgae/LocalMarket/localmarketcover.avif"
import bestsunrise from "../../../public/lBlogdetailsImgae/BestSunset/newcover.jpg"
import hoetoreach from "../../../public/lBlogdetailsImgae/HowToReach/cover.jpeg"
import waterfalls from "../../../public/lBlogdetailsImgae/TopWaterfalls/top.jpg"
import local from "../../../public/lBlogdetailsImgae/LocalFood/LocalFoodCover.png"
import magic from "../../../public/BlogsCoverS/NewBlogCover/1.png"
import basalt from "../../../public/BlogsCoverS/NewBlogCover/2.png"
import secret from "../../../public/BlogsCoverS/NewBlogCover/3.png"
import architecture from "../../../public/BlogsCoverS/NewBlogCover/4.png"
import hours from "../../../public/BlogsCoverS/NewBlogCover/5.png"
import coffee from "../../../public/BlogsCoverS/NewBlogCover/6.png"
import moonllight from "../../../public/BlogsCoverS/NewBlogCover/7.png"
import nature from "../../../public/BlogsCoverS/NewBlogCover/8.png"
import culinary from "../../../public/BlogsCoverS/NewBlogCover/Culinary.jpg"
import whybasalat from "../../../public/BlogsCoverS/NewBlogCover/WhyBasaltParadise.jpg"
import explore from "../../../public/BlogsCoverS/NewBlogCover/ExploringHalol.jpg"
import rain from "../../../public/BlogsCoverS/NewBlogCover/FallinLove.jpg"





import { time } from 'framer-motion'











const blogdata = [
    {
        id: 1,
        category: "10 Must-Visit Places Near Basalt Paradise",
        route: "/blogs/must-visit-places-near-basalt-paradise", // Unique route
        disatnce: "Discover the Hidden Gems Around Pavagadh & Halol!",
        image: blog1cover,
        date: "24-03-2025",
        time: "06:34 PM",
        tittle: "10 Must-Visit Places Near Basalt Paradise",
        description: "Planning a short getaway to Halol & Pavagadh? Whether you're a history lover, nature enthusiast, or spiritual traveler...",
        fullContent: "This is the full content for Blog 1..."
    },
    {
        id: 2,
        category: "Travel Tips & Guides",
        route: "/travel-tips", // Unique route
        disatnce: "Explore Travel Hacks for Your Trip!",
        image: blog5cover,
        date: "26-03-2025",
        time: "06:42 PM",
        tittle: "A Perfect 2-Day Itinerary for Halol & Pavagadh",
        description: "Nestled in the scenic beauty of Pavagadh, Basalt Paradise is the perfect getaway for travelers seeking nature, history, and adventure...",
        fullContent: "This is the full content for Blog 2..."
    },

    {
        id: 3,
        category: "Best Nature Spots Near Halol",
        route: "/blogs/nature-spots-near-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog4cover,
        date: "29-03-2025",
        time: "06:10 PM",
        tittle: "Escape Into Nature: Discover Halol’s Hidden Scenic Wonders!",
        description: "Need a peaceful break from city life? The region around Halol & Pavagadh is filled with serene lakes, lush green landscapes, waterfalls, and wildlife sanctuaries—perfect for nature lovers! Here’s a guide to the best nature spots near Halol for a refreshing getaway.",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 4,
        category: "Offbeat Destinations Near Halol",
        route: "/blogs/offbeat-destinations-near-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog3cover,
        date: "28-03-2025",
        time: "06:10 PM",
        tittle: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        description: "Tired of crowded tourist places? Looking for hidden gems that offer peace, nature, and unique experiences ? Halol, known for its historical significance and natural beauty, has some breathtaking offbeat destinations waiting to be explored.",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 5,
        category: " Activities Near Basalt",
        route: "/adventure-activities", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: blog2cover,
        date: "31-03-2025",
        time: "06:20 PM",
        tittle: "Experience Thrill & Adventure Near Basalt Paradise – A Must-Try Guide!",
        description: "If you’re visiting Basalt Paradise and looking for an adrenaline rush, you're in for a treat! The area around Halol & Pavagadh isn’t just about history and nature—it’s also packed with thrilling adventure activities. Whether you love trekking, water sports, or wildlife safaris, this guide will take you through the top adventure experiences you can’t miss!",
        fullContent: "This is the full content for Blog 2..."
    },
    {
        id: 6,
        category: "Weekend from Ahmedabad",
        route: "/blogs/weekend-getaway-from-ahmedabad", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: ahemdabad,
        date: "02-04-2025",
        time: "06:26 PM",
        tittle: "Looking for a quick escape from Ahmedabad? Here’s why Basalt Paradise should be your next weekend destination!",
        description: "Life in Ahmedabad is exciting, but let’s be honest—it can get hectic! If you’re craving a peaceful weekend away from the city’s hustle, Basalt Paradise in Halol is the perfect retreat. Just a few hours’ drive from Ahmedabad, this hidden gem offers lush greenery, historical sites, adventure activities, and a relaxing atmosphere.",
        fullContent: ""
    },
    {
        id: 7,
        category: "Romantic Getaways Near Vadodara",
        route: "/blogs/romantic-getaways-near-vadodara", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: tours,
        date: "04-04-2025",
        time: "06:14 PM",
        tittle: "Romantic Getaways Near Vadodara – Why Couples Love Basalt Paradise",
        description: "Looking for a peaceful and romantic escape away from the chaos of city life? Whether it’s an anniversary celebration, honeymoon, or just a spontaneous weekend trip, Basalt Paradise is fast becoming a favorite for couples in Gujarat seeking intimacy, luxury, and scenic charm — all within driving distance from Vadodara.",
        fullContent: ""
    },
    {
        id: 8,
        category: "Spritual Trails Near Halol",
        route: "/blogs/spiritual-trails-near-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: spiritual,
        date: "07-04-2025",
        time: "06:20 PM",
        tittle: "Spritual Trails Near Halol – Exploring sacred spaces around basalt paradise",
        description: "If you’re someone who finds peace in prayers, solace in temples, and joy in age-old spiritual traditions — then Halol and the surrounding Pavagadh region have a lot to offer. This serene land is home to sacred temples, ancient Jain monuments, peaceful mosques, and even a tranquil church — making it a truly soulful destination.",
        fullContent: ""
    },
    {
        id: 9,
        category: "Best Time to Visit Pavagadh & Halol",
        route: "/blogs/best-time-to-visit-pavagadh-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: besttime,
        date: "09-04-2025",
        time: "06:56 PM",
        tittle: "Best Time to Visit Pavagadh & Halol: Weather guide for travelers",
        description: "Planning a trip to the historic hills of Pavagadh or the scenic town of Halol? Great idea! Whether you're coming for the majestic Kalika Mata Temple, the rich heritage of Champaner, or a cozy escape at Basalt Paradise — timing matters.",
        fullContent: ""
    },
    {
        id: 10,
        category: "Birdwatching & Eco-Tourism Near Halol",
        route: "/blogs/birdwatching-and-eco-tourism-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: birdwatching,
        date: "14-04-2025",
        time: "07:05 PM",
        tittle: "Birdwatching & Eco-tourism Near Halol: a nature lover’s escape",
        description: "Tucked between rolling hills and lush green plains, the region is also a peaceful haven for migratory birds, rare flora, and eco-conscious travelers. Whether you're a nature photographer, a trekking enthusiast, or someone",
        fullContent: ""
    },
    {
        id: 11,
        category: "Hidden Waterfalls Near Basalt Paradise",
        route: "/blogs/hidden-waterfalls-near-basalt-paradise", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: tours,
        date: "16-04-2025",
        time: "07:02 PM",
        tittle: "Hidden Waterfalls Near Basalt Paradise: a nature escape awaits",
        description: "If the gentle sound of cascading water and the serenity of untouched nature excite you more than bustling tourist hubs, this one’s for you. The hills and forests around Pavagadh and Halol are home to some of Gujarat’s lesser-known gems — secret waterfalls that come alive during and post-monsoon.",
        fullContent: ""
    },

    {
        id: 12,
        category: " Hidden Temples & Spiritual Sites Around Pavagadh",
        route: "/blogs/hidden-temples-spiritual-sites-pavagadh", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: hidedenTemple,
        date: "18-04-2025",
        time: "07:08 PM",
        tittle: "Hidden Temples & Spiritual Sites Around Pavagadh: A Divine Trail Less Traveled",
        description: "Tucked within the vibrant hills and lush greenery of Pavagadh lies a spiritual trail that often goes unnoticed by hurried tourists. Beyond the grand Mahakali Temple and UNESCO-tagged Champaner complex, there’s a deeper soul to this region — a quiet world of ancient shrines, centuries-old steps, and peaceful sanctuaries that locals revere but few visitors know about.If you’re a seeker of silence, heritage, or offbeat experiences — this blog is your gateway. ",
        fullContent: ""
    },
    {
        id: 13,
        category: "Why Monsoon Is the Best Season to Visit Pavagadh",
        route: "/blogs/best-time-to-visit-pavagadh-monsoon-guide", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: moonsoon,
        date: "21-04-2025",
        time: "07:05 PM",
        tittle: "Why Monsoon Is the Best Season to Visit Pavagadh: Nature, Mist & Magic",
        description: "If you think Pavagadh is only meant for spiritual treks or scorching summer temple visits — think again. ",
        fullContent: ""
    },
    {
        id: 14,
        category: "Top Photography Spots Near Halol",
        route: "/blogs/photography-places-halol-instagram-reels",

        image: photogarphy,
        date: "28-04-2025",
        time: "07:28 PM",
        tittle: "Top Photography Spots Near Halol",
        description: "If your camera roll isn’t filled with misty hills, ancient steps, and vibrant temple backdrops — have you even been to Halol and Pavagadh?",
        fullContent: ""
    },
    {
        id: 15,
        category: "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
        route: "/blogs/one-day-trip-pavagadh-from-vadodara-itinerary", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: onedaytrip,
        date: "30-04-2025",
        time: "07:14 PM",
        tittle: "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
        description: "Looking for a quick weekend getaway that’s rich in history, spirituality, and natural beauty — all within 1.5 hours of Vadodara?",
        fullContent: ""
    },
    {
        id: 16,
        category: "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
        route: "/blogs/history-of-champaner-pavagadh-heritage-guide", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: champaner,
        date: "02-05-2025",
        time: "07:23 PM",
        tittle: "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
        description: "Tucked in the Aravalli foothills near Halol lies a treasure trove of forgotten dynasties, Islamic architecture, Hindu shrines, and centuries-old stepwells — all waiting to be discovered.",
        fullContent: ""
    },
    {
        id: 17,
        category: "Budget Travel Tips for Exploring Halol & Pavagadh",
        route: "/blogs/budget-travel-halol-pavagadh-guide", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: budget,
        date: "23-04-2025",
        time: "07:28 PM",
        tittle: "Budget Travel Tips for Exploring Halol & Pavagadh",
        description: "Traveling doesn’t have to break the bank — especially if you’re exploring a place as enriching and scenic as Halol and Pavagadh. Whether you're a student, solo backpacker, or someone who just loves to make every rupee count, this guide will help you enjoy a rich experience without overspending.",
        fullContent: ""

    },

    {
        id: 18,
        category: "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
        route: "/blogs/local-markets-handicrafts-halol-shopping-guide", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: LocalMarkets,
        date: "25-04-2025",
        time: "05:43 PM",
        tittle: "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
        description: "Halol isn’t just about heritage and hills — it’s also a hidden haven for colorful bazaars, handcrafted goods, and authentic Gujarati culture. If you’re staying at Basalt Paradise or visiting nearby Pavagadh, don’t miss the chance to shop local and take a piece of the region home with you.Here’s your insider guide to shopping in and around Halol — affordably, responsibly, and like a true traveler.",
        fullContent: ""

    },
    {
        id: 19,
        category: "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
        route: "/blogs/best-sunrise-sunset-points-pavagadh-halol", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: bestsunrise,
        date: "28-04-2025",
        time: "11:15 AM",
        tittle: "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
        description: "If you love golden hour light, dramatic landscapes, and peaceful moments with nature, the Pavagadh-Halol region is a dream come true. Whether you're a photographer, a romantic traveler, or just want a perfect start or end to your day, we’ve got you covered.Here are the most scenic sunrise and sunset viewpoints near Basalt Paradise — all tried and loved by locals.",
        fullContent: ""

    },
    {
        id: 20,
        category: "How to Reach Pavagadh from Major Cities – Vadodara, Ahmedabad, Surat",
        route: "/blogs/how-to-reach-pavagadh-vadodara-ahmedabad-surat", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: hoetoreach,
        date: "30-04-2025",
        time: "11:21 AM",
        tittle: "How to Reach Pavagadh from Vadodara, Ahmedabad & Surat – Complete Travel Guide",
        description: "Planning a getaway to the historic hills of Pavagadh and Halol? Whether you're coming for the Kalika Mata Temple, the UNESCO Champaner ruins, or a weekend at Basalt Paradise, this travel guide makes your journey stress-free.  Here’s how to reach Pavagadh from Gujarat’s biggest cities — including travel tips, routes, and local transit options.",
        fullContent: ""

    },
    {
        id: 21,
        category: "Top Waterfalls Near Halol to Explore This Monsoon",
        route: "/blogs/waterfalls-near-halol-monsoon-travel", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: waterfalls,
        date: "03-05-2025",
        time: "06:30 PM",
        tittle: " Top Waterfalls Near Halol to Explore This Monsoon",
        description: "The Pavagadh region isn’t just about temples and history — it transforms into a lush green paradise during monsoon. If you’re planning a visit to Halol between June and September, don’t miss out on these seasonal gems: stunning waterfalls just a short ride or trek away from Basalt Paradise.Whether you're a weekend hiker, nature lover, or Instagram explorer, here are the best waterfalls near Halol for the perfect rainy-day escape.",
        fullContent: ""

    },
    {
        id: 22,
        category: "Local Food Guide: What to Eat in Halol & Around Pavagadh",
        route: "/blogs/local-food-guide-halol-pavagadh", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: local,
        date: "07-05-2025",
        time: "06:30 PM",
        tittle: " Local Food Guide: What to Eat in Halol & Around Pavagadh",
        description: "When you're exploring the scenic hills of Pavagadh or the ancient UNESCO city of Champaner, your journey isn’t complete without indulging in the local flavors of Gujarat. From traditional thalis to spicy farsan, this food guide will take your taste buds on a journey just as rewarding as the destination.Here’s what (and where) to eat in and around Halol and Pavagadh.",
        fullContent: ""

    },
    {
        id: 23,
        category: "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
        route: "/blogs/basalt-paradise-has-the-most-magical", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: magic,
        date: "10-05-2025",
        time: "11:06 AM",
        tittle: "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
        description: "There’s something strangely hypnotic about sunsets at Basalt Paradise. Maybe it's the way the sky blushes in soft pinks and golds. Or how the light hits the jagged basalt cliffs just right, making them glow as if they were alive. Ask any guest, and they’ll tell you the same thing: sunsets here feel different.But why? What makes the golden hour at Basalt Paradise more magical than anywhere else?Let’s dig into the beautiful blend of science and nature that makes this daily show unforgettable.",
        fullContent: ""

    },
    {
        id: 24,
        category: "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
        route: "/blogs/stories-from-has-the-people", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: basalt,
        date: "13-05-2025",
        time: "11:03 AM",
        tittle: "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
        description: "Most people come to Basalt Paradise for the views. The cliffs, the ocean, the golden sunsets. But there’s something else here—something you won’t find in guidebooks or Instagram stories.",
        fullContent: ""

    },
    {
        id: 25,
        category: "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
        route: "/blogs/what-you’ll-discover-on-our-hidden", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: secret,
        date: "16-05-2025",
        time: "10:03 AM",
        tittle: "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
        description: "At first glance, the tide pools near Basalt Paradise might look like nothing more than shallow puddles in the rocks, left behind by the retreating sea. But take a closer look—and a whole hidden world begins to stir.Tiny fish dart between crevices. Sea anemones open and close like underwater flowers. Crabs scuttle sideways, half-camouflaged against the basalt. It’s quiet, intimate, and alive. And for those who slow down enough to notice, it’s one of the most magical experiences Basalt Paradise has to offer.",
        fullContent: ""

    },
    {
        id: 26,
        category: "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
        route: "/blogs/architecture-that-makes-basalt-paradise-unforgettable", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: architecture,
        date: "16-05-2025",
        time: "10:03 AM",
        tittle: "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
        description: "There are places that impress you the moment you arrive—and then there are places that slowly reveal themselves, detail by detail, until you realize you’re standing inside a story.Basalt Paradise is the latter.From the curves of the roofline that mimic the waves, to the cool, quiet hush of natural stone underfoot—every element here is intentional. Not just built, but designed to blend, breathe, and belong.This isn’t just a resort. It’s architecture with soul.",
        fullContent: ""

    },
    {
        id: 27,
        category: "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
        route: "/blogs/the-ultimate-weekend-itinerary", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: hours,
        date: "19-05-2025",
        time: "10:45 AM",
        tittle: "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
        description: "You’ve booked your escape. The calendar is blocked. The suitcase is (almost) packed. But what should you actually do once you arrive at Basalt Paradise?You could let the ocean breeze decide—or you could follow our handpicked 72-hour itinerary, crafted for those who want a perfect balance of adventure, rest, flavor, and soul.This isn’t just a schedule. It’s a weekend you’ll remember for a long, long time.",
        fullContent: ""

    },
    {
        id: 28,
        category: "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
        route: "/blogs/local-brews-you’ll-only", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: coffee,
        date: "22-05-2025",
        time: "06:15 PM",
        tittle: "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
        description: "There’s coffee—and then there’s coffee at Basalt Paradise. It’s not just a drink here; it’s a ritual. A slow, sensory moment woven into the rhythm of the resort. Whether you're perched on a cliffside deck watching the morning mist rise or sipping under a banyan tree as the breeze moves through your hair—coffee tastes different when it’s brewed in a place like this.But it’s not just about the view. At Basalt Paradise, we take our beans as seriously as we take our sunsets. Let’s take you through the most memorable brews—and the breathtaking spots you’ll want to savor them in.",
        fullContent: ""

    },
    {
        id: 29,
        category: "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
        route: "/blogs/what-makes-nighttime-basalt", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: moonllight,
        date: "26-05-2025",
        time: "06:35 PM",
        tittle: "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
        description: "When the sun sets at Basalt Paradise, the day doesn’t end—it simply changes rhythm.The heat softens. The ocean hushes. And a different kind of beauty rises with the moon.This isn’t nightlife in the loud, neon sense. It’s quieter. Dreamier. The kind of night that feels like a secret whispered just to you.Here’s why nighttime at Basalt Paradise is not to be missed—and might just become your favorite part of the day.",
        fullContent: ""
    },
    {
        id: 30,
        category: "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
        route: "/blogs/basalt-paradise-balances-nature", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: nature,
        date: "29-05-2025",
        time: "11:15 AM",
        tittle: "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
        description: "Luxury often conjures up images of opulence, excess, and escape. But at Basalt Paradise, we believe true luxury means living well without taking too much—from nature, from culture, or from tomorrow.We’re part retreat, part responsibility. A place where the earth is treated with as much reverence as our guests. And every detail—from your villa’s stonework to the soap in your shower—has been chosen with care, conscience, and a deep respect for the land that holds us.This is what eco-luxury looks like when it's done not as a trend, but as a truth.",
        fullContent: ""
    },
    {
        id: 31,
        category: "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
        route: "/blogs/culinary-journey-basalt-paradise", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: culinary,
        date: "31-05-2025",
        time: "06:03 PM",
        tittle: "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
        description: "Tucked between the basalt-rich landscapes of Halol and the golden horizons that frame every sunset, Basalt Paradise is more than a luxurious escape—it’s a sensory experience. And if there’s one thing our guests remember long after their stay, it’s the food.Welcome to our kitchen, where farm-to-table philosophy meets luxury—and where every ingredient tells a local story.",
        fullContent: ""
    },
    {
        id: 32,
        category: "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
        route: "/blogs/basalt-paradise-best-resort", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: whybasalat,
        date: "03-06-2025",
        time: "06:20 PM",
        tittle: "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
        description: "There are places you visit—and then there are places you celebrate. At Basalt Paradise, we believe in creating unforgettable memories, not just offering a stay. Whether it’s a dreamy anniversary, a surprise birthday bash, an intimate proposal, or even a soulful wedding by the hills, our resort is where special moments come alive.Set amidst the tranquil landscapes of Halol and just a short drive from Vadodara, we offer the perfect blend of luxury, privacy, and personalization—making us the go-to [resort for celebrations Vadodara] has come to love.",
        fullContent: ""
    },
    {
        id: 33,
        category: "Exploring Halol: The Best Day Trips from Basalt Paradise",
        route: "/blogs/exploring-halol-the-best", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: explore,
        date: "03-06-2025",
        time: "11:10 AM",
        tittle: "Exploring Halol: The Best Day Trips from Basalt Paradise",
        description: "When you stay at Basalt Paradise, you're not just indulging in luxury—you're stepping into the heart of Gujarat’s heritage and natural beauty. Our serene resort in Halol is perfectly positioned for discovering nearby gems—from ancient forts and spiritual shrines to misty waterfalls and wildlife sanctuaries.Here’s your curated guide to the best day trips from Halol, complete with accurate distances and insider tips.",
        fullContent: ""
    },
    {
        id: 34,
        category: "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
        route: "/blogs/rain-or-shine-what-makes-monsoons", // Unique route
        // disatnce: "Offbeat Destinations Near Halol: Hidden Gems You Must Visit!",
        image: rain,
        date: "05-06-2025",
        time: "11:30 AM",
        tittle: "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
        description: "The monsoon in Gujarat has its own rhythm—a slow, poetic unfolding of rain-kissed mornings, misty hills, and vibrant green landscapes. At Basalt Paradise, the rains don’t dampen the experience—they elevate it. Whether you’re watching the clouds drift lazily over the hills or sipping masala chai under a thatched canopy, the monsoon becomes more than just weather—it becomes a feeling.",
        fullContent: ""
    },
];



export default function Blogs() {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("10 Must-Visit Places Near Basalt Paradise");
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(null);

    const buttons = [
        "All",
        "10 Must-Visit Places Near Basalt Paradise",
        "Travel Tips & Guides",
        "Offbeat Destinations Near Halol",
        "Best Nature Spots Near Halol",
        " Activities Near Basalt",
        "Weekend from Ahmedabad",
        "Romantic Getaways Near Vadodara",
        "Spritual Trails Near Halol",
        "Best Time to Visit Pavagadh & Halol",
        "Birdwatching & Eco-Tourism Near Halol",
        " Hidden Temples & Spiritual Sites Around Pavagadh",
        "Why Monsoon Is the Best Season to Visit Pavagadh",
        "Top Photography Spots Near Halol",
        "Day Trip Itinerary from Vadodara to Pavagadh – The Perfect 1-Day Plan",
        "History of Champaner-Pavagadh – A Heritage Explorer’s Guide",
        "Budget Travel Tips for Exploring Halol & Pavagadh",
        "Local Markets & Handicrafts in Halol – Where to Shop Like a Local",
        "Best Sunrise & Sunset Spots Near Pavagadh for Nature Lovers",
        "How to Reach Pavagadh from Major Cities – Vadodara, Ahmedabad, Surat",
        "Top Waterfalls Near Halol to Explore This Monsoon",
        "Local Food Guide: What to Eat in Halol & Around Pavagadh",
        "Sunset Science: Why Basalt Paradise Has the Most Magical Golden Hours",
        "Basalt Paradise Through a Local Lens: Stories from the People Who Call It Home",
        "The Secret Life of Tide Pools: What You’ll Discover on Our Hidden Shorelines",
        "Design Diaries: The Architecture That Makes Basalt Paradise Unforgettable",
        "72 Hours in Basalt Paradise: The Ultimate Weekend Itinerary",
        "Coffee with a View: Local Brews You’ll Only Find at Basalt Paradise",
        "Moonlit Magic: What Makes Nighttime at Basalt Paradise So Special",
        "Eco-Luxury Redefined: How Basalt Paradise Balances Nature and Indulgence",
        "A Culinary Journey at Basalt Paradise: Farm-to-Table Dining in Halol",
        "Why Basalt Paradise Is the Best Resort for Special Occasions Near Vadodara",
        "Exploring Halol: The Best Day Trips from Basalt Paradise",
        "Rain or Shine: What Makes Monsoons at Basalt Paradise So Magical",
    ];

    const handleClick = (category) => {
        setSelectedCategory(category);
    };

    const handleBlogDetails = (route) => {
        navigate(route);
    };

    const filteredBlogs =
        selectedCategory === "All"
            ? blogdata
            : blogdata.filter(blog => blog.category === selectedCategory);

    const openLightbox = (index) => {
        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentIndex(null);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? filteredBlogs.length - 1 : prevIndex - 1
        );
    };

    const nextImage = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === filteredBlogs.length - 1 ? 0 : prevIndex + 1
        );
    };

    const scrollRef = useRef(null);
    let isDragging = false;
    let startX;
    let scrollLeft;

    useEffect(() => {
        const slider = scrollRef.current;

        const mouseDownHandler = (e) => {
            isDragging = true;
            slider.classList.add('cursor-grabbing');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        };

        const mouseLeaveHandler = () => {
            isDragging = false;
            slider.classList.remove('cursor-grabbing');
        };

        const mouseUpHandler = () => {
            isDragging = false;
            slider.classList.remove('cursor-grabbing');
        };

        const mouseMoveHandler = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2; // scroll speed
            slider.scrollLeft = scrollLeft - walk;
        };

        slider.addEventListener('mousedown', mouseDownHandler);
        slider.addEventListener('mouseleave', mouseLeaveHandler);
        slider.addEventListener('mouseup', mouseUpHandler);
        slider.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            slider.removeEventListener('mousedown', mouseDownHandler);
            slider.removeEventListener('mouseleave', mouseLeaveHandler);
            slider.removeEventListener('mouseup', mouseUpHandler);
            slider.removeEventListener('mousemove', mouseMoveHandler);
        };
    }, []);


    return (
        <>


            <Header />
            <section className=' select-none flex  mb-[40px] flex-col gap-[30px] 2xl:w-[1300px]  relative font-Poppins justify-between w-[90%] mx-auto md:w-[78%] pt-[110px]  '>
                <div className='md:text-[14px] text-[12px] md:px-0 px-[10px] font-[500] flex w-[100%] overflow-x-auto gap-[10px]' ref={scrollRef}>
                    {buttons.map((buttonName) => (
                        <button
                            key={buttonName}
                            onClick={() => handleClick(buttonName)}
                            className={`w-fit py-[7px] px-[18px] rounded-[20px] border-[1.2px] flex-shrink-0
                      ${selectedCategory === buttonName
                                    ? "bg-[#fcaf17] text-white border-[#fcaf17]"
                                    : "bg-transparent text-[#fcaf17] border-[#fcaf17]"
                                }`}
                        >
                            {buttonName}
                        </button>
                    ))}
                </div>
                <div className=' flex w-[100%] gap-[20px] justify-between'>


                    <div className=' flex-col gap-[20px]  flex md:w-[74%]'>







                        {filteredBlogs.map((blog, index) => (
                            <div key={blog.id} className=' flex flex-col gap-[10px] '>
                                <img
                                    onClick={() => openLightbox(index)}
                                    className='cursor-pointer flex w-[100%] h-[240px] md:h-[400px] rounded-[8px] transition-transform duration-300 ease-in-out scale-[0.98] hover:scale-[1]'
                                    src={blog.image}
                                    alt="Blogs"
                                />
                                <div className=' px-[10px] text-[14px] items-center  flex text-[#7442ff] gap-[10px]'>
                                    <i class="fa-regular mb-[2px] text-[16px] fa-calendar-days"></i>
                                    {blog.date} - {blog.time}
                                </div>
                                <div className=' flex w-[100%] md:flex-row flex-col  justify-between md:items-end  gap-[14px]'>
                                    <div className=' flex w-[100%] gap-[10px] flex-col '>
                                        <div className=' cursor-default flex items-center gap-[10px]  px-[10px] text-[#7442ff] '>

                                            <p className=' gap-[10px] mt-[2px] flex'>
                                                <b className=' text-[18px] font-[400]'>{blog.disatnce} </b>
                                            </p>
                                        </div>
                                        <h1 className=' px-[10px] font-[500] text-[19px]'>
                                            {blog.tittle}
                                        </h1>
                                        <div className=' text-[15px] flex text-justify  px-[10px] md:w-[98%]'>
                                            <p>
                                                {blog.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button className='flex gap-[10px] cursor-pointer pr-[10px] text-[#7442ff] w-[150px] items-center' onClick={() => handleBlogDetails(blog.route)}>
                                        <p className='hover:underline'>Read More</p>
                                        <i className="fa-regular fa-arrow-right"></i>
                                    </button>
                                </div>
                                <span className=' flex w-[100%] border-t-[1.3px] border-[#7442ff] mt-[20px] border-dashed '>

                                </span>
                            </div>
                        ))}
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
                            src={filteredBlogs[currentIndex].image}
                            alt={`Blog ${currentIndex + 1}`}
                            className="max-h-full max-w-[80%] rounded-md object-contain"
                        />
                    </div>
                )}


            </section>
            <Footer />
        </>
    )
}
