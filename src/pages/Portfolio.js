import React from "react";
import "../stylesheets/Portfolio.css"
import "../script/main.js"



function Portfolio() 
{
  return (
    <div>

<div class="container">
      
    {/*  Box-1 */}
    <div className="jumbotron">
      <h2 className="glow">Covid-19 App</h2>
      <div className="Box-1"></div> <br/>
      <p>An app that helps you get tested for Covid-19.</p>
      <button id="testingBtn" className="btn btn-dark" button type="submit">Visit Page</button>
      <button id="testingGitBtn" className="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-2 */}
    <div className="jumbotron">
      <h2 className="display-5">Book Book</h2>
      <div className="Box-2"></div> <br/>
      <p> An app that let's you read and checkout books online.</p>
      <button id="BookBtn" className="btn btn-dark" button type="submit">Visit Page</button>
      <button id="BookGitBtn" className="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-3 */}
    <div className="jumbotron" id='align-jumbo'>
      <h2 className="display-5">Weather-Board</h2>
      <div className="Box-3"></div> <br/>
      <p> An app that let's you check your local weather forecast.</p>
      <button id="weatherBtn" className="btn btn-dark" button type="submit">Visit Page</button>
      <button id="weatherGitBtn" className="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-4 */}
    <div className="jumbotron" id='align-jumbo'>
      <h2 className="display-5">Eat-The-Burger</h2>
      <div className="Box-4"></div> <br/>
      <p> An app that let's you eat burgers, just yummy.</p>
      <button id="burgerBtn" className="btn btn-dark" button type="submit">Visit Page</button>
      <button id="burgerGitBtn" className="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    </div>
  </div>
  );
}

export default Portfolio;
