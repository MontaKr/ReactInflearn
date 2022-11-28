import React from 'react';
import "./section5.css";
import Section5Top from './Components/Section5Top';
import Section5Bottom from './Components/Section5Bottom';
import Section5Star from './Components/Section5Star';
import { useState } from 'react';

function Section5({Inproducts, setInproducts, InCart, setInCart}) {

  return (
    <div id='Section5'>
      <Section5Top />
      <Section5Bottom Inproducts={Inproducts} setInproducts={setInproducts} InCart={InCart} setInCart={setInCart}/>
      {/* <Section5Star /> */}
    </div>
  )
}

export default Section5;
