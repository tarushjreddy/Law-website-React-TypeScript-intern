import React, { useState } from "react";
import EmploymentContractView from "./employmentcontract.view";

import {
  ReviewDetailInterface,
  EmploymentFormDataTypes,
} from "./employmentcontract.model";

const EmploymentContract = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formState, setFormState] = useState<EmploymentFormDataTypes>({
    contractDate: {
      date: "",
    },
    firstPartyDetail: {
      name: "",
      type: "Organization",
      registrationNum: "",
      issueDate: "",
      issuePlace: "",
      source: "",
      represented: "",
    },
    secondPartyDetail: {
      name: "",
      nationality: "",
      passNumber: "",
      issueDate: "",
      issuePlace: "",
      phone: "",
      email: "",
      POBox: "",
    },
    jobDetail: {
      job: "",
      organization: "",
      branch: "",
      city: "",
    },
    contractDuration: {
      duration: "Limited",
      start: "",
      end: "",
    },
    noticePeriod: {
      period: "",
      fee: "",
      isCancellable: true,
    },
    otherBenefits: {
      benefits: [],
    },
    annualLeave: {
      leave: "",
      terms: false,
    },
  });

  const [reviewDetail, setReviewDetail] = useState<ReviewDetailInterface>({
    additionalInfo: "",
    file: null,
  });

  const nextHandler = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevHandler = () => {
    setCurrentStep(currentStep - 1);
  };

  const setFormDataInParent = (formType: string, formValues: any) => {
    setFormState({
      ...formState,
      [formType]: formValues,
    });
  };

  return (
    <EmploymentContractView
      formState={formState}
      currentStep={currentStep}
      nextHandler={nextHandler}
      prevHandler={prevHandler}
      reviewDetail={reviewDetail}
      setCurrentStep={setCurrentStep}
      setFormDataInParent={setFormDataInParent}
      setReviewDetail={setReviewDetail}
    />
  );
};

export default EmploymentContract;
