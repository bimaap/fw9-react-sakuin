

import profilePicture from '../assets/images/prof/4.png'
import { Form } from 'react-bootstrap'
import { AiOutlineSearch } from "react-icons/ai"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import { Link } from 'react-router-dom'

const SearchReceiver = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'transfer'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column gap-3">
                            <div className="d-flex flex-column gap-2 saku-content-full">
                                <span className="saku-h4">Transaction History</span>
                                <Form.Group className="d-flex align-items-center bc-primary w-fill px-3 py-1 rounded-3">
                                    <AiOutlineSearch className='c-dark fs-4' />
                                    <Form.Control name="receiver" type="receiver" placeholder="Search receiver here" isInvalid={false} className='bg-transparent border-0'/>
                                </Form.Group>
                                <Link className={`text-decoration-none`} to={`/dashboard/transfer/${1}`}>
                                    <div className="d-flex justify-content-between bc-primary p-2 rounded">
                                        <div className="d-flex gap-2">
                                            <img src={profilePicture} alt='user' className='profile-picture'/>
                                            <div className="d-flex flex-column justify-content-center">
                                                <span className="saku-h4 c-black">Samuel Suhi</span>
                                                <span className="saku-h5 c-dark">Transfer</span>
                                            </div>
                                        </div>
                                        <span className="saku-h4 d-flex align-items-center c-black">+Rp50.000</span>
                                    </div>
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

export default SearchReceiver