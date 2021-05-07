import React from "react";
import Me from "./images/resume-img.jpg";
import bootstrap from "./images/bootstrap-logo.png";
import css from "./images/CSS-logo.png";
import react from "./images/React-logo.png";
import js from "./images/Javascript-logo.png";
import responsive from "./images/responsive-logo.png";
import html from "./images/htmlLogo.png";

import "./AboutMe.css";

export default function AboutMe(){
    return(
        <div className="AboutMe">
            <h2 className="about">About Me</h2>
            <div className="row">
                <div className="col-xl-5">
            <img className="portrait" src={Me} alt="Me"/>
            </div>
            <div className="col-xl-7 skills">
                <h3>Technologies I use</h3>
                <div className="tech-block">
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                            <img src={html} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={css} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={js} alt="" />
                        </div>
                        </div>
                        <div className="row">
                        <div className="col-2">
                            <img src={react} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={bootstrap} alt="" />
                        </div>
                        <div className="col-2">
                            <img src={responsive} alt="" />
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}