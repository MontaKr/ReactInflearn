import React from 'react';
import "../section7.css";
import Section7TopBottom from './Section7TopBottom';
import Section7TopTop from './Section7TopTop';

function Section7Top() {
  return (
    <div id='Section7Top'>
      <Section7TopTop />
      <Section7TopBottom />
    </div>
  )
}

export default Section7Top;
