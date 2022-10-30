import React from "react";
import MascotaList from "./MascotaList";
import Navbar from "./layout/Navbar/Navbar";
import "./MascotasApp.css"
import NavbarSide from "./layout/Navbar/NavbarSide";
import useToggleState from "./hooks/useToggleState";

function MascotasApp() {
    const [navside, toggleNavside] = useToggleState()
    return (
        <div className="MascotasApp-main">
            <div className="MascotasApp-header">
                <Navbar enableNavside={toggleNavside} />
                <NavbarSide navsideSwitch={navside} />
            </div>
            <div className="MascotasApp-Section">
                <MascotaList />
            </div>
            <div className="MascotasApp-Footer">

            </div>
        </div>
    )
}

export default MascotasApp