
import { Form } from 'react-bootstrap'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"

const ConfirmChangePin = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'profile'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column">
                        <div className="bc-secondary saku-card  d-flex flex-column">
                            <div className="d-flex flex-column gap-4 saku-content-full">
                                <span className="saku-h4">Change PIN</span>
                                <span className="saku-h5">Type your new 6 digits security PIN to use in Zwallet.</span>
                                <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
                                    <div className='d-flex gap-4 flex-column justify-content-between'>
                                        <div className="d-flex gap-2">
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-1' name="pin1" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-2' name="pin2" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-3' name="pin3" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-4' name="pin4" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-5' name="pin5" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                            <div className='control-pin'>
                                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                    <Form.Control id='pin-6' name="pin6" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                                </Form.Group>
                                            </div>
                                        </div>
                                        <button className='d-flex justify-content-center w-fill'>Change Pin</button>
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

export default ConfirmChangePin