import React from "react";
import "../section2.css"
import ComponentsMiddle from "./ComponentsMiddle";

const text = [
  {
    text : "디자인 패턴 입문"
  },
  {
    text : "CRM 마케팅"
  },
  {
    text : "자동차 SW 커리어"
  },
  {
    text : "DevsOps"
  },
  {
    text : "Top 50 👑"
  },
  {
    text : "지식공유신청"
  },
  {
    text : "신규 강의 🎁"
  },
  {
    text : "왕초보 모여라 😎"
  }
]

function ComponentsMiddleList(props) {
  return (
      <div id="ComponentsMiddleList">
          {text.map((text) => {
              return (
                  <ComponentsMiddle text={text.text}/>
              );
          })}
      </div>
  );
}

export default ComponentsMiddleList;