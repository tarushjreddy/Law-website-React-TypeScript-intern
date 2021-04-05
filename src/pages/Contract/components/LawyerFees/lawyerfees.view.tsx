import React, { useState } from "react";

import ConfirmCreate from "./components/ConfirmCreate";
import SelectMode from "./components/SelectMode";
import BasicDetail from "./components/BasicDetail";
import FirstPartyDetail from "./components/FirstPartyDetail";
import SecondPartyDetail from "./components/SecondPartyDetail";
import ServiceType from "./components/ServiceType";
import TravelExpense from "./components/TravelExpense";
import SecondPartyFee from "./components/SecondPartyFee";
import TermsConditions from "./components/TermsConditions";
import ThankYouCard from "./components/ThankYouCard";
import ReviewContract from "./components/ReviewContract";
import ContractType from "./components/ContractType";
import DatePick from "./components/DatePick";
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

interface LawyerFeesViewProps {
  formData: LawyerFeeFormDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<LawyerFeeFormDataTypes>>;
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  nextHandler: () => void;
  prevHandler: () => void;
  setReviewInParent: (termsAndConditionsValues: any) => void;
  setFormDataInParent: (
    formType: string,
    formValues:
      | ContractDateInterface
      | FirstPartyDetailInterface
      | SecondPartyDetailInterface
      | ServiceTypeInterface
      | TravelExpenseInterface
      | SecondPartyFeeInterface
      | TermsConditionsInterface
  ) => void;
}

const LawyerFeesView: React.FC<LawyerFeesViewProps> = ({
  formData,
  setFormData,
  currentStep,
  setCurrentStep,
  nextHandler,
  prevHandler,
  setReviewInParent,
  setFormDataInParent,
}) => {
  console.log("LawyerFeesView current step==", currentStep);
  return (
    <div
      className="row justify-content-center align-content-center"
      style={{
        height: "38em",
      }}
    >
      <div
        className="col-12 row align-content-center"
        style={{ height: "34em" }}
      >
        <div className="col-12">
          {currentStep === 0 && (
            <ConfirmCreate
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 1 && (
            <SelectMode
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 2 && (
            <DatePick
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.contractDate}
              setContractDateInParent={setFormDataInParent}
            />
          )}
          {currentStep === 3 && (
            <FirstPartyDetail
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.firstPartyDetail}
              setFirstPartyDetailsInParent={setFormDataInParent}
            />
          )}
          {currentStep === 4 && (
            <SecondPartyDetail
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.secondPartyDetail}
              setFirstSecondDetailsInParent={setFormDataInParent}
            />
          )}
          {currentStep === 5 && (
            <ServiceType
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.serviceDetail}
              setServiceDetailInParent={setFormDataInParent}
            />
          )}
          {currentStep === 6 && (
            <TravelExpense
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.travelExpenseDetail}
              setTravelExpenseInParent={setFormDataInParent}
            />
          )}
          {currentStep === 7 && (
            <SecondPartyFee
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.secondPartyFeeDetail}
              setSecondPartyFeeInParent={setFormDataInParent}
            />
          )}
          {currentStep === 8 && (
            <TermsConditions
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              formValues={formData.termsConditionsDetail}
              setTermsInParent={setFormDataInParent}
            />
          )}
          {currentStep === 9 && <ThankYouCard />}
          {currentStep === 11 && (
            <ReviewContract
              prevStep={12}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              prevHandler={prevHandler}
              categoryName="Legal"
              setReviewInParent={setReviewInParent}
            />
          )}
          {currentStep === 12 && (
            <ContractType setCurrentStep={setCurrentStep} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LawyerFeesView;
