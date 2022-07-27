
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import mail from '../assets/icons/mail.svg'
import lock from '../assets/icons/lock.svg'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";


function LoginSection(section){
    return (
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
                    {section}
                </section>
            </Container>
        </>
    )
}

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8).required('Required')
})

const AuthForm = ({errors, handleSubmit, handleChange})=> {
    const location = useLocation()
    return(
      <>
        {location.state?.errorMsg && (
            <div class="alert alert-warning text-center">
                {location.state.errorMsg}
            </div>
        )}
        <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-3'>
            <h2 className='h2 c-black col-8'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
            <h3 className='h3 c-dark'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h3>
            <Form.Group className="mb-3">
                <div className='d-flex align-items-center fw-input'>
                    <AiOutlineMail className='c-dark fs-4' />
                    <Form.Control name="email" onChange={handleChange} type="email" placeholder="Enter your e-mail" isInvalid={!!errors.email} className='bg-transparent border-0' />
                </div>
                <h3 className='invaild-feedback' type="invalid">{errors.email}</h3>
            </Form.Group>
            <Form.Group className="mb-3">
                <div className='d-flex align-items-center fw-input'>
                    <AiOutlineLock className='c-dark fs-4' />
                    <Form.Control name="password" onChange={handleChange} type="password" placeholder="Enter your password" isInvalid={!!errors.password} className='bg-transparent border-0' />
                </div>
                <h3 className='invaild-feedback' type="invalid">{errors.password}</h3>
            </Form.Group>
            
            <h3 className='d-flex justify-content-end h3 c-dark'>Forgot password?</h3>
            <button className='d-flex justify-content-center col-12' type="submit">Login</button>
            <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s<Link className='text-decoration-none mx-1' to='/register'>Sign Up</Link></h3>
        </Form>
      </>
    )
}

function Login() {
    const [page, setPage] = React.useState('login')
    const navigate = useNavigate()

    const onLoginRequest = (val) => {
        if(val.email === 'bima@gmail.com' && val.password === '12341234'){
            localStorage.setItem("auth", "loginToken");
            navigate("/dashboard")
        }else{
            window.alert('Login Failed')
        }
    }
    
    if(page === 'login'){
        return(
            LoginSection(
                <Formik
                    onSubmit={onLoginRequest}
                    initialValues={{email: '', password: ''}}
                    validationSchema={loginSchema}>
                    {(props)=><AuthForm {...props} />}
                </Formik>
            )
        )
    }else if(page === 'forgotPassword'){
        return(
            LoginSection(
                <>
                    <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                    <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
                    <Form.Group className="d-flex align-items-center fw-input">
                        <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={mail}/></Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter your e-mail" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
                    <button className='d-flex justify-content-center col-12' onClick={()=> setPage('forgotPasswordConfirm')}>Confirm</button>
                </>
            )
        )
    }else if(page === 'forgotPasswordConfirm'){
        return(
            LoginSection(
                <>
                    <h2 className='h2 c-black col-8'>Did You Forgot Your Password? Don’t Worry, You Can Reset Your Password In a Minutes.</h2>
                    <h3 className='h3 c-dark'>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.</h3>
                    <Form.Group className="d-flex align-items-center fw-input">
                        <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={lock}/></Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter your password" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
                    <Form.Group className="d-flex align-items-center fw-input">
                        <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={lock}/></Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter your password" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
                    <button className='d-flex justify-content-center col-12' onClick={()=> setPage('login')}>Reset Password</button>
                </>
            )
        )
    }
}

export default Login