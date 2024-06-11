import React, { useState } from "react";
import logo from "../../images/logo.png";
import "../../styles/navlink.css";

const Navpar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = (route) => {
    window.location.href = route;
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="nav-container">
      <div className="nav-content">
        <div className="logo-container">
          <img src={logo} alt="" className="logo" />
        </div>
        <div className={`nav-links ${isOpen ? "hidden md:flex" : "md:flex"}`}>
          <div
            className="nav-link"
            onClick={() => handleCardClick("/landingpage")}
          >
            Home
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Apout")}>
            About
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Services
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Contact
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Blog
          </div>
        </div>
        <div className="menu-toggle md-hidden">
          <button className="menu-button" onClick={toggleMenu}>
            <svg
              className="menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="mobile-menu md-hidden">
          <div className="nav-link" onClick={() => handleCardClick("/Apout")}>
            About
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Contact
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Services
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Contact
          </div>
          <div className="nav-link" onClick={() => handleCardClick("/Contact")}>
            Blog
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navpar;
