import React from 'react';
import { Link } from "react-router-dom"
import teamPhoto from "../assets/teamPhoto.jpg";

function AboutUsSection() {
    return (
        <section className="flex flex-col md:flex-row items-center max-w-5xl mx-auto p-6 gap-8">
            {/* image */}
            <div className="w-full md:w-1/2">
                <img src={teamPhoto} alt="Team Photo" className="w-full h-auto rounded-lg shadow-lg" />
            </div>

            {/* text content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
                <p className="text-gray-600 mt-4">
                    In collaboration with the Minority Engineering Program (MEP), the GoKart team will design, build, and test go-karts for Purdue's eVGrand Prix competition.
                </p>
                <button className="mt-6 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
                    <Link to="/about" className="text-white">Learn More</Link>
                </button>
            </div>
        </section>
    );
}

export default AboutUsSection;
