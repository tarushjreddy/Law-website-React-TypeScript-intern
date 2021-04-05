import React from "react";

const ServicesWillsTrusts = () => {
  return (
    <div className="service-col-text service-col-con-2">
      <h1>Wills &amp; Trusts</h1>
      <img src="media/images/Wills&Trusts.jpg" alt="" />
      <p>
        Fames lacus senectus enim ultricies nec. Sociis facilisi praesent
        posuere ut. Vehicula pulvinar etiam pellentesque risus adipiscing risus
        nunc, ullamcorper suspendisse. <br /> <br /> In quisque suspendisse sed
        bibendum arcu neque ornare molestie imperdiet. Adipiscing ut mi aenean
        in nec eu.
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

export default ServicesWillsTrusts;
