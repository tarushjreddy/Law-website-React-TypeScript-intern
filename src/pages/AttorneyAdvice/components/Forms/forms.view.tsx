import React from "react";

import VerbalForm from "../Verbal";
import ChooseForm from "./components/ChooseForm";
import WrittenForm from "./components/Written";
import { CurrentFlowType } from "./forms.container";

interface FormsViewProps {
  currentFlow: CurrentFlowType;
  setCurrentFlow: React.Dispatch<React.SetStateAction<CurrentFlowType>>;
}

const FormsView: React.FC<FormsViewProps> = ({
  currentFlow,
  setCurrentFlow,
}) => {
  return (
    <div>
      {currentFlow === "written" ? (
        <WrittenForm />
      ) : currentFlow === "verbal" ? (
        <VerbalForm />
      ) : (
        <ChooseForm setCurrentFlow={setCurrentFlow} />
      )}
    </div>
  );
};

export default FormsView;
