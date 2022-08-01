
import {  AiOutlineDelete } from "react-icons/ai"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const ManagePhoneNumber = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'profile'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-4 saku-content-full">
                                <span className="saku-h4">Manage Phone Number</span>
                                <span className="saku-h5">You can only delete the phone number and then you must add another phone number.</span>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex justify-content-between align-items-center bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Primary</span>
                                            <span className="saku-h4">+62 813-9387-7946</span>
                                        </div>
                                        <AiOutlineDelete className='c-dark fs-4' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'profile'} />
            </div>
        </div>
    )
}

export default ManagePhoneNumber