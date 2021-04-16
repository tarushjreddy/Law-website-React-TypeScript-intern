import React, { useState } from "react";
import whatsApp from "./whatsapp-icon 1.png";
import "./con.scss";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Contact = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //l-0,ml-19
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
                <h6 style={{ fontWeight: "bold", marginTop: "15px" }}>
                  Chat with us.
                </h6>
                <img
                  src={whatsApp}
                  className="pro_image"
                  alt=""
                  onClick={handleShow}
                />
                <Modal show={show} onHide={handleClose} className="modal_css">
                  <Modal.Header closeButton>
                    <Modal.Title>Contact through WhatsApp </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                  </Modal.Body>
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
