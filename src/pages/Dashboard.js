
import React from 'react'
import { Container } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { AiOutlineBell, AiOutlineAppstore, AiOutlineArrowUp, AiOutlinePlus, AiOutlineUser, AiOutlineLogout, AiOutlineArrowDown, AiOutlineSearch} from "react-icons/ai";
import user from '../assets/images/prof/4.png'

function Pages(nav) {
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
            }
        ]
    }

    const dataLimit = data.results && data.results.slice(0, 5)

    if(nav==='dashboard'){
        return(
            <>
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
    
                    <div className='d-flex gap-3 flex-fill'>
                        <div className='col-7'>
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
                                <div className='bc-primary flex-fill w-fill'>Chart</div>
                            </div>
                        </div>
                        <div className='flex-fill'>
                            <div className='fw-card align-items-start justify-content-start gap-3'>
                                <div className='d-flex align-items-center justify-content-between w-fill'>
                                    <h2 className='h2 m-0 c-dark'>Transaction History</h2>
                                    <h3 className='h3 m-0 c-dark'>See all</h3>
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
            </>
        )
    }else if(nav==='transfer'){
        return(
            <>
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
                                        <div className='w-fill'>
                                            <div className='fw-card p-3 rounded-3 flex-row align-items-start justify-content-start bc-primary'>
                                                <img src={require(`../assets/images/prof/${user.id}.png`)} alt='user' className='profile-picture'/>
                                                <div>
                                                    <h2 className='h2 m-0 c-dark'>{user.name}</h2>
                                                    <h3 className='h3 m-0 c-dark'>{user.phone_number}</h3>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </>
        )
    }else if(nav==='topup'){
        return(
            <>
                
            </>
        )
    }else if(nav==='profile'){
        return(
            <>
                
            </>
        )
    }
}

function Dashboard() {
    const [page, setPage] = React.useState('dashboard')
    return (
        <>
            <Container fluid className='d-flex flex-column vh-100 p-0'>
                <header className='header-dashboard'>
                    <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
                    <div className='d-flex align-items-center gap-5'>
                        <div className='d-flex gap-4'>
                            <img src={user} alt='user' className='profile-picture'/>
                            <div>
                                <h2 className='h2 m-0'>Robert Chandler</h2>
                                <h3 className='h3 m-0'>+62 8139 3877 7946</h3>
                            </div>
                        </div>
                        <AiOutlineBell className='c-dark fs-3' />
                    </div>
                </header>

                <section className='body-dashboard col-12 mp py-3 gap-3'>
                    <div className='col-3'>
                        <div className='fw-card d-flex flex-column align-items-start justify-content-between'>
                            <div className='d-flex flex-column gap-5'>
                                <div className='d-flex gap-3 align-items-center' onClick={()=> setPage('dashboard')}>
                                    <AiOutlineAppstore className='c-dark fs-4' />
                                    <h3 className='h3 m-0 c-dark'>Dashboard</h3>
                                </div>
                                <div className='d-flex gap-3 align-items-center' onClick={()=> setPage('transfer')}>
                                    <AiOutlineArrowUp className='c-dark fs-4' />
                                    <h3 className='h3 m-0 c-dark'>Transfer</h3>
                                </div>
                                <div className='d-flex gap-3 align-items-center' onClick={()=> setPage('topup')}>
                                    <AiOutlinePlus className='c-dark fs-4' />
                                    <h3 className='h3 m-0 c-dark'>Top Up</h3>
                                </div>
                                <div className='d-flex gap-3 align-items-center' onClick={()=> setPage('profile')}>
                                    <AiOutlineUser className='c-dark fs-4' />
                                    <h3 className='h3 m-0 c-dark'>Profile</h3>
                                </div>
                            </div>
                            <Link className='text-decoration-none d-flex gap-3 align-items-center' to='/'>
                                <AiOutlineLogout className='c-dark fs-4' />
                                <h3 className='h3 m-0 c-dark'>Logout</h3>
                            </Link>
                        </div>
                    </div>

                    <div className='d-flex flex-column flex-fill'>
                        {Pages(page)}
                    </div>

                </section>

                <footer className='footer-dashboard col-12 d-flex justify-content-between py-3'>
                    <h3 className='h3 m-0'>2020 Zwallet. All right reserved.</h3>
                    <div className='d-flex gap-3'>
                        <h3 className='h3 m-0'>+62 5637 8882 9901</h3>
                        <h3 className='h3 m-0'>contact@zwallet.com</h3>
                    </div>
                </footer>
            </Container>
        </>
    )
}

export default Dashboard