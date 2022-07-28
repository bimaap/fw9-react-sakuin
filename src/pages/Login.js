
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
})

const validationEmailSchema = Yup.object().shape({
    emailForgot: Yup.string().email('Invalid email address format').required('Required')
})

const forgotPasswordSchema = Yup.object().shape({
    newPassword: Yup.string().min(8, 'New Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string().min(8, 'Confirm Password must be at least 8 characters').required('Required')
})

function Login() {
    const [page, setPage] = React.useState({login: 'flex'})
    const navigate = useNavigate()

    const onLoginRequest = (val) => {
        if(val.email === 'bima@gmail.com' && val.password === '12341234'){
            localStorage.setItem("auth", "loginToken");
            navigate("/dashboard")
        }else{
            window.alert('Login Failed')
        }
    }
    
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
                    <div style={{display: page.login?page.login:'none'}}>
                        <Formik
                            initialValues={{email: '', password: ''}}
                            validationSchema={loginSchema}>
                            {(props)=>
                                <div className='d-flex flex-column gap-3'>
                                    <h2 className='h2 c-black col-8'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
                                    <h3 className='h3 c-dark'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h3>
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
                                            <Form.Control name="password" onChange={props.handleChange} type="password" placeholder="Enter your password" isInvalid={props.errors.password? true:false} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{props.errors.password}</h3>
                                    </div>
                                    <h3 className='d-flex justify-content-end h3 c-dark' onClick={()=> setPage({forgotPassword: 'flex'})}>Forgot password?</h3>
                                    <button className='d-flex justify-content-center col-12' type='button' onClick={() => !(props.values.email && props.values.password)? false:Object.keys(props.errors).length? false:onLoginRequest(props.values)}>Login</button>
                                    <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s<Link className='text-decoration-none mx-1' to='/register'>Sign Up</Link></h3>
                                </div>
                            }
                        </Formik>
                    </div>

                    <div style={{display: page.forgotPassword?page.forgotPassword:'none'}}>
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
                                    <button className='d-flex justify-content-center col-12' onClick={() => !props.values.emailForgot? false:Object.keys(props.errors).length? false:setPage({resetPassword: 'flex'})}>Confirm</button>
                                </div>
                            }
                        </Formik>
                    </div>

                    <div style={{display: page.resetPassword?page.resetPassword:'none'}} className='flex-column gap-5'>
                        <Formik
                            initialValues={{newPassword: '', confirmPassword: ''}}
                            validationSchema={forgotPasswordSchema}>
                            {(props)=>
                                <div className='d-flex flex-column gap-5'>
                                    <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                                    <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <AiOutlineLock className='c-dark fs-4' />
                                            <Form.Control name="newPassword" onChange={props.handleChange} type="password" placeholder="New password" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{props.errors.newPassword}</h3>
                                    </div>
                                    <div className="mb-3">
                                        <div className='d-flex align-items-center fw-input'>
                                            <AiOutlineLock className='c-dark fs-4' />
                                            <Form.Control name="confirmPassword" onChange={props.handleChange} type="password" placeholder="Confirm password" isInvalid={props.errors.emailForgot? true:false} className='bg-transparent border-0' />
                                        </div>
                                        <h3 className='invaild-feedback' type="invalid">{props.errors.confirmPassword}</h3>
                                    </div>
                                    <button className='d-flex justify-content-center col-12' onClick={() => !(props.values.newPassword && props.values.confirmPassword)? false:Object.keys(props.errors).length? false:setPage({login: 'flex'})}>Confirm</button>
                                </div>
                            }
                        </Formik>
                    </div>
                </section>
            </Container>
        </>
    )
}

export default Login