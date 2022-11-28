import { useState, useEffect } from "react";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local";
import CuerpoInformacion from "../components/CuerpoInformacion.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const InformacionPage = (documentId) => {
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    const auth = getAuth()
    const user = auth.currentUser
    const [usuarioActual, setUsuarioActual] = useState(user);
    
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUsuarioActual(user)
        } else {
            setUsuarioActual(null)
        }
      });

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
    const direccionActual = '/InformacionPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'InformacionPage'


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
        tipoDeUsuario={ usuarioActual} 
        salir={TerminarSesionActiva}
        redireccionamiento={RedirigirAOtraPagina}
        ubicacion={ubicacionActual}/>
        <CuerpoInformacion 
        redireccionamiento={RedirigirAOtraPagina}
        volver= { VolverAPaginaAnterior }/>
        <Footer 
        redireccionamiento={RedirigirAOtraPagina}/>
        </div>
    )
}

export default InformacionPage