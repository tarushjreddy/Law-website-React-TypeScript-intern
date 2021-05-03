import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";

import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import "antd/dist/antd.css";
import "./linklistpro.scss";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
function LinkListPro() {
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
  ];

  return (
    <div>
      <Layout
        style={{
          width: "250px",
          // backgroundColor: "rgb(0,22,40)",
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
            <Menu.Item key={8} style={{ width: "250px" }}>
              {/* <Link to={`/dashboard/${posts.link}`} /> */}
              Sign Out
            </Menu.Item>
          </Menu>
        </Sider>
      </Layout>
    </div>
  );
}

export default LinkListPro;
//ant-layout ant-layout-has-sider
