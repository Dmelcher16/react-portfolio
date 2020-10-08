import React from "react";
import "./styles/home_styles.css";


function Contact(props) {
  return (
    <div>
      <section className="" alt="this contains and pushes the main content in/our when you resize">
        <section className="jumbotron text-left myAdj" id="addDarkGrey">
          <div className="container border rounded border border-dark bg-white"
            alt="Main Container that holds the contact form">
            <div className="container mt-2">
              <div className="row">
                <h1 className="ml-0 mt-4 text-success">My contact info</h1>
              </div>
              <div className="div">
                <hr />
              </div>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="Email Dakota.">  
                <h4><h4>Email:<a className="col-2 text-primary" href="mailto:melcher16@gmail.com.com">melcher16@gmail.com</a></h4></h4> 
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="My Resume">
                <h4><a className="text-danger" href="#">Resume</a></h4>
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="LinkedIn">
                <h4><a className="text-info" href="www.linkedin.com/in/dakota-melcher-b582901b1">LinkedIn</a></h4>
              </section>
            </div>
            <div className="col-dm-12 mb-4">
              <section alt="GitHub">
                <h4><a className="text-secondary" href="https://github.com/Dmelcher16">GitHub</a></h4>
              </section>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default Contact;