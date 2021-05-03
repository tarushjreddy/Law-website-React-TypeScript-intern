import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./linklist.module.scss";
import ConfirmOut from "./components/ConfirmOut";
import SuccessOut from "./components/SuccessOut";

interface LinkListViewProps {
  page: string;
  logoutHandler: () => void;
  dashboardSender: () => void;
  profileSender: () => void;
  handleClose: () => void;
  show: boolean;
  confirmLogout: () => void;
  showSuccess: boolean;
  isProfileUpdated: boolean;
}

const LinkListView: React.FC<LinkListViewProps> = ({
  page,
  logoutHandler,
  dashboardSender,
  profileSender,
  handleClose,
  show,
  confirmLogout,
  showSuccess,
  isProfileUpdated,
}) => {
  console.log("isProfileUpdated", isProfileUpdated);
  const SIDE_BAR_LINKS = [
    {
      name: "Home Page",
      link: "",
    },
    {
      name: "Sing Out",
      link: "settings",
    },
    {
      name: "My Account",
      link: "profile",
    },
    {
      name: "My Services",
      link: "services",
    },
    {
      name: "Cases",
      link: "cases",
    },
    {
      name: "Appointments",
      link: "appointments",
    },
    {
      name: "Contracts",
      link: "contracts",
    },
    {
      name: "Wallet",
      link: "wallet",
    },
    {
      name: "Settings",
      link: "settings",
    },
  ];

  return (
    <div className={styles["linklistContainer"]}>
      <div
        style={{ textAlign: "left", fontSize: "1.6em" }}
        className="px-3 py-2 mt-2"
      >
        <span className="my-1">Dashboard</span>
      </div>
      {SIDE_BAR_LINKS.map((value, index) => {
        return (
          <Link
            className={`btn px-3 py-2 my-2 ${
              styles[page === value.link ? "selectedLink" : "dashLink"]
            }`}
            key={index}
            to={`/dashboard/${value.link}`}
          >
            <span className="my-1">{value.name}</span>
          </Link>
        );
      })}

      <span className="my-1">Sign Out</span>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {!showSuccess ? (
          <ConfirmOut confirmLogout={confirmLogout} handleClose={handleClose} />
        ) : (
          <SuccessOut handleClose={handleClose} />
        )}
      </Modal>
      <div
        className={`btn px-3 py-2 ${styles["dashLink"]}`}
        onClick={logoutHandler}
      >
        <span className="my-1">Sign Out</span>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {!showSuccess ? (
          <ConfirmOut confirmLogout={confirmLogout} handleClose={handleClose} />
        ) : (
          <SuccessOut handleClose={handleClose} />
        )}
      </Modal>
    </div>
  );
};

export default LinkListView;
