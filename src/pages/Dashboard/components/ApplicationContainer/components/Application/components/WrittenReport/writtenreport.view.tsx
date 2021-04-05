import React from "react";

import styles from "./writtenreport.module.scss";
import SubElement from "./components/SubElement";

interface WrittenReportViewProps {
  entity: any;
  name: any;
  phone: any;
  ID: any;
  address: any;
  city: any;
  domain: any;
  date: any;
  fromTime: any;
  duration: any;
}

const WrittenReportView: React.FC<WrittenReportViewProps> = ({
  entity,
  name,
  phone,
  ID,
  address,
  city,
  domain,
  date,
  fromTime,
  duration,
}) => {
  return (
    <div className={styles["bigContainer"]}>
      <div className={styles["container"]}>
        <div className={styles["header"]}>
          <h3>Consultation Confirmed</h3>
        </div>
        <hr />
        <div className={styles["profile"]}>
          <div className={styles["headerFlex"]}>
            <p>
              <b>Profile</b>
            </p>
            <p>{entity}</p>
          </div>
          <div className={styles["subheader"]}>
            <div className={styles["subElements"]}>
              <SubElement label="Name" value={name} />
              <SubElement label="Mobile Number" value={phone} />
              <SubElement label="ID Number" value={ID} />
              <SubElement label="Address" value={address} />
              <SubElement label="City" value={city} />
            </div>
          </div>
          <hr />
        </div>
        <div className={styles["domain"]}>
          <div className={styles["flexElement"]}>
            <p>
              <b>Legal Advice Domain</b>
            </p>
            <p>{domain}</p>
          </div>
          <hr />
        </div>
        <div className={styles["slot"]}>
          <div className={styles["flexElement"]}>
            <p>
              <b>Scheduled slot</b>
            </p>
            <p>
              {date}, {fromTime} (duration - {duration} min)
            </p>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default WrittenReportView;
