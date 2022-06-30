import React from 'react'
import Skills from './Skills'
import {Link } from "react-router-dom";
function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
  <div className="container-fluid">
    <a className="navbar-brand" href="/"><img src="https://cdn-icons-png.flaticon.com/512/1910/1910037.png" alt="" style={{height:40, width:40,borderRadius:200, backgroundColor:"transparent"}}/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/"><Skills/></Link>
        </li>
       
       
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
