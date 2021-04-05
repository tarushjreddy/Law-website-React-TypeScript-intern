import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

import "./customcarousel.scss";

interface CustomCarouselViewProps {
  categories: any[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<any>>;
}

const CustomCarouselView: React.FC<CustomCarouselViewProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [tempCat, setTempCat] = useState<any>("");

  const confirmSelectedCategory = (category: string) => {
    if (selectedCategory === "") {
      setSelectedCategory(category);
    } else if (selectedCategory !== category) {
      setModalShow(true);
      setTempCat(category);
    }
  };

  const discardChange = () => {
    setModalShow(false);
  };

  const confirmChange = () => {
    setModalShow(false);
    setSelectedCategory(tempCat);
  };

  return (
    <div>
      <div className="my-carousel">
        {categories.map((category) => {
          return (
            <a
              key={category}
              className="my-carousel-item btn-outline"
              href={`#${category}!`}
            >
              <button
                onClick={() => confirmSelectedCategory(category)}
                className={`btn d-flex justify-content-center align-items-center 
                my-carousel-item-content shadow-none
                my-carousel-item-content-${
                  selectedCategory === category ? "active" : "inactive"
                }
                `}
              >
                {category}
              </button>
            </a>
          );
        })}
      </div>
      <Modal
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
      >
        <Modal.Header>
          <Modal.Title>
            Are you sure you want to quit? This redirection will discard all the
            entered details.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={confirmChange}>
            Yes
          </Button>
          <Button variant="secondary" onClick={discardChange}>
            No
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CustomCarouselView;
