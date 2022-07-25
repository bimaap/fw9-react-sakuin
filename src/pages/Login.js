
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import mail from '../assets/icons/mail.svg'
import lock from '../assets/icons/lock.svg'

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

function Login() {
    const [page, setPage] = React.useState('login')

    if(page === 'login'){
        return(
            LoginSection(
                <>
                    <h2 className='h2 c-black col-8'>Start Accessing Banking Needs With All Devices and All Platforms With 30.000+ Users</h2>
                    <h3 className='h3 c-dark'>Transfering money is eassier than ever, you can access Zwallet wherever you are. Desktop, laptop, mobile phone? we cover all of that for you!</h3>
                    <Form.Group className="d-flex align-items-center fw-input">
                        <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={mail}/></Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter your e-mail" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
                    <Form.Group className="d-flex align-items-center fw-input">
                        <Form.Label className='d-flex justify-content-center m-0 col-1'><embed src={lock}/></Form.Label>
                        <Form.Control name="password" type="password" placeholder="Enter your password" isInvalid={false} className='bg-transparent border-0'/>
                    </Form.Group>
                    <h3 className='d-flex justify-content-end h3 c-dark' onClick={()=> setPage('forgotPassword')}>Forgot password?</h3>
                    <Link className='text-decoration-none' to='/dashboard'><button className='d-flex justify-content-center col-12'>Login</button></Link>
                    <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s<Link className='text-decoration-none mx-1' to='/register'>Sign Up</Link></h3>
                </>
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