import React from 'react';
import "../section4.css";
import {FaPlay} from 'react-icons/fa';

function Card(props) {
  return (
    <div id='Section4Card'>
      <img src={props.products.image} id="Section4Img" />
        <div id='Section4Right'>
          <p id='Section4Title'>
            {props.products.title}
          </p>
          <div id='Section4CardBottom'>
            <div id='Section4CardBottomLeft'>
              <div id='Section4CardBottomLeftTop'>
                <p id='Section4Text1'>
                  {props.products.text1}
                </p>
                <span id='Section4Line'></span>
                <p id='Section4Text2'>
                  {props.products.text2}
                </p>
              </div>
              <div id='Section4CardBottomLeftBottom'>
                <progress class="progress" value={props.products.rate} max="100" id='Section4Pro'></progress>
              </div>
            </div>  
            <div id='Section4Green'>
              <span id='Section4GreenText'>
                바로학습  
              </span>
              <FaPlay size='12'/>
            </div>
          </div>  
        </div>  
    </div>
  )
}

export default Card;
