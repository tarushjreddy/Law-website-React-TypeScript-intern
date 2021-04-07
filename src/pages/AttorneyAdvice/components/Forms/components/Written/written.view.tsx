import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./written.module.scss";
import Welcome from "./components/Welcome";
import EntityForm from "./components/EntityForm";
//import TimeDateSplash from "./components/TimeDateSplash";
//import DateTimePick from "./components/DateTimePick";
import AudioSplash from "../../../Verbal/components/AudioSplash";
import AudioContainer from "../../../Verbal/components/AudioContainer";
import DocumentSplash from "../../../Verbal/components/DocumentSplash";
import DocumentPicker from "../../../Verbal/components/DocumentPicker";
import TellUsMore from "./components/TellUsMore";
import WrittenDescription from "./components/WrittenDescription";
import WrittenReport from "./components/WrittenReport";
import {
  registerLegalAdvice,
  updateLegalService,
} from "../../../../../../services/apis";
import Stepper from "../../../../../../components/Stepper";
import { AudioType } from "../../../Verbal/components/AudioContainer/audiocontainer.view";
import Popup from "../../../../../../components/Popup";
import {
  EntityDataType,
  SectorDataType,
  SlotDataType,
} from "../../../../attorneyadvice.model";
// import { retroFormatDate } from "../../../../../../utils";

const MAX_WRITTEN_STEP_SIZE = 4;

export interface FormStateDataTypes {
  isEntitySet: boolean;
  isSectorSet: boolean;
  isDateSet: boolean;
  entityData: EntityDataType;
  sectorData: SectorDataType;
  //slotData: SlotDataType;
  consultationType: string;
  audios: AudioType[];
  uploadedFiles: File[];
}

const WrittenView = () => {
  let containerClass = styles["container"];
  let history = useHistory();
  const [showStepper, setShowStepper] = useState(true);
  const [stepperState, setStepperState] = useState({
    step: 0,
  });

  const [formState, setFormState] = useState<FormStateDataTypes>({
    isEntitySet: false,
    isSectorSet: false,
    isDateSet: false,
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
    // slotData: {
    //   date: retroFormatDate(new Date()),
    //   fromTime: null,
    //   toTime: null,
    // },
    consultationType: "",
    audios: [],
    uploadedFiles: [],
  });

  const [responseState, setResponseState] = useState({});
  const [modalShowState, setModalShowState] = useState(false);
  const [registerState, setRegisterState] = useState(false);
  // const [registerLegalState, setRegisterLegalState] = useState({});
  const [requestBody, setRequestBody] = useState({});

  // const showModal = () => {
  //   setModalShowState(true);
  // };

  const setAudiosInParent = (audios: AudioType[]) => {
    setFormState((prev) => {
      prev.audios = audios;
      return prev;
    });
  };

  const setUploadFilesInParent = (files: any[]) => {
    setShowStepper(false);
    setRegisterState(true);
    setFormState((prev) => {
      prev.uploadedFiles = files;
      return prev;
    });
  };

  const hideModal = () => {
    setModalShowState(false);
  };

  const incrementStepper = () => {
    //Don't delete this conosle.log (for ref on every step)
    console.log(formState);
    setStepperState({
      step: stepperState.step + 1,
    });
  };

  const decrementStepper = () => {
    setShowStepper(true);
    setStepperState({
      step: stepperState.step - 1,
    });
  };

  const confirmHandler = () => {
    if (!localStorage.getItem("AUTH_TOKEN")) {
      setModalShowState(true);
    } else {
      if (!registerState) {
        setRegisterState(true);
      } else {
        const requestBodyForRegisterLegalService = {
          name: "Legal Advice",
          type: "legal_advice",
          mode: "written",
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
        //---------------------------------for backend connection------------------------------//
        const withRegisterState = async () => {
          const responseForRegisterLegalAdvice = await registerLegalAdvice(
            requestBodyForRegisterLegalService,
            setResponseState,
            responseState
          );
          console.log(responseForRegisterLegalAdvice);
          const responseForUpdateLegalService = updateLegalService(
            responseForRegisterLegalAdvice,
            responseForRegisterLegalAdvice.data.data._id
          );
          console.log(responseForUpdateLegalService);
          //console.log(props);
          responseForUpdateLegalService.then((res) => {
            console.log(res);
            history.push("/dashboard");
          });
        };
        withRegisterState();
      }
    }
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
    console.log("Request ", requestBody);

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

  const setEntityInParent = (entityValues: any) => {
    setFormState({
      ...formState,
      entityData: {
        ...formState.entityData,
        ...entityValues,
      },
    });
  };

  /*  const setSlotDateTimeInParent = (slotDateTimeValues: any) => {
    setFormState({
      ...formState,
      slotData: {
        ...formState.slotData,
        ...slotDateTimeValues,
      },
    });
  };*/

  const setSectorDataInParent = (sectorData: any) => {
    setFormState({
      ...formState,
      sectorData: {
        ...formState.sectorData,
        ...sectorData,
      },
    });
  };

  let leftPaneCode = null;
  let rightPaneCode = null;
  let panes;

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
    leftPaneCode = <TellUsMore />;

    rightPaneCode = (
      <WrittenDescription
        backFunction={decrementStepper}
        nextHandler={incrementStepper}
        sectorFormData={formState.sectorData}
        setSectorDataInParent={setSectorDataInParent}
      />
    );
  } else if (stepperState.step === 2) {
    leftPaneCode = <AudioSplash />;

    rightPaneCode = (
      <AudioContainer
        backFunction={decrementStepper}
        nextFunction={incrementStepper}
        defaultAudios={formState.audios}
        setAudiosInParent={setAudiosInParent}
      />
    );
  } else if (stepperState.step === 3) {
    leftPaneCode = <DocumentSplash />;
    rightPaneCode = (
      <DocumentPicker
        backFunction={decrementStepper}
        nextFunction={incrementStepper}
        uploadedFiles={formState.uploadedFiles}
        setUploadFilesInParent={setUploadFilesInParent}
      />
    );
    //leftPaneCode = <TimeDateSplash />;

    /*rightPaneCode = {
      <DateTimePick
              nextFunction={incrementStepper}
              backFunction={decrementStepper}
              slotDateTime={formState.slotData}
              setSlotDateTimeInParent={setSlotDateTimeInParent}
            />
    };*/
  } else if (stepperState.step === 4) {
    containerClass = styles["paneContainer"];
    panes = (
      <div className={styles["pane"]}>
        <WrittenReport
          data={formState}
          backFunction={decrementStepper}
          confirmHandler={confirmHandler}
        />
      </div>
    );
  }

  if (stepperState.step !== MAX_WRITTEN_STEP_SIZE) {
    panes = (
      <React.Fragment>
        <div className={styles["leftPane"]}>{leftPaneCode}</div>
        <div className={styles["rightPane"]}>{rightPaneCode}</div>
      </React.Fragment>
    );
  }

  return (
    <div className="container">
      <div className={styles["stepper"]}>
        <Stepper
          show={showStepper}
          active={stepperState.step}
          count={MAX_WRITTEN_STEP_SIZE}
        />
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

export default WrittenView;
