import React, { useState } from "react"
import "../styles/MascotasApp.css"


const PublicacionFormulario = (props) => {

    const [fotoSeleccionada,setFotoSeleccionada] = useState(null)
    const [nombreAnimal, setNombreAnimal] = useState("")
    const [razaAnimal, setRazaAnimal] = useState("")
    const [tamanoAnimal, setTamanoAnimal] = useState("")
    const [generoAnimal, setGeneroAnimal] = useState("")
    const [edadAnimal, setEdadAnimaal] = useState("")
    const [descAnimal, setDescAnimaal] = useState("")


    const print = () =>{
        console.log(nombreAnimal)
        console.log(razaAnimal)
        console.log(tamanoAnimal)
        console.log(generoAnimal)
        console.log(edadAnimal)
        console.log(descAnimal)
    }

    return (
        <div className="container text-center">
            <div className="row">
                <div className="col align-self-center">
                {
                        (
                            () => {
                                if (fotoSeleccionada != null) {
                                    return (
                                        <div>
                                            
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div className="text-bg-secondary opacity-50">
                                                dasdadsa
                                            </div>
                                        </div>
                                    )
                                }
                            })()
                    }
                </div>
                <div className="col-1"></div>
                <div className="col-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h5 className="text-center mt-4 mb-4">Nueva Publicación</h5>
                            <form>
                                <div className="mt-2 mb-3">
                                    <input type="text" className="form-control" 
                                    id="inputAnimalName" placeholder="Nombre de la mascota" 
                                    onChange={(e)=>setNombreAnimal(e.target.value)}></input>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="razaAnimal" aria-label="razaAnimal"
                                    onChange={(e)=>setRazaAnimal(e.target.value)}>
                                        <option selected>Seleccione una raza....</option>
                                        <option value="Perro">Perro</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="tamanoAnimal" aria-label="tamanoAnimal"
                                    onChange={(e)=>setTamanoAnimal(e.target.value)}>
                                        <option selected>Seleccione un tamaño....</option>
                                        <option value="Pequeño">Pequeño</option>
                                        <option value="Mediano">Mediano</option>
                                        <option value="Grande">Grande</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="generoAnimal" aria-label="generoAnimal"
                                    onChange={(e)=>setGeneroAnimal(e.target.value)}>
                                        <option selected>Seleccione un género....</option>
                                        <option value="Hembra">Hembra</option>
                                        <option value="Macho">Macho</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="tamanoAnimal" aria-label="tamanoAnimal"
                                    onChange={(e)=>setEdadAnimaal(e.target.value)}>
                                        <option selected>Seleccione un tamaño....</option>
                                        <option value="Pequeño">Pequeño</option>
                                        <option value="Mediano">Mediano</option>
                                        <option value="Grande">Grande</option>
                                    </select>
                                </div>
                                <div class="mt-4">
                                    <textarea class="form-control" 
                                    placeholder="Escriba una descripción..." 
                                    id="exampleFormControlTextarea1" rows="5"
                                    onChange={(e)=>setDescAnimaal(e.target.value)}></textarea>
                                </div>
                                <button type="button" onClick={print}>
                                    GAAAAAAAA
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PublicacionFormulario