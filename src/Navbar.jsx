import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-gray-800 text-white p-4 relative overflow-visible">
            <Link to="/">
                <img className="w-28 absolute top-0 left-0 transform translate-y-1/24" draggable="false" src='/sbme2.png' alt="" />
            </Link>
            <div className="flex-grow flex justify-center space-x-4">
                <Link to="/" className="hover:underline">Accueil</Link>
                <Link to="/contact" className="hover:underline">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;