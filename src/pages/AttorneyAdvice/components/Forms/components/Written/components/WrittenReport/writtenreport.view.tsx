import React from "react";
import { Button } from "react-bootstrap";
import { formatDate, formatTime } from "../../../../../../../../utils";
import { FormStateDataTypes } from "../../written.view";

import styles from "./writtenreport.module.scss";

interface WrittenReportProps {
  data: FormStateDataTypes;
  backFunction: () => void;
  confirmHandler: () => void;
}

const WrittenReport: React.FC<WrittenReportProps> = ({
  backFunction,
  data,
  confirmHandler,
}) => {
  //const { date, fromTime, toTime } = data.slotData;

  return (
    <div className={styles["bigContainer"]}>
      <div className={styles["container"]}>
        <hr />
        <div className={styles["profile"]}>
          <div className={styles["headerFlex"]}>
            <p>
              <b>Profile</b>
            </p>
            <p>{data.entityData.entity}</p>
          </div>
          <div className={styles["subheader"]}>
            <div className={styles["subElements"]}>
              <div className={styles["subElement"]}>
                <p>Name</p>
                <p>{data.entityData.name}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Mobile Number</p>
                <p>{data.entityData.phone}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>ID Number</p>
                <p>{data.entityData.id}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Address</p>
                <p>{data.entityData.address}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>City</p>
                <p>{data.entityData.city}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles["domain"]}>
          <div className={styles["flexElement"]}>
            <p>
              <b>Legal Advice Domain</b>
            </p>
            <p>{data.sectorData.sector}</p>
          </div>
          <hr />
        </div>
        {/*<div className={styles["slot"]}>
                  <div className={styles["flexElement"]}>
                    <p>
                      <b>Scheduled slot</b>
                    </p>
                    <p>
                      {date && formatDate(date)}, {fromTime && formatTime(fromTime)} to
                      {toTime && formatTime(toTime)}
                    </p>
                  </div>
                  <hr />
                </div>*/}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <div
            className={styles["button"]}
            style={{
              display: "inline-block",
              marginRight: "4px",
            }}
          >
            <Button
              variant="secondary"
              onClick={backFunction}
              style={{
                backgroundColor: "#242f40",
                borderRadius: "4px",
                marginRight: "4px",
                paddingRight: "28px",
                paddingLeft: "28px",
              }}
            >
              BACK
            </Button>
          </div>
          <div
            className={styles["button"]}
            style={{
              display: "inline-block",
              marginLeft: "4px",
            }}
          >
            <Button
              variant="secondary"
              style={{
                backgroundColor: "#242f40",
                borderRadius: "4px",
                marginRight: "4px",
              }}
              onClick={confirmHandler}
            >
              CONFIRM
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrittenReport;
