
import profilePicture from '../assets/images/prof/4.png'
import { AiOutlineEdit, AiOutlineRight } from "react-icons/ai"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import { Link } from 'react-router-dom'

const Profile = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'profile'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-3 saku-content-full align-items-center justify-content-center">
                                <img src={profilePicture} alt='user' className='profile-picture'/>
                                <div className='d-flex align-items-center gap-1'>
                                    <AiOutlineEdit className='c-dark fs-5' />
                                    <span className='saku-h5'>Edit</span>
                                </div>
                                <span className='saku-h4'>Robert Chandler</span>
                                <span className='saku-h5'>+62 813-9387-7946</span>
                                <div className="d-flex flex-column gap-2">
                                    <Link className={`text-decoration-none fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3`} to='/dashboard/profile/info'>
                                        <sapn className='saku-h4 c-black'>Personal Information</sapn>
                                        <AiOutlineRight className='c-dark fs-5' />
                                    </Link>
                                    <Link className={`text-decoration-none fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3`} to='/dashboard/profile/cpass'>
                                        <sapn className='saku-h4 c-black'>Change Password</sapn>
                                        <AiOutlineRight className='c-dark fs-5' />
                                    </Link>
                                    <Link className={`text-decoration-none fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3`} to='/dashboard/profile/cpin'>
                                    <sapn className='saku-h4 c-black'>Change PIN</sapn>
                                        <AiOutlineRight className='c-dark fs-5' />
                                    </Link>
                                    <Link className={`text-decoration-none fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3`} to='/'>
                                        <sapn className='saku-h4 c-black'>Logout</sapn>
                                    </Link>
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

export default Profile