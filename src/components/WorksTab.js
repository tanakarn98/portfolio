import React, { useState } from "react";
import WorksCard from "./WorksCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const WorksTab = (props) => {
  let index = 0;
  const subIndex = () => {
    if (props.tabIndex === 0) {
      props.setTabIndex(length - 1);
      index = length - 1;
    } else {
      props.setTabIndex(props.tabIndex - 1);
      index = props.tabIndex - 1;
    }
  };
  const addIndex = () => {
    if (props.tabIndex === length - 1) {
      props.setTabIndex(0);
      index = 0;
    } else {
      props.setTabIndex(props.tabIndex + 1);
      index = props.tabIndex + 1;
    }
  };

  let length = props.data.length;

  const animation = document.getElementById("looping-rhombuses-spinner");

  const addLeftAnimation = () => {
    animation.classList.add("animationLeft");
    setTimeout(() => {
      animation.classList.remove("animationLeft");
    }, 500);
  };
  const addRightAnimation = () => {
    animation.classList.add("animationRight");
    setTimeout(() => {
      animation.classList.remove("animationRight");
    }, 500);
  };

  const indicator = () => {
    let rActive = document.querySelector(".rActive");
    let rSmall = Array.prototype.slice.call(
      document.getElementsByClassName("rSmall")
    );
    if (rActive !== null) {
      rActive.classList.remove("rActive");
    }
    if (rSmall !== null) {
      rSmall.forEach(function (item) {
        item.classList.remove("rSmall");
      });
    }

    if (index === 0) {
      animation.children[0].classList.add("rActive");
      animation.children[2].classList.add("rSmall");
      animation.children[3].classList.add("rSmall");
      animation.children[4].classList.add("rSmall");
    } else if (index === 1) {
      animation.children[1].classList.add("rActive");
      animation.children[3].classList.add("rSmall");
      animation.children[4].classList.add("rSmall");
    } else if (index === props.data.length - 1) {
      animation.children[4].classList.add("rActive");
      animation.children[0].classList.add("rSmall");
      animation.children[1].classList.add("rSmall");
      animation.children[2].classList.add("rSmall");
    } else if (index === props.data.length - 2) {
      animation.children[3].classList.add("rActive");
      animation.children[0].classList.add("rSmall");
      animation.children[1].classList.add("rSmall");
    } else {
      animation.children[2].classList.add("rActive");
      animation.children[0].classList.add("rSmall");
      animation.children[4].classList.add("rSmall");
    }
  };

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
                addRightAnimation();
                indicator();
              }}
              className="arrowIcon"
              id="arrowLeft"
            />

            <div
              className="looping-rhombuses-spinner"
              id="looping-rhombuses-spinner"
            >
              <div className="rhombus rActive"></div>
              <div className="rhombus"></div>
              <div className="rhombus rSmall"></div>
              <div className="rhombus rSmall"></div>
              <div className="rhombus rSmall"></div>
            </div>

            <IoIosArrowRoundForward
              onClick={() => {
                addIndex();
                addLeftAnimation();
                indicator();
              }}
              className="arrowIcon"
              id="arrowRight"
            />
          </div>
        </TabList>
      </Tabs>
    </>
  );
};

export default WorksTab;
