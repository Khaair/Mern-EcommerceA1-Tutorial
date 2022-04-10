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
                <li><Link className='lnk' to="/addtocart"><img style={{ height: '40px' }} src='img/addtocart.png' alt='kii' /></Link></li>
                <li><Link className='lnk' to="/wishlist"><img style={{ height: '40px' }} src='img/wishlistt.png' alt='kii' /></Link></li>
                <li><Link className='lnk' to="/profile"><img style={{ height: '40px' }} src='img/proo.png' alt='kii' /></Link></li>
                <li><Link className='lnk' to="/admin"><img style={{ height: '40px' }} src='img/Admin.png' alt='kii' /></Link></li>




            </ul>


        </div>


    </div>
  )
}
