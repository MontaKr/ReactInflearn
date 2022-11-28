import React from 'react';
import "../footer.css";
import FooterBottomLeftTop from './FooterBottomLeftTop';
import FooterBottomLeftBottom from './FooterBottomLeftBottom';

function FooterBottomLeft() {
  return (
    <div>
      <FooterBottomLeftTop />
      <FooterBottomLeftBottom />
    </div>
  )
}

export default FooterBottomLeft;
