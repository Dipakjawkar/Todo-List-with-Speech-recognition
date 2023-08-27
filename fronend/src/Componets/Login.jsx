import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom"

function Login({setLogin}) {



  const[uid, setUid] = useState();
  const[passs, setPass] = useState();

  const history = useNavigate();

 async function handalSubmit(e){
    e.preventDefault();
    axios.post('http://localhost:9090/login', {
      email: uid,
      pass: passs
    })
    .then(function (response) {
      if(response.data.status==="ok"){
        history("/")
        setLogin(true)
      }
      else{
        alert(response.data.message)
      }
    })
    .catch(function (error) {
      console.log(error);
    });



  }
  return (
    <>
      <div className="login">
        <div className="title-from">LOGIN</div>

        <div className='form' >
          <input type="email" placeholder='Enter Email' onChange={(e)=>setUid(e.target.value)} required />

          <input type="password" placeholder='Enter Password ' onChange={(e)=>setPass(e.target.value)} required />

          <input type="submit" onClick={handalSubmit} />
        </div>
        <Link to="/signup">Signup</Link>
      </div>
    </>
  )
}

export default Login