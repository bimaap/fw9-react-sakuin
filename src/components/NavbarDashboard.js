
import React from "react"
import { AiOutlineBell, AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser, AiOutlineLogout} from "react-icons/ai";

const HeaderDashboard = () => {
    return(
        <>
            <div className="saku-navbar-dashboard d-flex flex-column bc-primary justify-content-between saku-card">
                <div className="saku-navbar-main d-flex flex-column gap-5">
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlineBell className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Dashboard</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlineArrowUp className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Transfer</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlinePlus className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Top Up</span>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                        <AiOutlineUser className="saku-h3 c-dark"/>
                        <span className="saku-h4 c-dark">Profile</span>
                    </div>
                </div>
                <div className="saku-navbar-logout d-flex align-items-center gap-2">
                    <AiOutlineLogout className="saku-h3 c-dark"/>
                    <span className="saku-h4 c-dark">Logout</span>
                </div>
            </div>
        </>
    )
}

export default HeaderDashboard