import React from 'react';
import "../section7.css";
import {FaArrowRight} from 'react-icons/fa';

function Section7Bottom(props) {
  return (
    <div id='Section7Bottom'>
      <div id='Section7BottomTitle'>
        {props.products.title}
      </div>
      <div id='Section7BottomContent'>
        {props.products.contentFirst}
        <br />
        {props.products.contentSecond}
      </div>
      <div id='Section7BottomGreen'>
        {props.products.green}
        <span id='Section7Arrow'>
          <FaArrowRight size='15' />
        </span>
      </div>
    </div>
  )
}

export default Section7Bottom;
