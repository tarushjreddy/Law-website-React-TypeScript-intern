import React from "react";
import styles from "./onlineofflinepicker.module.scss";
import offlineIcon from "../../../../../../Zytcode Assets/PNG files/Offline icon.png";
import onlineIcon from "../../../../../../Zytcode Assets/PNG files/Online icon.png";
import { Button } from "react-bootstrap";

interface OnlineOfflinePickerProps {
  selectFunction: (param: string) => void;
  backFunction: () => void;
}

const OnlineOfflinePicker: React.FC<OnlineOfflinePickerProps> = ({
  selectFunction,
  backFunction,
}) => {
  return (
    <div className={styles["containerr"]}>
      <div>
        <ul>
          <li
            className={styles["item"]}
            onClick={() => selectFunction("Online")}
          >
            <img src={onlineIcon} alt="onlineIcon" />
            <h2>Online</h2>
          </li>
          <li
            className={styles["item"]}
            onClick={() => selectFunction("Offline")}
          >
            <img src={offlineIcon} alt="offlineIcon" />
            <h2>Offline</h2>
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={backFunction}
          style={{ backgroundColor: "#242f40", border: "none", color: "#fff" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default OnlineOfflinePicker;
