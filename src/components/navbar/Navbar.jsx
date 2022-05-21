import React from 'react'

import './navbar.css'

const Navbar = () => {
  return (
    <>
        <div className="navbar">
            <div className="navbar__container">
                <div className="logo">

                </div>
                <div className="menu__bar">
                  <ul>
                    <li>HOME</li>
                    <li>OPERATIONS</li>
                    <li>VOLUNTEER</li>
                    <li>DONATE</li>
                    <li>SIGNUP</li>
                    <li>EN</li>
                  </ul>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar