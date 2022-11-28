import React from "react";
import "../section2.css";
import next from "../Images/play-button.png"

function ComponentsLeft (props) {
  return (
    <div id="ComponentsLeft">
      <div id="ComponentsLeft1">
        1/10
      </div>
      <div id="ComponentsLeftRight1">
        {'<'}
      </div>
      <span id="ComponentsLeftRight2">
        <img src={next} id="next"/>  
      </span>
      <div id="ComponentsLeftRight3">
        {'>'}
      </div>
    </div>
  );
}

export default ComponentsLeft;