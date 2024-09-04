import React from 'react'
import { NavLink } from 'react-router-dom'

import { HiOutlineHome } from "react-icons/hi2";
import { BsCart2 } from "react-icons/bs";
import { FiBox } from "react-icons/fi";
import { TbUsers } from "react-icons/tb";
import { AiOutlineLineChart } from "react-icons/ai";
import { LuSettings } from "react-icons/lu";

export const NavBar = () => {

  const getActiveStyle = ({isActive}) => ({
    backgroundColor: isActive ? "whitesmoke" : "",
  })
  
  return (
    <div className='Navbar-container'>
       <div className='Navbar-main'> 
        <NavLink to="https://vercel.com/templates/next.js/admin-dashboard-tailwind-postgres-react-nextjs" > 
        <img className='vercel' src="https://cdn.brandfetch.io/vercel.ai/fallback/transparent/theme/dark/h/512/w/512/icon?t=1721078431554" alt="vercel" /> 
        </NavLink>
        <NavLink className="nav-icon" title='Dashboards' > <HiOutlineHome size="1.4rem" /> </NavLink>
        <NavLink className="nav-icon" title='Orders' > <BsCart2 size="1.4rem" /> </NavLink>
        <NavLink className="nav-icon" style={getActiveStyle} to="/" title='Products' > <FiBox size="1.4rem" /> </NavLink>
        <NavLink className="nav-icon" style={getActiveStyle} to="/customers" title='Customers' > <TbUsers size="1.4rem" /> </NavLink>
        <NavLink className="nav-icon" title='Analytics' > <AiOutlineLineChart size="1.4rem" /> </NavLink>
      </div>
        <NavLink className="nav-icon" title='Settings' > <LuSettings size="1.4rem" /> </NavLink>
    </div>
  )
}
