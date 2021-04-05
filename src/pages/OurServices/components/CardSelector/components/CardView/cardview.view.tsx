import React from "react";
import { useHistory } from "react-router-dom";
import styles from "./cardview.module.scss";

interface CardViewProps {
  title: string;
  id: number;
  isSelected: boolean;
  selected: number;
  setSelected: (id: number) => void;
  link: string;
  imgLink?: string;
}

const CardView: React.FC<CardViewProps> = ({
  title,
  id,
  isSelected,
  setSelected,
  selected,
  link,
  imgLink,
}) => {
  const history = useHistory();
  return (
    <div
      key={id}
      className={`col-sm-3 m-3 ${styles["cardView"]} ${
        isSelected
          ? styles["cardView-selected"]
          : styles["cardView-not-selected"]
      }`}
      onClick={() => {
        setSelected(id);
        if (selected === id) history.push(link);
      }}
    >
      {title}
      {imgLink && (
        <img
          src={imgLink}
          style={{ height: "50%", width: "100%" }}
          alt="First Party"
          className="mt-5"
        />
      )}
    </div>
  );
};

export default CardView;
