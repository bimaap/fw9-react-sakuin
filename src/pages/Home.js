
import React from 'react'
import {Link} from 'react-router-dom'
// import {Container} from 'react-bootstrap'
import phone from '../assets/images/png-phone.png'
import gplay from '../assets/images/gplay.png'
import appstore from '../assets/images/appstore.png'
import microsoft from '../assets/images/microsoft.png'
import dropbox from '../assets/images/dropbox.png'
import hm from '../assets/images/hm.png'
import airbnb from '../assets/images/airbnb.png'
import canon from '../assets/images/canon.png'
import dell from '../assets/images/dell.png'
import menu from '../assets/icons/menu.svg'

function Home() {
  return (
    <>
      <header>
        <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
        <embed className='menu' src={menu}  />
        <div className='account'>
          <Link className='text-decoration-none' to='/login'><button className='login'>Login</button></Link>
          <button>Sign In</button>
        </div>
      </header>
      <section className='main'>
        <img src={phone} alt='phone' className='phone figure-img img-fluid'/>
        <div className='content'>
          <h1 className='h1 mb-4'>Awesome App For Saving <span className='color'>Time.</span></h1>
          <h3 className='h3 mb-5'>We bring you a mobile app for banking problems that oftenly wasting much of your times.</h3>
          <button className=' mb-4'>Try It Free</button>
          <h3 className='h3'>Available on</h3>
          <div className=''>
            <img src={gplay} alt='gplay'/>
            <img src={appstore} alt='appstore'/>
          </div>
        </div>
      </section>
      <section className='partner'>
        <img src={microsoft} alt='microsoft'/>
        <img src={dropbox} alt='dropbox'/>
        <img src={hm} alt='hm'/>
        <img src={airbnb} alt='airbnb'/>
        <img src={canon} alt='canon'/>
        <img src={dell} alt='dell'/>
      </section>
      <section className='about'>
        <h1 className='h1 mb-4'><span className='color'>About</span> the Application.</h1>
        <h3 className='h3 mb-4 text-center'>We have some great features from the application and it’s totally free to use by all users around the world.</h3>
        <div className='cards'>
          <div className='fw-card'>
            <div></div>
          </div>
          <div className='fw-card'></div>
          <div className='fw-card'></div>
        </div>
      </section>
    </>
  )
}

export default Home