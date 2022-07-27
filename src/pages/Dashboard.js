
import React from 'react'
import { Container } from 'react-bootstrap'
import {Link, useParams} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { AiOutlineBell, AiOutlineAppstore, AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser, AiOutlineLogout, AiOutlineArrowDown, AiOutlineSearch, AiOutlineEdit, AiOutlineRight, AiOutlineLock, AiOutlineCheck} from "react-icons/ai";
import user1 from '../assets/images/prof/4.png'

function Dashboard(nav) {
    const {id} = useParams()
    const [page, setPage] = React.useState({dashboard: 'flex'})

    const data = {
        results:[
            {
                id: 1,
                name: 'Ninda',
                phone_number: '0823212959',
                amount: 100000,
                transaction_type: 'Transfer'
            },
            {
                id: 2,
                name: 'Dita',
                phone_number: '0812624923',
                amount: 452000,
                transaction_type: 'Withdraw'
            },
            {
                id: 3,
                name: 'Danu',
                phone_number: '0854439982',
                amount: 60000,
                transaction_type: 'Topup'
            },
            {
                id: 4,
                name: 'Faris',
                phone_number: '0813440980',
                amount: 200000,
                transaction_type: 'Transfer'
            },
            {
                id: 5,
                name: 'Ran',
                phone_number: '0890290020',
                amount: 2000000,
                transaction_type: 'Topup'
            },
            {
                id: 6,
                name: 'Ran',
                phone_number: '0855990202',
                amount: 80000,
                transaction_type: 'Transfer'
            },
            {
                id: 3,
                name: 'Danu',
                phone_number: '0854439982',
                amount: 180500,
                transaction_type: 'Transfer'
            },
            {
                id: 1,
                name: 'Ninda',
                phone_number: '0823212959',
                amount: 820000,
                transaction_type: 'Withdraw'
            }
        ]
    }

    const dataLimit = data.results && data.results.slice(0, 5)

    return (
        <>
            <Container fluid className='container-body d-flex flex-column vh-100 p-0'>
                <header className='header-dashboard'>
                    <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
                    <div className='d-flex align-items-center gap-5'>
                        <div className='d-flex gap-4'>
                            <img src={user1} alt='user' className='profile-picture'/>
                            <div>
                                <h2 className='h2 m-0'>Robert Chandler</h2>
                                <h3 className='h3 m-0'>+62 8139 3877 7946</h3>
                            </div>
                        </div>
                        <AiOutlineBell className='c-dark fs-3' />
                    </div>
                </header>

                <section className='body-dashboard col-12 mp py-3 gap-3'>
                    <div className='navbar-dashboard col-3'>
                        <div className='fw-card d-flex flex-column align-items-start justify-content-between'>
                            <div className='d-flex flex-column gap-5'>
                                <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
                                    <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({dashboard: 'flex'})}>
                                        <AiOutlineAppstore className='c-dark fs-4' />
                                        <h3 className='navbar-text h3 m-0 c-dark'>Dashboard</h3>
                                    </div>
                                </Link>
                                <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
                                    <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({transfer: 'flex'})}>
                                        <AiOutlineArrowUp className='c-dark fs-4' />
                                        <h3 className='navbar-text h3 m-0 c-dark'>Transfer</h3>
                                    </div>
                                </Link>
                                <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
                                    <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({topup: 'flex'})}>
                                        <AiOutlinePlus className='c-dark fs-4' />
                                        <h3 className='navbar-text h3 m-0 c-dark'>Top Up</h3>
                                    </div>
                                </Link>
                                <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/dashboard'>
                                <div className='d-flex gap-3 align-items-center' onClick={()=> setPage({profile: 'flex'})}>
                                    <AiOutlineUser className='c-dark fs-4' />
                                    <h3 className='navbar-text h3 m-0 c-dark'>Profile</h3>
                                </div>
                                </Link>
                            </div>
                            <Link className='text-decoration-none d-flex gap-3 align-items-center' onClick={()=> localStorage.removeItem("auth")} to='/'>
                                <AiOutlineLogout className='c-dark fs-4' />
                                <h3 className='navbar-text h3 m-0 c-dark'>Logout</h3>
                            </Link>
                        </div>
                    </div>

                    <div style={{display: page.dashboard?page.dashboard:'none'}} className='flex-column flex-fill'>
                        <div className='dashboard d-flex flex-column flex-fill gap-3'>
                            <div className='control-card'>
                                <div className='fw-card bc-dark flex-row justify-content-between py-3 gap-0'>
                                    <div className='d-flex flex-column flex-fill'>
                                        <h3 className='h3 m-0 c-primary'>Balance</h3>
                                        <h1 className='h1 m-0 c-primary fs-1 lh-base'>Rp120.000</h1>
                                        <h3 className='h3 m-0 c-primary'>+62 813-9387-7946</h3>
                                    </div>
                                    <div className='d-flex flex-column gap-2'>
                                        <button className='d-flex gap-3 align-items-center bc-primary c-dark px-4'>
                                            <AiOutlineArrowUp className='c-dark fs-4' />
                                            <h2 className='h2 m-0 c-dark'>Transfer</h2>
                                        </button>
                                        <button className='d-flex gap-3 align-items-center bc-primary c-dark w-fill px-4'>
                                            <AiOutlinePlus className='c-dark fs-4' />
                                            <h2 className='h2 m-0 c-dark'>Top Up</h2>
                                        </button>
                                    </div>
                                </div>
                            </div>
            
                            <div className='dashboard-content d-flex gap-3 flex-fill'>
                                <div className='dashboard-chart col-7'>
                                    <div className='fw-card align-items-start justify-content-start gap-3'>
                                        <div className='d-flex justify-content-between w-fill'>
                                            <div>
                                                <AiOutlineArrowUp className='c-dark fs-4' />
                                                <h3 className='h3 m-0 c-dark'>Income</h3>
                                                <h2 className='h2 m-0 c-dark'>Rp2.120.000</h2>
                                            </div>
                                            <div>
                                                <AiOutlineArrowDown className='c-dark fs-4' />
                                                <h3 className='h3 m-0 c-dark'>Expense</h3>
                                                <h2 className='h2 m-0 c-dark'>Rp1.560.000</h2>
                                            </div>
                                        </div>
                                        <div className='chart bc-primary flex-fill w-fill'>
                                            Chart
                                        </div>
                                    </div>
                                </div>
                                <div className='flex-fill'>
                                    <div className='fw-card align-items-start justify-content-start gap-3'>
                                        <div className='d-flex align-items-center justify-content-between w-fill'>
                                            <h2 className='h2 m-0 c-dark'>Transaction History</h2>
                                            <h3 className='h3 m-0 c-dark' onClick={()=> setPage({transactions: 'flex'})}>See all</h3>
                                        </div>
                                        
                                        <div className='history-transaction w-fill d-flex flex-column flex-fill gap-3 oo'>
                                            {
                                                dataLimit && dataLimit.map(user=>{
                                                    return(
                                                        <div className='d-flex align-items-center justify-content-between w-fill'>
                                                            <div className='d-flex gap-2'>
                                                                <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
                                                                <div>
                                                                    <h2 className='h2 m-0 c-dark overflow-visible'>{user.name}</h2>
                                                                    <h3 className='h3 m-0 c-dark'>{user.transaction_type}</h3>
                                                                </div>
                                                            </div>
                                                            <h2 className='h2 m-0 c-dark'>{`Rp.${user.amount}`}</h2>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.transfer?page.transfer:'none'}} className='flex-column flex-fill'>
                        <div className='transfer h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0 c-dark'>Search Receiver</h2>
                                <Form.Group className="d-flex align-items-center bc-primary w-fill px-3 py-1 rounded-3">
                                    <AiOutlineSearch className='c-dark fs-4' />
                                    <Form.Control name="receiver" type="receiver" placeholder="Search receiver here" isInvalid={false} className='bg-transparent border-0'/>
                                </Form.Group>
                                <div className='receiver d-flex flex-column w-fill gap-3'>
                                    {
                                        data.results && data.results.map(user=>{
                                            return(
                                                <Link className='text-decoration-none' to={`/dashboard/transfer/${user.id}`} onClick={()=> setPage({makeTransaction: 'flex'})}>
                                                    <div className='w-fill'>
                                                        <div className='fw-card p-3 rounded-3 flex-row align-items-start justify-content-start bc-primary'>
                                                            <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
                                                            <div>
                                                                <h2 className='h2 m-0 c-dark'>{user.name}</h2>
                                                                <h3 className='h3 m-0 c-dark'>{user.phone_number}</h3>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.topup?page.topup:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0 c-dark'>How To Top Up</h2>
                                <div className='topup d-flex flex-column h-fill w-fill gap-3'>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>1.</h2>
                                            <h3 className='h3 m-0 c-dark'>Go to the nearest ATM or you can use E-Banking.</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>2.</h2>
                                            <h3 className='h3 m-0 c-dark'>Type your security number on the ATM or E-Banking.</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>3.</h2>
                                            <h3 className='h3 m-0 c-dark'>Select “Transfer” in the menu</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>4.</h2>
                                            <h3 className='h3 m-0 c-dark'>Type the virtual account number that we provide you at the top.</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>5.</h2>
                                            <h3 className='h3 m-0 c-dark'>Type the amount of the money you want to top up.</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>6.</h2>
                                            <h3 className='h3 m-0 c-dark'>Read the summary details</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>7.</h2>
                                            <h3 className='h3 m-0 c-dark'>Press transfer / top up</h3>
                                        </div>
                                    </div>
                                    <div className='w-fill'>
                                        <div className='fw-card p-3 rounded-3 flex-row align-items-center justify-content-start gap-3 bc-primary'>
                                            <h2 className='h2 m-0 c-dark'>8.</h2>
                                            <h3 className='h3 m-0 c-dark'>You can see your money in Zwallet within 3 hours.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.profile?page.profile:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <div className='d-flex flex-column align-items-center justify-content-center h-fill w-fill gap-3'>
                                    <img src={user1} alt='user' className='profile-picture'/>
                                    <div className='d-flex align-items-center gap-1'>
                                        <AiOutlineEdit className='c-dark fs-5' />
                                        <h3 className='h3 m-0'>Edit</h3>
                                    </div>
                                    <h2 className='h2 m-0'>Robert Chandler</h2>
                                    <h3 className='h3 m-0'>+62 813-9387-7946</h3>
                                    <div className='profile-nav col-5' onClick={()=> setPage({personalInformation: 'flex'})}>
                                        <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                            <h3 className='h3 m-0 fw-bolder'>Personal Information</h3>
                                            <AiOutlineRight className='c-dark fs-5' />
                                        </div>
                                    </div>
                                    <div className='profile-nav col-5' onClick={()=> setPage({changePassword: 'flex'})}>
                                        <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                            <h3 className='h3 m-0 fw-bolder'>Change Password</h3>
                                            <AiOutlineRight className='c-dark fs-5' />
                                        </div>
                                    </div>
                                    <div className='profile-nav col-5' onClick={()=> setPage({changePin: 'flex'})}>
                                        <div className='fw-card flex-row align-items-center bc-primary rounded-3 justify-content-between p-3'>
                                            <h3 className='h3 m-0 fw-bolder'>Change PIN</h3>
                                            <AiOutlineRight className='c-dark fs-5' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.transactions?page.transactions:'none'}} className='flex-column flex-fill'>
                        <div className='flex-fill'>
                            <div className='fw-card align-items-start justify-content-start gap-3'>
                                <div className='d-flex align-items-center justify-content-between w-fill'>
                                    <h2 className='h2 m-0 c-dark'>Transaction History</h2>
                                </div>
                                <h3 className='h3 m-0 c-dark'>This Week</h3>
                                
                                <div className='transactions w-fill d-flex flex-column flex-fill gap-3'>
                                    {
                                        data.results && data.results.map(user=>{
                                            return(
                                                <div className='d-flex align-items-center justify-content-between w-fill bc-primary rounded-2 p-1'>
                                                    <div className='d-flex gap-2'>
                                                        <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
                                                        <div>
                                                            <h2 className='h2 m-0 c-dark overflow-visible'>{user.name}</h2>
                                                            <h3 className='h3 m-0 c-dark'>{user.transaction_type}</h3>
                                                        </div>
                                                    </div>
                                                    <h2 className='h2 m-0 c-dark'>{`Rp.${user.amount}`}</h2>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div style={{display: page.makeTransaction?page.makeTransaction:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0'>Transfer Money</h2>
                                <div className='d-flex w-fill gap-3 bc-primary p-3 rounded-2'>
                                    <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
                                    <div className='d-flex flex-column'>
                                        <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
                                        <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
                                    </div>
                                </div>
                                <h3 className='h3 m-0'>Type the amount you want to transfer and then press continue to the next steps.</h3>
                                <div className='d-flex flex-column h-fill w-fill align-items-center justify-content-center gap-3'>
                                    <Form.Group className="d-flex align-items-center">
                                            <Form.Control name="text" type="text" placeholder="0.00" isInvalid={false} className='h1 bg-transparent border-0 text-center'/>
                                    </Form.Group>
                                    <h2 className='h2 m-0'>Rp{data.results[id? (id-1):0].amount} Available</h2>
                                    <Form.Group className="d-flex align-items-center fw-input">
                                        <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineEdit className='c-dark fs-5' /></Form.Label>
                                        <Form.Control name="text" type="text" placeholder="Add some notes" isInvalid={false} className='bg-transparent border-0'/>
                                    </Form.Group>
                                    <button className='d-flex justify-content-center' onClick={()=> setPage({detailTransaction: 'flex'})}>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.detailTransaction?page.detailTransaction:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-end justify-content-start h-fill gap-2'>
                                <div className='w-fill'>
                                    <h2 className='h2 m-0'>Transfer To</h2>
                                </div>
                                <div className='d-flex w-fill gap-3 bc-primary p-2 rounded-2'>
                                    <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
                                    <div className='d-flex flex-column'>
                                        <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
                                        <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
                                    </div>
                                </div>
                                <div className='w-fill'>
                                    <h2 className='h2 m-0'>Details</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Amount</h3>
                                    <h2 className='h2 m-0'>Rp100.000</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Balance Left</h3>
                                    <h2 className='h2 m-0'>Rp20.000</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Date & Time</h3>
                                    <h2 className='h2 m-0'>May 11, 2020 - 12.20</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Notes</h3>
                                    <h2 className='h2 m-0'>For buying some socks</h2>
                                </div>
                                <button className='d-flex justify-content-center' onClick={()=> setPage({transferSuccess: 'flex'})}>Continue</button>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.personalInformation?page.personalInformation:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0'>Personal Information</h2>
                                <h3 className='h3 m-0'>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</h3>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Amount</h3>
                                    <h2 className='h2 m-0'>Robert</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Last Name</h3>
                                    <h2 className='h2 m-0'>Chandler</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Verified E-mail</h3>
                                    <h2 className='h2 m-0'>pewdiepie1@gmail.com</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Phone Number</h3>
                                    <h2 className='h2 m-0'>+62 813-9387-7946</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.changePassword?page.changePassword:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0'>Change Password</h2>
                                <h3 className='h3 m-0'>You must enter your current password and then type your new password twice.</h3>
                                <div className='d-flex w-fill h-fill justify-content-center align-items-center'>
                                    <div className='d-flex flex-column h-fill gap-5 justify-content-center input-standart'>
                                        <Form.Group className="d-flex align-items-center fw-input">
                                            <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
                                            <Form.Control name="password" type="password" placeholder="Current password" isInvalid={false} className='bg-transparent border-0'/>
                                        </Form.Group>
                                        <Form.Group className="d-flex align-items-center fw-input">
                                            <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
                                            <Form.Control name="password" type="password" placeholder="New password" isInvalid={false} className='bg-transparent border-0'/>
                                        </Form.Group>
                                        <Form.Group className="d-flex align-items-center fw-input">
                                            <Form.Label className='d-flex justify-content-center m-0 col-1'><AiOutlineLock className='c-dark fs-5' /></Form.Label>
                                            <Form.Control name="password" type="password" placeholder="Repeat new password" isInvalid={false} className='bg-transparent border-0'/>
                                        </Form.Group>
                                        <button className='d-flex justify-content-center w-fill'>Continue</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.changePin?page.changePin:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column align-items-start justify-content-start h-fill gap-3'>
                                <h2 className='h2 m-0'>Change PIN</h2>
                                <h3 className='h3 m-0'>Enter your current 6 digits Zwallet PIN below to continue to the next steps.</h3>
                                <div className='d-flex w-fill h-fill flex-column justify-content-center align-items-center gap-4'>
                                    <div className='d-flex gap-2 justify-content-between'>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                        <div className='control-pin bc-white'>
                                            <Form.Group className="form-pin d-flex align-items-center fw-input">
                                                <Form.Control name="pin" type="text" isInvalid={false} className='pin bg-transparent border-0'/>
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <button className='d-flex justify-content-center'>Continue</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{display: page.transferSuccess?page.transferSuccess:'none'}} className='flex-column flex-fill'>
                        <div className='h-fill'>
                            <div className='fw-card flex-column justify-content-start h-fill gap-3'>
                                <div className='bc-dark p-3 rounded-5'>
                                    <AiOutlineCheck className='c-primary fs-2' />
                                </div>
                                <h2 className='h2 m-0'>Transfer Success</h2>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Amount</h3>
                                    <h2 className='h2 m-0'>Rp100.000</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Balance Left</h3>
                                    <h2 className='h2 m-0'>Rp20.000</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Date & Time</h3>
                                    <h2 className='h2 m-0'>May 11, 2020 - 12.20</h2>
                                </div>
                                <div className='d-flex w-fill flex-column bc-primary p-2 rounded-2'>
                                    <h3 className='h3 m-0'>Notes</h3>
                                    <h2 className='h2 m-0'>For buying some socks</h2>
                                </div>
                                <div className='w-fill'>
                                    <h2 className='h2 m-0'>Transfer to</h2>
                                </div>
                                <div className='d-flex w-fill gap-3 bc-primary p-2 rounded-2'>
                                    <img src={require(`../assets/images/prof/${data.results[id? (id-1):0].id}.png`)} alt='user' className='profile-picture'/>
                                    <div className='d-flex flex-column'>
                                        <h2 className='h2 m-0'>{data.results[id? (id-1):0].name}</h2>
                                        <h3 className='h3 m-0'>{data.results[id? (id-1):0].phone_number}</h3>
                                    </div>
                                </div>
                                <button className='d-flex justify-content-center'>Continue</button>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className='footer-dashboard col-12 d-flex justify-content-between py-3'>
                    <h3 className='h3 m-0 c-white'>2020 sakuin. All right reserved.</h3>
                    <div className='d-flex gap-3'>
                        <h3 className='h3 m-0 c-white'>+62 5637 8882 9901</h3>
                        <h3 className='h3 m-0 c-white'>contact@sakuin.com</h3>
                    </div>
                </footer>
            </Container>
        </>
    )
}

export default Dashboard