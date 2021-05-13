import React from "react";
import dictionary from "./images/react-dictionary.png";
import weather from "./images/react-weather.png";
import jsweather from "./images/vanilla-weather.png";
import countdown from "./images/vanilla-countdown.png";
import Footer from "./Footer";

import "./css/Projects.css";

export default function Projects(){
    return(
        <div className="Projects">
            <section>
                <h2 className="projects-title">Personal Projects </h2>
                <div className="project-block">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={dictionary} alt="Dictionary App" className="project-img"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="description">Created with React framework utilizing responsive design, Bootstrap, CSS for styling and REST API’s for data. 
                            Application allows user to search words and provides definition, pronunciation, examples of word, synonyms, and images related to search.
                            </h4> 
                        </div>
                    </div>
                    <button><a href="https://agitated-pasteur-f0e70a.netlify.app/" target="_blank" rel="noreferrer">Open Project</a></button>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={weather} alt="React Weather App" className="project-img"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="description">Created with React framework utilizing responsive design, Bootstrap, CSS for styling and REST API’s for data. 
                            Application provided user of real-time weather data for searched location and provides 6-day forecast with animated weather icons. 
                            </h4> 
                        </div>
                    </div>
                    <button><a href="https://thirsty-knuth-10e23b.netlify.app/" target="_blank" rel="noreferrer">Open Project</a></button>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={jsweather} alt="Vanilla JS Weather" className="project-img"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="description">Created using JavaScript utilizing Bootstrap and CSS for styling and REST API’s for data. 
                            Application provides real-time weather data and 3-hour forecast for either user’s current location or searched city.
                            </h4> 
                        </div>
                    </div>
                    <button><a href="https://awesome-hopper-f9a643.netlify.app/" target="_blank" rel="noreferrer">Open Project</a></button>
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={countdown} alt="Vanilla JS Countdown Ad" className="project-img"/>
                        </div>
                        <div className="col-lg-6">
                            <h4 className="description">Created using JavaScript and Bootstrap and CSS for styling. 
                            Mock phone giveaway ad with clock continuously updating and counting down to "giveaway day". 
                            Expiration message with be displayed once time runs out.
                            </h4> 
                        </div>
                    </div>
                    <button><a href="https://jovial-neumann-43490f.netlify.app/" target="_blank" rel="noreferrer">Open Project</a></button>
                </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}