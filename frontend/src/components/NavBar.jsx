import { Link } from "react-router-dom";

function NavBar() {
    return (
        <nav className="bg-blue-900 p-4 text-white flex justify-between items-center">
            <div className="text-xl font-bold">
                    <Link to="/">MEP evKart</Link>
            </div>
            <div className="space-x-4">
                <Link to="/" className="hover:bg-gray-800 px-4 py-2 rounded m-0">Home</Link>
                <Link to="/about" className="hover:bg-gray-800 px-4 py-2 rounded m-0">About</Link>
                <Link to="/sponsors" className="hover:bg-gray-800 px-3 py-2 rounded m-0">Sponsors</Link>
                <Link to="/contact" className="hover:bg-gray-800 px-3 py-2 rounded m-0">Contact</Link>
            </div>
        </nav>
    );
}

export default NavBar