import React from "react";
import Footer from "../components/Footer.component"
import FormularioRegistro from "../components/FormularioRegistro.component"
import Navbar from "../components/Navbar.component"
import {useState} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario } from "../dao/usuario_local"
import { getAuth } from "firebase/auth";

const RegistroPage = () => {
    
    const auth = getAuth()
    const user = auth.currentUser
    const [usuarioActual, setUsuarioActual] = useState(user);

    

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/RegistroPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'RegistroPage'


    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoUsuario(usuarioActual)
        window.location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        auth.signOut().then(()=>{

            console.log("Cerro sesión")
            window.location.href = '/'

        }).catch((error)=>{

            console.log(error)

        })
        
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
        tipoDeUsuario={usuarioActual}
        redireccionamiento={RedirigirAOtraPagina}
        salir={TerminarSesionActiva}
        ubicacion={ubicacionActual}
        />
        <FormularioRegistro/>
        <Footer className="bottomAlways"
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default RegistroPage