import React from "react";
import WorksCard from "../components/WorksCard";

const Top = (props) => {
  return (
    <>
      <div className="root">
        {props.data.map((item, i) => {
          return <WorksCard data={item} key={i} />;
        })}
      </div>
    </>
  );
};

export default Top;
