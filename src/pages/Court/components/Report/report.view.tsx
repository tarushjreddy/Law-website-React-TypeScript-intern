import React from "react";

import styles from "./report.module.scss";
import { FormDataInterface } from "../../court.model";

interface ReportProps {
  prevHandler: () => void;
  formData: FormDataInterface;
  submitHandler: () => void;
}

const Report: React.FC<ReportProps> = ({
  prevHandler,
  formData,
  submitHandler,
}) => {
  return (
    <div className={styles["bigContainer"]}>
      <div className={styles["container"]}>
        <hr />
        <div className={styles["profile"]}>
          <div className={styles["headerFlex"]}>
            <p>
              <b>Profile</b>
            </p>
          </div>
          <div className={styles["subheader"]}>
            <div className={styles["subElements"]}>
              <div className={styles["subElement"]}>
                <p>Name</p>
                <p>{formData.information.name}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Mobile Number</p>
                <p>{formData.information.mobile}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>ID Number</p>
                <p>{formData.information.ID}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Address</p>
                <p>{formData.information.address}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>CaseType</p>
                <p>{formData.caseType.caseTypeName}</p>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div className={styles["domain"]}>
          <div className={styles["flexElement"]}>
            <p>
              <b>Case Details</b>
            </p>
          </div>
          <div className={styles["subheader"]}>
            <div className={styles["subElements"]}>
              <div className={styles["subElement"]}>
                <p>Case Type</p>
                <p>{formData.caseDetails.typeofCase}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Filling Status</p>
                <p>{formData.caseDetails.fillingStatus}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Court Details</p>
                <p>{formData.caseDetails.courtDetail}</p>
              </div>
              <div className={styles["subElement"]}>
                <p>Defendent Details</p>
                <p>{formData.caseDetails.defendentDetail}</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        {formData.consultionType.type === "Online" && (
          <div className={styles["domain"]}>
            <div className={styles["flexElement"]}>
              <p>
                <b>Consultation Details</b>
              </p>
            </div>
            <div className={styles["subheader"]}>
              <div className={styles["subElements"]}>
                <div className={styles["subElement"]}>
                  <p>Consultation Type</p>
                  <p>{formData.consultionType.type}</p>
                </div>
                <div className={styles["subElement"]}>
                  <p>Consultation Platform</p>
                  <p>{formData.onlinePlatform.platformName}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {formData.consultionType.type === "Offline" && (
          <div className={styles["domain"]}>
            <div className={styles["flexElement"]}>
              <p>
                <b>Consultation Details</b>
              </p>
            </div>
            <div className={styles["subheader"]}>
              <div className={styles["subElements"]}>
                <div className={styles["subElement"]}>
                  <p>Consultation Type</p>
                  <p>{formData.consultionType.type}</p>
                </div>
                <div className={styles["subElement"]}>
                  <p>Consultation Location</p>
                  <p>{formData.offlinePlatform.type}</p>
                </div>
                <div className={styles["subElement"]}>
                  <p>Address</p>
                  <p>{formData.offlinePlatform.address}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <hr />

        <div
          className="col-12 row justify-content-around align-content-center"
          style={{ height: "4em" }}
        >
          <div style={{ width: "auto" }}>
            <button className="btn btn-custom" onClick={prevHandler}>
              Previous
            </button>
          </div>
          <div style={{ width: "auto" }}>
            <button className="btn btn-custom" onClick={submitHandler}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
