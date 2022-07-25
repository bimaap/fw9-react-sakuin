
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
import iphone from '../assets/icons/phone.svg'
import lock from '../assets/icons/lock.svg'
import download from '../assets/icons/download.svg'
import user1 from '../assets/images/prof/4.png'
import arrowl from '../assets/icons/arrow-left.svg'
import arrowr from '../assets/icons/arrow-right.svg'

function Home() {
  return (
    <>
      <header>
        <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
        <embed className='menu' src={menu}/>
        <div className='account-home d-flex gap-2'>
          <Link className='text-decoration-none' to='/login'><button className='login'>Login</button></Link>
          <Link className='text-decoration-none' to='/register'><button>Sign In</button></Link>
        </div>
      </header>

      <section className='main'>
        <img src={phone} alt='phone' className='phone figure-img img-fluid'/>
        <div className='content'>
          <h1 className='h1 mb-4'>Awesome App For Saving <span className='color'>Time.</span></h1>
          <h3 className='h3 mb-5'>We bring you a mobile app for banking problems that oftenly wasting much of your times.</h3>
          <Link className='text-decoration-none' to='/register'><button className=' mb-4'>Try It Free</button></Link>
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
        <h1 className='h1 mb-4 text-center'><span className='color'>About</span> the Application.</h1>
        <h3 className='h3 mb-5 text-center'>We have some great features from the application and it’s totally free to use by all users around the world.</h3>
        <div className='d-flex gap-4 flex-wrap justify-content-center'>
          <div className='cards'>
            <div className='fw-card'>
              <div className='icon'>
                <embed src={iphone}/>
              </div>
              <h2 className='h2'>24/7 Support</h2>
              <h3 className='h3 text-center'>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</h3>
            </div>
          </div>
          <div className='cards'>
            <div className='fw-card'>
              <div className='icon'>
                <embed src={lock}/>
              </div>
              <h2 className='h2'>Data Privacy</h2>
              <h3 className='h3 text-center'>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</h3>
            </div>
          </div>
          <div className='cards'>
            <div className='fw-card'>
              <div className='icon'>
                <embed src={download}/>
              </div>
              <h2 className='h2'>Easy Download</h2>
              <h3 className='h3 text-center'>Sakuin is 100% totally free to use it’s now available on Google Play Store and App Store.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='feature'>
      <img src={phone} alt='phone' className='phone figure-img img-fluid'/>
        <div className='content d-flex flex-column gap-3'>
          <h1 className='h1 mb-4 '>All The <span className='color'>Great</span> sakuin Features.</h1>
          <div className='cards'>
            <div className='fw-card align-items-start gap-0'>
              <h2 className='h2'><span className='color'>1.</span> Small Fee</h2>
              <h3 className='h3'>We only charge 5% of every success transaction done in sakuin app.</h3>
            </div>
          </div>
          <div className='cards'>
            <div className='fw-card align-items-start gap-0'>
              <h2 className='h2'><span className='color'>2.</span> Small Fee</h2>
              <h3 className='h3'>All your data is secured properly in our system and it’s encrypted.</h3>
            </div>
          </div>
          <div className='cards'>
            <div className='fw-card align-items-start gap-0'>
              <h2 className='h2'><span className='color'>3.</span> Small Fee</h2>
              <h3 className='h3'>Sakuin come up with modern and sleek design and not complicated.</h3>
            </div>
          </div>
        </div>
      </section>

      <section className='user'>
        <h1 className='h1 mb-4 text-center'>What Users are <span className='color'>Saying.</span></h1>
        <h3 className='h3 mb-5 text-center'>We have some great features from the application and it’s totally free to use by all users around the world.</h3>
        <div className='cards'>
            <div className='fw-card'>
              <div className='d-flex gap-4 align-items-center'>
                <div className='icon'>
                  <embed src={arrowl}/>
                </div>
                <img src={user1} alt='user'/>
                <div className='icon'>
                  <embed src={arrowr}/>
                </div>
              </div>
              <h2 className='h2 mb-0'>Alex Hansinburg</h2>
              <h3 className='h3 mb-0'>Designer</h3>
              <h3 className='h3 text-center mb-0'>“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”</h3>
            </div>
          </div>
      </section>

      <footer>
        <Link className='text-decoration-none' to='/'><span className='logo'>sakuin</span></Link>
        <h3 className='h3 mb-0'>Simplify financial needs and saving much time in banking needs with one single app.</h3>
        <div className='line'></div>
        <div className='sign'>
          <h3 className='h3 mb-0'>2020 sakuin. All right reserved.</h3>
          <div className='contact'>
            <h3 className='h3 mb-0'>+62 5637 8882 9901</h3>
            <h3 className='h3 mb-0'>contact@sakuin.com</h3>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Home