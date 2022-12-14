import React from "react"
import { Image } from "react-bootstrap"

const Navbar = (props) => {

    if (props.tipoDeUsuario === null) {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container-fluid d-flex justify-content-between">
                    {/* PRIMER ELEMENTO */}
                    <button className="btn navbar-brand" onClick={() => props.redireccionamiento('/HomePage')}>
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
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'NosotrosPage') {
                                                return (
                                                    <button className="nav-link btn active">Nosotros</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => props.redireccionamiento('/NosotrosPage')}>Nosotros</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn">Adopta</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn">Blog</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-link btn">Contactenos</button>
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
                                            if (props.ubicacion == 'RegistroPage') {
                                                return (
                                                    <button className="nav-link btn active">Registrarse</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => props.redireccionamiento('/RegistroPage')}>Registrarse</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'IniciarSesionPage') {
                                                return (
                                                    <button className="nav-link btn active">Iniciar Sesion</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => props.redireccionamiento('/IniciarSesionPage')}>Iniciar Sesion</button>
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
                    <button className="btn navbar-brand " onClick={() => { props.redireccionamiento('/HomePage') }}>
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
                    {/* TERCER ELEMENTO */}
                    <div className="collapse navbar-collapse justify-content-start mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'SearchPage') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/SearchPage') }}>Lista de Publicaciones</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/SearchPage') }}>Lista de Publicaciones</button>
                                                )
                                            }
                                        })()
                                }
                            </li>
                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'NosotrosPage') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/NosotrosPage') }}>Nosotros</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/NosotrosPage') }}>Nosotros</button>
                                                )
                                            }
                                        })()
                                }
                            </li>

                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'l') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/') }}>Blog</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/') }}>Blog</button>
                                                )
                                            }
                                        })()
                                }
                            </li>

                            <li className="nav-item">
                                {
                                    (
                                        () => {
                                            if (props.ubicacion == 'CompraVenta') {
                                                return (
                                                    <button className="nav-link btn active" onClick={() => { props.redireccionamiento('/') }}>Contactenos</button>
                                                )
                                            } else {
                                                return (
                                                    <button className="nav-link btn" onClick={() => { props.redireccionamiento('/') }}>Contactenos</button>
                                                )
                                            }
                                        })()
                                }
                            </li>

                        </ul>

                    </div>

                    <div className="collapse navbar-collapse justify-content-end mx-4" id="navbarNav">
                        <ul className="navbar-nav">
                            {
                                (
                                    () => {
                                        if (props.ubicacion == 'CrearPublicacion') {
                                            return (
                                                <li className="nav-item px-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-outline-light"
                                                        onClick={() => { props.redireccionamiento('/CrearPublicacion') }}>
                                                        Crear una publicaci??n
                                                    </button>
                                                </li>
                                            )
                                        } else {
                                            return (
                                                <li className="nav-item px-2">
                                                    <button
                                                        type="button"
                                                        className="btn btn-light"
                                                        onClick={() => { props.redireccionamiento('/CrearPublicacion') }}>
                                                        Crear una publicaci??n
                                                    </button>
                                                </li>
                                            )
                                        }
                                    })()
                            }

                            <li className="nav-item">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => { props.salir() }}>
                                    Cerrar Sesion
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar