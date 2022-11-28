import React from 'react';
import "./lectureetc.css";
import pencil from "./images/pencil.png";

function NaviRecent() {
  return (
    <div>
      <button id="NaviRecent">
        <img src={pencil} id="NaviRecentImage"/>
        <span id="NaviRecentText">최근강의</span>
      </button>
    </div>
  )
}

export default NaviRecent;
