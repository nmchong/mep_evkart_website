import React from "react";
import kartImage from "../../assets/KartTrophyPhoto.jpg";

function KartSection() {
    return (
        <section className="w-full bg-[#2D2F36] py-16 flex flex-col items-center text-center">
            {/* Heading */}
            <h2 className="text-4xl md:text-4xl font-bold text-[#EBD99F]">
                Meet Our Kart
            </h2>
            <p className="text-[#C4BFC0] text-lg tracking-wide mt-2">
                Our 2024 Kart
            </p>

            {/* Image Container with Glow Border */}
            <div className="relative mt-8">
                <div className="border-2 border-[#555960] rounded-xl p-4 transition-all duration-300 hover:border-[#DAAA00] hover:shadow-[0px_0px_25px_#DAAA00]">
                    <img 
                        src={kartImage} 
                        alt="MEP Kart" 
                        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
}

export default KartSection;
