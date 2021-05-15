import React from "react";
import dictionary from "./images/react-dictionary.png";
import weather from "./images/react-weather.png";
import jsweather from "./images/vanilla-weather.png";
import counter from "./images/vanilla-countdown.png";
import { Button, Carousel } from "react-bootstrap";
import Footer from "./Footer";

import "./css/Projects.css";



export default function Projects(){
    return(
        <div className="Projects">
            <h2 className="projects-title">Projects</h2>
        <Carousel fade className="carousel">
  <Carousel.Item>
    <img
      className="d-block c-img"
      src={dictionary}
      alt="First slide"
    />
    <Carousel.Caption className="c-caption">
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block c-img"
      src={weather}
      alt="Second slide"
    />

    <Carousel.Caption className="c-caption">
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block c-img"
      src={jsweather}
      alt="Third slide"
    />

    <Carousel.Caption className="c-caption">
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
                </Carousel.Item>
        <Carousel.Item>
    <img
      className="d-block c-img"
      src={counter}
      alt="Fourth slide"
    />

    <Carousel.Caption className="c-caption">
      <h3>Fourth slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <Footer />
        </div>
    )
}