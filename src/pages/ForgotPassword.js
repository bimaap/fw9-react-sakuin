
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineMail } from "react-icons/ai";


const validationEmailSchema = Yup.object().shape({
    emailForgot: Yup.string().email('Invalid email address format').required('Required')
})

function ForgotPassword() {
    return(
        <>
            <Container fluid className='account vh-100 p-0 d-flex'>
                <section className='intro bg-primary position-relative vh-100 col-7'>
                    <div className='content position-absolute w-100 h-100 mp d-flex flex-column justify-content-between bc-dark'>
                        <Link className='text-decoration-none' to='/'><span className='logo c-primary'>sakuin</span></Link>
                        <img src={phone} alt='phone' className='img-fluid col-8'></img>
                        <h2 className='title h2 c-primary'>App that Covering Banking Needs.</h2>
                        <h3 className='doc h3 c-primary'>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h3>
                    </div>
                </section>
    
                <section className='form-account d-flex flex-column justify-content-between bc-primary mp'>
                    <Formik
                        initialValues={{emailForgot: ''}}
                        validationSchema={validationEmailSchema}>
                        {(props)=>
                            <div className='d-flex flex-column gap-5'>
                                <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                                <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
                                <div className="mb-3">
                                    <div className='d-flex align-items-center fw-input'>
                                        <AiOutlineMail className='c-dark fs-4' />
                                        <Form.Control name="emailForgot" onChange={props.handleChange} type="email" placeholder="Enter your e-mail" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
                                    </div>
                                    <h3 className='invaild-feedback' type="invalid">{props.errors.emailForgot}</h3>
                                </div>
                                <button className='d-flex justify-content-center col-12' onClick={() => !props.values.emailForgot? false:Object.keys(props.errors).length? false:TrustedScriptURL}>Confirm</button>
                            </div>
                        }
                    </Formik>
                </section>
            </Container>
        </>
    )
}

export default ForgotPassword