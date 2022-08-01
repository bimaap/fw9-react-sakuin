
import { AiOutlinePhone } from "react-icons/ai"
import { Form } from 'react-bootstrap'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const AddPhoneNumber = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'profile'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-4 saku-content-full">
                                <span className="saku-h4">Add Phone Number</span>
                                <span className="saku-h5">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</span>
                                <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <div className="d-flex gap-1">
                                                <AiOutlinePhone className='c-dark fs-4' />
                                                <span className="saku-h4">+62</span>
                                            </div>
                                            <Form.Control name="password" onChange={false} type="text" placeholder="Enter your phone number" isInvalid={true} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{false}</h3>
                                    </div>
                                    <button className='d-flex justify-content-center'>Add Phone Number</button>
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

export default AddPhoneNumber