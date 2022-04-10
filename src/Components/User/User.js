import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from './About'
import AddtoCart from './AddtoCart'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'
import Profile from './Profile'
import Wishlist from './Wishlist'


export default function User() {
  return (
    <div>
       <Navbar/>
        <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      <Route path='/addtocart' element = {<AddtoCart/>}/>
      <Route path='/wishlist' element = {<Wishlist/>}/>
      <Route path='/profile' element = {<Profile/>}/>


       
        </Routes>
    </div>
  )
}
