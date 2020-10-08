import React from "react";
import "./styles/home_style.css";


function Contact(props) {
  return (
    <div>
      <section className="" alt="this contains and pushes the main content in/our when you resize">
        <section className="jumbotron text-left myAdj" id="addDarkGrey">
          <div className="container border rounded border border-dark bg-white"
            alt="Main Container that holds the contact form">
            <div className="container mt-2">
              <div className="row">
                <h1 className="ml-0 mt-4 text-success">How to contact Joe Farrish</h1>
              </div>
              <div className="div">
                <hr />
              </div>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="Email Joseph Farrish.">  
                <h4><h4>Email:<a className="col-2 text-primary" href="mailto:joseph_a_f@hotmail.com">joseph_a_f@hotmail.com</a></h4></h4> 
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="Download Joe Farrish's Resume.">
                <h4><a className="text-danger" href="https://drive.google.com/file/d/1GKverFkQ2kJCvslThb2zZZ9K2_0wmKl7/view?usp=sharing">Resume</a></h4>
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="LinkedIn">
                <h4><a className="text-info" href="https://www.linkedin.com/in/joseph-farrish-17b03216/">LinkedIn</a></h4>
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="GitHub">
                <h4><a className="text-secondary" href="https://github.com/joejoe909">GitHub</a></h4>
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;