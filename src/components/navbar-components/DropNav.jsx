import { useState } from "react";
import { NavLink } from "react-router-dom";

const DropNav = () => {
    const [toggleHide, setToggleHide] = useState("hidden");
    
    const handleDrop = () => {
        if (toggleHide === "hidden") setToggleHide("");
        if (toggleHide !== "hidden") setToggleHide("hidden");
    }

    return (
        <nav className="w-screen
                        fixed
                        z-10
                        h-14
                        bg-red-500
                        border-b-4
                        border-red-900
                        p-2">
            <img onClick={handleDrop} 
                className="w-10 
                            m-auto
                            drop-shadow-2xl
                            shadow-black" 
                src="./icons/manadacrystal.png" />
            
            <ul className={`${toggleHide} drop-down fade-in`}>
                <NavLink
                    to="/"
                    onClick={() => setToggleHide("hidden")}
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
                    onClick={() => setToggleHide("hidden")}
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
                    onClick={() => setToggleHide("hidden")}
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
                    onClick={() => setToggleHide("hidden")}
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

export default DropNav; 