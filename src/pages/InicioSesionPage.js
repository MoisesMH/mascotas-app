import React from "react";
import Footer from "../components/Footer.component"
import FormularioInicioSesion from "../components/FormularioInicioSesion.component"
import Navbar from "../components/Navbar.component"
import {useState, useEffect} from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario, guardarUsuarioFirebase } from "../dao/usuario_local"
import { obtenerDatoTipoUsuario } from "../dao/usuario_local";
import { firebaseApp } from "../config/FirebaseApp";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";




const InicioSesionPage = () => {
    

    const auth = getAuth(firebaseApp)
    const user = auth.currentUser
    const [usuarioActual, setUsuarioActual] = useState(user);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsuarioActual(user)
        } else {
            setUsuarioActual(null)
        }
      });


 
    async function IniciarSesion(email, password) {
        await signInWithEmailAndPassword(auth,email,password).then((response)=>{
            console.log("Usuario Logeado")
            guardarUsuarioFirebase(response.user)
            window.location.href = '/'
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/IniciarSesionPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'IniciarSesionPage'


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
        <div>
        <Navbar 
        tipoDeUsuario={usuarioActual}
        redireccionamiento={RedirigirAOtraPagina}
        salir={TerminarSesionActiva}
        ubicacion={ubicacionActual}
        />
        <FormularioInicioSesion
        iniciarSesion={IniciarSesion}/>
        <Footer className="bottomAlways"
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}
export default InicioSesionPage