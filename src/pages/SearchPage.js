import CardList from "../components/CardList.component";
import Navbar from "../components/Navbar.component";
import "../styles/SearchPage.css"
import { guardarDatoTipoUsuario, obtenerDatoTipoUsuario } from "../dao/usuario_local";
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local";
import { useEffect, useState } from "react";
import Footer from "../components/Footer.component";



function SearchPage() {
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
                    tipoDeUsuario={tipoDeUsuario}
                    redireccionamiento={RedirigirAOtraPagina}
                    salir={TerminarSesionActiva}
                    ubicacion={ubicacionActual}
                />
            </div>
            <div className="SearchPage__main">
                <div className="PostPage__main--container">
                    <CardList />
                </div>
            </div>
            <div className="SearchPage_main">
                    <Footer className="bottomAlways"
                    redireccionamiento={RedirigirAOtraPagina}/>
            </div>
        </div>
    )
}

export default SearchPage;