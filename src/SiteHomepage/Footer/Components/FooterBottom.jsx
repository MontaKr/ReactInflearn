import React from 'react'
import "../footer.css";
import FooterBottomLeft from './FooterBottomLeft';
import FooterBottomRight from './FooterBottomRight';

function FooterBottom() {
  return (
    <div id='FooterBottom'>
      <FooterBottomLeft />
      <FooterBottomRight />
    </div>
  )
}

export default FooterBottom;
