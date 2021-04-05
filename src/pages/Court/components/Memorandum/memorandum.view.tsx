import React from "react";

import CaseType from "../CaseType";
import Information from "../Information";
import CaseDetails from "../CaseDetails";
import UserDetails from "../UserDetails";
import ServiceType from "../ServiceType";
import AdditionalAudioInfo from "../AdditionalAudioInfo";
import AdditionalFileInfo from "../AdditionalFileInfo";
import AdditionalTextInfo from "../AdditionalTextInfo";
import ConsultionType from "../ConsultionType";
import OnlinePlatform from "../OnlinePlatform";
import OfflinePlatform from "../OfflinePlatform";
import Report from "../Report";

import { FormDataInterface } from "../../court.model";

interface MemorandumViewProps {
  currentStep: number;
  setFormDataInParent: (formType: string, formValues: any) => void;
  nextHandler: () => void;
  prevHandler: () => void;
  formData: FormDataInterface;
  submitHandler: () => void;
}

const MemorandumView: React.FC<MemorandumViewProps> = ({
  currentStep,
  setFormDataInParent,
  nextHandler,
  prevHandler,
  formData,
  submitHandler,
}) => {
  return (
    <div>
      {currentStep === 0 && (
        <CaseType
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          caseType={formData.caseType}
        />
      )}
      {currentStep === 1 && (
        <Information
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          informationValues={formData.information}
        />
      )}
      {currentStep === 2 && (
        <CaseDetails
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          caseDetailsValues={formData.caseDetails}
        />
      )}
      {currentStep === 3 && (
        <UserDetails
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          userDetailsValues={formData.userDetails}
        />
      )}
      {currentStep === 4 && (
        <ServiceType
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          sSDetailsValues={formData.sSDetails}
        />
      )}
      {currentStep === 5 && (
        <AdditionalAudioInfo
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          audioInfoValues={formData.audioInfo}
        />
      )}
      {currentStep === 6 && (
        <AdditionalFileInfo
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          fileInfoValues={formData.fileInfo}
        />
      )}
      {currentStep === 7 && (
        <AdditionalTextInfo
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          addTextValues={formData.textInfo}
        />
      )}
      {currentStep === 8 && (
        <ConsultionType
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          consultionTypeValues={formData.consultionType}
        />
      )}
      {currentStep === 9 && formData.consultionType.type === "Online" && (
        <OnlinePlatform
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          platformValues={formData.onlinePlatform}
        />
      )}
      {currentStep === 9 && formData.consultionType.type === "Offline" && (
        <OfflinePlatform
          setFormDataInParent={setFormDataInParent}
          nextHandler={nextHandler}
          prevHandler={prevHandler}
          platformValues={formData.offlinePlatform}
        />
      )}
      {currentStep === 10 && (
        <Report
          prevHandler={prevHandler}
          formData={formData}
          submitHandler={submitHandler}
        />
      )}
    </div>
  );
};

export default MemorandumView;
