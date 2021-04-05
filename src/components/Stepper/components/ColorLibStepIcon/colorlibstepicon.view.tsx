import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { StepIconProps } from "@material-ui/core/StepIcon";
import clsx from "clsx";

const useColorLibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#ccc",
    zIndex: 0,
    color: "#fff",
    width: 60,
    height: 60,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    border: "5px solid rgb(255, 214, 69)",
    backgroundColor: "#151A44",
  },
  completed: {
    border: "5px solid rgb(255, 214, 69)",
    backgroundColor: "#151A44",
  },
});

interface ColorLibStepIconViewProps {
  count: number;
  props: StepIconProps;
}

const ColorLibStepIconView: React.FC<ColorLibStepIconViewProps> = ({
  count,
  props,
}) => {
  const classes = useColorLibStepIconStyles();
  const { active, completed } = props;
  let i = 1;
  const array: any = {};
  while (i <= count) {
    array[i] = <div style={{ fontSize: "25px" }}>{i}</div>;
    i++;
  }

  const icons: { [index: string]: React.ReactElement } = array;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
};

export default ColorLibStepIconView;
