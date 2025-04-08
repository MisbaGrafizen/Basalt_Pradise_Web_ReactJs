import React from 'react'
import Header from '../Component/header/Header'
import Footer from '../Component/footer/Footer'

export default function Terms() {
  return (
    <>

      <Header />

      <section className="flex md:w-[75%] 2xl:w-[1300px] flex-col pb-[40px] pt-[130px] mx-auto">
        <div className="flex flex-col">
          <h1 className="flex font-[700] text-[35px] font-Poppins">
          Terms & Conditions:
          </h1>

        </div>
        <div className="flex w-[100%]">
          <div className="space-y-8 pb-[30px] text-gray-700">
            {/* Introduction */}
            <p className="text-[15px] font-Poppins font-[400] leading-relaxed">
              <b className="font-[500] font-Poppins">Basalt Paradise</b> welcomes you to our resort. These Terms and Conditions govern your use of our website and services. By booking a stay or using our services, you agree to comply with these terms.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
                1. Acceptance of Terms
              </h2>
              <ul className="list-disc text-[15px] pl-6 space-y-2">
                <li className="font-Poppins font-[400]">By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
                .</li>
             
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
                2. Reservations and Payments
              </h2>
              <ul className="list-disc pl-6 font-Poppins space-y-2">
                <li className="font-Poppins font-[400]">Booking Confirmation: All reservations are subject to availability and are confirmed upon receipt of full payment.</li>
                <li className="font-Poppins font-[400]">Payment Methods: We accept major credit cards and other specified payment methods</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-[22px] font-[500] font-Poppins text-gray-900">
                3. Cancellation and Refunds
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-Poppins font-[400]">Cancellation Policy: Cancellations made [insert number] days prior to arrival will receive a full refund. Cancellations made within [insert number] days will incur a [insert percentage]% fee.</li>
                <li className="font-Poppins font-[400]">No-Show Policy: Failure to arrive without prior notice will result in a full charge for the reservation period..</li>

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
