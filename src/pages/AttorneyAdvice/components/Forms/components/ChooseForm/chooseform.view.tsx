import React from "react";
import { useTranslation } from "react-i18next";

import WrittenImage from "../../../../../../Zytcode Assets/PNG files/Business-Services.png";
import VerbalImage from "../../../../../../Zytcode Assets/PNG files/Business-Services2.png";
import { CurrentFlowType } from "../../forms.container";

interface ChooseFormViewProps {
  setCurrentFlow: React.Dispatch<React.SetStateAction<CurrentFlowType>>;
}

const ChooseFormView: React.FC<ChooseFormViewProps> = ({ setCurrentFlow }) => {
  const { t } = useTranslation("attorneyadvice");
  return (
    <div className="row">
      <div className="col-4"></div>
      <div className="col-8 row">
        <div className="col-md-6 col-sm-6">
          <div className="service-col-circle">
            <div className="scc-relative circle-1" style={{ width: "20em" }}>
              <img
                src={WrittenImage}
                alt="Choose Form 1"
                onClick={() => setCurrentFlow("written")}
              />
              <h4 onClick={() => setCurrentFlow("written")}>
                {t("text.written")}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="service-col-circle">
            <div className="scc-relative circle-1" style={{ width: "20em" }}>
              <img
                src={VerbalImage}
                alt="Choose Form 2"
                onClick={() => setCurrentFlow("verbal")}
              />
              <h4 onClick={() => setCurrentFlow("verbal")}>
                {t("text.verbal")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseFormView;
