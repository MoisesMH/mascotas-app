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

import { EntregarPaginaAnterior, guardarPaginasAnteriores } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoCliente, obtenerDatoTipoCliente } from "../dao/cliente_local"


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

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/HomePage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'HomePage'


    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoCliente(tipoDeUsuario)
        window.location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoCliente(2)
        window.location.href = '/'
    }

    // NORMALMENTE SERVIRA COMO UN PROPS PARA LOS BOTONES DE "REGRESAR"
    // props: volver
    const VolverAPaginaAnterior = () => {
        const respuesta = EntregarPaginaAnterior(direccionActual)
        if (respuesta != null) {
            window.location.href = respuesta
        }
    }

    return (
        <div className="MascotasApp-main">
            <div className="MascotasApp-header">
                <Navbar 
                tipoDeUsuario={ tipoDeUsuario} 
                salir={TerminarSesionActiva}
                redireccionamiento={RedirigirAOtraPagina}
                ubicacion={ubicacionActual}
                />
            </div>
            <div className="MascotasApp-banner">
                <Banner />
            </div>
            <div className="MascotasApp-Section">
                <MascotaList />
            </div>
            <div className="MascotasApp-Footer">
                <Footer 
                redireccionamiento={ RedirigirAOtraPagina }/>
            </div>
        </div>
    )
}

export default MascotasApp