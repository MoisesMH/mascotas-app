import React, { useState, useEffect } from "react";
import Footer from "../components/Footer.component";
import Navbar from "../components/Navbar.component";
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local";
import CuerpoInformacion from "../components/CuerpoInformacion.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useLocation } from "react-router-dom";
import { db } from "../config/FirebaseApp";
import { doc, getDoc } from "firebase/firestore";

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const InformacionPage = (props) => {
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);
    const [publicacion, setPublicacion] = useState(null)

    const query = useQuery()
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

    window.onload = () => {
        getDocument()
    }

    const getDocument = async () => {
        const docRef = doc(db, "publicaciones", query.get("pub"))
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            setPublicacion(docSnap.data())
        } else {
            console.log("Error")
        }
    }

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
        auth.signOut().then(() => {

            console.log("Cerro sesión")
            window.location.href = '/'

        }).catch((error) => {

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
                salir={TerminarSesionActiva}
                redireccionamiento={RedirigirAOtraPagina}
                ubicacion={ubicacionActual} />
            {
                (
                    () => {
                        if (publicacion == null) {
                            return (
                                <div>Cargando</div>
                            )
                        }
                        return (
                            <CuerpoInformacion
                                redireccionamiento={RedirigirAOtraPagina}
                                volver={VolverAPaginaAnterior}
                                publicacion={publicacion}
                                 />
                        )
                    }
                )()
            }

            <Footer
                redireccionamiento={RedirigirAOtraPagina} />
        </div>
    )
}

export default InformacionPage