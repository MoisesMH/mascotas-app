import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

function Card({ title, sub1, sub2, sub3, link = null }) {
    // Set redirect switch
    const [clicked, setClicked] = useState(false)
    const navigate = useNavigate()
    const handleClick = () => link && setClicked(true)

    // Redirect if card is clicked
    useEffect(() => {
        if(clicked) {
            navigate(link)
        }
    }, [clicked])

    return (
        <div className="Card" onClick={handleClick} >
            <div className="Card__header">
                <img src="https://source.unsplash.com/DziZIYOGAHc" alt="un perrito" />
            </div>
            <div className="Card__body">
                <div>
                    <span className="title">Title</span>
                    <span className="subtitle1">Subtitle</span>
                </div>
                <div>
                    <span className="subtitle2">Subtitle2</span>
                    <span className="subtitle3">Subtitle3</span>
                </div>
            </div>
        </div>
    )
}

export default Card