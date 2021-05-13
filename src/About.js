import React from "react";
import Me from "./images/resume-img.jpg";
import Technology from "./Technology";
import Activity from "./Activity";

import "./css/About.css";

export default function About(){
    return(
        <div className="About">
            <h2 className="about-title">About Me</h2>
            <div className="container">
                <p className="about">
                    <div className="row">
                <div className="col-md-3"><img src={Me} alt="Me" className="resume-img"/></div>
                    <div className="col-md-9">
                        My name is <strong>Emily Slazyk</strong>, a recent graduate from SheCodes workshop with focus in Front End Development.
                        I am skilled in utilizing modern front end technologies including HTML, CSS, Javascript, and React framework. 
                        I enjoy taking on the challenge of learning new things and cracking problems that are difficult to solve.
                        I previously held a career in healthcare for 7 years prior to making the transition into the tech world. 
                        I currently reside in Nashville, TN and am open to both local and remote opportunities. 
                        Feel free to take a look at my work through GitHub or my projects page! 
                    </div>
                    </div>
            </p>
            <Activity />
            </div>
            <br />
            <Technology />
        </div>
    )
}