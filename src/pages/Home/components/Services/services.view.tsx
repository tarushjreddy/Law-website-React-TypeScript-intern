import React from "react";

import ServicesLegalAdvice from "./components/ServicesLegalAdvice";
import ServicesBusiness from "./components/ServicesBusiness";
import ServicesBusinessTwo from "./components/ServicesBusinessTwo";
import ServicesContracts from "./components/ServicesContracts";
import ServicesWillsTrusts from "./components/ServicesWillsTrusts";
import ServicesWorkplace from "./components/ServicesWorkplace";

interface ServiceViewProps {
  selected: number;
  setSelected: (id: number) => void;
}

const ServicesView: React.FC<ServiceViewProps> = ({
  selected,
  setSelected,
}) => {
  return (
    <div id="services" className="my-service">
      <div className="container">
        <div className="my-service-content">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              {selected === 0 && <ServicesLegalAdvice />}
              {selected === 1 && <ServicesWillsTrusts />}
              {selected === 2 && <ServicesContracts />}
              {selected === 3 && <ServicesBusiness />}
              {selected === 4 && <ServicesWorkplace />}
              {selected === 5 && <ServicesBusinessTwo />}
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-col-circle">
                <div className="spacer-circle" />
                <div
                  className="scc-relative circle-1"
                  onClick={() => setSelected(0)}
                >
                  <img src="media/images/Legal-Advice.png" alt="Legal Advice" />
                  <h4>Legal Advice</h4>
                </div>
                <div
                  className="scc-relative circle-2"
                  onClick={() => setSelected(1)}
                >
                  <img
                    src="media/images/Wills&Trusts.png"
                    alt="Wills and Trusts"
                  />
                  <h4>Wills &amp; Trusts</h4>
                </div>
                <div
                  className="scc-relative circle-3"
                  onClick={() => setSelected(2)}
                >
                  <img src="media/images/Contracts.png" alt="Contracts" />
                  <h4>Contracts</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="service-col-circle">
                <div
                  className="scc-relative circle-4"
                  onClick={() => setSelected(3)}
                >
                  <img
                    src="media/images/Business-Services.png"
                    alt="Business Services"
                  />
                  <h4>Business Services</h4>
                </div>
                <div
                  className="scc-relative circle-5"
                  onClick={() => setSelected(4)}
                >
                  <img
                    src="media/images/Workplace-Benefit.png"
                    alt="Workplace Benefit"
                  />
                  <h4>Workplace Benefit</h4>
                </div>
                <div
                  className="scc-relative circle-6"
                  onClick={() => setSelected(5)}
                >
                  <img
                    src="media/images/Business-Services2.png"
                    alt="Business Services"
                  />
                  <h4>Business Services</h4>
                </div>
                <div className="spacer-circle" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesView;
