import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-red-500
                        border-b-4
                        border-red-900
                        fixed
                        w-screen
                        z-10">
            <ul className="flex
                            h-10
                            gap-10 
                            justify-center
                            items-center">
                
                <NavLink
                    to="/"
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    >
                    Home
                </NavLink>
                
                <NavLink
                    to="/About"
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    >
                    About
                </NavLink>
                
                <NavLink
                    to="/Projects"
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    >
                    Projects
                </NavLink>
                
                <NavLink
                    to="/Contact"
                    className={({ isActive, isPending, isTransitioning }) =>
                        [
                        isPending ? "pending" : "",
                        isActive ? "active" : "",
                        isTransitioning ? "transitioning" : "",
                        ].join(" ")
                    }
                    >
                    Contact
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navbar;