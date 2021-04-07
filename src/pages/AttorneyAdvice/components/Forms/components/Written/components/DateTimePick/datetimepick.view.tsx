import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

import styles from "./datetimepick.module.scss";
import { SlotDataType } from "../../../../../../attorneyadvice.model";
import BothDatePicker from "../../../../../../../../components/BothDatePicker";

interface DateTimePickProps {
  nextFunction: () => void;
  backFunction: () => void;
  slotDateTime: SlotDataType;
  setSlotDateTimeInParent: (slotDateTimeValues: SlotDataType) => void;
}

const DateTimePick: React.FC<DateTimePickProps> = ({
  nextFunction,
  backFunction,
  slotDateTime,
  setSlotDateTimeInParent,
}) => {
  const [validated, setValidated] = useState(false);
  const [consultationDateTime, setConsultationDateTime] = useState<
    SlotDataType
  >(slotDateTime);

  const handleDateChange = (date: Date | null | string) => {
    setConsultationDateTime({
      ...consultationDateTime,
      date: date?.toString() || "",
    });
  };

  const handleFromTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsultationDateTime({
      ...consultationDateTime,
      fromTime: event.target.value,
    });
  };

  const handleToTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConsultationDateTime({
      ...consultationDateTime,
      toTime: event.target.value,
    });
  };

  const handleNext = (event: React.FormEvent<HTMLFormElement>) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity() === true) {
      setSlotDateTimeInParent(consultationDateTime);
      nextFunction();
    }
    setValidated(true);
  };

  const handleBack = () => {
    setSlotDateTimeInParent(consultationDateTime);
    backFunction();
  };

  let minDate = new Date();
  minDate.setDate(minDate.getDate() + 1);

  return (
    <div className={styles["container"]}>
      <Form noValidate validated={validated} onSubmit={handleNext}>
        <div className="row" style={{ height: "28em" }}>
          <div className="col-12">
            <h2>Select Date of Consultation</h2>
          </div>
          <div></div>
          <BothDatePicker
            consultationDate={consultationDateTime.date}
            handleDateChange={handleDateChange}
            minDate={minDate}
          />
          <div className="col-6">
            <div>
              <Form.Label style={{ fontSize: "17px" }}>
                Pick the time slot
              </Form.Label>
              <Form.Control
                type="time"
                name="time"
                value={consultationDateTime.fromTime}
                required
                onChange={handleFromTimeChange}
              />
            </div>
          </div>
          <div className="col-6">
            <div>
              <Form.Label style={{ fontSize: "17px" }}>
                Select Duration
              </Form.Label>
              <Form.Control
                as="select"
                name="duration"
                custom
                onChange={handleToTimeChange}
                className="shadow-none"
                value={consultationDateTime.toTime}
              >
                <option value="30 Minutes">30 Minutes</option>
                <option value="60 Minutes">60 Minutes</option>
                <option value="90 Minutes">90 Minutes</option>
                <option value="120 Minutes">120 Minutes</option>
              </Form.Control>
            </div>
          </div>
        </div>
        <div
          className={styles["button"]}
          style={{
            textAlign: "center",
          }}
        >
          <div
            className={styles["button"]}
            style={{
              display: "inline-block",
            }}
          >
            <Button
              variant="secondary"
              style={{
                backgroundColor: "#242f40",
                border: "none",
                margin: "4px",
              }}
              onClick={handleBack}
            >
              Back
            </Button>
          </div>
          <div
            className={styles["button"]}
            style={{
              display: "inline-block",
            }}
          >
            <Button
              variant="secondary"
              type="submit"
              style={{
                margin: "4px",
                backgroundColor: "#242f40",
                border: "none",
              }}
            >
              Next
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DateTimePick;
