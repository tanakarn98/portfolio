import React, { useState, useEffect } from "react";
import { RiHomeLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = (props) => {
  const areas = document.querySelectorAll(".area");

  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0,
  };
  const observer = new IntersectionObserver(doWhenIntersect, options);
  areas.forEach((area) => {
    observer.observe(area);
  });

  function doWhenIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activateIndex(entry.target);
      }
    });
  }
  function activateIndex(element) {
    const currentActiveIndex = document.querySelector("#navbar .active");

    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove("active");
    }
    const newActiveIndex = document.querySelector(`a[href='#${element.id}']`);
    newActiveIndex.classList.add("active");
  }

  return (
    <nav>
      <div className="navbar" id="navbar">
        <AnchorLink href="#hero">
          <RiHomeLine className="navbarIcon" />
        </AnchorLink>
        <p className="hyphen">-</p>
        <AnchorLink href="#works">
          <p className="worksCount">
            {props.tabIndex + 1} / {props.data.length}
          </p>
        </AnchorLink>
        <p className="hyphen">-</p>
        <AnchorLink href="#contact" className="navbarIcon">
          <FiAtSign className="navbarIcon" />
        </AnchorLink>
      </div>
      <div className="navbarRight">Rina.●</div>
    </nav>
  );
};

export default Navbar;
