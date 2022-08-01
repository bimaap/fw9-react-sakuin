
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { login } from "../redux/asyncActions/auth";
import { useDispatch, useSelector } from "react-redux";

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address format').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
})

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const error = useSelector((state) => state.auth.errorMsg)
    const token = useSelector((state) => state.auth.token)

    const onLoginRequest = (value) => {
        const data = { email: value.email, password: value.password };
        dispatch(login(data));
    };

    React.useEffect(() => {
        if (token) {
          navigate("/dashboard");
        }
    }, [navigate, token]);
    
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

                                <h3 className='invaild-feedback' type="invalid">{error? error:false}</h3>

                                <h3 className='d-flex justify-content-end h3 c-dark'>Forgot password?</h3>
                                <button className='d-flex justify-content-center col-12' type='button' onClick={() => !(props.values.email && props.values.password)? false:Object.keys(props.errors).length? false:onLoginRequest(props.values)}>Login</button>
                                <h3 className='d-flex justify-content-center h3 c-dark'>Don’t have an account? Let’s<Link className='text-decoration-none mx-1' to='/register'>Sign Up</Link></h3>
                            </div>
                        }
                    </Formik>
                </section>
            </Container>
        </>
    )
}

export default Login