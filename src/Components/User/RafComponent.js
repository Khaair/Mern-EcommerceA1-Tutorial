import React,{useState} from 'react'
import './UserLogin.css'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


export default function UserLogin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  let navigate = useNavigate()

  let variable = {username,password}

  const sendDatatoApp = async() => {

    let x
    try{
      x = await axios.post('http://localhost:5000/api/users/login-user',variable)
      console.log(x.data, 'success')

      localStorage.setItem('auth',x.data.token)
      localStorage.setItem("userrole",x.data.role)
      localStorage.setItem('username',x.data.username)


      localStorage.setItem('auth',x.data.token);
      localStorage.setItem('userrole',x.data.role);
      localStorage.setItem('username',x.data.username);

    }catch(er){
      console.log(er.response)
    }

    if(x.data.success){
      navigate('/')
    }
    else{
      navigate('/login')

    }

  }



  return (
    <div>
       <div className="div1">
        
        <div className="lcontainer">
          <h5>Login Form</h5>
          <hr></hr>
          <form action = "">
            <label className="name">Username</label>
            <br />
            <input className="text" type="text" value={username} onChange = {(e)=>setUsername(e.target.value)} placeholder="Enter username" />
            <br />
            <label className="name">Password</label>
            <br />
            <input className="text" type="password" value={password} onChange = {(e)=>setPassword(e.target.value)} placeholder="Enter Password" />
            <br></br>

           <button className="lbtnn" type="button" onClick={sendDatatoApp}>Log in</button>
          </form>
        </div>
      </div>
    </div>
  )
}