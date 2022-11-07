import CardList from "../components/CardList.component";
import Navbar from "../components/Navbar.component";
import "../styles/SearchPage.css"

function SearchPage() {
    return (
        <div className="SearchPage">
            <div className="SearchPage__header">
                <Navbar
                    tipoDeUsuario={2}
                    redireccionamiento={null}
                    salir={null}
                    ubicacion="/adopta"
                />
            </div>
            <div className="SearchPage__main">
                <div className="PostPage__main--container">
                    <CardList />
                </div>
            </div>
        </div>
    )
}

export default SearchPage;