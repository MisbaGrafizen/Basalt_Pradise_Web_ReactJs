import React from 'react'
import Footer from '../Component/footer/Footer'
import Header from '../Component/header/Header'

export default function PrivacyPolicy() {
  return (
    <>
      <Header />

      <section className="flex  flex-col  md:w-[75%] 2xl:w-[1300px]  pb-[40px] pt-[130px] mx-auto">
      <div className="flex flex-col">
          <h1 className="flex font-[700] text-[35px] font-Poppins">
             Privacy & Policy
          </h1>
        
        </div>

        <div className="flex w-[100%]">
          <div className="space-y-8 pb-[30px] text-gray-700">
            {/* Introduction */}
            <p className="text-[15px] font-Poppins font-[400] leading-relaxed">
              <b className="font-[500] font-Poppins">Basalt Paradise</b> is
              committed to protecting and respecting your privacy. This Privacy
              Policy outlines how we collect, use, and protect your personal
              information when you interact with our website, book a stay at
              our resort, or use our services. By accessing or using our
              services, you agree to the terms of this Privacy Policy.
            </p>

            {/* Section 1 */}
            <section className="space-y-4">
              <h2 className="text-2xl font-[500] font-Poppins text-gray-900">
                1.Information Collection

              </h2>
              <p className="font-Poppins font-[500]">
              We collect personal information when you make a reservation, subscribe to our newsletter, or contact us. This may include your name, email address, phone number, and payment details.

              </p>
              <ul className="list-disc text-[15px] pl-6 space-y-2">
                <li className="font-Poppins font-[400]">
                  <span className="font-Poppins text-[15px] font-[600]">
                    Personal Information:
                  </span>{" "}
                  This may include your name, address, phone number, email
                  address, and payment details when making a reservation.
                </li>
                <li className="font-Poppins font-[400]">
                  <span className="font-Poppins text-[15px] font-[600]">Booking Data:</span>{" "}
                  Information about your stay, such as check-in/check-out dates,
                  special requests, and preferences.
                </li>
                <li className="font-Poppins text-[15px] font-[400]">
                  <span className="font-Poppins font-[600]">Technical Data:</span>{" "}
                  We collect information about your device and interactions with
                  our website, including IP addresses, browser types, and usage
                  patterns.
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section className="space-y-3">
              <h2 className="text-[20px] font-[600] font-Poppins text-gray-900">
                2. Use of Information

              </h2>
              <p className="font-Poppins font-[600]">
              Your information is used to process reservations, improve our services, and send promotional materials (with your consent).

              </p>
              {/* <ul className="list-disc pl-6 font-Poppins space-y-2">
                <li className="font-Poppins font-[400]">
                  Processing bookings and providing hospitality services.
                </li>
                <li className="font-Poppins font-[400]">
                  Enhancing customer experience and personalizing stays.
                </li>
                <li className="font-Poppins font-[400]">
                  Sending confirmations, updates, and promotional offers.
                </li>
                <li className="font-Poppins font-[400]">
                  Complying with legal obligations and security measures.
                </li>
              </ul> */}
            </section>

            {/* Section 3 */}
            <section className="space-y-3">
              <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
                3. Data Sharing
              </h2>
              <p className="font-Poppins font-[500]">
              We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li className="font-Poppins font-[400]">
                  <span className="font-Poppins font-[500]">
                    Service Providers:
                  </span>{" "}
                  Third parties assisting in reservations, payment processing,
                  and customer service.
                </li>
                <li className="font-Poppins font-[400]">
                  <span className="font-Poppins font-[500]">Legal Authorities:</span>{" "}
                  Compliance with legal requests and regulations.
                </li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
                4. Your Rights
              </h2>
              <p className="font-Poppins font-[400]">
              You have the right to access, correct, or delete your personal information. To exercise these rights, contact us at (insert contact information).
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
                5. Changes to This Policy
              </h2>
              <p className="font-Poppins font-[400]">
              We may update this policy periodically. Changes will be posted on this page with an updated revision date.

              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-[20px] font-[500] font-Poppins text-gray-900">
                6. Contact Us
              </h2>
              <p className="font-Poppins font-[400]">
                If you have any questions about our Privacy Policy, contact us
                at info@basaltparadise.com.
              </p>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
