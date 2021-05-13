import React from "react";
import Intro from "./Intro";
import About from "./About";

export default function Home(){
    return(
        <div className="Home">
            <Intro />
            <About />
        </div>
    );
}