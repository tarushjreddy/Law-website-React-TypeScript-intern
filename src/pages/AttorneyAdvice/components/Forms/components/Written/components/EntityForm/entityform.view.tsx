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
    address: entityFormData.address,
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
    <div className={styles["container"]}>
      <div className={styles["entity"]}>
        <p>I am </p>
        <Dropdown className={styles["dropdown"]}>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic">
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
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
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
            </Form.Group>

            <Form.Group controlId="formBasicAddress">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Address"
                onChange={handleChange}
                name="address"
                value={formValues.address}
                style={{ resize: "none" }}
                required
              />
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
            </Form.Group>

            <div className={styles["button"]}>
              <Button
                variant="secondary"
                type="submit"
                style={{
                  backgroundColor: "#151A44",
                  borderRadius: "4px",
                }}
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
