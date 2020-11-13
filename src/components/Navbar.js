import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <p>
          <Link to="/">R</Link>
        </p>
        <div
          className="lineContainer"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <div className={`line ${isMenuOpen ? "cross" : null}`}>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      {isMenuOpen ? (
        <div className="menuModal open">
          <p>TOP / ABOUT</p>
          <p>WORKS</p>
          <p>CONTACT</p>
        </div>
      ) : (
        <div className="menuModal close"></div>
      )}
    </>
  );
};

export default Navbar;
