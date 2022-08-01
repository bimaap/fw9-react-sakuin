
import React from 'react'
import profilePicture from '../assets/images/prof/4.png'
import { Form, Modal } from 'react-bootstrap'
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import { Link } from 'react-router-dom'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className="border-0">
          <Modal.Title id="contained-modal-title-vcenter" className="saku-h4">
            Enter PIN to Transfer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex flex-column gap-4">
            <span className="saku-h5">Enter your 6 digits PIN for confirmation to continue transferring money.</span>
            <div className='d-flex gap-2 justify-content-between'>
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
            <h3 className='invaild-feedback' type="invalid">{false}</h3>
        </Modal.Body>
        <Modal.Footer className="d-flex border-0">
            <Link className={`text-decoration-none`} to={`/dashboard/transfer/failed`}>
                <span className='d-flex saku-h5 justify-content-center' onClick={false}>Cancel</span>
            </Link>
            <Link className={`text-decoration-none d-flex w-fill justify-content-end`} to={`/dashboard/transfer/success`}>
                <button className='d-flex justify-content-center' onClick={false}>Continue</button>
            </Link>
        </Modal.Footer>
      </Modal>
    );
}

const TransferDetail = () => {
    const [modalShow, setModalShow] = React.useState(false)

    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard active={'transfer'} />
                <div className="saku-body-content flex-fill">
                    <div className="saku-content-dashboard d-flex flex-column saku-card bc-secondary">
                        <span className="saku-h4">Transfer To</span>
                        <div className="d-flex justify-content-between bc-primary p-2 rounded">
                            <div className="d-flex gap-2">
                                <img src={profilePicture} alt='user' className='profile-picture'/>
                                <div className="d-flex flex-column justify-content-center">
                                    <span className="saku-h4">Samuel Suhi</span>
                                    <span className="saku-h5">+62 813-8492-9994</span>
                                </div>
                            </div>
                        </div>
                        <span className="saku-h4">Details</span>
                        <div className="d-flex flex-column h-fill gap-3">
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
                        </div>
                        <div className="d-flex w-fill justify-content-end">
                            <button className='d-flex justify-content-center' onClick={() => setModalShow(true)}>Continue</button>
                        </div>
                        <MyVerticallyCenteredModal
                            show={modalShow}
                            onHide={() => setModalShow(false)}
                        />
                    </div>
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard active={'transfer'} />
            </div>
        </div>
    )
}

export default TransferDetail