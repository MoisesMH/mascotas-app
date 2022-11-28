import React from 'react'
import Hamburger from '../../components/Hamburger.component'
import './Navbar.css'

function Navbar({ enableNavside }) {
    return (
        <div>
            <nav className='Navbar-main'>
                <div className='Navbar-left'>
                    <ul>
                        <li><Hamburger toggleNavSide={enableNavside} /></li>
                        <li><a href='#'><span>Mascotas</span></a></li>
                    </ul>
                </div>
                <div className='Navbar-options'>
                    <ul id="NavbarSide-navigation" className="Navbar-list">
                        <li className='Navbar-list-item'><a href='#'><span>Nosotros</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Adopta</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Blog</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Contactenos</span></a></li>
                        <li className='Navbar-list-item'><a href='#'><span>Donar</span></a></li>
                    </ul>
                </div>
                <div className='Navbar-right'>
                    <ul>
                        <li><a href='#'><span>Favoritos</span></a></li>
                        <li><a href='#'><span>Entrar</span></a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar