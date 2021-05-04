import React, { useState, useEffect } from "react";
import whatsApp from "./whatsapp-icon 1.png";
import "./contactus.scss";
import { Link, NavLink } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { WhatsAppDetails } from "../../../../services/apis";

const Contact = () => {
  const [posts, setposts] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //l-0,ml-19
  useEffect(() => {
    async function getData() {
      const data = await WhatsAppDetails();

      let dataone = data.data;
      console.log(typeof dataone);
      let datatwo = Object.values(dataone);
      let phonenumber = datatwo[0];
      setposts(`${phonenumber}`);
    }

    getData();
  }, []);
  console.log(posts);
  return (
    <div className="my-contact">
      <div className="container">
        <div className="my-contact-content">
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",

                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  marginLeft: "30px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                {" "}
                <a
                  href={`https://wa.me/${posts}`}
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <h6 style={{ fontWeight: "bold", marginTop: "15px" }}>
                    Chat with us.
                  </h6>
                  <img src={whatsApp} className="pro_image" alt="" />
                </a>
                {/* {posts.map((data, i) => (
                  <div>{data.phone_number}</div>
                ))} */}
                <Modal show={show} onHide={handleClose} className="modal_css">
                  <Modal.Header closeButton>
                    <Modal.Title>Contact through WhatsApp </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>Connect To us via WhatsApp!!!</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Open Whats App web
                    </Button>
                  </Modal.Footer>
                </Modal>
              </div>
              <div className="contact-text text-end">
                <h1>Get Helpful Tips and Info</h1>
                <p>from our newletters!</p>
              </div>
            </div>
            <div>
              <div className="contact-input">
                <form>
                  <img src="media/images/email-icon.png" alt="email" />
                  <input
                    type="email"
                    className="con-email"
                    placeholder="example@email.com"
                  />

                  <button
                    type="submit"
                    style={
                      localStorage.getItem("lang") === "ar"
                        ? { left: 0 }
                        : { right: 0 }
                    }
                    className="btn btn-icon d-flex align-items-center justify-content-center me-3"
                  >
                    <i className="material-icons con-send" aria-hidden="true">
                      send
                    </i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
