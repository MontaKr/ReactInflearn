import React from "react";
import "../navi.css";
import { Link } from "react-router-dom";

function NaviText(props) {
  return (
    <>
      {props.text === '강의'?
      <Link to="/lecture" style={{textDecoration : 'none'}}>
        <div id="NaviText">
          <span>{props.text}</span>
        </div>
      </Link>
      :<div id="NaviText">
          <span>{props.text}</span>
        </div>}
    </>  
  );
}

export default NaviText;