import React from "react";
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
          <div className="top-nav-info-left float-start">
            <p>
              King Abdullah Road, Riyadh <span>|</span>{" "}
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
          <div className="container-fluid">
            <Link
              className="navbar-brand"
              style={{ display: "inherit" }}
              to="/"
            >
              <div className="header-logo">
                <img src="/media/images/almuehi-logo.png" alt="Al-Muehi" />
              </div>
              <div className="header-logo-text">
                <h2>Dr. Abdullah Bin Sudan Almuehi Group</h2>
                <h3>Law firm, consulting &amp; Legal Legitimacy</h3>
              </div>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="my-menu-items" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto ms-auto">
                <li className="nav-item">
                  {lang === "en" && (
                    <Button
                      className="nav-link"
                      variant="custom"
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
                    className="search-box"
                    style={{ display: showSearch ? "block" : "none" }}
                  >
                    <input type="text" placeholder="" />
                    <input type="button" value="Search" />
                  </div>
                </li>

                <li className="nav-item my-tel">
                  <a className="nav-link" href="tel:920008434">
                    920008434
                  </a>
                </li>
              </ul>
            </Navbar.Collapse>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default NavView;
