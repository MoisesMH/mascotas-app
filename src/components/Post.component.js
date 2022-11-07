import "../styles/Post.css"

function Post() {
    return (
        <div className="Post">
            <div className="Post__header">
                <div className="Post__header--left">
                    <div className="Post__portrait">
                        <span>
                            <img src="https://source.unsplash.com/DziZIYOGAHc" alt="imagen1" />
                        </span>
                    </div>
                    <div className="Post__carousel">
                        <div>
                            <ul>
                                <li>
                                    <span>a</span>
                                </li>
                                <li>
                                    <span>b</span>
                                </li>
                                <li>
                                    <span>c</span>
                                </li>
                                <li>
                                    <span>d</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="Post__header--right">
                    <div className="Post__brief--start">
                        <div className="segment">
                            <p>Titulo</p>
                            <p>Subtitulo 1</p>
                            <p>Subtitulo 2</p>
                        </div>
                        <div className="segment">
                            <p>Subtitulo 3</p>
                            <p>Subtitulo 4</p>
                        </div>
                    </div>
                    <div className="Post__brief--end">
                        <div>
                            <button><span>Más detalles</span></button>
                        </div>
                        <div>
                            <button><span>Contactar al dueño</span></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Post__body">
                <div className="Post__body--main">
                    <h1>Descripción</h1>
                    <p>"Cachorro" es un animal de cierta raza, a quien le gusta jugar con todos los humanos que ve a su alrededor. Es chato y prefiere dormir cuando nadie le presta atención.</p>
                </div>
            </div>
            <div className="Post__footer">
                <div className="Post__footer--main">
                    <h1>Contacta al dueño</h1>
                    <p>Nombre del dueño</p>
                    <p>Correo del dueño</p>
                    <p>Telefono del dueño</p>
                </div>
            </div>
        </div>
    )
}

export default Post;