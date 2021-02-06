import React from "react";
import "../stylesheets/Portfolio.css"
import "../script/Portfolio.js"

import { Link, Route } from "react-router-dom";

 

function Portfolio() 
{
  return (
    <div>

<div class="container">



    {/*  Box-1 */}
    <div class="jumbotron ipad zoom">
      <h2 class="glow">Covid-19 App</h2>
      <div class="Box-1"></div> <br/>
      <p>An app that helps you get tested for Covid-19.</p>
      <a href = 'https://almonzorhoden.github.io/covid-19-app/'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/covid-19-app'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

    {/* Box-2 */}
    <div class="jumbotron ipad zoom">
      <h2 class="display-5">Book Book</h2>
      <div class="Box-2"></div> <br/>
      <p> An app that let's you read and checkout books online.</p>
      <a href = 'https://book-book-almonzo.herokuapp.com/login'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/book-book'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

    {/* Box-3 */}
    <div class="jumbotron ipad zoom" id='align-jumbo'>
      <h2 class="display-5">Weather-Board</h2>
      <div class="Box-3"></div> <br/>
      <p> An app that let's you check your local weather forecast.</p>
      <a href = 'https://almonzorhoden.github.io/weather-dashboard/'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/weather-dashboard'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

    {/* Box-4 */}
    <div class="jumbotron ipad zoom" id='align-jumbo'>
      <h2 class="display-5">Eat-The-Burger</h2>
      <div class="Box-4"></div> <br/>
      <p> An app that let's you eat burgers, just yummy.</p>
      <a href = 'https://almonzo-eat-the-burger.herokuapp.com/'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/burger'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

      {/* Box-5 */}
      <div class="jumbotron ipad zoom" id='align-jumbo'>
      <h2 class="display-5">Day-Planner</h2>
      <div class="Box-5"></div> <br/>
      <p> An app that let's you plan out your day</p>
      <a href = 'https://almonzorhoden.github.io/day-planner/'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/day-planner'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

      {/* Box-6 */}
      <div class="jumbotron ipad zoom" id='align-jumbo'>
      <h2 class="display-5">Fitness-Tracker</h2>
      <div class="Box-6"></div> <br/>
      <p> An app that let's you stay fit and monitor workouts</p>
      <a href = 'https://almonzo-fitness-tracker.herokuapp.com/'target = '_blank' rel = 'noreferrer'><button id="testingBtn" class="btn btn-dark" button type="submit">Visit Page</button></a>
      <a href = 'https://github.com/AlmonzoRhoden/fitness-tracker'target = '_blank' rel = 'noreferrer'><button id="testingGitBtn" class="btn btn-dark" button type="submit">Visit Github</button></a>
    </div>

    </div>

 </div>
  );
}



export default Portfolio;
