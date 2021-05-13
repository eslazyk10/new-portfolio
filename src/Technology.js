import React from "react";

import bootstrap from "./images/bootstrap-logo.png";
import css from "./images/CSS-logo.png";
import react from "./images/React-logo.png";
import js from "./images/Javascript-logo.png";
import responsive from "./images/responsive-logo.png";
import html from "./images/htmlLogo.png";

import "./css/Technology.css";

export default function Technology(){
    return(
        <div className="Technology">
            <div className="container">
            <h3 className="techHeader">Technologies I use</h3>
                <div className="container-around-tech">        
                    <div className="row">
                        <div className="col">
                            <img src={html} alt="" />
                        </div>
                        <div className="col">
                            <img src={css} alt="" />
                        </div>
                        <div className="col">
                            <img src={js} alt="" />
                        </div>
                        <div className="col">
                            <img src={react} alt="" />
                        </div>
                        <div className="col">
                            <img src={bootstrap} alt="" />
                        </div>
                        <div className="col">
                            <img src={responsive} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}