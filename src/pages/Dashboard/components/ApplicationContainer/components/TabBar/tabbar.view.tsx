import React from "react";

import styles from "../../../Contracts/contracts.module.scss";
import { Card, Nav } from "react-bootstrap";

interface TabBarViewProps {
  value: number;
  handleChange: (event: React.ChangeEvent<{}>, newValue: number) => void;
  pending: boolean;
  outgoing: boolean;
  completed: boolean;
  locationHash: string;
  handleChangeHash: (hash: string) => void;
  handleChangeIndex: (index: number) => void;
}

const TabBarView: React.FC<TabBarViewProps> = ({
  pending,
  outgoing,
  completed,
  handleChange,
  value,
  locationHash,
  handleChangeHash,
  handleChangeIndex,
}) => {
  const clickHandler = (cat: string, num: number) => {
    handleChangeHash(cat);
    handleChangeIndex(num);
  };

  return (
    <Card.Header className={styles["links"]}>
      <Nav variant="tabs" defaultActiveKey={locationHash}>
        <Nav.Item>
          <Nav.Link
            href="#pending"
            onClick={() => clickHandler("#pending", 0)}
            style={{
              color: "#DF3600",
            }}
          >
            Pending
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#ongoing"
            onClick={() => clickHandler("#ongoing", 1)}
            style={{
              color: "#00B7DF",
            }}
          >
            Ongoing
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="#complete"
            onClick={() => clickHandler("#complete", 2)}
            style={{
              color: "#009D3F",
            }}
          >
            Complete
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Card.Header>
  );
};

export default TabBarView;
