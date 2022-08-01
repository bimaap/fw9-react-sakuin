
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container, Form } from 'react-bootstrap'
import phone from '../assets/images/png-phone6.png'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { registerPin } from "../redux/asyncActions/auth";

// const registerSchema = Yup.object().shape({
//     username: Yup.string().min(4, 'Username must be at least 4 characters').required('Required'),
//     email: Yup.string().email('Invalid email address format').required('Required'),
//     password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required')
// })

const pinSchema = Yup.object().shape({
    pin1: Yup.string().required('Required'),
    pin2: Yup.string().required('Required'),
    pin3: Yup.string().required('Required'),
    pin4: Yup.string().required('Required'),
    pin5: Yup.string().required('Required'),
    pin6: Yup.string().required('Required'),
})

const checkNumber = (event) => {
    (/[0-9]/.test(event.key))? 
        setTimeout(() => {
            let id = Number(event.target.id.split('-')[1])
            document.getElementById(`pin-${id === 6? 6:id+1}`).focus();
            document.getElementById(`pin-${id === 6? 6:id+1}`).value = id === 6? event.key:'';
        }, 100):event.preventDefault()
}

function RegisterPin() {
    const username = useSelector((state) => state.auth.username);
    const success = useSelector((state) => state.auth.successMsg);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onRegisterPin = (value) => {
        const data = { username: username, pin: value };
        dispatch(registerPin(data));
    };

    React.useEffect(() => {
        if (success) {
          navigate("/register/success");
        }
    }, [navigate, success]);

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
                    initialValues={{pin1: '', pin2: '', pin3: '', pin4: '', pin5: '', pin6: ''}}
                    validationSchema={pinSchema}>
                    {(props)=>
                        <div className='d-flex flex-column gap-5'>
                            <h2 className='h2 c-black col-8'>Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.</h2>
                            <h3 className='h3 c-dark'>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell anyone about your Zwallet account password and the PIN.</h3>
                            <div className='d-flex gap-2 justify-content-between'>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-1' name="pin1" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-2' name="pin2" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-3' name="pin3" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-4' name="pin4" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-5' name="pin5" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                                <div className='control-pin'>
                                    <Form.Group className="form-pin d-flex align-items-center fw-input">
                                        <Form.Control id='pin-6' name="pin6" maxLength="1" onKeyPress={(event) => checkNumber(event)} onChange={props.handleChange} type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                    </Form.Group>
                                </div>
                            </div>
                            <h3 className='invaild-feedback' type="invalid">{Object.keys(props.errors).length? 'Pin cannot be empty':null}</h3>
                            <button className='d-flex justify-content-center col-12' onClick={()=> props.values.pin1 && !Object.keys(props.errors).length && onRegisterPin(`${props.values.pin1}${props.values.pin2}${props.values.pin3}${props.values.pin4}${props.values.pin5}${props.values.pin6}`)}>Confirm</button>
                        </div>
                    }
                </Formik>
            </section>
        </Container>
    )
}

export default RegisterPin