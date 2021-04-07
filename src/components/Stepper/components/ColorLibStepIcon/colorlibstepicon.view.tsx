import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { StepIconProps } from "@material-ui/core/StepIcon";
import clsx from "clsx";

const useColorLibStepIconStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
    zIndex: 0,
    color: "#BEC9DA",
    padding: "10px",
    width: 60,
    height: 60,
    border: "2px solid #BEC9DA",
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  active: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    alignItems: "center",
    textAlign: "center",
    border: "2px solid #242f40",
    backgroundColor: "#fff",
    color: "#242f40",
  },
  completed: {
    alignItems: "center",
    paddingTop: "10px",
    border: "2px solid #242f40",
    backgroundColor: "#242f40",
    color: "#fff",
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
