const guardarUsuarioDatosIniciales = (nombre, apellido, dni) => {
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    }
    localStorage.setItem("fpr1",JSON.stringify(cliente))
}

const obtenerUsuarioDatosIniciales = () => {
    return JSON.parse(localStorage.getItem("fpr1"))
}

const eliminarDatosIniciales = () =>{
    localStorage.removeItem('fpr1')
}


const guardarDatosGenerales = (id,tipo) => {
    localStorage.setItem('usuario',id)
    localStorage.setItem('tipoUsuario',tipo)
}


const guardarDatoUsuario = (id) => {
    localStorage.setItem('usuario',id)
}
const obtenerDatoUsuario = () => {
    return localStorage.getItem('usuario')
}

const guardarUsuarioFirebase = (usuarioFirebase) => {
    localStorage.setItem('usuarioFirebase',JSON.stringify(usuarioFirebase))
}

const obtenerUsuarioFirebase = () =>{
    return localStorage.getItem('usuarioFirebase')
} 

const guardarDatoTipoUsuario = (tipo) => {
    localStorage.setItem('tipoUsuario',tipo)
}
const obtenerDatoTipoUsuario = () => {
    return localStorage.getItem('tipoUsuario')
}


export { 
    guardarUsuarioDatosIniciales,
    obtenerUsuarioDatosIniciales,
    guardarDatosGenerales,
    guardarDatoUsuario,
    obtenerDatoUsuario,
    guardarDatoTipoUsuario,
    obtenerDatoTipoUsuario,
    eliminarDatosIniciales,
    guardarUsuarioFirebase,
    obtenerUsuarioFirebase
}