import React from "react";
import {Link} from "react-router-dom";

export default function Footer(){
    return(
        <div className="Footer">
            <ul className="nav-links">
                <li className="router-links"><Link to="/">Home</Link></li>
                <li className="router-links"><Link to="/projects">Projects</Link></li>
                <li className="router-links"><Link to="/contact">Contact</Link></li>
            </ul>
            <p>
                Site by Emily Slazyk
                <br />
                <a href="https://github.com/eslazyk10" target="_blank">Open-sourced code available</a>
            </p>
        </div>
    );
}