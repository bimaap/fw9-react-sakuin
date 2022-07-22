
import React from 'react'
import {Link} from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import mail from '../assets/icons/mail.svg'
import lock from '../assets/icons/lock.svg'

// react-icons, yarn add react-icons
// formik, yup, react-helmet

function Login() {
  return (
    <>
      <Container fluid className='vh-100 p-0 d-flex '>
        <section as='intro' className='bg-primary position-relative vh-100 col-7'>
          <div className='position-absolute w-100 h-100 mp d-flex flex-column justify-content-between bc-dark'>
            <Link className='text-decoration-none' to='/'><span className='logo c-primary'>sakuin</span></Link>
            <img src={phone} alt='phone' className='img-fluid col-8'></img>
            <h2 className='h2 c-primary'>App that Covering Banking Needs.</h2>
            <h3 className='h3 c-primary'>Zwallet is an application that focussing in banking needs for all users in the world. Always updated and always following world trends. 5000+ users registered in Zwallet everyday with worldwide users coverage.</h3>
          </div>
        </section>
        <section as='form-login' className='d-flex flex-column justify-content-between col-5 bc-primary mp'>
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
          <h3 className='d-flex justify-content-end h3 c-dark'>Forgot password?</h3>
          <button className='d-flex justify-content-center col-12'>Login</button>
          <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s Sign Up</h3>
        </section>
      </Container>
    </>
  )
}

export default Login