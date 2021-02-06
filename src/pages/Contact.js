import React from "react";
import { Link, Route } from "react-router-dom";

import logo from "../images/gif-1.gif"
import Portfolio from "./Portfolio";
import Mailto from var Mailto = require('react-mailto');

function Contact(props) {
  return (
    <div>


      <div className="jumbotron">
        <h1 className="display-4">Contact</h1>
        <p className="lead"> </p>
        <hr className="my-4" />
        

          <main>

            <form>
              <div className="form-group">

                <label for="exampleInputName1"> Name</label>
                <input type="name" className="form-control" id="exampleInputName1" aria-describedby="emailHelp"
                  placeholder=" 👤 Enter Name" required />
              </div>

              <div className="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  placeholder=" ✉️ Enter Email" required />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
              else.</small>
              </div>

              <div className="form-group">
                <label for="exampleInputPassword1">Message</label>
                <input type="message" className="form-control-1" id="exampleInputMessage1" placeholder=" 🙂 Message me..." required />
              </div>

              <div className="form-check">
              <a href={"mailto:almonzorhoden@gmail.com"} target="_blank" rel="noopener noreferrer"><button type="submit" className="btn btn-primary" id="submitBtn">Submit</button></a>
              </div>
            </form>

          </main> <br />

          <button id="GitBtn" className="btn btn-dark" button type="submit">Visit Github</button> <button id="LinkedInBtn" className="btn btn-dark" button type="submit">Visit LinkedIn</button>
    </div>

        <img src={logo} alt="Logo" style={{ margin: "auto" }} />

      </div>
  );
}

export default Contact;
