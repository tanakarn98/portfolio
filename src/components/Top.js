import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import WorksTab from "../components/WorksTab";
import Navbar from "../components/Navbar";

const Top = (props) => {
  const [tabIndex, setTabIndex] = useState(0);
  window.onload = function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };
  return (
    <>
      <div id="loading">
        <div class="half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </div>
      <Navbar data={props.data} tabIndex={tabIndex} />
      <div className="container">
        <div className="hero area" id="hero">
          <p>
            <span>R</span>ina
            <br />
            <span>O</span>hmura
            <br />
            Portfolio...
          </p>
          <div className="toNext">
            <BiDownArrow />
            <BiDownArrow />
            WORKS
          </div>
        </div>
        <div className="works area" id="works">
          <WorksTab
            setTabIndex={setTabIndex}
            tabIndex={tabIndex}
            data={props.data}
          />
          <div className="toNext">
            <BiDownArrow />
            <BiDownArrow />
            CONTACT
          </div>
        </div>
        <div className="contact area" id="contact">
          <a href="https://twitter.com/tanakarn98">
            <li>
              <FaTwitter />
            </li>
          </a>
          <a href="https://www.instagram.com/tanakarn98/">
            <li>
              <FaInstagram />
            </li>
          </a>
          <a href="https://www.facebook.com/profile.php?id=100022723070269">
            <li>
              <FaFacebook />
            </li>
          </a>
          <footer>(c)2020 Rina Ohmura all rights reserved.</footer>
        </div>
      </div>
    </>
  );
};

export default Top;
