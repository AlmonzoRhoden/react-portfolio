// Including program components
import React from "react";
import { Link, useLocation } from "react-router-dom";
import  "../stylesheets/NavBar.css"

// Re-usebale code, Navbar component
function NavBar() {
  // This allows the component to check the route any time the user uses a link to navigate.
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Adding eslint to make code cleaner while incorporating bootstrap*/}
     {/* eslint-disable-next-line */}
      <a className="navbar-brand justify-content-end ">Almonzo Rhoden</a>

      {/* Navbar button for mobile phones */}
      <button className="navbar-toggler justify-content-end" type="button" data-toggle="collapse"
        data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false"
        aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">

            {/* Home Nav link code */}
            <a className="nav-link">
              <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                About
              </Link><span className="sr-only">(current)</span>
            </a>
          </li>

          {/* Nav Portfolio link  */}
          <li className="nav-item">
            <a className="nav-link">
              <Link
                to="/portfolio"
                className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
              >
                Portfolio
      </Link>
            </a>
          </li>

          {/* Nav Contact link  */}
          <li className="nav-item">
            <a className="nav-link">
              <Link
                to="/contact"
                className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
              >
                Contact
        </Link>
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default NavBar;
