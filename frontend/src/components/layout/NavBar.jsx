import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-black p-4 text-[#EBD99F] flex justify-between items-center">
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
