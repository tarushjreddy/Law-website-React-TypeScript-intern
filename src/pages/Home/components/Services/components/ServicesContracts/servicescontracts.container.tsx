import React from "react";
import { Link } from "react-router-dom";

const ServicesContracts = () => {
  return (
    <div className="service-col-text service-col-con-3">
      <h1>Contracts</h1>
      <img src="media/images/Contracts.jpg" alt="" />
      <p>
        Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <div className="service-btn">
        <div className="my-button">
          <Link to="/contract">Learn More</Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesContracts;
