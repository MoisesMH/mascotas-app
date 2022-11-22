import React from "react";
import Footer from "../components/Footer.component"
import FormularioRegistro from "../components/FormularioRegistro.component"
import Navbar from "../components/Navbar.component"
import {useState} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario } from "../dao/usuario_local"
import { firebaseApp } from "../config/FirebaseApp";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";




const RegistroPage = () => {
    
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    const auth = getAuth(firebaseApp)

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/RegistroPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'RegistroPage'


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

    async function registro(nombreUsuario, email, password) {
        const InfoUsuario = await createUserWithEmailAndPassword(auth, email, password).then((usuarioFirebase) => {
            return usuarioFirebase
        })

        console.log(InfoUsuario)
        
        guardarDatoTipoUsuario(1)
        window.location.href = "/"
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
        <Footer className="bottomAlways"
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default RegistroPage