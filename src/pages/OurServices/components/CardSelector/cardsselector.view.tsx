import React, { useState } from "react";
import ViewCardDesc from "./components/ViewCardDesc";
import CardView from "./components/CardView";
import { SERVICES_LIST } from "../../../../constants";

const CardSelector = () => {
  const [selected, setSelected] = useState<number>();

  const setOnSelect = (id: number) => {
    setSelected(id);
  };

  return (
    <div className="container">
      <ViewCardDesc service={SERVICES_LIST[selected || 0]} />
      <div className="row text-center justify-content-center">
        {SERVICES_LIST.map((service, index) => (
          <CardView
            key={index}
            title={service.name}
            link={service.link}
            id={index}
            isSelected={
              selected === undefined ? !(index % 2) : selected === index
            }
            selected={selected || 0}
            setSelected={setOnSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CardSelector;
