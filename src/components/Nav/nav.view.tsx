import React from "react";
import "./nav.scss";
import { Link, NavLink } from "react-router-dom";
import { Button, Navbar } from "react-bootstrap";
// import { useScrollSection } from "react-scroll-section";

interface NavViewProps {
  isLoginned: boolean;
  scrolled: boolean;
  setShowSearch: React.Dispatch<React.SetStateAction<boolean>>;
  showSearch: boolean;
  name: string;
  lang: string;
}

const NavView: React.FC<NavViewProps> = ({
  isLoginned,
  scrolled,
  setShowSearch,
  showSearch,
  name,
  lang,
}) => {
  return (
    <div className="my-nav-section">
      <div className="my-nav-elements">
        <div
          className="top-nav-info container-fluid"
          style={{ marginTop: "0.09%", height: "6em" }}
        >
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
            style={{ position: "relative", zIndex: 100, marginRight: "1em" }}
          >
            <p>
              {isLoginned ? (
                <Link to="/dashboard">My Account</Link>
              ) : (
                <Link to="/login">Login</Link>
              )}
              <span> | </span>
              <Link to="/help">Help</Link>
              {isLoginned && <span> | {name}</span>}
            </p>
          </div>
        </div>

        <Navbar
          collapseOnSelect
          expand="lg"
          className={`navbar-light bg-light my-almuehi-logo ${
            scrolled ? "affix my-shring" : ""
          }`}
        >
          <div
            className="container-fluid"
            style={{
              display: "flex",

              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <div>
              <Link style={{ display: "inherit" }} to="/">
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <img
                      src="/media/images/almuehi-logo.png"
                      className="pro_image"
                      alt="Al-Muehi"
                    />
                  </div>
                  <div
                    className="text-pro"
                    style={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    <h2 className="top-head">
                      Dr. Abdullah Bin Sudan Almuehi Group
                    </h2>
                    <p className="top-head">
                      Law firm, consulting &amp; Legal Legitimacy
                    </p>
                  </div>
                </div>
              </Link>
            </div>
            <div>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse
                className="my-menu-items"
                id="navbarTogglerDemo02"
              >
                <ul
                  className="navbar-nav ml-auto ms-auto"
                  id="nav_pro_max"
                  style={{
                    height: "50%",

                    padding: "40px",
                  }}
                >
                  <li className="nav-item">
                    {lang === "en" && (
                      <Button
                        className="nav-link"
                        variant="custom"
                        style={{ padding: "10px", marginBottom: "10px" }}
                        onClick={() => {
                          localStorage.setItem("lang", "ar");
                          window.location.reload();
                        }}
                      >
                        Ar
                      </Button>
                    )}
                  </li>
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
                        style={{ padding: "10px" }}
                        onClick={() => {
                          localStorage.setItem("lang", "en");
                          window.location.reload();
                        }}
                      >
                        En
                      </Button>
                    )}
                  </li>
                  <li className="nav-item position-relative active">
                    <i
                      className="material-icons my-search-func"
                      aria-hidden="true"
                      onClick={() => setShowSearch(!showSearch)}
                    >
                      search
                    </i>
                    <div
                      style={{
                        display: showSearch ? "flex" : "none",

                        height: "150px",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "10px",
                      }}
                    >
                      <input
                        type="text"
                        placeholder=""
                        style={{
                          height: "40px",
                          width: "200px",
                          border: "none",
                          outline: "none",
                          borderRadius: "15px",
                          marginRight: "10px",
                          padding: "10px",
                        }}
                      />
                      <Button variant="custom" type="button">
                        Search
                      </Button>
                    </div>
                  </li>

                  <Button
                    className="nav-link"
                    variant="custom"
                    style={{ padding: "5px" }}
                    onClick={() => {
                      localStorage.setItem("lang", "en");
                      window.location.reload();
                    }}
                  >
                    <a className="nav-link" href="tel:920008434">
                      920008434
                    </a>
                  </Button>
                </ul>
              </Navbar.Collapse>
            </div>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavView;
