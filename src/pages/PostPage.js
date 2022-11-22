import React from "react";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import Post from "../components/Post.component";
import "../styles/PostPage.css"
import {useState, useEffect} from 'react';

import { EntregarPaginaAnterior, guardarPaginasAnteriores } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local"


function PostPage() {

    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    useEffect(() => {

        const AsyncUseEffect = async () => {
            if(obtenerDatoTipoUsuario() == null) {
                guardarDatoTipoUsuario(tipoDeUsuario)
            }
            else {
                const dato = obtenerDatoTipoUsuario
                setTipoDeUsuario(dato)
            }
        }
        AsyncUseEffect()
    }, [tipoDeUsuario]
    )


    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/HomePage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'HomePage'


    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoUsuario(tipoDeUsuario)
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
        <div className="PostPage">
            <div className="PostPage__header">
                <Navbar
                tipoDeUsuario={ tipoDeUsuario} 
                salir={TerminarSesionActiva}
                redireccionamiento={RedirigirAOtraPagina}
                ubicacion={ubicacionActual}
                />
            </div>
            <div className="PostPage__main">
                <div className="PostPage__main--container">
                    <Post />
                </div>
                {/* <h1>Hola</h1> */}
            </div>
            <div className="PostPage_footer">
                <Footer 
                redireccionamiento={RedirigirAOtraPagina}
                />
            </div>
        </div>
    )
}

export default PostPage;