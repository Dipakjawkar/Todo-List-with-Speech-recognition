import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

function Signup({ setLogin}) {

  
    const[uid, setUid] = useState();
    const[passs, setPass] = useState();
    const[uname, setUname] = useState();
  
    const history = useNavigate();
  
   async function handalSubmit(e){
      e.preventDefault();
      axios.post('http://localhost:9090/signup', {
        email: uid,
        pass: passs,
        name:uname
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
<div className="signup">

        <div className="title-from">SIGNUP</div>

        <div className='form' >
          <input type="text" placeholder='Plese Enter Name ' onChange={(e)=>setUname(e.target.value)} required />
          <input type="email" placeholder='Plese Enter Email ' onChange={(e)=>setUid(e.target.value)} required />

          <input type="password" placeholder='Plese Enter Password ' onChange={(e)=>setPass(e.target.value)} required />

          <input type="submit" onClick={handalSubmit} />
        </div>
        <Link to="/login">Login</Link>
    </div>

</>  )
}

export default Signup