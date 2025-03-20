import React from "react";

function SponsorInterestSection() {
    return (
        <div className="max-w-4xl mx-auto bg-[#2D2F36] p-6 rounded-lg shadow-md border border-[#EBD99F] mb-12">
            <h3 className="text-3xl font-semibold text-[#DAAA00]">Interested in Becoming a Sponsor?</h3>
            <p className="text-[#C4BFC0] mt-3">
                Support our team and gain exposure while making a difference in the community. We offer various sponsorship tiers to fit your company’s goals.
            </p>
            <a href="https://google.com" target="_blank" rel="noopener noreferrer" 
                className="inline-block mt-4 px-6 py-2 bg-[#DAAA00] text-black font-semibold rounded-lg shadow-md hover:bg-[#8E6F3E] transition">
                Learn More
            </a>
        </div>
    );
}

export default SponsorInterestSection;