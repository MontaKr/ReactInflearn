import React from "react";
import "../navi.css";
import NaviText from "./NaviText";

const text = [
  {
    text: "강의"
  },
  {
    text: "로드맵"
  },
  {
    text: "멘토링"
  },
  {
    text: "커뮤니티"
  },
  {
    text: "인프런"
  },
];

function NaviTextList(props) {
  return (
    <div id="NaviTextList">
      {text.map((text) => {
          return (
              <NaviText text={text.text}/>
          );
      })}
    </div>
  );
}

export default NaviTextList;