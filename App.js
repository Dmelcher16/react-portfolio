import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./src/components/NavTabs";
import Home from "./src/components/pages/Home";
import Portfolio from "./src/components/pages/Portfolio";
import Contact from "./src/components/pages/Contact";
import "./components/style.css";
import Footer from "./src/components/Footer/index.js";


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