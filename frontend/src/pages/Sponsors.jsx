import React from "react";
import SponsorInterestSection from "../components/sections/SponsorInterestSection.jsx";

// Placeholder sponsors with links
const sponsorsTier1 = [
    { img: "/assets/sponsor1.jpg", link: "https://google.com" },
    { img: "/assets/sponsor2.jpg", link: "https://google.com" }
];

const sponsorsTier2 = [
    { img: "/assets/sponsor3.jpg", link: "https://google.com" },
    { img: "/assets/sponsor4.jpg", link: "https://google.com" },
    { img: "/assets/sponsor5.jpg", link: "https://google.com" }
];

const sponsorsTier3 = [
    { img: "/assets/sponsor6.jpg", link: "https://google.com" },
    { img: "/assets/sponsor7.jpg", link: "https://google.com" },
    { img: "/assets/sponsor8.jpg", link: "https://google.com" },
    { img: "/assets/sponsor9.jpg", link: "https://google.com" }
];

function Sponsors() {
    return (
        <section className="w-full bg-[#1A1A1A] text-white py-20 px-8 text-center">
            {/* Title */}
            <h2 className="text-5xl font-bold text-[#EBD99F] mb-8">Our Sponsors</h2>

            <SponsorInterestSection></SponsorInterestSection>

            {/* Tier 1 - Largest Donors */}
            <div className="max-w-6xl mx-auto mb-8">
                <h3 className="text-3xl font-semibold text-[#DAAA00] mb-4">Gold Sponsors ($xxxxx)</h3>
                <div className="flex flex-wrap justify-center gap-4"> 
                    {sponsorsTier1.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <img src={sponsor.img} alt={`Sponsor ${index + 1}`} className="w-[350px] h-[200px] rounded-lg shadow-lg border border-[#DAAA00] p-2 hover:opacity-80 transition" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Tier 2 - Mid-Level Donors */}
            <div className="max-w-6xl mx-auto mb-8">
                <h3 className="text-2xl font-semibold text-[#EBD99F] mb-4">Silver Sponsors ($yyyy)</h3>
                <div className="flex flex-wrap justify-center gap-4">
                    {sponsorsTier2.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <img src={sponsor.img} alt={`Sponsor ${index + 1}`} className="w-[280px] h-[160px] rounded-lg shadow-md border border-[#EBD99F] p-2 hover:opacity-80 transition" />
                        </a>
                    ))}
                </div>
            </div>

            {/* Tier 3 - General Sponsors */}
            <div className="max-w-6xl mx-auto">
                <h3 className="text-xl font-semibold text-[#C4BFC0] mb-4">Bronze Sponsors ($zzz)</h3>
                <div className="flex flex-wrap justify-center gap-3"> 
                    {sponsorsTier3.map((sponsor, index) => (
                        <a key={index} href={sponsor.link} target="_blank" rel="noopener noreferrer">
                            <img src={sponsor.img} alt={`Sponsor ${index + 1}`} className="w-[220px] h-[130px] rounded-lg shadow-sm border border-[#C4BFC0] p-1 hover:opacity-80 transition" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Sponsors;