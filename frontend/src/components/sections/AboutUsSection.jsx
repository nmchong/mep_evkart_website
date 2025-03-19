import React from 'react';
import { Link } from "react-router-dom";
import TeamPhoto from "../../assets/TeamPhoto.jpg";

function AboutUsSection() {
    return (
        <section className="w-full flex flex-col md:flex-row items-center mx-auto p-10 gap-12 bg-[#555960]">
            {/* image */}
            <div className="w-full md:w-1/2">
                <img src={TeamPhoto} alt="Team Photo" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* text content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-left">
                <h2 className="text-4xl font-bold text-[#CFB991] font-sans tracking-wide">
                    About Us
                </h2>
                <p className="text-[#EBD99F] mt-4 leading-relaxed text-lg font-sans">
                    In collaboration with the Minority Engineering Program (MEP), the GoKart team will design, build, and test go-karts for Purdue's eVGrand Prix competition. placeholder text blah blah blah
                </p>
                <Link 
                    to="/about"
                    className="mt-6 px-6 py-3 bg-[#DAAA00] text-black font-semibold rounded-lg shadow-md hover:bg-[#8E6F3E] transition font-sans text-lg cursor-pointer w-fit inline-flex items-center justify-center"
                    onClick={() => window.scrollTo(0, 0)}
                >
                    Learn More
                </Link>





            </div>
        </section>
    );
}

export default AboutUsSection;
