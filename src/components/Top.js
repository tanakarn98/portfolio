import React, { useState } from "react";
import { BiDownArrow } from "react-icons/bi";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import WorksTab from "../components/WorksTab";

const Top = () => {
  const [tabIndex, setTabIndex] = useState(0);
  return (
    <div className="container">
      <div className="hero area" id="hero">
        <p>
          Rina
          <br />
          Ohmura
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
        <WorksTab />
        <div className="toNext">
          <BiDownArrow />
          <BiDownArrow />
          CONTACT
        </div>
      </div>
      <div className="contact area" id="contact">
        <li>
          <FaTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaFacebook />
        </li>
        <footer>(c)2020 Rina Ohmura all rights reserved.</footer>
      </div>
    </div>
  );
};

export default Top;
