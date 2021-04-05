import React from "react";

const Contact = () => {
  //l-0,ml-19
  return (
    <div className="my-contact">
      <div className="container">
        <div className="my-contact-content">
          <div className="row">
            <div className="col-sm-12 col-md-5">
              <div className="contact-text text-end">
                <h1>Get Helpful Tips and Info</h1>
                <p>from our newletters!</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-7">
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
