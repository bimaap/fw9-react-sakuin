
import profilePicture from '../assets/images/prof/4.png'
import { AiOutlineEdit } from "react-icons/ai"
import { Form } from 'react-bootstrap'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import {Link, useParams} from 'react-router-dom'

const Transfer = () => {
    const {id} = useParams()
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'transfer'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column saku-card bc-secondary">
                        <span className="saku-h4">Transaction History</span>
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
                        <div className="d-flex flex-column h-fill align-items-center justify-content-center gap-5">
                            <Form.Group className="d-flex align-items-center">
                                <Form.Control name="amount" onChange={false} type="text" placeholder="0.00" isInvalid={false} className='saku-h1 bg-transparent border-0 text-center'/>
                            </Form.Group>
                            <span className='saku-h4'>Rp{100000} Available</span>
                            <Form.Group className="d-flex align-items-center fw-input">
                                <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineEdit className='c-dark fs-5' /></Form.Label>
                                <Form.Control name="notes" onChange={false} type="text" placeholder="Add some notes" isInvalid={false} className='bg-transparent border-0'/>
                            </Form.Group>
                        </div>
                        <Link className={`text-decoration-none d-flex w-fill justify-content-end`} to={`/dashboard/transfer/detail/${id}`}>
                            <button className='d-flex justify-content-center' onClick={false}>Continue</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'transfer'} />
            </div>
        </div>
    )
}

export default Transfer