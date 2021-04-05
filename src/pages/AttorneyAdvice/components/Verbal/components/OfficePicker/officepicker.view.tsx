import React, { useEffect, useState } from "react";
import axios from "axios";

import styles from "./officepicker.module.scss";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import offlineImage from "../../../../../../Zytcode Assets/PNG files/Branch office icon.png";

interface OfficePickerProps {
  selectFunction: (param: any) => void;
  office: string | null;
  nextFunction: () => void;
  backFunction: () => void;
  disabled?: boolean;
}

const OfficePicker: React.FC<OfficePickerProps> = ({
  selectFunction,
  office,
  nextFunction,
  backFunction,
  disabled,
}) => {
  const [dropDownState, setDropDownState] = useState<string[][]>([]);
  let dropDownItems = [];

  useEffect(() => {
    axios
      .get("https://service-portal-api.herokuapp.com/api/branch/all")
      .then((res) => {
        dropDownItems = [];
        for (let el of res.data.data) {
          dropDownItems.push([el.name, el._id]);
        }
        setDropDownState(dropDownItems);
      });
  }, []);

  let text = "Choose from the options";

  if (office) {
    text = office;
  }

  let dropDownItemsCode = dropDownState.map((el) => {
    return (
      <Dropdown.Item onSelect={() => selectFunction(el[0])} key={el[1]}>
        {el[0]}
      </Dropdown.Item>
    );
  });

  return (
    <div className={styles["container"]}>
      <img src={offlineImage} alt="offline" />
      <div className={styles["entity"]}>
        <Dropdown onSelect={selectFunction} className={styles["dropdown"]}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {text}
          </Dropdown.Toggle>
          <Dropdown.Menu>{dropDownItemsCode}</Dropdown.Menu>
        </Dropdown>
      </div>
      <div className={styles["button"]}>
        <Button
          variant="secondary"
          style={{
            backgroundColor: "#151A44",
            borderRadius: "4px",
            marginRight: "4px",
          }}
          onClick={backFunction}
        >
          Back
        </Button>
        <Button
          variant="secondary"
          style={{
            backgroundColor: "#151A44",
            borderRadius: "4px",
            marginLeft: "4px",
          }}
          disabled={disabled}
          onClick={nextFunction}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default OfficePicker;
