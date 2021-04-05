import React from "react";
import { Link } from "react-router-dom";

interface ViewCardDescProps {
  service: {
    name: string;
    link: string;
    description: string;
    imageLink: string;
  };
}

const ViewCardDesc: React.FC<ViewCardDescProps> = ({ service }) => {
  return (
    <div className="mt-5">
      <div className="container">
        <div className="row my-2 justify-content-center">
          <div className="col-md-5 col-sm-12">
            <img
              src={service.imageLink}
              style={{ height: "370px", width: "90%", borderRadius: "20px" }}
              alt=""
            />
          </div>
          <div className="col-md-5 col-sm-12">
            <h3>{service.name}</h3>
            <p style={{ fontSize: "1.1em", textAlign: "justify" }}>
              {service.description}
            </p>
            <div className="my-button text-center">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to={service.link}>Learn More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCardDesc;
