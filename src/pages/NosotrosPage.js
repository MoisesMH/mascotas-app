import Navbar from "../components/Navbar.component"
import Footer from "../components/Footer.component"
import Nosotros from "../components/Nosotros.component"
import { useState } from 'react'
import { guardarPaginasAnteriores, EntregarPaginaAnterior } from "../dao/paginas_anteriores_local"
import { guardarDatoTipoCliente } from "../dao/cliente_local"



const NosotrosPage = () => {

    const [tipoDeUsuario, setTipoDeUsuario] = useState(2);

    
    // DIRECCION DE LA PAGINA ACTUAL
    const direccionActual = '/NosotrosPage'
    //  SOLO SIRVE PARA EL PROPS ubicacion
    const ubicacionActual = 'NosotrosPage'

    

    // Props: redireccionamiento    => Mantiene el tipo de usuario actual
    const RedirigirAOtraPagina = (direccion) => {
        guardarPaginasAnteriores(direccionActual)
        guardarDatoTipoCliente(tipoDeUsuario)
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
        <div>
            <Navbar
                tipoDeUsuario={tipoDeUsuario}
                redireccionamiento={RedirigirAOtraPagina}
                salir={TerminarSesionActiva}
                ubicacion={ubicacionActual}
            />
            <Nosotros
                volver={VolverAPaginaAnterior}
            />
            <Footer
                redireccionamiento={RedirigirAOtraPagina}
            />
        </div>
    )
}

export default NosotrosPage