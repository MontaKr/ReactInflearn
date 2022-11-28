import React from 'react';
import "../footer.css";

function FooterTopCard(props) {
  return (
    <div>
      <div id='FooterTopCardTitle'>
        {props.products.title}
      </div>
      <div id='FooterCardBody'>
        <div>
          {props.products.body1}  
        </div>
        <div>
          {props.products.body2}
        </div>
        <div>
          {props.products.body3}
        </div>
        <div>
          {props.products.body4}
        </div>
        <div>
          {props.products.body5}
        </div>
        <div>
          {props.products.body6}
        </div>         
      </div>
    </div>
  )
}

export default FooterTopCard;