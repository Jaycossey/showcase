import { NavLink } from "react-router-dom";

const Navbar = (props) => {
    const width = window.innerWidth;
    console.log(width);
    return (
        <nav className="bg-red-500
                        fixed
                        w-screen
                        z-10">
            <ul className="flex
                            h-10
                            gap-10 
                            justify-center
                            items-center">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/About">About</NavLink></li>
                <li><NavLink to="/Projects">Projects</NavLink></li>
                <li><NavLink to="/Contact">Contact</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navbar;