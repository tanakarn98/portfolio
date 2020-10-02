import React, { useState } from "react";
import WorksCard from "./WorksCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const WorksTab = (props) => {
  const subIndex = () => {
    props.setTabIndex(props.tabIndex - 1);
    if (props.tabIndex === 0) {
      props.setTabIndex(length - 1);
    }
  };
  const addIndex = () => {
    props.setTabIndex(props.tabIndex + 1);
    if (props.tabIndex === length - 1) {
      props.setTabIndex(0);
    }
  };

  let length = props.data.length;
  // if (props.tabIndex === 0) {
  //   const newActiveIndex = document.querySelector(``);
  //   newActiveIndex.classList.add("active");
  // } else if (props.tabIndex === 1) {
  // } else if (props.tabIndex === props.data.length - 2) {
  // } else if (props.tabIndex === props.data.length - 1) {
  // } else {
  // }
  return (
    <>
      <Tabs
        selectedIndex={props.tabIndex}
        onSelect={(index) => props.setTabIndex(index)}
      >
        {props.data.length ? (
          props.data.map((item, i) => (
            <TabPanel>
              <WorksCard data={item} />
            </TabPanel>
          ))
        ) : (
          <p>Now Loading...</p>
        )}

        <TabList>
          <div className="slideWorks">
            <IoIosArrowRoundBack
              onClick={() => {
                subIndex();
              }}
              className="arrowIcon"
            />
            <p className="indicator">
              <span>○</span>
              <span>○</span>
              <span>○</span>
              <span>○</span>
              <span>○</span>
            </p>
            <IoIosArrowRoundForward
              onClick={() => {
                addIndex();
              }}
              className="arrowIcon"
            />
          </div>
        </TabList>
      </Tabs>
    </>
  );
};

export default WorksTab;
