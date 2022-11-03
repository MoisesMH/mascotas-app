import { Image } from "react-bootstrap"
import React from "react"

const Banner = () => {
    return (
        <div>
            <Image
            alt="..."
            className="me-2"
            src="https://media.perezlara.com/2021/02/Adopcio%CC%81n-de-mascotas-1.png"
            fluid={true}
            width={1540}
            />
        </div>
    )
}

export default Banner