import React, { useEffect, useState } from "react";

import "./Row.css";
function Row() {
  return (
    <div className="App">
      {/* <p>this iis an example</p> */}
      <h3 className="omen">hello</h3>
      <div className={`row__posters`}>
        <img src="./1.png" alt={"alt"} className="row__poster"></img>
      </div>
    </div>
  );
}
export default Row;
