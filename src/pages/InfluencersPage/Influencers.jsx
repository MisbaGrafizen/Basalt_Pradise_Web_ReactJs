
import { useState, React, useEffect } from "react"
import { Calendar, Check, Instagram, Facebook, Youtube, Users, MessageSquare, Phone, Mail, ChevronDown } from "lucide-react"
import Header from '../../Component/header/Header'
import Footer from "../../Component/footer/Footer"
import InfluencersReels from "../../Component/influencrs/InfluencersReels"
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios"


const countries = [
    { name: "India", code: "+91", flag: "🇮🇳" },
    { name: "USA", code: "+1", flag: "🇺🇸" },
    { name: "UK", code: "+44", flag: "🇬🇧" },
    { name: "UAE", code: "+971", flag: "🇦🇪" },
];
export default function Influencers() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);


    const [formData, setFormData] = useState({
        fullName: "",
        phoneNumber: "",
        whatsappNumber: "",
        email: "",
        instagramLink: "",
        facebookLink: "",
        youtubeLink: "",
        visitDate: "",
        numberOfPax: 1,
        notes: "",
    })

    const [sameAsPhone, setSameAsPhone] = useState(false);
    const [errors, setErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    useEffect(() => {
        if (sameAsPhone) {
            setFormData(prev => ({ ...prev, whatsappNumber: prev.phoneNumber }));
        }
    }, [sameAsPhone, formData.phoneNumber]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors(prev => ({ ...prev, [name]: null }));
    };

    const validateForm = () => {
        const newErrors = {}

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full name is required"
        }

        if (!formData.phoneNumber.trim()) {
            newErrors.phoneNumber = "Phone number is required"
        } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phoneNumber.trim())) {
            newErrors.phoneNumber = "Please enter a valid phone number"
        }

        if (!formData.whatsappNumber.trim()) {
            newErrors.whatsappNumber = "WhatsApp number is required"
        } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.whatsappNumber.trim())) {
            newErrors.whatsappNumber = "Please enter a valid WhatsApp number"
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email address is required"
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
            newErrors.email = "Please enter a valid email address"
        }

        // Check if at least one social media link is provided
        if (!formData.instagramLink.trim() && !formData.facebookLink.trim() && !formData.youtubeLink.trim()) {
            newErrors.socialMedia = "At least one social media link is required"
        }

        if (!formData.visitDate.trim()) {
            newErrors.visitDate = "Visit date is required"
        }

        if (!formData.numberOfPax || formData.numberOfPax < 1) {
            newErrors.numberOfPax = "Number of people must be at least 1"
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const payload = {
                fullName: formData.fullName,
                phoneNumber: selectedCountry.code + " " + formData.phoneNumber,
                whatsappNumber: formData.whatsappNumber,
                email: formData.email,
                visitDate: formData.visitDate,
                numberOfPeople: parseInt(formData.numberOfPax),
                instagramURL: formData.instagramLink,
                facebookURL: formData.facebookLink,
                youtubeURL: formData.youtubeLink,
                additionalNotes: formData.notes,
            };

            const res = await axios.post("https://server.grafizen.in/api/v2/rotex/influencer/register", payload);

            if (res.data.success) {
                setSubmitted(true);
            } else {
                alert("Something went wrong. Try again.");
            }
        } catch (err) {
            console.error(err);
            alert("Network or server error.");
        }
    };

    if (submitted) {
        return (
            <div className="min-h-screen bg-gradient-to-br font-Poppins from-yellow-50 to-amber-50 flex items-center justify-center p-4">
                <div className="w-full max-w-md font-Poppins bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-gradient-to-r from-yellow-400 to-amber-500 p-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                            <Check className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2">Registration Successful!</h2>
                        <p className="text-amber-100">
                            Thank you for registering as an influencer. We'll review your information and get back to you soon.
                        </p>
                    </div>

                    <div className="p-8">
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">What's Next?</h3>
                            <p className="text-gray-600">
                                Our team will review your application and contact you within 2-3 business days to discuss collaboration
                                opportunities.
                            </p>
                        </div>

                        <button
                            onClick={() => {
                                setSubmitted(false);
                                setFormData({
                                    fullName: "",
                                    phoneNumber: "",
                                    whatsappNumber: "",
                                    email: "",
                                    instagramLink: "",
                                    facebookLink: "",
                                    youtubeLink: "",
                                    visitDate: "",
                                    numberOfPax: 1,
                                    notes: "",
                                });
                            }}
                            className="w-full py-3 px-4 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-lg transition-colors"
                        >
                            Register Another Influencer
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <>
            <Header />
            <div className="md:w-[78%] select-none w-[95%] pb-[80px] font-Poppins pt-[110px] 2xl:w-[1320px] gap-[20px]  flex-col md:flex mx-auto">
                <div className=" flex items-center justify-center ">
                    <div className="w-full max-w-5xl">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                                Influencer Registration
                            </h1>
                            <p className="text-gray-600 mt-2">
                                Join our exclusive influencer network and unlock exciting collaboration opportunities
                            </p>
                        </div>

                        {/* Form Card */}
                        <div className="bg-white rounded-2xl border shadow-xl overflow-hidden">
                            <div className="p-6 md:p-8">
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Left Column */}
                                        <div className="space-y-4">
                                            <h2 className="text-xl font-semibold text-gray-800 mb-4 border- flex items-center  bg-[#f0cc1a1e] overflow-hidden left-0 px-[20px] py-[8px] rounded-[7px] relative border border-gray-100 ">
                                                Personal Information
                                                <div className=" h-[100%] absolute bg-yellow-500 left-0 top-0 w-[5px]">

                                                </div>
                                            </h2>

                                            {/* Full Name */}
                                            <div>
                                                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Full Name <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        id="fullName"
                                                        name="fullName"
                                                        value={formData.fullName}
                                                        onChange={handleChange}
                                                        className={`w-full  text-[14px] pl-10 pr-4 py-[8px] rounded-lg border ${errors.fullName ? "border-red-300 bg-red-50" : "border-gray-300"
                                                            } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
                                                        placeholder="Enter your full name"
                                                    />
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                                {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                                            </div>

                                            {/* Phone Number */}
                                            <div className="w-full">
                                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Phone Number <span className="text-red-500">*</span>
                                                </label>

                                                <div className="relative flex items-center">
                                                    {/* Country Code Dropdown */}
                                                    <div className="relative z-20">
                                                        <button
                                                            onClick={() => setShowDropdown(!showDropdown)}
                                                            className={`flex items-center gap-1 w-[100px] max-w-[100px]  px-[4px] py-[8.5px] border-t mt-[0.2px] border-b border-l border-gray-300 rounded-l-lg text-sm text-gray-700 hover:bg-gray-100 transition ${errors.phoneNumber
                                                                ? "border-red-300 bg-red-50"
                                                                : "border-gray-300"
                                                                } `}
                                                        >
                                                            {selectedCountry.flag} {selectedCountry.code}
                                                            <ChevronDown className="w-4 h-4 ml-1" />
                                                        </button>

                                                        <AnimatePresence>
                                                            {showDropdown && (
                                                                <motion.ul
                                                                    initial={{ opacity: 0, y: -10 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    exit={{ opacity: 0, y: -10 }}
                                                                    className="absolute top-[105%] left-0 bg-white border border-gray-200 rounded shadow-md w-[150px] z-30 overflow-hidden"
                                                                >
                                                                    {countries.map((country) => (
                                                                        <li
                                                                            key={country.code}
                                                                            onClick={() => {
                                                                                setSelectedCountry(country);
                                                                                setShowDropdown(false);
                                                                            }}
                                                                            className="px-3 py-2 cursor-pointer hover:bg-gray-100 text-sm"
                                                                        >
                                                                            {country.flag} {country.name} ({country.code})
                                                                        </li>
                                                                    ))}
                                                                </motion.ul>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>

                                                    {/* Phone Input */}
                                                    <input
                                                        type="tel"
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        value={formData.phoneNumber}
                                                        onChange={handleChange}
                                                        className={`w-full text-[14px] pl-4 pr-4 border py-[8px] outline-none rounded-r-lg border-l-0 ${errors.phoneNumber
                                                            ? "border-red-300 bg-red-50"
                                                            : "border-gray-300"
                                                            } `}
                                                        placeholder="Enter your phone number"
                                                    />

                                                    {/* Phone Icon */}
                                                    <div className="absolute right-3 text-gray-400 pointer-events-none">
                                                        <Phone className="h-5 w-5" />
                                                    </div>
                                                </div>

                                                {errors.phoneNumber && (
                                                    <p className="mt-1 text-sm text-red-600">{errors.phoneNumber}</p>
                                                )}
                                            </div>


                                            {/* WhatsApp Number */}
                                            <div className=" flex items-center gap-[10px]">


                                                <div className="md:w-[240px]">
                                                    <label htmlFor="whatsappNumber" className="block text-sm font-medium text-gray-700 mb-1">
                                                        WhatsApp Number <span className="text-red-500">*</span>
                                                    </label>
                                                    <div className="relative">
                                                        <input
                                                            type="tel"
                                                            id="whatsappNumber"
                                                            name="whatsappNumber"
                                                            value={formData.whatsappNumber}
                                                            onChange={handleChange}
                                                            className={`w-full  text-[14px] pl-10 pr-4 py-[8px] rounded-lg border ${errors.whatsappNumber ? "border-red-300 bg-red-50" : "border-gray-300"
                                                                } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
                                                            placeholder="Enter your WhatsApp number"
                                                        />
                                                        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-green-500">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                width="20"
                                                                height="20"
                                                                viewBox="0 0 24 24"
                                                                fill="currentColor"
                                                            >
                                                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                    {errors.whatsappNumber && <p className="mt-1 text-sm text-red-600">{errors.whatsappNumber}</p>}
                                                </div>
                                                <label className="gap-[6px]  pt-[20px] cursor-pointer  flex items-center">
                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-[20px] h-[20px] mt-[2px] border-[1.5px] border-[#229b2e] rounded-md checked:bg-[#229b2e] checked:border-[#229b2e] flex items-center justify-center relative transition-all duration-200
    before:content-['✓'] before:absolute before:text-white before:text-[16px] before:font-bold before:opacity-0 checked:before:opacity-100"
                                                        checked={sameAsPhone} onChange={(e) => setSameAsPhone(e.target.checked)}
                                                    />

                                                    <div className="text-left text-[13px] text-gray-500">
                                                        Same as Phone number

                                                    </div>
                                                </label>
                                            </div>
                                            {/* Email Address */}
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Email Address <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className={`w-full  text-[14px] pl-10 pr-4 py-[8px] rounded-lg border ${errors.email ? "border-red-300 bg-red-50" : "border-gray-300"
                                                            } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
                                                        placeholder="Enter your email address"
                                                    />
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <Mail className="h-5 w-5" />
                                                    </div>
                                                </div>
                                                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                            </div>

                                            {/* Visit Date */}
                                            <div>
                                                <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Visit Date <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="date"
                                                        id="visitDate"
                                                        name="visitDate"
                                                        value={formData.visitDate}
                                                        onChange={handleChange}
                                                        className={`w-full  text-[14px] pl-10 pr-4 py-[8px] rounded-lg border ${errors.visitDate ? "border-red-300 bg-red-50" : "border-gray-300"
                                                            } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
                                                    />
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <Calendar className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                {errors.visitDate && <p className="mt-1 text-sm text-red-600">{errors.visitDate}</p>}
                                            </div>

                                            {/* Number of Pax */}
                                            <div>
                                                <label htmlFor="numberOfPax" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Number of People <span className="text-red-500">*</span>
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="number"
                                                        id="numberOfPax"
                                                        name="numberOfPax"
                                                        min="1"
                                                        value={formData.numberOfPax}
                                                        onChange={handleChange}
                                                        className={`w-full  text-[14px] pl-10 pr-4 py-[8px] rounded-lg border ${errors.numberOfPax ? "border-red-300 bg-red-50" : "border-gray-300"
                                                            } focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors`}
                                                    />
                                                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                                        <Users className="w-5 h-5" />
                                                    </div>
                                                </div>
                                                {errors.numberOfPax && <p className="mt-1 text-sm text-red-600">{errors.numberOfPax}</p>}
                                            </div>
                                        </div>

                                        {/* Right Column */}
                                        <div className="space-y-4">
                                            <h2 className="ttext-xl font-semibold text-gray-800 mb-4 border- flex items-center  bg-[#f0cc1a1e] overflow-hidden left-0 px-[20px] py-[8px] rounded-[7px] relative border border-gray-100 ">
                                                Social Media & Additional Info

                                                <div className=" h-[100%] absolute bg-yellow-500 left-0 top-0 w-[5px]">

                                                </div>
                                            </h2>

                                            {/* Social Media Section */}
                                            <div className="bg-yellow-50 rounded-lg p-4 mb-6">
                                                <h3 className="text-sm font-medium text-amber-800 mb-2">Social Media Links</h3>
                                                <p className="text-xs text-amber-600 mb-2">Please provide at least one social media link</p>

                                                {errors.socialMedia && (
                                                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm mb-4">{errors.socialMedia}</div>
                                                )}

                                                {/* Instagram Link */}
                                                <div className="mb-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-400 rounded-lg text-white">
                                                            <Instagram className="w-5 h-5" />
                                                        </div>
                                                        <input
                                                            type="url"
                                                            id="instagramLink"
                                                            name="instagramLink"
                                                            value={formData.instagramLink}
                                                            onChange={handleChange}
                                                            className="flex-1 ml-3 px-4 py-2 rounded-lg text-[13px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                            placeholder="Instagram profile URL"
                                                        />
                                                    </div>
                                                </div>

                                                {/* Facebook Link */}
                                                <div className="mb-4">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex items-center justify-center bg-yellow-500 rounded-lg text-white">
                                                            <Facebook className="w-5 h-5" />
                                                        </div>
                                                        <input
                                                            type="url"
                                                            id="facebookLink"
                                                            name="facebookLink"
                                                            value={formData.facebookLink}
                                                            onChange={handleChange}
                                                            className="flex-1 ml-3 px-4 py-2 rounded-lg text-[13px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                            placeholder="Facebook profile URL"
                                                        />
                                                    </div>
                                                </div>

                                                {/* YouTube Link */}
                                                <div>
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex items-center justify-center bg-amber-500 rounded-lg text-white">
                                                            <Youtube className="w-5 h-5" />
                                                        </div>
                                                        <input
                                                            type="url"
                                                            id="youtubeLink"
                                                            name="youtubeLink"
                                                            value={formData.youtubeLink}
                                                            onChange={handleChange}
                                                            className="flex-1 ml-3 px-4 py-2 rounded-lg text-[13px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                            placeholder="YouTube channel URL"
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Notes */}
                                            <div>
                                                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Additional Notes
                                                </label>
                                                <div className="relative">
                                                    <textarea
                                                        id="notes"
                                                        name="notes"
                                                        value={formData.notes}
                                                        onChange={handleChange}
                                                        rows="5"
                                                        className="w-full pl-10 pr-4 text-[14px] py-[8px] rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-colors"
                                                        placeholder="Any special requests or additional information..."
                                                    ></textarea>
                                                    <div className="absolute left-3 top-3 text-gray-400">
                                                        <MessageSquare className="w-5 h-5" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label className=" gap-[6px] flex ">

                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-[20px] h-[20px] border-[1.5px] border-yellow-500 rounded-md checked:bg-yellow-500 checked:border-yellow-500 flex items-center justify-center relative transition-all duration-200
    before:content-['✓'] before:absolute before:text-white before:text-[18px] before:font-bold before:opacity-0 checked:before:opacity-100"
                                                    />




                                                    <div className="text-center cursor-pointer text-[13px] text-gray-500">
                                                        By registering, you agree to our{" "}
                                                        <a href="#" className="text-yellow-600 hover:underline">
                                                            Terms of Service
                                                        </a>{" "}
                                                        and{" "}
                                                        <a href="#" className="text-yellow-600 hover:underline">
                                                            Privacy Policy
                                                        </a>
                                                    </div>
                                                </label>
                                            </div>
                                            <div>
                                                <label className="gap-[6px] cursor-pointer flex items-start">
                                                    <input
                                                        type="checkbox"
                                                        className="appearance-none w-[20px] h-[20px] mt-[2px] border-[1.5px] border-yellow-500 rounded-md checked:bg-yellow-500 checked:border-yellow-500 flex items-center justify-center relative transition-all duration-200
    before:content-['✓'] before:absolute before:text-white before:text-[16px] before:font-bold before:opacity-0 checked:before:opacity-100"
                                                    />

                                                    <div className="text-left text-[13px] text-gray-500">
                                                        I agree to the{" "}
                                                        <a href="#" className="text-yellow-600 hover:underline">
                                                            Influencer Terms and Conditions
                                                        </a>{" "}
                                                        and{" "}
                                                        <a href="#" className="text-yellow-600 hover:underline">
                                                            Privacy Policy
                                                        </a>
                                                    </div>
                                                </label>

                                            </div>
                                        </div>
                                    </div>

                                    {/* Submit Button - Full Width */}
                                    <div className="mt-8">
                                        <button
                                            type="submit"
                                            className="w-full py-2 px-6 bg-[#13981c] hover:bg-[#1d6b22] text-white font-medium rounded-lg transition-all shadow-md hover:shadow-lg text-lg"
                                        >
                                            Complete Registration
                                        </button>
                                    </div>

                                    {/* Terms and Conditions */}

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <InfluencersReels /> */}
            </div>


            <Footer />
        </>
    )
}
