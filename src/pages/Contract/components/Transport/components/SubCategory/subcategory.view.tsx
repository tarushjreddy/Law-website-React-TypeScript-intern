import React from "react";

import styles from "./subcategory.module.scss";
import Truck from "../../../../../../assets/images/contract/truck.png";
import Car from "../../../../../../assets/images/contract/car-model.png";

interface SubCategoryProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  setSelectedTransportSubcategory: React.Dispatch<React.SetStateAction<string>>;
}

const SubCategory: React.FC<SubCategoryProps> = ({
  currentStep,
  setCurrentStep,
  setSelectedTransportSubcategory,
}) => {
  const clickHandle = (type: string) => {
    setSelectedTransportSubcategory(type);
    setCurrentStep(currentStep + 1);
  };

  return (
    <div className="row justify-content-center">
      <div
        className={`col-5 m-1 ${styles["contractSubCategoryItem"]}`}
        onClick={() => clickHandle("Personal")}
      >
        <img
          src={Car}
          alt="Personal"
          className="mr-5"
          style={{ height: "100px", width: "100px" }}
        />
        Personal
      </div>
      <div
        className={`col-5 m-1 ${styles["contractSubCategoryItem"]}`}
        //onClick={() => clickHandle("Commercial")}
      >
        <img
          src={Truck}
          alt="Commercial"
          className="mr-5"
          style={{ height: "100px", width: "100px" }}
        />
        Commercial
      </div>
    </div>
  );
};

export default SubCategory;
