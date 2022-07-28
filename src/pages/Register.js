
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser, AiOutlineCheck } from "react-icons/ai";

const registerSchema = Yup.object().shape({
    username: Yup.string().min(4, 'Username must be at least 4 characters').required('Required'),
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
})

const pinSchema = Yup.object().shape({
    pin1: Yup.string().required('Required'),
    pin2: Yup.string().required('Required'),
    pin3: Yup.string().required('Required'),
    pin4: Yup.string().required('Required'),
    pin5: Yup.string().required('Required'),
    pin6: Yup.string().required('Required'),
})

function Register() {
    const [page, setPage] = React.useState({register: 'flex'})

    return(
        <Container fluid className='account vh-100 p-0 d-flex '>
            <section className='intro bg-primary position-relative vh-100 col-7'>
                <div className='content position-absolute w-100 h-100 mp d-flex flex-column justify-content-between bc-dark'>
                    <Link className='text-decoration-none' to='/'><span className='logo c-primary'>sakuin</span></Link>
                    <img src={phone} alt='phone' className='img-fluid col-8'></img>
                    <h2 className='title h2 c-primary'>App that Covering Banking Needs.</h2>
                    <h3 className='doc h3 c-primary'>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h3>
                </div>
            </section>

            <section className='form-account d-flex flex-column justify-content-between bc-primary mp'>
                <div style={{display: page.register?page.register:'none'}}>
                    <Formik
                        initialValues={{username: '', email: '', password: ''}}
                        validationSchema={registerSchema}>
                        {(props)=>
                            <div className='d-flex flex-column gap-5'>
                                <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                                <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
                                <div className="mb-3">
                                    <div className='d-flex align-items-center fw-input'>
                                        <AiOutlineUser className='c-dark fs-4' />
                                        <Form.Control name="username" onChange={props.handleChange} type="text" placeholder="Enter your username" isInvalid={props.errors.username? true:false} className='bg-transparent border-0' />
                                    </div>
                                    <h3 className='invaild-feedback' type="invalid">{props.errors.username}</h3>
                                </div>
                                <div className="mb-3">
                                    <div className='d-flex align-items-center fw-input'>
                                        <AiOutlineMail className='c-dark fs-4' />
                                        <Form.Control name="email" onChange={props.handleChange} type="email" placeholder="Enter your e-mail" isInvalid={props.errors.email? true:false} className='bg-transparent border-0' />
                                    </div>
                                    <h3 className='invaild-feedback' type="invalid">{props.errors.email}</h3>
                                </div>
                                <div className="mb-3">
                                    <div className='d-flex align-items-center fw-input'>
                                        <AiOutlineLock className='c-dark fs-4' />
                                        <Form.Control name="password" onChange={props.handleChange} type="password" placeholder="Create your password" isInvalid={props.errors.password? true:false} className='bg-transparent border-0' />
                                    </div>
                                    <h3 className='invaild-feedback' type="invalid">{props.errors.password}</h3>
                                </div>
                                <button className='d-flex justify-content-center col-12' onClick={() => !(props.values.username && props.values.email && props.values.password)? false:Object.keys(props.errors).length? false:setPage({setPin: 'flex'})}>Confirm</button>
                            </div>
                        }
                    </Formik>
                </div>

                <div style={{display: page.setPin?page.setPin:'none'}}>
                    <Formik
                        initialValues={{pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: ''}}
                        validationSchema={pinSchema}>
                        {(props)=>
                            <div className='d-flex flex-column gap-5'>
                                <h2 className='h2 c-black col-8'>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
                                <h3 className='h3 c-dark'>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</h3>
                                <div className='d-flex gap-2 justify-content-between'>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin1" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin2" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin3" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin4" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin5" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                    <div className='control-pin'>
                                        <Form.Group className="form-pin d-flex align-items-center fw-input">
                                            <Form.Control name="pin6" onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                        </Form.Group>
                                    </div>
                                </div>
                                <h3 className='invaild-feedback' type="invalid">{Object.keys(props.errors).length? 'Pin cannot be empty':null}</h3>
                                <button className='d-flex justify-content-center col-12' onClick={()=> !Object.keys(props.errors).length && setPage({pinSuccess: 'flex'})}>Confirm</button>
                            </div>
                        }
                    </Formik>
                </div>

                <div style={{display: page.pinSuccess?page.pinSuccess:'none'}}>
                    <div className='d-flex flex-column gap-5'>
                        <div className='icon bc-dark'>
                        <AiOutlineCheck className='c-primary' />
                        </div>
                        <h2 className='h2 c-black col-8'>Your PIN Was Successfully Created</h2>
                        <h3 className='h3 c-dark'>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</h3>

                        <Link className='text-decoration-none' to='/dashboard'><button className='d-flex justify-content-center col-12'>Login Now</button></Link>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Register