import React from "react";
import "../stylesheets/Portfolio.css"
import "../script/main.js"

 
function Portfolio() 
{
  return (
    <div>

<div class="container">
      
    {/*  Box-1 */}
    <div class="jumbotron">
      <h2 class="glow">Covid-19 App</h2>
      <div class="Box-1"></div> <br/>
      <p>An app that helps you get tested for Covid-19.</p>
      <button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button>
      <button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-2 */}
    <div class="jumbotron">
      <h2 class="display-5">Book Book</h2>
      <div class="Box-2"></div> <br/>
      <p> An app that let's you read and checkout books online.</p>
      <button id="BookBtn" class="btn btn-dark" button type="submit">Visit Page</button>
      <button id="BookGitBtn" class="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-3 */}
    <div class="jumbotron" id='align-jumbo'>
      <h2 class="display-5">Weather-Board</h2>
      <div class="Box-3"></div> <br/>
      <p> An app that let's you check your local weather forecast.</p>
      <button id="weatherBtn" class="btn btn-dark" button type="submit">Visit Page</button>
      <button id="weatherGitBtn" class="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    {/* Box-4 */}
    <div class="jumbotron" id='align-jumbo'>
      <h2 class="display-5">Eat-The-Burger</h2>
      <div class="Box-4"></div> <br/>
      <p> An app that let's you eat burgers, just yummy.</p>
      <button id="burgerBtn" class="btn btn-dark" button type="submit">Visit Page</button>
      <button id="burgerGitBtn" class="btn btn-dark" button type="submit">Visit Github</button>
    </div>

    </div>

 </div>
  );
}



export default Portfolio;
