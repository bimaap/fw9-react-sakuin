
import { AiOutlineLock } from "react-icons/ai"
import { Form } from 'react-bootstrap'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const ChangePassword = () => {
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
                                <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <AiOutlineLock className='c-dark fs-4' />
                                            <Form.Control name="password" onChange={false} type="password" placeholder="Current password" isInvalid={true} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{false}</h3>
                                    </div>
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <AiOutlineLock className='c-dark fs-4' />
                                            <Form.Control name="password" onChange={false} type="password" placeholder="New password" isInvalid={true} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{false}</h3>
                                    </div>
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <AiOutlineLock className='c-dark fs-4' />
                                            <Form.Control name="password" onChange={false} type="password" placeholder="Repeat new password" isInvalid={true} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{false}</h3>
                                    </div>
                                    <button className='d-flex justify-content-center'>Change Password</button>
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

export default ChangePassword