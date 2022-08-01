
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import { Link } from 'react-router-dom'

const PersonalInformation = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'profile'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-4 saku-content-full">
                                <span className="saku-h4">Personal Information</span>
                                <span className="saku-h5">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</span>
                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">First Name</span>
                                            <span className="saku-h4">Robert</span>
                                        </div>
                                    </div>
                                    <div className="d-flex bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Last Name</span>
                                            <span className="saku-h4">Chandler</span>
                                        </div>
                                    </div>
                                    <div className="d-flex bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Verified E-mail</span>
                                            <span className="saku-h4">pewdiepie1@gmail.com</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Phone Number</span>
                                            <span className="saku-h4">+62 813-9387-7946</span>
                                        </div>
                                        <div className="d-flex gap-2">
                                            <Link className={`text-decoration-none`} to='/dashboard/profile/addphone'>
                                                <span className="saku-h5">Add</span>
                                            </Link>
                                            /
                                            <Link className={`text-decoration-none`} to='/dashboard/profile/managephone'>
                                                <span className="saku-h5">Manage</span>
                                            </Link>
                                        </div>
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

export default PersonalInformation