import React from "react";
import styles from "./documentsplash.module.scss";
import consultationImage from "../../../../../../Zytcode Assets/PNG files/Upload files tab.png";

const DocumentSplash = () => {
  return (
    <div className={styles["containerr"]}>
      {/* <div className={styles["ring"]}>
        <img src={consultationImage} alt="Upload files" />
      </div> */}
      <h1
        style={{
          textAlign: "center",
          padding: "5px",
          fontSize: "1.9rem",
        }}
      >
        Upload related documents
      </h1>
    </div>
  );
};

export default DocumentSplash;
