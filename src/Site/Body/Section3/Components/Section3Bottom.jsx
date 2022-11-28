import React from 'react'
import "../section3.css";
import lens from "../../../Header/Navi/Components/images/zoom-lens.png"

function Section3Bottom() {
  return (
    <div>
      <input type="text" placeholder="배우고 싶은 지식을 입력해보세요." id='Section3BottomText'/>
      <img src={lens} id="Section3BottomImg" />
    </div>
  )
}

export default Section3Bottom