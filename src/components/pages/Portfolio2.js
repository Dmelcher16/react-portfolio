import React from "react";
import VBS from "../img/VBS.png";
import QzTmp from "../img/QzTmp.png";
import PT from "../img/portfolioTemplate.png";
import EGT from "../img/EGT.jpg";
import wdb from "../img/wdb.jpg";
import pwa from "../img/pwa.png";
import "./styles/home_styles.css";


function About() {
  return (
    <section className="" alt="this contains and pushes the main content in/out when you resize">
      <section className="jumbotron text-left myAdj" alt="This tag contains the main content" id="addDarkGrey">
        <div className="container border rounded border border-dark bg-white" alt="Main Container that holds the grid">
          <div className="container mt-4">
            <h1 className="ml-4 mt-3"> Dakota's Portfolio</h1>
          </div>

          <section alt="A responsive image grid by Joe Farrish">
            
            <div className="row"> 
              <div className="col-md-4">
                <a href="https://magic-the-gabbering.herokuapp.com/" target="_blank">
                     <img src={} 
                     className="img-fluid p-4 m-2" alt="#"/> </a>
                  <h6>Magic the Gabbering</h6>
                  <p>Checkout this group project! We made an app revolving around a popular card game where people can post about their favorite cards. They can also recieve comments on their posts.</p> 
              </div>

              <div className="col-md-4">
                <a href="https://dmelcher16.github.io/day-scheduler/" target="_blank"> <img src={}
                  className="img-fluid p-4 m-2" alt="day-scheduler app"/></a>
                  <h6>Day Scheduler</h6><p>Checkout this planner that can help you keep your day organized. It will allow you to add events at specific times and show you which times have already passed.</p> 
              </div>  

              {/* <div className="col-md-4">
                <a href="https://joejoe909.github.io/ResponsivePortfolio/index.html" target="_blank"> <img src={PT} className="img-fluid p-4 m-2" alt="Responsive image"/> </a>
                  <h6>Portfolio Template.</h6>
                  <p>This is another template project which consists of HTML,CSS and utilizes the Bootstrap CSS library. As a developer I like making reusable components which is why I like making templates.</p>
              </div> */}

              <div className="col-md-4">
                <a href="https://dmelcher16.github.io/EZ-geo-tracker/" target="_blank"> <img src={EGT} className="img-fluid p-4 m-2" alt="Responsive image"/> </a>
                  <h6>Ez Geo-Tracker.</h6>
                  <p>This is an app that loads a couple of interactive maps. One that shows NASA satellite images based on a chosen location and also a google maps style image for the same location. This is done through the use of the NASA image API and the HERE API.</p>
              </div>

              {/* <div className="col-md-4">
                <a href="https://github.com/joejoe909/PWA-Online-Offline-Budget-Trackers" target="_blank"> <img src={pwa} className="img-fluid p-4 m-2" alt="Responsive image" /> </a>
                <h6>Budget Tracker</h6>
                <p>This is a simple Progressive Web App that can be installed on your phone or PC. Once installed, it acts more like an application than a web page.</p>
              </div> */}



            
            
            </div>
          </section>  
        </div>
      </section>
    </section>

  );
}

export default About;