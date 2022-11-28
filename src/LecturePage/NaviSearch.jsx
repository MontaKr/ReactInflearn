import React from 'react';
import "./lectureetc.css";
import lens from "./images/zoom-lens.png";

function NaviSearch() {
  return (
    <div>
      <div id="NaviSearch">
        <input id="NaviSearchBox" type="text" />
        <img src={lens} id="NaviZoomLens" />
      </div>
    </div>
  )
}


export default NaviSearch;