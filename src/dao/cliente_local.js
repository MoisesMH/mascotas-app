const guardarClienteDatosIniciales = (nombre, apellido, dni) => {
    const cliente = {
        nombre: nombre,
        apellido: apellido,
        dni: dni
    }
    localStorage.setItem("fpr1",JSON.stringify(cliente))
}

const obtenerClienteDatosIniciales = () => {
    return JSON.parse(localStorage.getItem("fpr1"))
}

const eliminarDatosIniciales = () =>{
    localStorage.removeItem('fpr1')
}


const guardarDatosGenerales = (id,tipo) => {
    localStorage.setItem('cliente',id)
    localStorage.setItem('tipoCliente',tipo)
}


const guardarDatoCliente = (id) => {
    localStorage.setItem('cliente',id)
}
const obtenerDatoCliente = () => {
    return localStorage.getItem('cliente')
}

const guardarDatoTipoCliente = (tipo) => {
    localStorage.setItem('tipoCliente',tipo)
}
const obtenerDatoTipoCliente = () => {
    return localStorage.getItem('tipoCliente')
}


export { 
    guardarClienteDatosIniciales,
    obtenerClienteDatosIniciales,
    guardarDatosGenerales,
    guardarDatoCliente,
    obtenerDatoCliente,
    guardarDatoTipoCliente,
    obtenerDatoTipoCliente,
    eliminarDatosIniciales
}