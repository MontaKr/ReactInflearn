import React from "react";
import "./lectureetc.css";

function NaviIcon (props) {
  return (
    <div id="NaviIcon">
      <img src={props.image} 
      style={{width:"20px"}} 
      onMouseOver={({target})=>target.style.color="white"}
      onMouseOut={({target})=>target.style.color="black"}/>
    </div>
  );
}

export default NaviIcon;
