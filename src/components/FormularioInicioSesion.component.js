import { Image } from "react-bootstrap"

const FormularioInicioSesion = (props) => {
    return (
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
        src="https://us.123rf.com/450wm/tuktukdesign/tuktukdesign1712/tuktukdesign171200013/91443012-icono-de-usuario-vector-s%C3%ADmbolo-de-s%C3%ADmbolo-de-persona-masculina-avatar-iniciar-sesi%C3%B3n-ilustraci%C3%B3n-de.jpg"
        fluid={true}
        width={500}
        />
        </div>
        <form>
        <div className="mb-5 mt-4">
        <label for="exampleInputEmail1" class="form-label">Correo Electrónico</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
        </div>
        <div class="mb-3 mt-4">
        <label for="exampleInputPassword1" className="form-label">Contraseña</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto mt-5">
        <button class="btn btn-primary" type="button" onClick={() => {props.iniciarSesion()}}>Iniciar Sesión</button>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto mt-2">
        <button class="btn btn-link" type="button">¿Olvidó su contraseña?</button>
        </div>
        <div class="d-grid gap-2 col-6 mx-auto mt-2">
        <button class="btn btn-link" type="button">Registrarse</button>
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

export default FormularioInicioSesion