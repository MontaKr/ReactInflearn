import React from "react";
import "../navi.css";
import lens from "./images/zoom-lens.png";

function NaviSearch (props) {
  return (
    <div id="NaviSearch">
      <input id="NaviSearchBox" type="text" />
      <img src={lens} id="NaviZoomLens" />
    </div>
  );
}

export default NaviSearch;