import React from 'react'
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";

const renderTooltip1 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Grupo orientado a enfoque Adaptativo
    </Tooltip>
);
const renderTooltip2 = (props) => (
    <Tooltip id="button-tooltip" {...props}>
        Ciclo 2
    </Tooltip>
);

function Footer(props) {
    return (
        <footer className="card mt-4 mb-2 text-bg-primary">
            <div className="card-body">
                <div className="row">
                    <div className="col-md">
                        <div className="text-center mb-1">
                            <Button
                                variant="outline-dark"
                                onClick={() => { props.redireccionamiento('/NosotrosPage') }}
                            >
                                Nosotros
                            </Button>
                        </div>
                        <div className="text-center mt-1 mb-1">
                            <Button
                                variant="outline-dark"
                                onClick={() => { props.redireccionamiento('/') }}
                            >
                                Contactenos
                            </Button>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="text-center mb-1">
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip1}
                            >
                                <Button variant="outline-dark">Grupo 5</Button>
                            </OverlayTrigger>
                            </div>
                        <div className="text-center mt-1">
                        <OverlayTrigger
                                placement="top"
                                delay={{ show: 250, hide: 400 }}
                                overlay={renderTooltip2}
                            >
                                <Button variant="outline-dark">ULIMA-2022</Button>
                            </OverlayTrigger>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer