import React, { useState } from "react";

import { CategoriesType } from "./contract.model";
import ContractView from "./contract.view";

const Contract = () => {
  const categories: CategoriesType[] = [
    "Legal Agreement",
    "Transport Contract",
    "Employment Contract",
  ];

  const [selectedCategory, setSelectedCategory] = useState<CategoriesType>("");

  return (
    <ContractView
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default Contract;
