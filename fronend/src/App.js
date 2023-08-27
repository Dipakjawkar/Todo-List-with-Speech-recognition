import React, { useState } from "react";
import './CSS/Main.css';
import Header from "./Componets/Header";
import InputBox from "./Componets/InputBox";
import Signup from "./Componets/Signup"
import Login from "./Componets/Login";
import Home from "./Componets/Home";
import {BrowserRouter , Route, Routes} from "react-router-dom"
function App() {
  const [login, setLogin] = useState(false)
  return (
    <>
    <BrowserRouter>
    <Header login={login} setLogin={setLogin} />
    <Routes>
      <Route path="/" element={login? <InputBox login={login} /> : <Home/>}/>
      <Route path="/login" element={<Login setLogin={setLogin}/>}/>
      <Route path="/signup" element={<Signup setLogin={setLogin}/>}/>
    </Routes>
    
    </BrowserRouter>
    
      

    </>
  )
}
export default App;