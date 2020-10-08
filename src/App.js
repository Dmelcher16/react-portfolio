import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import "./components/style.css";
import Footer from "./components/Footer/index.js";


function App() {
  return (
    <Router>
      <div>
        <NavTabs className = "NavTabs"/>
        <Route exact path="/" component={Home} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route path="/Contact" component={Contact} />
      </div> 
      <Footer />       
    </Router>
    
  );
}

export default App;