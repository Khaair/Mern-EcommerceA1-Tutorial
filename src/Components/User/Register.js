import React,{useState} from 'react'
import './Register.css'
import { Link, useNavigate} from "react-router-dom";
import axios from 'axios';




export default function Register() {

  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')

  const [username,setUsername] = useState('')

  const [mobile,setMobile] = useState('')

  const [password,setPassword] = useState('')

  const [address,setAddress] = useState('')

  const [password_confirmation,setPassword_confirmation] = useState('')


  let navigate = useNavigate()



let variable  = {fullname,email,username,mobile,password,address,password_confirmation}

  const saveDatatoApp = async()=>{
   

    let x
    try{
      x = await axios.post('http://localhost:5000/api/users/register-user',variable)

      console.log(x.data.success,"success")

    }catch(er){
      console.log(er)
    }

    if(x.data.success){
      navigate('/login')
    }

    else{
      alert("Registration Failed")
      navigate('/register')
    }
  }

  



  return (

    <div>
      <div className="div1">
        <div className="rcontainerss">
          <h5>Registration Form</h5>
          <hr></hr>
          <form action="">
            <label className="name">Fullname</label>
            <br />
            <input className="text" type="text" value={fullname} onChange={(e)=>setFullname(e.target.value)}  placeholder="fullname" />
            <br />
            <label className="name">Email</label>
            <br />
            <input className="text" type="email" value={email} onChange={(e)=>setEmail(e.target.value)}   placeholder="email" />
            <br />
            <label className="name">User Name</label>
            <br />
            <input className="text" type="text" value={username} onChange={(e)=>setUsername(e.target.value)} placeholder="User Name" />
            <br />

            <label className="name">Mobile</label>
            <br />
            <input className="text" type="number" value={mobile} onChange={(e)=>setMobile(e.target.value)}   placeholder="mobile" />
            <br />

            <label className="name">Password</label>
            <br />
            <input className="text" type="password" value={password} onChange={(e)=>setPassword(e.target.value)}   placeholder="password" />
            <br />


            <label className="name">Address</label>
            <br />
            <input className="text" type="text" value={address} onChange={(e)=>setAddress(e.target.value)}  placeholder="address" />
            <br />
            

            <label className="name">Confirm Password</label>
            <br />
            <input className="text" type="password" value={password_confirmation} onChange={(e)=>setPassword_confirmation(e.target.value)}  placeholder="password_confirmation" />
            <br />

            <button className="regbtn" type="button" onClick={saveDatatoApp} >Register</button>
            <p>Already have an account?<Link to="/profile">Sign In</Link></p>


          </form>
          </div>
          </div>



    </div>
  )
}
