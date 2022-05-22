import React from 'react'

import './homepage.css'

import sliderImg1 from './assets/pm_slider_img.jpg'
import Navbar from '../../components/navbar/Navbar'
import { Link } from 'react-router-dom'



const HomePage = () => {
  return (
    <>
    <Navbar />
      <div className="home__page">
        <div className="home__page__container">
          <div className="home__page__banner">
            <h1>NATIONAL DISASTER RESPONSE FORCE</h1>
            <span>Saving Lives &amp; Beyond...</span>
          </div>
          <div className="homepage__login__container">
            <div className="volunteer__login">
              <h1>Volunteer Login</h1>
              <form>
                <label>Login</label>
                <input type="text" name="username" id="username" placeholder='Username' />

                <label>Password</label>
                <input type="password" name="password" id="password" placeholder='Password' />
              </form>
              <Link to="/userDashboard"><button className='home__page__login__button' >LOGIN</button></Link>
            </div>
            <div className="admin__login">
              <h1>Administrator Login</h1>
              <form>
                <label>Login</label>
                <input type="text" name="username" id="username" placeholder='Username' />

                <label>Password</label>
                <input type="password" name="password" id="password" placeholder='Password' />
              </form>
              <Link to="/adminDashboard"><button className='home__page__login__button' >LOGIN</button></Link>
            </div>
          </div>
          <div className="home__page__slider">
            <img src={sliderImg1} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage