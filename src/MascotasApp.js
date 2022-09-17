import React from "react";
import MascotaList from "./MascotaList";
import Navbar from "./Navbar";

function MascotasApp() {
    return (
        <div className="MascotasApp-main">
            <div className="MascotasApp-header">
                <Navbar />
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