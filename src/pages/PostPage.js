import React from "react";
import Navbar from "../components/Navbar.component";
import Post from "../components/Post.component";
import "../styles/PostPage.css"

function PostPage() {
    return (
        <div className="PostPage">
            <div className="PostPage__header">
                <Navbar
                    tipoDeUsuario={2}
                    redireccionamiento={null}
                    salir={null}
                    ubicacion="/adopta"
                />
            </div>
            <div className="PostPage__main">
                <div className="PostPage__main--container">
                    <Post />
                </div>
                {/* <h1>Hola</h1> */}
            </div>
        </div>
    )
}

export default PostPage;