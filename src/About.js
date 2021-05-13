import React from "react";
import Me from "./images/resume-img.jpg";
import Technology from "./Technology";
import Activity from "./Activity";

import "./About.css";

export default function About(){
    return(
        <div className="About">
            <h2 className="about-title">About Me</h2>
            <p className="about">
                <img src={Me} alt="Me" className="resume-img"/> 
                My name is <strong>Emily Slazyk</strong>, a recent graduate from SheCodes workshop with focus in Front End Development. 
                I am skilled in utilizing modern front end technologies including HTML, CSS, Javascript, and React framework. 
                I enjoy taking on the challenge of learning new things and cracking problems that are difficult to solve.
                <br />
                I previously held a  career in healthcare for 7 years prior to making the transition into the tech world. 
                I currently reside in Nashville, TN and am open to both local and remote opportunities. 
                Feel free to take a look at my work through GitHub or my projects page! 
            </p>
            <Activity />
            <br />
            <Technology />
        </div>
    )
}