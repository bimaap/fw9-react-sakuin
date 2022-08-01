
// import React from "react"
// import HeaderDashboard from "../components/HeaderDashboard"
// import NavbarDashboard from "../components/NavbarDashboard"
// import ContentDashboard from "../components/ContentDashboard"

// import profilePicture from '../assets/images/prof/4.png'
// import { AiOutlineSearch, AiOutlineEdit, AiOutlineCheck, AiOutlineClose, AiOutlineRight, AiOutlineLock, AiOutlinePhone, AiOutlineDelete } from "react-icons/ai"
// import { Form, Modal } from 'react-bootstrap'

// const TransactionHistory = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column gap-3">
//                 <div className="d-flex flex-column gap-2 saku-content-full">
//                     <span className="saku-h4">Transaction History</span>
//                     <div className="d-flex justify-content-between bc-primary p-2 rounded">
//                         <div className="d-flex gap-2">
//                             <img src={profilePicture} alt='user' className='profile-picture'/>
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h4">Samuel Suhi</span>
//                                 <span className="saku-h5">Transfer</span>
//                             </div>
//                         </div>
//                         <span className="saku-h4 d-flex align-items-center">+Rp50.000</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const SearchReceiver = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column gap-3">
//                 <div className="d-flex flex-column gap-2 saku-content-full">
//                     <span className="saku-h4">Transaction History</span>
//                     <Form.Group className="d-flex align-items-center bc-primary w-fill px-3 py-1 rounded-3">
//                         <AiOutlineSearch className='c-dark fs-4' />
//                         <Form.Control name="receiver" type="receiver" placeholder="Search receiver here" isInvalid={false} className='bg-transparent border-0'/>
//                     </Form.Group>
//                     <div className="d-flex justify-content-between bc-primary p-2 rounded">
//                         <div className="d-flex gap-2">
//                             <img src={profilePicture} alt='user' className='profile-picture'/>
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h4">Samuel Suhi</span>
//                                 <span className="saku-h5">Transfer</span>
//                             </div>
//                         </div>
//                         <span className="saku-h4 d-flex align-items-center">+Rp50.000</span>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const Transfer = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column saku-card bc-secondary">
//             <span className="saku-h4">Transaction History</span>
//             <div className="d-flex justify-content-between bc-primary p-2 rounded">
//                 <div className="d-flex gap-2">
//                     <img src={profilePicture} alt='user' className='profile-picture'/>
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h4">Samuel Suhi</span>
//                         <span className="saku-h5">Transfer</span>
//                     </div>
//                 </div>
//                 <span className="saku-h4 d-flex align-items-center">+Rp50.000</span>
//             </div>
//             <div className="d-flex flex-column h-fill align-items-center justify-content-center gap-5">
//                 <Form.Group className="d-flex align-items-center">
//                     <Form.Control name="amount" onChange={false} type="text" placeholder="0.00" isInvalid={false} className='saku-h1 bg-transparent border-0 text-center'/>
//                 </Form.Group>
//                 <span className='saku-h4'>Rp{100000} Available</span>
//                 <Form.Group className="d-flex align-items-center fw-input">
//                     <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineEdit className='c-dark fs-5' /></Form.Label>
//                     <Form.Control name="notes" onChange={false} type="text" placeholder="Add some notes" isInvalid={false} className='bg-transparent border-0'/>
//                 </Form.Group>
//             </div>
//             <div className="d-flex w-fill justify-content-end">
//                 <button className='d-flex justify-content-center' onClick={false}>Continue</button>
//             </div>
//         </div>
//     )
// }

// function MyVerticallyCenteredModal(props) {
//     return (
//       <Modal
//         {...props}
//         size="md"
//         aria-labelledby="contained-modal-title-vcenter"
//         centered
//       >
//         <Modal.Header closeButton className="border-0">
//           <Modal.Title id="contained-modal-title-vcenter" className="saku-h4">
//             Enter PIN to Transfer
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="d-flex flex-column gap-4">
//             <span className="saku-h5">Enter your 6 digits PIN for confirmation to continue transferring money.</span>
//             <div className='d-flex gap-2 justify-content-between'>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-1' name="pin1" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-2' name="pin2" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-3' name="pin3" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-4' name="pin4" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-5' name="pin5" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//                 <div className='control-pin'>
//                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                         <Form.Control id='pin-6' name="pin6" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                     </Form.Group>
//                 </div>
//             </div>
//             <h3 className='invaild-feedback' type="invalid">{false}</h3>
//         </Modal.Body>
//         <Modal.Footer className="border-0">
//             <div className="d-flex w-fill justify-content-end">
//                 <button className='d-flex justify-content-center' onClick={false}>Continue</button>
//             </div>
//         </Modal.Footer>
//       </Modal>
//     );
// }

// const TransferDetail = () => {
//     const [modalShow, setModalShow] = React.useState(false)

//     return(
//         <div className="saku-content-dashboard d-flex flex-column saku-card bc-secondary">
//             <span className="saku-h4">Transfer To</span>
//             <div className="d-flex justify-content-between bc-primary p-2 rounded">
//                 <div className="d-flex gap-2">
//                     <img src={profilePicture} alt='user' className='profile-picture'/>
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h4">Samuel Suhi</span>
//                         <span className="saku-h5">+62 813-8492-9994</span>
//                     </div>
//                 </div>
//             </div>
//             <span className="saku-h4">Details</span>
//             <div className="d-flex flex-column h-fill gap-3">
//                 <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h5 c-dark">Amount</span>
//                         <span className="saku-h4">Rp100.000</span>
//                     </div>
//                 </div>
//                 <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h5 c-dark">Balance Left</span>
//                         <span className="saku-h4">Rp20.000</span>
//                     </div>
//                 </div>
//                 <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h5 c-dark">Date & Time</span>
//                         <span className="saku-h4">May 11, 2020 - 12.20</span>
//                     </div>
//                 </div>
//                 <div className="d-flex justify-content-between bc-primary px-3 py-2 rounded">
//                     <div className="d-flex flex-column justify-content-center">
//                         <span className="saku-h5 c-dark">Notes</span>
//                         <span className="saku-h4">For buying some socks</span>
//                     </div>
//                 </div>
//             </div>
//             <div className="d-flex w-fill justify-content-end">
//                 <button className='d-flex justify-content-center' onClick={() => setModalShow(true)}>Continue</button>
//             </div>
//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </div>
//     )
// }

{/*const TransferStats = () => {
    return(
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
                    <div className="d-flex justify-content-end">
                        <button className='d-flex justify-content-center' >Back to Home</button>
                    </div>
                </div>
            </div> 

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
}*/}

// const Topup = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-2 justify-content-between saku-content-full">
//                     <span className="saku-h4">How To Top Up</span>
//                     <div className="d-flex flex-column gap-3">
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">1.</span>
//                             <span className="saku-h5">Go to the nearest ATM or you can use E-Banking.</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">2.</span>
//                             <span className="saku-h5">Type your security number on the ATM or E-Banking.</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">3.</span>
//                             <span className="saku-h5">Select “Transfer” in the menu</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">4.</span>
//                             <span className="saku-h5">Type the virtual account number that we provide you at the top.</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">5.</span>
//                             <span className="saku-h5">Type the amount of the money you want to top up.</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">6.</span>
//                             <span className="saku-h5">Read the summary details</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">7.</span>
//                             <span className="saku-h5">Press transfer / top up</span>
//                         </div>
//                         <div className="d-flex align-items-center bc-primary p-3 gap-3 rounded">
//                             <span className="saku-h4 c-dark">8.</span>
//                             <span className="saku-h5">You can see your money in Zwallet within 3 hours.</span>
//                         </div>
//                     </div>
//                     <div className="d-flex justify-content-end">
//                         <button className='d-flex justify-content-center' >Try Again</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const Profile = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-3 saku-content-full align-items-center justify-content-center">
//                     <img src={profilePicture} alt='user' className='profile-picture'/>
//                     <div className='d-flex align-items-center gap-1'>
//                         <AiOutlineEdit className='c-dark fs-5' />
//                         <span className='saku-h5'>Edit</span>
//                     </div>
//                     <span className='saku-h4'>Robert Chandler</span>
//                     <span className='saku-h5'>+62 813-9387-7946</span>
//                     <div className="d-flex flex-column gap-2">
//                         <div>
//                             <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                 <sapn className='saku-h4'>Personal Information</sapn>
//                                 <AiOutlineRight className='c-dark fs-5' />
//                             </div>
//                         </div>
//                         <div>
//                             <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                 <sapn className='saku-h4'>Change Password</sapn>
//                                 <AiOutlineRight className='c-dark fs-5' />
//                             </div>
//                         </div>
//                         <div>
//                             <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                 <sapn className='saku-h4'>Change PIN</sapn>
//                                 <AiOutlineRight className='c-dark fs-5' />
//                             </div>
//                         </div>
//                         <div>
//                             <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                 <sapn className='saku-h4'>Logout</sapn>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const PersonalInformation = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Personal Information</span>
//                     <span className="saku-h5">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</span>
//                     <div className="d-flex flex-column gap-3">
//                         <div className="d-flex bc-primary px-3 py-2 rounded">
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h5 c-dark">First Name</span>
//                                 <span className="saku-h4">Robert</span>
//                             </div>
//                         </div>
//                         <div className="d-flex bc-primary px-3 py-2 rounded">
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h5 c-dark">Last Name</span>
//                                 <span className="saku-h4">Chandler</span>
//                             </div>
//                         </div>
//                         <div className="d-flex bc-primary px-3 py-2 rounded">
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h5 c-dark">Verified E-mail</span>
//                                 <span className="saku-h4">pewdiepie1@gmail.com</span>
//                             </div>
//                         </div>
//                         <div className="d-flex justify-content-between align-items-center bc-primary px-3 py-2 rounded">
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h5 c-dark">Phone Number</span>
//                                 <span className="saku-h4">+62 813-9387-7946</span>
//                             </div>
//                             <span className="saku-h5 c-dark">Manage</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ChangePassword = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Personal Information</span>
//                     <span className="saku-h5">We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</span>
//                     <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
//                         <div className="mb-3">
//                             <div className='d-flex align-items-center fw-input'>
//                                 <AiOutlineLock className='c-dark fs-4' />
//                                 <Form.Control name="password" onChange={false} type="password" placeholder="Current password" isInvalid={true} className='bg-transparent border-0' />
//                             </div>
//                             <h3 className='invaild-feedback' type="invalid">{false}</h3>
//                         </div>
//                         <div className="mb-3">
//                             <div className='d-flex align-items-center fw-input'>
//                                 <AiOutlineLock className='c-dark fs-4' />
//                                 <Form.Control name="password" onChange={false} type="password" placeholder="New password" isInvalid={true} className='bg-transparent border-0' />
//                             </div>
//                             <h3 className='invaild-feedback' type="invalid">{false}</h3>
//                         </div>
//                         <div className="mb-3">
//                             <div className='d-flex align-items-center fw-input'>
//                                 <AiOutlineLock className='c-dark fs-4' />
//                                 <Form.Control name="password" onChange={false} type="password" placeholder="Repeat new password" isInvalid={true} className='bg-transparent border-0' />
//                             </div>
//                             <h3 className='invaild-feedback' type="invalid">{false}</h3>
//                         </div>
//                         <button className='d-flex justify-content-center'>Change Password</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ChangePin = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Change PIN</span>
//                     <span className="saku-h5">Enter your current 6 digits Zwallet PIN below to continue to the next steps.</span>
//                     <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
//                         <div className='d-flex gap-4 flex-column justify-content-between'>
//                             <div className="d-flex gap-2">
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-1' name="pin1" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-2' name="pin2" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-3' name="pin3" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-4' name="pin4" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-5' name="pin5" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-6' name="pin6" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                             <button className='d-flex justify-content-center w-fill'>Continue</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ConfirmChangePin = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Change PIN</span>
//                     <span className="saku-h5">Type your new 6 digits security PIN to use in Zwallet.</span>
//                     <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
//                         <div className='d-flex gap-4 flex-column justify-content-between'>
//                             <div className="d-flex gap-2">
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-1' name="pin1" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-2' name="pin2" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-3' name="pin3" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-4' name="pin4" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-5' name="pin5" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                                 <div className='control-pin'>
//                                     <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                         <Form.Control id='pin-6' name="pin6" maxLength="1" onKeyPress={false} onChange={false} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                     </Form.Group>
//                                 </div>
//                             </div>
//                             <button className='d-flex justify-content-center w-fill'>Change Pin</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const AddPhoneNumber = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Add Phone Number</span>
//                     <span className="saku-h5">Add at least one phone number for the transfer ID so you can start transfering your money to another user.</span>
//                     <div className="d-flex flex-column align-items-center justify-content-center h-fill gap-3">
//                         <div className="mb-3">
//                             <div className='d-flex align-items-center fw-input'>
//                                 <div className="d-flex gap-1">
//                                     <AiOutlinePhone className='c-dark fs-4' />
//                                     <span className="saku-h4">+62</span>
//                                 </div>
//                                 <Form.Control name="password" onChange={false} type="text" placeholder="Enter your phone number" isInvalid={true} className='bg-transparent border-0' />
//                             </div>
//                             <h3 className='invaild-feedback' type="invalid">{false}</h3>
//                         </div>
//                         <button className='d-flex justify-content-center'>Add Phone Number</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const ManagePhoneNumber = () => {
//     return(
//         <div className="saku-content-dashboard d-flex flex-column">
//             <div className="bc-secondary saku-card  d-flex flex-column">
//                 <div className="d-flex flex-column gap-4 saku-content-full">
//                     <span className="saku-h4">Manage Phone Number</span>
//                     <span className="saku-h5">You can only delete the phone number and then you must add another phone number.</span>
//                     <div className="d-flex flex-column gap-3">
//                         <div className="d-flex justify-content-between align-items-center bc-primary px-3 py-2 rounded">
//                             <div className="d-flex flex-column justify-content-center">
//                                 <span className="saku-h5 c-dark">Primary</span>
//                                 <span className="saku-h4">+62 813-9387-7946</span>
//                             </div>
//                             <AiOutlineDelete className='c-dark fs-4' />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// const Test = () => {
//     return(
//         <div className="d-flex flex-column vh-100">
//             <HeaderDashboard />
//             <div className="d-flex saku-body-dashboard bc-white gap-3">
//                 <NavbarDashboard />
//                 <div className="saku-body-content flex-fill">
                    
//                 </div>
//             </div>
//             <div className="saku-footer-dashboard bc-dark">
//                 <NavbarDashboard />
//             </div>
//         </div>
//     )
// }


// export default Test

// import React from 'react'
// import { Container } from 'react-bootstrap'
// import {Link, useParams} from 'react-router-dom'
// import { Form } from 'react-bootstrap'
// import { AiOutlineBell, AiOutlineAppstore, AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser, AiOutlineLogout, AiOutlineArrowDown, AiOutlineSearch, AiOutlineEdit, AiOutlineRight, AiOutlineLock, AiOutlineCheck} from "react-icons/ai";
// import user1 from '../assets/images/prof/4.png'
// import { Formik } from 'formik'

// import { useSelector, useDispatch } from 'react-redux'
// import { transfer } from "../redux/reducers/transfer";

// function Dashboard(nav) {
//     const {id} = useParams()
//     const [page, setPage] = React.useState({dashboard: 'flex'})

//     const dispatch = useDispatch();
//     const amount = useSelector((state) => state.transfer.amount);
//     const notes = useSelector((state) => state.transfer.notes);

//     const data = {
//         results:[
//             {
//                 id: 1,
//                 name: 'Ninda',
//                 phone_number: '0823212959',
//                 amount: 100000,
//                 transaction_type: 'Transfer'
//             },
//             {
//                 id: 2,
//                 name: 'Dita',
//                 phone_number: '0812624923',
//                 amount: 452000,
//                 transaction_type: 'Withdraw'
//             },
//             {
//                 id: 3,
//                 name: 'Danu',
//                 phone_number: '0854439982',
//                 amount: 60000,
//                 transaction_type: 'Topup'
//             },
//             {
//                 id: 4,
//                 name: 'Faris',
//                 phone_number: '0813440980',
//                 amount: 200000,
//                 transaction_type: 'Transfer'
//             },
//             {
//                 id: 5,
//                 name: 'Ran',
//                 phone_number: '0890290020',
//                 amount: 2000000,
//                 transaction_type: 'Topup'
//             },
//             {
//                 id: 6,
//                 name: 'Ran',
//                 phone_number: '0855990202',
//                 amount: 80000,
//                 transaction_type: 'Transfer'
//             },
//             {
//                 id: 3,
//                 name: 'Danu',
//                 phone_number: '0854439982',
//                 amount: 180500,
//                 transaction_type: 'Transfer'
//             },
//             {
//                 id: 1,
//                 name: 'Ninda',
//                 phone_number: '0823212959',
//                 amount: 820000,
//                 transaction_type: 'Withdraw'
//             }
//         ]
//     }

//     const dataLimit = data.results && data.results.slice(0, 5)

//     return (
//         <>
//             <Container fluid className='container-body d-flex flex-column vh-100 p-0'>
//                 <header className='header-dashboard'>
//                     <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
//                     <div className='d-flex align-items-center gap-5'>
//                         <div className='d-flex gap-4'>
//                             <img src={user1} alt='user' className='profile-picture'/>
//                             <div>
//                                 <h2 className='h2 m-0'>Robert Chandler</h2>
//                                 <h3 className='h3 m-0'>+62 8139 3877 7946</h3>
//                             </div>
//                         </div>
//                         <AiOutlineBell className='c-dark fs-3' />
//                     </div>
//                 </header>

//                 <section className='body-dashboard col-12 mp py-3 gap-3'>
//                     <div className='navbar-dashboard col-3'>
//                         <div className='fw-card d-flex flex-column align-items-start justify-content-between'>
//                             <div className='d-flex flex-column gap-5'>
//                                 <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
//                                     <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({dashboard: 'flex'})}>
//                                         <AiOutlineAppstore className='c-dark fs-4' />
//                                         <h3 className='navbar-text h3 m-0 c-dark'>Dashboard</h3>
//                                     </div>
//                                 </Link>
//                                 <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
//                                     <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({transfer: 'flex'})}>
//                                         <AiOutlineArrowUp className='c-dark fs-4' />
//                                         <h3 className='navbar-text h3 m-0 c-dark'>Transfer</h3>
//                                     </div>
//                                 </Link>
//                                 <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
//                                     <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({topup: 'flex'})}>
//                                         <AiOutlinePlus className='c-dark fs-4' />
//                                         <h3 className='navbar-text h3 m-0 c-dark'>Top Up</h3>
//                                     </div>
//                                 </Link>
//                                 <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
//                                 <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({profile: 'flex'})}>
//                                     <AiOutlineUser className='c-dark fs-4' />
//                                     <h3 className='navbar-text h3 m-0 c-dark'>Profile</h3>
//                                 </div>
//                                 </Link>
//                             </div>
//                             <Link className='text-decoration-none d-flex gap-3 align-items-center' onClick={()=> localStorage.removeItem("auth")} to='/'>
//                                 <AiOutlineLogout className='c-dark fs-4' />
//                                 <h3 className='navbar-text h3 m-0 c-dark'>Logout</h3>
//                             </Link>
//                         </div>
//                     </div>

//                     <div style={{display: page.dashboard?page.dashboard:'none'}} className='flex-column flex-fill'>
//                         <div className='dashboard d-flex flex-column flex-fill gap-3'>
//                             <div className='control-card'>
//                                 <div className='fw-card bc-dark flex-row justify-content-between py-3 gap-0'>
//                                     <div className='d-flex flex-column flex-fill'>
//                                         <h3 className='h3 m-0 c-primary'>Balance</h3>
//                                         <h1 className='h1 m-0 c-primary fs-1 lh-base'>Rp120.000</h1>
//                                         <h3 className='h3 m-0 c-primary'>+62 813-9387-7946</h3>
//                                     </div>
//                                     <div className='d-flex flex-column gap-2'>
//                                         <button className='d-flex gap-3 align-items-center bc-primary c-dark px-4'>
//                                             <AiOutlineArrowUp className='c-dark fs-4' />
//                                             <h2 className='h2 m-0 c-dark'>Transfer</h2>
//                                         </button>
//                                         <button className='d-flex gap-3 align-items-center bc-primary c-dark w-fill px-4'>
//                                             <AiOutlinePlus className='c-dark fs-4' />
//                                             <h2 className='h2 m-0 c-dark'>Top Up</h2>
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
            
//                             <div className='dashboard-content d-flex gap-3 flex-fill'>
//                                 <div className='dashboard-chart col-7'>
//                                     <div className='fw-card align-items-start justify-content-start gap-3'>
//                                         <div className='d-flex justify-content-between w-fill'>
//                                             <div>
//                                                 <AiOutlineArrowUp className='c-dark fs-4' />
//                                                 <h3 className='h3 m-0 c-dark'>Income</h3>
//                                                 <h2 className='h2 m-0 c-dark'>Rp2.120.000</h2>
//                                             </div>
//                                             <div>
//                                                 <AiOutlineArrowDown className='c-dark fs-4' />
//                                                 <h3 className='h3 m-0 c-dark'>Expense</h3>
//                                                 <h2 className='h2 m-0 c-dark'>Rp1.560.000</h2>
//                                             </div>
//                                         </div>
//                                         <div className='chart bc-primary flex-fill w-fill'>
//                                             Chart
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='flex-fill'>
//                                     <div className='fw-card align-items-start justify-content-start gap-3'>
//                                         <div className='d-flex align-items-center justify-content-between w-fill'>
//                                             <h2 className='h2 m-0 c-dark'>Transaction History</h2>
//                                             <h3 className='h3 m-0 c-dark' onClick={()=> setPage({transactions: 'flex'})}>See all</h3>
//                                         </div>
                                        
//                                         <div className='history-transaction w-fill d-flex flex-column flex-fill gap-3 oo'>
//                                             {
//                                                 dataLimit && dataLimit.map(user=>{
//                                                     return(
//                                                         <div className='d-flex align-items-center justify-content-between w-fill'>
//                                                             <div className='d-flex gap-2'>
//                                                                 <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
//                                                                 <div>
//                                                                     <h2 className='h2 m-0 c-dark overflow-visible'>{user.name}</h2>
//                                                                     <h3 className='h3 m-0 c-dark'>{user.transaction_type}</h3>
//                                                                 </div>
//                                                             </div>
//                                                             <h2 className='h2 m-0 c-dark'>{`Rp.${user.amount}`}</h2>
//                                                         </div>
//                                                     )
//                                                 })
//                                             }
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.transfer?page.transfer:'none'}} className='flex-column flex-fill'>
//                         <div className='transfer h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0 c-dark'>Search Receiver</h2>
//                                 <Form.Group className="d-flex align-items-center bc-primary w-fill px-3 py-1 rounded-3">
//                                     <AiOutlineSearch className='c-dark fs-4' />
//                                     <Form.Control name="receiver" type="receiver" placeholder="Search receiver here" isInvalid={false} className='bg-transparent border-0'/>
//                                 </Form.Group>
//                                 <div className='receiver d-flex flex-column w-fill gap-3'>
//                                     {
//                                         data.results && data.results.map(user=>{
//                                             return(
//                                                 <Link className='text-decoration-none' to={`/dashboard/transfer/${user.id}`} onClick={()=> setPage({makeTransaction: 'flex'})}>
//                                                     <div className='w-fill'>
//                                                         <div className='fw-card p-3 rounded-3 flex-row align-items-start justify-content-start bc-primary'>
//                                                             <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
//                                                             <div>
//                                                                 <h2 className='h2 m-0 c-dark'>{user.name}</h2>
//                                                                 <h3 className='h3 m-0 c-dark'>{user.phone_number}</h3>
//                                                             </div>
//                                                         </div>
//                                                     </div>
//                                                 </Link>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.topup?page.topup:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0 c-dark'>How To Top Up</h2>
//                                 <div className='topup d-flex flex-column h-fill w-fill gap-3'>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>1.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Go to the nearest ATM or you can use E-Banking.</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>2.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Type your security number on the ATM or E-Banking.</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>3.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Select “Transfer” in the menu</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>4.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Type the virtual account number that we provide you at the top.</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>5.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Type the amount of the money you want to top up.</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>6.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Read the summary details</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>7.</h2>
//                                             <h3 className='h3 m-0 c-dark'>Press transfer / top up</h3>
//                                         </div>
//                                     </div>
//                                     <div className='w-fill'>
//                                         <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
//                                             <h2 className='h2 m-0 c-dark'>8.</h2>
//                                             <h3 className='h3 m-0 c-dark'>You can see your money in Zwallet within 3 hours.</h3>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.profile?page.profile:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <div className='d-flex flex-column align-items-center justify-content-center h-fill w-fill gap-3'>
//                                     <img src={user1} alt='user' className='profile-picture'/>
//                                     <div className='d-flex align-items-center gap-1'>
//                                         <AiOutlineEdit className='c-dark fs-5' />
//                                         <h3 className='h3 m-0'>Edit</h3>
//                                     </div>
//                                     <h2 className='h2 m-0'>Robert Chandler</h2>
//                                     <h3 className='h3 m-0'>+62 813-9387-7946</h3>
//                                     <div className='profile-nav col-5' onClick={()=> setPage({personalInformation: 'flex'})}>
//                                         <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                             <h3 className='h3 m-0 fw-bolder'>Personal Information</h3>
//                                             <AiOutlineRight className='c-dark fs-5' />
//                                         </div>
//                                     </div>
//                                     <div className='profile-nav col-5' onClick={()=> setPage({changePassword: 'flex'})}>
//                                         <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                             <h3 className='h3 m-0 fw-bolder'>Change Password</h3>
//                                             <AiOutlineRight className='c-dark fs-5' />
//                                         </div>
//                                     </div>
//                                     <div className='profile-nav col-5' onClick={()=> setPage({changePin: 'flex'})}>
//                                         <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
//                                             <h3 className='h3 m-0 fw-bolder'>Change PIN</h3>
//                                             <AiOutlineRight className='c-dark fs-5' />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.transactions?page.transactions:'none'}} className='flex-column flex-fill'>
//                         <div className='flex-fill'>
//                             <div className='fw-card align-items-start justify-content-start gap-3'>
//                                 <div className='d-flex align-items-center justify-content-between w-fill'>
//                                     <h2 className='h2 m-0 c-dark'>Transaction History</h2>
//                                 </div>
//                                 <h3 className='h3 m-0 c-dark'>This Week</h3>
                                
//                                 <div className='transactions w-fill d-flex flex-column flex-fill gap-3'>
//                                     {
//                                         data.results && data.results.map(user=>{
//                                             return(
//                                                 <div className='d-flex align-items-center justify-content-between w-fill bc-primary rounded-2 p-1'>
//                                                     <div className='d-flex gap-2'>
//                                                         <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
//                                                         <div>
//                                                             <h2 className='h2 m-0 c-dark overflow-visible'>{user.name}</h2>
//                                                             <h3 className='h3 m-0 c-dark'>{user.transaction_type}</h3>
//                                                         </div>
//                                                     </div>
//                                                     <h2 className='h2 m-0 c-dark'>{`Rp.${user.amount}`}</h2>
//                                                 </div>
//                                             )
//                                         })
//                                     }
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                     <div style={{display: page.makeTransaction?page.makeTransaction:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0'>Transfer Money</h2>
//                                 <div className='d-flex w-fill gap-3 bc-primary p-3 rounded-2'>
//                                     <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
//                                     <div className='d-flex flex-column'>
//                                         <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
//                                         <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
//                                     </div>
//                                 </div>
//                                 <h3 className='h3 m-0'>Type the amount you want to transfer and then press continue to the next steps.</h3>

//                                 <Formik
//                                     initialValues={{amount: '', notes: ''}}>
//                                     {(props)=>
//                                         <div className='d-flex flex-column h-fill w-fill align-items-center justify-content-center gap-3'>
//                                             <Form.Group className="d-flex align-items-center">
//                                                 <Form.Control name="amount" onChange={props.handleChange} type="text" placeholder="0.00" isInvalid={false} className='h1 bg-transparent border-0 text-center'/>
//                                             </Form.Group>
//                                             <h2 className='h2 m-0'>Rp{data.results[id? (id-1):0].amount} Available</h2>
//                                             <Form.Group className="d-flex align-items-center fw-input">
//                                                 <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineEdit className='c-dark fs-5' /></Form.Label>
//                                                 <Form.Control name="notes" onChange={props.handleChange} type="text" placeholder="Add some notes" isInvalid={false} className='bg-transparent border-0'/>
//                                             </Form.Group>
//                                             <button className='d-flex justify-content-center' onClick={()=> {setPage({detailTransaction: 'flex'});  dispatch(transfer({amount: props.values.amount, notes: props.values.notes}))}}>Continue</button>
//                                         </div>
//                                     }
//                                 </Formik>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.detailTransaction?page.detailTransaction:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-end justify-content-start h-fill gap-2'>
//                                 <div className='w-fill'>
//                                     <h2 className='h2 m-0'>Transfer To</h2>
//                                 </div>
//                                 <div className='d-flex w-fill gap-3 bc-primary p-2 rounded-2'>
//                                     <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
//                                     <div className='d-flex flex-column'>
//                                         <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
//                                         <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
//                                     </div>
//                                 </div>
//                                 <div className='w-fill'>
//                                     <h2 className='h2 m-0'>Details</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Amount</h3>
//                                     <h2 className='h2 m-0'>Rp{amount}</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Balance Left</h3>
//                                     <h2 className='h2 m-0'>Rp20.000</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Date & Time</h3>
//                                     <h2 className='h2 m-0'>May 11, 2020 - 12.20</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Notes</h3>
//                                     <h2 className='h2 m-0'>{notes}</h2>
//                                 </div>
//                                 <button className='d-flex justify-content-center' onClick={()=> setPage({transferSuccess: 'flex'})}>Continue</button>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.personalInformation?page.personalInformation:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0'>Personal Information</h2>
//                                 <h3 className='h3 m-0'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</h3>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Amount</h3>
//                                     <h2 className='h2 m-0'>Robert</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Last Name</h3>
//                                     <h2 className='h2 m-0'>Chandler</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Verified E-mail</h3>
//                                     <h2 className='h2 m-0'>pewdiepie1@gmail.com</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Phone Number</h3>
//                                     <h2 className='h2 m-0'>+62 813-9387-7946</h2>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.changePassword?page.changePassword:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0'>Change Password</h2>
//                                 <h3 className='h3 m-0'>You must enter your current password and then type your new password twice.</h3>
//                                 <div className='d-flex w-fill h-fill justify-content-center align-items-center'>
//                                     <div className='d-flex flex-column h-fill gap-5 justify-content-center input-standart'>
//                                         <Form.Group className="d-flex align-items-center fw-input">
//                                             <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
//                                             <Form.Control name="password" type="password" placeholder="Current password" isInvalid={false} className='bg-transparent border-0'/>
//                                         </Form.Group>
//                                         <Form.Group className="d-flex align-items-center fw-input">
//                                             <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
//                                             <Form.Control name="password" type="password" placeholder="New password" isInvalid={false} className='bg-transparent border-0'/>
//                                         </Form.Group>
//                                         <Form.Group className="d-flex align-items-center fw-input">
//                                             <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
//                                             <Form.Control name="password" type="password" placeholder="Repeat new password" isInvalid={false} className='bg-transparent border-0'/>
//                                         </Form.Group>
//                                         <button className='d-flex justify-content-center w-fill'>Continue</button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.changePin?page.changePin:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
//                                 <h2 className='h2 m-0'>Change PIN</h2>
//                                 <h3 className='h3 m-0'>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</h3>
//                                 <div className='d-flex w-fill h-fill flex-column justify-content-center align-items-center gap-4'>
//                                     <div className='d-flex gap-2 justify-content-between'>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                         <div className='control-pin bc-white'>
//                                             <Form.Group className="form-pin d-flex align-items-center fw-input">
//                                                 <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
//                                             </Form.Group>
//                                         </div>
//                                     </div>
//                                     <button className='d-flex justify-content-center'>Continue</button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div style={{display: page.transferSuccess?page.transferSuccess:'none'}} className='flex-column flex-fill'>
//                         <div className='h-fill'>
//                             <div className='fw-card flex-column justify-content-start h-fill gap-3'>
//                                 <div className='bc-dark p-3 rounded-5'>
//                                     <AiOutlineCheck className='c-primary fs-2' />
//                                 </div>
//                                 <h2 className='h2 m-0'>Transfer Success</h2>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Amount</h3>
//                                     <h2 className='h2 m-0'>Rp{amount}</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Balance Left</h3>
//                                     <h2 className='h2 m-0'>Rp20.000</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Date & Time</h3>
//                                     <h2 className='h2 m-0'>May 11, 2020 - 12.20</h2>
//                                 </div>
//                                 <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
//                                     <h3 className='h3 m-0'>Notes</h3>
//                                     <h2 className='h2 m-0'>{notes}</h2>
//                                 </div>
//                                 <div className='w-fill'>
//                                     <h2 className='h2 m-0'>Transfer to</h2>
//                                 </div>
//                                 <div className='d-flex w-fill gap-3 bc-primary p-2 rounded-2'>
//                                     <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
//                                     <div className='d-flex flex-column'>
//                                         <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
//                                         <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
//                                     </div>
//                                 </div>
//                                 <button className='d-flex justify-content-center'>Continue</button>
//                             </div>
//                         </div>
//                     </div>
//                 </section>

//                 <footer className='footer-dashboard col-12 d-flex justify-content-between py-3'>
//                     <h3 className='h3 m-0 c-white'>2020 sakuin. All right reserved.</h3>
//                     <div className='d-flex gap-3'>
//                         <h3 className='h3 m-0 c-white'>+62 5637 8882 9901</h3>
//                         <h3 className='h3 m-0 c-white'>contact@sakuin.com</h3>
//                     </div>
//                 </footer>
//             </Container>
//         </>
//     )
// }


// import React from 'react'
// import {Link} from 'react-router-dom'
// import { Container, Form } from 'react-bootstrap'
// import phone from '../assets/images/png-phone6.png'
// import { Formik } from 'formik'
// import * as Yup from 'yup'
// import { useNavigate } from "react-router-dom";
// import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

// const loginSchema = Yup.object().shape({
//     email: Yup.string().email('Invalid email address format').required('Required'),
//     password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
// })

// const validationEmailSchema = Yup.object().shape({
//     emailForgot: Yup.string().email('Invalid email address format').required('Required')
// })

// const forgotPasswordSchema = Yup.object().shape({
//     newPassword: Yup.string().min(8, 'New Password must be at least 8 characters').required('Required'),
//     confirmPassword: Yup.string().min(8, 'Confirm Password must be at least 8 characters').required('Required')
// })

// function Login() {
//     const [page, setPage] = React.useState({login: 'flex'})
//     const navigate = useNavigate()

//     const onLoginRequest = (val) => {
//         if(val.email === 'bima@gmail.com' && val.password === '12341234'){
//             localStorage.setItem("auth", "loginToken");
//             navigate("/dashboard")
//         }else{
//             window.alert('Login Failed')
//         }
//     }
    
//     return(
//         <>
//             <Container fluid className='account vh-100 p-0 d-flex'>
//                 <section className='intro bg-primary position-relative vh-100 col-7'>
//                     <div className='content position-absolute w-100 h-100 mp d-flex flex-column justify-content-between bc-dark'>
//                         <Link className='text-decoration-none' to='/'><span className='logo c-primary'>sakuin</span></Link>
//                         <img src={phone} alt='phone' className='img-fluid col-8'></img>
//                         <h2 className='title h2 c-primary'>App that Covering Banking Needs.</h2>
//                         <h3 className='doc h3 c-primary'>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h3>
//                     </div>
//                 </section>
    
//                 <section className='form-account d-flex flex-column justify-content-between bc-primary mp'>
//                     <div style={{display: page.login?page.login:'none'}}>
//                         <Formik
//                             initialValues={{email: '', password: ''}}
//                             validationSchema={loginSchema}>
//                             {(props)=>
//                                 <div className='d-flex flex-column gap-3'>
//                                     <h2 className='h2 c-black col-8'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
//                                     <h3 className='h3 c-dark'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h3>
//                                     <div className="mb-3">
//                                         <div className='d-flex align-items-center fw-input'>
//                                             <AiOutlineMail className='c-dark fs-4' />
//                                             <Form.Control name="email" onChange={props.handleChange} type="email" placeholder="Enter your e-mail" isInvalid={props.errors.email? true:false} className='bg-transparent border-0' />
//                                         </div>
//                                         <h3 className='invaild-feedback' type="invalid">{props.errors.email}</h3>
//                                     </div>
//                                     <div className="mb-3">
//                                         <div className='d-flex align-items-center fw-input'>
//                                             <AiOutlineLock className='c-dark fs-4' />
//                                             <Form.Control name="password" onChange={props.handleChange} type="password" placeholder="Enter your password" isInvalid={props.errors.password? true:false} className='bg-transparent border-0' />
//                                         </div>
//                                         <h3 className='invaild-feedback' type="invalid">{props.errors.password}</h3>
//                                     </div>
//                                     <h3 className='d-flex justify-content-end h3 c-dark' onClick={()=> setPage({forgotPassword: 'flex'})}>Forgot password?</h3>
//                                     <button className='d-flex justify-content-center col-12' type='button' onClick={() => !(props.values.email && props.values.password)? false:Object.keys(props.errors).length? false:onLoginRequest(props.values)}>Login</button>
//                                     <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s<Link className='text-decoration-none mx-1' to='/register'>Sign Up</Link></h3>
//                                 </div>
//                             }
//                         </Formik>
//                     </div>

//                     <div style={{display: page.forgotPassword?page.forgotPassword:'none'}}>
//                         <Formik
//                             initialValues={{emailForgot: ''}}
//                             validationSchema={validationEmailSchema}>
//                             {(props)=>
//                                 <div className='d-flex flex-column gap-5'>
//                                     <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
//                                     <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
//                                     <div className="mb-3">
//                                         <div className='d-flex align-items-center fw-input'>
//                                             <AiOutlineMail className='c-dark fs-4' />
//                                             <Form.Control name="emailForgot" onChange={props.handleChange} type="email" placeholder="Enter your e-mail" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
//                                         </div>
//                                         <h3 className='invaild-feedback' type="invalid">{props.errors.emailForgot}</h3>
//                                     </div>
//                                     <button className='d-flex justify-content-center col-12' onClick={() => !props.values.emailForgot? false:Object.keys(props.errors).length? false:setPage({resetPassword: 'flex'})}>Confirm</button>
//                                 </div>
//                             }
//                         </Formik>
//                     </div>

//                     <div style={{display: page.resetPassword?page.resetPassword:'none'}} className='flex-column gap-5'>
//                         <Formik
//                             initialValues={{newPassword: '', confirmPassword: ''}}
//                             validationSchema={forgotPasswordSchema}>
//                             {(props)=>
//                                 <div className='d-flex flex-column gap-5'>
//                                     <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
//                                     <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
//                                     <div className="mb-3">
//                                         <div className='d-flex align-items-center fw-input'>
//                                             <AiOutlineLock className='c-dark fs-4' />
//                                             <Form.Control name="newPassword" onChange={props.handleChange} type="password" placeholder="New password" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
//                                         </div>
//                                         <h3 className='invaild-feedback' type="invalid">{props.errors.newPassword}</h3>
//                                     </div>
//                                     <div className="mb-3">
//                                         <div className='d-flex align-items-center fw-input'>
//                                             <AiOutlineLock className='c-dark fs-4' />
//                                             <Form.Control name="confirmPassword" onChange={props.handleChange} type="password" placeholder="Confirm password" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
//                                         </div>
//                                         <h3 className='invaild-feedback' type="invalid">{props.errors.confirmPassword}</h3>
//                                     </div>
//                                     <button className='d-flex justify-content-center col-12' onClick={() => !(props.values.newPassword && props.values.confirmPassword)? false:Object.keys(props.errors).length? false:setPage({login: 'flex'})}>Confirm</button>
//                                 </div>
//                             }
//                         </Formik>
//                     </div>
//                 </section>
//             </Container>
//         </>
//     )
// }

// export default Login