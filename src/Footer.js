import React from "react";
import { Link } from "react-router-dom";

import "./css/Footer.css";

export default function Footer(){
    return(
        <div className="Footer">
            <ul className="nav-links">
                <li className="router-links"><Link to="/">Home</Link></li>
                <li className="router-links"><Link to="/projects">Projects</Link></li>
                <li className="router-links"><Link to="/contact">Contact</Link></li>
            </ul>
            <p className="creator">
                Site by Emily Slazyk
                <br />
                <a href="https://github.com/eslazyk10/new-portfolio" target="_blank" rel="noreferrer">Open-sourced code available</a>
            </p>
        </div>
    );
}