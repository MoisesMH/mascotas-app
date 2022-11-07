import React from "react";
import Footer from "../components/Footer.component"
import FormularioInicioSesion from "../components/FormularioInicioSesion.component"
import Navbar from "../components/Navbar.component"
import {useState, useEffect} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario } from "../dao/usuario_local"
import { obtenerDatoTipoUsuario } from "../dao/usuario_local";
import { firebaseApp } from "../config/FirebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";




const InicioSesionPage = () => {
    

    const auth = getAuth(firebaseApp)

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


 
    async function IniciarSesion(email, password) {
        try {
            const InfoUsuario = await signInWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
            return usuarioFirebase
        })

        guardarDatoTipoUsuario(1)
        window.location.href="/"

        
    } catch(error) {
            console.log("Error en el login")
        }

    }
    
    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/IniciarSesionPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'IniciarSesionPage'


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
        <div>
        <Navbar 
        tipoDeUsuario={tipoDeUsuario}
        redireccionamiento={RedirigirAOtraPagina}
        salir={TerminarSesionActiva}
        ubicacion={ubicacionActual}
        />
        <FormularioInicioSesion
        iniciarSesion={IniciarSesion}/>
        <Footer
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default InicioSesionPage