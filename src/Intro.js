import React from "react";
import bootstrap from "./images/bootstrap-logo.png";
import css from "./images/CSS-logo.png";
import react from "./images/React-logo.png";
import js from "./images/Javascript-logo.png";
import responsive from "./images/responsive-logo.png";
import html from "./images/htmlLogo.png";

import "./Intro.css";

export default function Intro(){
    return(
        <div className="Intro">
            <section>
            <h1 className="name">Emily Slazyk</h1>
            <h3 className="position"><i class="fas fa-angle-left"></i>Front End Developer/<i class="fas fa-angle-right"></i></h3>
            <h5 className="location">Based in Nashville, TN</h5>
            </section>
            <section className="skills">
                <h3>Technologies I use</h3>
                <div className="container">
                    <div className="row">
                        <div className="col-md-2">
                            <img src={html} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={css} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={js} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={react} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={bootstrap} alt="" />
                        </div>
                        <div className="col-md-2">
                            <img src={responsive} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}