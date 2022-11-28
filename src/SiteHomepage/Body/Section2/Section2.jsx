import React from "react";
import "./section2.css"
import ComponentsLeft from "./Components/ComponentsLeft";
import ComponentsMiddleList from "./Components/ComponentsMiddleList";
import ComponentsRight from "./Components/ComponentsRight";

function Section2 (props) {
  return (
    <div id="Section2">
      <ComponentsLeft />
      <ComponentsMiddleList />
      <ComponentsRight />
    </div>
  );
}

export default Section2;