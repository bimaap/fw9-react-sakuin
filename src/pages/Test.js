
import React from "react"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import ContentDashboard from "../components/ContentDashboard"


const Test = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard />
                <div className="saku-body-content flex-fill">
                    <ContentDashboard />
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard />
            </div>
        </div>
    )
}

export default Test