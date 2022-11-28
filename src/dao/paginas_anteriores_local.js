const guardarPaginasAnteriores = (direccion) => {
    let lista = []
    if (localStorage.getItem('paginasAnteriores') != null) {
        lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
        if (lista.length > 5) {
            lista.shift()
            lista.push(direccion)                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
        } else {
            lista.push(direccion)                                                 // ACTUALIZAR A LA DIRECCION ACTUAL
        }
    } else {
        lista.push(direccion)                                                     // ACTUALIZAR A LA DIRECCION ACTUAL
    }
    localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
    RevisarListaAnteriores()
}


// SI HEMOS VISITADO LA MISMA PAGINA DOS VECES (ESTAR EN PANTALLA "NOSOTROS" Y PRESIONAR OTRA VEZ "NOSOTROS")
// ELIMINA LOS DUPLICADOS
const RevisarListaAnteriores = () => {
    let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
    let tamano = lista.length
    let i = 1
    while (i < tamano) {
        if (lista[i - 1] == lista[i]) {
            lista.splice(i, 1)
            tamano--
        } else {
            i++
        }
    }
    localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
}

const EntregarPaginaAnterior = (direccion) => {
    if (localStorage.getItem('paginasAnteriores') != null) {
        let lista = JSON.parse(localStorage.getItem('paginasAnteriores'))
        let pagina = lista.pop()
        if (pagina == direccion) {                                                // ACTUALIZAR A LA DIRECCION ACTUAL
            let pagina = lista.pop()
        }
        localStorage.setItem('paginasAnteriores', JSON.stringify(lista))
        return pagina
    } else {
        // No pasa nada
        return null
    }
}


export {
    guardarPaginasAnteriores,
    EntregarPaginaAnterior
}