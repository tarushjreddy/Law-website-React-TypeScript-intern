import React, { useState } from "react";
import ServicesView from "./services.view";

// import { div } from "react-scroll-section";

const Services = () => {
  const [selected, setSelected] = useState(0);

  return <ServicesView setSelected={setSelected} selected={selected} />;
};

export default Services;
