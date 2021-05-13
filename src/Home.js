import React from "react";
import Intro from "./Intro";
import About from "./About";
import Footer from "./Footer";

export default function Home(){
    return(
        <div className="Home">
            <Intro />
            <About />
            <Footer />
        </div>
    );
}