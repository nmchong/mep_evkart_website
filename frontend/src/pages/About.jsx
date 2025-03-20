import React from "react";
import AboutPhoto1 from "../assets/AboutPhoto1.jpg";
import AboutPhoto2 from "../assets/AboutPhoto2.jpg";
import AboutPhoto3 from "../assets/AboutPhoto3.jpg";

function About() {
    return (
        <section className="w-full bg-[#1A1A1A] text-white py-16 px-8">
            {/* about us box */}
            <section className="w-full bg-[#1A1A1A] text-white py-8 px-8"> 
                <div className="max-w-6xl mx-auto border border-[#EBD99F] rounded-xl p-10 text-center shadow-lg bg-[#222222]/95 backdrop-blur-lg"> {/* Reduced opacity slightly */}
                    {/* header */}
                    <h2 className="text-6xl font-bold text-[#EBD99F]">About Us</h2>
                    
                    {/* paragraph content */}
                    <div className="mt-6 text-lg text-[#C4BFC0] space-y-6">
                        <p>
                            In collaboration with the{" "}
                            <a href="https://engineering.purdue.edu/MEP" target="_blank" rel="noopener noreferrer"
                            className="text-[#EBD99F] font-semibold hover:text-[#DAAA00] transition">
                                Minority Engineering Program (MEP)
                            </a>, 
                            the GoKart team will design, build, and test go-karts for Purdue's eVGrand Prix competition.
                        </p>
                        <p>
                            Our team focuses on fostering innovation and teamwork, empowering students to lead and gain hands-on 
                            experience in engineering, mechanics, and competition strategy.
                        </p>
                    </div>
                </div>
            </section>

            {/* image and text sections */}
            <div className="max-w-7xl mx-auto mt-12 space-y-28 px-6">
                
                {/* section 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-[70%] flex justify-center">
                        <img src={AboutPhoto1} alt="Students Lead" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute top-[30%] right-8 md:w-2/5 w-4/5 h-[50%] border border-[#DAAA00] bg-[#0F0F0F]/88 backdrop-blur-2xl rounded-lg p-10 shadow-lg"> {/* Increased blur, reduced opacity */}
                        <h3 className="text-3xl font-bold text-[#EBD99F]">Students Lead</h3>
                        <p className="text-[#C4BFC0] mt-3 leading-relaxed">
                            With minimal adult intervention, students make their own choices from kickoff to competition. Every decision from design to picklist is made by student leads.
                        </p>
                    </div>
                </div>

                {/* section 2 */}
                <div className="relative flex flex-col md:flex-row-reverse items-center">
                    <div className="md:w-[70%] flex justify-center">
                        <img src={AboutPhoto2} alt="Students Learn" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute top-[30%] left-8 md:w-2/5 w-4/5 h-[50%] border border-[#DAAA00] bg-[#0F0F0F]/88 backdrop-blur-2xl rounded-lg p-10 shadow-lg">
                        <h3 className="text-3xl font-bold text-[#EBD99F]">Students Learn</h3>
                        <p className="text-[#C4BFC0] mt-3 leading-relaxed">
                            Blah blah blah equips students with the skills necessary to thrive in their respective fields, offering specialized online courses.
                        </p>
                    </div>
                </div>

                {/* section 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                    <div className="md:w-[70%] flex justify-center">
                        <img src={AboutPhoto3} alt="More Info" className="w-full rounded-lg shadow-lg" />
                    </div>
                    <div className="absolute top-[30%] right-8 md:w-2/5 w-4/5 h-[50%] border border-[#DAAA00] bg-[#0F0F0F]/88 backdrop-blur-2xl rounded-lg p-10 shadow-lg">
                        <h3 className="text-3xl font-bold text-[#EBD99F]">More Info</h3>
                        <p className="text-[#C4BFC0] mt-3 leading-relaxed">
                            As a career technical education (CTE) course, our goal is to prepare students for a career in STEM, focusing on engineering, design, and computer science.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
