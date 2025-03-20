import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import images
import Photo1 from "../../assets/Photo1.jpg";
import Photo2 from "../../assets/Photo2.jpg";
import Photo3 from "../../assets/Photo3.jpg";
import Photo4 from "../../assets/Photo4.jpg";
import Photo5 from "../../assets/Photo5.jpg";
import Photo6 from "../../assets/Photo6.jpg";
import Photo7 from "../../assets/Photo7.jpg";
import Photo8 from "../../assets/Photo8.jpg";
import Photo9 from "../../assets/Photo9.jpg";
import Photo10 from "../../assets/Photo10.jpg";

// Array of images
const images = [Photo1, Photo2, Photo3, Photo4, Photo5, Photo6, Photo7, Photo8, Photo9, Photo10];

const MediaCarouselSection = () => {
    // Ensure buttons are properly referenced
    const [prevEl, setPrevEl] = useState(null);
    const [nextEl, setNextEl] = useState(null);

    return (
        <section className="w-full bg-[#1A1A1A] text-white py-16 px-8 text-center">
            {/* Section Header */}
            <h2 className="text-5xl font-bold text-[#EBD99F] mb-8">Media</h2>

            {/* Carousel Container */}
            <div className="relative max-w-3xl mx-auto border border-[#EBD99F] rounded-lg shadow-lg">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    navigation={{ prevEl, nextEl }}
                    className="relative rounded-lg shadow-lg"
                >
                    {images.map((image, index) => (
                        <SwiperSlide key={index}>
                            <img src={image} alt={`Media ${index + 1}`} className="w-full h-auto rounded-lg" />
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Navigation Buttons - Ensure They're Visible */}
                <button
                    ref={(node) => setPrevEl(node)}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#DAAA00] hover:bg-[#8E6F3E] text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md transition z-50"
                >
                    ❮
                </button>
                <button
                    ref={(node) => setNextEl(node)}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#DAAA00] hover:bg-[#8E6F3E] text-black w-12 h-12 flex items-center justify-center rounded-full shadow-md transition z-50"
                >
                    ❯
                </button>
            </div>

            {/* Pagination Dots Styling */}
            <style>
                {`
                .swiper-pagination-bullet {
                    background: #DAAA00 !important; /* Gold for inactive dots */
                    opacity: 0.7;
                }
                .swiper-pagination-bullet-active {
                    background: #FFFFFF !important; /* White for active dot */
                    opacity: 1;
                }
                `}
            </style>
        </section>
    );
};

export default MediaCarouselSection;
