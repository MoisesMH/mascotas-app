import { useState } from "react"

const FiltrosBusqueda = (props) => {

    const [filtroEspecie, setFiltroEspecie] = useState(null)
    const [filtroTamano, setFiltroTamano] = useState(null)
    const [filtroGenero, setFiltroGenero] = useState(null)
    const [filtroEdad, setFiltroEdad] = useState(null)

    const onClick = () => {

        clearRadioButtons()

        const arrayFiltros = []
        if (filtroEspecie != null) {
            arrayFiltros.push({ "RazaAnimal": filtroEspecie })
        }

        if (filtroTamano != null) {
            arrayFiltros.push({ "TamanoAnimal": filtroTamano })
        }

        if (filtroGenero != null) {
            arrayFiltros.push({ "GeneroAnimal": filtroGenero })
        }

        if (filtroEdad != null) {
            arrayFiltros.push({ "EdadAnimal": filtroEdad })
        }

        console.log(arrayFiltros)

        props.filterBusqueda(arrayFiltros)
    }

    const clearRadioButtons = () => {

        setFiltroEdad(null)
        setFiltroEspecie(null)
        setFiltroGenero(null)
        setFiltroTamano(null)

        var radioButtonArray = document.getElementsByName('FiltroEspecie');

        for (var i = 0; i < radioButtonArray.length; i++) {
            var radioButton = radioButtonArray[i];
            radioButton.checked = false;
        }

        radioButtonArray = document.getElementsByName('FiltroTamano');

        for (var i = 0; i < radioButtonArray.length; i++) {
            var radioButton = radioButtonArray[i];
            radioButton.checked = false;
        }

        radioButtonArray = document.getElementsByName('FiltroGenero');

        for (var i = 0; i < radioButtonArray.length; i++) {
            var radioButton = radioButtonArray[i];
            radioButton.checked = false;
        }

        radioButtonArray = document.getElementsByName('FiltroEdad');

        for (var i = 0; i < radioButtonArray.length; i++) {
            var radioButton = radioButtonArray[i];
            radioButton.checked = false;
        }
    }

    return (
        <div className="container">

            <div className="row card ml-5">

                <div className="col-2"></div>

                <div className="col">

                    <h3 className="mt-3 text-center">Filtros</h3>

                    <div className="mt-4 card">

                        <h5 className="m-2"> Especie </h5>

                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Perro"
                                name="FiltroEspecie" id="filtroEspecie1"
                                onChange={(e) => { setFiltroEspecie(e.target.value) }} />
                            <label class="form-check-label" for="filtroEspecie1">
                                Perro
                            </label>

                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Gato"
                                name="FiltroEspecie" id="filtroEspecie2"
                                onChange={(e) => { setFiltroEspecie(e.target.value) }} />
                            <label class="form-check-label" for="filtroEspecie2">
                                Gato
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Otros"
                                name="FiltroEspecie" id="filtroEspecie3"
                                onChange={(e) => { setFiltroEspecie(e.target.value) }} />
                            <label class="form-check-label" for="filtroEspecie3">
                                Otros
                            </label>
                        </div>
                    </div>

                    <div className="mt-4 card">

                        <h5 className="m-2"> Tamaño </h5>

                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Pequeño"
                                name="FiltroTamano" id="FiltroTamano1"
                                onChange={(e) => { setFiltroTamano(e.target.value) }} />
                            <label class="form-check-label" for="FiltroTamano1">
                                Pequeño
                            </label>

                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Mediano"
                                name="FiltroTamano" id="FiltroTamano2"
                                onChange={(e) => { setFiltroTamano(e.target.value) }} />
                            <label class="form-check-label" for="FiltroTamano2">
                                Mediano
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Grande"
                                name="FiltroTamano" id="FiltroTamano3"
                                onChange={(e) => { setFiltroTamano(e.target.value) }} />
                            <label class="form-check-label" for="FiltroTamano3">
                                Grande
                            </label>
                        </div>
                    </div>

                    <div className="mt-4 card">

                        <h5 className="m-2"> Género </h5>

                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Hembra"
                                name="FiltroGenero" id="FiltroGenero1"
                                onChange={(e) => { setFiltroGenero(e.target.value) }} />
                            <label class="form-check-label" for="FiltroGenero1">
                                Hembra
                            </label>

                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Macho"
                                name="FiltroGenero" id="FiltroGenero2"
                                onChange={(e) => { setFiltroGenero(e.target.value) }} />
                            <label class="form-check-label" for="FiltroGenero2">
                                Macho
                            </label>
                        </div>
                    </div>

                    <div className="mt-4 card">

                        <h5 className="m-2"> Rango de edad </h5>

                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Menor a un año"
                                onChange={(e) => { setFiltroEdad(e.target.value) }}
                                name="FiltroEdad" id="FiltroEdad1" />
                            <label class="form-check-label" for="FiltroEdad1">
                                Menor a un año
                            </label>

                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Entre 1 a 4 años"
                                name="FiltroEdad" id="FiltroEdad2"
                                onChange={(e) => { setFiltroEdad(e.target.value) }} />
                            <label class="form-check-label" for="FiltroEdad2">
                                Entre 1 a 4 años
                            </label>
                        </div>
                        <div className="form-check m-2">
                            <input class="form-check-input" type="radio" value="Más de 4 años"
                                name="FiltroEdad" id="FiltroEdad3"
                                onChange={(e) => { setFiltroEdad(e.target.value) }} />
                            <label class="form-check-label" for="FiltroEdad3">
                                Más de 4 años
                            </label>
                        </div>
                    </div>

                    <button className="btn btn-success m-4" onClick={onClick}>Aplicar Filtros</button>

                </div>
                <div className="col-2"></div>

            </div>
        </div>
    )
}

export default FiltrosBusqueda