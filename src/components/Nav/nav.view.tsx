import React from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
import SearchIcon from "@material-ui/icons/Search";
// import { useScrollSection } from "react-scroll-section";

interface NavViewProps {
  isLoginned: boolean;
  scrolled: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch: boolean;
  setShowSearch1: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch1: boolean;
  name: string;
  lang: string;
}

const NavView: React.FC<NavViewProps> = ({
  isLoginned,
  scrolled,
  setShowSearch,
  showSearch,
  setShowSearch1,
  showSearch1,
  name,
  lang,
}) => {
  return (
    <div className="my-nav-section">
      <div className="my-nav-elements">
        <div className="top-nav-info container-fluid">
          <div className="top-nav-info-left float-start" id="nav_mainprt">
            <p>
              King Abdullah Road, Riyadh <span>|</span>{" "}
              <a href="mailto:info@almuehi.com">info@almuehi.com</a>
            </p>
          </div>
          <div className="top-nav-info-left float-start" id="nav_mainprt1">
            <p>
              King Abdullah Road, Riyadh
              <br />
              <a href="mailto:info@almuehi.com">info@almuehi.com</a>
            </p>
          </div>
          <div
            className="top-nav-info-left right float-end"
            style={{
              position: "relative",
              zIndex: 200,
              marginRight: "20px",
            }}
          >
            <p>
              {isLoginned ? (
                <Link to="/dashboard">My Account</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}

              <span> | </span>

              <Link to="/help">Help</Link>

              {lang === "En" && <span> | </span>}
            </p>
          </div>
        </div>
        <Navbar
          collapseOnSelect
          expand="lg"
          className={`navbar-light bg-light my-almuehi-logo container-fluid ${
            scrolled ? "affix my-shring" : ""
          }`}
        >
          {/* // marginTop: "1.6em", */}
          <div>
            <Link
              className="link_provider"
              style={{
                display: "inherit",
              }}
              to="/"
            >
              <div
                style={{
                  marginTop: "20px",
                  margin: "0px",
                  padding: "0px",
                  display: showSearch1 ? "none" : "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <div>
                  <img
                    src="/media/images/almuehi-logo.png"
                    className="pro_image_one"
                    alt="Al-Muehi"
                  />
                </div>
                <div className="text-pro" style={{ marginLeft: "10px" }}>
                  <h2 className="top-head">
                    Dr. Abdullah Bin Sudan Almuehi Group
                    <br /> Law firm, consulting &amp; Legal Legitimacy
                  </h2>
                  <p className="top-head"></p>
                </div>
              </div>
            </Link>
          </div>
          <div>
            <div
              className="fluid-container"
              style={{
                display: "flex",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Navbar.Toggle
                  aria-controls="responsive-navbar-nav"
                  onClick={() => setShowSearch1(!showSearch1)}
                />

                <Navbar.Collapse
                  className="my-menu-items"
                  id="navbarTogglerDemo02"
                  style={{ marginTop: "10px" }}
                >
                  <ul
                    className="navbar-nav ml-auto ms-auto"
                    id="nav_pro_max"
                    style={{}}
                  >
                    <li
                      className="nav-item"

                      // onClick={homeSection.onClick}
                      // className={`nav-item ${homeSection.selected ? "active" : ""}`}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/"
                        activeClassName="inactive"
                      >
                        Home <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li
                      // className={`nav-item ${
                      //   aboutSection.selected ? "active" : ""
                      // }`}
                      onClick={() => {
                        // aboutSection.onClick();
                      }}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/#AboutUs"
                        activeClassName="inactive"
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li
                      // className={`nav-item ${
                      //   servicesSection.selected ? "active" : ""
                      // }`}
                      className="nav-item"
                      // onClick={servicesSection.onClick}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/services"
                        activeClassName="active"
                      >
                        Our Services
                      </NavLink>
                    </li>
                    <li
                    // className={`nav-item ${
                    // adviceSection.selected ? "active" : ""
                    // }`}
                    // onClick={adviceSection.onClick}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/advice"
                        activeClassName="active"
                      >
                        Attorney Advice
                      </NavLink>
                    </li>
                    <li
                    // className={`nav-item ${
                    //   portfolioSection.selected ? "active" : ""
                    // }`}
                    // onClick={portfolioSection.onClick}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/#whyUsSection"
                        activeClassName="inactive"
                      >
                        Why Us?
                      </NavLink>
                    </li>
                    <li
                      className="nav-item"
                      // className={`nav-item ${
                      //   contactSection.selected ? "active" : ""
                      // }`}
                      // onClick={contactSection.onClick}
                    >
                      <NavLink
                        className="nav-link"
                        exact
                        to="/contact"
                        activeClassName="active"
                      >
                        Contact Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      {lang === "ar" && (
                        <Button
                          className="nav-link"
                          variant="custom"
                          style={{
                            backgroundColor: "transparent",
                            padding: "0px",
                            marginBottom: "10px",
                            height: "30px",
                            marginRight: "10px",
                            paddingRight: "0.39rem",
                            paddingLeft: "0.39rem",
                            color: "#dedede",
                          }}
                          onClick={() => {
                            localStorage.setItem("lang", "en");
                            window.location.reload();
                          }}
                        >
                          En
                        </Button>
                      )}
                    </li>
                    <li className="nav-item">
                      {lang === "en" && (
                        <Button
                          className="nav-link"
                          variant="custom"
                          style={{
                            backgroundColor: "transparent",
                            padding: "0px",
                            marginBottom: "10px",
                            height: "30px",
                            marginRight: "10px",
                            paddingRight: "0.39rem",
                            paddingLeft: "0.39rem",
                            color: "#dedede",
                          }}
                          onClick={() => {
                            localStorage.setItem("lang", "ar");
                            window.location.reload();
                          }}
                        >
                          <p
                            style={{
                              marginTop: "7.5px",
                              padding: "0.1rem",
                              color: "white",
                            }}
                          >
                            AR
                          </p>
                        </Button>
                      )}
                    </li>
                    <li className="nav-item position-relative active">
                      <Button
                        variant="custom"
                        id="main_buttonone"
                        style={{
                          display: showSearch ? "none" : "flex",
                          backgroundColor: "transparent",
                          padding: "0px",
                          marginBottom: "10px",
                          height: "30px",
                          paddingRight: "0.1rem",
                          paddingLeft: "0.1rem",

                          marginRight: "4px",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <SearchIcon />
                        {/* <i
                          className="material-icons my-search-func"
                          aria-hidden="true"
                          style={{
                            margin: "0px",
                            padding: "0px",
                            color: "white",
                          }}
                          onClick={() => setShowSearch(!showSearch)}
                        >
                          search
                        </i> */}
                      </Button>
                      <li>
                        <li
                          className="nav-item"
                          style={{
                            display: showSearch ? "flex" : "none",
                          }}
                        >
                          <input
                            type="text"
                            placeholder="Search"
                            id="main_button"
                            style={{
                              height: "40px",
                              width: "200px",

                              outline: "none",
                              marginRight: "10px",
                              border: "none",
                              padding: "10px",
                              borderRadius: "15px",
                            }}
                          />
                          <Button
                            variant="custom"
                            style={{ height: "30px" }}
                            type="button"
                          >
                            Search
                          </Button>
                          <Button
                            variant="custom"
                            type="button"
                            id="main_button"
                            style={{
                              marginRight: "10px",
                              height: "30px",
                            }}
                            onClick={() => setShowSearch(!showSearch)}
                          >
                            Close
                          </Button>
                        </li>
                      </li>
                    </li>
                    <li>
                      <Button
                        variant="custom"
                        className="nav-link"
                        id="main_button"
                        style={{
                          backgroundColor: "transparent",
                          padding: "0px",
                          height: "30px",
                          color: "#dedede",
                        }}
                        onClick={() => {
                          localStorage.setItem("lang", "en");
                          window.location.reload();
                        }}
                      >
                        <a
                          className="nav-link"
                          href="tel:920008434"
                          style={{
                            color: "white",
                          }}
                        >
                          920008434
                        </a>
                      </Button>
                    </li>
                  </ul>
                </Navbar.Collapse>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavView;
