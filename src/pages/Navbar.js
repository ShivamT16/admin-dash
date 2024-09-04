import React from 'react'
import { NavLink } from 'react-router-dom'
import "./navbar.css"

import { AiOutlineExport } from "react-icons/ai";
import { IoIosAddCircle } from "react-icons/io";

export const Navbar = () => {
  
  const getActiveStyle = ({isActive}) => ({
    textDecoration: "none",
    color: isActive ? "black" : "grey",
    fontWeight: "500",
    backgroundColor: isActive ? "white" : "",
    padding: ".2rem .4rem",
    borderRadius: isActive ? ".3rem" : "",
    boxShadow: isActive ? "0px 0px 10px whitesmoke" : ""
  })

  return (
    <div className='navbar-main'>
      <div className='navbar-nav'>
        <NavLink style={getActiveStyle} to="/" > All </NavLink>
        <NavLink style={getActiveStyle} to="/error" > Active </NavLink>
        <NavLink style={getActiveStyle} to="/errora" > Draft </NavLink>
        <NavLink style={getActiveStyle} to="/errorb" > Archived </NavLink>
      </div>
      <div>
       <button className='export-btn' > <AiOutlineExport size="1rem" /> Export</button>
       <button className='add-btn' > <IoIosAddCircle size="1rem" /> Add Product</button>
      </div>
    </div> 
  )
}
