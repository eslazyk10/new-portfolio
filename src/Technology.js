import React from "react";

import bootstrap from "./images/bootstrap-logo.png";
import css from "./images/CSS-logo.png";
import react from "./images/React-logo.png";
import js from "./images/Javascript-logo.png";
import responsive from "./images/responsive-logo.png";
import html from "./images/htmlLogo.png";
import python from "./images/python-icon.png";
import node from "./images/node-icon.png";
import linux from "./images/linux-icon.png";
import redux from "./images/Redux-icon.png";
import { Card } from "react-bootstrap";

import "./css/Technology.css";

export default function Technology(){
    return(
        <div className="Technology">
            <div className="container">
            <Card className="tech-card">
            <h3 className="techHeader">Technologies I know</h3>       
                    <div className="row">
                        <div className="col">
                            <img src={html} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={css} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={js} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={react} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={bootstrap} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={responsive} alt="" className="tech-img" />
                        </div>
                    </div>
                </Card>
            </div>
             <div className="container">
            <Card className="tech-card">
            <h3 className="techHeader">Technologies I'm familiar with</h3>       
                    <div className="row">
                        <div className="col">
                            <img src={node} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={python} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={linux} alt="" className="tech-img" />
                        </div>
                        <div className="col">
                            <img src={redux} alt="" className="tech-img" />
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}