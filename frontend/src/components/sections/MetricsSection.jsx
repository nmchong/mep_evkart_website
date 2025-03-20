import React from "react";
import { FaCog, FaTrophy, FaUsers } from "react-icons/fa";

function MetricsSection() {
    return (
        <section className="w-full bg-[#555960] py-6">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* card 1 */}
                    <div className="bg-[#2D2F36] p-6 rounded-lg shadow-lg text-center border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3A3D46] hover:border-[#DAAA00]">
                        <FaCog className="text-[#DAAA00] text-4xl mx-auto mb-4 transition-all duration-300 group-hover:text-[#EBD99F]" />
                        <h3 className="text-[#CFB991] text-xl font-semibold transition-all duration-300 group-hover:text-white">Feature</h3>
                        <p className="text-[#EBD99F] mt-2 transition-all duration-300 group-hover:text-white">Has x feature that makes it cool</p>
                    </div>

                    {/* card 2 */}
                    <div className="bg-[#2D2F36] p-6 rounded-lg shadow-lg text-center border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3A3D46] hover:border-[#DAAA00]">
                        <FaTrophy className="text-[#DAAA00] text-4xl mx-auto mb-4 transition-all duration-300 group-hover:text-[#EBD99F]" />
                        <h3 className="text-[#CFB991] text-xl font-semibold transition-all duration-300 group-hover:text-white">#1 Rank</h3>
                        <p className="text-[#EBD99F] mt-2 transition-all duration-300 group-hover:text-white">In whatever competition</p>
                    </div>

                    {/* card 3 */}
                    <div className="bg-[#2D2F36] p-6 rounded-lg shadow-lg text-center border-2 border-transparent transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-[#3A3D46] hover:border-[#DAAA00]">
                        <FaUsers className="text-[#DAAA00] text-4xl mx-auto mb-4 transition-all duration-300 group-hover:text-[#EBD99F]" />
                        <h3 className="text-[#CFB991] text-xl font-semibold transition-all duration-300 group-hover:text-white">Student Built</h3>
                        <p className="text-[#EBD99F] mt-2 transition-all duration-300 group-hover:text-white">Designed and constructed by students</p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MetricsSection;
