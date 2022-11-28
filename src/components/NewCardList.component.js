import React from "react";
import "../styles/CardList.css"
import NewCard from "./NewCard.component";




const NewCardList = (props) => {

    return (
        <div className="CardList">
            <div className="CardList--wrapper">
                {
                    props.publicaciones.map((publicacion)=>(
                        <NewCard publicacion={publicacion}/>
                    ))
                }
            </div>
        </div>
    )
}

export default NewCardList