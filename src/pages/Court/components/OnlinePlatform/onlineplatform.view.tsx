import React, { useState } from "react";

import { Form } from "react-bootstrap";
import CardView from "../CardView";
import FirstPartyImage from "../../../../assets/images/contract/cat 1.png";
import Zoom from "../../../../assets/images/global/zoom.jpg";
import Teams from "../../../../assets/images/global/microsoft-teams-1.png";
import { OnlinePlatformInterface } from "../../court.model";

interface ConsultionTypeProps {
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  platformValues: OnlinePlatformInterface;
}

const OnlinePlatform: React.FC<ConsultionTypeProps> = ({
  setFormDataInParent,
  nextHandler,
  prevHandler,
  platformValues,
}) => {
  const [validated, setValidated] = useState(false);
  const [onlinePlatformData, setOnlinePlatformData] = useState<
    OnlinePlatformInterface
  >({
    platformName: platformValues.platformName,
  });

  const handleSubmit = () => {
    if (onlinePlatformData.platformName !== "") {
      setFormDataInParent("onlinePlatform", onlinePlatformData);
      nextHandler();
      console.log(onlinePlatformData);
    }
    {
      /*const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === true) {
          setFormDataInParent("onlinePlatform", onlinePlatformData);
          nextHandler();
          console.log(onlinePlatformData);
        }
        setValidated(true);*/
    }
  };

  const handleChange = (id: number): void => {
    //console.log(id);
    if (id === 1) {
      setOnlinePlatformData({ platformName: "Zoom" });
    } else if (id === 2) {
      setOnlinePlatformData({ platformName: "Microsoft Team" });
    }
    //let { name, value } = event.target;
    //setOnlinePlatformData({ ...onlinePlatformData, [name]: value });
  };

  return (
    <div className="container">
      <h2 className="text-center">Choose Online Platform</h2>

      <div className="col-12 row justify-content-around align-content-center text-center">
        <CardView
          title="Zoom"
          id={1}
          isSelected={onlinePlatformData.platformName === "Zoom"}
          setSelected={handleChange}
          imgLink={Zoom}
          width="8rem"
        />
        <CardView
          title="Microsoft Team"
          id={2}
          isSelected={onlinePlatformData.platformName === "Microsoft Team"}
          setSelected={handleChange}
          imgLink={Teams}
          width="8rem"
        />
      </div>
      <div
        className="col-12 row justify-content-around align-content-center"
        style={{ height: "4em" }}
      >
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={prevHandler}>
            Previous
          </button>
        </div>
        <div style={{ width: "auto" }}>
          <button className="btn btn-custom" onClick={handleSubmit}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnlinePlatform;
