import React, { useState } from "react";

import LawyerFeesView from "./lawyerfees.view";
import {
  LawyerFeeFormDataTypes,
  ContractDateInterface,
  FirstPartyDetailInterface,
  SecondPartyDetailInterface,
  ServiceTypeInterface,
  TravelExpenseInterface,
  SecondPartyFeeInterface,
  TermsConditionsInterface,
} from "./lawyerfees.model";

const LawyerFees = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<LawyerFeeFormDataTypes>({
    contractDate: {
      ondate: "",
    },
    firstPartyDetail: {
      method: "Company",
      name: "",
      licenseNo: "",
      IDnum: "",
      city: "",
      neighborhood: "",
      street: "",
      phone: "",
    },
    secondPartyDetail: {
      firstName: "Mr",
      name: "",
      nationality: "",
      IDnum: "",
      city: "",
      neighborhood: "",
      phone: "",
      email: "",
      POBox: "",
      street: "",
      contract: "",
      nationalID: "",
    },
    serviceDetail: {
      serviceType: "",
    },
    travelExpenseDetail: {
      travel: "Yes",
      amount: "",
    },
    secondPartyFeeDetail: {
      canceled: "",
      payTime: "",
      date: "",
      place: "",
      accountNo: "",
    },
    termsConditionsDetail: {
      terms: false,
      jdArea: "Jeddah",
    },
  });
  const MAX_STEP_COUNT = 9;
  const handleSubmit = () => {
    setCurrentStep(MAX_STEP_COUNT);
    console.log("Submitted");
  };

  const nextHandler = () => {
    setCurrentStep(currentStep + 1);
    console.log(formData);
  };

  const prevHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  const setFormDataInParent = (
    formType: string,
    formValues:
      | ContractDateInterface
      | FirstPartyDetailInterface
      | SecondPartyDetailInterface
      | ServiceTypeInterface
      | TravelExpenseInterface
      | SecondPartyFeeInterface
      | TermsConditionsInterface
  ) => {
    console.log(
      "in setFormDataInParent formType",
      formType,
      "formValues",
      formValues
    );
    setFormData({
      ...formData,
      [formType]: formValues,
    });
  };

  // ReviewContract

  const [reviewContractValues, setReviewContractValues] = useState({
    additionalInfo: "",
    file: null,
  });

  const setReviewInParent = (termsAndConditionsValues: any) => {
    setReviewContractValues({
      ...reviewContractValues,
      ...termsAndConditionsValues,
    });
  };

  return (
    <LawyerFeesView
      formData={formData}
      setFormData={setFormData}
      currentStep={currentStep}
      setCurrentStep={setCurrentStep}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      setReviewInParent={setReviewInParent}
      setFormDataInParent={setFormDataInParent}
    />
  );
};

export default LawyerFees;
