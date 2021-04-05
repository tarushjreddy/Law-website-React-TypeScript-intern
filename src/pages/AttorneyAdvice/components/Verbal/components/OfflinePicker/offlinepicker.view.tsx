import React from "react";
import { Button } from "react-bootstrap";

import styles from "./offlinepicker.module.scss";

import offlineIcon from "../../../../../../Zytcode Assets/PNG files/External location icon.png";
import onlineIcon from "../../../../../../Zytcode Assets/PNG files/Branch office icon.png";

interface OnlineOfflinePickerProps {
  selectFunction: (param: string) => void;
  backFunction: () => void;
}

const OnlineOfflinePicker: React.FC<OnlineOfflinePickerProps> = ({
  selectFunction,
  backFunction,
}) => {
  return (
    <div className={styles["container"]}>
      <div>
        <ul>
          <li
            className={styles["item"]}
            onClick={() => selectFunction("Branch Office")}
          >
            <img src={onlineIcon} alt="onlineIcon" />
            <h3>Branch Office</h3>
          </li>
          <li
            className={styles["item"]}
            onClick={() => selectFunction("External Location")}
          >
            <img src={offlineIcon} alt="offlineIcon" />
            <h3>External Location</h3>
          </li>
        </ul>
      </div>
      <div>
        <Button
          variant="secondary"
          onClick={backFunction}
          style={{ paddingRight: "28px", paddingLeft: "28px" }}
        >
          Back
        </Button>
      </div>
    </div>
  );
};

export default OnlineOfflinePicker;
