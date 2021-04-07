import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import StepConnector from "@material-ui/core/StepConnector";

import ColorLibStepIcon from "./components/ColorLibStepIcon";

interface StepperViewProps {
  show: boolean;
  active: number;
  count: number;
}

const ColorLibConnector = withStyles({
  alternativeLabel: {
    top: 28,
    left: "calc(-50% + 30px)",
    right: "calc(50% + 30px)",
  },
  active: {
    "& $line": {
      borderColor: "#242f40",
      backgroundColor: "#fff",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#242f40",
    },
  },
  line: {
    borderColor: "#BEC9DA",
    borderTopWidth: 2,
  },
})(StepConnector);

const StepperView: React.FC<StepperViewProps> = ({ show, active, count }) => {
  // 10 ** 4 = 10000
  const array = ("" + 10 ** (count - 1)).split("");

  return (
    <div>
      {show && (
        <Stepper
          alternativeLabel
          activeStep={active}
          connector={<ColorLibConnector />}
        >
          {array.map((label, index) => (
            <Step key={index}>
              <StepLabel
                StepIconComponent={(props) => (
                  <ColorLibStepIcon count={count} props={props} />
                )}
              ></StepLabel>
            </Step>
          ))}
        </Stepper>
      )}
    </div>
  );
};

export default StepperView;
