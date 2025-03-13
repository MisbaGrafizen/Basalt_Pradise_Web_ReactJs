import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Component/header/Header";
import Footer from "../../Component/footer/Footer";

export default function MyBookings() {
const navigate = useNavigate();

const bookingData = [
  {
    id: 1,
    guestName: "Ankush Harmu",
    totalPersons: 3,
    _id: "123456",
    product: { name: "Deluxe Room" },
    userId: { mobileNumber: "9876543210" },
    totalMegaAmount: 5000,
    startDate: "2023-02-15",
    endDate: "2023-02-20"
  }
];

const formatDate = (date) => {
  const options = { day: '2-digit', month: 'short', year: 'numeric' };
  return new Date(date).toLocaleDateString('en-GB', options);
};

const handleBack = () => {
  navigate(-1);
};

  return (
    <>
    <Header />
      <div className=" 2xl:w-[1400px] !bg-[#] pt-[120px]   w-[75%]  flex flex-col gap-[62px] h-[100%] mx-auto">
        <div className="space-y-6">
          {bookingData.map((booking) => (
            <div
              key={booking?.id}
              className="bg-white rounded-[10px] ] border-[1px] border-[#7442ff] shadow-lg  h-[220px] overflow-hidden hover:shadow-xl transition-all duration-300 transform"
            >
              <div className="px-6 py-[15px] relative">
                <div className="absolute top-0 right-0 w-40 h-40    bg-yellow-50 rounded-bl-full z-0 opacity-50"></div>
                <div className="relative space-y-4 z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-4">
                      <div className="w-[40px] h-[40px] bg-yellow-100 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-[20px] w-[20px] text-[#7442ff]"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-[14px] font-[500]  font-Poppins text-gray-800">
                          {booking.guestName}
                        </h3>
                        <p className="text-gray-500  font-Poppins text-[14px]">
                          +{(booking?.totalPersons || 0) - 1} Guests
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-[11px]  font-Poppins text-gray-500">Booking ID</p>
                      <p className="font-mono text-[13px] text-gray-700">{booking?._id}</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <p className="text-gray-700  font-Poppins font-medium">
                      {booking?.product?.name}
                    </p>
                    <div className="text-right">
                      <p className="text-sm  font-Poppins text-[11px] text-gray-500">Contact</p>
                      <p className=" font-Poppins text-[13px] text-gray-700">
                        {booking?.userId?.mobileNumber}
                      </p>
                    </div>
                  </div>
                  <div className="mt-1 flex justify-between items-end">
                    <div className="flex gap-4">
                      <div className="bg-yellow-50 px-4 py-2 rounded-[6px] shadow-md">
                        <p className="text-[12px]  font-Poppins text-gray-500">Check-In</p>
                        <p className="font-[500]  font-Poppins t">
                          {formatDate(booking?.startDate)}
                        </p>
                      </div>
                      <div className="bg-yellow-50 px-4 shadow-md py-[5px] rounded-[6px]">
                        <p className="text-[12px]  font-Poppins text-gray-500">Check-Out</p>
                        <p className="font-[500]  font-Poppins ">
                          {formatDate(booking?.endDate)}
                        </p>
                      </div>
                    </div>
                    <button className="w-[180px] h-[45px]  justify-center mt-6 flex items-center  font-Poppins px-5 py-3 basalt text-white rounded-lg hover:bg-green-700 transition-colors shadow-md transform hover:scale-100 duration-300">
                 View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
