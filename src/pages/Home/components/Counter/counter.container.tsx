import React from "react";

const Counter = () => {
  return (
    <div className="my-counter">
      <div className="my-counter-bg">
        <div className="container">
          <div className="counter-spacer" />
          <div className="row justify-content-end">
            <div className="col-sm-12 col-md-6">
              <div className="counter-content">
                <div className="row">
                  <div className="col-6">
                    <div className="counter-con-element">
                      <h1>1200+</h1>
                      <p>Trusted Clients</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-con-element">
                      <h1>97%</h1>
                      <p>Successful Cases</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-con-element">
                      <h1>70+</h1>
                      <p>Years Of Experience</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="counter-con-element">
                      <h1>$1M</h1>
                      <p>Recovered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="counter-spacer" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
