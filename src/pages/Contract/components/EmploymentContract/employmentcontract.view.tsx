import React from "react";

import FirstPartyDetail from "./components/FirstPartyDetail";
import SecondPartyDetail from "./components/SecondPartyDetail";
import JobDetails from "./components/JobDetails";
import ContractDuration from "./components/ContractDuration";
import NoticePeriod from "./components/NoticePeriod";
import OtherBenefits from "./components/OtherBenefits";
import AnnualLeaveView from "./components/AnnualLeave";
import ThankYouCard from "./components/ThankYouCard";
import ConfirmCreate from "./components/ConfirmCreate";
import SelectMode from "./components/SelectMode";
import ReviewDetail from "./components/ReviewDetail";
import ContractType from "./components/ContractType";
import DatePick from "./components/DatePick";
import {
  EmploymentFormDataTypes,
  ReviewDetailInterface,
} from "./employmentcontract.model";

interface EmploymentContractViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  prevHandler: () => void;
  nextHandler: () => void;
  setFormDataInParent: (formType: string, formValues: any) => void;
  reviewDetail: ReviewDetailInterface;
  setReviewDetail: React.Dispatch<React.SetStateAction<ReviewDetailInterface>>;
  formState: EmploymentFormDataTypes;
}

const EmploymentContractView: React.FC<EmploymentContractViewProps> = ({
  currentStep,
  setCurrentStep,
  nextHandler,
  prevHandler,
  setFormDataInParent,
  reviewDetail,
  setReviewDetail,
  formState,
}) => {
  return (
    <div
      className="row justify-content-center align-content-center"
      style={{
        height: "38em",
      }}
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
            prevHandler={prevHandler}
            nextHandler={nextHandler}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 3 && (
          <FirstPartyDetail
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.firstPartyDetail}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 4 && (
          <SecondPartyDetail
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.secondPartyDetail}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 5 && (
          <JobDetails
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.jobDetail}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 6 && (
          <ContractDuration
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.contractDuration}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 7 && (
          <NoticePeriod
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.noticePeriod}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 8 && (
          <OtherBenefits
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.otherBenefits}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 9 && (
          <AnnualLeaveView
            nextHandler={nextHandler}
            prevHandler={prevHandler}
            defaultFormValues={formState.annualLeave}
            setFormDataInParent={setFormDataInParent}
          />
        )}
        {currentStep === 10 && <ThankYouCard />}
        {currentStep === 11 && (
          <ReviewDetail
            setCurrentStep={setCurrentStep}
            setReviewDetailInParent={setReviewDetail}
            defaultReviewDetail={reviewDetail}
          />
        )}
        {currentStep === 12 && <ContractType setCurrentStep={setCurrentStep} />}
      </div>
    </div>
  );
};

export default EmploymentContractView;
