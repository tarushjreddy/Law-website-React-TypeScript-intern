import React, { useState } from "react";

import TransportView from "./transport.view";

import {
  TransportFormDataTypes,
  ReviewDetailInterface,
} from "./transport.model";

const Transport = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formState, setFormState] = useState<TransportFormDataTypes>({
    contractDate: { ondate: "" },
    basicDetail: {
      name: "",
      nationality: "",
      IDnumber: "",
      resisndence: "",
    },
    firstPartyDetail: {
      name: "",
      nationality: "",
      IDnumber: "",
      city: "",
      street: "",
      phone: "",
      neighborhood: "",
    },
    secondPartyDetail: {
      name: "",
      nationality: "",
      IDnumber: "",
      city: "",
      street: "",
      phone: "",
      neighborhood: "",
    },
    carDetails: {
      modal: "",
      brand: "",
      plate: "",
    },
    priceAndPayments: {
      price: "",
      method: "Bank Transfer",
      accountNo: "",
    },
    installments: {
      canceled: "",
      installments: 2,
      firstPayment: "",
      secondPayment: "",
      secondDate: "",
      thirdPayment: "",
      thirdDate: "",
      fourthPayment: "",
      fourthDate: "",
    },
    termsConditions: {
      jdArea: "",
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
    <TransportView
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

export default Transport;
