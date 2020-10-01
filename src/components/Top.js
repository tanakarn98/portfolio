import React from "react";
import { BiDownArrow } from "react-icons/bi";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import WorksCard from "./WorksCard";

const Top = () => {
  return (
    <div className="container">
      <div className="hero area">
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
        <div></div>
      </div>
      <div className="works area">
        <WorksCard />
        <div className="toNext">
          <BiDownArrow />
          <BiDownArrow />
          CONTACT
        </div>
        <div className="slideWorks">
          <IoIosArrowRoundBack />
          <p>
            <span>○</span>
            <span>○</span>
            <span>○</span>
            <span>○</span>
            <span>○</span>
          </p>
          <IoIosArrowRoundForward />
        </div>
      </div>
      <div className="contact area"></div>
    </div>
  );
};

export default Top;
