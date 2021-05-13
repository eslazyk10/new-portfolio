import React from "react";


import "./css/Intro.css";

export default function Intro(){
    return(
        <div className="Intro">
            <section>
            <h1 className="name">Emily Slazyk</h1>
            <h3 className="position"><i class="fas fa-angle-left"></i>Front End Developer/<i class="fas fa-angle-right"></i></h3>
            <h5 className="location">Based in Nashville, TN</h5>
            </section>
        </div>
    );
}