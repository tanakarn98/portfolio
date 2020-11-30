import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <nav>
        <p>
          <HashLink to="/#top">R</HashLink>
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
              <HashLink
                to="/#top"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                TOP / ABOUT
              </HashLink>
            </p>
            <p>
              <HashLink
                to="/works#top"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                WORKS
              </HashLink>
            </p>
            <p>
              <HashLink
                to="#contact"
                onClick={() => {
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                CONTACT
              </HashLink>
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
