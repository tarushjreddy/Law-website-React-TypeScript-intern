import React from "react";
// import { Section } from "react-scroll-section";

const Carousel = () => {
  return (
    <div id="about" className="my-whoweare">
      <div className="spacer-120" />
      <div className="whoweare-bd">
        <div className="container">
          <div className="my-hwr-content">
            <div className="my-hwr-row">
              <div className="row justify-content-start">
                <div className="col-md-7 col-xs-12">
                  <h3>Who we are</h3>
                  <h1>
                    We’re in this together. <br /> Your team and ours.
                  </h1>
                  <p>
                    When you are our client, you are part of our family. With
                    over 50 years of experience across the region, our original
                    values remain an integral part of our philosophy and
                    approach to client work. Lawyers are involved in many of the
                    largest and most complex transactions in the region. We are
                    perfectly placed to take you through.
                  </p>
                </div>
              </div>
              <div className="row justify-content-start">
                <div className="col-md-4 col-sm-12">
                  <div className="hwr-bottom-content">
                    <div className="hwr-bc-head">
                      <h2>Contact</h2>
                    </div>
                    <div className="hwr-bc-discription">
                      <div className="bc-dis-img">
                        <img src="media/images/contact.png" alt="" />
                      </div>
                      <p>
                        Get a contract drafted instan- taneously by our expert
                        artificail intelligence systems.{" "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 col-sm-12">
                  <div className="hwr-bottom-content">
                    <div className="hwr-bc-head">
                      <h2>Business Services</h2>
                    </div>
                    <div className="hwr-bc-discription bc-right">
                      <div className="bc-dis-img">
                        <img src="media/images/bs.png" alt="" />
                      </div>
                      <p>
                        Looking to establish local or foreign company, look no
                        further with new more branch
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
