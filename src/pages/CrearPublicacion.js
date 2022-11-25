import React from "react";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import Post from "../components/Post.component";
import "../styles/PostPage.css"
import {useState, useEffect} from 'react';

import { EntregarPaginaAnterior, guardarPaginasAnteriores } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import PublicacionFormulario from "../components/PublicacionFormulario.component";

function CrearPublicacion() {

    const auth = getAuth()
    const user = auth.currentUser
    const [usuarioActual, setUsuarioActual] = useState(user)
    const [userID,setUserID] = useState(null)

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsuarioActual(user)
          setUserID(user.uid)
        } else {
            setUsuarioActual(null)
            setUserID(null)
        }
      });


    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/CrearPublicacion'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'CrearPublicacion'


    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoUsuario(usuarioActual)
        window.location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoUsuario(2)
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
        <div className="CrearPublicacion">
            <div className="CrearPublicacion__header">
                <Navbar
                tipoDeUsuario={usuarioActual} 
                salir={TerminarSesionActiva}
                redireccionamiento={RedirigirAOtraPagina}
                ubicacion={ubicacionActual}
                />
            </div>
            <div className="CrearPublicacion__main">
                <div className="CrearPublicacion__main--container">
                    <PublicacionFormulario/>
                </div>
            </div>
            <div className="CrearPublicacion_footer">
                <Footer 
                redireccionamiento={RedirigirAOtraPagina}
                />
            </div>
        </div>
    )
}

export default CrearPublicacion;