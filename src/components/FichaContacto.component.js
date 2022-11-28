import { Image } from "react-bootstrap"
import { useState } from "react"

const FichaContacto = (props) => {

    const [correo, setCorreo] = useState('albergueJesus@gmail.com')
    const [telefono, setTelefono] = useState('8543545')
    const [red_social, setRedSocial] = useState('@Luisito123')

    const setCorreoOnChange = (event) => {
        setCorreo(event.target.value)
    }
    const setTelefonoOnChange = (event) => {
        setTelefono(event.target.value)
    }
    const setRedSocialOnChange = (event) => {
        setRedSocial(event.target.value)
    }


    if(props.TipoDeUsuario == 2) {
        return (<div className="text-center">
            <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
                <div className="card mt-5">
                    <div className="card-body">
                        <h3 className="text-center mt-4">Inicio de Sesión</h3>
                        <div class="d-grid gap-2 col-1 mx-auto mt-4">
                            <Image
                                alt="..."
                                className="me-2"
                                src="https://i.pinimg.com/474x/1d/10/c0/1d10c0ab5272feb0f9ceb07955e623eb.jpg"
                                fluid={true}
                                width={800}
                            />
                        </div>
                        <form>
                            <div className="mb-5 mt-4">
                                <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={correo} onChange={setCorreoOnChange} />
                            </div>
                            <div class="mb-3 mt-4">
                                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                                <input type="password" className="form-control text-center" id="exampleInputPassword1" defaultValue={telefono} onChange={setTelefonoOnChange} />
                            </div>
                            <div class="d-grid gap-2 col-6 mx-auto mt-2">
                                <button class="btn btn-success" type="button" onClick={() => { props.volver() }}>Confirmar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>
            
        </div>)
    }else {
        return (<div className="text-center">
            <div className="row">
            <div className="col-md-3">
            </div>
            <div className="col-md-6">
                <div className="card mt-5">
                    <div className="card-body">
                        <h3 className="text-center mt-4">Ficha de Contacto</h3>
                        <div class="d-grid gap-2 col-1 mx-auto mt-4">
                            <Image
                                alt="..."
                                className="me-2"
                                src="https://i.pinimg.com/474x/1d/10/c0/1d10c0ab5272feb0f9ceb07955e623eb.jpg"
                                fluid={true}
                                width={800}
                            />
                        </div>
                        <form>
                            <fieldset disabled>
                                <div className="mb-3 mt-4">
                                    <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
                                    <input type="email" className="form-control text-center" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={correo} onChange={setCorreoOnChange} />
                                </div>
                                <div class="mb-3 mt-2">
                                    <label for="exampleInputPassword1" className="form-label">Teléfono</label>
                                    <input type="text" className="form-control text-center" id="exampleInputPassword1" defaultValue={telefono} onChange={setTelefonoOnChange} />
                                </div>
                                <div class="mb-3 mt-2">
                                    <label for="exampleInputPassword1" className="form-label">Facebook o Instagram</label>
                                    <input type="text" className="form-control text-center" id="exampleInputPassword1" defaultValue={red_social} onChange={setRedSocialOnChange} />
                                </div>
                            </fieldset>
                            <button type="button" className="text-center btn btn-success btn-lg" onClick={() => {props.volver()}}>REGRESAR</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-3">
            </div>
        </div>

        </div>)
    }
}

export default FichaContacto