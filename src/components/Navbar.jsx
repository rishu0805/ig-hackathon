import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/logo.png"
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="links">
            <Link className='link' to=""><h6>India</h6></Link>
            <Link className='link' to=""><h6>Foriegn Countries</h6></Link>
            <span>John</span>
            <span>Logout</span>
            <span className='write'>
                <Link className='link' to="/write">Write</Link>
            </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
