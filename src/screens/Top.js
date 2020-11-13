import React from "react";
import Footer from "../components/Footer";

const Top = (props) => {
  // console.log(localStorage.getItem("position"));
  // if (!!localStorage.getItem("position")) {
  //   window.onload = function () {
  //     const spinner = document.getElementById("loading");
  //     spinner.classList.add("loaded");
  //     localStorage.setItem("position", "on");
  //     console.log(localStorage.getItem("position"));
  //   };
  // }

  let strage = localStorage.getItem("position");
  console.log(strage);
  if (strage === "on") {
    const spinner = document.getElementById("loading");
    spinner.parentNode.removeChild(spinner);
    localStorage.setItem("position", "off");
  } else if (strage !== "off") {
    localStorage.setItem("position", "on");
    const spinner = document.getElementById("loading");
    spinner.classList.add("loaded");
  }
  console.log("strage2:" + strage);

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

      <Footer />
    </>
  );
};

export default Top;
