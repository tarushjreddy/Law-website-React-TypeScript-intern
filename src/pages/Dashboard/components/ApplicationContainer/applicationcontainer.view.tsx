import React from "react";

import SwipeableViews from "react-swipeable-views";
import styles from "../Contracts/contracts.module.scss";
import { Card, Nav } from "react-bootstrap";

import CustomTabPanel from "./components/CustomTabPanel";
import TabBar from "./components/TabBar";

interface ApplicationContainerViewProps {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  pending: boolean;
  outgoing: boolean;
  completed: boolean;
  handleChangeIndex: (index: number) => void;
  getFilteredApplicationsCode: (s: string) => any;
  handleChangeHash: (hash: string) => void;
  locationHash: string;
}

const ApplicationContainerView: React.FC<ApplicationContainerViewProps> = ({
  value,
  handleChange,
  completed,
  handleChangeIndex,
  outgoing,
  pending,
  getFilteredApplicationsCode,
  handleChangeHash,
  locationHash,
}) => {
  return (
    <div className={styles["contractContainer"]}>
      <h2 className="text-custom mb-3">Services</h2>
      <Card>
        <TabBar
          completed={completed}
          handleChange={handleChange}
          outgoing={outgoing}
          pending={pending}
          value={value}
          locationHash={locationHash}
          handleChangeHash={handleChangeHash}
          handleChangeIndex={handleChangeIndex}
        />
        <SwipeableViews
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{ overflowY: "auto", height: "60vh" }}
        >
          <CustomTabPanel value={value} index={0}>
            {getFilteredApplicationsCode("Pending")}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            {getFilteredApplicationsCode("Ongoing")}
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            {getFilteredApplicationsCode("Accepted")}
          </CustomTabPanel>
        </SwipeableViews>
      </Card>
    </div>
  );
};

export default ApplicationContainerView;
