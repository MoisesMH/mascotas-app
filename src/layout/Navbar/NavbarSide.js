import React from "react";
import "./NavbarSide.css"

function NavbarSide({ navsideSwitch }) {
    return (
        <div className="NavbarSide-main">
            <div>
                <nav className="NavbarSide-nav">
                    {/* <NavbarOptions sideNav={true} /> */}
                    <ul id="NavbarSide-navigation" data-visible={navsideSwitch} className="Navbar-list main-navigate">
                        <li className='Navbar-list-item'><a href='#'><span>Nosotros</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Adopta</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Blog</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Contactenos</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Donar</span></a></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default NavbarSide