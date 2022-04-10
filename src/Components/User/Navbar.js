import React from 'react'
import { Link } from "react-router-dom";
import './Navbar.css';


export default function Navbar() {
  return (
    <div>
        <div className='navv'>
            <ul>
                <li><Link className='lnk' to="/">Home</Link></li>
                <li><Link className='lnk' to="/about">About</Link></li>

                <li><Link className='lnk' to="/contact">Contact</Link></li>

            </ul>


        </div>


    </div>
  )
}
