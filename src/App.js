import "./App.css";
import ScrollAnimation from "react-animate-on-scroll";
import { Link } from "react-scroll";
import { useState } from 'react';

import Navbar from "./components/Navbar.js";
import EnterButton from "./components/EnterButton";
import About from "./components/About.js";
import Works from "./components/Works.js";
import Contact from "./components/Contact.js";


const App = () => {

const [hamburgerOpen, setHamburgerOpen] = useState(false);
const hamburgerHandler = () => { setHamburgerOpen(!hamburgerOpen) };

  return (
    <div className="App">
        <div className="home" id="home">
          <header className="header">
            <Navbar hamburgerHandler={hamburgerHandler} hamburgerOpen={hamburgerOpen}/>

            <div className="header-icons">
              <a href="https://github.com/RLPedro" target="_blank" rel="noreferrer">
                <i className="fab fa-github github-icon"></i>
              </a>
              <a href="https://instagram.com/ricode.tech" target="_blank" rel="noreferrer">
                <i class="fab fa-instagram instagram-icon"></i>
              </a>
              <a href="https://www.linkedin.com/in/ricardoleitaopedro/" target="_blank" rel="noreferrer">
                <i class="fab fa-linkedin linkedin-icon"></i>
              </a>
              <br />
            </div>

            <ScrollAnimation animateIn="fadeIn" duration={3}>
              <Link smooth to="home" style={linkStyle}>
                <h1 className="app__title">RICARDO LEITÃO PEDRO</h1>
                </Link>
            </ScrollAnimation>
          </header>

          <ScrollAnimation animateIn="fadeIn" duration={5}>
            <section className="app__presentation">
              <h2 className="app__subtitle">portfolio</h2>
              <h2 className="app__desc">full-stack web development</h2>
            </section>
          </ScrollAnimation>

          <EnterButton />
        </div>

        <ScrollAnimation animateIn="fadeIn" duration={3}>
          <About />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={3}>
          <Works />
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeIn" duration={3}>
          <Contact />
        </ScrollAnimation>
    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default App;
