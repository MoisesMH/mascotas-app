import { Image } from "react-bootstrap"
import "../styles/CuerpoInformacion.css"
import { useState } from "react"

const CuerpoInformacion = (props) => {

    const [nombre, setNombre] = useState("Nombre de Mascota")
    const [edad, setEdad] = useState("5 meses")
    const [tamaño, setTamaño] = useState("Pequeño")
    const [sexo, setSexo] = useState("Masculino")
    const [actividad, setActividad] = useState("Actividad Alta")
    const [url, setUrl] = useState("https://www.purina-latam.com/sites/g/files/auxxlc391/files/styles/large/public/5_0.png?itok=bXHjR7HB")
    
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
                />
                <fieldset disabled>
                    <input className="text-center fs-2 fw-semibold mt-2" defaultValue={nombre} onChange={ setNombreOnChange }/>
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
                        <p className="mt-4 text-center fs-4 mb-4">Soy un cachorro muy juguetón y cariñoso. Deseo encontrar una familia que me haga jugar.</p>
                        <h4 className="text-primary">Información Importante:</h4>
                        <fieldset disabled>
                            <div className="mt-3 text-center fs-4 text-main">
                                <input className="text-center" defaultValue={edad} onChange={ setEdadOnChange }/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={tamaño} onChange={ setTamañoOnChange }/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={sexo} onChange={ setSexoOnChange }/>
                            </div>
                            <div className="mt-3 text-center fs-4">
                                <input className="text-center" defaultValue={actividad} onChange={ setActividadOnChange }/>
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
                <button type="button" className="text-center btn btn-success btn-lg" onClick={() => {props.redireccionamiento("/ContactoPage")}}>CONTACTO</button>
            </div>
            <div className="col"/>
        </div>
        </div>
    )
}

export default CuerpoInformacion