
import React from "react"
import HeaderDashboard from "../components/HeaderDashboard"
import NavbarDashboard from "../components/NavbarDashboard"
import ContentDashboard from "../components/ContentDashboard"

import profilePicture from '../assets/images/prof/4.png'
import { AiOutlineSearch, AiOutlineEdit, AiOutlineCheck, AiOutlineClose, AiOutlineRight, AiOutlineLock, AiOutlinePhone, AiOutlineDelete } from "react-icons/ai"
import { Form, Modal } from 'react-bootstrap'

const TransactionHistory = () => {
    return(
        <div className="saku-content-dashboard d-flex flex-column">
            <div className="bc-secondary saku-card  d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-2 saku-content-full">
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
                </div>
            </div>
        </div>
    )
}

const SearchReceiver = () => {
    return(
        <div className="saku-content-dashboard d-flex flex-column">
            <div className="bc-secondary saku-card  d-flex flex-column gap-3">
                <div className="d-flex flex-column gap-2 saku-content-full">
                    <span className="saku-h4">Transaction History</span>
                    <Form.Group className="d-flex align-items-center bc-primary w-fill px-3 py-1 rounded-3">
                        <AiOutlineSearch className='c-dark fs-4' />
                        <Form.Control name="receiver" type="receiver" placeholder="Search receiver here" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
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
            </div>
        </div>
    )
}

const Transfer = () => {
    return(
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
            <div className="d-flex w-fill justify-content-end">
                <button className='d-flex justify-content-center' onClick={false}>Continue</button>
            </div>
        </div>
    )
}

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
        <Modal.Footer className="border-0">
            <div className="d-flex w-fill justify-content-end">
                <button className='d-flex justify-content-center' onClick={false}>Continue</button>
            </div>
        </Modal.Footer>
      </Modal>
    );
}

const TransferDetail = () => {
    const [modalShow, setModalShow] = React.useState(false)

    return(
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
    )
}

const TransferStats = () => {
    return(
        <div className="saku-content-dashboard d-flex flex-column">
            {/* <div className="bc-secondary saku-card  d-flex flex-column gap-3">
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
                    <div className="d-flex justify-content-end">
                        <button className='d-flex justify-content-center' >Back to Home</button>
                    </div>
                </div>
            </div> */}

            <div className="bc-secondary saku-card  d-flex flex-column">
                <div className="d-flex flex-column gap-2 saku-content-full justify-content-between">
                    <div className="d-flex flex-column align-items-center gap-2">
                        <div className='bc-dark p-2 rounded-5'>
                            <AiOutlineClose className='c-primary fs-2' />
                        </div>
                        <span className="saku-h4 text-center">Transfer Failed</span>
                        <span className="saku-h5 text-center">We can’t transfer your money at the moment, we recommend you to check your internet connection and try again.</span>
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
                    <div className="d-flex justify-content-end">
                        <button className='d-flex justify-content-center' >Try Again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Topup = () => {
    return(
        <div className="saku-content-dashboard d-flex flex-column">
            <div className="bc-secondary saku-card  d-flex flex-column">
                <div className="d-flex flex-column gap-2 justify-content-between saku-content-full">
                    <span className="saku-h4">How To Top Up</span>
                    <div className="d-flex flex-column gap-3">
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">1.</span>
                            <span className="saku-h5">Go to the nearest ATM or you can use E-Banking.</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">2.</span>
                            <span className="saku-h5">Type your security number on the ATM or E-Banking.</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">3.</span>
                            <span className="saku-h5">Select “Transfer” in the menu</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">4.</span>
                            <span className="saku-h5">Type the virtual account number that we provide you at the top.</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">5.</span>
                            <span className="saku-h5">Type the amount of the money you want to top up.</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">6.</span>
                            <span className="saku-h5">Read the summary details</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">7.</span>
                            <span className="saku-h5">Press transfer / top up</span>
                        </div>
                        <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
                            <span className="saku-h4 c-dark">8.</span>
                            <span className="saku-h5">You can see your money in Zwallet within 3 hours.</span>
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className='d-flex justify-content-center' >Try Again</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Profile = () => {
    return(
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
                        <div>
                            <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                <sapn className='saku-h4'>Personal Information</sapn>
                                <AiOutlineRight className='c-dark fs-5' />
                            </div>
                        </div>
                        <div>
                            <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                <sapn className='saku-h4'>Change Password</sapn>
                                <AiOutlineRight className='c-dark fs-5' />
                            </div>
                        </div>
                        <div>
                            <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                <sapn className='saku-h4'>Change PIN</sapn>
                                <AiOutlineRight className='c-dark fs-5' />
                            </div>
                        </div>
                        <div>
                            <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                <sapn className='saku-h4'>Logout</sapn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const PersonalInformation = () => {
    return(
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
                            <span className="saku-h5 c-dark">Manage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ChangePassword = () => {
    return(
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
    )
}

const ChangePin = () => {
    return(
        <div className="saku-content-dashboard d-flex flex-column">
            <div className="bc-secondary saku-card  d-flex flex-column">
                <div className="d-flex flex-column gap-4 saku-content-full">
                    <span className="saku-h4">Change PIN</span>
                    <span className="saku-h5">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</span>
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
                            <button className='d-flex justify-content-center w-fill'>Continue</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ConfirmChangePin = () => {
    return(
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
    )
}

const AddPhoneNumber = () => {
    return(
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
    )
}

const ManagePhoneNumber = () => {
    return(
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
    )
}

const Test = () => {
    return(
        <div className="d-flex flex-column vh-100">
            <HeaderDashboard />
            <div className="d-flex saku-body-dashboard bc-white gap-3">
                <NavbarDashboard />
                <div className="saku-body-content flex-fill">
                    {/* <ContentDashboard /> */}
                    {/* <TransactionHistory /> */}
                    {/* <SearchReceiver /> */}
                    {/* <Transfer /> */}
                    {/* <TransferDetail /> */}
                    {/* <TransferStats /> */}
                    {/* <Topup /> */}
                    {/* <Profile /> */}
                    {/* <PersonalInformation /> */}
                    {/* <ChangePassword /> */}
                    {/* <ChangePin /> */}
                    {/* <ConfirmChangePin /> */}
                    {/* <AddPhoneNumber /> */}
                    {/* <ManagePhoneNumber /> */}
                </div>
            </div>
            <div className="saku-footer-dashboard bc-dark">
                <NavbarDashboard />
            </div>
        </div>
    )
}

export default Test