import { useState } from "react"
import { Image } from "react-bootstrap"

const FormularioRegistro = (props) => {

    const [nombreUsuario, setNombreUsuario] = useState("")
    const [correoUsuario, setCorreoUsuario] = useState("")
    const [contrasenaUsuario, setContrasenaUsuario] = useState("")
    const [confirmacionContrasena, setConfirmacionContra] = useState("")
    const [showAlert, setShowAlert] = useState(false)
    const [textoAlert, setTextoAlert] = useState("")


    const checkContrasenas = () =>{
        if (correoUsuario == ""){
            setTextoAlert("Introduzca un correo")
            setShowAlert(true)
            return
        }

        if (nombreUsuario == ""){
            setTextoAlert("Introduzca un nombre de usuario")
            setShowAlert(true)
            return
        }

        if (contrasenaUsuario == ""){
            setTextoAlert("Introduzca una contraseña")
            setShowAlert(true)
            return
        }

        if (contrasenaUsuario != confirmacionContrasena) {
            setTextoAlert("Las contraseñas no coinciden")
            setShowAlert(true)
            return
        }
        setShowAlert(false)
    }


    const iniciarRegistro = () => {
        checkContrasenas()
         props.registrarse(nombreUsuario, correoUsuario, contrasenaUsuario)
    }


    return (
        <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
                <div className="card mt-5">
                    <div className="card-body">
                        <h3 className="text-center mt-4">Crear una cuenta</h3>
                        <div class="d-grid gap-2 col-1 mx-auto mt-4">
                            <Image
                                alt="..."
                                className="me-2"
                                src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1712/tuktukdesign171200013/91443012-icono-de-usuario-vector-s%C3%ADmbolo-de-s%C3%ADmbolo-de-persona-masculina-avatar-iniciar-sesi%C3%B3n-ilustraci%C3%B3n-de.jpg"
                                fluid={true}
                                width={500}
                            />
                        </div>
                        <form>
                            <div className="mb-5 mt-4">
                                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                    onChange={(e) => setCorreoUsuario(e.target.value)}
                                />
                                <p id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</p>
                            </div>
                            <div>
                                <label for="inputUsernameRegister" className="form-label">Nombre de usuario</label>
                                <input type="text" className="form-control" id="inputUsernameRegister"
                                    onChange={(e) => setNombreUsuario(e.target.value)}
                                />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword1"
                                    onChange={(e) => setContrasenaUsuario(e.target.value)}
                                />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="exampleInputPassword2" className="form-label">Confirmar contraseña</label>
                                <input type="password" className="form-control" id="exampleInputPassword2"
                                    onChange={(e) => setConfirmacionContra(e.target.value)}
                                />
                            </div>
                            <div>
                                {
                                    (
                                        () => {
                                            if (showAlert) {
                                                return (
                                                    <div class="alert alert-danger" role="alert">
                                                        <p>{textoAlert}</p>
                                                    </div>
                                                )
                                            }
                                        })()
                                }
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto mt-5">
                                <button class="btn btn-primary" type="button" onClick={iniciarRegistro}>Registrarse</button>
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto mt-2">
                                <button class="btn btn-link" type="button" onClick={() => {window.location.href = '/IniciarSesionPage'}} >Iniciar sesión</button>
                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>
    )
}

export default FormularioRegistro