import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function AdminRegister(props) {
  const [fullname, setFullname] = useState('');
  const [EducationLevel, setEducationLevel] = useState('');
  const [eductioninstitute, setEductioninstitute] = useState('');
  const [DepertmentName, setDepertmentName] = useState('');
  const [Address, setAddress] = useState('');
  const [Mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password_confirmation, setPassword_confirmation] = useState('');



  const navigate = useNavigate();

  const sendDatatoApp = async () => {
    let x;
    try {
      x = await axios.post('http://localhost:5000/api/users/register-admin', { fullname, EducationLevel, eductioninstitute, DepertmentName, Address, Mobile, email, username, password, password_confirmation })
      console.log(x.data.success, 'success')
    } catch (er) {
      console.log(er)
    }

    if (x.data.success) {
      navigate('/admin')
    }
    else {
      alert('Registraion faild')
      navigate('/register')
    }

  }

  return (
    <>



      <div className='container'>
        <form action="">
          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Full Name</label>
            <input className="form-control" value={fullname} onChange={(e) => setFullname(e.target.value)} style={{ margin: "12px" }} placeholder="Enter title" />
          </div>
          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Education Level</label>
            <input className="form-control" value={EducationLevel} onChange={(e) => setEducationLevel(e.target.value)} style={{ margin: "12px" }} placeholder="Enter author" />
          </div>
          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Eduction institute</label>
            <input className="form-control" value={eductioninstitute} onChange={(e) => setEductioninstitute(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Depertment Name</label>
            <input className="form-control" value={DepertmentName} onChange={(e) => setDepertmentName(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Address</label>
            <input className="form-control" value={Address} onChange={(e) => setAddress(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Mobile</label>
            <input className="form-control" value={Mobile} onChange={(e) => setMobile(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Email</label>
            <input className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Username</label>
            <input className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Password</label>
            <input className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>

          <div className="form-group mt-5 ">
            <label htmlFor="">Enter Confirm Password</label>
            <input className="form-control" value={password_confirmation} onChange={(e) => setPassword_confirmation(e.target.value)} style={{ margin: "12px" }} placeholder="Enter body" />
          </div>
          <button className="btn btn-primary mt-3" type="button" onClick={sendDatatoApp} >Save</button>
        </form>

      </div>
    </>


  )
}

export default AdminRegister