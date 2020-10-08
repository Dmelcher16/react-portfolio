import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import "./styles/home_styles.css";


function Home() {
  return (

    <section className="" alt="this contains and pushes the main content in/our when you resize">
      <Jumbotron className="jumbotron text-left myAdj" id="addDarkGrey">
        <Container className="container border rounded border border-dark bg-white ">
          <div>
            <h1>Home Page</h1>

            <img className="floatImgLeft" src="" alt="" />

            <p> Hi my name is Dakota Melcher. Originally I'm from Benson, AZ. A small town southeast of Tucson. I now currently reside in Tucson, AZ. </p>

            <p>I have recently gained some new skills in coding. I have been working with and learning languages like html, css, javascript, ReactJS, and some others.</p>

            <p>Please feel free to check out my portfolio and contact me through my email or linkedin account.</p>

          </div>
        </Container>
      </Jumbotron>
    </section>

  );
}

export default Home;