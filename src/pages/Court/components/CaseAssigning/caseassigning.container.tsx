import React, { useState } from "react";

import CaseAssigningView from "./caseassigning.view";
import { FormDataInterface } from "../../court.model";

const CaseAssigning = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormDataInterface>({
    caseType: {
      caseTypeName: "Family",
    },
    information: {
      name: "",
      ID: "",
      address: "",
      mobile: "",
    },
    caseDetails: {
      typeofCase: "",
      fillingStatus: "",
      courtDetail: "",
      defendentDetail: "",
    },
    userDetails: {
      userType: "Company",
      companyType: "",
    },
    sSDetails: {
      serviceType: "",
    },
    audioInfo: {
      audios: [],
    },
    fileInfo: {
      files: [],
    },
    textInfo: {
      textDetail: "",
    },
    consultionType: {
      type: "Online",
    },
    onlinePlatform: {
      platformName: "Zoom",
    },
    offlinePlatform: {
      type: "Branch Office",
      address: "Jeddah Office",
    },
  });

  const setFormDataInParent = (formType: string, formValues: any) => {
    setFormData({
      ...formData,
      [formType]: formValues,
    });
  };

  const nextHandler = () => {
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };

  const prevHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  const submitHandler = () => {
    //-----------------API goes here----------------//
    console.log("Data Submitted");
  };

  return (
    <CaseAssigningView
      currentStep={currentStep}
      setFormDataInParent={setFormDataInParent}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      formData={formData}
      submitHandler={submitHandler}
    />
  );
};

export default CaseAssigning;
