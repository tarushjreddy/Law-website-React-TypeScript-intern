import React from "react";

const ServicesBusinessTwo = () => {
  return (
    <div className="service-col-text service-col-con-6">
      <h1>Business Services</h1>
      <img src="media/images/Business-Services2.jpg" alt="" />
      <p>
        {" "}
        Sociis facilisi praesent posuere ut. Vehicula pulvinar etiam
        pellentesque risus adipiscing risus nunc, ullamcorper suspendisse. Ac
        sit habitant id odio faucibus. Urna scelerisque non dui nunc. Volutpat
        nec. Nulla est suspendisse nunc odio pellentesque at aliquam.
      </p>

      <div className="service-btn">
        <div className="my-button">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/services">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesBusinessTwo;
