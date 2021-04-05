import React from "react";

import styles from "../Contracts/contracts.module.scss";
import { Card, Nav } from "react-bootstrap";

import UpdateProfile from "./components/UpdateProfile";
import ChangePassword from "./components/ChangePassword";

interface ProfileContainerViewProps {
  handleChangeIndex: (hash: string) => void;
  locationHash: string;
}

const ProfileContainerView: React.FC<ProfileContainerViewProps> = ({
  handleChangeIndex,
  locationHash,
}) => {
  return (
    <div className={styles["contractContainer"]}>
      <h2 className="text-custom mb-3">Profile</h2>
      <Card>
        <Card.Header className={styles["links"]}>
          <Nav variant="tabs" defaultActiveKey={locationHash}>
            <Nav.Item>
              <Nav.Link
                href="#upadteProfile"
                onClick={() => handleChangeIndex("#upadteProfile")}
              >
                Update Profile
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#changePassword"
                onClick={() => handleChangeIndex("#changePassword")}
              >
                Change Password
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div className="container px-2">
            <div className="container">
              {locationHash === "#upadteProfile" && <UpdateProfile />}
              {locationHash === "#changePassword" && <ChangePassword />}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileContainerView;
