import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Video from "./images/Midnight_moon2.mp4"


function App() 
{
  return (
    <Router>
      <div>
        <NavBar />
        <video id="myVideo" loop muted autostart autoPlay src={Video} type="video/mp4" />
          <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path = "/react-portfolio" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
