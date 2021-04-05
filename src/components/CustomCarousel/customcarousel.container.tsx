import React, { useEffect } from "react";

import CustomCarouselView from "./customcarousel.view";
import C from "./lib/carousel";

interface CustomCarouselProps {
  categories: any[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<any>>;
}

const CustomCarousel: React.FC<CustomCarouselProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    const elem = document.querySelectorAll(".my-carousel");
    C.init(elem, { padding: 200 });
  }, []);

  return (
    <CustomCarouselView
      categories={categories}
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
    />
  );
};

export default CustomCarousel;
