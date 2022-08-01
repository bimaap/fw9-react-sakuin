
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineMail, AiOutlineLock, AiOutlineUser } from "react-icons/ai";
import { register } from "../redux/asyncActions/auth";
import { useDispatch, useSelector } from "react-redux";

const registerSchema = Yup.object().shape({
    username: Yup.string().min(4, 'Username must be at least 4 characters').required('Required'),
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
})

function Register() {
    const error = useSelector((state) => state.auth.errorMsg);
    const username = useSelector((state) => state.auth.username);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegisterRequest = (value) => {
        const data = { username: value.username, email: value.email, password: value.password };
        dispatch(register(data));
    };

    React.useEffect(() => {
        if (username) {
          navigate("/register/pin");
        }
    }, [navigate, username]);

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
                <Formik
                    initialValues={{username: '', email: '', password: ''}}
                    validationSchema={registerSchema}>
                    {(props)=>
                        <div className='d-flex flex-column justify-content-between h-fill gap-2'>
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
                            <h3 className='invaild-feedback' type="invalid">{error? error:false}</h3>
                            <button className='d-flex justify-content-center col-12' onClick={() => !(props.values.username && props.values.email && props.values.password)? false:Object.keys(props.errors).length? false:onRegisterRequest(props.values)}>Confirm</button>
                        </div>
                    }
                </Formik>
            </section>
        </Container>
    )
}

export default Register