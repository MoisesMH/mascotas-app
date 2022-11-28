import "../styles/Card.css";

const NewCard = (props) =>{

    const handleClick = () => {
        //Jean aca esta xd
        console.log("Entrar a publicacion")
        console.log(props.publicacion.documentId)
    }

    return (
        <div className="Card" onClick={handleClick} >
            
            <div className="Card__header">
                <img src={props.publicacion.Imagen} alt="un perrito" />
            </div>
            <div className="Card__body">
                <div>
                    <span className="title">{props.publicacion.NombreAnimal}</span>
                    <span className="subtitle1">{props.publicacion.RazaAnimal}</span>
                </div>
                <div>
                    <span className="subtitle2">{props.publicacion.GeneroAnimal}</span>
                    <span className="subtitle3">{props.publicacion.EdadAnimal}</span>
                </div>
            </div>
        </div>
    )


}

export default NewCard