import React from "react";
import { FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import WorksCard from "./WorksCard";
// import Navbar from "../components/Navbar";

const Top = (props) => {
  window.onload = function () {
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  };

  let dataLayer = (window.dataLayer = window.dataLayer || []);
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-MS1DY33PDX");
  gtag("config", "UA-151346291-2");

  return (
    <>
      <div id="loading">
        <div class="half-circle-spinner">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
        </div>
      </div>
      {/* <Navbar data={props.data} tabIndex={tabIndex} /> */}

      <div className="hero">
        <div className="topCard">
          <p>RINAOHMURA</p>
        </div>
      </div>
      <div className="works root">
        {props.data.map((item, i) => {
          return <WorksCard data={item} key={i} />;
        })}
      </div>
      <div className="contact">
        <a
          href="https://twitter.com/tanakarn98"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaTwitter />
          </li>
        </a>
        <a
          href="https://www.instagram.com/tanakarn98/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaInstagram />
          </li>
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100022723070269"
          target="_blank"
          rel="noopener noreferrer"
        >
          <li>
            <FaFacebook />
          </li>
        </a>
        <footer>(c)2020 RINA OHMURA all rights reserved.</footer>
      </div>
    </>
  );
};

export default Top;
