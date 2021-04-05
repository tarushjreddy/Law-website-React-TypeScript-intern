import React from "react";

import styles from "./headerwithimage.module.scss";

interface HeaderWithImageViewProps {
  title: string;
  image: string;
}

const HeaderWithImageView: React.FC<HeaderWithImageViewProps> = ({
  title,
  image,
}) => {
  return (
    <div
      className={`${styles["clip-image-container"]} w-100 test-overlay`}
      style={{
        height: "55vh",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
      }}
    >
      <div
        className={styles["clip-image-content2"]}
        style={
          localStorage.getItem("lang") === "ar" ? { right: 0 } : { left: 0 }
        }
      >
        <div
          className="sub-heading d-flex align-items-center"
          style={{ fontSize: "40px", color: "white", marginLeft: "0px" }}
        >
          <span className={styles["line"]}></span>
          <span>
            <b>&nbsp;&nbsp; {title}</b>
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeaderWithImageView;
