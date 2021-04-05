import React from "react";
import styles from "./cardview.module.scss";

interface CardViewProps {
  title: string;
  id: number;
  isSelected: boolean;
  setSelected: (id: number) => void;
  imgLink: string;
  width?: string;
}

const CardView: React.FC<CardViewProps> = ({
  title,
  id,
  isSelected,
  setSelected,
  imgLink,
  width,
}) => {
  let widthFinal = "60%";
  let clsName = "m-4";
  if (width) {
    widthFinal = width;
    clsName = "m-5";
  }
  let flexS = "";
  if (localStorage.getItem("lang") === "ar") {
    flexS = "0 0 27%";
  }
  return (
    <div
      key={id}
      className={`col-md-4 m-3 ${styles["cardView"]} ${
        isSelected
          ? styles["cardView-selected"]
          : styles["cardView-not-selected"]
      }`}
      style={{ flex: flexS }}
      onClick={() => setSelected(id)}
    >
      <div className="mt-3">
        <p>{title}</p>
        <img
          src={imgLink}
          style={{ width: widthFinal }}
          alt="selectePlatform"
          className={clsName}
        />
      </div>
    </div>
  );
};

export default CardView;
