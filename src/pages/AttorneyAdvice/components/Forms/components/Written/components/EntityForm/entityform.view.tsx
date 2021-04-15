import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import styles from "./entityform.module.scss";
import { getAllEntities } from "../../../../../../../../services/apis";
import { EntityDataType } from "../../../../../../attorneyadvice.model";

interface EntityFormProps {
  nextFunction: () => void;
  entityFormData: EntityDataType;
  setEntityInParent: (entityValues: any) => void;
}

const EntityForm: React.FC<EntityFormProps> = ({
  nextFunction,
  entityFormData,
  setEntityInParent,
}) => {
  const [dropDownState, setDropDownState] = useState<string[][]>([]);

  useEffect(() => {
    (async () => {
      const response = await getAllEntities();

      const dropDownItems = [];
      for (let el of response.data) {
        dropDownItems.push([el.name, el._id]);
      }
      setDropDownState(dropDownItems);
    })();
  }, []);

  const [formValues, setFormValues] = useState({
    name: entityFormData.name,
    phone: entityFormData.phone,
    id: entityFormData.id,
    address1: entityFormData.address,
    address2: entityFormData.address,
    address3: entityFormData.address,
    city: entityFormData.city,
    entity: entityFormData.entity,
    type: entityFormData.type,
  });

  const [validated, setValidated] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    if (form.checkValidity() === true) {
      setEntityInParent(formValues);
      nextFunction();
    }
    setValidated(true);
  };

  const handleDropdown = (entity: string, id: string) => {
    setFormValues({ ...formValues, type: id, entity: entity });
  };

  return (
    <div className={styles["containerr"]}>
      <div className={styles["entity"]}>
        <p style={{ textAlign: "center" }}>I am </p>
        <Dropdown className={styles["dropdown"]}>
          <Dropdown.Toggle
            style={{ backgroundColor: "#242f40", border: "none" }}
            id="dropdown-basic"
          >
            {formValues.entity ? formValues.entity : "Choose from the options"}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {dropDownState.map((el) => (
              <Dropdown.Item
                onSelect={() => handleDropdown(el[0], el[1])}
                key={el[1]}
              >
                {el[0]}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {formValues.entity && (
        <div className={styles["individualForm"]}>
          <Form
            style={{
              flexDirection: "column",
              width: "50%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group controlId="formBasicName">
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={handleChange}
                name="name"
                value={formValues.name}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your name
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicPhone">
              <Form.Control
                className={styles["asdf"]}
                placeholder="Enter your Mobile Number"
                onChange={handleChange}
                pattern="[0-9]{10,}"
                name="phone"
                required
                value={formValues.phone}
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Mobile Number
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicID">
              <Form.Control
                type="text"
                placeholder="Enter your ID Number"
                onChange={handleChange}
                value={formValues.id}
                name="id"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your ID Number
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Address Line 1"
                onChange={handleChange}
                name="address1"
                value={formValues.address1}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Address Line 1
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Address Line 2"
                onChange={handleChange}
                name="address2"
                value={formValues.address2}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Address Line 2
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formBasicAddress">
              <Form.Control
                type="text"
                placeholder="Address Line 3"
                onChange={handleChange}
                name="address3"
                value={formValues.address3}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your Address Line 3
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formBasicCity">
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                onChange={handleChange}
                value={formValues.city}
                required
              />
              <Form.Control.Feedback type="invalid">
                Please enter your City
              </Form.Control.Feedback>
            </Form.Group>

            <div className={styles["button"]}>
              <Button
                variant="secondary"
                type="submit"
                style={{ backgroundColor: "#242F40", border: "none" }}
              >
                Next
              </Button>
            </div>
          </Form>
        </div>
      )}
    </div>
  );
};

export default EntityForm;
