import React from 'react';
import blog1 from "../../../public/Basalt/B5.jpg";
import Footer from '../../Component/footer/Footer';
import Header from '../../Component/header/Header';

export default function BlogDetails() {
    return (
        <>
        <Header />
        <div>
            <div className="2xl:w-[1400px] font-Poppins !bg-[#] w-[90%] md:w-[80%] pt-[110px] pb-[40px] flex flex-col gap-[0px] h-[100%] mx-auto px-2 py-8">
                {/* Hero Banner */}
                <div className="relative w-full md:h-[450px] mb-8 bg-[#0a192f] rounded-lg overflow-hidden">
                    <img
                        src="https://res.cloudinary.com/dn1jdxyoq/image/upload/v1741840371/pk5n5ozp1wvgfagnvwug.jpg"
                        alt="Basalt Paradise Resort"
                        fill
                        className="object-cover w-[100%] h-[100%]"
                        priority
                    />
                </div>

                {/* Main Content */}
                <article className="space-y-5">
                    <h1 className="text-[18px] md:text-[23px] font-[500] text-gray-900">
                        Basalt Paradise: Experience Luxury in Nature’s Embrace
                    </h1>

                    <p className="text-gray-600 md:text-[16px] text-[14px]">
                        Escape to Basalt Paradise, where luxury meets nature, offering you an unforgettable retreat surrounded by breathtaking landscapes and world-class hospitality.
                    </p>

                    <p className="text-gray-700 leading-relaxed md:text-[16px] text-[14px]">
                        Nestled in the heart of pristine nature, Basalt Paradise is more than just a resort—it’s an experience. Whether you seek relaxation, adventure, or a perfect blend of both, our resort caters to every traveler’s dream getaway.
                    </p>

                    <section>
                        <h2 className="text-[18px] md:text-[20px] font-[500] text-gray-900 mb-2">Why Choose Basalt Paradise?</h2>
                        <p className="text-gray-700 mb-4 md:text-[16px] text-[14px]">
                            Our resort is designed to offer a perfect mix of tranquility, luxury, and adventure. Here’s why guests love Basalt Paradise:
                        </p>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-[18px] md:text-[20px] font-[500] text-gray-900">Scenic Beauty & Serene Atmosphere:</h3>
                                <p className="text-gray-700 md:text-[16px] text-[14px]">
                                    Immerse yourself in breathtaking views, lush landscapes, and the calming sounds of nature, making every moment memorable.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-[18px] md:text-[20px] font-[500] text-gray-900">Luxurious Accommodations:</h3>
                                <p className="text-gray-700">
                                    Stay in elegantly designed villas and suites, offering the perfect blend of comfort and modern amenities for a relaxing retreat.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-[18px] md:text-[20px] font-[500] text-gray-900 mb-4">Exclusive Experiences</h2>
                        <p className="text-gray-700 md:text-[16px] text-[14px]">
                            From private beachside dining to adventurous treks, Basalt Paradise offers a curated selection of experiences tailored to your desires.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[18px] md:text-[20px] font-[500] text-gray-900 mb-4">Gourmet Delights</h2>
                        <p className="text-gray-700 md:text-[16px] text-[14px]">
                            Indulge in a culinary journey with our world-class chefs serving exquisite local and international delicacies made from the freshest ingredients.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-[18px] md:text-[20px] font-[500] text-gray-900 mb-4">Relaxation & Wellness</h2>
                        <p className="text-gray-700 md:text-[16px] text-[14px]">
                            Rejuvenate your senses with our premium spa treatments, yoga sessions, and wellness programs designed to refresh your body and mind.
                        </p>
                    </section>
                </article>
            </div>
        </div>
        <Footer />
        </>
    );
}
