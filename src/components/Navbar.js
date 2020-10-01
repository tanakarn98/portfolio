import React, { useState, useEffect } from "react";
import { RiHomeLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";

const Navbar = () => {
  const [scroll, setScroll] = useState(0);
  const [prevScroll, setPrevScroll] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", (event) => scrollTop(), true);
  }, []);

  const scrollTop = () => {
    let x = Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
      window.scrollY
    );
    setScroll(x);
    // console.log(x);
  };

  let timeoutId;
  let count = 0;

  return (
    <nav>
      <div className="navbar">
        <RiHomeLine />
        <p>-</p>
        <p className="worksCount"> 1 / 15 </p>
        <p>-</p>
        <FiAtSign />
      </div>
      <div className="navbarRight">Rina.O</div>
    </nav>
  );
};

export default Navbar;
