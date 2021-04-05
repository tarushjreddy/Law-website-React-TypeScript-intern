import React from "react";

const ServicesBusiness = () => {
  return (
    <div className="service-col-text service-col-con-4">
      <h1>Business Services</h1>
      <img src="media/images/Business-Services.jpg" alt="" />
      <p>
        Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat
        wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean
        fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci,
        sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
        facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor
        neque egestas augue, eu vulputate magna eros eu erat.
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

export default ServicesBusiness;
