import { Image } from "react-bootstrap"
import "../styles/CuerpoInformacion.css"
import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../config/FirebaseApp"

const CuerpoInformacion = (props) => {

    let publicacionJSON = props.publicacion

    const [nombre, setNombre] = useState(publicacionJSON.NombreAnimal)
    const [edad, setEdad] = useState(publicacionJSON.EdadAnimal)
    const [tamaño, setTamaño] = useState(publicacionJSON.TamanoAnimal)
    const [sexo, setSexo] = useState(publicacionJSON.GeneroAnimal)
    const [actividad, setActividad] = useState("Actividad" + " " + publicacionJSON.Estado)
    const [url, setUrl] = useState(publicacionJSON.Imagen)
    const [descripcion, setDescripcion] = useState(publicacionJSON.DescripcionAnimal)

    const setNombreOnChange = (event) => {
        setNombre(event.target.value)
    }
    const setEdadOnChange = (event) => {
        setEdad(event.target.value)
    }
    const setTamañoOnChange = (event) => {
        setTamaño(event.target.value)
    }
    const setSexoOnChange = (event) => {
        setSexo(event.target.value)
    }
    const setActividadOnChange = (event) => {
        setActividad(event.target.value)
    }
    const setUrlOnChange = (event) => {
        setUrl(event.target.value)
    }

    return (
        <div>
        <div className="row">
            <div className="col">
                <div className="mt-5 text-center">
                <Image 
                 src={ url }
                 fluid={true}
                 width={500}
                />
                <fieldset disabled>
                    <input className="text-center fs-2 fw-semibold mt-2" defaultValue={nombre}/>
                </fieldset>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <div className="col">
                    </div>
                    <div className="col-6">    
                        <div className="mt-3 text-center">
                            <h1 className="mt-4 text-success">Sobre mí</h1>
                        </div>
                        <p className="mt-4 text-center fs-4 mb-4">{ descripcion }</p>
                        <h4 className="text-primary">Información Importante:</h4>
                        <fieldset disabled>
                            <div className="mt-3 text-center fs-4 text-main">
                                <input className="text-center" defaultValue={edad}/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={tamaño}/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={sexo}/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={actividad}/>
                            </div>
                        </fieldset>
                    </div>
                    <div className="col">
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col"/>
            <div className="col-6 text-center">
                <button type="button" className="text-center btn btn-success btn-lg" onClick={() => {props.redireccionamiento(`/ContactoPage?userId=${props.publicacion.Usuario}`)}}>CONTACTO</button>
            </div>
            <div className="col"/>
        </div>
        </div>
    )
}

export default CuerpoInformacion