import React, { useState } from "react";
import styles from "./locationpicker.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "react-bootstrap/Button";

interface LocationPickerProps {
  confirmHandler: (param: string) => void;
  backFunction: () => void;
}

const LocationPicker: React.FC<LocationPickerProps> = ({
  confirmHandler,
  backFunction,
}) => {
  const [addressState, setAddressState] = useState({
    first: "",
    second: "",
    third: "",
  });

  const firstHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    area: number
  ) => {
    if (area === 1) {
      setAddressState({
        ...addressState,
        first: event.target.value,
      });
    } else if (area === 2) {
      setAddressState({
        ...addressState,
        second: event.target.value,
      });
    } else if (area === 3) {
      setAddressState({
        ...addressState,
        third: event.target.value,
      });
    }
  };

  const submitHandler = () => {
    let text =
      addressState.first + "," + addressState.second + "," + addressState.third;
    confirmHandler(text);
  };

  return (
    <div className={styles["container"]}>
      <h1>External Location</h1>
      <div className={styles["form"]}>
        <TextField
          label="Address Line 1"
          onChange={(event) => firstHandler(event, 1)}
        />
        <TextField
          label="Address Line 2"
          onChange={(event) => firstHandler(event, 2)}
        />
        <TextField
          label="Address Line 3"
          onChange={(event) => firstHandler(event, 3)}
        />
      </div>
      <div
        className={styles["button"]}
        style={{
          marginTop: "20px",
        }}
      >
        <Button
          variant="secondary"
          style={{ marginRight: "4px" }}
          onClick={backFunction}
        >
          Back
        </Button>
        <Button
          variant="secondary"
          style={{ marginLeft: "4px" }}
          onClick={submitHandler}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default LocationPicker;
