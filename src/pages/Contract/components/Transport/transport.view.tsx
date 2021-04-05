import React, { useState } from "react";

import SubCategory from "./components/SubCategory";
import ConfirmCreate from "./components/ConfirmCreate";
import SelectMode from "./components/SelectMode";
import FirstPartyDetail from "./components/FirstPartyDetail";
import SecondPartyDetail from "./components/SecondPartyDetail";
import CarDetails from "./components/CarDetails";
import PriceAndPayments from "./components/PriceAndPayments";
import Installments from "./components/Installments";
import TermsConditions from "./components/TermsConditions";
import ThankYouCard from "./components/ThankYouCard";
import ContractType from "./components/ContractType";
import DatePick from "./components/DatePick";
import {
  TransportFormDataTypes,
  ReviewDetailInterface,
} from "./transport.model";
import ReviewDetail from "./components/ReviewDetail";

interface TransportViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  prevHandler: () => void;
  nextHandler: () => void;
  setFormDataInParent: (formType: string, formValues: any) => void;
  reviewDetail: ReviewDetailInterface;
  setReviewDetail: React.Dispatch<React.SetStateAction<ReviewDetailInterface>>;
  formState: TransportFormDataTypes;
}

const TransportView: React.FC<TransportViewProps> = ({
  currentStep,
  setCurrentStep,
  nextHandler,
  prevHandler,
  setFormDataInParent,
  reviewDetail,
  setReviewDetail,
  formState,
}) => {
  const [
    selectedTransportSubcategory,
    setSelectedTransportSubcategory,
  ] = useState("");

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
          {currentStep === 1 && (
            <SubCategory
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              setSelectedTransportSubcategory={setSelectedTransportSubcategory}
            />
          )}
          {currentStep === 2 && (
            <ConfirmCreate
              selectedTransportSubcategory={selectedTransportSubcategory}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 3 && (
            <SelectMode
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
            />
          )}
          {currentStep === 4 && selectedTransportSubcategory === "Personal" && (
            <DatePick
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.contractDate}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 5 && selectedTransportSubcategory === "Personal" && (
            <FirstPartyDetail
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.firstPartyDetail}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 6 && selectedTransportSubcategory === "Personal" && (
            <SecondPartyDetail
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.secondPartyDetail}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 7 && selectedTransportSubcategory === "Personal" && (
            <CarDetails
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.carDetails}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 8 && selectedTransportSubcategory === "Personal" && (
            <PriceAndPayments
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.priceAndPayments}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 9 && selectedTransportSubcategory === "Personal" && (
            <Installments
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.installments}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 10 && (
            <TermsConditions
              nextHandler={nextHandler}
              prevHandler={prevHandler}
              defaultFormValues={formState.termsConditions}
              setFormDataInParent={setFormDataInParent}
            />
          )}
          {currentStep === 11 && <ThankYouCard />}
          {currentStep === 12 && (
            <ReviewDetail
              setCurrentStep={setCurrentStep}
              setReviewDetailInParent={setReviewDetail}
              defaultReviewDetail={reviewDetail}
            />
          )}
          {currentStep === 13 && (
            <ContractType setCurrentStep={setCurrentStep} prevStep={3} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TransportView;
