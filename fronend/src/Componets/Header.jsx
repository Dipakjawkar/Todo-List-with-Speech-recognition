import React from 'react'
import { Link } from "react-router-dom";


function Header({ login, setLogin }) {
  function Logedin() {
    if (login===true) {
      return (
        <>
          <li onClick={()=>setLogin(false)}>logout</li>
        </>
      )
    } else {
      return (
        <>
          <li><Link to='/signup'>Signup</Link></li>
          <li><Link to='/login'> Login</Link></li>
        </>
      )
    }

  }
  return (
    <div className='header-div'>
      <div className="title">
        Advance Todo List
      </div>
      <div className="main-menu">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <Logedin/>
        </ul>
      </div>
    </div>
  )
}

export default Header



