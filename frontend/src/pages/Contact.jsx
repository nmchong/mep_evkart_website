import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import SponsorInterestSection from "../components/sections/SponsorInterestSection";

function Contact() {
    return (
        <section className="w-full bg-[#1A1A1A] text-white py-20 px-8 text-center">
            {/* Title */}
            <h2 className="text-5xl font-bold text-[#EBD99F] mb-8">Contact Us</h2>

            {/* General Inquiries Section */}
            <div className="max-w-4xl mx-auto bg-[#2D2F36] p-8 rounded-lg shadow-md border border-[#EBD99F] text-left mb-12">
                <h3 className="text-3xl font-semibold text-[#DAAA00] mb-4">General Inquiries</h3>
                <p className="text-[#C4BFC0] mb-6 text-lg">
                    Have questions or want to get in touch? Reach out to us using the details below.
                </p>
                
                <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center space-x-4">
                        <FaEnvelope className="text-[#DAAA00] text-2xl" />
                        <a href="mailto:contact@evkart.com" className="text-[#EBD99F] hover:text-[#DAAA00] transition text-lg">
                            contact@evkart.com
                        </a>
                    </div>
                    
                    {/* Phone */}
                    <div className="flex items-center space-x-4">
                        <FaPhone className="text-[#DAAA00] text-2xl" />
                        <a href="tel:+1234567890" className="text-[#EBD99F] hover:text-[#DAAA00] transition text-lg">
                            +1 (234) 567-890
                        </a>
                    </div>
                    
                    {/* Address */}
                    <div className="flex items-center space-x-4">
                        <FaMapMarkerAlt className="text-[#DAAA00] text-2xl" />
                        <p className="text-[#C4BFC0] text-lg">123 Purdue Street, West Lafayette, IN 47906</p>
                    </div>
                </div>
            </div>
            
            {/* Sponsor Interest Section */}
            <SponsorInterestSection />

            {/* Interested in Joining Our Team? */}
            <div className="max-w-4xl mx-auto bg-[#2D2F36] p-8 rounded-lg shadow-md border border-[#EBD99F] text-left mt-12">
                <h3 className="text-3xl font-semibold text-[#DAAA00] mb-4">Interested in Joining Our Team?</h3>
                <p className="text-[#C4BFC0] mb-4 text-lg">
                    Reach out to us via email if you're interested in joining our team!
                </p>
                <div className="flex items-center space-x-4">
                    <FaEnvelope className="text-[#DAAA00] text-2xl" />
                    <a href="mailto:join@evkart.com" className="text-[#EBD99F] hover:text-[#DAAA00] transition text-lg">
                        join@evkart.com
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;