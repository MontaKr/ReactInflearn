import React from 'react'
import './section1.css';

function Section1Navi(props) {
  return (
    <div id='Section1NaviWrap'>
      <div id='Section1NaviIcon'>
        {props.item.icon}
      </div>
      <div id='Section1NaviText'>
        {props.item.text}
      </div>
    </div>
  )
}

export default Section1Navi;
