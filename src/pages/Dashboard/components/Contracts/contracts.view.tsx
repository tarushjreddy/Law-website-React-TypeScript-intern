import React, { useState } from "react";
import { Card, Nav } from "react-bootstrap";
import ContractCard from "./components/ContractCard";

import styles from "./contracts.module.scss";
import { CONTRACTS_DATA } from "./data";

const ContractsView = () => {
  const [locationHash, setLocationHash] = useState(
    window.location.hash || "#byAI"
  );

  return (
    <div className={styles["contractContainer"]}>
      <h2 className="text-custom mb-3">Contracts</h2>
      <Card>
        <Card.Header className={styles["links"]}>
          <Nav variant="tabs" defaultActiveKey={locationHash}>
            <Nav.Item>
              <Nav.Link href="#byAI" onClick={() => setLocationHash("#byAI")}>
                By AI
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#newContract"
                onClick={() => setLocationHash("#newContract")}
              >
                New Contract
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="#reviewContract"
                onClick={() => setLocationHash("#reviewContract")}
              >
                Review Contract
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div className="container px-2">
            <div className="container">
              {locationHash === "#byAI" &&
                CONTRACTS_DATA.byAI.map((contract, index) => (
                  <ContractCard key={index} contract={contract} />
                ))}
              {locationHash === "#newContract" &&
                CONTRACTS_DATA.newContract.map((contract, index) => (
                  <ContractCard key={index} contract={contract} />
                ))}
              {locationHash === "#reviewContract" &&
                CONTRACTS_DATA.reviewContract.map((contract, index) => (
                  <ContractCard key={index} contract={contract} />
                ))}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContractsView;
