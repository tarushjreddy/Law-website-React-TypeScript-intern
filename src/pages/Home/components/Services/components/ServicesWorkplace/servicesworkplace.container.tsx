import React from "react";

const ServicesWorkplace = () => {
  return (
    <div className="service-col-text service-col-con-5">
      <h1>Workplace Benefit</h1>
      <img src="media/images/Workplace-benefit.jpg" alt="" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames lacus
        senectus enim ultricies nec. Sociis facilisi praesent posuere ut.
        Vehicula pulvinar etiam pellentesque risus adipiscing risus nunc,
        ullamcorper suspendisse. Ac sit habitant id odio faucibus. Urna
        scelerisque non dui nunc. Volutpat nec. <br /> <br /> Nulla est
        suspendisse nunc odio pellentesque at aliquam. In quisque suspendisse
        sed bibendum arcu neque ornare molestie imperdiet. Adipiscing ut mi
        aenean in nec eu.
      </p>

      <div className="service-btn">
        <div className="my-button">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesWorkplace;
