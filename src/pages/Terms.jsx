import React from 'react'
import Header from '../Component/header/Header'
import Footer from '../Component/footer/Footer'

export default function Terms() {
  return (
 <>

<Header />

   <section className="flex md:w-[75%] 2xl:w-[1200px] flex-col pb-[40px] pt-[130px] mx-auto">
      <div className="flex w-[100%]">
        <div className="space-y-8 pb-[30px] text-gray-700">
          {/* Introduction */}
          <p className="text-[15px] font-Poppins font-[400] leading-relaxed">
            <b className="font-[500] font-Poppins">Basalt Paradise</b> welcomes you to our resort. These Terms and Conditions govern your use of our website and services. By booking a stay or using our services, you agree to comply with these terms.
          </p>

          {/* Section 1 */}
          <section className="space-y-4">
            <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
              1. Booking & Reservations
            </h2>
            <ul className="list-disc text-[15px] pl-6 space-y-2">
              <li className="font-Poppins font-[400]">All reservations are subject to availability and confirmation.</li>
              <li className="font-Poppins font-[400]">A valid payment method is required to secure your booking.</li>
              <li className="font-Poppins font-[400]">Cancellation and modification policies vary based on the booking type.</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
              2. Check-in & Check-out
            </h2>
            <ul className="list-disc pl-6 font-Poppins space-y-2">
              <li className="font-Poppins font-[400]">Check-in time is from 3:00 PM, and check-out is by 11:00 AM.</li>
              <li className="font-Poppins font-[400]">Early check-in and late check-out are subject to availability and additional charges.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
              3. Guest Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li className="font-Poppins font-[400]">Guests must adhere to resort policies and regulations.</li>
              <li className="font-Poppins font-[400]">Damages caused to property must be reported and may incur charges.</li>
              <li className="font-Poppins font-[400]">Illegal activities and misconduct will result in immediate eviction.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
              4. Payment & Fees
            </h2>
            <p className="font-Poppins font-[400]">
              Payment is required at the time of booking or upon check-in. Additional charges for services, such as spa treatments or room service, will be added to your final bill.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-2">
            <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
              5. Liability & Disclaimers
            </h2>
            <p className="font-Poppins font-[400]">
              Basalt Paradise is not responsible for loss or theft of personal belongings. Guests are advised to use in-room safes where available.
            </p>
          </section>

          {/* Section 6 */}
          <section className="space-y-2">
            <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
              6. Amendments & Contact
            </h2>
            <p className="font-Poppins font-[400]">
              We reserve the right to amend these terms at any time. For any questions, contact us at info@basaltparadise.com.
            </p>
          </section>
        </div>
      </div>
    </section>

<Footer />

 </>
  )
}
