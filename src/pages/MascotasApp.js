import React from "react";
import MascotaList from "../components/MascotaList.component";
//import Navbar from "./layout/Navbar/Navbar";
import Navbar from "../components/Navbar.component";
import "../styles/MascotasApp.css";
//import NavbarSide from "./layout/Navbar/NavbarSide";
import useToggleState from "../hooks/useToggleState";
import Footer from '../components/Footer.component';
import Banner from "../components/Banner.component";
import {useState} from 'react';


// Esta es la página principal


function MascotasApp() {
    const [navside, toggleNavside] = useToggleState()

    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    const IniciarSesion = () => {
        setTipoDeUsuario(1)
    }

    const Salir = () => {
        setTipoDeUsuario(2)
    }

    return (
        <div className="MascotasApp-main">
            <div className="MascotasApp-header">
                <Navbar 
                tipoDeUsuario={ tipoDeUsuario} 
                iniciarSesion={IniciarSesion}
                salir={Salir}
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