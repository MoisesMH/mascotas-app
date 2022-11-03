import React from "react";
import useToggleState from "../hooks/useToggleState";
import "../styles/Hamburger.css"

function Hamburger({ toggleNavSide }) {
    const [isAriaExpanded, toggleAriaExpanded] = useToggleState()
    const handleToggle = () => {
        toggleNavSide()
        toggleAriaExpanded()
    }
    
    return (
        <span className="Hamburger-main" aria-controls="NavbarSide-navigation" aria-expanded={isAriaExpanded} onClick={handleToggle} >
            <div className="Hamburger-midline"></div>
        </span>
    )
}

export default Hamburger