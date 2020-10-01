import React from "react";
import { RiHomeLine } from "react-icons/ri";
import { FiAtSign } from "react-icons/fi";

const Navbar = () => {
  return (
    <navbar>
      <div className="navbar">
        <RiHomeLine />
        <p>-</p>
        <p className="worksCount"> 1 / 15 </p>
        <p>-</p>
        <FiAtSign />
      </div>
      <div className="navbarRight">Rina.O</div>
    </navbar>
  );
};

export default Navbar;
