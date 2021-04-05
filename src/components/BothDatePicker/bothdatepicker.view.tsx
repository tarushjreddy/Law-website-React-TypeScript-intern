import React from "react";
import { Form } from "react-bootstrap";
import CustomMultiDatePicker from "../CustomMultiDatePicker";

interface BothDatePickerViewProps {
  handleDateChange: (date: Date | null | string) => void;
  consultationDate?: string;
  minDate?: Date;
  label?: string;
  hijriLabel?: string;
}

const BothDatePickerView: React.FC<BothDatePickerViewProps> = ({
  handleDateChange,
  consultationDate,
  minDate,
  label,
  hijriLabel,
}) => {
  const _consultationDate = new Date(consultationDate || minDate || new Date());
  const formattedDate = `${_consultationDate.getFullYear()}-${
    _consultationDate.getMonth() + 1
  }-${_consultationDate.getDate()}`;

  return (
    <div className="row">
      <div className="col-6">
        <CustomMultiDatePicker
          value={consultationDate || _consultationDate}
          minDate={minDate}
          handleDateChange={handleDateChange}
          hijriLabel={hijriLabel}
        />
      </div>
      <div className="col-6">
        <div>
          <Form.Label style={{ fontSize: "17px" }}>
            {label || "Select Date"}
          </Form.Label>
          <Form.Control
            type="date"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleDateChange(new Date(event.target.value));
            }}
            value={formattedDate}
            min={minDate?.toISOString().split("T")[0]}
          />
        </div>
      </div>
    </div>
  );
};

export default BothDatePickerView;
