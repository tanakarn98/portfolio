import React from "react";
import WorksCard from "../components/WorksCard";

const Top = (props) => {
  return (
    <>
      <div className="root" id="top">
        <div className="mainTitle">WORKS</div>
        <div className="works">
          {props.data.map((item, i) => {
            return <WorksCard data={item} key={i} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Top;
