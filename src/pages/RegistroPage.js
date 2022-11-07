import React from "react";
import Footer from "../components/Footer.component"
import FormularioRegistro from "../components/FormularioRegistro.component"
import Navbar from "../components/Navbar.component"
import {useState} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoCliente } from "../dao/cliente_local"

const RegistroPage = () => {
    
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/RegistroPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'RegistroPage'


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

    const registro =(nombreUsuario,correoUsuario,contrasenaUsuario) =>{
        //AQUI VA LA LOGICA DEL REGISTRO
    }
    
    
    return (
        <div>
        <Navbar 
        tipoDeUsuario={tipoDeUsuario}
        redireccionamiento={RedirigirAOtraPagina}
        salir={TerminarSesionActiva}
        ubicacion={ubicacionActual}
        />
        <FormularioRegistro
            registrarse={registro}
        />
        <Footer
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default RegistroPage