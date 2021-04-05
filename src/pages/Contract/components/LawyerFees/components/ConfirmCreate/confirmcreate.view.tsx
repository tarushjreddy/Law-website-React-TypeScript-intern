import React from "react";
import { Card, Button } from "react-bootstrap";

interface ConfirmCreateViewProps {
  currentStep: number;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

const ConfirmCreateView: React.FC<ConfirmCreateViewProps> = ({
  currentStep,
  setCurrentStep,
}) => {
  return (
    <div className="row justify-content-center">
      <Card style={{ width: "28rem" }}>
        <Card.Body>
          <Card.Title style={{ fontSize: "1.4em" }}>
            Create a Legal contract
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            neque provident veniam aut dolorum, aspernatur sunt omnis minima
            quos at laboriosam perferendis alias maxime fugit commodi voluptatum
            et. Quos, nemo?
          </Card.Text>
          <div className="text-center">
            <Button
              variant="custom"
              style={{
                width: "10em",
                fontSize: "1.2em",
              }}
              onClick={() => setCurrentStep(currentStep + 1)}
            >
              <svg
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className="bi bi-file-earmark-text-fill text-white mr-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M2 2a2 2 0 0 1 2-2h5.293A1 1 0 0 1 10 .293L13.707 4a1 1 0 0 1 .293.707V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm7.5 1.5v-2l3 3h-2a1 1 0 0 1-1-1zM4.5 8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              Create Contract
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ConfirmCreateView;
