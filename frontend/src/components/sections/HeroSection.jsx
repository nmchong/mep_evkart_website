import React from "react";
import SocialMediaButtons from "../ui/SocialMediaButtons";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-[#CFB991] pt-50 pb-20 text-black">
            {/* large title */}
            <h1 className="text-7xl font-bold mb-15">
                MEP evKart
            </h1>

            {/* social media buttons */}
            <SocialMediaButtons></SocialMediaButtons>
        </section>
    );
};

export default HeroSection;
