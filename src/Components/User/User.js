import React from 'react'
import { Routes,Route} from 'react-router-dom'
import About from './About'
import Contact from './Contact'
import Home from './Home'
import Navbar from './Navbar'


export default function User() {
  return (
    <div>
       <Navbar/>
        <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/about' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
        </Routes>
    </div>
  )
}
