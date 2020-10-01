import React, { useState } from "react";
import WorksCard from "./WorksCard";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

const WorksTab = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const subIndex = () => {
    setTabIndex(tabIndex - 1);
    if (tabIndex === 0) {
      setTabIndex(length - 1);
    }
  };
  const addIndex = () => {
    setTabIndex(tabIndex + 1);
    if (tabIndex === length - 1) {
      setTabIndex(0);
    }
  };

  let length = 3;
  return (
    <>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabPanel>
          <WorksCard title="title1" />
        </TabPanel>
        <TabPanel>
          <WorksCard title="title2" />
        </TabPanel>
        <TabPanel>
          <WorksCard title="title3" />
        </TabPanel>

        <TabList>
          <div className="slideWorks">
            <IoIosArrowRoundBack
              onClick={() => {
                subIndex();
              }}
            />
            <p>
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
            />
          </div>
        </TabList>
      </Tabs>
    </>
  );
};

export default WorksTab;
