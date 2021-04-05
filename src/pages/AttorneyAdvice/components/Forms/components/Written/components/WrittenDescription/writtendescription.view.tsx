import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./writtendescription.module.scss";
import { getAllSectors } from "../../../../../../../../services/apis";
import { SectorDataType } from "../../../../../../attorneyadvice.model";

interface WrittenDescriptionProps {
  backFunction: () => void;
  nextHandler: () => void;
  sectorFormData: SectorDataType;
  setSectorDataInParent: (sectorData: any) => void;
  required?: boolean;
}

const WrittenDescription: React.FC<WrittenDescriptionProps> = ({
  backFunction,
  nextHandler,
  sectorFormData,
  setSectorDataInParent,
  required = true,
}) => {
  const [dropDownState, setDropDownState] = useState<string[][]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllSectors();

      let dropDownItems = [];
      for (let el of response.data) {
        dropDownItems.push([el.name, el._id]);
      }
      setDropDownState(dropDownItems);
    })();
  }, []);

  const [formValues, setFormValues] = useState<SectorDataType>(sectorFormData);

  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true && setSectorDataInParent) {
      setSectorDataInParent(formValues);
      nextHandler();
    }
    setValidated(true);
  };

  const handleDropdown = (sector: string, id: string) => {
    setFormValues({ ...formValues, type: id, sector: sector });
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["selector"]}>
        <h3>Need legal advice in </h3>
        <Dropdown className={styles["dropdown;"]}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
            {formValues.sector ? formValues.sector : "Choose from the options"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropDownState.map((el) => {
              return (
                <Dropdown.Item
                  onSelect={() => handleDropdown(el[0], el[1])}
                  key={el[1]}
                >
                  {el[0]}
                </Dropdown.Item>
              );
            })}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {formValues.sector && (
        <div className={styles["form"]} style={{ textAlign: "center" }}>
          <div>
            <Form
              style={{ marginLeft: "1em" }}
              noValidate
              validated={validated}
              onSubmit={handleSubmit}
            >
              <Form.Group
                controlId="formBasicSubject"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Form.Control
                  type="text"
                  placeholder="Enter the Subject"
                  onChange={handleChange}
                  name="subject"
                  value={formValues.subject}
                  required={required}
                />
              </Form.Group>
              <Form.Group controlId="formBasicDescription">
                <Form.Control
                  as="textarea"
                  name="details"
                  placeholder="Type the details here"
                  onChange={handleChange}
                  value={formValues.details}
                  required={required}
                  style={{ height: "200px", resize: "none" }}
                />
              </Form.Group>
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  className={styles["button"]}
                  style={{
                    display: "inline-block",
                    marginRight: "4px",
                  }}
                >
                  <Button variant="secondary" onClick={backFunction}>
                    Back
                  </Button>
                </div>
                <div
                  className={styles["button"]}
                  style={{
                    display: "inline-block",
                    marginLeft: "4px",
                  }}
                >
                  <Button variant="secondary" type="submit">
                    Next
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};
export default WrittenDescription;
