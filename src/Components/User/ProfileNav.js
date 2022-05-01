import React from 'react'
import './ProfileNav.css'
import { Link } from "react-router-dom";



export default function ProfileNav() {
  return (
   
     <div>
      <div className='pronav'>
        <Link to="/login"><button className='pronavbtn'>Login</button></Link>
        <Link to="/register"><button className='pronavbtn'>Register</button></Link>

        <Link to="/userprofile"><button className='pronavbtn'>My Profile</button></Link>
      </div>
      <hr></hr>
    </div>
    
  )
}
