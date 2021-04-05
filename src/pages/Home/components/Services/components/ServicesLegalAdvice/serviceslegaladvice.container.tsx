import React from "react";

const ServicesLegalAdvice = () => {
  return (
    <div className="service-col-text service-col-con-1">
      <h1>Legal Advice</h1>
      <img src="media/images/Legal-Advice.jpg" alt="" />
      <p>
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
        ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
        egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend
        leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum
        erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.
        <br />
        <br /> Aenean fermentum, elit eget tincidunt condimentum, eros ipsum
        rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis
        pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus
        faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat.
        Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor,
        facilisis luctus, metus
      </p>

      <div className="service-btn">
        <div className="my-button">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="/advice">Learn More</a>
        </div>
      </div>
    </div>
  );
};

export default ServicesLegalAdvice;
