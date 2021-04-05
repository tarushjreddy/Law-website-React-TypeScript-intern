import React from "react";
import { Button } from "react-bootstrap";
import styles from "./verbalreport.module.scss";

interface VerbalReportProps {
  backFunction: () => void;
  entity?: any;
  name: string;
  phone: string;
  ID: string;
  address: string;
  city: string;
  domain: string;
  date?: string | Date | null;
  fromTime?: string | null;
  toTime?: string | null;
  confirmHandler: () => void;
  medium: string;
  platform: string;
  history: any;
  setReport: (param: boolean) => void;
}

const VerbalReport: React.FC<VerbalReportProps> = ({
  backFunction,
  entity,
  name,
  phone,
  ID,
  address,
  city,
  domain,
  date,
  fromTime,
  toTime,
  confirmHandler,
  medium,
  platform,
  history,
  setReport,
}) => {
  const formatDate = (date: any) => {
    date = new Date(date);
    const day = date.getDate();
    let month = date.getMonth();
    const year = date.getFullYear();
    return day + "/" + month + "/" + year;
  };

  const formatTime = (time: any) => {
    time = new Date(time);
    const hours = time.getHours();
    const minutes = time.getMinutes();

    const ampm = hours >= 12 ? "PM" : "AM";
    return hours + ":" + minutes + " " + ampm;
  };

  const setVerbalReport = () => {
    setReport(false);
    backFunction();
  };

  let buttonCode = (
    <Button variant="secondary" onClick={confirmHandler}>
      CONFIRM
    </Button>
  );

  let backButtonCode = (
    <Button
      variant="secondary"
      onClick={() => setVerbalReport()}
      style={{ paddingRight: "28px", paddingLeft: "28px" }}
    >
      BACK
    </Button>
  );

  // for use from dashboard
  // if (fixed) {
  //   buttonCode = null;
  //   backButtonCode = null;
  // }

  let platformCode = null;

  if (medium === "Online") {
    platformCode = (
      <React.Fragment>
        <div className={styles.flexElement}>
          <p>
            <b>Consultation Platform</b>
          </p>
          <p>{platform}</p>
        </div>
        <hr />
      </React.Fragment>
    );
  }

  return (
    <div className={styles.bigContainer}>
      <div className={styles.container}>
        <div className={styles.header}>
          {/* <h3></h3> */}
          <hr />
        </div>
        <div className={styles.profile}>
          <div className={styles.headerFlex}>
            <p>
              <b>Profile</b>
            </p>
            <p>{entity}</p>
          </div>
          <div className={styles.subheader}>
            <div className={styles.subElements}>
              <div className={styles.subElement}>
                <p>Name</p>
                <p>{name}</p>
              </div>
              <div className={styles.subElement}>
                <p>Mobile Number</p>
                <p>{phone}</p>
              </div>
              <div className={styles.subElement}>
                <p>ID Number</p>
                <p>{ID}</p>
              </div>
              <div className={styles.subElement}>
                <p>Address</p>
                <p>{address}</p>
              </div>
              <div className={styles.subElement}>
                <p>City</p>
                <p>{city}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles.domain}>
          <div className={styles.flexElement}>
            <p>
              <b>Legal Advice Domain</b>
            </p>
            <p>{domain}</p>
          </div>
          <hr />
        </div>
        <div className={styles.slot}>
          <div className={styles.flexElement}>
            <p>
              <b>Scheduled slot</b>
            </p>
            <p>
              {formatDate(date)}, {formatTime(fromTime)} (duration - {toTime})
            </p>
          </div>
          <hr />
        </div>
        <div className={styles.consulatationMode}>
          <div className={styles.flexElement}>
            <p>
              <b>Consultation Mode</b>
            </p>
            <p>Verbal</p>
          </div>
          <hr />
        </div>
        <div className={styles.consulatationMedium}>
          <div className={styles.flexElement}>
            <p>
              <b>Consultation Medium</b>
            </p>
            <p>{medium}</p>
          </div>
          <hr />
        </div>
        <div className={styles.consulatationPlatform}>{platformCode}</div>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className={styles.button}
            style={{
              display: "inline-block",
              marginRight: "4px",
            }}
          >
            {backButtonCode}
          </div>
          <div
            className={styles.button}
            style={{
              display: "inline-block",
              marginLeft: "4px",
            }}
          >
            {buttonCode}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerbalReport;
