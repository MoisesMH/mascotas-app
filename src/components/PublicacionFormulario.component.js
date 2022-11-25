import React, { useState, useEffect } from "react"
import { Modal } from "react-bootstrap"
import "../styles/MascotasApp.css"
import { db, storage } from "../config/FirebaseApp"
import { getDownloadURL, ref, uploadBytes } from "firebase/storage"
import { collection, addDoc, doc, updateDoc, Timestamp, serverTimestamp } from "firebase/firestore"

const PublicacionFormulario = (props) => {

    const [fotoSeleccionada, setFotoSeleccionada] = useState(null)
    const [nombreAnimal, setNombreAnimal] = useState("")
    const [razaAnimal, setRazaAnimal] = useState("")
    const [tamanoAnimal, setTamanoAnimal] = useState("")
    const [generoAnimal, setGeneroAnimal] = useState("")
    const [edadAnimal, setEdadAnimaal] = useState("")
    const [descAnimal, setDescAnimaal] = useState("")
    const [procesoCargaOn, setProcesoCarga] = useState(false)
    const [preview, setPreview] = useState("")

    useEffect(() => {
        // create the preview
        if (fotoSeleccionada == null) {
            return
        }

        const objectUrl = URL.createObjectURL(fotoSeleccionada)
        setPreview(objectUrl)

        // free memory when ever this component is unmounted
        return () => URL.revokeObjectURL(preview)
    }, [fotoSeleccionada])


    const subirFirebaseStorage = (pubID) => {
        const fotoSeleccionadaRef = ref(storage, `FotosAnimal/${props.userID}/${pubID}/${fotoSeleccionada.name}`)
        uploadBytes(fotoSeleccionadaRef, fotoSeleccionada).then((snapshot) => {
            console.log(snapshot);
            console.log("Subida exitosa")
            const path = snapshot.metadata.fullPath
            getDownloadURL(ref(storage,path)).then(url=>{
                actualizarImagenPublicacion(url, pubID)
            })
        }).catch((error) => {
            setProcesoCarga(false)
            console.log(error)
        })
    }

    const crearDocumentoPublicacion = async () => {

        const data = {
            "Usuario": props.userID,
            "NombreAnimal": nombreAnimal,
            "RazaAnimal": razaAnimal,
            "TamanoAnimal": tamanoAnimal,
            "GeneroAnimal": generoAnimal,
            "EdadAnimal": edadAnimal,
            "DescripcionAnimal": descAnimal,
            "Imagen": "",
            "FechaSubida": serverTimestamp(),
            "Estado": "Online"
        }

        const docRef = await addDoc(collection(db, "publicaciones"), data).catch((error) => {
            setProcesoCarga(false)
            console.log(error)
        })

        subirFirebaseStorage(docRef.id)

    }

    const actualizarImagenPublicacion = async (imgPath, docRef) => {
        const docReference = doc(db, "publicaciones", docRef)

        await updateDoc(docReference, {
            Imagen: imgPath
        }).catch((error) => {
            setProcesoCarga(false)
            console.log(error)
        })

        console.log("Proceso completado")
        setProcesoCarga(false)
    }

    const handleUpload = () => {

        if (checkFields() == false) {
            return
        }

        setProcesoCarga(true)

        crearDocumentoPublicacion()
    }

    const handleChange = e => {

        if (e.target.files[0]) {
            setFotoSeleccionada(e.target.files[0])
        }
    }

    const checkFields = () => {

        if (fotoSeleccionada == null) {
            console.log("No ha ellegido ninguna imagen")
            return false
        }

        if (nombreAnimal == "") {
            console.log("No ha colocado nombre")
            return false
        }

        if (razaAnimal == "") {
            console.log("Uno o más campos faltan")
            return false
        }

        if (tamanoAnimal == "") {
            console.log("Uno o más campos faltan")
            return false
        }

        if (generoAnimal == "") {
            console.log("Uno o más campos faltan")
            return false
        }

        if (edadAnimal == "") {
            console.log("Uno o más campos faltan")
            return false
        }

        if (descAnimal == "") {
            console.log("Uno o más campos faltan")
            return false
        }

        return true

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
                                        <div className="mt-4 mb-4 ">
                                            <img src={preview} class="img-fluid"></img>
                                            <button className="btn btn-dark mt-2" onClick={() => {
                                                setFotoSeleccionada(null)
                                            }}>Eliminar foto</button>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div>
                                            <div className="text-bg-secondary opacity-50 backgroundNoImage">
                                                <div class="custom-file">
                                                    <input type="file" class="custom-file-input" id="inputGroupFile01" onChange={handleChange} />
                                                    <label class="custom-file-label" for="inputGroupFile01">Elegir una foto</label>
                                                </div>
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
                                        onChange={(e) => setNombreAnimal(e.target.value)}></input>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="razaAnimal" aria-label="razaAnimal"
                                        onChange={(e) => setRazaAnimal(e.target.value)}>
                                        <option selected>Seleccione una especie....</option>
                                        <option value="Perro">Perro</option>
                                        <option value="Gato">Gato</option>
                                        <option value="Otros">Otros</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="tamanoAnimal" aria-label="tamanoAnimal"
                                        onChange={(e) => setTamanoAnimal(e.target.value)}>
                                        <option selected>Seleccione un tamaño....</option>
                                        <option value="Pequeño">Pequeño</option>
                                        <option value="Mediano">Mediano</option>
                                        <option value="Grande">Grande</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="generoAnimal" aria-label="generoAnimal"
                                        onChange={(e) => setGeneroAnimal(e.target.value)}>
                                        <option selected>Seleccione un género....</option>
                                        <option value="Hembra">Hembra</option>
                                        <option value="Macho">Macho</option>
                                    </select>
                                </div>
                                <div className="mt-4 mb-2">
                                    <select class="form-select" id="edadAnimal" aria-label="edadAnimal"
                                        onChange={(e) => setEdadAnimaal(e.target.value)}>
                                        <option selected>Seleccione un rango de edad....</option>
                                        <option value="Menor a un año">Menor a un año</option>
                                        <option value="Entre 1 a 4 años">Entre 1 a 4 años</option>
                                        <option value="Más de 4 años">Más de 4 años</option>
                                    </select>
                                </div>
                                <div class="mt-4">
                                    <textarea class="form-control"
                                        placeholder="Escriba una descripción..."
                                        id="exampleFormControlTextarea1" rows="5"
                                        onChange={(e) => setDescAnimaal(e.target.value)}></textarea>
                                </div>
                                <button type="button" className="btn btn-info mt-4" onClick={handleUpload}>
                                    Crear publicación
                                </button>
                            </form>
                            <Modal show={procesoCargaOn}>
                                <Modal.Header>
                                    <Modal.Title>Cargando Publicación</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <div>
                                        Por favor espere.....
                                    </div>
                                </Modal.Body>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default PublicacionFormulario