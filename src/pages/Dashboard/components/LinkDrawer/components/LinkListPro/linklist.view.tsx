import React from "react";
import { Modal, Button } from "react-bootstrap";
import { Layout, Menu, Breadcrumb } from "antd";

import ConfirmOut from "./components/ConfirmOut";
import SuccessOut from "./components/SuccessOut";

import "antd/dist/antd.css";
import "./linklistpro.scss";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

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
const LinkListPro: React.FC<LinkListViewProps> = ({
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
  const SIDE_BAR_LINKS = [
    {
      name: "Home Page",
      link: "",
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
    { name: "SignOut", link: "signOut" },
  ];

  return (
    <div>
      <Layout
        style={{
          width: "250px",
          backgroundColor: "white",
          height: "100vh",
        }}
      >
        <Sider
          trigger={null}
          style={{ width: "250px", backgroundColor: "white" }}
        >
          <div className="logo" style={{ marginTop: "50px" }} />
          <h6 style={{ textAlign: "center" }}> Dashboard</h6>
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ width: "250px", backgroundColor: "white" }}
          >
            {" "}
            {SIDE_BAR_LINKS.map((posts, Key) => (
              <Menu.Item key={Key} style={{ width: "250px" }}>
                <Link to={`/dashboard/${posts.link}`} />
                {posts.name}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        {/* <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {!showSuccess ? (
            <ConfirmOut
              confirmLogout={confirmLogout}
              handleClose={handleClose}
            />
          ) : (
            <SuccessOut handleClose={handleClose} />
          )}
        </Modal>
        <div className={`btn px-3 py-2 `} onClick={logoutHandler}>
          <span className="my-1">Sign Out</span>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          {!showSuccess ? (
            <ConfirmOut
              confirmLogout={confirmLogout}
              handleClose={handleClose}
            />
          ) : (
            <SuccessOut handleClose={handleClose} />
          )}
        </Modal> */}
      </Layout>
      this
    </div>
  );
};

export default LinkListPro;
