import React, { useState } from "react";
import FormsView from "./forms.view";

export type CurrentFlowType = "written" | "verbal" | "";

const Forms = () => {
  const [currentFlow, setCurrentFlow] = useState<CurrentFlowType>("");

  return (
    <FormsView setCurrentFlow={setCurrentFlow} currentFlow={currentFlow} />
  );
};

export default Forms;
