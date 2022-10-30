import React from "react";
import "./Card.css"

function Card({ title, sub1, sub2, sub3, link }) {
    return (
        <div className="Card">
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