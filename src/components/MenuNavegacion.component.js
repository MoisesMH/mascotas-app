import React from "react"
import { Image } from "react-bootstrap"

const Navbar = (props) => {
    console.log(props.tipoDeCliente)
    if(props.tipoDeCliente == 2) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid d-flex justify-content-between">
                        {/* PRIMER ELEMENTO */}
                        <button className="btn navbar-brand ">
                            <Image
                                alt="..."
                                className="me-2"
                                src="https://cdn-icons-png.flaticon.com/512/22/22744.png"
                                fluid={true}
                                width={25}
                            />
                            Patitas a Casa
                        </button>
                        {/* SEGUNDO ELEMENTO */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-start mx-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="nav-link btn">Lista de Mascotas</button>
                                </li>
                            </ul>
                        </div>
                        {/* TERCER ELEMENTO */}
                        <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {
                                        (
                                            () => {
                                                if (props.ubicacion == 'procesoRegistro1') {
                                                    return (
                                                        <button className="nav-link btn active">Abrir Cuenta</button>
                                                    )
                                                } else {
                                                    return (
                                                        <button className="nav-link btn">Registrarse</button>
                                                    )
                                                }
                                            })()
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        (
                                            () => {
                                                if (props.ubicacion == 'IniciarSesion') {
                                                    return (
                                                        <button className="nav-link btn active">Iniciar Sesion</button>
                                                    )
                                                } else {
                                                    return (
                                                        <button className="nav-link btn" onClick={() => props.iniciarSesion()}>Iniciar Sesion</button>
                                                    )
                                                }
                                            })()
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    } else {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <div className="container-fluid d-flex justify-content-between">
                        {/* PRIMER ELEMENTO */}
                        <button className="btn navbar-brand ">
                            <Image
                                alt="..."
                                className="me-2"
                                src="https://cdn-icons-png.flaticon.com/512/22/22744.png"
                                fluid={true}
                                width={25}
                            />
                            Patitas a Casa
                        </button>
                        {/* SEGUNDO ELEMENTO */}
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-start mx-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <button className="nav-link btn">Lista de Publicaciones</button>
                                </li>
                            </ul>
                        </div>
                        {/* TERCER ELEMENTO */}
                        <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    {
                                        (
                                            () => {
                                                if (props.ubicacion == 'procesoRegistro1') {
                                                    return (
                                                        <button className="nav-link btn active">Abrir Cuenta</button>
                                                    )
                                                } else {
                                                    return (
                                                        <button className="nav-link btn">Registrarse</button>
                                                    )
                                                }
                                            })()
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        (
                                            () => {
                                                if (props.ubicacion == 'IniciarSesion') {
                                                    return (
                                                        <button className="nav-link btn active" >Iniciar Sesion</button>
                                                    )
                                                } else {
                                                    return (
                                                        <button className="nav-link btn" onClick={() => { props.iniciarSesion() }}>Iniciar Sesion</button>
                                                    )
                                                }
                                            })()
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default Navbar