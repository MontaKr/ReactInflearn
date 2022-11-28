import React from 'react'
import {FaInstagram} from 'react-icons/fa';

function FooterBottomRightCard(props) {
  return (
    <div id='FooterBottomRightCard'>
      {
        props.products.contents
      }
    </div>
  )
}

export default FooterBottomRightCard;
