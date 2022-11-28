import { Card } from "react-bootstrap";
import Manuel from '../images/Manuel.jpeg'
import Aylin from '../images/Aylin.jpeg'
import Franco from '../images/Franco.jpeg'
import Moises from '../images/Moises.jpeg'
import JeanPierre from '../images/JeanPierre.jpeg'

const Nosotros = (props) => {
    return (
        <div>
            <h2 className="mt-3 text-center">Nosotros</h2>
            <div className="row d-flex justify-content-center">
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src={ Aylin } />
                <Card.Body>
                    <Card.Title className="text-center">Aylin Tatiana Gonzales Alejos</Card.Title>
                    <Card.Text align="justify">
                    
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src={ Franco } />
                <Card.Body>
                    <Card.Title className="text-center">Franco Leonardo Marquez Velasquez</Card.Title>
                    <Card.Text align="justify">

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src={ Moises } />
                <Card.Body>
                    <Card.Title className="text-center">Moises Abraham Melendez Hualpa</Card.Title>
                    <Card.Text align="justify">

                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
                <Card.Img className="mt-2" variant="top" src={ JeanPierre } />
                <Card.Body align="justify">
                    <Card.Title className="text-center">Jean Pierre Soto Tipacti</Card.Title>
                    <Card.Text>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="m-2 col-lg-3 col-sm-6 text-white bg-primary bg-opacity-75">
            <Card.Img className="mt-2" variant="top" src={ Manuel } />
                <Card.Body>
                    <Card.Title className="text-center">Manuel Andres Igreda Valer</Card.Title>
                    <Card.Text align="justify">

                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
            <div className="btn-lg d-flex justify-content-center">
                <button
                    className="btn btn-primary"
                    onClick={() => { props.volver() }}
                    type="button">
                    Regresar
                </button>
            </div>
        </div>
    )
}

export default Nosotros