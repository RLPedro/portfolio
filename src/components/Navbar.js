import "./styles/Navbar.css";
import { Link } from "react-scroll";
import { useState } from 'react';
import Hamburger from "./Hamburger.js";

const Navbar = ({hamburgerHandler, hamburgerOpen}) => {

  const [navOpen, setNavOpen] = useState(false);
  const navHandler = () => { setNavOpen(!navOpen) };

  const menuHandler = () => {
    hamburgerHandler();
    navHandler();
  }

  return (
    <div className="navbar-container">

      <div className="hamburger-container" onClick={menuHandler}>
        <Hamburger hamburgerOpen={hamburgerOpen}/>
      </div>

      <div className="navbar">
        <Link smooth to="about" style={linkStyle}>
          <h3 className="navbar__item">about me</h3>
        </Link>
        <Link smooth to="works" style={linkStyle}>
          <h3 className="navbar__item">projects</h3>
        </Link>
        <Link smooth to="contact" style={linkStyle}>
          <h3 className="navbar__item">contact</h3>
        </Link>
      </div>

      {navOpen && <div className="navbar-menu">
        <Link smooth to="about" style={linkStyle} onClick={menuHandler}>
          <h3 className="navbar__item">about me</h3>
        </Link>
        <Link smooth to="works" style={linkStyle } onClick={menuHandler}>
          <h3 className="navbar__item">projects</h3>
        </Link>
        <Link smooth to="contact" style={linkStyle} onClick={menuHandler}>
          <h3 className="navbar__item">contact</h3>
        </Link>
      </div>
      }



      {/* <style jsx="true">{`
        .navigation-container {
          position: absolute;
          width: 50px;
          margin: 0 0.5rem 0 0.5rem;
        }
        .navigation {
          width: 100%;
        }
        .navigation ul {
          display: ${hamburgerOpen ? 'inline' : 'none'};
          color: white;
          height: 100vh;
          width: 25vw;
          margin-top: 50px;
          padding: 0;
          position: absolute;
        }
        
        .navigation ul li {
          list-style-type: none;
          // padding-right: 10px;
        }
        .hamburger-container {
          margin: 0;
          padding: 0;
        }
    `}</style> */}

    </div>
  );
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

export default Navbar;
