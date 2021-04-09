import React from "react";
import styles from "./platformpicker.module.scss";
import onlineIcon from "../../../../../../Zytcode Assets/PNG files/Online icon.png";
import teamsIcon from "../../../../../../assets/images/global/microsoft-teams-1.png";
import { Button } from "react-bootstrap";
import zoomLogo from "../../../../../../assets/images/global/zoom-logo.png";

interface PlatformPickerProps {
  selectFunction: (platform: string) => void;
  clearOnlineOffline: () => void;
}

const PlatformPicker: React.FC<PlatformPickerProps> = ({
  selectFunction,
  clearOnlineOffline,
}) => {
  return (
    <div className={styles["containerr"]}>
      <img src={onlineIcon} alt="onlineIcon" />
      <h1>Online</h1>
      <div>
        <ul>
          <li
            className={styles["item"]}
            onClick={() => selectFunction("Teams")}
          >
            <img src={teamsIcon} alt="onlineIcon" />
            <h2>Teams</h2>
          </li>
          <li className={styles["item"]} onClick={() => selectFunction("Zoom")}>
            <img
              src={zoomLogo}
              alt="offlineIcon"
              style={{ height: "50%", width: "50%" }}
            />
            <h2>Zoom</h2>
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={clearOnlineOffline}
          style={{ backgroundColor: "#242f40", border: "none", color: "#fff" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default PlatformPicker;
