import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import Avatar from "@material-ui/core/Avatar";
import styles from "./application.module.scss";
//import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
//import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import CrumbSequence from "./components/CrumbSequence";
import WrittenReport from "./components/WrittenReport";
import { ApplicationData } from "../../../../dashboard.model";

interface ApplicationViewProps {
  data: ApplicationData;
}

const ApplicationView: React.FC<ApplicationViewProps> = ({ data }) => {
  const [expandedState, setExpandedState] = useState(false);
  const toggleFunction = () => {
    setExpandedState(!expandedState);
  };

  const firstCrumb = [data.consultationType];

  if (data.consultationType === "Verbal") {
    firstCrumb.push(data.mode);
    firstCrumb.push("Zoom");
  }

  const secondCrumb = [data.entity, data.sector];

  return (
    <>
      <div className={styles["rootApp"]}>
        <div
          style={{
            width: "95%",
            padding: "3% 0%",
            border: "2px solid #b8a046",
            borderRadius: "10px",
            backgroundColor: "#f7f7f7",
          }}
        >
          <div
            className="container col col-12"
            style={{
              justifyContent: "space-around",
              padding: "2%",
              display: "flex",
            }}
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z"></path>
                <path
                  fillRule="evenodd"
                  d="M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                ></path>
                <path
                  fillRule="evenodd"
                  d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z"
                ></path>
              </svg>
            </div>
            <div style={{ flexBasis: "41.66%" }}>
              <CrumbSequence crumbs={firstCrumb} />
              <br />
              <CrumbSequence crumbs={secondCrumb} />
            </div>

            <div className={styles["timeDateButton"]}>
              <h6 className={styles["date"]}>{data.date}</h6>
              <div className={styles["time"]}>
                {data.from} (duration - {data.duration} min)
              </div>
              {data.pay_link && (
                <Button
                  variant="outline-custom"
                  className="col-2 btn-sm"
                  style={{ marginTop: "20px" }}
                >
                  Pay Now
                </Button>
              )}
            </div>
          </div>
          <div className="container">
            {expandedState && (
              <WrittenReport
                entity={data.entity}
                name={data.name}
                phone={data.phone}
                ID={data.ID}
                address={data.address}
                city={data.city}
                domain={data.domain}
                date={data.date}
                fromTime={data.from}
                duration={data.duration}
              />
            )}
            <div className="container text-center">
              <Button
                variant="outline-custom"
                className="col-2 btn-sm"
                onClick={toggleFunction}
              >
                {expandedState ? "View Less" : "View More"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default ApplicationView;
