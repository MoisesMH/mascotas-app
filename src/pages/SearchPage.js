import CardList from "../components/CardList.component";
import Navbar from "../components/Navbar.component";
import "../styles/SearchPage.css"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local";
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.component";
import NewCardList from "../components/NewCardList.component";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db, storage } from "../config/FirebaseApp"
import { getDownloadURL, ref } from "firebase/storage";
import FiltrosBusqueda from "../components/Filtros.component";


function SearchPage() {
    const auth = getAuth()
    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);
    const [publicaciones, setPublicaciones] = useState([])
    const user = auth.currentUser
    const [usuarioActual, setUsuarioActual] = useState(user)
    const [userID, setUserID] = useState(null)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUsuarioActual(user)
            setUserID(user.uid)
        } else {
            window.location.href = '/'
            setUsuarioActual(null)
            setUserID(null)
        }
    });

    window.onload = () => {
        getAllDocuments()
    }

    const getAllDocuments = async () => {

        const querySnapshot = await getDocs(collection(db, "publicaciones"))

        const tempArray = []

        querySnapshot.forEach(doc => {
            const data = doc.data()
            data["documentId"] = doc.id
            tempArray.push(data)
        })

        setPublicaciones(tempArray)

    }

    const getFilteredDocuments = async (arrayFilters) => {

        const publicacionesRef = collection(db, "publicaciones")

        var q;

        switch (arrayFilters.length) {
            case 1:
                q = query(publicacionesRef,
                    where(Object.keys(arrayFilters[0])[0], "==",
                        arrayFilters[0][Object.keys(arrayFilters[0])[0]]))
                break;
            case 2:
                q = query(publicacionesRef,
                    where(Object.keys(arrayFilters[0])[0], "==",
                        arrayFilters[0][Object.keys(arrayFilters[0])[0]]),
                    where(Object.keys(arrayFilters[1])[0], "==",
                        arrayFilters[1][Object.keys(arrayFilters[1])[0]]))
                break;
            case 3:
                q = query(publicacionesRef,
                    where(Object.keys(arrayFilters[0])[0], "==",
                        arrayFilters[0][Object.keys(arrayFilters[0])[0]]),
                    where(Object.keys(arrayFilters[1])[0], "==",
                        arrayFilters[1][Object.keys(arrayFilters[1])[0]]),
                    where(Object.keys(arrayFilters[2])[0], "==",
                        arrayFilters[2][Object.keys(arrayFilters[2])[0]]))
                break;
            case 4:
                q = query(publicacionesRef,
                    where(Object.keys(arrayFilters[0])[0], "==",
                        arrayFilters[0][Object.keys(arrayFilters[0])[0]]),
                    where(Object.keys(arrayFilters[1])[0], "==",
                        arrayFilters[1][Object.keys(arrayFilters[1])[0]]),
                    where(Object.keys(arrayFilters[2])[0], "==",
                        arrayFilters[2][Object.keys(arrayFilters[2])[0]]),
                    where(Object.keys(arrayFilters[3])[0], "==",
                        arrayFilters[3][Object.keys(arrayFilters[3])[0]]))
                break;
            default:
                return;
        }
        const querySnapshot = await getDocs(q)

            const tempArray = []

            querySnapshot.forEach(doc => {
                const data = doc.data()
                tempArray.push(data)
            })

            setPublicaciones(tempArray)

    }

    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/SearchPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'SearchPage'



    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoUsuario(tipoDeUsuario)
        window.location.href = direccion
    }

    // Props: salir                 => Elimina los datos del usuario actual
    const TerminarSesionActiva = () => {
        guardarPaginasAnteriores(direccionActual)
        //guardarDatosGenerales(-1, 4)
        window.location.href = '/'
        setTipoDeUsuario(2)
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
        <div className="SearchPage">
            <div className="SearchPage__header">
                <Navbar
                    tipoDeUsuario={usuarioActual}
                    redireccionamiento={RedirigirAOtraPagina}
                    salir={TerminarSesionActiva}
                    ubicacion={ubicacionActual}
                />
            </div>
            <div className="SearchPage__main">
                <div className="PostPage__main--container">
                    <div className="row">
                        <div className="col-3"><FiltrosBusqueda
                            filterBusqueda={getFilteredDocuments}
                        /></div>
                        <div className="col"><NewCardList publicaciones={publicaciones} redireccionamiento={RedirigirAOtraPagina}/></div>
                    </div>

                </div>
            </div>
            <div className="SearchPage_main">
                <Footer className="bottomAlways"
                    redireccionamiento={RedirigirAOtraPagina} />
            </div>
        </div>
    )
}

export default SearchPage;