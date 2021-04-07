import React, { useState, useGlobal } from "reactn";
import { useHistory } from "react-router-dom";

import styles from "./verbal.module.scss";
import Stepper from "../../../../components/Stepper";
import AudioSplash from "./components/AudioSplash";
import DocumentSplash from "./components/DocumentSplash";
import DocumentPicker from "./components/DocumentPicker"; //for DocumentPicker
import ConsultationSplash from "./components/ConsultationSplash";
import OnlineOfflinePicker from "./components/OnlineOfflinePicker";
import OnlineSplash from "./components/OnlineSplash";
import PlatformPicker from "./components/PlatformPicker";
import OfflineSplash from "./components/OfflineSplash";
import OfflinePicker from "./components/OfflinePicker";
import OfficeSplash from "./components/OfficeSplash";
import OfficePicker from "./components/OfficePicker";
import ExternalSplash from "./components/ExternalSplash";
import LocationPicker from "./components/LocationPicker";
import VerbalReport from "./components/VerbalReport";
import AudioContainer from "./components/AudioContainer";
import { AudioType } from "./components/AudioContainer/audiocontainer.view";
import Popup from "../../../../components/Popup";
import {
  registerLegalAdvice,
  updateLegalService,
} from "../../../../services/apis";
import Welcome from "../Forms/components/Written/components/Welcome";
import EntityForm from "../Forms/components/Written/components/EntityForm";
import TimeDateSplash from "../Forms/components/Written/components/TimeDateSplash";
import DateTimePick from "../Forms/components/Written/components/DateTimePick";
import TellUsMore from "../Forms/components/Written/components/TellUsMore";
import WrittenDescription from "../Forms/components/Written/components/WrittenDescription";
import {
  EntityDataType,
  SectorDataType,
  SlotDataType,
} from "../../attorneyadvice.model";
import { retroFormatDate } from "../../../../utils";

interface formStateTypes {
  isEntitySet: boolean;
  isSectorSet: boolean;
  isDateSet: boolean;
  report: boolean;
  entityData: EntityDataType;
  sectorData: SectorDataType;
  slotData: SlotDataType;

  consultationType: string;
  platform: string;

  offline: {
    type: string;
    branchOffice: any;
    location: string;
  };

  audios: AudioType[];
  uploadedFiles: File[];
}

const VerbalView = () => {
  let history = useHistory();
  const { isLoginned } = useGlobal("userDetail")[0];

  let containerClass = styles["container"];

  const [showStepperState, setShowStepperState] = useState<boolean>(true);
  //------------------------------change it to 0 when pushing------------------------------//
  const [stepperState, setStepperState] = useState({
    step: 0,
  });

  const [responseState, setResponseState] = useState({});
  const [modalShowState, setModalShowState] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  const [registerLegalState, setRegisterLegalState] = useState({});
  const [requestBody, setRequestBody] = useState({});

  const [formState, setFormState] = useState<formStateTypes>({
    isEntitySet: false,
    isSectorSet: false,
    isDateSet: false,
    report: false,
    entityData: {
      entity: null,
      name: "",
      phone: "",
      id: "",
      address: "",
      city: "",
      type: "",
    },
    sectorData: {
      sector: "",
      subject: "",
      details: "",
      type: "",
    },
    slotData: {
      date: retroFormatDate(new Date()),
      fromTime: "",
      toTime: "30 Minutes",
    },
    consultationType: "",
    platform: "",
    offline: {
      type: "",
      branchOffice: "",
      location: "",
    },
    audios: [],
    uploadedFiles: [],
  });

  const setAudiosInParent = (audios: AudioType[]) => {
    setFormState((prev) => {
      prev.audios = audios;
      return prev;
    });
  };

  const setUploadFilesInParent = (files: any[]) => {
    setFormState((prev) => {
      prev.uploadedFiles = files;
      return prev;
    });
  };

  const showModal = () => {
    setModalShowState(true);
  };

  const hideModal = () => {
    setModalShowState(false);
  };

  const showStepper = () => {
    setShowStepperState(true);
  };

  const hideStepper = () => {
    setShowStepperState(false);
  };

  const incrementStepper = () => {
    //Don't delete this conosle.log (for ref on every step)
    console.log(formState);
    setStepperState({
      step: stepperState.step + 1,
    });
  };

  const decrementStepper = () => {
    showStepper();
    setStepperState({
      step: stepperState.step - 1,
    });
  };

  const addReport = () => {
    hideStepper();
    setFormState({
      ...formState,
      report: true,
    });
    //Don't delete this conosle.log (for ref on last submit)
    console.log(formState);
  };

  const setReport = (param: boolean) => {
    setFormState({
      ...formState,
      report: param,
      consultationType: "",
      offline: {
        ...formState.offline,
        type: "",
      },
    });
  };

  const popupFunction = () => {
    const requestBodyForRegisterLegalService = {
      name: "Legal Advice",
      type: "legal_advice",
      mode: "verbal",
      sub_type: "Keep this as is",
      specialty: "5f5d75a43a19874cd76cb558",
      lawyer_detail: "5f7306ada234e100173f29b4",
      customer: {
        customer_name: formState.entityData.name,
        customer_id: formState.entityData.id,
        customer_address: formState.entityData.address,
        customer_other_info: "customer other addition info here",
        customer_phone: formState.entityData.phone,
        customer_city: formState.entityData.city,
        customer_type: formState.entityData.type,
        customer_sector: formState.sectorData.type,
      },
      initial_info: {
        subject: formState.sectorData.subject,
        description: formState.sectorData.details,
        files: [],
      },
    };
    setRequestBody({ requestBodyForRegisterLegalService });
    async function withoutRegisterState() {
      const responseForRegisterLegalAdvice = await registerLegalAdvice(
        requestBodyForRegisterLegalService,
        setResponseState,
        responseState
      );
      console.log(responseForRegisterLegalAdvice);
      const responseForUpdateLegalService = updateLegalService(
        requestBodyForRegisterLegalService,
        responseForRegisterLegalAdvice.data.data._id
      );
      responseForUpdateLegalService.then((res) => {
        console.log(res);
        history.push("/dashboard");
      });
    }
    withoutRegisterState();
  };

  const confirmHandler = () => {
    console.log("Data  :", formState);

    // to be used after everything completed (checking login also)
    if (!isLoginned) {
      setModalShowState(true);
    } else {
      if (!registerState) {
        setRegisterState(true);
        popupFunction();
      } else {
        const withRegisterState = async () => {
          console.log("AA :", registerLegalState);

          const responseForRegisterLegalAdvice = await registerLegalAdvice(
            registerLegalState,
            setResponseState,
            responseState
          );
          console.log("BB : ", responseForRegisterLegalAdvice);
          const responseForUpdateLegalService = updateLegalService(
            registerLegalState,
            responseForRegisterLegalAdvice.data.data._id
          );
          console.log(responseForUpdateLegalService);
          // console.log(props);
          responseForUpdateLegalService.then((res) => {
            console.log(res);
            history.push("/dashboard");
          });
        };
        withRegisterState();
      }
    }
  };

  const clearOnlineOffline = () => {
    setFormState({
      ...formState,
      consultationType: "",
    });
  };

  const clearOffline = () => {
    setFormState({
      ...formState,
      offline: {
        ...formState.offline,
        type: "",
      },
    });
  };

  const onlineOfflinePickFunction = (param: string) => {
    setFormState({
      ...formState,
      consultationType: param,
    });
  };

  const platformSetter = (param: string) => {
    hideStepper();
    setFormState({
      ...formState,
      platform: param,
      report: true,
    });
  };

  const typeSetter = (param: string) => {
    setFormState({
      ...formState,
      offline: {
        ...formState.offline,
        type: param,
      },
    });
  };

  const officeSetter = (param: any) => {
    setFormState({
      ...formState,
      offline: {
        ...formState.offline,
        branchOffice: param,
      },
    });
  };

  //----------not setting location (in prev code also)------------//
  const locationSetter = (param: string) => {
    //console.log(param);
    hideStepper();
    setFormState({
      ...formState,
      offline: {
        ...formState.offline,
        location: param,
      },
    });
    addReport();
  };

  let leftPaneCode = null;
  let rightPaneCode = null;

  let panes = (
    <React.Fragment>
      <div className={styles["leftPane"]}>{leftPaneCode}</div>
      <div className={styles["rightPane"]}>{rightPaneCode}</div>
    </React.Fragment>
  );

  const setEntityInParent = (entityValues: any) => {
    setFormState({
      ...formState,
      entityData: {
        ...formState.entityData,
        ...entityValues,
      },
    });
  };

  const setSlotDateTimeInParent = (slotDateTimeValues: any) => {
    setFormState({
      ...formState,
      slotData: {
        ...formState.slotData,
        ...slotDateTimeValues,
      },
    });
  };

  const setSectorDataInParent = (sectorData: any) => {
    setFormState({
      ...formState,
      sectorData: {
        ...formState.sectorData,
        ...sectorData,
      },
    });
  };

  if (stepperState.step === 0) {
    leftPaneCode = <Welcome />;

    rightPaneCode = (
      <EntityForm
        nextFunction={incrementStepper}
        entityFormData={formState.entityData}
        setEntityInParent={setEntityInParent}
      />
    );
  } else if (stepperState.step === 1) {
    leftPaneCode = <TimeDateSplash />;

    rightPaneCode = (
      <DateTimePick
        nextFunction={incrementStepper}
        backFunction={decrementStepper}
        slotDateTime={formState.slotData}
        setSlotDateTimeInParent={setSlotDateTimeInParent}
      />
    );
  } else if (stepperState.step === 2) {
    leftPaneCode = <TellUsMore />;

    rightPaneCode = (
      <WrittenDescription
        backFunction={decrementStepper}
        nextHandler={incrementStepper}
        sectorFormData={formState.sectorData}
        setSectorDataInParent={setSectorDataInParent}
        required={false}
      />
    );
  } else if (stepperState.step === 3) {
    leftPaneCode = <AudioSplash />;

    rightPaneCode = (
      <AudioContainer
        backFunction={decrementStepper}
        nextFunction={incrementStepper}
        defaultAudios={formState.audios}
        setAudiosInParent={setAudiosInParent}
      />
    );
  } else if (stepperState.step === 4) {
    leftPaneCode = <DocumentSplash />;

    rightPaneCode = (
      <DocumentPicker
        backFunction={decrementStepper}
        nextFunction={incrementStepper}
        uploadedFiles={formState.uploadedFiles}
        setUploadFilesInParent={setUploadFilesInParent}
      />
    );
  } else if (stepperState.step === 5) {
    if (!formState.report) {
      leftPaneCode = <ConsultationSplash />;

      rightPaneCode = (
        <OnlineOfflinePicker
          selectFunction={onlineOfflinePickFunction}
          backFunction={decrementStepper}
        />
      );

      if (formState.consultationType === "Online") {
        leftPaneCode = <OnlineSplash />;
        rightPaneCode = (
          <PlatformPicker
            selectFunction={platformSetter}
            clearOnlineOffline={clearOnlineOffline}
          />
        );
      } else if (formState.consultationType === "Offline") {
        leftPaneCode = <OfflineSplash />;
        rightPaneCode = (
          <OfflinePicker
            selectFunction={typeSetter}
            backFunction={clearOnlineOffline}
          />
        );

        if (formState.offline.type === "Branch Office") {
          leftPaneCode = <OfficeSplash />;
          rightPaneCode = (
            <OfficePicker
              selectFunction={officeSetter}
              office={formState.offline.branchOffice}
              nextFunction={addReport}
              backFunction={clearOffline}
            />
          );
        } else if (formState.offline.type === "External Location") {
          leftPaneCode = <ExternalSplash />;
          rightPaneCode = (
            <LocationPicker
              confirmHandler={locationSetter}
              backFunction={clearOffline}
            />
          );
        }
      }
    } else {
      containerClass = styles["paneContainer"];
      panes = (
        <div className={styles["pane"]}>
          <VerbalReport
            backFunction={decrementStepper}
            name={formState.entityData.name}
            phone={formState.entityData.phone}
            ID={formState.entityData.id}
            address={formState.entityData.address}
            city={formState.entityData.city}
            domain={formState.sectorData.sector}
            date={formState.slotData.date}
            fromTime={formState.slotData.fromTime}
            toTime={formState.slotData.toTime}
            confirmHandler={confirmHandler}
            medium={formState.consultationType}
            platform={formState.platform}
            history={history}
            setReport={setReport}
          />
        </div>
      );
    }
  }
  if (!formState.report) {
    panes = (
      <React.Fragment>
        <div className={styles["leftPane"]}>{leftPaneCode}</div>
        <div className={styles["rightPane"]}>{rightPaneCode}</div>
      </React.Fragment>
    );
  }

  return (
    <div className={containerClass}>
      <div className={styles["stepper"]}>
        <Stepper show={showStepperState} active={stepperState.step} count={6} />
      </div>
      <Popup
        show={modalShowState}
        setter={setModalShowState}
        onHide={hideModal}
        popupFunction={popupFunction}
      />
      <div>{panes}</div>
    </div>
  );
};

export default VerbalView;
