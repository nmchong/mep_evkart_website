import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaYoutube, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="w-full bg-[#1A1A1A] text-[#C4BFC0] pt-8 pb-6 px-8">
            {/* top divider line */}
            <div className="border-t border-[#555960] mb-6"></div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

                {/* about column section */}
                <div>
                    <h3 className="text-xl font-semibold text-white">MEP evKart Team</h3>
                    <p className="mt-2 text-[#9D9795]">
                        The MEP Kart Team competes in Purdue's collegiate evGrand Prix, showcasing engineering excellence.
                    </p>
                    
                    {/* social media icons */}
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="text-[#9D9795] hover:text-[#DAAA00] transition">
                            <FaGithub size={20} />
                        </a>
                        <a href="#" className="text-[#9D9795] hover:text-[#DAAA00] transition">
                            <FaInstagram size={20} />
                        </a>
                        <a href="#" className="text-[#9D9795] hover:text-[#DAAA00] transition">
                            <FaYoutube size={20} />
                        </a>
                    </div>
                </div>

                {/* quick links column section */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Quick Links</h3>
                    <ul className="mt-2 space-y-1">
                        <li>
                            <Link
                                to="/about"
                                className="text-[#9D9795] hover:text-[#DAAA00] transition"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/sponsors"
                                className="text-[#9D9795] hover:text-[#DAAA00] transition"
                                onClick={() => window.scrollTo(0, 0)}
                            >
                                Our Sponsors
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* contact info column section */}
                <div>
                    <h3 className="text-xl font-semibold text-white">Contact Us</h3>
                    <p className="flex items-center space-x-2 mt-2">
                        <FaEnvelope className="text-[#DAAA00] hover:text-[#EBD99F] transition duration-300" />
                        <a href="mailto:dev@teamkart.org" className="text-[#9D9795] hover:text-[#DAAA00] transition">
                            email@purdue.edu
                        </a>
                    </p>
                    <p className="flex items-center space-x-2 mt-2">
                        <FaMapMarkerAlt className="text-[#DAAA00] hover:text-[#EBD99F] transition duration-300" />
                        <span className="text-[#9D9795]">111 evKart Ave, West Lafayette, IN 90909</span>
                    </p>
                </div>
            </div>

            {/* bottom footer line */}
            <div className="border-t border-[#555960] mt-6 pt-4 flex flex-col md:flex-row justify-between items-center text-sm text-[#9D9795]">
                <p>© {new Date().getFullYear()} MEP evKart Team. All rights reserved.</p>
                <a
                    href="https://engineering.purdue.edu/MEP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 text-[#9D9795] hover:text-[#DAAA00] transition"
                >
                    <span>Minority Engineering Program</span>
                    <span className="text-lg">↗</span>
                </a>
            </div>
        </footer>
    );
}

export default Footer;
