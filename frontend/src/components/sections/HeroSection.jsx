import React from "react";
import SocialMediaButtons from "../ui/SocialMediaButtons";

const HeroSection = () => {
    return (
        <section className="flex flex-col items-center justify-center bg-[#CFB991] py-12 md:py-20 pb-10 text-black">
            {/* large title */}
            <h1 className="text-6xl font-bold text-center p-12 mb-10">
                MEP evKart
            </h1>

            {/* social media buttons */}
            <SocialMediaButtons></SocialMediaButtons>
        </section>
    );
};

export default HeroSection;
