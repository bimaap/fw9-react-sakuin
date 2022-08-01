
import profilePicture from '../assets/images/prof/4.png'
import { AiOutlineCheck } from "react-icons/ai"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import { Link } from 'react-router-dom'

const TransferSuccess = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'transfer'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column gap-3">
                            <div className="d-flex flex-column saku-content-full justify-content-between">
                                <div className="d-flex flex-column align-items-center gap-2">
                                    <div className='bg-success p-2 rounded-5'>
                                        <AiOutlineCheck className='c-primary fs-2' />
                                    </div>
                                    <span className="saku-h4 text-center">Transfer Success</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Amount</span>
                                            <span className="saku-h4">Rp100.000</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Balance Left</span>
                                            <span className="saku-h4">Rp20.000</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Date & Time</span>
                                            <span className="saku-h4">May 11, 2020 - 12.20</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
                                        <div className="d-flex flex-column justify-content-center">
                                            <span className="saku-h5 c-dark">Notes</span>
                                            <span className="saku-h4">For buying some socks</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="saku-h4 text-center">Transfer to</span>
                                    </div>
                                    <div className="d-flex justify-content-between bc-primary p-2 rounded">
                                        <div className="d-flex gap-2">
                                            <img src={profilePicture} alt='user' className='profile-picture'/>
                                            <div className="d-flex flex-column justify-content-center">
                                                <span className="saku-h4">Samuel Suhi</span>
                                                <span className="saku-h5">Transfer</span>
                                            </div>
                                        </div>
                                        <span className="saku-h4 d-flex align-items-center">+Rp50.000</span>
                                    </div>
                                </div>
                                <Link className={`text-decoration-none d-flex justify-content-end`} to={`/dashboard`}>
                                    <button className='d-flex justify-content-center'>Back to Home</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'transfer'} />
            </div>
        </div>
    )
}

export default TransferSuccess