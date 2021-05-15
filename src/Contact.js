import React from "react";
import Footer from "./Footer";
import { Card } from "react-bootstrap";

import "./css/Contact.css";

export default function Contact(){
    return(
        <div className="Contact">
            <h1 className="team-up">Wanna team up?</h1>
            <Card className="contact-card">
            <h2 className="get-in-touch">🙋‍♀️Let's get in touch</h2>
            <h3 className="how-to-reach">You can reach me through any of the links below!</h3>
            </Card>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <a href="https://www.linkedin.com/in/emily-slazyk-9b4b16185/" className="contactLinks" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div className="col">
                        <a href="https://github.com/eslazyk10" className="contactLinks"target="_blank" rel="noreferrer"><i class="fab fa-github"></i></a>
                    </div>
                    <div className="col">
                        <a href="mailto:eslazy32@gmail.com" className="contactLinks" target="_blank" rel="noreferrer"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}