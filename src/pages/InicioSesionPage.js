import React from "react";
import Footer from "../components/Footer.component"
import FormularioInicioSesion from "../components/FormularioInicioSesion.component"
import Navbar from "../components/Navbar.component"
import {useState} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoCliente } from "../dao/cliente_local"

const InicioSesionPage = () => {
    
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

 
    const IniciarSesion = () => {
        setTipoDeUsuario(1)
    }

    const Salir = () => {
        setTipoDeUsuario(2)
    }

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/IniciarSesionPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'IniciarSesionPage'


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
        <div>
        <Navbar 
        tipoDeUsuario={tipoDeUsuario}
        redireccionamiento={RedirigirAOtraPagina}
        salir={TerminarSesionActiva}
        ubicacion={ubicacionActual}
        />
        <FormularioInicioSesion/>
        <Footer
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default InicioSesionPage