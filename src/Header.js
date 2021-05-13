
import React from "react";
import logo from "./images/logo.png";
import { Link } from "react-router-dom";


export default function Header(){
    return(
        <div className="Header">
            <nav class="navbar navbar-expand-lg fixed-top navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/"><img src={logo} alt="Logo" className="logo"width="50"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <span className="navbar-links"><Link to="/" style={{color: 'black', paddingLeft: 15, textDecoration: 'none'}}>Home</Link></span>
        <span className="navbar-links"><Link to="/projects" style={{color: 'black', paddingLeft: 15, textDecoration: 'none'}}>Projects</Link></span>
        <span className="navbar-links"><Link to="/contact" style={{color: 'black', paddingLeft: 15, textDecoration: 'none'}}>Contact</Link></span>
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}