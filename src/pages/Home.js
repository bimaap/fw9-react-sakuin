
import React from 'react'
// import {Container} from 'react-bootstrap'
import '../assets/css/style.css'
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
        <span className='logo'>sakuin</span>
        <embed className='menu' src={menu}  />
        <div className='account'>
          <button className='login'>Login</button>
          <button>Sign In</button>
        </div>
      </header>
      <section className='main'>
        <img src={phone} alt='phone' className='phone figure-img img-fluid'/>
        <div className='content'>
          <p className='h1 mb-4'>Awesome App For Saving <div className='color'>Time.</div></p>
          <p className='h3 mb-5'>We bring you a mobile app for banking problems that oftenly wasting much of your times.</p>
          <button className=' mb-4'>Try It Free</button>
          <p className='h3'>Available on</p>
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
    </>
  )
}

export default Home