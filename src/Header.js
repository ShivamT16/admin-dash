import React, { useState } from 'react'
import { HiOutlineUserCircle } from "react-icons/hi2";
import { NavLink } from 'react-router-dom';

export const Header = () => {
   const [show, setShow] = useState(false)
  return (
    <div className='header-main'>
        <p>
          <span>DashBoard</span> {">"} <span>Products</span> {">"} All Products</p>
        <div style={{display: "flex"}}>
         <input className='input' type='text' placeholder='Search...' />
         <NavLink style={{color: "Grey"}} onClick={() => setShow(!show)} > <HiOutlineUserCircle size="3rem" /> </NavLink>
        </div>
       { show &&
        <div className='showUser'> 
          <p style={{fontWeight: "500"}} >My Account</p>
          <p>Setting</p>
          <p>Support</p>
          <p>Sign Out</p>
        </div>
       } 
    </div>
  )
}
