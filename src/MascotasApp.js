import React from "react";
import MascotaList from "./MascotaList";
//import Navbar from "./layout/Navbar/Navbar";
import Navbar from "./Components/Navbar.component";
import "./MascotasApp.css";
//import NavbarSide from "./layout/Navbar/NavbarSide";
import useToggleState from "./hooks/useToggleState";
import Footer from './Components/Footer.component';
import Banner from "./Components/Banner.component";
import {useState} from 'react';


// Esta es la página principal


function MascotasApp() {
    const [navside, toggleNavside] = useToggleState()

    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    const IniciarSesion = () => {
        setTipoDeUsuario(1)
    }

    return (
        <div className="MascotasApp-main">
            <div className="MascotasApp-header">
                <Navbar tipoDeUsuario={ tipoDeUsuario} 
                iniciarSesion={IniciarSesion}
                />
            </div>
            <div className="MascotasApp-banner">
                <Banner />
            </div>
            <div className="MascotasApp-Section">
                <MascotaList />
            </div>
            <div className="MascotasApp-Footer">
                <Footer />
            </div>
        </div>
    )
}

export default MascotasApp