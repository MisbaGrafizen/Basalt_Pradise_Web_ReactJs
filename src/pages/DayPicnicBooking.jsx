import { useState,React } from "react"
import { Calendar, Users, Phone, Utensils, Home, Clock, Sun } from "lucide-react"
import Header from "../Component/header/Header"
import Footer from "../Component/footer/Footer"

export default function DayPicnicBooking() {


  const [activeTab, setActiveTab] = useState("stay")
  const [stayFormData, setStayFormData] = useState({
    name: "",
    contactNo: "",
    checkInDate: "",
    checkOutDate: "",
    roomType: "",
    numberOfRooms: 1,
    adultsCount: 1,
    kidsCount6To12: 0,
    kidsCount12To18: 0,
    numberOfNights: 1,
    mealPlan: "AP",
  })

  const [picnicFormData, setPicnicFormData] = useState({
    name: "",
    contactNo: "",
    picnicDate: "",
    mealPlan: "lunch",
    adultsCount: 1,
    kidsCount6To12: 0,
    kidsCount12To18: 0,
  })

  // Room type options
  const roomTypes = [
    { value: "standard", label: "Standard Room" },
    { value: "deluxe", label: "Deluxe Room" },
    { value: "suite", label: "Suite" },
    { value: "family", label: "Family Room" },
    { value: "villa", label: "Villa" },
  ]

  // Meal plan options for stay
  const stayMealPlans = [
    { value: "EP", label: "EP - Room Only" },
    { value: "CP", label: "CP - Breakfast Only" },
    { value: "MAP", label: "MAP - Breakfast & Dinner" },
    { value: "AP", label: "AP - All Meals Included" },
  ]

  // Meal plan options for picnic
  const picnicMealPlans = [
    { value: "breakfast", label: "Breakfast" },
    { value: "lunch", label: "Lunch" },
    { value: "dinner", label: "Dinner" },
    { value: "all", label: "All Meals" },
    { value: "none", label: "No Meals" },
  ]

  // Handle stay form input changes
  const handleStayInputChange = (e) => {
    const { name, value } = e.target
    setStayFormData({
      ...stayFormData,
      [name]: value,
    })

    // Calculate nights when dates change
    if (name === "checkInDate" || name === "checkOutDate") {
      if (stayFormData.checkInDate && stayFormData.checkOutDate) {
        const checkIn = new Date(stayFormData.checkInDate)
        const checkOut = new Date(stayFormData.checkOutDate)
        if (checkOut > checkIn) {
          const diffTime = Math.abs(checkOut - checkIn)
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
          setStayFormData({
            ...stayFormData,
            [name]: value,
            numberOfNights: diffDays,
          })
        }
      }
    }
  }

  // Handle picnic form input changes
  const handlePicnicInputChange = (e) => {
    const { name, value } = e.target
    setPicnicFormData({
      ...picnicFormData,
      [name]: value,
    })
  }

  // Handle stay form submission
  const handleStaySubmit = (e) => {
    e.preventDefault()
    console.log("Stay Booking Form Submitted:", stayFormData)
    // Here you would typically send this data to your backend
    alert("Stay booking form submitted successfully!")
  }

  // Handle picnic form submission
  const handlePicnicSubmit = (e) => {
    e.preventDefault()
    console.log("Day Picnic Form Submitted:", picnicFormData)
    // Here you would typically send this data to your backend
    alert("Day picnic form submitted successfully!")
  }

  return (
  <>

<Header />

<div className="min-h-screen font-Poppins pb-[100px]  pt-[120px] px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-[600] text-gray-900">Resort Booking</h1>
          <p className="mt-2 text-lg text-gray-600">Book your perfect getaway today</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex rounded-lg  overflow-hidden mb-8 bg-white shadow-md">
          <button
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors ${
              activeTab === "stay" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("stay")}
          >
            <div className="flex items-center justify-center">
              <Home className="w-5 h-5 mr-2" />
              <span>Stay Booking Inquiry</span>
            </div>
          </button>
          <button
            className={`flex-1 py-4 px-6 text-center font-medium text-lg transition-colors ${
              activeTab === "picnic" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
            onClick={() => setActiveTab("picnic")}
          >
            <div className="flex items-center justify-center">
              <Sun className="w-5 h-5 mr-2" />
              <span>Day Picnic Inquiry</span>
            </div>
          </button>
        </div>

        {/* Stay Booking Form */}
        {activeTab === "stay" && (
          <div className="bg-white rounded-lg border shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-[600] text-gray-900 mb-6 pb-2 border-b border-gray-200">
              Stay Booking Details
            </h2>
            <form onSubmit={handleStaySubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name of the Booking <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={stayFormData.name}
                    onChange={handleStayInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Contact Number */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="contactNo"
                      name="contactNo"
                      value={stayFormData.contactNo}
                      onChange={handleStayInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>

                {/* Check-in Date */}
                <div>
                  <label htmlFor="checkInDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="checkInDate"
                      name="checkInDate"
                      value={stayFormData.checkInDate}
                      onChange={handleStayInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Check-out Date */}
                <div>
                  <label htmlFor="checkOutDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out Date <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="checkOutDate"
                      name="checkOutDate"
                      value={stayFormData.checkOutDate}
                      onChange={handleStayInputChange}
                      required
                      min={stayFormData.checkInDate || new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-1">
                    Type of Room <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    value={stayFormData.roomType}
                    onChange={handleStayInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="" disabled>
                      Select room type
                    </option>
                    {roomTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Number of Rooms */}
                <div>
                  <label htmlFor="numberOfRooms" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Rooms <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    id="numberOfRooms"
                    name="numberOfRooms"
                    value={stayFormData.numberOfRooms}
                    onChange={handleStayInputChange}
                    required
                    min="1"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                {/* Number of Nights */}
                <div>
                  <label htmlFor="numberOfNights" className="block text-sm font-medium text-gray-700 mb-1">
                    Number of Nights
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Clock className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="number"
                      id="numberOfNights"
                      name="numberOfNights"
                      value={stayFormData.numberOfNights}
                      readOnly
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>

                {/* Meal Plan */}
                <div>
                  <label htmlFor="mealPlan" className="block text-sm font-medium text-gray-700 mb-1">
                    Meal Plan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Utensils className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="mealPlan"
                      name="mealPlan"
                      value={stayFormData.mealPlan}
                      onChange={handleStayInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {stayMealPlans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Count Section */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Number of Guests</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Adults */}
                  <div>
                    <label htmlFor="adultsCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Adults <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="adultsCount"
                        name="adultsCount"
                        value={stayFormData.adultsCount}
                        onChange={handleStayInputChange}
                        required
                        min="1"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Kids 6-12 */}
                  <div>
                    <label htmlFor="kidsCount6To12" className="block text-sm font-medium text-gray-700 mb-1">
                      Kids (6 to below 12 years)
                    </label>
                    <input
                      type="number"
                      id="kidsCount6To12"
                      name="kidsCount6To12"
                      value={stayFormData.kidsCount6To12}
                      onChange={handleStayInputChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Kids 12-18 */}
                  <div>
                    <label htmlFor="kidsCount12To18" className="block text-sm font-medium text-gray-700 mb-1">
                      Kids (12 to below 18 years)
                    </label>
                    <input
                      type="number"
                      id="kidsCount12To18"
                      name="kidsCount12To18"
                      value={stayFormData.kidsCount12To18}
                      onChange={handleStayInputChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Book Stay
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Day Picnic Form */}
        {activeTab === "picnic" && (
          <div className="bg-white border rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="text-2xl font-[600] text-gray-900 mb-6 pb-2 border-b border-gray-200">Day Picnic Booking</h2>
            <form onSubmit={handlePicnicSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="picnic-name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name of the Booking <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="picnic-name"
                    name="name"
                    value={picnicFormData.name}
                    onChange={handlePicnicInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Contact Number */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="picnic-contactNo" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="picnic-contactNo"
                      name="contactNo"
                      value={picnicFormData.contactNo}
                      onChange={handlePicnicInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter contact number"
                    />
                  </div>
                </div>

                {/* Picnic Date */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="picnicDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Day Picnic <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Calendar className="h-5 w-5 text-gray-400" />
                    </div>
                    <input
                      type="date"
                      id="picnicDate"
                      name="picnicDate"
                      value={picnicFormData.picnicDate}
                      onChange={handlePicnicInputChange}
                      required
                      min={new Date().toISOString().split("T")[0]}
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Meal Plan */}
                <div className="col-span-2 md:col-span-1">
                  <label htmlFor="picnic-mealPlan" className="block text-sm font-medium text-gray-700 mb-1">
                    Meal Plan <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Utensils className="h-5 w-5 text-gray-400" />
                    </div>
                    <select
                      id="picnic-mealPlan"
                      name="mealPlan"
                      value={picnicFormData.mealPlan}
                      onChange={handlePicnicInputChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      {picnicMealPlans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Guest Count Section */}
              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Number of Guests</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Adults */}
                  <div>
                    <label htmlFor="picnic-adultsCount" className="block text-sm font-medium text-gray-700 mb-1">
                      Adults <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Users className="h-5 w-5 text-gray-400" />
                      </div>
                      <input
                        type="number"
                        id="picnic-adultsCount"
                        name="adultsCount"
                        value={picnicFormData.adultsCount}
                        onChange={handlePicnicInputChange}
                        required
                        min="1"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Kids 6-12 */}
                  <div>
                    <label htmlFor="picnic-kidsCount6To12" className="block text-sm font-medium text-gray-700 mb-1">
                      Kids (6 to below 12 years)
                    </label>
                    <input
                      type="number"
                      id="picnic-kidsCount6To12"
                      name="kidsCount6To12"
                      value={picnicFormData.kidsCount6To12}
                      onChange={handlePicnicInputChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  {/* Kids 12-18 */}
                  <div>
                    <label htmlFor="picnic-kidsCount12To18" className="block text-sm font-medium text-gray-700 mb-1">
                      Kids (12 to below 18 years)
                    </label>
                    <input
                      type="number"
                      id="picnic-kidsCount12To18"
                      name="kidsCount12To18"
                      value={picnicFormData.kidsCount12To18}
                      onChange={handlePicnicInputChange}
                      min="0"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Book Day Picnic
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>

    <Footer />  
  </>
  )
}
