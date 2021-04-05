import React from "react";
import { Button, Card, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import styles from "./home.module.scss";
import { SERVICES_LIST } from "../../../../constants";

const HomeView = () => {
  return (
    <div className={styles["dashboardHomeContainer"]}>
      <Card>
        <Card.Header className={styles["links"]}>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link as={Link} to={`/dashboard/`} href="#first">
                Dashboard
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#services" disabled>
                Services
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#subscriptions" disabled>
                Subscriptions
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#myRequests" disabled>
                My Requests
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <div>
            <h3 className="text-cent">Make an Appointment</h3>
            <div className="row justify-content-around mt-5">
              <Button
                variant="custom"
                as={Link}
                to="/advice"
                style={{ width: "inherit" }}
              >
                Attorney Advice
              </Button>
              <Button
                variant="custom"
                as={Link}
                to="/contract"
                style={{ width: "inherit" }}
              >
                Contract
              </Button>
            </div>
          </div>
          <hr />
          <div>
            <h3>News</h3>
            <div className="row justify-content-center">
              {[1, 2, 3].map((value, index) => {
                return (
                  <div key={index} className="col col-10 m-2">
                    <Card>
                      <Card.Header as="h5">New Article {value}</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Button variant="custom">View More</Button>
                      </Card.Body>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <hr />
          <div>
            <h3>Our Services</h3>
            <div
              className="row justify-content-around"
              style={{ margin: "3em 0", height: "10em" }}
            >
              {SERVICES_LIST.map((service, index) => {
                return (
                  <Button
                    key={index}
                    className="col col-3 m-2 row align-content-center justify-content-center"
                    variant="custom"
                    as={Link}
                    to={service.link}
                    style={{ display: "flex" }}
                  >
                    <span className="">{service.name}</span>
                  </Button>
                );
              })}
            </div>
          </div>
          <hr />
          <div>
            <h3>Educational Information</h3>
            <div className="row justify-content-center">
              {[1, 2, 3].map((value, index) => {
                return (
                  <div key={index} className="col col-10 m-2">
                    <Card className="text-center">
                      <Card.Header>Information {value}</Card.Header>
                      <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                          With supporting text below as a natural lead-in to
                          additional content.
                        </Card.Text>
                        <Button variant="custom">View More</Button>
                      </Card.Body>
                      <Card.Footer className="text-muted">
                        2 days ago
                      </Card.Footer>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default HomeView;
