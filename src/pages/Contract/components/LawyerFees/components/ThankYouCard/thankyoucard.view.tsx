import React from "react";
import { Link } from "react-router-dom";

import Final from "../../../../../../assets/images/contract/cat final.png";

const ThankYouCardView = () => {
  return (
    <div>
      <div className="row">
        <div className="col col-12">
          <h2 className="text-center">Thank You</h2>
        </div>
        <div className="col col-12 p-3">
          <div className="text-center">
            <img src={Final} alt="Final" style={{ width: "25em" }} />
          </div>
          <div className="text-center mt-3">
            <Link to="/" className="btn btn-custom">
              Go to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouCardView;
