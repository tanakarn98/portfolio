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
          <div className="linkContainer">
            <p>
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                TOP / ABOUT
              </Link>
            </p>
            <p>
              <Link
                to="/works"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                WORKS
              </Link>
            </p>
            <p>
              <Link
                to="/"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                CONTACT
              </Link>
            </p>
          </div>
        </div>
      ) : (
        <div className="menuModal close"></div>
      )}
    </>
  );
};

export default Navbar;
