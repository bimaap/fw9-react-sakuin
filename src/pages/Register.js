
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import mail from '../assets/icons/mail.svg'
import lock from '../assets/icons/lock.svg'
import user from '../assets/icons/user.svg'
import {HiOutlineCheck} from "react-icons/hi";

function RegisterSection(section){
    return (
        <>
            <Container fluid className='account vh-100 p-0 d-flex '>
                <section className='intro bg-primary position-relative vh-100 col-7'>
                    <div className='content position-absolute w-100 h-100 mp d-flex flex-column justify-content-between bc-dark'>
                        <Link className='text-decoration-none' to='/'><span className='logo c-primary'>sakuin</span></Link>
                        <img src={phone} alt='phone' className='img-fluid col-8'></img>
                        <h2 className='title h2 c-primary'>App that Covering Banking Needs.</h2>
                        <h3 className='doc h3 c-primary'>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h3>
                    </div>
                </section>

                {section}
            </Container>
        </>
    )
}

function Register() {
    const [page, setPage] = React.useState('register')

    if(page === 'register'){
        return(
            RegisterSection(
                <>
                    <section id='register' className='form-account d-flex flex-column justify-content-between col-5 bc-primary mp'>
                        <h2 className='h2 c-black col-8'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
                        <h3 className='h3 c-dark'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h3>
                        <Form.Group className="d-flex align-items-center fw-input">
                            <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={user}/></Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter your username" isInvalid={false} className='bg-transparent border-0'/>
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center fw-input">
                            <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={mail}/></Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter your e-mail" isInvalid={false} className='bg-transparent border-0'/>
                        </Form.Group>
                        <Form.Group className="d-flex align-items-center fw-input">
                            <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={lock}/></Form.Label>
                            <Form.Control name="password" type="password" placeholder="Enter your password" isInvalid={false} className='bg-transparent border-0'/>
                        </Form.Group>
                        <button className='d-flex justify-content-center col-12' onClick={()=> setPage('setPin')}>Sign Up</button>
                        <h3 className='d-flex justify-content-center h3 c-dark'>Already have an account? Let’s <Link className='text-decoration-none mx-1' to='/login'>Login</Link></h3>
                    </section>
                </>
            )
        )
    }else if(page === 'setPin'){
        return(
            RegisterSection(
                <>
                    <section id='pin-register' className='form-account d-flex flex-column justify-content-between col-5 bc-primary mp'>
                        <h2 className='h2 c-black col-8'>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
                        <h3 className='h3 c-dark'>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</h3>
                        <div className='d-flex gap-2 justify-content-between'>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                            <div className='control-pin'>
                                <Form.Group className="form-pin d-flex align-items-center fw-input">
                                    <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                </Form.Group>
                            </div>
                        </div>
                        <button className='d-flex justify-content-center col-12' onClick={()=> setPage('setPinSuccess')}>Confirm</button>
                    </section>
                </>
            )
        )
    }else if(page === 'setPinSuccess'){
        return(
            RegisterSection(
                <>
                    <section id='pin-success' className='form-account d-flex flex-column justify-content-center gap-4 col-5 bc-primary mp'>
                        <div className='icon bc-dark'>
                            <HiOutlineCheck className='c-primary' />
                        </div>
                        <h2 className='h2 c-black col-8'>Your PIN Was Successfully Created</h2>
                        <h3 className='h3 c-dark'>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</h3>

                        <Link className='text-decoration-none' to='/dashboard'><button className='d-flex justify-content-center col-12'>Login Now</button></Link>
                    </section>
                </>
            )
        )
    }
}

export default Register