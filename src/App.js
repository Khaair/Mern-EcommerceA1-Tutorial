import React from 'react';
import './App.css';

import { BrowserRouter,Routes,Route} from 'react-router-dom';
import User from './Components/User/User';
import Home from './Components/User/Home';
import About from './Components/User/About';
import Contact from './Components/User/Contact';
import Admin from './Components/Admin/Admin';



function App() {
  return (
    <div className="App">
  
    <BrowserRouter>
    <Routes>
      <Route path='/' element = {<User/>}>

      <Route path='/' element = {<Home/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/contact' element = {<Contact/>}/>
    </Route>
    <Route path='/admin' element = {<Admin/>}/>

    </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
