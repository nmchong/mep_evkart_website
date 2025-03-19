import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const location = useLocation();

    useEffect(() => {

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // hide navbar if scroll down 80px, show if scroll up
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY, location.pathname]);

    return (
        <nav
            className="bg-black p-4 text-[#EBD99F] flex justify-between items-center fixed w-full top-0 z-50 transition-transform duration-500 ease-in-out"
            style={{
                transform: isVisible ? "translateY(0)" : "translateY(-100%)",
                transition: "transform 0.5s ease-in-out",
            }}
        >
            <div className="text-xl font-bold">
                <Link to="/" className="hover:text-[#DAAA00] transition">MEP evKart</Link>
            </div>
            <div className="space-x-4">
                <Link to="/" className="hover:bg-[#8E6F3E] px-4 py-2 rounded transition">Home</Link>
                <Link to="/about" className="hover:bg-[#8E6F3E] px-4 py-2 rounded transition">About</Link>
                <Link to="/sponsors" className="hover:bg-[#8E6F3E] px-3 py-2 rounded transition">Sponsors</Link>
                <Link to="/contact" className="hover:bg-[#8E6F3E] px-3 py-2 rounded transition">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar;
