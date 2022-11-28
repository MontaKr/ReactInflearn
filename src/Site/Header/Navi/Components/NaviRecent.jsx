import React from "react";
import "../navi.css";
import pencil from "./images/pencil.png";
import { BrowserRouter as Router, Link } from "react-router-dom";


function NaviRecent (props) {
  return (
    <Link to="/login" style={{textDecoration : 'none'}}>
      <button id="NaviRecent">
        <img src={pencil} id="NaviRecentImage"/>
        <span id="NaviRecentText">최근강의</span>
      </button>
    </Link>
  );
}

export default NaviRecent;
