import React from 'react';
import './App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import User from './Components/User/User';
import Home from './Components/User/Home';
import About from './Components/User/About';
import Contact from './Components/User/Contact';
import Admin from './Components/Admin/Admin';
import AddtoCart from './Components/User/AddtoCart';
import Wishlist from './Components/User/Wishlist';
import Profile from './Components/User/Profile';
import UserLogin from './Components/User/UserLogin';
import Register from './Components/User/Register';
import Userprofile from './Components/User/Userprofile';
import AdminRegister from './Components/Admin/AdminRegister';




function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<User/>}>

      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/addtocart' element = {<AddtoCart/>}/>
      <Route path='/wishlist' element = {<Wishlist/>}/>
      <Route path='/profile' element = {<Profile/>}/>
      <Route path='/login' element = {<UserLogin/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/userprofile' element = {<Userprofile/>}/>



    </Route>
    <Route path='/admin' element = {<Admin/>}/>
    <Route path='/Adminregister' element = {<AdminRegister/>}/>


    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
