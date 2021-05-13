
import React from "react";
import logo from "./images/logo.png";
import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div className="Header">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/home"><img src={logo} alt="Logo" width="55"/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <Link to="/home">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link> 
      </div>
    </div>
  </div>
</nav>
        </div>
    )
}