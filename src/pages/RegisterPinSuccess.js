
import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { AiOutlineCheck } from "react-icons/ai";

function RegisterPin() {
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
            <div className='d-flex flex-column gap-5'>
                <div className='icon bc-dark'>
                <AiOutlineCheck className='c-primary' />
                </div>
                <h2 className='h2 c-black col-8'>Your PIN Was Successfully Created</h2>
                <h3 className='h3 c-dark'>Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</h3>
                <Link className='text-decoration-none' to='/login'><button className='d-flex justify-content-center col-12'>Login Now</button></Link>
            </div>
            </section>
        </Container>
    )
}

export default RegisterPin