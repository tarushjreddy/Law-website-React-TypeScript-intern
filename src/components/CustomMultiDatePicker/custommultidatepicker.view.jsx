import React from "react";
import { Form, Row, Col } from "react-bootstrap";

import DatePicker from "react-multi-date-picker";
import styles from "./custommultidatepicker.module.scss";

const CustomMultiDatePicker = (props) => {
  return (
    <div className={styles["customMultiDatePickerContainer"]}>
      <Row>
        <Form.Label style={{ fontSize: "17px" }}>
          {props.hijriLabel || "Select Hijri Date"}
        </Form.Label>
      </Row>
      <Row>
        <DatePicker
          local="ar"
          //type="input-icon"
          minDate={props.minDate}
          value={new Date(props.value)}
          calendar="arabic"
          onChange={(dateObject) => {
            dateObject = dateObject
              .convert("gregorian")
              .setLocal("en")
              .format("MM/DD/YYYY");
            const date = new Date(dateObject);
            props.handleDateChange(date.toString());
          }}
        />
      </Row>
    </div>
  );
};

export default CustomMultiDatePicker;
