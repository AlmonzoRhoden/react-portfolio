// Including program components
import React from "react";
import "../stylesheets/About.css";
import logo from "../images/almonzo-img.png";
import sound from "../images/deep_space2.mp3"
import resume from "../images/Rhoden_Resume.pdf"
import { Link } from "react-router-dom";


// Re-usable code, Bootstrap jumbotron
function About() {
  return (
    <div>

      {/* Bootstrap jumbotron start*/}
      <div className="jumbotron contact-ipad margin jumbotron-2" style={{ maxWidth: "80rem", borderRadius: "10px" }}>
        <div className="container">
          <h1 className="display-5">About Me</h1>
          <hr className="my-4" />

          {/*eslint-disable-next-line */}
          <img id="almonzo-img" src={logo} alt="almonzo-image" />

          {/* About me section*/}
          <p>
            Hi! Welcome to my page! I'm a <u>Front-End Developer</u> based in North Jersey leveraging an Information Systems degree from Rutgers University and
    customer service background to build quality user experiences in mobile and web applications. <br /> <br />

            <strong>Recently earned a
    certificate in Full Stack Development from Rutgers University, enhancing my skills in the following below:</strong>

            <ul>
              <br />
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Jquery</li>
              <li>Bootstrap</li>
              <li>Material-UI</li>
              <li>Responsive Web Design</li>
              <li>API</li>
              <li>Node</li>
              <li>Express</li>
              <li>Heroku</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>React.js</li>
              <li>Working collaboratively with other developers via Github</li>
            </ul>

    Passionate about creating beautiful simplistic
    life-enhancing applications and collaborating with others to develop
    beautiful meaningful innovative experiences. <br /> <br />

    My previous work in Information Technology over the years, combined with an
    authentic customer service approach, will allow me to provide unique ideas on how people interact with websites
    and software platforms. Feel free to check out my <Link to="/portfolio">portfolio</Link> or <Link to="/contact">contact </Link> me to learn more thank you.   <br />

            <br />

            {/* Calming background music */}
            <p>False Astronomy ♫</p>
            <audio controls loop id="myaudio">
              <source src={sound} type="audio/mpeg" />
            </audio>
          </p>




        </div>

      </div>

      <br />

      {/* Resume section */}
      <div className="card border-dark mb-1" style={{ maxWidth: "80rem", maxHeight: "40rem" }}>
        <div className="card-header"><strong>Let's connect</strong></div>
        <div className="contact-body text-dark">
          <br />

          <p><a href="mailto: almonzo.rhoden@gmail.com"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
          </svg> AlmonzoRhoden@gmail.com</a></p>


          <p> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
          </svg> 862-438-2135</p>

          {/*eslint-disable-next-line */}
          <iframe src={resume} width="100%" height="300px" ></iframe>
          <strong><p>If your browser does not support this PDF, please click here to download: <a href="./assets/images/Rhoden_Resume.pdf" target='_blank' rel='noreferrer'>Download PDF</a></p></strong>
        </div>
      </div>

      <br />

    </div>

  );
}

export default About;